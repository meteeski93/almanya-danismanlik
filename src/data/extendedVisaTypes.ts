// Extended Visa Types with detailed sub-categories and profession-specific paths

export interface VisaSubType {
  code: string;
  name: string;
  description: string;
  note?: string;
  requirements: string[];
  processingTime: string;
  cost: string;
  advantages: string[];
  whoIsItFor: string[];
}

export interface ProfessionPath {
  profession: string;
  category: string;
  visaType: string;
  visaCode: string;
  requirements: string[];
  denklikRequired: boolean;
  languageRequirement: string;
  averageSalary: string;
  jobSites: string[];
  tips: string[];
}

export interface StateSpecificRule {
  state: string;
  stateCode: string;
  rule: string;
  description: string;
  applicableProfessions: string[];
  requirements: string[];
  source: string;
}

// Vize Alt Türleri (AufenthG maddeleri)
export const visaSubTypes: VisaSubType[] = [
  {
    code: "§18a",
    name: "Mesleki Yeterliliğe Dayalı Oturum İzni",
    description: "Mesleki eğitim (Ausbildung) diploması sahipleri için. Elektrikçi, tesisatçı, hemşire, kamyon şoförü gibi meslekler.",
    requirements: [
      "Almanya'da tanınan mesleki eğitim diploması",
      "Diploma denkliği (ZAB veya eyalet kurumu)",
      "Almanca B1 seviye",
      "Almanya'dan iş teklifi (Arbeitsvertrag)",
      "Maaş asgari ücretin üzerinde (~2.500-3.000€ brüt)"
    ],
    processingTime: "6-12 hafta",
    cost: "75€ vize ücreti + denklik ücreti (100-600€)",
    advantages: [
      "Kalıcı oturuma 5 yılda geçiş",
      "Aile birleşimi mümkün",
      "Meslek değiştirme hakkı (2 yıl sonra)"
    ],
    whoIsItFor: [
      "Meslek lisesi mezunları",
      "Tekniker ve ustalar",
      "Hemşire ve sağlık çalışanları",
      "Kamyon şoförleri (SRC/ADR sertifikalı)"
    ]
  },
  {
    code: "§18b",
    name: "Akademik Yeterliliğe Dayalı Oturum İzni",
    description: "Üniversite mezunları için akademik mesleklerde çalışma izni. Mühendis, yazılımcı, doktor gibi.",
    requirements: [
      "Üniversite diploması (Almanya'da tanınan)",
      "Almanya'dan iş teklifi",
      "Maaş akademik pozisyona uygun",
      "Dil şartı mesleğe göre değişir (Almanca/İngilizce)"
    ],
    processingTime: "4-10 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Kalıcı oturuma 5 yılda geçiş",
      "Aile birleşimi kolaylaştırılmış",
      "12-24 ay sonra alan dışı çalışma hakkı"
    ],
    whoIsItFor: [
      "Üniversite mezunları",
      "Mühendisler",
      "IT uzmanları",
      "Doktorlar ve akademisyenler"
    ]
  },
  {
    code: "§18g",
    name: "AB Mavi Kart (Blue Card EU)",
    description: "Nitelikli çalışanlar için en prestijli vize. En hızlı kalıcı oturum yolu.",
    requirements: [
      "Üniversite diploması VEYA IT için 3 yıl deneyim",
      "Yıllık brüt maaş: 58.400€ (2026) / 45.934€ (kıtlık meslekler)",
      "Almanya'dan iş teklifi",
      "Sosyal güvenlik primi ödemesi"
    ],
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "21-33 ayda kalıcı oturum (B1 Almanca ile 21 ay)",
      "Aile birleşimi hemen, eş çalışabilir (dil şartsız)",
      "AB içinde serbest dolaşım",
      "12 ay sonra iş değiştirme hakkı"
    ],
    whoIsItFor: [
      "Mühendisler",
      "IT uzmanları (yazılımcı, veri bilimci)",
      "Doktorlar",
      "Nitelikli yöneticiler"
    ]
  },
  {
    code: "§18d",
    name: "Araştırmacılar İçin Oturum İzni",
    description: "Almanya'da üniversite veya araştırma kurumunda proje yürütmek isteyenler.",
    requirements: [
      "Doktora diploması veya eşdeğer araştırma deneyimi",
      "Alman araştırma kurumundan davet/kabul",
      "Finansman kanıtı (burs veya maaş)",
      "Sağlık sigortası"
    ],
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Aile birleşimi kolay",
      "Kalıcı oturuma geçiş hakkı",
      "AB içinde hareket özgürlüğü"
    ],
    whoIsItFor: [
      "Doktora sonrası araştırmacılar",
      "Bilim insanları",
      "Akademisyenler"
    ]
  },
  {
    code: "§19c",
    name: "Özel Durumlarda Çalışma İzni",
    description: "Diğer kategorilere girmeyen özel veya geçici çalışma izinleri.",
    requirements: [
      "Özel uzmanlık alanı",
      "Almanya'dan iş teklifi",
      "Ekonomik yarar kanıtı",
      "Eyalet kurumu onayı (gerekirse)"
    ],
    processingTime: "8-16 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Esnek çalışma koşulları",
      "Uzatma mümkün"
    ],
    whoIsItFor: [
      "Sporcular ve antrenörler",
      "Sanatçılar ve müzisyenler",
      "Özel uzmanlar"
    ]
  },
  {
    code: "§20",
    name: "İş Arama Vizesi (Job Seeker Visa)",
    description: "Nitelikli kişilerin Almanya'da iş araması için 6 aylık vize.",
    requirements: [
      "Üniversite diploması VEYA mesleki eğitim",
      "5 yıl mesleki deneyim",
      "Almanca B1 veya İngilizce B2",
      "Geçim kaynağı kanıtı (~1.000€/ay)",
      "Sağlık sigortası"
    ],
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Almanya'da yerinde iş arama",
      "Haftada 10 saat deneme çalışması",
      "İş bulunca vize değişimi kolay"
    ],
    whoIsItFor: [
      "Üniversite mezunları",
      "Deneyimli meslek sahipleri",
      "Almanca bilenler"
    ]
  },
  {
    code: "§21",
    name: "Serbest Meslek / Yatırımcı Vizesi",
    description: "Kendi işini kurmak veya serbest çalışmak isteyenler için.",
    requirements: [
      "İkna edici iş planı (Business Plan)",
      "Ekonomik yarar ve bölgesel ihtiyaç kanıtı",
      "Yeterli sermaye (~25.000-50.000€)",
      "Sosyal güvenlik sistemi katkısı",
      "İlgili sektörde deneyim"
    ],
    processingTime: "3-6 ay",
    cost: "75€ vize ücreti + danışmanlık maliyetleri",
    advantages: [
      "3 yıl sonra kalıcı oturum (iş başarılıysa)",
      "Aile birleşimi mümkün",
      "Serbest çalışma özgürlüğü"
    ],
    whoIsItFor: [
      "Girişimciler",
      "Serbest meslek sahipleri (Freiberufler)",
      "Yatırımcılar",
      "Startup kurucuları"
    ]
  },
  {
    code: "§28",
    name: "Aile Birleşimi Vizesi",
    description: "Almanya'da yaşayan eş, ebeveyn veya çocukların yanına gitmek için.",
    note: "2026 itibarıyla online başvuru mümkün!",
    requirements: [
      "Eşin Almanya'da geçerli oturum izni",
      "Yeterli yaşam alanı (kişi başı ~12m²)",
      "Mali yeterlilik (maaaş bordrosu)",
      "Almanca A1 (bazı istisnalar var)",
      "Evlilik resmi ve belgelenebilir"
    ],
    processingTime: "8-12 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Tam aile birliği",
      "Çalışma izni (bazı durumlarda)",
      "Entegrasyon kurslarına katılım"
    ],
    whoIsItFor: [
      "Eşler (eş birleşimi)",
      "Reşit olmayan çocuklar",
      "Ebeveynler (istisnai haller)"
    ]
  },
  {
    code: "§81a",
    name: "Ön Onay (Vorabzustimmung)",
    description: "Bağımsız vize değil, süreci hızlandıran bir onay mekanizması. İşveren Federal İş Ajansı'ndan ön onay alır.",
    requirements: [
      "İşveren Federal İş Ajansı'na başvurur",
      "İş ilanı ve pozisyon detayları",
      "Adayın nitelikleri",
      "Maaş teklifi"
    ],
    processingTime: "2-4 hafta (işveren başvurusu)",
    cost: "İşveren için ücretsiz",
    advantages: [
      "Vize süreci hızlanır",
      "Ret riski azalır",
      "İşveren için güvence"
    ],
    whoIsItFor: [
      "İşverenler (yabancı çalışan alacaklar)",
      "Nitelikli işçi adayları"
    ]
  },
  {
    code: "§16d",
    name: "Meslek Tanıma / Uyum Vizesi",
    description: "Diploma kısmen tanınırsa, eksikleri tamamlamak için verilen vize.",
    requirements: [
      "Kısmi denklik kararı",
      "Uyum eğitimi planı (Adaptation)",
      "Bilgi sınavı hazırlığı (Knowledge Test)",
      "Finansman kanıtı"
    ],
    processingTime: "4-8 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Almanya'da denklik tamamlama",
      "Eğitim süresince çalışma hakkı",
      "Sonrası çalışma iznine geçiş"
    ],
    whoIsItFor: [
      "Kısmi denklik alanlar",
      "Hemşireler ve sağlık çalışanları",
      "Teknik meslek sahipleri"
    ]
  },
  {
    code: "§16f",
    name: "Mesleki Eğitim (Ausbildung) Vizesi",
    description: "Almanya'da mesleki eğitim almak isteyen gençler için.",
    requirements: [
      "Ausbildung sözleşmesi (Ausbildungsvertrag)",
      "B2 Almanca (genellikle)",
      "Okul diploması (çeviri ile)",
      "Finansman kanıtı"
    ],
    processingTime: "6-12 hafta",
    cost: "75€ vize ücreti",
    advantages: [
      "Eğitim süresince çalışma hakkı",
      "Mezuniyet sonrası iş bulma kolaylığı",
      "18 ay iş arama hakkı"
    ],
    whoIsItFor: [
      "18-25 yaş arası gençler",
      "Meslek değiştirmek isteyenler",
      "Almanca bilenler"
    ]
  }
];

