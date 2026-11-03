export interface AnkaraArea {
  slug: string;
  name: string;
  description: string;
  intro: string;
  planningTitle: string;
  planning: string[];
  checklist: string[];
  questions: { question: string; answer: string }[];
}

export const ankara: AnkaraArea = {
  slug: 'ankara',
  name: 'Ankara',
  description: 'Ankara evden eve nakliyat: Pursaklar merkezli Leventoğlu ile ilçe içi ve ilçeler arası taşıma, paketleme ve asansör seçeneklerini planlayın. Fiyat teklifi alın.',
  intro: 'Ankara evden eve nakliyat hizmetimizi Pursaklar’daki adresimizden planlıyoruz. Aynı mahallede ev değiştirirken de Ankara’nın bir ilçesinden diğerine taşınırken de iki binanın koşullarını birlikte değerlendiriyoruz. Eşya miktarı, katlar ve araç erişimi netleşince taşıma kapsamını ve fiyat teklifini görüşüyoruz.',
  planningTitle: 'Ankara’da ilçeler arası taşınma planı',
  planning: [
    'Pursaklar’dan Çankaya’ya, Keçiören’den Etimesgut’a veya Yenimahalle’den Sincan’a taşınırken yalnızca iki adres arasındaki yol yeterli bilgi değildir. Yükleme ve indirme için aracın nerede bekleyebileceği, bina asansörünün kullanımı ve sitenin taşıma saatleri toplam iş planını etkiler.',
    'Taşınacağınız ilçe için aşağıdaki sayfalardan hazırlık bilgilerine ulaşabilirsiniz. Ankara dışına çıkacaksanız şehirler arası nakliyat hizmetimiz üzerinden çıkış ve varış adresini birlikte paylaşın. Paketleme, mobilya montajı ve gerekiyorsa depolamayı aynı talepte belirtmeniz teklifleri karşılaştırmayı kolaylaştırır.',
  ],
  checklist: ['Çıkış ve varış ilçesini, mahalleyi ve katları yazın.', 'Site giriş saatlerini ve araç bekleme alanını iki adres için kontrol edin.', 'Asansör, paketleme ve depolama ihtiyacını teklif öncesinde belirtin.'],
  questions: [
    { question: 'Ankara’nın hangi ilçelerinde nakliyat hizmeti veriyorsunuz?', answer: 'Pursaklar merkezli olarak Ankara genelindeki taşıma taleplerini değerlendiriyoruz. Pursaklar, Keçiören, Yenimahalle, Çankaya, Etimesgut, Sincan, Altındağ, Mamak ve Gölbaşı için bu sayfadaki ilçe bağlantılarını kullanabilirsiniz. Adres ve tarih bilgisiyle taşıma planını netleştirebilirsiniz.' },
    { question: 'Ankara içi nakliyat ile şehirler arası taşıma teklifi farklı mı hazırlanır?', answer: 'Evet. İlçeler arası taşımada bina koşulları ve eşya miktarı değerlendirilir. Şehirler arası taşımada bunlara yol, teslimat planı ve araç düzeni de eklenir. Kesin teklif için her iki adresi ve talep ettiğiniz hizmetleri paylaşın.' },
  ],
};

