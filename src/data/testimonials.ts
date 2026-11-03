export interface Testimonial {
  name: string;
  title: string;
  comment: string;
  rating: number;
  route?: string; // örn: "Ankara → İstanbul"
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ayşe K.',
    title: 'Öğretmen',
    comment: 'Ankara\'dan İstanbul\'a taşındık. Ekip çok profesyonel ve ilgiliydi. Eşyalarımız hiçbir hasar almadan yeni evimize yerleştirildi. Kesinlikle tavsiye ediyorum!',
    rating: 5,
    route: 'Ankara → İstanbul',
    date: '2026-02-15',
  },
  {
    name: 'Mehmet D.',
    title: 'Yazılım Mühendisi',
    comment: 'Şehirler arası nakliyat konusunda çok endişeliydim ama Leventoğlu Nakliyat tüm süreçte yanımızda oldu. Paketleme özellikle çok başarılıydı.',
    rating: 5,
    route: 'İstanbul → Ankara',
    date: '2026-01-22',
  },
  {
    name: 'Fatma Y.',
    title: 'Doktor',
    comment: 'Zamanında gelip zamanında teslim ettiler. Asansörlü taşıma sayesinde 12. kattaki dairemden sorunsuz taşındım. Teşekkürler!',
    rating: 5,
    route: 'Ankara İçi',
    date: '2026-03-01',
  },
  {
    name: 'Ali R.',
    title: 'İşletme Sahibi',
    comment: 'Ofis taşıma hizmeti aldık. Hafta sonu taşıma yaparak iş kaybımız olmadı. Çalışanlar gayet saygılı ve hızlıydı.',
    rating: 5,
    route: 'Ankara İçi',
    date: '2025-12-10',
  },
  {
    name: 'Elif S.',
    title: 'Avukat',
    comment: 'İzmir\'den Ankara\'ya taşınmam gerekiyordu. Fiyat teklifleri şeffaf ve rekabetçiydi. Eşyalarım özenle paketlendi ve tek bir çizik bile olmadı.',
    rating: 5,
    route: 'İzmir → Ankara',
    date: '2026-02-28',
  },
  {
    name: 'Hasan B.',
    title: 'Emekli',
    comment: 'Yaşımız gereği taşınma işini kendimiz yapamıyorduk. Leventoğlu Nakliyat her şeyi baştan sona haletti. Çok memnun kaldık.',
    rating: 5,
    route: 'Konya → Ankara',
    date: '2025-11-15',
  },
  {
    name: 'Zeynep T.',
    title: 'Mimar',
    comment: 'Antalya\'dan Ankara\'ya taşınma sürecimiz çok sorunsuz geçti. WhatsApp üzerinden tüm süreci takip edebildik. Güvenilir bir firma.',
    rating: 5,
    route: 'Antalya → Ankara',
    date: '2026-01-05',
  },
  {
    name: 'Burak Ö.',
    title: 'Akademisyen',
    comment: 'Depolama hizmetini de kullandık. Eşyalarımız 3 ay depoda kaldı, teslim aldığımızda her şey sapasağlamdı. Profesyonel hizmet için teşekkürler.',
    rating: 5,
    route: 'Ankara',
    date: '2026-03-10',
  },
];
