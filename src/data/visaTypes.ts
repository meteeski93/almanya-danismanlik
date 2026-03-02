export interface VisaType {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  processingTime: string;
  cost: string;
  requirements: string[];
  advantages: string[];
  disadvantages: string[];
  whoIsItFor: string[];
  steps: string[];
  icon: string;
  color: string;
}

export const visaTypes: VisaType[] = [
  {
    id: "chancenkarte",
    title: "Şans Kartı (Chancenkarte)",
    shortTitle: "Şans Kartı",
    description: "Almanya'ya iş teklifi olmadan gitmenizi sağlayan yeni nitelikli göç yasası kapsamındaki vize türü. 1 yıl boyunca Almanya'da iş arayabilir ve part-time çalışabilirsiniz.",
    duration: "1 yıl (üni mezunuysanız 18 ay)",
    processingTime: "4-12 hafta",
    cost: "75€ vize ücreti + 1.000€+ yaşam masrafı",
    requirements: [
      "Üniversite diploması VEYA 6 puan toplamak",
      "Almanca A1 veya İngilizce B2 seviye dil belgesi",
      "Geçim kaynağınızı kanıtlamak (aylık ~1.000€)",
      "Sağlık sigortası",
      "Geçerli pasaport (10 yıldan eski olmamalı)"
    ],
    advantages: [
      "İş teklifi olmadan başvuru yapabilirsiniz",
      "Almanya'ya gidip yerinde iş arayabilirsiniz",
      "Haftada 20 saat part-time çalışabilirsiniz",
      "İş bulunca direkt çalışma iznine dönüşür",
      "Aile birleşimi yapılabilir"
    ],
    disadvantages: [
      "Puan sistemi karmaşık olabilir",
      "Yaşam masraflarını karşılamanız gerekir",
      "1 yıl içinde iş bulamazsanız geri dönmek zorundasınız",
      "Almanca şartı (en az A1)"
    ],
    whoIsItFor: [
      "Üniversite mezunları (direkt başvuru)",
      "Meslek lisesi mezunları (6 puan toplayabilenler)",
      "Almanca bilenler",
      "Almanya'da iş aramak isteyenler"
    ],
    steps: [
      "Dil sertifikası alın (Goethe A1 veya İngilizce B2)",
      "Evrakları hazırlayın (diploma, SGK dökümü, CV)",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun ve mülakat yapın",
      "Vize onayı sonrası Almanya'ya gidin",
      "Belediyeye kaydolun (Anmeldung)",
      "Yabancılar dairesine gidin ve Şans Kartınızı alın",
      "İş aramaya başlayın!"
    ],
    icon: "Ticket",
    color: "bg-emerald-500"
  },
  {
    id: "bluecard",
    title: "Mavi Kart (EU Blue Card)",
    shortTitle: "Mavi Kart",
    description: "Nitelikli çalışanlar için en prestijli çalışma izni. Üniversite mezunu veya IT uzmanları için ideal. En hızlı kalıcı oturum yolu.",
    duration: "4 yıl (yenilenebilir)",
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Üniversite diploması (Almanya'da tanınan) VEYA IT için 3 yıl deneyim",
      "Almanya'dan iş teklifi (Arbeitsvertrag)",
      "Yıllık brüt maaş: 48.300€ (normal) / 43.760€ (eksik meslekler)",
      "Sağlık sigortası"
    ],
    advantages: [
      "En hızlı kalıcı oturum (21-33 ay)",
      "Aile birleşimi hemen yapılır",
      "Eş çalışabilir ve dil şartı yoktur",
      "Diğer AB ülkelerine geçiş kolaydır",
      "Sosyal hakların tamamından yararlanma"
    ],
    disadvantages: [
      "Önce iş teklifi almanız gerekir",
      "Maaş şartı yüksek",
      "Üniversite diploması şartı (IT hariç)"
    ],
    whoIsItFor: [
      "Mühendisler",
      "IT uzmanları (yazılımcılar, sistem adminleri)",
      "Doktorlar ve sağlık çalışanları",
      "Üniversite mezunu nitelikli çalışanlar"
    ],
    steps: [
      "Almanya'dan iş teklifi alın",
      "Diploma denkliği başvurusu yapın (ZAB)",
      "Evrakları hazırlayın",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun",
      "Vize onayı sonrası Almanya'ya gidin",
      "Yabancılar dairesine gidin ve Mavi Kartınızı alın"
    ],
    icon: "CreditCard",
    color: "bg-blue-600"
  },
  {
    id: "workvisa",
    title: "Normal Çalışma Vizesi",
    shortTitle: "Çalışma Vizesi",
    description: "Daha düşük maaşlı işler için standart çalışma vizesi. Mesleki denklik gerektiren meslekler için uygundur.",
    duration: "1-4 yıl (iş süresine göre)",
    processingTime: "6-12 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Almanya'dan iş teklifi",
      "Mesleki diploma veya üniversite",
      "Mesleki denklik (ZAB onayı)",
      "Almanca A2-B1 seviye (mesleğe göre)",
      "Sağlık sigortası"
    ],
    advantages: [
      "Daha düşük maaş şartı",
      "Çeşitli meslek grupları için uygun",
      "Aile birleşimi yapılabilir"
    ],
    disadvantages: [
      "Mesleki denklik süreci uzun olabilir",
      "Almanca şartı",
      "Kalıcı oturum süresi daha uzun (5 yıl)"
    ],
    whoIsItFor: [
      "Hemşireler ve bakım çalışanları",
      "Teknikerler",
      "Ustalar ve çeşitli meslek grupları",
      "Daha düşük maaşlı işlerde çalışacaklar"
    ],
    steps: [
      "Almanya'dan iş teklifi alın",
      "Mesleki denklik başvurusu yapın",
      "Dil sertifikası alın",
      "Evrakları hazırlayın",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun",
      "Federal İstihdam Ajansı onayı bekleyn"
    ],
    icon: "Briefcase",
    color: "bg-amber-500"
  },
  {
    id: "studentvisa36f",
    title: "Öğrenci Vizesi - 36F (Şartlı Kabul)",
    shortTitle: "36F Şartlı Kabul",
    description: "Üniversiteye dil yeterliliği olmadan şartlı kabul alan öğrenciler için. Önce dil kursu, sonra üniversite. § 16b AufenthG kapsamında özel bir öğrenci vizesi türüdür.",
    duration: "6 ay - 2 yıl (dil kursu + üniversite)",
    processingTime: "6-12 hafta",
    cost: "75€ vize ücreti + 11.904€ bloke hesap",
    requirements: [
      "Üniversiteden şartlı kabul mektubu (Bedingte Zulassung)",
      "Almanca dil kursu kaydı (varsa)",
      "Bloke hesap (11.904€)",
      "Sağlık sigortası",
      "Pasaport (10 yıldan eski olmamalı)"
    ],
    advantages: [
      "Dil yeterliliği olmadan üniversite yolunuz açık",
      "Almanya'da dil öğrenme imkanı",
      "Üniversite hazırlık okulu (Studienkolleg) hakkı",
      "Dil kursu sonrası normal öğrenci vizesine geçiş"
    ],
    disadvantages: [
      "İlk yıl sadece resmi tatillerde çalışma izni",
      "2. yıldan itibaren normal öğrenci çalışma hakkı (140 gün)",
      "Dil kursu masrafları ek yük",
      "Süre sınırlı, uzatma gerekir"
    ],
    whoIsItFor: [
      "Almancası yetersiz üniversite adayları",
      "Studienkolleg (hazırlık okulu) öğrencileri",
      "Dil kursu + üniversite kombinasyonu yapacaklar",
      "TestAS sınavına girecekler"
    ],
    steps: [
      "Üniversiteye şartlı başvuru yapın (Bedingte Zulassung)",
      "Almanya'da dil kursuna kaydolun (varsa)",
      "Bloke hesap açın (11.904€)",
      "Sağlık sigortası yaptırın",
      "Evrakları hazırlayın (şartlı kabul mektubu, kurs kaydı)",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun ve 36F vizenizi alın",
      "Almanya'ya gidin, dil kursuna başlayın",
      "Dil sınavını geçin (DSH/TestDaF)",
      "Üniversiteye kaydolun ve vizenizi uzatın"
    ],
    icon: "BookOpen",
    color: "bg-indigo-500"
  },
  {
    id: "studentvisa",
    title: "Öğrenci Vizesi (Normal)",
    shortTitle: "Öğrenci Vizesi",
    description: "Almanya'da üniversite okumak için. Dil yeterliliği olan öğrenciler için. Öğrenciyken part-time çalışabilirsiniz.",
    duration: "Eğitim süresi + 18 ay iş arama",
    processingTime: "6-12 hafta",
    cost: "75€ vize ücreti + 11.904€ bloke hesap",
    requirements: [
      "Üniversite kabulü (Zulassung) - tam kabul",
      "Almanca B2/C1 veya İngilizce (programa göre)",
      "Bloke hesap (11.904€ / ~450.000₺)",
      "Sağlık sigortası"
    ],
    advantages: [
      "Eğitim sonrası 18 ay iş arama hakkı",
      "Yılda 120 gün tam zamanlı çalışma izni (280 yarım gün)",
      "Öğrenci indirimlerinden yararlanma",
      "Mezuniyet sonrası kolay çalışma izni"
    ],
    disadvantages: [
      "Yüksek mali garanti (bloke hesap)",
      "Eğitim süresince sınırlı çalışma",
      "Dil şartı (B2/C1)"
    ],
    whoIsItFor: [
      "Almancası yeterli üniversite adayları (B2/C1)",
      "Yüksek lisans/doktora yapacaklar",
      "İngilizce program öğrencileri"
    ],
    steps: [
      "Üniversiteye başvurun ve tam kabul alın",
      "Bloke hesap açın (11.904€ yatırın)",
      "Sağlık sigortası yaptırın",
      "Evrakları hazırlayın",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun"
    ],
    icon: "GraduationCap",
    color: "bg-purple-600"
  },
  {
    id: "jobseekervisa",
    title: "İş Arama Vizesi",
    shortTitle: "İş Arama Vizesi",
    description: "Nitelikli meslek sahipleri için 6 aylık iş arama vizesi. Şans Kartı'nın öncüsüydü, şimdi yerini Şans Kartı aldı.",
    duration: "6 ay",
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Üniversite diploması",
      "5 yıl mesleki deneyim",
      "Geçim kaynağını kanıtlamak",
      "Almanca B1",
      "Sağlık sigortası"
    ],
    advantages: [
      "Almanya'da iş arama imkanı",
      "Haftada 10 saat deneme çalışması"
    ],
    disadvantages: [
      "Sadece 6 ay süre",
      "Çalışma izni yok",
      "Şans Kartı daha avantajlı"
    ],
    whoIsItFor: [
      "Şans Kartı'na başvuramayanlar",
      "Kısa süreli iş aramak isteyenler"
    ],
    steps: [
      "Evrakları hazırlayın",
      "iDATA'dan randevu alın",
      "Konsolosluğa başvurun"
    ],
    icon: "Search",
    color: "bg-cyan-500"
  },
  {
    id: "au pair",
    title: "Au Pair Vizesi",
    shortTitle: "Au Pair",
    description: "18-30 yaş arası gençler için aile yanında çocuk bakımı ve kültür değişimi programı.",
    duration: "12 ay",
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "18-30 yaş arası",
      "Almanca A1",
      "Host aile bulmak",
      "Bakım deneyimi",
      "Sağlık sigortası"
    ],
    advantages: [
      "Konaklama ve yemek ücretsiz",
      "Haftalık harçlık (280€)",
      "Almanca öğrenme fırsatı",
      "Kültür değişimi"
    ],
    disadvantages: [
      "Sadece 12 ay",
      "Düşük gelir",
      "Çalışma saatleri sınırlı (haftada 30 saat)"
    ],
    whoIsItFor: [
      "18-30 yaş arası gençler",
      "Almanca öğrenmek isteyenler",
      "Çocuk bakımı deneyimi olanlar"
    ],
    steps: [
      "Au Pair ajansına kaydolun",
      "Host aile bulun",
      "Anlaşma imzalayın",
      "Evrakları hazırlayın",
      "Başvuru yapın"
    ],
    icon: "Baby",
    color: "bg-pink-500"
  },
  {
    id: "fsj",
    title: "FSJ/BFD Vizesi (Gönüllü Hizmet)",
    shortTitle: "FSJ/BFD",
    description: "Freiwilliges Soziales Jahr (FSJ) veya Bundesfreiwilligendienst (BFD) için gönüllü hizmet vizesi.",
    duration: "12-18 ay",
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "27 yaş altı (FSJ) / yaş sınırı yok (BFD)",
      "Almanca B1",
      "Kurumdan kabul mektubu",
      "Sağlık sigortası"
    ],
    advantages: [
      "Aylık harçlık (450-550€)",
      "Konaklama desteği",
      "Almanca pratiği",
      "Sosyal deneyim"
    ],
    disadvantages: [
      "Sınırlı süre",
      "Düşük gelir",
      "Sonrası çalışma izni garanti değil"
    ],
    whoIsItFor: [
      "Sosyal alanda deneyim kazanmak isteyenler",
      "Almanca geliştirmek isteyenler",
      "Genç gönüllüler"
    ],
    steps: [
      "Kuruma başvurun",
      "Kabul alın",
      "Evrakları hazırlayın",
      "Başvuru yapın"
    ],
    icon: "HeartHandshake",
    color: "bg-rose-500"
  },
  {
    id: "tourist",
    title: "Tourist/Schengen Vizesi",
    shortTitle: "Tourist Vizesi",
    description: "Kısa süreli turistik ziyaretler için. 90 günden fazla kalmak ve çalışmak yasaktır.",
    duration: "90 gün (180 gün içinde)",
    processingTime: "15 gün",
    cost: "90€",
    requirements: [
      "Geçerli pasaport",
      "Seyahat sağlık sigortası",
      "Otel rezervasyonu veya davetiye",
      "Uçak rezervasyonu",
      "Banka hesap dökümü"
    ],
    advantages: [
      "Hızlı sonuçlanır",
      "Kolay başvuru"
    ],
    disadvantages: [
      "Çalışmak yasaktır",
      "Sadece 90 gün",
      "Uzatma zordur"
    ],
    whoIsItFor: [
      "Turistik ziyaretçiler",
      "Akraba ziyareti",
      "Kısa süreli iş görüşmeleri"
    ],
    steps: [
      "Evrakları hazırlayın",
      "iDATA'dan randevu alın",
      "Başvuru yapın"
    ],
    icon: "Plane",
    color: "bg-sky-500"
  },
  {
    id: "familyreunion",
    title: "Aile Birleşimi Vizesi (Familiennachzug)",
    shortTitle: "Aile Birleşimi",
    description: "Almanya'da oturum izni olan eşinizin veya anne-babanın yanına gitmek için. Eş, çocuk ve bazı durumlarda ebeveynler için geçerlidir.",
    duration: "Süresiz (eşin oturumuna bağlı)",
    processingTime: "8-12 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Almanya'da oturum izni olan eş/anne-baba",
      "Evlilik cüzdanı (aslı ve çeviri)",
      "Almanca A1 sertifikası (eş için)",
      "Yeterli konut (12 m² yetişkin, 10 m² çocuk)",
      "Gelir kanıtı (sosyal yardım alınmamalı)",
      "Sağlık sigortası"
    ],
    advantages: [
      "Aile birlikte yaşayabilir",
      "Çalışma izni verilir (eş için)",
      "Sosyal haklardan yararlanma",
      "Kalıcı oturuma giden yol"
    ],
    disadvantages: [
      "Almanca A1 şartı (çoğu durumda)",
      "Gelir ve konut şartları",
      "Sponsor bağımlılığı"
    ],
    whoIsItFor: [
      "Almanya'da eşi olanlar",
      "Reşit olmayan çocuklar",
      "Maddi desteklenen ebeveynler",
      "Kayıtlı partnerler (eşcinsel çiftler)"
    ],
    steps: [
      "Eşiniz Almanya'da oturum izni almalı",
      "Randevu alın (digital.diplo.de)",
      "Evrakları hazırlayın (evlilik, doğum belgeleri)",
      "Almanca A1 sertifikası alın",
      "Başvurunuzu yapın",
      "Almanya'ya gidin ve oturum izni alın"
    ],
    icon: "Users",
    color: "bg-rose-600"
  },
  {
    id: "selfemployed",
    title: "Serbest Meslek/Yatırımcı Vizesi",
    shortTitle: "Serbest Meslek",
    description: "Almanya'da serbest meslek (Freiberufler) veya şirket kurmak (Selbstständiger) isteyenler için. Yazar, tasarımcı, danışman, girişimciler için uygundur.",
    duration: "1-3 yıl (uzatılabilir)",
    processingTime: "8-16 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Ekonomik ilgi veya bölgesel talep kanıtı",
      "İş planı ve gelir tahmini",
      "Yeterli sermaye veya kredi taahhüdü",
      "Müşteri mektupları (en az 2 adet)",
      "45+ yaş için emeklilik planı",
      "Sağlık sigortası"
    ],
    advantages: [
      "Kendi işinizi kurabilirsiniz",
      "Serbest çalışma özgürlüğü",
      "Aile birleşimi yapılabilir",
      "Kalıcı oturum (3-5 yıl sonra)"
    ],
    disadvantages: [
      "Müşteri bulma zorunluluğu",
      "Gelir garantisi yok",
      "45+ yaş için ek şartlar",
      "Vergi yükümlülükleri"
    ],
    whoIsItFor: [
      "Yazılımcılar, tasarımcılar",
      "Yazarlar, çevirmenler",
      "Danışmanlar, koçlar",
      "Girişimciler, start-up kurucuları",
      "Sanatçılar, fotoğrafçılar"
    ],
    steps: [
      "İş planı hazırlayın",
      "Müşteri mektupları alın",
      "Gelir tahmini oluşturun",
      "Evrakları hazırlayın",
      "Başvuru yapın (Almanya'da veya konsoloslukta)",
      "Vergi dairesine kaydolun (Finanzamt)"
    ],
    icon: "Briefcase",
    color: "bg-indigo-600"
  },
  {
    id: "researcher",
    title: "Bilimsel Araştırmacı Vizesi",
    shortTitle: "Araştırmacı",
    description: "Alman üniversite veya araştırma kurumlarında bilimsel çalışma yapmak için. Doktora sonrası araştırmacılar, bilim insanları için ideal.",
    duration: "3 ay - 1 yıl (uzatılabilir)",
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Doktora derecesi veya doktora adayı",
      "Araştırma kurumundan kabul mektubu",
      "Aylık 1.027€ gelir kanıtı (12.324€/yıl)",
      "Sağlık sigortası",
      "Konaklama kanıtı"
    ],
    advantages: [
      "Almanya'da araştırma yapma",
      "Diğer Schengen ülkelerinde çalışma (180 gün)",
      "Aile birleşimi yapılabilir",
      "Mavi Kart'a geçiş imkanı"
    ],
    disadvantages: [
      "Süre sınırlı (uzatma gerekir)",
      "Gelir garantisi şartı",
      "Kurum bağımlılığı"
    ],
    whoIsItFor: [
      "Doktora sonrası araştırmacılar",
      "Bilim insanları",
      "Profesörler, akademisyenler",
      "Doktora öğrencileri (iş sözleşmesi ile)"
    ],
    steps: [
      "Araştırma kurumundan kabul alın",
      "Finansman kanıtı hazırlayın",
      "Evrakları toplayın",
      "Başvuru yapın",
      "Almanya'ya gidin ve oturum izni alın"
    ],
    icon: "GraduationCap",
    color: "bg-teal-600"
  },
  {
    id: "internship",
    title: "Staj Vizesi (Praktikum)",
    shortTitle: "Staj Vizesi",
    description: "Almanya'da staj yapmak isteyen üniversite öğrencileri ve yeni mezunlar için. Zorunlu veya gönüllü stajlar için uygundur.",
    duration: "3-12 ay",
    processingTime: "4-12 hafta",
    cost: "75€ vize ücreti",
    requirements: [
      "Üniversite öğrencisi veya son 2 yıl içinde mezun",
      "Staj sözleşmesi (Praktikumsvertrag)",
      "Federal İstihdam Ajansı onayı (3+ ay gönüllü staj)",
      "Sağlık sigortası",
      "Gelir kanıtı (asgari ücret: 12.82€/saat)"
    ],
    advantages: [
      "Uluslararası iş deneyimi",
      "Almanca pratiği",
      "Kariyer gelişimi",
      "İş ağı oluşturma"
    ],
    disadvantages: [
      "3+ ay staj için onay gerekli",
      "Süre sınırlı",
      "Asgari ücret şartı (gönüllü staj)"
    ],
    whoIsItFor: [
      "Üniversite öğrencileri",
      "Yeni mezunlar (2 yıl içinde)",
      "Zorunlu staj yapacaklar",
      "Uluslararası deneyim isteyenler"
    ],
    steps: [
      "Staj yerinden kabul alın",
      "Federal İstihdam Ajansı onayı alın (gerekirse)",
      "Evrakları hazırlayın",
      "Başvuru yapın",
      "Almanya'ya gidin ve kaydolun"
    ],
    icon: "ClipboardList",
    color: "bg-orange-500"
  },
  {
    id: "business",
    title: "Ticari Vize (Business Visa)",
    shortTitle: "Ticari Vize",
    description: "İş seyahatleri, fuar ziyaretleri, toplantılar ve konferanslar için kısa süreli vize. 90 günü aşamaz.",
    duration: "90 gün (180 gün içinde)",
    processingTime: "15 gün",
    cost: "90€",
    requirements: [
      "Geçerli pasaport",
      "Davet mektubu (Alman şirketten)",
      "Seyahat sağlık sigortası",
      "Uçak rezervasyonu",
      "Otel rezervasyonu",
      "Banka hesap dökümü"
    ],
    advantages: [
      "Hızlı sonuçlanır",
      "İş görüşmeleri yapılabilir",
      "Fuar ve konferanslara katılım"
    ],
    disadvantages: [
      "Çalışmak yasaktır",
      "Sadece 90 gün",
      "Ücretli faaliyet yasaktır"
    ],
    whoIsItFor: [
      "İş seyahatine gidenler",
      "Fuar ziyaretçileri",
      "Konferans katılımcıları",
      "İş görüşmesi yapacaklar"
    ],
    steps: [
      "Davet mektubu alın",
      "Evrakları hazırlayın",
      "Randevu alın",
      "Başvuru yapın"
    ],
    icon: "Building2",
    color: "bg-slate-600"
  },
  {
    id: "transit",
    title: "Transit Vize (A Tipi)",
    shortTitle: "Transit Vize",
    description: "Schengen vizesi olmayan bir ülkeye giderken Almanya'da aktarma yapacaklar için. Havalimanı transit bölgesinde kalınır.",
    duration: "24 saat",
    processingTime: "15 gün",
    cost: "90€",
    requirements: [
      "Geçerli pasaport",
      "Varış ülkesi vizesi (gerekirse)",
      "Uçak bileti (devam ediş)",
      "Transit bölgede kalma garantisi"
    ],
    advantages: [
      "Hızlı sonuçlanır",
      "Kolay başvuru"
    ],
    disadvantages: [
      "Sadece 24 saat",
      "Havalimanı dışına çıkılamaz",
      "Pasaport kontrolüne takılmadan geçiş"
    ],
    whoIsItFor: [
      "Schengen dışı ülkelere gidenler",
      "Almanya'da aktarma yapacaklar",
      "Havalimanı transit yolcuları"
    ],
    steps: [
      "Uçak biletinizi alın",
      "Evrakları hazırlayın",
      "Randevu alın",
      "Başvuru yapın"
    ],
    icon: "Plane",
    color: "bg-gray-500"
  },
  {
    id: "artist",
    title: "Sanatçı/Kültürel Vize",
    shortTitle: "Sanatçı Vizesi",
    description: "Sanatsal ve kültürel etkinlikler, konserler, festivaller ve gösteriler için. Sanatçılar, müzisyenler, dansçılar için.",
    duration: "90 gün (180 gün içinde)",
    processingTime: "15 gün",
    cost: "90€",
    requirements: [
      "Geçerli pasaport",
      "Etkinlik davetiyesi veya sözleşme",
      "Seyahat sağlık sigortası",
      "Konaklama kanıtı",
      "Banka hesap dökümü"
    ],
    advantages: [
      "Kültürel etkinliklere katılım",
      "Performans sergileme",
      "Sanatsal işbirlikleri"
    ],
    disadvantages: [
      "Sadece 90 gün",
      "Ücretli performans için ek izin gerekli",
      "Sponsor bağımlılığı"
    ],
    whoIsItFor: [
      "Sanatçılar, müzisyenler",
      "Dansçılar, oyuncular",
      "Festival katılımcıları",
      "Kültürel temsilciler"
    ],
    steps: [
      "Etkinlik organizatöründen davet alın",
      "Evrakları hazırlayın",
      "Randevu alın",
      "Başvuru yapın"
    ],
    icon: "Palette",
    color: "bg-violet-500"
  }
];

