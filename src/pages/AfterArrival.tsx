import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  FileText, 
  Landmark, 
  HeartPulse, 
  Radio, 
  CheckCircle, 
  AlertCircle,
  MapPin,
  Phone,
  ExternalLink,
  Info,
  Calendar,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const anmeldungSteps = [
  {
    step: 1,
    title: "Randevu Alın",
    description: "Bürgeramt (Belediye) üzerinden online randevu alın. Bazı şehirlerde bekleme süresi 2-4 hafta olabilir.",
    icon: Calendar,
    tip: "Munich, Berlin gibi büyük şehirlerde randevu bulmak zor olabilir, hemen başvurun"
  },
  {
    step: 2,
    title: "Evrakları Hazırlayın",
    description: "Pasaport, kira sözleşmesi, Wohnungsgeberbestätigung (ev sahibi onayı) ve vize belgelerinizi hazırlayın.",
    icon: FileText,
    tip: "Wohnungsgeberbestätigung olmadan Anmeldung yapılamaz!"
  },
  {
    step: 3,
    title: "Belediyeye Git",
    description: "Randevu saatinde Bürgeramt'a gidin. Süreç yaklaşık 15-20 dakika sürer.",
    icon: Building2,
    tip: "Randevuya geç kalmayın, yeni randevu almak zor olabilir"
  },
  {
    step: 4,
    title: "Meldebescheinigung Al",
    description: "Kayıt tamamlandığında Meldebescheinigung (ikamet belgesi) alacaksınız. Bu belgeyi saklayın!",
    icon: CheckCircle,
    tip: "Banka hesabı açarken, vize uzatırken bu belge istenir"
  }
];

const bankOptions = [
  {
    name: "N26",
    type: "Dijital Banka",
    features: ["Tamamen online açılış", "Türkçe uygulama", "Ücretsiz hesap", "Anında kart"],
    bestFor: "Hızlı ve kolay hesap açmak isteyenler",
    website: "n26.com",
    color: "bg-teal-500"
  },
  {
    name: "Deutsche Bank",
    type: "Geleneksel Banka",
    features: ["Fiziksel şube", "Bloke hesap desteği", "Expat hizmetleri", "Geniş ATM ağı"],
    bestFor: "Bloke hesap açacak öğrenciler",
    website: "deutsche-bank.de",
    color: "bg-blue-700"
  },
  {
    name: "Sparkasse",
    type: "Yerel Banka",
    features: ["Her şehirde var", "Kişisel hizmet", "Öğrenci hesapları", "Düşük ücretler"],
    bestFor: "Yerel destek isteyenler",
    website: "sparkasse.de",
    color: "bg-red-600"
  },
  {
    name: "Commerzbank",
    type: "Büyük Banka",
    features: ["Online başvuru", "İngilizce destek", "Kredi kartı", "Yatırım seçenekleri"],
    bestFor: "Kapsamlı bankacılık hizmeti",
    website: "commerzbank.de",
    color: "bg-yellow-500"
  }
];

const healthInsuranceOptions = [
  {
    name: "Techniker Krankenkasse (TK)",
    monthlyCost: "~120-130€ (öğrenci)",
    features: ["En büyük kamu sigortası", "İngilizce destek", "Geniş doktor ağı", "Ek hizmetler"],
    website: "tk.de",
    color: "bg-red-500"
  },
  {
    name: "AOK",
    monthlyCost: "~120-130€ (öğrenci)",
    features: ["Eyalet bazlı", "Yerel destek", "Spor kursları", "Sağlık programları"],
    website: "aok.de",
    color: "bg-blue-500"
  },
  {
    name: "Barmer",
    monthlyCost: "~120-130€ (öğrenci)",
    features: ["İyi diş sağlığı kapsamı", "Alternatif tıp", "Online hizmetler", "Bonus programı"],
    website: "barmer.de",
    color: "bg-emerald-500"
  },
  {
    name: "Özel Sigorta (Ör: Mawista)",
    monthlyCost: "~35-80€",
    features: ["Daha ucuz", "Sınırlı kapsam", "Öğrenciler için uygun", "Seyahat sigortası"],
    website: "mawista.com",
    color: "bg-purple-500"
  }
];

