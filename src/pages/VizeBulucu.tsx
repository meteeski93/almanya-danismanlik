import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  XCircle,
  GraduationCap,
  Briefcase,
  Users,
  Plane,
  Search,
  Heart,
  Baby,
  Wallet,
  BookOpen,
  AlertTriangle,
  RefreshCw,
  MapPin,
  Languages,
  Clock,
  Building,
  Euro,
  Shield,
  Sparkles,
  Star,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { visaTypes } from '@/data/visaTypes';

interface Question {
  id: number;
  question: string;
  subtitle?: string;
  options: Array<{
    text: string;
    description?: string;
    visas: string[];
    icon: React.ElementType;
    color?: string;
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Almanya'ya gitme amacınız nedir?",
    subtitle: "Bu soru en uygun vize kategorisini belirlememize yardımcı olacak",
    options: [
      { text: "Çalışmak ve kariyer yapmak", description: "Kalıcı iş, tam zamanlı çalışma", visas: ["chancenkarte", "bluecard", "workvisa", "jobseekervisa"], icon: Briefcase, color: "blue" },
      { text: "Üniversite/Lisansüstü okumak", description: "Lisans, yüksek lisans, doktora", visas: ["studentvisa", "researcher"], icon: GraduationCap, color: "purple" },
      { text: "Ailemle birlikte yaşamak", description: "Eş, çocuk veya aile birleşimi", visas: ["familyreunion"], icon: Users, color: "rose" },
      { text: "Deneyim kazanmak/Gönüllü hizmet", description: "Staj, au pair, FSJ/BFD", visas: ["internship", "au pair", "fsj"], icon: Heart, color: "pink" },
      { text: "Kendi işimi kurmak", description: "Serbest meslek, startup, girişimcilik", visas: ["selfemployed"], icon: Building, color: "amber" },
      { text: "Kısa süreli ziyaret", description: "Turizm, iş toplantısı, akraba ziyareti", visas: ["tourist", "business"], icon: Plane, color: "cyan" },
    ]
  },
  {
    id: 2,
    question: "Eğitim durumunuz nedir?",
    subtitle: "En az mezun olduğunuz son okul seviyesi",
    options: [
      { text: "Doktora / PhD", description: "Doktora derecesi veya üstü", visas: ["bluecard", "researcher", "chancenkarte"], icon: Star, color: "amber" },
      { text: "Yüksek lisans / Master", description: "Lisansüstü eğitim mezunu", visas: ["bluecard", "chancenkarte", "workvisa", "researcher"], icon: GraduationCap, color: "blue" },
      { text: "Lisans / Üniversite", description: "4 yıllık üniversite mezunu", visas: ["chancenkarte", "bluecard", "workvisa", "studentvisa", "jobseekervisa"], icon: BookOpen, color: "emerald" },
      { text: "Meslek lisesi / Teknik okul", description: "2-3 yıllık mesleki eğitim", visas: ["workvisa", "studentvisa", "au pair"], icon: Briefcase, color: "orange" },
      { text: "Lise / Dengi", description: "12 yıllık temel eğitim", visas: ["studentvisa", "au pair", "fsj"], icon: Baby, color: "pink" },
      { text: "Lise altı / Devam ediyor", description: "Öğrenciyim veya lise altı eğitim", visas: ["studentvisa", "au pair"], icon: BookOpen, color: "gray" },
    ]
  },
  {
    id: 3,
    question: "Mesleki deneyiminiz nedir?",
    subtitle: "Çalışma hayatınızdaki toplam deneyim süresi",
    options: [
      { text: "5 yıl ve üzeri", description: "Uzman seviyesi deneyim", visas: ["bluecard", "chancenkarte", "workvisa", "jobseekervisa"], icon: TrendingUp, color: "emerald" },
      { text: "2-5 yıl arası", description: "Orta seviye deneyim", visas: ["chancenkarte", "workvisa", "bluecard"], icon: Briefcase, color: "blue" },
      { text: "1-2 yıl arası", description: "Junior seviye deneyim", visas: ["workvisa", "studentvisa", "internship"], icon: Clock, color: "amber" },
      { text: "Staj / Part-time deneyim", description: "Sınırlı veya staj deneyimi", visas: ["internship", "studentvisa", "au pair"], icon: BookOpen, color: "purple" },
      { text: "Deneyimim yok", description: "Yeni mezun veya deneyimsiz", visas: ["studentvisa", "au pair", "fsj", "internship"], icon: Baby, color: "pink" },
    ]
  },
  {
    id: 4,
    question: "Almanca seviyeniz nedir?",
    subtitle: "Mevcut Almanca yeterlilik düzeyiniz",
    options: [
      { text: "B2 ve üzeri (Akıcı)", description: "Rahat iletişim kurabilirim", visas: ["chancenkarte", "bluecard", "workvisa", "studentvisa", "familyreunion", "selfemployed"], icon: Languages, color: "emerald" },
      { text: "B1 (Orta seviye)", description: "Günlük konuşmalar yapabilirim", visas: ["chancenkarte", "workvisa", "studentvisa", "familyreunion"], icon: BookOpen, color: "blue" },
      { text: "A2 (Temel+)", description: "Basit cümleler kurabilirim", visas: ["studentvisa36f", "au pair", "fsj"], icon: Clock, color: "amber" },
      { text: "A1 (Başlangıç)", description: "Çok temel kelimeler biliyorum", visas: ["studentvisa36f", "au pair", "fsj", "familyreunion"], icon: Baby, color: "pink" },
      { text: "Hiç bilmiyorum", description: "Almanca bilmiyorum - dil kursu ile başlayacağım", visas: ["studentvisa36f", "bluecard", "tourist", "business", "researcher"], icon: XCircle, color: "gray" },
    ]
  },
  {
    id: 5,
    question: "Almanya'da iş teklifiniz var mı?",
    subtitle: "Resmi bir iş teklifi veya sözleşmeniz var mı?",
    options: [
      { text: "Evet, imzalı iş sözleşmem var", description: "Alman şirketinden resmi teklif", visas: ["bluecard", "workvisa"], icon: CheckCircle, color: "emerald" },
      { text: "Mülakat aşamasındayım", description: "Görüşmeler devam ediyor", visas: ["chancenkarte", "bluecard", "workvisa"], icon: Clock, color: "blue" },
      { text: "Henüz başvurmadım", description: "İş aramaya başlamadım", visas: ["chancenkarte", "jobseekervisa", "studentvisa"], icon: Search, color: "amber" },
      { text: "Kendi işimi kuracağım", description: "Serbest meslek veya şirket", visas: ["selfemployed"], icon: Building, color: "orange" },
      { text: "İş aramayacağım", description: "Çalışma planım yok", visas: ["studentvisa", "familyreunion", "tourist"], icon: XCircle, color: "gray" },
    ]
  },
  {
    id: 6,
    question: "Mali kaynaklarınız nasıl?",
    subtitle: "Almanya'da yaşam masraflarınızı nasıl karşılayacaksınız?",
    options: [
      { text: "12.000€+ birikimim var", description: "Bloke hesap açabilirim", visas: ["studentvisa", "chancenkarte", "selfemployed"], icon: Wallet, color: "emerald" },
      { text: "6.000-12.000€ arası", description: "Orta düzeyde birikim", visas: ["chancenkarte", "au pair", "fsj"], icon: Euro, color: "blue" },
      { text: "İş geliri ile karşılayacağım", description: "Maaş veya iş geliri", visas: ["bluecard", "workvisa"], icon: Briefcase, color: "amber" },
      { text: "Burs / Sponsor", description: "DAAD, şirket bursu vb.", visas: ["studentvisa", "researcher"], icon: Star, color: "purple" },
      { text: "Ailem destekleyecek", description: "Eş veya aile desteği", visas: ["familyreunion", "studentvisa"], icon: Users, color: "rose" },
    ]
  },
  {
    id: 7,
    question: "Yaş aralığınız nedir?",
    subtitle: "Bazı vizeler yaş sınırı içerir",
    options: [
      { text: "18-21 yaş", description: "Genç yetişkin", visas: ["studentvisa", "au pair", "fsj", "internship"], icon: Baby, color: "pink" },
      { text: "22-27 yaş", description: "Kariyer başlangıcı", visas: ["chancenkarte", "bluecard", "workvisa", "studentvisa", "au pair", "fsj"], icon: Sparkles, color: "blue" },
      { text: "28-35 yaş", description: "Kariyer gelişimi", visas: ["chancenkarte", "bluecard", "workvisa", "familyreunion", "studentvisa"], icon: TrendingUp, color: "emerald" },
      { text: "36-45 yaş", description: "Orta kariyer", visas: ["bluecard", "workvisa", "familyreunion", "selfemployed"], icon: Briefcase, color: "amber" },
      { text: "45+ yaş", description: "İleri kariyer", visas: ["bluecard", "workvisa", "familyreunion"], icon: Shield, color: "gray" },
    ]
  },
  {
    id: 8,
    question: "Mesleki denklik durumunuz nedir?",
    subtitle: "Mesleğinizin Almanya'da tanınması (ZAB/Eyalet kurumu)",
    options: [
      { text: "Denkliğim onaylandı", description: "ZAB veya eyalet onayı aldım", visas: ["bluecard", "workvisa", "chancenkarte"], icon: CheckCircle, color: "emerald" },
      { text: "Başvuru yaptım, bekliyorum", description: "Denklik süreci devam ediyor", visas: ["chancenkarte", "workvisa"], icon: Clock, color: "blue" },
      { text: "IT/Software sektörü", description: "Denklik şartı yok", visas: ["bluecard", "workvisa"], icon: Briefcase, color: "purple" },
      { text: "Başvurmadım", description: "Henüz denklik başvurusu yapmadım", visas: ["chancenkarte", "studentvisa", "au pair"], icon: XCircle, color: "amber" },
      { text: "Denklik gerekmiyor", description: "Öğrenci veya gönüllü hizmet", visas: ["studentvisa", "au pair", "fsj", "internship"], icon: BookOpen, color: "gray" },
    ]
  },
  {
    id: 9,
    question: "Aile durumunuz nedir?",
    subtitle: "Almanya'da aile bağlantınız var mı?",
    options: [
      { text: "Eşim/Partnerim Almanya'da", description: "Yasal evlilik veya kayıtlı ilişki", visas: ["familyreunion"], icon: Users, color: "rose" },
      { text: "Çocuğum Almanya'da", description: "Reşit olmayan çocuk", visas: ["familyreunion"], icon: Baby, color: "pink" },
      { text: "Ailem yok, tek başıma", description: "Bağımsız başvuru", visas: ["chancenkarte", "bluecard", "workvisa", "studentvisa", "jobseekervisa"], icon: MapPin, color: "blue" },
      { text: "Ailemi sonra getireceğim", description: "İlk etapta tek gideceğim", visas: ["bluecard", "workvisa", "chancenkarte"], icon: Plane, color: "amber" },
    ]
  },
  {
    id: 10,
    question: "Ne kadar süre kalmayı planlıyorsunuz?",
    subtitle: "Almanya'da kalma süreniz",
    options: [
      { text: "Kalıcı / Uzun vadeli", description: "3+ yıl veya süresiz", visas: ["bluecard", "chancenkarte", "workvisa", "familyreunion"], icon: Shield, color: "emerald" },
      { text: "Orta vadeli", description: "1-3 yıl arası", visas: ["workvisa", "studentvisa", "selfemployed"], icon: Clock, color: "blue" },
      { text: "Kısa vadeli", description: "6-12 ay", visas: ["internship", "au pair", "fsj", "jobseekervisa"], icon: Baby, color: "amber" },
      { text: "90 günden az", description: "Kısa ziyaret", visas: ["tourist", "business"], icon: Plane, color: "cyan" },
    ]
  },
];