// Meslek Bazlı Göç Yolları
export const professionPaths: ProfessionPath[] = [
  {
    profession: "Kaynakçı (Schweißer)",
    category: "Handwerk (Zanaat)",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Mesleki eğitim belgesi (kaynakçı sertifikası)",
      "Denklik başvurusu (ZAB veya IHK)",
      "Almanca A2-B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "A2-B1 Almanca",
    averageSalary: "2.800-4.200€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Arbeitsagentur", "JobMESH"],
    tips: [
      "TÜV sertifikaları Almanya'da geçerli",
      "Kaynak yöntemleri (MIG/MAG, TIG, elektrod) belirtin",
      "Teknik çizim okuma becerisi önemli",
      "SRC/ADR varsa lojistik sektörü de açık"
    ]
  },
  {
    profession: "Elektrikçi (Elektriker)",
    category: "Handwerk (Zanaat)",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Mesleki eğitim diploması",
      "Elektrik sertifikaları",
      "Denklik başvurusu",
      "Almanca B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "B1 Almanca",
    averageSalary: "2.600-3.800€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Arbeitsagentur", "Jobvector"],
    tips: [
      "VDE standartlarını öğrenin",
      "PLC (S7) bilgisi büyük avantaj",
      "Endüstri 4.0 ve akıllı bina sistemleri",
      "Ehliyet (B) ve araç kullanma becerisi"
    ]
  },
  {
    profession: "Tesisatçı (Installateur)",
    category: "Handwerk (Zanaat)",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Sıhhi tesisat veya HVAC eğitimi",
      "Denklik başvurusu",
      "Almanca A2-B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "A2-B1 Almanca",
    averageSalary: "2.500-3.600€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Meinestadt.de"],
    tips: [
      "Isı pompası ve yenilenebilir enerji bilgisi",
      "Baca tesisatı sertifikası (Kaminkehrer) ek avantaj",
      "Acil çağrı (Notdienst) işleri için esneklik"
    ]
  },
  {
    profession: "Hemşire (Krankenpfleger)",
    category: "Sağlık",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a / §16d",
    requirements: [
      "Hemşirelik diploması",
      "Denklik başvurusu (Anerkennung)",
      "Almanca B2 (B1 ile başlanabilir)",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "B1-B2 Almanca",
    averageSalary: "3.200-4.500€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Arbeitsagentur", "pflege.de"],
    tips: [
      "Fachkrankenpflege (yoğun bakım, onkoloji) uzmanlaşın",
      "B2 Almanca iş başvurusu için minimum",
      "Anerkennungspartnerschaft programlarına bakın",
      "Almanya'da tanıma süreci 3-6 ay"
    ]
  },
  {
    profession: "IT Uzmanı / Yazılımcı",
    category: "Bilişim",
    visaType: "AB Mavi Kart / §18b",
    visaCode: "§18g / §18b",
    requirements: [
      "Üniversite diploması VEYA 3 yıl deneyim",
      "İngilizce B2+ (yeterli olabilir)",
      "Almanca B1 (tercih edilir)",
      "Yıllık maaş: 45.934€+ (kıtlık meslekler)"
    ],
    denklikRequired: false,
    languageRequirement: "İngilizce B2 / Almanca B1",
    averageSalary: "4.500-7.000€ brüt/ay",
    jobSites: ["LinkedIn", "StepStone", "Indeed", "Stack Overflow Jobs", "Xing"],
    tips: [
      "GitHub profili çok önemli",
      "Almanca B1 iş bulmayı kolaylaştırır",
      "Berlin, Münih, Hamburg en aktif şehirler",
      "Remote iş imkanları yaygın"
    ]
  },
  {
    profession: "Mekatronik Mühendisi",
    category: "Mühendislik",
    visaType: "AB Mavi Kart / §18b",
    visaCode: "§18g / §18b",
    requirements: [
      "Mekatronik mühendisliği diploması",
      "Denklik (ZAB üzerinden)",
      "Almanca B1 veya İngilizce B2",
      "Yıllık maaş: 45.934€+"
    ],
    denklikRequired: true,
    languageRequirement: "B1 Almanca / B2 İngilizce",
    averageSalary: "4.200-6.500€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Jobvector", "LinkedIn"],
    tips: [
      "Siemens, Bosch, BMW gibi firmalar aktif",
      "PLC (Siemens S7), CAD (SolidWorks) bilgisi",
      "Otomotiv ve otomasyon sektörü büyük",
      "Almanca B2 ile iş bulma şansı artar"
    ]
  },
  {
    profession: "Kamyon Şoförü (LKW-Fahrer)",
    category: "Lojistik",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "C veya CE ehliyeti",
      "SRC ve ADR sertifikaları",
      "Denklik başvurusu (ehliyet tanıma)",
      "Almanca A2-B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "A2-B1 Almanca",
    averageSalary: "2.400-3.500€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Arbeitsagentur", "JobMESH"],
    tips: [
      "SRC (sürücü sertifikası) zorunlu",
      "ADR (tehlikeli madde) ek ücret getirir",
      "Uluslararası taşımacılık İngilizce gerektirir",
      "Dijital takograf (Fahrerkarte) bilgisi"
    ]
  },
  {
    profession: "Aşçı (Koch/Köchin)",
    category: "Turizm / Gastronomi",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Aşçılık diploması veya sertifikası",
      "Denklik başvurusu (IHK)",
      "Almanca A2-B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "A2-B1 Almanca",
    averageSalary: "2.300-3.200€ brüt/ay",
    jobSites: ["Gastronomiecareer.de", "Indeed", "StepStone"],
    tips: [
      "HACCP hijyen sertifikası önemli",
      "Türk restoranlarında başlamak kolaylaştırır",
      "Alman mutfağı bilgisi artı puan",
      "Fachkoch (uzman aşçı) sertifikası hedefleyin"
    ]
  },
  {
    profession: "İnşaat İşçisi / Kalıpçı",
    category: "İnşaat",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Mesleki eğitim veya deneyim",
      "Denklik başvurusu",
      "Almanca A1-A2",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: true,
    languageRequirement: "A1-A2 Almanca",
    averageSalary: "2.200-3.200€ brüt/ay",
    jobSites: ["StepStone", "Indeed", "Arbeitsagentur"],
    tips: [
      "Baugewerbe (inşaat sektörü) büyük açık var",
      "Gerüstbauer (iskele kurulumu) uzmanlığı",
      "Beton ve kalıp işleri talep görüyor",
      "TÜV sertifikaları (iş güvenliği) avantaj"
    ]
  },
  {
    profession: "Bakım Çalışanı / Hasta Bakıcı",
    category: "Sağlık / Bakım",
    visaType: "Mesleki Yeterlilik Vizesi",
    visaCode: "§18a",
    requirements: [
      "Bakım sertifikası veya deneyim",
      "Denklik başvurusu (varsa)",
      "Almanca A2-B1",
      "Almanya'dan iş teklifi"
    ],
    denklikRequired: false,
    languageRequirement: "A2-B1 Almanca",
    averageSalary: "2.400-3.200€ brüt/ay",
    jobSites: ["pflege.de", "StepStone", "Indeed", "Arbeitsagentur"],
    tips: [
      "Pflegefachkraft (nitelikli bakım) hedefleyin",
      "24 saat bakım (Pflege zu Hause) işleri",
      "Almanca B1 ile hastanelerde çalışılabilir",
      "Ausbildung (3 yıllık eğitim) düşünülebilir"
    ]
  }
];