export function AfterArrival() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Almanya Rehberi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'ya Geldikten Sonra
            </h1>
            <p className="text-xl text-emerald-100">
              Almanya'ya adım attıktan sonra yapmanız gerekenlerin tam listesi. 
              Anmeldung'dan banka hesabına, sağlık sigortasından radyo vergisine kadar her şey.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Alert */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Önemli Hatırlatma</AlertTitle>
            <AlertDescription className="text-amber-700">
              Almanya'ya geldikten sonra <strong>14 gün içinde</strong> Anmeldung (belediye kaydı) yapmak zorunludur. 
              Aksi halde ceza ödemek zorunda kalabilirsiniz!
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="anmeldung" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="anmeldung" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Anmeldung</span>
              </TabsTrigger>
              <TabsTrigger value="bank" className="flex items-center gap-2">
                <Landmark className="h-4 w-4" />
                <span className="hidden sm:inline">Banka</span>
              </TabsTrigger>
              <TabsTrigger value="health" className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4" />
                <span className="hidden sm:inline">Sağlık</span>
              </TabsTrigger>
              <TabsTrigger value="other" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="hidden sm:inline">Diğer</span>
              </TabsTrigger>
            </TabsList>

            {/* Anmeldung Tab */}
            <TabsContent value="anmeldung">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="flex items-center gap-2 text-emerald-900">
                        <Building2 className="h-6 w-6" />
                        Anmeldung (Belediye Kaydı) Adım Adım
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {anmeldungSteps.map((step) => (
                          <div key={step.step} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="font-bold text-emerald-700">{step.step}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                <step.icon className="h-4 w-4 text-emerald-600" />
                                {step.title}
                              </h3>
                              <p className="text-gray-600 mt-1">{step.description}</p>
                              <div className="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-sm text-amber-800 flex items-start gap-2">
                                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                  <span><strong>İpucu:</strong> {step.tip}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-2 border-red-200">
                    <CardHeader className="bg-red-50">
                      <CardTitle className="text-red-900 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Gerekli Evraklar
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {[
                          "Pasaport (orijinal)",
                          "Kira sözleşmesi (Mietvertrag)",
                          "Wohnungsgeberbestätigung (ev sahibi onayı)",
                          "Vize/Aufenthaltstitel",
                          "Doldurulmuş Anmeldung formu (varsa)"
                        ].map((doc, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span className="text-gray-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900 text-lg">Steuer-ID</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">
                        Anmeldung sonrası <strong>2-4 hafta</strong> içinde Finanzamt'tan 
                        11 haneli vergi numaranız (Steuer-ID) postayla gelecektir.
                      </p>
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Ne zaman gerekli?</strong>
                        </p>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• İşe başlarken</li>
                          <li>• Vergi iadesi için</li>
                          <li>• Bazı banka işlemlerinde</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Bank Tab */}
            <TabsContent value="bank">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Banka Hesabı Seçenekleri</h2>
                <p className="text-gray-600">
                  Almanya'da maaş almak, kira ödemek ve günlük harcamalar için banka hesabı şart. 
                  Öğrenciler için önerilen bankalar:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bankOptions.map((bank) => (
                  <Card key={bank.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`${bank.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                          <Landmark className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="outline">{bank.type}</Badge>
                      </div>
                      <CardTitle className="mt-4">{bank.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{bank.bestFor}</p>
                      <ul className="space-y-2 mb-4">
                        {bank.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`https://${bank.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        {bank.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert className="mt-8 border-blue-200 bg-blue-50">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Öğrenciler İçin Önemli</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Bloke hesap (Sperrkonto) açacaksanız <strong>Deutsche Bank</strong> veya 
                  <strong>Expatrio</strong> önerilir. Normal hesap için <strong>N26</strong> en pratik seçenektir.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Health Insurance Tab */}
            <TabsContent value="health">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sağlık Sigortası Seçimi</h2>
                <p className="text-gray-600">
                  Almanya'da sağlık sigortası zorunludur. Kamu (gesetzlich) ve özel sigorta seçenekleri:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthInsuranceOptions.map((insurance) => (
                  <Card key={insurance.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`${insurance.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                          <HeartPulse className="h-6 w-6 text-white" />
                        </div>
                        <Badge>{insurance.monthlyCost}</Badge>
                      </div>
                      <CardTitle className="mt-4 text-lg">{insurance.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {insurance.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`https://${insurance.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        {insurance.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-2 border-emerald-200">
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-900">Kamu Sigortası (GKV)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      Çalışanlar ve çoğu öğrenci için zorunludur. Gelire göre prim ödenir.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Kapsamlı sağlık hizmeti</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Aile sigortası (çocuklar ücretsiz)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Öğrenciler için ~120€/ay</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-purple-900">Özel Sigorta (PKV)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      Yıllık brüt geliri 69.300€ üzerindekiler ve öğrenciler için seçenek.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span>Daha düşük prim (gençler için)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span>Doktor seçimi özgürlüğü</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span>Geri dönüş kamuya zor</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other Tab */}
            <TabsContent value="other">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-amber-200">
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Radio className="h-5 w-5" />
                      Radyo Vergisi (Rundfunkbeitrag)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-amber-700">18,36€</span>
                      <span className="text-gray-500">/ay</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Her ev (hane) aylık 18,36€ öder. TV/radyo kullanmasanız bile zorunludur.
                    </p>
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-700 text-sm">
                        Ödemezseniz icra takibi başlatılır ve pasif faiz işler!
                      </AlertDescription>
                    </Alert>
                    <div className="mt-4">
                      <a 
                        href="https://www.rundfunkbeitrag.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        rundfunkbeitrag.de
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Phone className="h-5 w-5" />
                      Telefon/Internet
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      Almanya'da telefon ve internet için popüler sağlayıcılar:
                    </p>
                    <ul className="space-y-3">
                      {[
                        { name: "Vodafone", desc: "Geniş kapsama, 5G" },
                        { name: "Telekom", desc: "En iyi kapsama, pahalı" },
                        { name: "O2", desc: "Uygun fiyatlı" },
                        { name: "1&1", desc: "İyi fiyat/performans" },
                        { name: "Aldi Talk", desc: "Prepaid, ucuz" }
                      ].map((provider) => (
                        <li key={provider.name} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">{provider.name}</span>
                          <span className="text-sm text-gray-500">{provider.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                      Öğrenciler için özel tarifeler mevcut. Kimlik (Pass/ID) ile başvurun.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="flex items-center gap-2 text-purple-900">
                      <MapPin className="h-5 w-5" />
                      Ulaşım (Öğrenci Avantajları)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-900">Deutschlandticket (49€ Ticket)</h4>
                        <p className="text-sm text-emerald-700 mt-1">
                          Tüm Almanya'da toplu taşıma (bölgesel trenler, otobüs, metro) sınırsız.
                          Öğrenciler için indirimli versiyonları var.
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900">Semesterticket</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Üniversite kaydınızla birlikte gelen ulaşım kartı. 
                          Eyalete göre değişir, bazen 49€ Ticket dahil.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-rose-200">
                  <CardHeader className="bg-rose-50">
                    <CardTitle className="flex items-center gap-2 text-rose-900">
                      <Clock className="h-5 w-5" />
                      Önemli Süreler
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {[
                        { time: "14 gün", task: "Anmeldung (belediye kaydı)", urgent: true },
                        { time: "3 ay", task: "Banka hesabı açma", urgent: false },
                        { time: "Hemen", task: "Sağlık sigortası", urgent: true },
                        { time: "1 ay", task: "Radyo vergisi kaydı", urgent: false },
                        { time: "Vize bitmeden", task: "Vize uzatma başvurusu", urgent: true }
                      ].map((item, idx) => (
                        <li key={idx} className={`flex items-center gap-3 p-2 rounded ${item.urgent ? 'bg-red-50' : 'bg-gray-50'}`}>
                          <Badge variant={item.urgent ? "destructive" : "secondary"}>{item.time}</Badge>
                          <span className="text-gray-700">{item.task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sonraki Adımlar
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Temel işlemleri tamamladıktan sonra öğrenci veya çalışan olarak 
            haklarınızı ve imkanlarınızı öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ogrenci-rehberi">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Öğrenci Rehberi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/calisma-hayati">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Çalışma Hayatı
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