// Vize önerileri açıklamaları
const visaRecommendations: Record<string, { title: string; description: string; why: string[]; requirements: string[]; difficulty: string; timeline: string }> = {
  chancenkarte: {
    title: "Şans Kartı (Chancenkarte)",
    description: "Almanya'ya iş teklifi olmadan gidip iş arama fırsatı sunan puan bazlı vize",
    why: [
      "Üniversite mezunu olduğunuz için direkt başvuru hakkınız var",
      "Almanca bilginiz yeterli seviyede",
      "Mali yeterliliğiniz var",
      "İş teklifi olmadan Almanya'ya gidebilirsiniz"
    ],
    requirements: ["Diploma (noter onaylı)", "Almanca A1 veya İngilizce B2", "Mali kaynak (~12.000€)", "Pasaport"],
    difficulty: "Orta",
    timeline: "3-6 ay"
  },
  bluecard: {
    title: "Mavi Kart (EU Blue Card)",
    description: "Nitelikli çalışanlar için en hızlı kalıcı oturum yolu",
    why: [
      "Üniversite mezunusunuz ve iş teklifiniz var",
      "Maaş şartını karşılıyorsunuz (48.300€+)",
      "En hızlı kalıcı oturum yolu (21-33 ay)",
      "Aile birleşimi hakkı var"
    ],
    requirements: ["Üniversite diploması", "İş teklifi (48.300€+)", "Diploma denkliği", "Seyahat sigortası"],
    difficulty: "Kolay",
    timeline: "2-4 ay"
  },
  workvisa: {
    title: "Çalışma Vizesi",
    description: "Normal çalışma izni ile Almanya'da çalışma",
    why: [
      "İş teklifiniz var",
      "Mesleki deneyiminiz var",
      "Almanca bilginiz yeterli",
      "Kalıcı oturum yolu var"
    ],
    requirements: ["İş teklifi", "Mesleki denklik (gerekirse)", "ZAV onayı", "Pasaport"],
    difficulty: "Orta",
    timeline: "3-6 ay"
  },
  studentvisa36f: {
    title: "Öğrenci Vizesi - 36F (Şartlı Kabul)",
    description: "Dil yeterliliği olmadan üniversiteye şartlı kabul alan öğrenciler için özel vize",
    why: [
      "Almancanız yetersiz ama üniversiteye kabul aldınız",
      "Almanya'da dil kursu + üniversite kombinasyonu",
      "Studienkolleg (hazırlık okulu) hakkı",
      "Dil kursu sonrası normal öğrenci vizesine geçiş"
    ],
    requirements: ["Şartlı kabul mektubu (Bedingte Zulassung)", "Dil kursu kaydı", "Bloke hesap (11.904€)", "Pasaport"],
    difficulty: "Orta",
    timeline: "2-4 ay"
  },
  studentvisa: {
    title: "Öğrenci Vizesi (Normal)",
    description: "Almanya'da üniversite okuyun, sonrasında çalışma hakkı",
    why: [
      "Eğitim amacınız var",
      "Kabul mektubu alabilirsiniz",
      "Bloke hesap açabilirsiniz",
      "Mezuniyet sonrası 18 ay çalışma hakkı"
    ],
    requirements: ["Üniversite kabulü", "Bloke hesap (11.904€)", "Dil sertifikası (B2/C1)", "Motivasyon mektubu"],
    difficulty: "Kolay",
    timeline: "2-4 ay"
  },
  familyreunion: {
    title: "Aile Birleşimi Vizesi",
    description: "Almanya'daki ailenizin yanına gidin",
    why: [
      "Almanya'da eşiniz veya aileniz var",
      "Sponsorunuzun geliri yeterli",
      "Aile birlikte yaşayacak",
      "Çalışma hakkı var"
    ],
    requirements: ["Sponsor (eş/aileniz)", "Almanca A1 (eş için)", "Yeterli konut", "Evlilik belgesi"],
    difficulty: "Kolay",
    timeline: "3-6 ay"
  },
  tourist: {
    title: "Tourist Vizesi (Schengen)",
    description: "Kısa süreli turistik ziyaret",
    why: [
      "Turistik amacınız var",
      "90 günden az kalacaksınız",
      "Çalışma planınız yok",
      "Hızlı başvuru süreci"
    ],
    requirements: ["Otel rezervasyonu", "Seyahat sigortası (30.000€)", "Banka dökümü", "Gidiş-dönüş bilet"],
    difficulty: "Kolay",
    timeline: "2-4 hafta"
  },
  "au pair": {
    title: "Au Pair",
    description: "Aile yanında çocuk bakımı ve dil öğrenimi",
    why: [
      "18-30 yaş arasındasınız",
      "Çocuk bakımı deneyiminiz var",
      "Almanca öğrenmek istiyorsunuz",
      "Konaklama ve yemek sağlanır"
    ],
    requirements: ["18-30 yaş", "Host aile kabulü", "Almanca A1", "Sağlık raporu"],
    difficulty: "Kolay",
    timeline: "1-2 ay"
  },
  fsj: {
    title: "FSJ/BFD (Gönüllü Hizmet)",
    description: "Sosyal alanda gönüllü çalışma deneyimi",
    why: [
      "27 yaş altısınız (FSJ)",
      "Sosyal deneyim kazanmak istiyorsunuz",
      "Almanca pratiği yapmak istiyorsunuz",
      "Konaklama ve harçlık sağlanır"
    ],
    requirements: ["16-27 yaş (FSJ)", "Kurum kabulü", "Almanca B1", "Sağlık raporu"],
    difficulty: "Kolay",
    timeline: "1-2 ay"
  },
  jobseekervisa: {
    title: "İş Arama Vizesi",
    description: "6 aylık iş arama vizesi ile Almanya'da iş bulun",
    why: [
      "Üniversite mezunusunuz",
      "5 yıl deneyiminiz var",
      "Almanca B1 seviyede",
      "Mesleki denkliğiniz var"
    ],
    requirements: ["Diploma", "5 yıl deneyim", "Almanca B1", "Mesleki denklik", "Mali kaynak"],
    difficulty: "Zor",
    timeline: "3-6 ay"
  },
  selfemployed: {
    title: "Serbest Meslek Vizesi",
    description: "Kendi işinizi kurun, serbest çalışın",
    why: [
      "Kendi işinizi kurmak istiyorsunuz",
      "Müşteri mektuplarınız var",
      "Sermayeniz var",
      "Ekonomik fayda kanıtlayabilirsiniz"
    ],
    requirements: ["İş planı", "Müşteri mektupları", "Sermaye", "Ekonomik fayda kanıtı"],
    difficulty: "Zor",
    timeline: "3-6 ay"
  },
  researcher: {
    title: "Araştırmacı Vizesi",
    description: "Bilimsel araştırma yapın, akademik kariyer",
    why: [
      "Doktora dereceniz var",
      "Araştırma kurumundan kabul aldınız",
      "Finansmanınız var",
      "Host anlaşmanız var"
    ],
    requirements: ["Doktora", "Host anlaşması", "Finansman (12.324€/yıl)", "Araştırma önerisi"],
    difficulty: "Orta",
    timeline: "2-4 ay"
  },
  internship: {
    title: "Staj Vizesi",
    description: "Almanya'da staj yapın, deneyim kazanın",
    why: [
      "Öğrenci veya yeni mezunsunuz",
      "Staj teklifiniz var",
      "Zorunlu veya gönüllü staj",
      "Mesleki deneyim kazanacaksınız"
    ],
    requirements: ["Öğrenci belgesi", "Staj sözleşmesi", "ZAV onayı (gerekirse)", "Seyahat sigortası"],
    difficulty: "Orta",
    timeline: "2-3 ay"
  }
};