// Eyalet Bazlı Özel Kurallar
export const stateSpecificRules: StateSpecificRule[] = [
  {
    state: "Kuzey Ren-Vestfalya (Nordrhein-Westfalen)",
    stateCode: "NRW",
    rule: "Denkliksiz Çalışma İmkanı",
    description: "NRW eyaletinde anaokulu (Kindergarten) veya okul öncesi eğitim alanında üniversite diploması olanlar, denklik almadan Almanca B2 seviyesi ile çalışmaya başlayabilirler.",
    applicableProfessions: ["Anaokulu öğretmeni", "Erzieher (eğitimci)"],
    requirements: [
      "Üniversite diploması (okul öncesi eğitim)",
      "Almanca B2 sertifikası",
      "Almanya'dan iş teklifi (anaokulundan)",
      "Denklik süreci başlatılmış olmalı"
    ],
    source: "Landesregierung NRW - Anerkennungsgesetz"
  },
  {
    state: "Berlin",
    stateCode: "BE",
    rule: "Startup Vizesi Kolaylığı",
    description: "Berlin, girişimciler için Startup Vizesi (§21) sürecini hızlandırmıştır. İş planı onaylıysa 4-6 haftada sonuçlanır.",
    applicableProfessions: ["Girişimci", "Startup kurucusu", "Serbest meslek sahibi"],
    requirements: [
      "İş planı (Business Plan)",
      "Ekonomik yarar kanıtı",
      "Yeterli sermaye",
      "Berlin'de adres"
    ],
    source: "Berlin Partner für Wirtschaft und Technologie"
  },
  {
    state: "Bavyera (Bayern)",
    stateCode: "BY",
    rule: "Hızlı Denklik Süreci",
    description: "Bavyera'da sağlık ve teknik mesleklerde denklik süreci diğer eyaletlere göre daha hızlı işler (2-4 ay).",
    applicableProfessions: ["Hemşire", "Doktor", "Tekniker", "Mühendis"],
    requirements: [
      "Tam evrak teslimi",
      "Online başvuru (anerkennung-in-deutschland.de)",
      "Bavyera'da iş teklisi (tercih)"
    ],
    source: "Bayerisches Staatsministerium"
  },
  {
    state: "Baden-Württemberg",
    stateCode: "BW",
    rule: "IT Uzmanları İçin Özel Program",
    description: "Baden-Württemberg IT sektöründe çalışacaklar için 'IT-Fachkräfte' programı ile hızlı vize süreci sunar.",
    applicableProfessions: ["Yazılımcı", "IT uzmanı", "Veri bilimci", "Siber güvenlik uzmanı"],
    requirements: [
      "IT diploması veya 3 yıl deneyim",
      "Almanca A2 veya İngilizce B2",
      "Baden-Württemberg'den iş teklifi"
    ],
    source: "Baden-Württemberg International"
  }
];

