import type { City } from './cities';

/** Route page intro paragraphs - deterministically selected per route */
const introTemplates = [
  (from: City, to: City, km: number, hours: string) =>
    `${from.ablative} ${to.dative} taşınmayı planlıyorsanız doğru yerdesiniz. Leventoğlu Nakliyat olarak ${from.name} - ${to.name} arası evden eve nakliyat hizmeti sunuyoruz. Yaklaşık ${km} km mesafedeki bu güzergahta eşyalarınız sigortalı ve profesyonel ekibimizle güvenle taşınır.`,

  (from: City, to: City, km: number, hours: string) =>
    `Leventoğlu Nakliyat, ${from.ablative} ${to.dative} evden eve nakliyat hizmetinde profesyonel çözümler sunmaktadır. ${km} km'lik ${from.name} - ${to.name} güzergahında deneyimli ekibimiz ve modern araçlarımızla yanınızdayız. Taşınma sürecinizi stressiz hale getirmek için buradayız.`,

  (from: City, to: City, km: number, hours: string) =>
    `${from.name} ile ${to.name} arasında taşınma planı yapıyorsanız, Leventoğlu Nakliyat'ın uzman ekibine güvenebilirsiniz. ${from.ablative} ${to.dative} nakliyat hizmetimiz ile eşyalarınız sigortalı ve güvenli bir şekilde taşınır. Tahmini ${hours} saatlik bu yolculukta eşyalarınız emin ellerde.`,

  (from: City, to: City, km: number, hours: string) =>
    `${from.name} - ${to.name} evden eve nakliyat arayanlar için Leventoğlu Nakliyat en doğru tercih. Profesyonel paketleme, sigortalı taşımacılık ve zamanında teslimat garantisiyle ${from.ablative} ${to.dative} sorunsuz bir taşınma deneyimi yaşayın.`,

  (from: City, to: City, km: number, hours: string) =>
    `${from.ablative} ${to.dative} ev taşıma ihtiyacınız mı var? Leventoğlu Nakliyat olarak ${from.name} - ${to.name} güzergahında yılların deneyimiyle hizmet veriyoruz. ${km} km'lik mesafeyi güvenli araçlarımız ve profesyonel ekibimizle sorunsuz bir şekilde tamamlıyoruz.`,

  (from: City, to: City, km: number, hours: string) =>
    `${from.region} bölgesinden ${to.region} bölgesine taşınmak hiç bu kadar kolay olmamıştı. Leventoğlu Nakliyat olarak ${from.ablative} ${to.dative} kapsamlı evden eve nakliyat hizmeti sunuyoruz. Eşyalarınızın paketlenmesinden yeni evinize yerleştirilmesine kadar tüm süreci biz yönetiyoruz.`,

  (from: City, to: City, km: number, hours: string) =>
    `${to.dative} taşınıyorsunuz ve güvenilir bir nakliyat firması mı arıyorsunuz? ${from.ablative} ${to.dative} evden eve nakliyat hizmetimizle tanışın. Leventoğlu Nakliyat, ${from.name} - ${to.name} güzergahında sigortalı ve profesyonel taşımacılık hizmeti sunar.`,

  (from: City, to: City, km: number, hours: string) =>
    `Hayalinizdeki yeni yaşama ${to.name}'da başlamak için Leventoğlu Nakliyat yanınızda. ${from.ablative} ${to.dative} evden eve nakliyat sürecinizi en başından en sonuna kadar profesyonelce yönetiyoruz. Yaklaşık ${km} km'lik bu yolculukta eşyalarınız güvenli ellerde.`,
];

const serviceDetailTemplates = [
  (from: City, to: City) =>
    `${from.name} - ${to.name} nakliyat hizmetimiz kapsamında eşyalarınız özel ambalaj malzemeleriyle paketlenir, profesyonel ekibimiz tarafından güvenle yüklenir ve modern araçlarımızla taşınır. Varış noktasında eşyalarınız özenle indirilir ve istediğiniz odaya yerleştirilir. Mobilya sökme-takma, asansörlü taşıma ve depolama hizmetleri de dahil tüm ihtiyaçlarınıza çözüm sunuyoruz.`,

  (from: City, to: City) =>
    `${from.ablative} ${to.dative} taşınma sürecinizde ekibimiz kapınıza gelir, tüm eşyalarınızı profesyonel malzemelerle paketler ve güvenli bir şekilde araçlara yükler. Modern ve bakımlı araç filomuz sayesinde eşyalarınız yolda herhangi bir hasara uğramadan yeni adresinize ulaşır. Varışta montaj gerektiren eşyalarınız ustalarımız tarafından kurulur.`,

  (from: City, to: City) =>
    `Leventoğlu Nakliyat olarak ${from.name} ve ${to.name} arasındaki taşımacılık hizmetinde anahtar teslim çözüm sunuyoruz. Evinizdeki tüm eşyaların paketlenmesi, taşınması, yeni evinize yerleştirilmesi ve montajı dahil. Kırılacak eşyalarınız için özel koruma, elektronik cihazlarınız için güvenli paketleme ve büyük mobilyalarınız için profesyonel demontaj-montaj hizmeti sağlıyoruz.`,
];

