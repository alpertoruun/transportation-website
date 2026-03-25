export interface City {
  name: string;
  slug: string;
  plate: string;
  region: string;
  lat: number;
  lng: number;
  ablative: string; // -dan/-den/-tan/-ten (from)
  dative: string;   // -a/-e/-ya/-ye (to)
}

export const cities: City[] = [
  { name: 'Adana', slug: 'adana', plate: '01', region: 'Akdeniz', lat: 37.00, lng: 35.32, ablative: "Adana'dan", dative: "Adana'ya" },
  { name: 'Adıyaman', slug: 'adiyaman', plate: '02', region: 'Güneydoğu Anadolu', lat: 37.76, lng: 38.27, ablative: "Adıyaman'dan", dative: "Adıyaman'a" },
  { name: 'Afyonkarahisar', slug: 'afyonkarahisar', plate: '03', region: 'Ege', lat: 38.74, lng: 30.54, ablative: "Afyonkarahisar'dan", dative: "Afyonkarahisar'a" },
  { name: 'Ağrı', slug: 'agri', plate: '04', region: 'Doğu Anadolu', lat: 39.72, lng: 43.05, ablative: "Ağrı'dan", dative: "Ağrı'ya" },
  { name: 'Amasya', slug: 'amasya', plate: '05', region: 'Karadeniz', lat: 40.65, lng: 35.83, ablative: "Amasya'dan", dative: "Amasya'ya" },
  { name: 'Ankara', slug: 'ankara', plate: '06', region: 'İç Anadolu', lat: 39.93, lng: 32.86, ablative: "Ankara'dan", dative: "Ankara'ya" },
  { name: 'Antalya', slug: 'antalya', plate: '07', region: 'Akdeniz', lat: 36.88, lng: 30.70, ablative: "Antalya'dan", dative: "Antalya'ya" },
  { name: 'Artvin', slug: 'artvin', plate: '08', region: 'Karadeniz', lat: 41.18, lng: 41.82, ablative: "Artvin'den", dative: "Artvin'e" },
  { name: 'Aydın', slug: 'aydin', plate: '09', region: 'Ege', lat: 37.85, lng: 27.85, ablative: "Aydın'dan", dative: "Aydın'a" },
  { name: 'Balıkesir', slug: 'balikesir', plate: '10', region: 'Marmara', lat: 39.65, lng: 27.88, ablative: "Balıkesir'den", dative: "Balıkesir'e" },
  { name: 'Bilecik', slug: 'bilecik', plate: '11', region: 'Marmara', lat: 40.05, lng: 30.00, ablative: "Bilecik'ten", dative: "Bilecik'e" },
  { name: 'Bingöl', slug: 'bingol', plate: '12', region: 'Doğu Anadolu', lat: 38.88, lng: 40.50, ablative: "Bingöl'den", dative: "Bingöl'e" },
  { name: 'Bitlis', slug: 'bitlis', plate: '13', region: 'Doğu Anadolu', lat: 38.40, lng: 42.11, ablative: "Bitlis'ten", dative: "Bitlis'e" },
  { name: 'Bolu', slug: 'bolu', plate: '14', region: 'Karadeniz', lat: 40.73, lng: 31.61, ablative: "Bolu'dan", dative: "Bolu'ya" },
  { name: 'Burdur', slug: 'burdur', plate: '15', region: 'Akdeniz', lat: 37.72, lng: 30.29, ablative: "Burdur'dan", dative: "Burdur'a" },
  { name: 'Bursa', slug: 'bursa', plate: '16', region: 'Marmara', lat: 40.19, lng: 29.06, ablative: "Bursa'dan", dative: "Bursa'ya" },
  { name: 'Çanakkale', slug: 'canakkale', plate: '17', region: 'Marmara', lat: 40.15, lng: 26.41, ablative: "Çanakkale'den", dative: "Çanakkale'ye" },
  { name: 'Çankırı', slug: 'cankiri', plate: '18', region: 'İç Anadolu', lat: 40.60, lng: 33.62, ablative: "Çankırı'dan", dative: "Çankırı'ya" },
  { name: 'Çorum', slug: 'corum', plate: '19', region: 'Karadeniz', lat: 40.55, lng: 34.95, ablative: "Çorum'dan", dative: "Çorum'a" },
  { name: 'Denizli', slug: 'denizli', plate: '20', region: 'Ege', lat: 37.77, lng: 29.09, ablative: "Denizli'den", dative: "Denizli'ye" },
  { name: 'Diyarbakır', slug: 'diyarbakir', plate: '21', region: 'Güneydoğu Anadolu', lat: 37.91, lng: 40.24, ablative: "Diyarbakır'dan", dative: "Diyarbakır'a" },
  { name: 'Edirne', slug: 'edirne', plate: '22', region: 'Marmara', lat: 41.68, lng: 26.56, ablative: "Edirne'den", dative: "Edirne'ye" },
  { name: 'Elazığ', slug: 'elazig', plate: '23', region: 'Doğu Anadolu', lat: 38.67, lng: 39.22, ablative: "Elazığ'dan", dative: "Elazığ'a" },
  { name: 'Erzincan', slug: 'erzincan', plate: '24', region: 'Doğu Anadolu', lat: 39.75, lng: 39.49, ablative: "Erzincan'dan", dative: "Erzincan'a" },
  { name: 'Erzurum', slug: 'erzurum', plate: '25', region: 'Doğu Anadolu', lat: 39.90, lng: 41.27, ablative: "Erzurum'dan", dative: "Erzurum'a" },
  { name: 'Eskişehir', slug: 'eskisehir', plate: '26', region: 'İç Anadolu', lat: 39.78, lng: 30.52, ablative: "Eskişehir'den", dative: "Eskişehir'e" },
  { name: 'Gaziantep', slug: 'gaziantep', plate: '27', region: 'Güneydoğu Anadolu', lat: 37.07, lng: 36.95, ablative: "Gaziantep'ten", dative: "Gaziantep'e" },
  { name: 'Giresun', slug: 'giresun', plate: '28', region: 'Karadeniz', lat: 40.91, lng: 38.39, ablative: "Giresun'dan", dative: "Giresun'a" },
  { name: 'Gümüşhane', slug: 'gumushane', plate: '29', region: 'Karadeniz', lat: 40.46, lng: 39.48, ablative: "Gümüşhane'den", dative: "Gümüşhane'ye" },
  { name: 'Hakkari', slug: 'hakkari', plate: '30', region: 'Doğu Anadolu', lat: 37.58, lng: 43.74, ablative: "Hakkari'den", dative: "Hakkari'ye" },
  { name: 'Hatay', slug: 'hatay', plate: '31', region: 'Akdeniz', lat: 36.20, lng: 36.16, ablative: "Hatay'dan", dative: "Hatay'a" },
  { name: 'Isparta', slug: 'isparta', plate: '32', region: 'Akdeniz', lat: 37.76, lng: 30.55, ablative: "Isparta'dan", dative: "Isparta'ya" },
  { name: 'Mersin', slug: 'mersin', plate: '33', region: 'Akdeniz', lat: 36.81, lng: 34.64, ablative: "Mersin'den", dative: "Mersin'e" },
  { name: 'İstanbul', slug: 'istanbul', plate: '34', region: 'Marmara', lat: 41.01, lng: 28.98, ablative: "İstanbul'dan", dative: "İstanbul'a" },
  { name: 'İzmir', slug: 'izmir', plate: '35', region: 'Ege', lat: 38.42, lng: 27.14, ablative: "İzmir'den", dative: "İzmir'e" },
  { name: 'Kars', slug: 'kars', plate: '36', region: 'Doğu Anadolu', lat: 40.60, lng: 43.10, ablative: "Kars'tan", dative: "Kars'a" },
  { name: 'Kastamonu', slug: 'kastamonu', plate: '37', region: 'Karadeniz', lat: 41.39, lng: 33.78, ablative: "Kastamonu'dan", dative: "Kastamonu'ya" },
  { name: 'Kayseri', slug: 'kayseri', plate: '38', region: 'İç Anadolu', lat: 38.73, lng: 35.49, ablative: "Kayseri'den", dative: "Kayseri'ye" },
  { name: 'Kırklareli', slug: 'kirklareli', plate: '39', region: 'Marmara', lat: 41.74, lng: 27.23, ablative: "Kırklareli'den", dative: "Kırklareli'ye" },
  { name: 'Kırşehir', slug: 'kirsehir', plate: '40', region: 'İç Anadolu', lat: 39.14, lng: 34.17, ablative: "Kırşehir'den", dative: "Kırşehir'e" },
  { name: 'Kocaeli', slug: 'kocaeli', plate: '41', region: 'Marmara', lat: 40.85, lng: 29.88, ablative: "Kocaeli'den", dative: "Kocaeli'ye" },
  { name: 'Konya', slug: 'konya', plate: '42', region: 'İç Anadolu', lat: 37.87, lng: 32.48, ablative: "Konya'dan", dative: "Konya'ya" },
  { name: 'Kütahya', slug: 'kutahya', plate: '43', region: 'Ege', lat: 39.42, lng: 29.98, ablative: "Kütahya'dan", dative: "Kütahya'ya" },
  { name: 'Malatya', slug: 'malatya', plate: '44', region: 'Doğu Anadolu', lat: 38.35, lng: 38.31, ablative: "Malatya'dan", dative: "Malatya'ya" },
  { name: 'Manisa', slug: 'manisa', plate: '45', region: 'Ege', lat: 38.61, lng: 27.43, ablative: "Manisa'dan", dative: "Manisa'ya" },
  { name: 'Kahramanmaraş', slug: 'kahramanmaras', plate: '46', region: 'Akdeniz', lat: 37.58, lng: 36.93, ablative: "Kahramanmaraş'tan", dative: "Kahramanmaraş'a" },
  { name: 'Mardin', slug: 'mardin', plate: '47', region: 'Güneydoğu Anadolu', lat: 37.31, lng: 40.74, ablative: "Mardin'den", dative: "Mardin'e" },
  { name: 'Muğla', slug: 'mugla', plate: '48', region: 'Ege', lat: 37.21, lng: 28.36, ablative: "Muğla'dan", dative: "Muğla'ya" },
  { name: 'Muş', slug: 'mus', plate: '49', region: 'Doğu Anadolu', lat: 38.73, lng: 41.49, ablative: "Muş'tan", dative: "Muş'a" },
  { name: 'Nevşehir', slug: 'nevsehir', plate: '50', region: 'İç Anadolu', lat: 38.62, lng: 34.71, ablative: "Nevşehir'den", dative: "Nevşehir'e" },
  { name: 'Niğde', slug: 'nigde', plate: '51', region: 'İç Anadolu', lat: 37.97, lng: 34.68, ablative: "Niğde'den", dative: "Niğde'ye" },
  { name: 'Ordu', slug: 'ordu', plate: '52', region: 'Karadeniz', lat: 40.98, lng: 37.88, ablative: "Ordu'dan", dative: "Ordu'ya" },
  { name: 'Rize', slug: 'rize', plate: '53', region: 'Karadeniz', lat: 41.02, lng: 40.52, ablative: "Rize'den", dative: "Rize'ye" },
  { name: 'Sakarya', slug: 'sakarya', plate: '54', region: 'Marmara', lat: 40.69, lng: 30.40, ablative: "Sakarya'dan", dative: "Sakarya'ya" },
  { name: 'Samsun', slug: 'samsun', plate: '55', region: 'Karadeniz', lat: 41.29, lng: 36.33, ablative: "Samsun'dan", dative: "Samsun'a" },
  { name: 'Siirt', slug: 'siirt', plate: '56', region: 'Güneydoğu Anadolu', lat: 37.93, lng: 41.94, ablative: "Siirt'ten", dative: "Siirt'e" },
  { name: 'Sinop', slug: 'sinop', plate: '57', region: 'Karadeniz', lat: 42.03, lng: 35.15, ablative: "Sinop'tan", dative: "Sinop'a" },
  { name: 'Sivas', slug: 'sivas', plate: '58', region: 'İç Anadolu', lat: 39.75, lng: 37.02, ablative: "Sivas'tan", dative: "Sivas'a" },
  { name: 'Tekirdağ', slug: 'tekirdag', plate: '59', region: 'Marmara', lat: 41.00, lng: 27.51, ablative: "Tekirdağ'dan", dative: "Tekirdağ'a" },
  { name: 'Tokat', slug: 'tokat', plate: '60', region: 'Karadeniz', lat: 40.31, lng: 36.55, ablative: "Tokat'tan", dative: "Tokat'a" },
  { name: 'Trabzon', slug: 'trabzon', plate: '61', region: 'Karadeniz', lat: 41.00, lng: 39.72, ablative: "Trabzon'dan", dative: "Trabzon'a" },
  { name: 'Tunceli', slug: 'tunceli', plate: '62', region: 'Doğu Anadolu', lat: 39.11, lng: 39.55, ablative: "Tunceli'den", dative: "Tunceli'ye" },
  { name: 'Şanlıurfa', slug: 'sanliurfa', plate: '63', region: 'Güneydoğu Anadolu', lat: 37.17, lng: 38.79, ablative: "Şanlıurfa'dan", dative: "Şanlıurfa'ya" },
  { name: 'Uşak', slug: 'usak', plate: '64', region: 'Ege', lat: 38.67, lng: 29.41, ablative: "Uşak'tan", dative: "Uşak'a" },
  { name: 'Van', slug: 'van', plate: '65', region: 'Doğu Anadolu', lat: 38.49, lng: 43.38, ablative: "Van'dan", dative: "Van'a" },
  { name: 'Yozgat', slug: 'yozgat', plate: '66', region: 'İç Anadolu', lat: 39.82, lng: 34.81, ablative: "Yozgat'tan", dative: "Yozgat'a" },
  { name: 'Zonguldak', slug: 'zonguldak', plate: '67', region: 'Karadeniz', lat: 41.46, lng: 31.80, ablative: "Zonguldak'tan", dative: "Zonguldak'a" },
  { name: 'Aksaray', slug: 'aksaray', plate: '68', region: 'İç Anadolu', lat: 38.37, lng: 34.03, ablative: "Aksaray'dan", dative: "Aksaray'a" },
  { name: 'Bayburt', slug: 'bayburt', plate: '69', region: 'Karadeniz', lat: 40.26, lng: 40.23, ablative: "Bayburt'tan", dative: "Bayburt'a" },
  { name: 'Karaman', slug: 'karaman', plate: '70', region: 'İç Anadolu', lat: 37.18, lng: 33.23, ablative: "Karaman'dan", dative: "Karaman'a" },
  { name: 'Kırıkkale', slug: 'kirikkale', plate: '71', region: 'İç Anadolu', lat: 39.85, lng: 33.51, ablative: "Kırıkkale'den", dative: "Kırıkkale'ye" },
  { name: 'Batman', slug: 'batman', plate: '72', region: 'Güneydoğu Anadolu', lat: 37.88, lng: 41.13, ablative: "Batman'dan", dative: "Batman'a" },
  { name: 'Şırnak', slug: 'sirnak', plate: '73', region: 'Güneydoğu Anadolu', lat: 37.41, lng: 42.46, ablative: "Şırnak'tan", dative: "Şırnak'a" },
  { name: 'Bartın', slug: 'bartin', plate: '74', region: 'Karadeniz', lat: 41.64, lng: 32.34, ablative: "Bartın'dan", dative: "Bartın'a" },
  { name: 'Ardahan', slug: 'ardahan', plate: '75', region: 'Doğu Anadolu', lat: 41.11, lng: 42.70, ablative: "Ardahan'dan", dative: "Ardahan'a" },
  { name: 'Iğdır', slug: 'igdir', plate: '76', region: 'Doğu Anadolu', lat: 39.92, lng: 44.05, ablative: "Iğdır'dan", dative: "Iğdır'a" },
  { name: 'Yalova', slug: 'yalova', plate: '77', region: 'Marmara', lat: 40.66, lng: 29.27, ablative: "Yalova'dan", dative: "Yalova'ya" },
  { name: 'Karabük', slug: 'karabuk', plate: '78', region: 'Karadeniz', lat: 41.20, lng: 32.63, ablative: "Karabük'ten", dative: "Karabük'e" },
  { name: 'Kilis', slug: 'kilis', plate: '79', region: 'Güneydoğu Anadolu', lat: 36.72, lng: 37.12, ablative: "Kilis'ten", dative: "Kilis'e" },
  { name: 'Osmaniye', slug: 'osmaniye', plate: '80', region: 'Akdeniz', lat: 37.07, lng: 36.25, ablative: "Osmaniye'den", dative: "Osmaniye'ye" },
  { name: 'Düzce', slug: 'duzce', plate: '81', region: 'Karadeniz', lat: 40.84, lng: 31.16, ablative: "Düzce'den", dative: "Düzce'ye" },
];