// İş Bulma Siteleri Detaylı
export const jobSearchSites = [
  {
    name: "StepStone",
    url: "https://www.stepstone.de",
    description: "Almanya'nın en büyük iş portalı. Özellikle mühendislik, finans, sağlık ve yönetim kadroları için.",
    bestFor: ["Mühendisler", "Finans uzmanları", "Yöneticiler", "Nitelikli uzmanlar"],
    language: "Almanca / İngilizce",
    features: ["CV yükleme", "İş uyarıları", "Maaş bilgisi"]
  },
  {
    name: "Indeed Deutschland",
    url: "https://de.indeed.com",
    description: "Google benzeri arama motoru. Binlerce siteyi tarar, en geniş ilan havuzu.",
    bestFor: ["Herkes", "Mavi yakalı", "Beyaz yakalı"],
    language: "Almanca / İngilizce",
    features: ["Web crawler", "Geniş filtreleme", "Şirket yorumları"]
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    description: "Uluslararası profesyonel ağ. Berlin, Münih start-up'ları ve uluslararası şirketler için.",
    bestFor: ["IT uzmanları", "Beyaz yakalı", "Uluslararası kariyer"],
    language: "İngilizce",
    features: ["Networking", "Doğrudan başvuru", "Recruiter bağlantısı"]
  },
  {
    name: "XING",
    url: "https://www.xing.com",
    description: "Almanya'nın LinkedIn'i. Yerel Alman firmaları (KOBİ'ler) için vazgeçilmez.",
    bestFor: ["Almanca bilenler", "Yerel firmalar", "DACH bölgesi"],
    language: "Almanca",
    features: ["Grup tartışmaları", "Etkinlikler", "Yerel network"]
  },
  {
    name: "Arbeitsagentur (Jobbörse)",
    url: "https://www.arbeitsagentur.de",
    description: "Federal İş Ajansı resmi sitesi. Vize sürecinde en güvenilir kaynak.",
    bestFor: ["Herkes", "Vize başvurusu yapacaklar", "Devlet desteği arayanlar"],
    language: "Almanca",
    features: ["Resmi ilanlar", "İş danışmanlığı", "Mesleki eğitim bilgisi"]
  },
  {
    name: "JobMESH",
    url: "https://www.jobmesh.de",
    description: "2023'te kurulan yeni nesil iş portalı. Çoklu dil desteği (İngilizce, Rusça, Lehçe, Romence).",
    bestFor: ["Yabancılar", "Çok dil bilenler", "Farklı sektörler"],
    language: "Çok dilli",
    features: ["1 milyon+ ilan", "Akıllı eşleştirme", "Gizlilik odaklı"]
  },
  {
    name: "Jobvector",
    url: "https://www.jobvector.com",
    description: "Mühendislik, IT, tıp ve bilim alanlarına uzmanlaşmış.",
    bestFor: ["Mühendisler", "IT uzmanları", "Doktorlar", "Araştırmacılar"],
    language: "Almanca / İngilizce",
    features: ["Sektörel uzmanlaşma", "Teknik pozisyonlar"]
  },
  {
    name: "Make it in Germany",
    url: "https://www.make-it-in-germany.com",
    description: "Alman hükümetinin resmi göç portalı. İngilizce ilanlar ve vize rehberliği.",
    bestFor: ["Yabancı uzmanlar", "Göç etmek isteyenler", "İngilizce bilenler"],
    language: "İngilizce / Almanca",
    features: ["Resmi bilgi", "Vize rehberi", "Denklik bilgileri"]
  },
  {
    name: "Staufenbiel",
    url: "https://www.staufenbiel.de",
    description: "Öğrenciler ve yeni mezunlar için. Staj, trainee ve entry-level pozisyonlar.",
    bestFor: ["Öğrenciler", "Yeni mezunlar", "Stajyerler"],
    language: "Almanca",
    features: ["Kariyer fuarları", "CV kontrolü", "Entry-level odaklı"]
  },
  {
    name: "Kununu",
    url: "https://www.kununu.com",
    description: "Şirket yorumları ve maaş bilgileri. Başvurmadan önce mutlaka kontrol edin!",
    bestFor: ["Araştırmacılar", "Şirket kültürü meraklıları"],
    language: "Almanca",
    features: ["Şirket puanları", "Maaş raporları", "Çalışan yorumları"]
  }
];