export const recognitionTypes = [
  {
    id: "full",
    title: "Tam Denklik (Volle Gleichwertigkeit)",
    description: "Mesleğiniz Almanya'daki meslekle tamamen eşdeğer. Direkt çalışmaya başlayabilirsiniz.",
    requirements: ["Teorik ve pratik eğitim tam", "Süre ve içerik uyumlu"]
  },
  {
    id: "partial",
    title: "Kısmi Denklik (Teilweise Gleichwertigkeit)",
    description: "Eğitiminizde eksiklikler var. Tamamlama önlemleri (Adaptationslehrgang) almanız gerekir.",
    requirements: ["Teorik veya pratik eksiklik", "Ek eğitim veya sınav gerekli"]
  },
  {
    id: "none",
    title: "Denklik Yok (Keine Gleichwertigkeit)",
    description: "Eğitiminiz Almanya'daki meslekle eşdeğer değil. Yeniden eğitim veya farklı bir yol izlemeniz gerekir.",
    requirements: ["Büyük farklılıklar", "Yeniden eğitim önerilir"]
  }
];

export const faqData = [
  {
    q: "Şans Kartı ile Mavi Kart arasındaki fark nedir?",
    a: "Şans Kartı iş teklifi olmadan Almanya'ya gidip iş aramanızı sağlar. Mavi Kart ise önce iş teklifi almanızı gerektirir ama daha hızlı kalıcı oturum hakkı verir. Şans Kartı daha esnek, Mavi Kart daha güvenli bir yoldur."
  },
  {
    q: "Mesleki denklik ne kadar sürer?",
    a: "Denklik başvurusu genellikle 3-6 ay içinde sonuçlanır. ZAB (Merkezi Denklik Değerlendirme Ofisi) üzerinden yapılır. Bazı meslekler için eyalet kurumları da yetkilidir."
  },
  {
    q: "Almanca bilmeden gidebilir miyim?",
    a: "Mavi Kart ile IT sektöründe İngilizce ile çalışabilirsiniz. Ancak Şans Kartı için en az A1, normal çalışma vizesi için A2-B1 seviye Almanca gerekir. Günlük hayat için Almanca bilmek çok faydalıdır."
  },
  {
    q: "Ailem de gelebilir mi?",
    a: "Mavi Kart ve Şans Kartı ile aile birleşimi yapılabilir. Mavi Kart'ta eş dil şartı olmadan çalışabilir. Çalışma vizesinde de aile birleşimi mümkündür ama eş için Almanca A1 şartı olabilir."
  },
  {
    q: "Kalıcı oturum ne zaman alırım?",
    a: "Mavi Kart ile 21-33 ay, Şans Kartı/Çalışma vizesi ile genellikle 5 yıl. Almanca B1 seviye ve sosyal güvenlik primi ödeme şartı vardır."
  },
  {
    q: "Türkiye'den iş bulmak mümkün mü?",
    a: "Evet, LinkedIn, Xing, StepStone gibi sitelerden başvuru yapabilirsiniz. IT sektörü uzaktan işe alım yapıyor. Ancak çoğu işveren yüz yüze görüşmek istiyor."
  },
  {
    q: "Bloke hesap nedir, zorunlu mu?",
    a: "Bloke hesap, Almanya'da yaşama masraflarınızı karşılayabileceğinizi gösteren bir banka hesabıdır. Öğrenci vizesi için zorunludur (11.904€). Şans Kartı için de talep edilebilir."
  },
  {
    q: "Vize reddedilirse ne olur?",
    a: "Ret gerekçesi yazılı olarak bildirilir. Eksik evrak varsa tamamlayıp tekrar başvurabilirsiniz. Haksız ret durumunda idari mahkemeye itiraz edebilirsiniz."
  }
];