export const ankaraDistricts: AnkaraArea[] = [
  {
    slug: 'pursaklar', name: 'Pursaklar',
    description: 'Pursaklar evden eve nakliyat için Fatih Mahallesi’ndeki Leventoğlu’na ulaşın. Saray ve Sirkeli dahil taşıma, paketleme ve asansör ihtiyacınıza teklif alın.',
    intro: 'Pursaklar evden eve nakliyat için Leventoğlu Nakliyat’a Fatih Mahallesi, Orhangazi Caddesi No:9A adresinden ulaşabilirsiniz. Pursaklar içindeki ev değişikliğinizi veya Ankara’nın başka bir ilçesine taşınmanızı çıkış ve varış binasının koşullarına göre planlıyoruz.',
    planningTitle: 'Fatih, Saray ve Sirkeli için adresi birlikte netleştirelim',
    planning: [
      'Pursaklar’da Fatih Mahallesi ile Saray Fatih Mahallesi ayrı adreslerdir. Teklif isterken yalnızca “Fatih” yazmak yerine mahalle adını tam paylaşın. Saray ve Sirkeli tarafındaki taşınmalarınızda konum bağlantısı göndermeniz de doğru yükleme adresini belirlemeye yardımcı olur.',
      'Pursaklar’dan Keçiören, Altındağ veya başka bir ilçeye taşınacaksanız yeni evin katını da ilk görüşmede belirtin. Araç binaya yaklaşamıyorsa kapı ile yükleme noktası arasındaki mesafeyi gösteren kısa bir video gönderin. Büyük dolap ve koltuklar için merdiven dönüşlerini görmek, söküm ve asansör ihtiyacını değerlendirmeyi kolaylaştırır.',
      'İşletme adresimiz Pursaklar’dadır. İlçe dışındaki hizmet alanlarımız bu adresten planlanan taşımalardır. Randevu ve taşıma günü için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.',
    ],
    checklist: ['Fatih veya Saray Fatih gibi mahalle adlarını tam yazın; mümkünse konum ekleyin.', 'Saray ve Sirkeli dahil çıkış ile varış adreslerini ayrı paylaşın.', 'Bina önünü, katı ve büyük eşyaları gösteren fotoğrafları teklif talebine ekleyin.'],
    questions: [
      { question: 'Pursaklar’daki işletme adresiniz nerede?', answer: 'Adresimiz Fatih, Orhangazi Cd. No:9A, 06980 Pursaklar/Ankara. Taşıma talebiniz ve randevu için 0532 515 80 09 veya 0534 637 44 44 numaralarından ulaşabilirsiniz.' },
      { question: 'Saray ve Sirkeli’den de taşıma talebi verebilir miyim?', answer: 'Evet. Saray veya Sirkeli’deki açık adresinizi, varış adresini, kat bilgisini ve taşınma tarihinizi paylaşın. Araç erişimini ve eşya miktarını birlikte değerlendirerek teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'kecioren', name: 'Keçiören',
    description: 'Keçiören evden eve nakliyat için eşya miktarı, kat ve bina erişimine göre taşıma planı oluşturun. Paketleme ve asansör seçenekleri için Leventoğlu’ndan teklif alın.',
    intro: 'Keçiören evden eve nakliyat talebinizde bina girişini, merdiven ölçülerini ve aracın durabileceği noktayı birlikte değerlendiriyoruz. Keçiören içi ev değişikliği veya Pursaklar dahil başka bir ilçeye taşıma için iki adresin kat bilgisini paylaşarak teklif alabilirsiniz.',
    planningTitle: 'Merdiven dönüşleri ve yükleme noktası',
    planning: ['Büyük bir koltuk düz merdivenden geçse bile sahanlıkta dönemeyebilir. Keçiören’deki evinizden taşınmadan önce koltuk, gardırop ve beyaz eşyanın geçeceği kapıları ve dönüşleri fotoğraflayın. Parçalarına ayrılacak mobilyaları bu aşamada belirtin.', 'Araç kapının önünde bekleyemiyorsa eşyaların elle taşınacağı mesafe artar. Yükleme yerini gösteren bir konum veya fotoğraf, ekip ve süre planının adresinize göre hazırlanmasına yardımcı olur. Dış cephe asansörü düşünülüyorsa pencere veya balkon önündeki alan da değerlendirilir.'],
    checklist: ['Dar kapı ve merdiven dönüşlerinin fotoğrafını ekleyin.', 'Sökülecek dolapları ve büyük koltukları eşya listesinde işaretleyin.', 'Aracın durabileceği yeri ve bina girişine mesafesini belirtin.'],
    questions: [{ question: 'Keçiören’de dar merdivenli binadan nasıl taşınılır?', answer: 'Önce eşya ölçüleri ve merdiven dönüşleri değerlendirilir. Uygun mobilyalar sökülebilir; bina cephesi ve kurulum alanı uygunsa dış cephe asansörü görüşülebilir. Yöntem, adres incelemesi sonrasında belirlenir.' }, { question: 'Keçiören’den Pursaklar’a taşıma için hangi bilgiler gerekli?', answer: 'Her iki adresin mahalle ve kat bilgisini, eşya listesini, bina asansörünün kullanım durumunu ve istediğiniz tarihi paylaşın. Yalnızca ilçeler arasındaki mesafe kesin fiyat vermeye yeterli değildir.' }],
  },
  {
    slug: 'yenimahalle', name: 'Yenimahalle',
    description: 'Yenimahalle evden eve nakliyat: Batıkent ve Demetevler için bina erişimi, paketleme ve taşıma planı. Leventoğlu ile taşınma detaylarınızı paylaşın, teklif alın.',
    intro: 'Yenimahalle evden eve nakliyat hizmetinde Batıkent ve Demetevler dahil çıkış ile varış adresinin bina koşullarını dikkate alıyoruz. Site içi bir taşınma ile apartmandan başka bir ilçeye taşımanın ihtiyaçları farklı olabilir; teklifinizi bu ayrıntılarla hazırlayalım.',
    planningTitle: 'Batıkent ve Demetevler’de iki farklı bina, iki ayrı hazırlık',
    planning: ['Batıkent’te bir siteden taşınıyorsanız yönetimin yükleme noktası ve asansör kullanımıyla ilgili kurallarını önceden öğrenin. Araç site içine alınmıyorsa blok kapısına kadar olan mesafeyi belirtin. Yeni adreste de aynı bilgileri kontrol edin.', 'Demetevler’deki bir apartman için teklif isterken kat sayısının yanında bina önünün fotoğrafını paylaşın. Park etmiş araçlar, giriş basamakları veya kapalı bir avlu varsa yükleme düzeni buna göre görüşülür. Taşıma günü bu ayrıntıların ilk kez ortaya çıkmaması iş planını kolaylaştırır.'],
    checklist: ['Site veya apartman yönetiminden taşıma saatini öğrenin.', 'Blok adı, giriş kapısı ve yükleme noktasını açıkça belirtin.', 'Bina asansörü kullanılacaksa eşya taşıma iznini kontrol edin.'],
    questions: [{ question: 'Batıkent’te site içi taşıma için neyi önceden öğrenmeliyim?', answer: 'Araç girişi, kullanılacak yükleme kapısı, asansör izni ve taşıma saatlerini yönetimden öğrenin. Bu bilgileri iki adres için de paylaşmanız gerekir.' }, { question: 'Demetevler’den başka bir ilçeye taşınırken fiyat nasıl belirlenir?', answer: 'Eşya miktarı, iki evin katları, araç erişimi, paketleme ve montaj ihtiyacı değerlendirilir. Bina önünün ve büyük eşyaların fotoğrafları teklifin kapsamını netleştirir.' }],
  },
  {
    slug: 'cankaya', name: 'Çankaya',
    description: 'Çankaya evden eve nakliyat ve ofis taşıma için paketleme, mobilya montajı ve teslimat planı. Kat ve adres bilgilerinizi Leventoğlu’na iletin, fiyat teklifi alın.',
    intro: 'Çankaya evden eve nakliyat ve ofis taşımalarında hangi eşyanın nasıl paketleneceğini ve yeni adreste nereye yerleştirileceğini önceden konuşuyoruz. Ev, ofis veya az miktarda eşya taşıma talebiniz için kapsamı ilk görüşmede belirtebilirsiniz.',
    planningTitle: 'Ev ve ofis eşyasını ayrı listelerle planlayın',
    planning: ['Ev taşımasında kırılacak mutfak eşyaları, kitaplar ve sökülecek mobilyalar farklı hazırlık ister. Çankaya’daki eviniz için koli sayısını yaklaşık belirtin; ağır kitap kolilerini küçük kutulara ayırın. Paketlemeyi kendiniz yapacaksanız hangi parçaların ekibe bırakılacağını görüşün.', 'Ofis taşımasında masa ve dolapların yanında bilgisayar, arşiv ve ortak kullanım eşyalarını da listeleyin. Kişisel belgeleri ve yedekleri kendiniz ayırın. Bina yönetiminin izin verdiği saat ile yeni ofisin teslim alınacağı saat birlikte planlanmalıdır.'],
    checklist: ['Ev ve ofis eşyalarını ayrı listeleyin; kırılacak parçaları belirtin.', 'Arşiv kutularını ve mobilya parçalarını varış odasına göre etiketleyin.', 'Bina giriş ve teslimat saatlerini taşınma tarihinden önce netleştirin.'],
    questions: [{ question: 'Çankaya’da ofis taşıması için de teklif alabilir miyim?', answer: 'Evet. Çalışma masası ve dolap sayısını, arşiv miktarını, elektronik eşyaları ve her iki binanın taşıma saatlerini paylaşın. Ofis taşımacılığı sayfamızda hizmetin ayrıntılarına ulaşabilirsiniz.' }, { question: 'Çankaya’da yalnızca birkaç eşya taşıtabilir miyim?', answer: 'Parça eşya taşıma talebinde eşya ölçülerini, fotoğraflarını, çıkış ve varış katlarını iletin. Taşıma tarihi ve uygun araç planı görüşülerek teklif hazırlanır.' }],
  },
  {
    slug: 'etimesgut', name: 'Etimesgut',
    description: 'Etimesgut evden eve nakliyat için Eryaman, Elvankent ve Bağlıca’daki taşınmanızı planlayın. Site erişimi, paketleme ve asansör ihtiyacınıza göre teklif alın.',
    intro: 'Etimesgut evden eve nakliyat taleplerinde Eryaman, Elvankent ve Bağlıca’daki çıkış ve varış adreslerini birlikte değerlendiriyoruz. Blok, kat ve araç giriş bilgilerini paylaşmanız, site içi ya da ilçeler arası taşınmanıza uygun plan hazırlamamıza yardımcı olur.',
    planningTitle: 'Eryaman, Elvankent ve Bağlıca’da blok bilgisini atlamayın',
    planning: ['Bir sitede sokak adresi tek başına doğru kapıyı göstermeyebilir. Teklif talebine site ve blok adını, giriş kapısını ve güvenliğin araç kabul koşullarını ekleyin. Araç bodrumdaki yükleme alanına girecekse giriş yüksekliğini yönetimden öğrenin.', 'Yeni eviniz henüz teslim edilmediyse anahtar teslimi ile taşıma randevusunu aynı saate sıkıştırmayın. Temizlik veya tadilat sürecekse eşyaların ne zaman kabul edileceğini netleştirin. İki ev arasında bekleme oluşacaksa depolama ihtiyacını da baştan görüşebiliriz.'],
    checklist: ['Site ve blok adını iki adres için de paylaşın.', 'Araç giriş yüksekliği ile güvenlik kayıt koşullarını kontrol edin.', 'Anahtar teslimi, temizlik ve eşya kabul saatini birlikte planlayın.'],
    questions: [{ question: 'Eryaman veya Bağlıca’da siteye giriş için ne gerekir?', answer: 'Koşullar siteye göre değişir. Yönetimden taşıma saati, araç kaydı, yükleme alanı ve asansör kullanımını öğrenip ekibe iletin. Kesin bir genel giriş kuralı yerine adresinize ait bilgiyi esas alırız.' }, { question: 'Etimesgut’taki yeni evim hazır değilse depolama görüşebilir miyim?', answer: 'Evet. Eşya miktarını, tahmini bekleme süresini ve planlanan yeni adresi paylaşın. Depolama ve sonrasındaki teslimat kapsamı ayrıca değerlendirilir.' }],
  },
  {
    slug: 'sincan', name: 'Sincan',
    description: 'Sincan evden eve nakliyat için ilçe içi ve Ankara’nın diğer ilçelerine taşıma planı. Eşya listesi, kat ve tarihinizi Leventoğlu’na ileterek fiyat teklifi alın.',
    intro: 'Sincan evden eve nakliyat hizmeti için taşınacak eşya listesini ve yeni evin hazır olacağı tarihi birlikte ele alıyoruz. Sincan içi, Ankara’nın başka bir ilçesine veya şehir dışına taşınma talebinde varış bilgisi fiyat teklifinin önemli bir parçasıdır.',
    planningTitle: 'Taşınma günü için eşya listesi ve teslim sırası',
    planning: ['Sincan’daki evinizden taşınırken taşınacaklarla evde kalacakları önceden ayırın. Özellikle beyaz eşya, gardırop ve büyük koltukları listeleyin. Bağlantısı sökülecek cihazlar için hazırlığı ve yeniden bağlantı kapsamını teklif aşamasında görüşün.', 'Yeni adreste önce kullanılacak eşyaları belirlemek yükleme sırasını kolaylaştırır. Çocuk odası, yatak ve günlük ihtiyaç kolilerini etiketleyin. Şehir dışına çıkıyorsanız anahtar teslimini ve eşyayı karşılayacak kişiyi yol planı kesinleşmeden önce netleştirin.'],
    checklist: ['Taşınacak ve evde kalacak eşyaları ayrı belirtin.', 'Beyaz eşyanın bağlantı hazırlığını ve montaj kapsamını görüşün.', 'Yeni adreste teslim alacak kişi ile anahtar saatini netleştirin.'],
    questions: [{ question: 'Sincan’dan şehir dışına taşınma için de teklif alabilir miyim?', answer: 'Evet. Varış şehrini, açık adresi, katları ve eşya miktarını paylaşın. Araç ve teslimat planı şehirler arası taşıma kapsamında değerlendirilir.' }, { question: 'Teklifte söküm ve montajın dahil olup olmadığını nasıl öğrenirim?', answer: 'Sökülecek dolap, yatak ve diğer mobilyaları listeleyin. Teklifte hangi parçaların sökülüp kurulacağını ve cihaz bağlantılarının kapsamını yazılı olarak netleştirin.' }],
  },
  {
    slug: 'altindag', name: 'Altındağ',
    description: 'Altındağ evden eve nakliyat için bina girişi, eşya ölçüleri ve taşıma koşullarını birlikte değerlendirelim. Paketleme ve asansör seçenekleri için teklif alın.',
    intro: 'Altındağ evden eve nakliyat talebinde eşyanın binadan çıkışını ve aracın yükleme yapacağı yeri önceden değerlendiriyoruz. İlçe içi veya Ankara’nın başka bir ilçesine taşınırken giriş, kat ve eşya fotoğraflarıyla taşıma yöntemini birlikte belirleyebiliriz.',
    planningTitle: 'Girişten araca kadar eşyanın izleyeceği yol',
    planning: ['Altındağ’daki adresiniz için yalnızca evin içini değil, bina kapısından sokağa çıkışı da gösterin. Basamak, dar bahçe kapısı veya araçla kapı arasındaki uzun mesafe iş planını etkileyebilir. Fotoğraf çekerken ev numarasını ve yükleme için düşünülen noktayı belirtin.', 'Dış cephe asansörü isteniyorsa pencere veya balkon açıklığı ile zemindeki kurulum alanı birlikte değerlendirilir. Kablo, ağaç ya da kapalı bir avlu varsa ekibe önceden bildirin. Her binaya aynı taşıma yöntemi uygulanacağı varsayımıyla fiyat belirlemeyiz.'],
    checklist: ['Bina girişinden yükleme noktasına kadar yolu fotoğraflayın.', 'Bahçe kapısı, basamak veya dar geçişleri önceden belirtin.', 'Asansör düşünülüyorsa cepheyi ve zemindeki alanı birlikte gösterin.'],
    questions: [{ question: 'Altındağ’da her binaya dış cephe asansörü kurulabilir mi?', answer: 'Hayır. Cepheye erişim, kurulum zemini, açıklıklar ve çevredeki engeller değerlendirilir. Uygun yöntem fotoğraf veya keşif sonrasında görüşülür.' }, { question: 'Araç bina önüne yaklaşamıyorsa bunu teklif talebinde belirtmeli miyim?', answer: 'Evet. Kapı ile yükleme noktası arasındaki yaklaşık mesafeyi ve basamakları belirtin. Bu bilgi ekip, süre ve fiyat kapsamının doğru hazırlanmasına yardımcı olur.' }],
  },
  {
    slug: 'mamak', name: 'Mamak',
    description: 'Mamak evden eve nakliyat için paketleme, mobilya sökümü ve yeni evde yerleştirme kapsamını belirleyin. Adres, kat ve eşya bilgileriyle fiyat teklifi alın.',
    intro: 'Mamak evden eve nakliyat hizmetinde eşyaların paketlenmesini, mobilyaların sökülmesini ve yeni evdeki yerleşim planını birlikte görüşüyoruz. Aynı bina içinde daire değiştirseniz de ilçeler arası taşınsanız da eşya ölçüleri ve bina erişimi önemlidir.',
    planningTitle: 'Yeni evin ölçülerini taşınmadan önce kontrol edin',
    planning: ['Mamak’taki yeni evinize geçmeden önce gardırop, yatak ve büyük koltuklar için kapı ve oda ölçülerini kontrol edin. Mobilyanın eski evden çıkması, yeni evde aynı şekilde kurulabileceği anlamına gelmez. Ölçüye bağlı bir tereddüdünüz varsa fotoğraflarla birlikte paylaşın.', 'Kolilerin üzerine yalnızca eşya adını değil, gideceği odayı da yazın. Kırılacak parçaları ayrı belirtin. Kullanacağınız ilk gün çantasını ve kişisel belgeleri kendiniz ayırmanız, yerleştirme sırasında ihtiyaç duyacağınız eşyalara ulaşmayı kolaylaştırır.'],
    checklist: ['Büyük mobilyaların yeni odadaki yerini ve ölçüsünü kontrol edin.', 'Kolileri varış odasına göre etiketleyin.', 'Kırılacak parçalar ile sökülecek mobilyaları ayrı listeleyin.'],
    questions: [{ question: 'Mamak’ta aynı bina içinde taşınmaya teklif alabilir miyim?', answer: 'Evet. Kısa mesafede de kat, merdiven, eşya miktarı ve mobilya sökümü değerlendirilir. Eski ve yeni dairenin katını ve eşya listesini paylaşın.' }, { question: 'Yeni evde mobilya yerleşimini önceden belirtmek gerekir mi?', answer: 'Büyük parçaların kurulacağı odayı ve kapılardan geçiş durumunu önceden belirtmeniz yararlıdır. Teklif aşamasında söküm, montaj ve yerleştirme kapsamını birlikte netleştirebiliriz.' }],
  },
  {
    slug: 'golbasi', name: 'Gölbaşı',
    description: 'Gölbaşı evden eve nakliyat için apartman veya müstakil ev taşıma planı. Bahçe erişimi, eşya miktarı ve paketleme ihtiyacınızla Leventoğlu’ndan teklif alın.',
    intro: 'Gölbaşı evden eve nakliyat taleplerinde apartman dairesi ve müstakil evin erişim koşullarını ayrı değerlendiriyoruz. Bahçe kapısı, bina ile araç arasındaki mesafe ve birden fazla kata dağılmış eşyalar varsa bunları ilk görüşmede belirtebilirsiniz.',
    planningTitle: 'Müstakil evde bahçe ve kat bilgisi de teklifin parçası',
    planning: ['Gölbaşı’nda müstakil bir evden taşınacaksanız yalnızca oda sayısını paylaşmak yeterli olmayabilir. Depo, çatı katı veya bahçede taşınacak eşya varsa listeye ekleyin. Araç bahçeye girebilecekse kapı genişliği ve zeminin durumu önceden değerlendirilmelidir.', 'Yeni ev birden fazla katlıysa mobilya ve kolilerin hangi kata çıkacağını belirtin. Büyük bahçe mobilyaları ile iç mekân eşyaları farklı paketleme isteyebilir. Aparatları ve bağlantı parçalarını etiketleyerek ilgili eşya ile birlikte tutmak yeniden kurulumu kolaylaştırır.'],
    checklist: ['Bahçe, depo ve diğer katlardaki eşyaları listeye ekleyin.', 'Araç girişini ve bahçe kapısını fotoğrafla gösterin.', 'Yeni evde hangi eşyanın hangi kata taşınacağını belirtin.'],
    questions: [{ question: 'Gölbaşı’nda müstakil ev taşıması için nasıl bilgi vermeliyim?', answer: 'Kat sayısını, her kattaki eşyaları, bahçe ve depo eşyalarını, kapı ile araç arasındaki mesafeyi paylaşın. Fotoğraflar veya kısa video teklifin kapsamını netleştirir.' }, { question: 'Bahçe mobilyası da ev taşıma teklifine dahil edilebilir mi?', answer: 'Taşınmasını istediğiniz bahçe mobilyalarını ölçü ve fotoğraflarıyla listeye ekleyin. Söküm, paketleme ve araçta kaplayacağı alan ev eşyalarıyla birlikte değerlendirilir.' }],
  },
];
