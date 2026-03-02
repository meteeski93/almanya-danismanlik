import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Home, 
  Briefcase, 
  Euro, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Info,
  Wallet,
  Star,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const accommodationOptions = [
  {
    type: "Studentenwerk (Devlet Yurdu)",
    cost: "250-380€/ay",
    pros: ["En ucuz seçenek", "Öğrenci ortamı", "Merkezi konum"],
    cons: ["Uzun bekleme listesi", "Başvuru erken yapılmalı"],
    applyAt: "studentenwerk.de",
    tip: "Kabul mektubunuzu alır almaz başvurun!"
  },
  {
    type: "WG (Wohngemeinschaft)",
    cost: "350-550€/ay",
    pros: ["Sosyal ortam", "Fiyat/performans", "Esnek süre"],
    cons: ["Ortak alanlar", "Uyum gerektirir", "Rekabetçi"],
    applyAt: "wg-gesucht.de",
    tip: "İlk görüşmede kendinizi iyi tanıtın"
  },
  {
    type: "Özel Yurt",
    cost: "400-700€/ay",
    pros: ["Mobilyalı", "Tüm masraflar dahil", "Kolay başvuru"],
    cons: ["Pahalı", "Sosyal ortam sınırlı"],
    applyAt: "home-in-berlin.de, etc.",
    tip: "Kısa süreli konaklama için ideal"
  },
  {
    type: "Kendi Daireniz",
    cost: "600-1.200€/ay",
    pros: ["Özgürlük", "Gizlilik", "Kendi düzeniniz"],
    cons: ["Çok pahalı", "Depozito (2-3 kira)", "Sorumluluk"],
    applyAt: "immobilienscout24.de",
    tip: "Aile veya sponsor desteği gerekir"
  }
];

const bafogInfo = {
  maxAmount: "992€/ay",
  structure: "%50 hibe, %50 faizsiz kredi",
  repayment: "10.010€ (kredi kısmı)",
  duration: "Maksimum 10 dönem (5 yıl)",
  requirements: [
    "Almanya'da üniversite kaydı",
    "35 yaş altı (ilk başvuru için)",
    "Vergi mükellefi olmayan ebeveyn geliri",
    "Yeterli ders başarısı"
  ]
};

const workRules = {
  regular: {
    hours: "120 tam gün veya 240 yarım gün / yıl",
    description: "Üniversite öğrencileri yılda 120 tam gün (8 saat) veya 240 yarım gün (4 saat) çalışabilir.",
    note: "Bu limit aşılırsa öğrenci statüsü kaybedilir ve vergi mükellefi olunur!"
  },
  minijob: {
    hours: "538€/ay (2026)",
    description: "Minijob olarak adlandırılan düşük ücretli işlerde vergi ve sigorta muafiyeti vardır.",
    note: "Cafe, restoran, kütüphane gibi işler için ideal."
  },
  werkstudent: {
    hours: "20 saat/hafta (dönem içi)",
    description: "Werkstudent olarak çalışan öğrenciler, dönem içi haftada 20 saat, tatillerde sınırsız çalışabilir.",
    note: "Şirketinizde Werkstudent pozisyonu varsa bu en avantajlı seçenektir."
  }
};

const scholarshipList = [
  {
    name: "DAAD Bursları",
    amount: "Değişken",
    deadline: "Yıl boyu",
    website: "daad.de",
    description: "Almanya'nın en büyük burs kurumu. Lisansüstü ve doktora için çeşitli burslar."
  },
  {
    name: "Deutschlandstipendium",
    amount: "300€/ay",
    deadline: "Üniversiteye göre değişir",
    website: "deutschland-stipendium.de",
    description: "Başarı ve sosyal kriterlere göre verilen ulusal burs."
  },
  {
    name: "Heinrich Böll Stiftung",
    amount: "992€/ay + masraflar",
    deadline: "Mart/Eylül",
    website: "boell.de",
    description: "Yeşil Parti ile bağlantılı vakıf bursu."
  },
  {
    name: "Konrad Adenauer Stiftung",
    amount: "992€/ay + masraflar",
    deadline: "Temmuz/Ocak",
    website: "kas.de",
    description: "CDU ile bağlantılı vakıf bursu."
  }
];