export const requiredDocuments = [
  {
    category: "Kimlik ve Pasaport",
    items: [
      "Geçerli pasaport (10 yıldan eski olmamalı, 2 boş sayfa)",
      "2 adet biyometrik fotoğraf (35×45 mm, beyaz fon)",
      "Nüfus cüzdanı fotokopisi",
      "Varsa eski pasaportlar"
    ]
  },
  {
    category: "Eğitim ve Mesleki Belgeler",
    items: [
      "Diploma ve transkript (noter onaylı Türkçe + Almanca/İngilizce çeviri)",
      "Mesleki denklik kararı (varsa)",
      "SGK hizmet dökümü (iş deneyimi için)",
      "Sertifikalar ve kurs belgeleri"
    ]
  },
  {
    category: "Dil Belgeleri",
    items: [
      "Goethe-Zertifikat (Almanca için)",
      "IELTS/TOEFL (İngilizce için)",
      "TELC, ÖSD, TestDaF (diğer kabul edilen sınavlar)"
    ]
  },
  {
    category: "Mali Belgeler",
    items: [
      "Banka hesap dökümü (son 3 ay)",
      "Bloke hesap onayı (öğrenciler için)",
      "Maaş bordrosu (çalışanlar için)",
      "Gelir vergisi beyannamesi (serbest meslek için)"
    ]
  },
  {
    category: "Sağlık ve Sigorta",
    items: [
      "Seyahat sağlık sigortası (30.000€ teminatlı)",
      "Almanya sağlık sigortası onayı (varsa)"
    ]
  },
  {
    category: "İş ve Konaklama",
    items: [
      "İş teklifi/çalışma sözleşmesi (varsa)",
      "Otel rezervasyonu veya kira sözleşmesi",
      "Davet mektubu (varsa)"
    ]
  }
];
