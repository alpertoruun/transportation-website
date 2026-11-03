"""Check the built site's local landing pages and public SEO URLs."""
import json
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

DIST = Path(__file__).resolve().parents[1] / 'dist'
ORIGIN = 'https://www.leventoglunakliyat.com'
DISTRICTS = ['pursaklar', 'kecioren', 'yenimahalle', 'cankaya', 'etimesgut', 'sincan', 'altindag', 'mamak', 'golbasi']


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.meta, self.links, self.schemas = {}, [], []
        self.canonical = None
        self.h1 = 0
        self.html_count = 0
        self.schema_text = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'html':
            self.html_count += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema_text = ''

    def handle_data(self, data):
        if self.schema_text is not None:
            self.schema_text += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.schema_text is not None:
            self.schemas.append(json.loads(self.schema_text))
            self.schema_text = None


class SeoChecks(unittest.TestCase):
    def test_canonicals_and_json_ld_across_build(self):
        for path in DIST.rglob('*.html'):
            with self.subTest(page=str(path.relative_to(DIST))):
                page = Page(path)
                relative = path.relative_to(DIST).as_posix()
                route = '/' + relative.removesuffix('index.html') if relative.endswith('index.html') else '/' + relative
                self.assertEqual(page.canonical, ORIGIN + route)
                self.assertEqual(page.html_count, 1)
                self.assertTrue(page.schemas or path.name == '404.html' or page.meta.get('description'))

    def test_homepage_business_and_local_links(self):
        page = Page(DIST / 'index.html')
        self.assertIn('Ankara', page.meta['description'])
        self.assertEqual(page.h1, 1)
        self.assertIn('/ankara-evden-eve-nakliyat/', page.links)
        self.assertIn('/pursaklar-evden-eve-nakliyat/', page.links)
        business = next(item for item in page.schemas if item.get('@type') == 'MovingCompany')
        self.assertEqual(business['address']['addressLocality'], 'Pursaklar')
        self.assertEqual(business['address']['addressRegion'], 'Ankara')
        self.assertNotIn('aggregateRating', business)

    def test_local_pages_and_contact_paths(self):
        for slug in ['ankara', *DISTRICTS]:
            with self.subTest(area=slug):
                path = DIST / f'{slug}-evden-eve-nakliyat/index.html'
                self.assertTrue(path.is_file(), f'Missing local landing page: {slug}')
                page = Page(path)
                self.assertEqual(page.h1, 1)
                self.assertNotIn('noindex', page.meta['robots'])
                self.assertTrue(any(link.startswith('https://wa.me/905346374444?text=') for link in page.links))
                self.assertTrue(any(link.startswith('tel:') for link in page.links))
                service = next(item for item in page.schemas if item.get('@type') == 'Service')
                self.assertEqual(service['provider']['@id'], ORIGIN + '/#business')
                self.assertNotIn('address', service)
                self.assertIn('Nakliyat Fiyat', path.read_text())
                for link in page.links:
                    parsed = urlsplit(link)
                    if not parsed.netloc and parsed.path.startswith('/'):
                        target = DIST / unquote(parsed.path).lstrip('/')
                        self.assertTrue(target.is_file() or (target / 'index.html').is_file(), link)
        hub = Page(DIST / 'ankara-evden-eve-nakliyat/index.html')
        regions = Page(DIST / 'hizmet-bolgelerimiz/index.html')
        for slug in DISTRICTS:
            self.assertIn(f'/{slug}-evden-eve-nakliyat/', hub.links)
            self.assertIn(f'/{slug}-evden-eve-nakliyat/', regions.links)

    def test_sitemap_and_share_image(self):
        urls = set()
        for path in DIST.glob('sitemap*.xml'):
            xml = ElementTree.parse(path)
            for node in xml.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
                self.assertTrue(node.text.startswith(ORIGIN + '/'), node.text)
                self.assertNotIn('404', node.text)
                self.assertNotIn('Copy', node.text)
                urls.add(node.text)
        for slug in ['ankara', *DISTRICTS]:
            self.assertIn(f'{ORIGIN}/{slug}-evden-eve-nakliyat/', urls)
        page = Page(DIST / 'index.html')
        image = urlsplit(page.meta['og:image'])
        self.assertEqual(image.netloc, urlsplit(ORIGIN).netloc)
        self.assertTrue((DIST / image.path.lstrip('/')).is_file())
        self.assertIn(f'Sitemap: {ORIGIN}/sitemap-index.xml', (DIST / 'robots.txt').read_text())


if __name__ == '__main__':
    unittest.main()