export function StudentGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Öğrenci Rehberi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'da Öğrenci Olmak
            </h1>
            <p className="text-xl text-purple-100">
              Konaklama, burslar, çalışma izinleri ve öğrenci hakları. 
              Almanya'da eğitim hayatınızı kolaylaştıracak her şey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="accommodation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="accommodation" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Konaklama</span>
              </TabsTrigger>
              <TabsTrigger value="bafog" className="flex items-center gap-2">
                <Euro className="h-4 w-4" />
                <span className="hidden sm:inline">BAföG</span>
              </TabsTrigger>
              <TabsTrigger value="work" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Çalışma</span>
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Burslar</span>
              </TabsTrigger>
            </TabsList>

            {/* Accommodation Tab */}
            <TabsContent value="accommodation">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Konaklama Seçenekleri</h2>
                <p className="text-gray-600">
                  Almanya'da öğrenci konaklaması bulmak zor olabilir. İşte tüm seçenekler:
                </p>
              </div>

              <Alert className="mb-8 border-amber-200 bg-amber-50">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-800">Önemli Uyarı</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Almanya'da öğrenci konaklaması bulmak <strong>çok zordur</strong>. 
                  Kabul mektubunuzu alır almaz başvuru yapın. Bekleme süreleri 3-6 ay olabilir!
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accommodationOptions.map((option, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{option.type}</CardTitle>
                        <Badge variant="secondary">{option.cost}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-700 mb-2">Avantajlar</h4>
                          <ul className="space-y-1">
                            {option.pros.map((pro, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-red-700 mb-2">Dezavantajlar</h4>
                          <ul className="space-y-1">
                            {option.cons.map((con, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <AlertCircle className="h-4 w-4 text-red-500" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800 flex items-start gap-2">
                            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span><strong>İpucu:</strong> {option.tip}</span>
                          </p>
                        </div>
                        <a 
                          href={`https://${option.applyAt}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                        >
                          {option.applyAt}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-900 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Dolandırıcılık Uyarısı
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Ev görmeden para göndermeyin!</strong> Gerçek ev sahipleri önce görüşme ister.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Western Union/MoneyGram isteyenler</strong> genellikle dolandırıcıdır.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Çok ucuz fiyatlar</strong> (piyasanın yarısı) şüphe uyandırmalıdır.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Acil karar verme baskısı</strong> yapanlara kanmayın.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* BAföG Tab */}
            <TabsContent value="bafog">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="flex items-center gap-2 text-emerald-900">
                        <Wallet className="h-6 w-6" />
                        BAföG (Öğrenci Finansmanı)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-6">
                        BAföG (Bundesausbildungsförderungsgesetz), Almanya hükümetinin öğrencilere sağladığı 
                        finansal destektir. Yarısı hibe, yarısı faizsiz kredidir.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center p-4 bg-emerald-50 rounded-lg">
                          <p className="text-2xl font-bold text-emerald-700">{bafogInfo.maxAmount}</p>
                          <p className="text-sm text-gray-600">Maksimum Aylık</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-700">{bafogInfo.structure}</p>
                          <p className="text-sm text-gray-600">Yapı</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <p className="text-2xl font-bold text-purple-700">{bafogInfo.repayment}</p>
                          <p className="text-sm text-gray-600">Geri Ödeme</p>
                        </div>
                        <div className="text-center p-4 bg-amber-50 rounded-lg">
                          <p className="text-2xl font-bold text-amber-700">{bafogInfo.duration}</p>
                          <p className="text-sm text-gray-600">Süre</p>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-3">Başvuru Şartları</h3>
                      <ul className="space-y-2 mb-6">
                        {bafogInfo.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h4 className="font-semibold text-amber-900 mb-2">Yabancı Öğrenciler İçin</h4>
                        <p className="text-amber-800 text-sm">
                          BAföG genellikle <strong>Alman vatandaşları veya uzun dönemli oturum izni olanlar</strong> için. 
                          Öğrenci vizesiyle BAföG almak zordur, ancak bazı özel durumlarda (örn: 5+ yıl Almanya'da yaşamak) mümkündür. 
                          Başvuru önce <strong>Studentenwerk</strong>'e danışın.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900">Studienstarthilfe (Başlangıç Yardımı)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl font-bold text-blue-700">1.000€</div>
                        <div className="text-gray-600">bir defaya mahsus ödeme</div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        İlk üniversite kaydınızda başvurabileceğiniz tek seferlik yardım. 
                        Gelir kriterleri BAföG'den daha esnek.
                      </p>
                      <a 
                        href="https://www.studienstarthilfe.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        studienstarthilfe.de
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-2 border-emerald-200">
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="text-emerald-900">Nasıl Başvurulur?</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ol className="space-y-4">
                        {[
                          "Studentenwerk'e gidin veya online başvurun",
                          "Gelir belgelerini hazırlayın (ebeveyn geliri)",
                          "Vergi mükellefi olmadığınızı kanıtlayın",
                          "Başvuru formunu doldurun",
                          "Bekleyin (4-8 hafta)",
                          "Onay alırsanız aylık ödemeler başlar"
                        ].map((step, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-semibold text-emerald-700">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-amber-50">
                      <CardTitle className="text-amber-900">Önemli Not</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600">
                        BAföG başvurusu <strong>her dönem yenilenmelidir</strong>. 
                        Ders başarınızı kanıtlamanız ve hala ihtiyaç sahibi olduğunuzu göstermeniz gerekir.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Work Tab */}
            <TabsContent value="work">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Öğrenci Çalışma İzinleri</h2>
                <p className="text-gray-600">
                  Almanya'da öğrenciler çalışabilir, ancak bazı kurallar vardır. Limitleri aşarsanız 
                  öğrenci statünüzü kaybedersiniz!
                </p>
              </div>

              <Alert className="mb-8 border-red-200 bg-red-50">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <AlertTitle className="text-red-800">Kritik Limit!</AlertTitle>
                <AlertDescription className="text-red-700">
                  Yıllık çalışma limitini aşarsanız <strong>öğrenci statünüzü kaybedersiniz</strong> ve 
                  vergi mükellefi olursunuz. Bu da vize sorunlarına yol açabilir!
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(workRules).map(([key, rule]) => (
                  <Card key={key} className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900 flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        {key === 'regular' ? 'Normal Çalışma' : key === 'minijob' ? 'Minijob' : 'Werkstudent'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-blue-700">{rule.hours}</p>
                      </div>
                      <p className="text-gray-600 mb-4">{rule.description}</p>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <p className="text-sm text-amber-800">
                          <Info className="h-4 w-4 inline mr-1" />
                          {rule.note}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">Öğrenciler İçin İş Fikirleri</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { job: "Cafe/Restoran", wage: "12-15€/saat", note: "Bahşiş ek gelir" },
                      { job: "Kütüphane Görevlisi", wage: "13-16€/saat", note: "Sessiz ortam, ders çalışabilirsiniz" },
                      { job: "Werkstudent (Şirket)", wage: "15-25€/saat", note: "Bölümünüzle ilgili iş" },
                      { job: "Babysitting", wage: "10-15€/saat", note: "Esnek saatler" },
                      { job: "Tutoring (Özel Ders)", wage: "15-30€/saat", note: "Türkçe veya ders özel dersi" },
                      { job: "Amazon Depo", wage: "13-16€/saat", note: "Fiziksel iş, kolay bulunur" }
                    ].map((job, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{job.job}</p>
                          <p className="text-sm text-gray-500">{job.note}</p>
                        </div>
                        <Badge>{job.wage}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scholarships Tab */}
            <TabsContent value="scholarships">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Burs Fırsatları</h2>
                <p className="text-gray-600">
                  Almanya'da eğitim gören uluslararası öğrenciler için çeşitli burs imkanları mevcut.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarshipList.map((scholarship, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                        <Badge variant="secondary">{scholarship.amount}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4" />
                        <span>Son başvuru: {scholarship.deadline}</span>
                      </div>
                      <a 
                        href={`https://${scholarship.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {scholarship.website}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-900">Burs Başvuru İpuçları</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Erken başvurun - çoğu burs başvuru tarihinden önce açıklanır",
                      "Motivasyon mektubunuzu dikkatlice yazın - neden siz olduğunuzu anlatın",
                      "Akademik başarınızı ve sosyal aktivitelerinizi vurgulayın",
                      "Referans mektupları alın - hocalarınızdan veya işverenlerinizden",
                      "Birden fazla bursa başvurun - şansınızı artırın",
                      "Vakıf burslarına odaklanın - siyasi/ dini vakıflar"
                    ].map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mezuniyet Sonrası
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Eğitiminizi tamamladıktan sonra Almanya'da kalmak ve çalışmak için 
            18 ay iş arama hakkınız var.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calisma-hayati">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                Çalışma Hayatı
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/geldikten-sonra">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Geldikten Sonra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