// Online Başvuru Süreçleri 2026
export const onlineApplicationProcess = {
  title: "2026 Dijital Vize Başvuru Sistemi",
  description: "Almanya 1 Ocak 2025'ten itibaren yeni dijital vize sistemine geçti. 2026'da 167 konsoloslukta aktif.",
  portalUrl: "https://digital.diplo.de",
  availableAt: "167 Alman konsolosluğu ve büyükelçiliği",
  visaTypes: [
    "Öğrenci vizesi",
    "Şans Kartı (Chancenkarte)",
    "Çalışma vizeleri (tüm türler)",
    "Aile birleşimi vizesi",
    "Ausbildung vizesi"
  ],
  steps: [
    {
      step: 1,
      title: "Online Başvuru",
      description: "Consular Services Portal üzerinden form doldurun, belgeleri yükleyin."
    },
    {
      step: 2,
      title: "Dijital İnceleme",
      description: "Yetkililer başvurunuzu online inceler. Eksik belge varsa portal üzerinden istenir."
    },
    {
      step: 3,
      title: "Yüz Yüze Randevu",
      description: "Ön onay aldıktan sonra biyometri ve kimlik doğrulama için konsolosluğa gidin."
    }
  ],
  processingTime: "4-6 hafta (önceki 8-12 haftaya göre hızlandı)",
  benefits: [
    "Posta gönderimine gerek yok",
    "Randevu bekleme süresi kısaldı",
    "Belge takibi online yapılabilir",
    "Eksik belge durumunda hızlı bildirim"
  ]
};

// Sosyal Medya Bilgileri
export const socialMedia = {
  instagram: "@metein.de",
  tiktok: "@metein.de",
  description: "Almanya göç ve vize süreçleri hakkında güncel bilgiler, deneyimler ve ipuçları için bizi takip edin!"
};
