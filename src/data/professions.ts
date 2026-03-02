export interface Profession {
  id: string;
  title: string;
  titleDE: string;
  category: string;
  demand: "Çok Yüksek" | "Yüksek" | "Orta" | "Düşük";
  avgSalary: string;
  salaryRange: string;
  recognitionRequired: boolean;
  recognitionBody: string;
  recognitionDuration: string;
  visaType: string;
  languageRequirement: string;
  experienceRequired: string;
  jobSites: string[];
  processDuration: string;
  tips: string[];
  story?: {
    name: string;
    age: number;
    from: string;
    experience: string;
    quote: string;
  };
}

export const professions: Profession[] = [
  {
    id: "elektrikci",
    title: "Elektrikçi",
    titleDE: "Elektriker",
    category: "Teknik",
    demand: "Çok Yüksek",
    avgSalary: "2.800 - 4.200€",
    salaryRange: "Başlangıç: 2.500€ | Tecrübeli: 4.000€+",
    recognitionRequired: true,
    recognitionBody: "HWK (Esnaf ve Sanatkarlar Odası)",
    recognitionDuration: "2-4 ay",
    visaType: "Çalışma Vizesi veya Şans Kartı",
    languageRequirement: "B1 Almanca (önerilen)",
    experienceRequired: "2+ yıl deneyim",
    jobSites: ["indeed.de", "stepstone.de", "jobware.de", "hwk.de"],
    processDuration: "4-8 ay (denklik dahil)",
    tips: [
      "Mesleki denklik (Anerkennung) şart",
      "Elektro-Handwerk belgesi avantaj sağlar",
      "Kleine Elektro-Unternehmer lisansı düşünün",
      "Fachrichtung (uzmanlık) belirtin"
    ],
    story: {
      name: "Mehmet K.",
      age: 32,
      from: "İstanbul",
      experience: "5 yıl elektrikçi, 2 yıldır Berlin'de çalışıyor",
      quote: "Denklik süreci 3 ay sürdü ama şimdi kendi işimi kurmayı düşünüyorum."
    }
  },
  {
    id: "hemsire",
    title: "Hemşire",
    titleDE: "Krankenpfleger/in",
    category: "Sağlık",
    demand: "Çok Yüksek",
    avgSalary: "3.200 - 4.500€",
    salaryRange: "Başlangıç: 3.000€ | Uzman: 4.500€+",
    recognitionRequired: true,
    recognitionBody: "Landesprüfungsamt (Eyalet Sınav Dairesi)",
    recognitionDuration: "3-6 ay",
    visaType: "Çalışma Vizesi (Fachkräfteeinwanderungsgesetz)",
    languageRequirement: "B2 Almanca (zorunlu)",
    experienceRequired: "1+ yıl deneyim",
    jobSites: ["indeed.de", "stepstone.de", "pflege.de", "klinikum.de"],
    processDuration: "6-12 ay",
    tips: [
      "B2 Almanca şart - önceden hazırlanın",
      "Fachkräfteeinwanderungsgesetz ile kolaylaştı",
      "Anpassungslehrgang (uyum kursu) gerekebilir",
      "Kennziffer sistemi ile maaş artar"
    ],
    story: {
      name: "Ayşe Y.",
      age: 28,
      from: "Ankara",
      experience: "3 yıl hemşire, Hamburg'da çalışıyor",
      quote: "Almanca B2'yi Türkiye'de aldım. İş bulmak çok kolay oldu."
    }
  },
  {
    id: "doktor",
    title: "Doktor",
    titleDE: "Arzt/Ärztin",
    category: "Sağlık",
    demand: "Yüksek",
    avgSalary: "5.500 - 12.000€",
    salaryRange: "Asistan: 5.500€ | Uzman: 8.000€+ | Özel: 12.000€+",
    recognitionRequired: true,
    recognitionBody: "Landesärztekammer (Eyalet Hekimler Odası)",
    recognitionDuration: "6-12 ay",
    visaType: "Mavi Kart veya Çalışma Vizesi",
    languageRequirement: "C1 Almanca (zorunlu)",
    experienceRequired: "Tıp diploması + staj",
    jobSites: ["indeed.de", "stepstone.de", "aerzteblatt.de", "marburger-bund.de"],
    processDuration: "8-18 ay",
    tips: [
      "C1 Almanca şart - Tıp Almancası öğrenin",
      "Fachsprachenprüfung (mesleki dil sınavı) var",
      "Kenntnisprüfung (bilgi sınavı) gerekebilir",
      "Approbation (doktor lisansı) alınmalı"
    ],
    story: {
      name: "Dr. Can B.",
      age: 35,
      from: "İzmir",
      experience: "6 yıl doktor, Münih'te uzmanlık yapıyor",
      quote: "Approbation süreci uzun sürdü ama şimdi tam doktorum."
    }
  },
  {
    id: "yazilimci",
    title: "Yazılımcı",
    titleDE: "Softwareentwickler/in",
    category: "IT",
    demand: "Çok Yüksek",
    avgSalary: "4.500 - 8.000€",
    salaryRange: "Junior: 4.000€ | Senior: 6.500€+ | Lead: 8.500€+",
    recognitionRequired: false,
    recognitionBody: "Gerekmez",
    recognitionDuration: "-",
    visaType: "Mavi Kart (önerilen) veya Çalışma Vizesi",
    languageRequirement: "İngilizce B2+ (yeterli)",
    experienceRequired: "2+ yıl deneyim veya üniversite",
    jobSites: ["linkedin.com", "indeed.de", "stepstone.de", "xing.com", "stackoverflow.com/jobs"],
    processDuration: "2-4 ay",
    tips: [
      "İngilizce yeterli - Almanca şart değil",
      "Mavi Kart için 45.300€+ maaş gerekli",
      "GitHub portföyü önemli",
      "Remote iş imkanları çok"
    ],
    story: {
      name: "Emre S.",
      age: 29,
      from: "Bursa",
      experience: "4 yıl yazılımcı, Berlin'de startup'ta çalışıyor",
      quote: "LinkedIn üzerinden iş buldum. 2 haftada vize aldım."
    }
  },
  {
    id: "muhendis",
    title: "Mühendis",
    titleDE: "Ingenieur/in",
    category: "Mühendislik",
    demand: "Yüksek",
    avgSalary: "4.500 - 7.500€",
    salaryRange: "Başlangıç: 4.200€ | Kıdemli: 6.500€+",
    recognitionRequired: false,
    recognitionBody: "Gerekmez (ZAB onayı yeterli)",
    recognitionDuration: "-",
    visaType: "Mavi Kart (önerilen)",
    languageRequirement: "İngilizce B2 veya Almanca B1",
    experienceRequired: "Üniversite diploması",
    jobSites: ["indeed.de", "stepstone.de", "xing.com", "ingenieur.de"],
    processDuration: "2-4 ay",
    tips: [
      "Mavi Kart için 45.300€+ maaş",
      "STEM alanlarında 41.041€ yeterli",
      "ZAB denklik başvurusu yapın",
      "Branchen (sektör) uzmanlığı önemli"
    ],
    story: {
      name: "Selin A.",
      age: 27,
      from: "Ankara",
      experience: "3 yıl makine mühendisi, Stuttgart'ta çalışıyor",
      quote: "Otomotiv sektöründe iş çok. Mavi Kart ile 1 yılda kalıcı oturum aldım."
    }
  },
  {
    id: "cnc-operator",
    title: "CNC Operatörü",
    titleDE: "CNC-Fräser/Dreher",
    category: "Üretim",
    demand: "Yüksek",
    avgSalary: "2.800 - 4.000€",
    salaryRange: "Başlangıç: 2.500€ | Usta: 3.800€+",
    recognitionRequired: true,
    recognitionBody: "HWK veya IHK",
    recognitionDuration: "2-4 ay",
    visaType: "Çalışma Vizesi",
    languageRequirement: "A2-B1 Almanca",
    experienceRequired: "2+ yıl CNC deneyimi",
    jobSites: ["indeed.de", "stepstone.de", "jobware.de", "make-it-in-germany.com"],
    processDuration: "4-8 ay",
    tips: [
      "CNC programlama bilgisi önemli",
      "Siemens/Fanuc kontrol sistemleri",
      "Metallindustrie (metal sektörü) çok talep",
      "Tarifvertrag (toplu sözleşme) maaşları yüksek"
    ],
    story: {
      name: "Burak T.",
      age: 30,
      from: "Konya",
      experience: "6 yıl CNC operatörü, Wolfsburg'ta çalışıyor",
      quote: "VW tedarikçisinde çalışıyorum. Mesleki denklik 2 ay sürdü."
    }
  },
  {
    id: "kaynakci",
    title: "Kaynakçı",
    titleDE: "Schweißer/in",
    category: "Üretim",
    demand: "Çok Yüksek",
    avgSalary: "2.800 - 4.200€",
    salaryRange: "Başlangıç: 2.600€ | Usta: 4.000€+",
    recognitionRequired: true,
    recognitionBody: "HWK veya TÜV",
    recognitionDuration: "2-3 ay",
    visaType: "Çalışma Vizesi",
    languageRequirement: "A2 Almanca",
    experienceRequired: "2+ yıl kaynak deneyimi",
    jobSites: ["indeed.de", "stepstone.de", "jobware.de", "schweissen.de"],
    processDuration: "4-6 ay",
    tips: [
      "Schweißerprüfung (kaynak sınavı) gerekli",
      "MAG/MIG/TIG yöntemlerini bilin",
      "Schweißerbrief (kaynak sertifikası) avantaj",
      "Inşaat ve gemi sanayisi çok talep"
    ],
    story: {
      name: "Kemal H.",
      age: 33,
      from: "Samsun",
      experience: "8 yıl kaynakçı, Hamburg limanında çalışıyor",
      quote: "Gemi sanayisinde iş çok. Haftada 50 saat çalışıyorum ama kazanç iyi."
    }
  },
  {
    id: "tir-soforu",
    title: "Tır Şoförü",
    titleDE: "Berufskraftfahrer/in",
    category: "Lojistik",
    demand: "Çok Yüksek",
    avgSalary: "2.500 - 3.500€",
    salaryRange: "Yerel: 2.500€ | Uluslararası: 3.200€+",
    recognitionRequired: true,
    recognitionBody: "Fahrerlaubnis (Ehliyet değişimi)",
    recognitionDuration: "1-3 ay",
    visaType: "Çalışma Vizesi (Fachkräfteeinwanderungsgesetz)",
    languageRequirement: "A2-B1 Almanca",
    experienceRequired: "CE ehliyet + 2 yıl deneyim",
    jobSites: ["indeed.de", "stepstone.de", "logistik-jobs.de", "berufskraftfahrer.de"],
    processDuration: "4-8 ay",
    tips: [
      "Türk CE ehliyeti 6 ay geçerli",
      "Alman ehliyeti için Umschreibung gerekli",
      "Fahrerkarte (sürücü kartı) alınmalı",
      "Uluslararası taşımacılık daha kazançlı"
    ],
    story: {
      name: "Osman D.",
      age: 38,
      from: "Trabzon",
      experience: "12 yıl tır şoförü, Frankfurt'ta çalışıyor",
      quote: "Uluslararası taşımacılık yapıyorum. Avrupa'yı geziyorum."
    }
  },
  {
    id: "yasli-bakici",
    title: "Yaşlı Bakıcı",
    titleDE: "Altenpfleger/in",
    category: "Sağlık",
    demand: "Çok Yüksek",
    avgSalary: "3.000 - 4.200€",
    salaryRange: "Başlangıç: 2.800€ | Uzman: 4.000€+",
    recognitionRequired: true,
    recognitionBody: "Landesprüfungsamt",
    recognitionDuration: "3-6 ay",
    visaType: "Çalışma Vizesi (Fachkräfteeinwanderungsgesetz)",
    languageRequirement: "B1 Almanca (zorunlu)",
    experienceRequired: "1+ yıl deneyim veya sertifika",
    jobSites: ["indeed.de", "pflege.de", "altenpflege.de", "stepstone.de"],
    processDuration: "6-12 ay",
    tips: [
      "B1 Almanca şart - iletişim çok önemli",
      "Anerkennung (denklik) süreci uzun olabilir",
      "24-Stunden-Pflege (24 saat bakım) seçeneği",
      "Pflegekräfte aus dem Ausland programı"
    ],
    story: {
      name: "Fatma K.",
      age: 42,
      from: "Kayseri",
      experience: "5 yıl bakıcı, Köln'de çalışıyor",
      quote: "Yaşlı bakımı zor ama ödüllendirici. Ailem gibi oldular."
    }
  },
  {
    id: "otel-personeli",
    title: "Otel Personeli",
    titleDE: "Hotelfachmann/frau",
    category: "Turizm",
    demand: "Orta",
    avgSalary: "2.200 - 3.200€",
    salaryRange: "Başlangıç: 2.200€ | Kıdemli: 3.000€+",
    recognitionRequired: false,
    recognitionBody: "Gerekmez",
    recognitionDuration: "-",
    visaType: "Çalışma Vizesi",
    languageRequirement: "B1 Almanca + İngilizce",
    experienceRequired: "1+ yıl otel deneyimi",
    jobSites: ["indeed.de", "hotelcareer.de", "hospitality-online.com", "stepstone.de"],
    processDuration: "3-6 ay",
    tips: [
      "Turizm sezonu (Mayıs-Eylül) çok iş var",
      "Mehrere Sprachen (çok dil) bilmek avantaj",
      "Ausbildung ile daha kolay",
      "Saisonarbeit (mevsimlik iş) başlangıç için"
    ],
    story: {
      name: "Zeynep M.",
      age: 25,
      from: "Antalya",
      experience: "3 yıl otel resepsiyonu, Berlin'de çalışıyor",
      quote: "Turizm deneyimim işe yaradı. 4 dil biliyorum, bu büyük avantaj."
    }
  },
  {
    id: "asci",
    title: "Aşçı",
    titleDE: "Koch/Köchin",
    category: "Gastronomi",
    demand: "Yüksek",
    avgSalary: "2.400 - 3.500€",
    salaryRange: "Commis: 2.400€ | Chef de Partie: 3.000€ | Sous Chef: 3.500€+",
    recognitionRequired: true,
    recognitionBody: "HWK (Esnaf Odası)",
    recognitionDuration: "2-4 ay",
    visaType: "Çalışma Vizesi",
    languageRequirement: "A2-B1 Almanca",
    experienceRequired: "2+ yıl mutfak deneyimi",
    jobSites: ["indeed.de", "gastronomiecareer.de", "hotelcareer.de", "stepstone.de"],
    processDuration: "4-8 ay",
    tips: [
      "Ausbildung belgesi varsa denklik kolay",
      "Michelin yıldızlı restoranlar daha çok kazandırır",
      "Türk restoranlarında iş bulmak kolay",
      "Arbeitszeiten (çalışma saatleri) zor olabilir"
    ],
    story: {
      name: "Ali R.",
      age: 31,
      from: "Gaziantep",
      experience: "7 yıl aşçı, Münih'te çalışıyor",
      quote: "Türk mutfağı uzmanı olarak iş buldum. Kebap ustasıyım."
    }
  },
  {
    id: "insaat-ustasi",
    title: "İnşaat Ustası",
    titleDE: "Bauarbeiter/in",
    category: "İnşaat",
    demand: "Yüksek",
    avgSalary: "2.500 - 3.800€",
    salaryRange: "Yardımcı: 2.300€ | Usta: 3.500€+",
    recognitionRequired: false,
    recognitionBody: "Gerekmez (Ausbildung belgesi varsa avantaj)",
    recognitionDuration: "-",
    visaType: "Çalışma Vizesi veya Şans Kartı",
    languageRequirement: "A2 Almanca",
    experienceRequired: "2+ yıl inşaat deneyimi",
    jobSites: ["indeed.de", "bauportal.de", "stepstone.de", "jobware.de"],
    processDuration: "4-8 ay",
    tips: [
      "Baugewerbe (inşaat sektörü) çok talep",
      "Fachrichtung (uzmanlık) belirtin",
      "Maurer (duvarcı), Zimmerer (marangoz) vb.",
      "Tarifvertrag maaşları yüksek"
    ],
    story: {
      name: "Hasan P.",
      age: 36,
      from: "Erzurum",
      experience: "10 yıl inşaat ustası, Berlin'de çalışıyor",
      quote: "Alman inşaat şirketinde çalışıyorum. Disiplin çok önemli."
    }
  },
  {
    id: "mekanikci",
    title: "Mekanikçi",
    titleDE: "Kfz-Mechatroniker/in",
    category: "Teknik",
    demand: "Yüksek",
    avgSalary: "2.800 - 4.200€",
    salaryRange: "Azubi: 2.500€ | Geselle: 3.500€ | Meister: 4.500€+",
    recognitionRequired: true,
    recognitionBody: "HWK veya IHK",
    recognitionDuration: "2-4 ay",
    visaType: "Çalışma Vizesi",
    languageRequirement: "B1 Almanca",
    experienceRequired: "Ausbildung veya 3+ yıl deneyim",
    jobSites: ["indeed.de", "kfz-jobs.de", "stepstone.de", "autojobs.de"],
    processDuration: "4-8 ay",
    tips: [
      "Otomotiv sektörü Almanya'nın kalbi",
      "VW, BMW, Mercedes çok eleman arıyor",
      "Elektromobilität (elektrikli araç) bilgisi avantaj",
      "Meister (usta) belgesi maaşı artırır"
    ],
    story: {
      name: "Yusuf E.",
      age: 29,
      from: "Bursa",
      experience: "6 yıl oto tamircisi, Stuttgart'ta VW'de çalışıyor",
      quote: "VW fabrikasında çalışıyorum. Mesleki denklik yaptım."
    }
  },
  {
    id: "it-uzmani",
    title: "IT Uzmanı",
    titleDE: "IT-Spezialist/in",
    category: "IT",
    demand: "Çok Yüksek",
    avgSalary: "4.500 - 8.000€",
    salaryRange: "Junior: 4.000€ | Senior: 6.500€+ | Architect: 8.500€+",
    recognitionRequired: false,
    recognitionBody: "Gerekmez",
    recognitionDuration: "-",
    visaType: "Mavi Kart (önerilen)",
    languageRequirement: "İngilizce B2+ (yeterli)",
    experienceRequired: "3+ yıl IT deneyimi",
    jobSites: ["linkedin.com", "indeed.de", "stepstone.de", "xing.com", "stackoverflow.com/jobs"],
    processDuration: "2-4 ay",
    tips: [
      "Cloud (AWS/Azure/GCP), Security, DevOps çok talep",
      "Zertifizierungen (sertifikalar) önemli",
      "Remote iş imkanları çok",
      "Freelance/Contracting seçeneği"
    ],
    story: {
      name: "Ceren B.",
      age: 28,
      from: "İstanbul",
      experience: "5 yıl sistem uzmanı, Hamburg'ta çalışıyor",
      quote: "AWS sertifikalarım işe yaradı. Remote çalışıyorum."
    }
  },
  {
    id: "ogretmen",
    title: "Öğretmen",
    titleDE: "Lehrer/in",
    category: "Eğitim",
    demand: "Orta",
    avgSalary: "3.500 - 5.500€",
    salaryRange: "A12: 3.800€ | A13: 4.500€ | A16: 5.500€+",
    recognitionRequired: true,
    recognitionBody: "Kultusministerium (Eğitim Bakanlığı)",
    recognitionDuration: "6-12 ay",
    visaType: "Çalışma Vizesi",
    languageRequirement: "C1 Almanca (zorunlu)",
    experienceRequired: "Öğretmenlik diploması + pedagojik formasyon",
    jobSites: ["indeed.de", "lehrerjobs.de", "stepstone.de", "lehrer-werden.de"],
    processDuration: "8-18 ay",
    tips: [
      "C1 Almanca şart - dil çok önemli",
      "Anpassungslehrgang (uyum kursu) 2 yıl sürebilir",
      "Özel okullar daha kolay iş verir",
      "Türkçe öğretmenliği talep görüyor"
    ],
    story: {
      name: "Merve T.",
      age: 30,
      from: "Ankara",
      experience: "4 yıl İngilizce öğretmeni, Berlin'de çalışıyor",
      quote: "Özel okulda çalışıyorum. Anpassungslehrgang yapıyorum."
    }
  },
  {
    id: "anaokulu-ogretmeni",
    title: "Anaokulu Öğretmeni",
    titleDE: "Erzieher/in",
    category: "Eğitim",
    demand: "Çok Yüksek",
    avgSalary: "3.000 - 4.200€",
    salaryRange: "Başlangıç: 2.800€ | Kıdemli: 4.000€+",
    recognitionRequired: true,
    recognitionBody: "Jugendamt (Gençlik Dairesi)",
    recognitionDuration: "3-6 ay",
    visaType: "Çalışma Vizesi (Fachkräfteeinwanderungsgesetz)",
    languageRequirement: "B2 Almanca (zorunlu)",
    experienceRequired: "Çocuk gelişimi diploması veya 2+ yıl deneyim",
    jobSites: ["indeed.de", "kita.de", "stepstone.de", "erzieherin.de"],
    processDuration: "6-12 ay",
    tips: [
      "Kita (kreş) personeli çok aranıyor",
      "B2 Almanca şart - iletişim önemli",
      "Anerkennung (denklik) süreci var",
      "Fortbildung (hizmet içi eğitim) imkanları"
    ],
    story: {
      name: "Seda K.",
      age: 26,
      from: "İzmir",
      experience: "3 yıl anaokulu öğretmeni, Münih'te çalışıyor",
      quote: "Kita'da çalışıyorum. Çocuklarla çalışmak çok güzel."
    }
  },
  {
    id: "fizyoterapist",
    title: "Fizyoterapist",
    titleDE: "Physiotherapeut/in",
    category: "Sağlık",
    demand: "Yüksek",
    avgSalary: "3.000 - 4.500€",
    salaryRange: "Başlangıç: 2.800€ | Özel pratik: 4.000€+",
    recognitionRequired: true,
    recognitionBody: "Landesprüfungsamt",
    recognitionDuration: "3-6 ay",
    visaType: "Çalışma Vizesi (Fachkräfteeinwanderungsgesetz)",
    languageRequirement: "B2 Almanca (zorunlu)",
    experienceRequired: "Fizyoterapi diploması",
    jobSites: ["indeed.de", "physio.de", "stepstone.de", "therapie.de"],
    processDuration: "6-12 ay",
    tips: [
      "B2 Almanca şart - hasta iletişimi önemli",
      "Özel pratik açma imkanı var",
      "Heilpraktiker (doğal tedavi) lisansı düşünün",
      "Manuelle Therapie (manuel terapi) uzmanlığı"
    ],
    story: {
      name: "Barış L.",
      age: 32,
      from: "Adana",
      experience: "5 yıl fizyoterapist, Frankfurt'ta çalışıyor",
      quote: "Özel klinikte çalışıyorum. Kendi pratiğimi açmayı düşünüyorum."
    }
  }
];

export const professionCategories = [
  { id: "all", name: "Tümü", count: professions.length },
  { id: "sağlık", name: "Sağlık", count: professions.filter(p => p.category === "Sağlık").length },
  { id: "it", name: "IT & Teknoloji", count: professions.filter(p => p.category === "IT").length },
  { id: "mühendislik", name: "Mühendislik", count: professions.filter(p => p.category === "Mühendislik").length },
  { id: "üretim", name: "Üretim", count: professions.filter(p => p.category === "Üretim").length },
  { id: "eğitim", name: "Eğitim", count: professions.filter(p => p.category === "Eğitim").length },
  { id: "teknik", name: "Teknik", count: professions.filter(p => p.category === "Teknik").length },
  { id: "lojistik", name: "Lojistik", count: professions.filter(p => p.category === "Lojistik").length },
  { id: "turizm", name: "Turizm & Gastronomi", count: professions.filter(p => p.category === "Turizm" || p.category === "Gastronomi").length },
  { id: "inşaat", name: "İnşaat", count: professions.filter(p => p.category === "İnşaat").length },
];
