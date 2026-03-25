export interface Service {
  title: string;
  slug: string;
  shortDesc: string;
  icon: string; // SVG path data
  features: string[];
}

export const services: Service[] = [
  {
    title: 'Evden Eve Nakliyat',
    slug: 'evden-eve-nakliyat',
    shortDesc: 'Şehir içi ve şehirler arası ev taşıma hizmeti. Eşyalarınız sigortalı ve profesyonel ekibimizle güvenle taşınır.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    features: [
      'Sigortalı taşımacılık',
      'Profesyonel paketleme',
      'Mobilya sökme & takma',
      'Asansörlü taşıma imkanı',
      'Anahtar teslim hizmet',
    ],
  },
  {
    title: 'Ofis Taşımacılığı',
    slug: 'ofis-tasimaciligi',
    shortDesc: 'İşyeri ve ofis taşıma hizmeti. Minimum iş kaybıyla, hızlı ve düzenli ofis taşımacılığı.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: [
      'Hafta sonu taşıma seçeneği',
      'Bilgisayar ve elektronik özel paketleme',
      'Mobilya demontaj & montaj',
      'Arşiv ve evrak taşıma',
      'Düzenli kurulum hizmeti',
    ],
  },
  {
    title: 'Şehirlerarası Nakliyat',
    slug: 'sehirlerarasi-nakliyat',
    shortDesc: 'Türkiye\'nin 81 iline güvenli ve ekonomik şehirler arası evden eve nakliyat hizmeti.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    features: [
      '81 ilde hizmet',
      'Parsiyel ve komple taşıma',
      'Ara depolama imkanı',
      'Sigortalı taşımacılık',
      'Kapıdan kapıya teslimat',
    ],
  },
  {
    title: 'Asansörlü Nakliyat',
    slug: 'asansorlu-nakliyat',
    shortDesc: 'Yüksek katlarda güvenli taşıma için mobil asansör ile nakliyat hizmeti. 20. kata kadar hizmet.',
    icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    features: [
      '20. kata kadar çıkabilen asansör',
      'Dar merdiven çözümü',
      'Büyük eşya taşıma kolaylığı',
      'Güvenli yükleme & indirme',
      'Profesyonel operatör ekibi',
    ],
  },
  {
    title: 'Eşya Paketleme',
    slug: 'esya-paketleme',
    shortDesc: 'Profesyonel paketleme ve ambalajlama hizmeti. Eşyalarınız özel malzemelerle korunur.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    features: [
      'Özel ambalaj malzemeleri',
      'Kırılacak eşya koruması',
      'Gardırop kolisi',
      'Streç ve balonlu naylonla koruma',
      'Etiketleme ve düzenleme',
    ],
  },
  {
    title: 'Eşya Depolama',
    slug: 'esya-depolama',
    shortDesc: 'Güvenli ve temiz depolama alanlarımızda eşyalarınızı istediğiniz süre boyunca saklayın.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    features: [
      'Güvenlik kameralı depo',
      'Nem ve ısı kontrolü',
      'Sigortalı depolama',
      'Esnek süre seçenekleri',
      'Eşya teslim alma & bırakma hizmeti',
    ],
  },
  {
    title: 'Parça Eşya Taşıma',
    slug: 'parca-esya-tasima',
    shortDesc: 'Tek parça veya az miktarda eşya taşıma. Ekonomik ve hızlı parsiyel taşımacılık çözümü.',
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    features: [
      'Ekonomik fiyatlandırma',
      'Hızlı teslimat',
      'Tek parça eşya kabul',
      'Beyaz eşya taşıma',
      'Parsiyel taşıma ağı',
    ],
  },
];