const whyUsTemplates = [
  (from: City, to: City) =>
    `Neden ${from.name} - ${to.name} güzergahında Leventoğlu Nakliyat'ı tercih etmelisiniz? Çünkü biz sadece eşya taşımıyoruz, taşınma deneyiminizi kolaylaştırıyoruz. Sigortalı taşımacılık güvencemiz, deneyimli ve eğitimli personelimiz, modern araç filomuz ve müşteri odaklı hizmet anlayışımızla fark yaratıyoruz.`,

  (from: City, to: City) =>
    `${from.ablative} ${to.dative} taşınma konusunda Leventoğlu Nakliyat'ı tercih eden müşterilerimiz, profesyonel hizmet kalitemizden ve şeffaf fiyat politikamızdan memnun kalıyor. Eşyalarınız sigorta kapsamında taşınır, zamanında teslim edilir ve eksiksiz olarak yeni yerine yerleştirilir.`,

  (from: City, to: City) =>
    `${from.name} - ${to.name} nakliyat hizmetinde tercih sebebimiz; yılların getirdiği tecrübe, sigortalı taşımacılık garantimiz, profesyonel ekibimiz ve uygun fiyat politikamızdır. WhatsApp üzerinden anında fiyat teklifi alabilir, taşınma sürecinizi kolayca planlayabilirsiniz.`,
];

/** City page intro paragraphs */
const cityIntroTemplates = [
  (city: City) =>
    `${city.name} evden eve nakliyat hizmetinde güvenilir ve profesyonel çözüm arıyorsanız doğru yerdesiniz. Leventoğlu Nakliyat olarak ${city.name} ve çevresinde kapsamlı nakliyat hizmetleri sunuyoruz. Şehir içi taşımalardan şehirler arası nakliyata kadar tüm ihtiyaçlarınıza cevap veriyoruz.`,

  (city: City) =>
    `Leventoğlu Nakliyat, ${city.name}'da evden eve nakliyat sektöründe profesyonel hizmet sunan köklü bir nakliyat firmasıdır. ${city.region} bölgesinin önemli merkezlerinden biri olan ${city.name}'da sigortalı, güvenli ve ekonomik taşımacılık çözümleri sunuyoruz.`,

  (city: City) =>
    `${city.name} evden eve nakliyat arayanlar için Leventoğlu Nakliyat en doğru adres. ${city.name} şehir içi nakliyat, ${city.ablative} diğer şehirlere taşıma ve diğer illerden ${city.dative} evden eve nakliyat hizmetleri sunuyoruz. Profesyonel ekibimiz ve modern ekipmanlarımızla yanınızdayız.`,

  (city: City) =>
    `${city.name}'da taşınmayı planlıyorsanız Leventoğlu Nakliyat size özel çözümler sunuyor. ${city.region} bölgesinde bulunan ${city.name}'da ve Türkiye'nin 81 iline uzanan geniş hizmet ağımızla eşyalarınızı güvenle taşıyoruz.`,
];

/** Get a deterministic variant from templates based on a hash key */
function pickVariant<T>(templates: T[], key: string): T {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash) + key.charCodeAt(i);
    hash |= 0;
  }
  return templates[Math.abs(hash) % templates.length];
}

export function getRouteIntro(from: City, to: City, km: number, hours: string): string {
  const fn = pickVariant(introTemplates, `intro-${from.slug}-${to.slug}`);
  return fn(from, to, km, hours);
}

export function getRouteServiceDetail(from: City, to: City): string {
  const fn = pickVariant(serviceDetailTemplates, `svc-${from.slug}-${to.slug}`);
  return fn(from, to);
}

export function getRouteWhyUs(from: City, to: City): string {
  const fn = pickVariant(whyUsTemplates, `why-${from.slug}-${to.slug}`);
  return fn(from, to);
}

export function getCityIntro(city: City): string {
  const fn = pickVariant(cityIntroTemplates, `city-${city.slug}`);
  return fn(city);
}