/** Haversine formula ile kuş uçuşu mesafe (km), yol faktörü × 1.3 */
export function getDistance(from: City, to: City): number {
  const R = 6371;
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLng = ((to.lng - from.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((from.lat * Math.PI) / 180) *
      Math.cos((to.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightLine = R * c;
  return Math.round(straightLine * 1.3);
}

/** Tahmini yol süresi (karayolu ortalama 80 km/s) */
export function getEstimatedHours(km: number): string {
  const hours = km / 80;
  if (hours < 1.5) return '1-2';
  if (hours < 2.5) return '2-3';
  if (hours < 3.5) return '3-4';
  if (hours < 4.5) return '4-5';
  if (hours < 5.5) return '5-6';
  if (hours < 7) return '6-7';
  if (hours < 8.5) return '7-9';
  if (hours < 10.5) return '9-11';
  if (hours < 13) return '11-13';
  return '13+';
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Popüler rotalar (yüksek hacimli şehir çiftleri) */
export const popularRoutes = [
  ['istanbul', 'ankara'],
  ['ankara', 'istanbul'],
  ['istanbul', 'izmir'],
  ['izmir', 'istanbul'],
  ['ankara', 'izmir'],
  ['istanbul', 'antalya'],
  ['ankara', 'antalya'],
  ['istanbul', 'bursa'],
  ['ankara', 'eskisehir'],
  ['istanbul', 'kocaeli'],
  ['ankara', 'konya'],
  ['istanbul', 'adana'],
  ['izmir', 'antalya'],
  ['istanbul', 'trabzon'],
  ['ankara', 'samsun'],
  ['istanbul', 'gaziantep'],
  ['ankara', 'kayseri'],
  ['istanbul', 'diyarbakir'],
  ['izmir', 'ankara'],
  ['ankara', 'mersin'],
];

/** Deterministic hash for content variation selection */
export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