export function VizeBulucu() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (visaIds: string[]) => {
    setAnswers({ ...answers, [currentQuestion]: visaIds });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  // Sonuçları hesapla - daha akıllı algoritma
  const calculateResults = () => {
    const visaScores: Record<string, number> = {};
    
    // Her cevap için puan ekle
    Object.values(answers).forEach((visaIds) => {
      visaIds.forEach((visaId) => {
        visaScores[visaId] = (visaScores[visaId] || 0) + 1;
      });
    });

    // Skora göre sırala ve en yüksek 3'ü al
    const sortedVisas = Object.entries(visaScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id]) => id);

    return sortedVisas;
  };

  const results = showResults ? calculateResults() : [];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Size Uygun Vize Türleri
            </h2>
            <p className="text-lg text-gray-600">
              Cevaplarınıza göre sizin için en uygun vize türleri:
            </p>
          </div>

          <div className="space-y-6">
            {results.length > 0 ? (
              results.map((visaId, index) => {
                const visa = visaTypes.find(v => v.id === visaId);
                const recommendation = visaRecommendations[visaId];
                if (!visa || !recommendation) return null;

                return (
                  <Card key={visaId} className={`border-2 ${index === 0 ? 'border-emerald-400 shadow-lg' : 'border-gray-200'}`}>
                    <CardHeader className={`${index === 0 ? 'bg-emerald-50' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          {index === 0 && (
                            <Badge className="bg-emerald-500">En Uygun</Badge>
                          )}
                          <CardTitle className="text-xl">{recommendation.title}</CardTitle>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{recommendation.difficulty}</Badge>
                          <Badge variant="outline">{recommendation.timeline}</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{recommendation.description}</p>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Neden Bu Vize Size Uygun?</h4>
                        <ul className="space-y-1">
                          {recommendation.why.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Gerekli Evraklar</h4>
                        <div className="flex flex-wrap gap-2">
                          {recommendation.requirements.map((req, idx) => (
                            <Badge key={idx} variant="secondary">{req}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Link to={`/vize/${visaId}`}>
                          <Button variant="outline">Detayları Gör</Button>
                        </Link>
                        <Link to={`/vize-rehberi`}>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Rehberi Başlat
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-12">
                <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sonuç Bulunamadı
                </h3>
                <p className="text-gray-600 mb-6">
                  Cevaplarınıza uygun bir vize türü bulunamadı. Lütfen tekrar deneyin veya tüm vize türlerini inceleyin.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleRestart} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Tekrar Dene
                  </Button>
                  <Link to="/vize-turleri">
                    <Button>Tüm Vizeleri Gör</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleRestart} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Testi Tekrar Yap
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hangi Vize Türü Bana Göre?
          </h1>
          <p className="text-gray-600">
            10 soru ile size en uygun vize türünü bulun
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Soru {currentQuestion + 1} / {questions.length}</span>
            <span>%{Math.round(progress)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {question.question}
          </h2>
          {question.subtitle && (
            <p className="text-gray-500">{question.subtitle}</p>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => {
            const Icon = option.icon;
            const colorClass = option.color || 'blue';
            
            // Renk sınıflarını açıkça tanımla (Tailwind JIT için)
            const bgClasses: Record<string, string> = {
              blue: 'bg-blue-100 group-hover:bg-blue-200',
              emerald: 'bg-emerald-100 group-hover:bg-emerald-200',
              purple: 'bg-purple-100 group-hover:bg-purple-200',
              amber: 'bg-amber-100 group-hover:bg-amber-200',
              rose: 'bg-rose-100 group-hover:bg-rose-200',
              pink: 'bg-pink-100 group-hover:bg-pink-200',
              cyan: 'bg-cyan-100 group-hover:bg-cyan-200',
              orange: 'bg-orange-100 group-hover:bg-orange-200',
              gray: 'bg-gray-100 group-hover:bg-gray-200',
            };
            
            const textClasses: Record<string, string> = {
              blue: 'text-blue-700',
              emerald: 'text-emerald-700',
              purple: 'text-purple-700',
              amber: 'text-amber-700',
              rose: 'text-rose-700',
              pink: 'text-pink-700',
              cyan: 'text-cyan-700',
              orange: 'text-orange-700',
              gray: 'text-gray-700',
            };
            
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option.visas)}
                className="group bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`${bgClasses[colorClass] || bgClasses.blue} p-3 rounded-xl transition-colors`}>
                    <Icon className={`h-6 w-6 ${textClasses[colorClass] || textClasses.blue}`} />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 text-lg">{option.text}</span>
                    {option.description && (
                      <p className="text-gray-600 text-sm mt-1">{option.description}</p>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Back Button */}
        {currentQuestion > 0 && (
          <div className="text-center mt-8">
            <Button onClick={handleBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Önceki Soru
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
