import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Info,
  Star,
  Briefcase,
  Languages,
  TrendingUp,
  Users,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ausbildungTypes = [
  {
    category: "Teknik ve Mühendislik",
    fields: [
      { name: "Elektrikçi (Elektroniker)", duration: "3.5 yıl", salary: "800-1.200€", demand: "Çok Yüksek" },
      { name: "Mekatronikçi", duration: "3.5 yıl", salary: "850-1.250€", demand: "Yüksek" },
      { name: "CNC Operatörü", duration: "3.5 yıl", salary: "800-1.150€", demand: "Yüksek" },
      { name: "Kaynakçı", duration: "3 yıl", salary: "750-1.100€", demand: "Orta" },
      { name: "Otomotiv Mekaniği", duration: "3.5 yıl", salary: "850-1.200€", demand: "Yüksek" }
    ]
  },
  {
    category: "Sağlık ve Sosyal Hizmetler",
    fields: [
      { name: "Hemşire (Gesundheits- und Krankenpfleger)", duration: "3 yıl", salary: "1.100-1.400€", demand: "Çok Yüksek" },
      { name: "Yaşlı Bakıcı (Altenpfleger)", duration: "3 yıl", salary: "1.000-1.300€", demand: "Çok Yüksek" },
      { name: "Fizyoterapist", duration: "3 yıl", salary: "900-1.200€", demand: "Yüksek" },
      { name: "Ergoterapist", duration: "3 yıl", salary: "850-1.150€", demand: "Orta" }
    ]
  },
  {
    category: "Otel ve Gastronomi",
    fields: [
      { name: "Aşçı (Koch/Köchin)", duration: "3 yıl", salary: "700-1.000€", demand: "Yüksek" },
      { name: "Otel Görevlisi (Hotelfachmann)", duration: "3 yıl", salary: "750-1.050€", demand: "Yüksek" },
      { name: "Restoran Uzmanı", duration: "3 yıl", salary: "700-1.000€", demand: "Orta" },
      { name: "Pastacı (Konditor)", duration: "3 yıl", salary: "700-950€", demand: "Orta" }
    ]
  },
  {
    category: "Bilgi Teknolojileri",
    fields: [
      { name: "IT Uzmanı (Fachinformatiker)", duration: "3 yıl", salary: "900-1.300€", demand: "Çok Yüksek" },
      { name: "Sistem Yöneticisi", duration: "3 yıl", salary: "950-1.350€", demand: "Yüksek" },
      { name: "Yazılım Geliştirici", duration: "3 yıl", salary: "1.000-1.400€", demand: "Çok Yüksek" }
    ]
  },
  {
    category: "Ticaret ve Lojistik",
    fields: [
      { name: "Tır Şoförü (Berufskraftfahrer)", duration: "3 yıl", salary: "800-1.100€", demand: "Yüksek" },
      { name: "Lojistik Uzmanı", duration: "3 yıl", salary: "750-1.050€", demand: "Orta" },
      { name: "Satış Elemanı", duration: "3 yıl", salary: "700-1.000€", demand: "Orta" }
    ]
  }
];

const requirements = [
  {
    title: "Yaş Şartı",
    description: "Genellikle 18-35 yaş arası tercih edilir, ancak üst yaş sınırı yoktur.",
    icon: Users
  },
  {
    title: "Eğitim Şartı",
    description: "En az lise mezunu olmak gerekir. Bazı alanlar için teknik lise tercih edilir.",
    icon: BookOpen
  },
  {
    title: "Dil Seviyesi",
    description: "B1-B2 Almanca gereklidir. Sağlık alanları için B2 zorunludur.",
    icon: Languages
  },
  {
    title: "Sağlık Sigortası",
    description: "Almanya'da geçerli sağlık sigortası olmalıdır.",
    icon: CheckCircle
  }
];

const applicationWebsites = [
  {
    name: "Ausbildung.de",
    url: "ausbildung.de",
    description: "Almanya'nın en büyük Ausbildung portalı",
    features: ["Binlerce ilan", "Filtreleme seçenekleri", "Başvuru ipuçları"]
  },
  {
    name: "Arbeitsagentur",
    url: "arbeitsagentur.de",
    description: "Devlet iş kurumu resmi sitesi",
    features: ["Güvenilir ilanlar", "Ücretsiz hizmet", "Danışmanlık"]
  },
  {
    name: "Indeed Germany",
    url: "indeed.de",
    description: "Uluslararası iş platformu",
    features: ["Çok sayıda ilan", "İngilizce arayüz", "Mail bildirimleri"]
  },
  {
    name: "StepStone",
    url: "stepstone.de",
    description: "Profesyonel iş platformu",
    features: ["Kaliteli ilanlar", "CV oluşturucu", "Maaş bilgileri"]
  },
  {
    name: "Mein Ausbildungsplatz",
    url: "mein-ausbildungsplatz.de",
    description: "Ausbildung arama uzmanı",
    features: ["Özel filtreler", "Şirket değerlendirmeleri", "Başvuru takibi"]
  },
  {
    name: "Azubi.de",
    url: "azubi.de",
    description: "Gençler için Ausbildung platformu",
    features: ["Kolay arayüz", "Forum", "Tavsiyeler"]
  }
];

const realStory = {
  name: "Ayşe K.",
  age: 24,
  from: "İzmir",
  field: "Hemşirelik Ausbildung",
  company: "Charité Berlin",
  duration: "3 yıl",
  currentSalary: "1.350€/ay",
  story: `Merhaba, ben Ayşe. 2 yıl önce İzmir'den Berlin'e geldim. Almanya'da hemşire olmak için Ausbildung yapmaya karar verdim. 

Başlangıçta dil konusunda zorlandım. B1 seviyesinde Almanca'm vardı amaklinikteki teknik terimleri öğrenmem zaman aldı. İlk 6 ay çok zor geçti, ama şirketim ve meslektaşlarım çok yardımcı oldular.

Şu an 2. yılımı tamamlıyorum ve maaşım 1.350€'ya yükseldi. Ausbildung bittikten sonra direkt Charité'de çalışmaya başlayacağım. Maaşım 3.000€'nun üzerine çıkacak.

Tavsiyem: Almanca'nızı mümkün olduğunca geliştirin. B2 seviyesi minimum, C1 ideal. Ayrıca sabırlı olun, ilk zamanlar zor ama sonrası çok güzel.`,
  tips: [
    "Almanca'nızı Ausbildung başlamadan önce B2'ye getirin",
    "Sağlık alanında Ausbildung çok yoğun, buna hazır olun",
    "İlk 6 ay zor geçebilir, pes etmeyin",
    "Meslektaşlarınızla iyi ilişkiler kurun"
  ]
};

export function Ausbildung() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Mesleki Eğitim</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'da Ausbildung
            </h1>
            <p className="text-xl text-emerald-100">
              Almanya'nın dünyaca ünlü çift sistemli mesleki eğitim programı. 
              Teorik eğitim + pratik çalışma = Garanti kariyer.
            </p>
          </div>
        </div>
      </section>

      {/* What is Ausbildung */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ausbildung Nedir?
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Ausbildung (Berufsausbildung)</strong>, Almanya'nın çift sistemli mesleki eğitim programıdır. 
                Öğrenciler hem okulda teorik dersler alır, hem de bir şirkette pratik çalışma yaparlar.
              </p>
              <p className="text-gray-600 mb-6">
                Bu sistem, mezunların iş bulma oranını %90'ların üzerine çıkarır. 
                Çünkü Ausbildung yapan öğrenciler, mezun olduklarında hem teorik bilgiye hem de 
                2-3 yıllık iş tecrübesine sahip olurlar.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-emerald-700">2-3.5</p>
                  <p className="text-sm text-gray-600">Yıl Süre</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-700">700-1.400€</p>
                  <p className="text-sm text-gray-600">Aylık Maaş</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-purple-700">%90+</p>
                  <p className="text-sm text-gray-600">İş Bulma Oranı</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-amber-700">350+</p>
                  <p className="text-sm text-gray-600">Meslek Seçeneği</p>
                </div>
              </div>
            </div>
            
            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="flex items-center gap-2 text-emerald-900">
                  <GraduationCap className="h-6 w-6" />
                  Çift Sistem Nasıl İşler?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-emerald-700">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Berufsschule (Meslek Okulu)</h4>
                      <p className="text-sm text-gray-600">Haftada 1-2 gün teorik dersler</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-emerald-700">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Şirkette Pratik</h4>
                      <p className="text-sm text-gray-600">Haftada 3-4 gün iş yerinde çalışma</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-emerald-700">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Aylık Maaş</h4>
                      <p className="text-sm text-gray-600">Eğitim süresince düzenli gelir</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-emerald-700">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mezuniyet</h4>
                      <p className="text-sm text-gray-600">Onaylı meslek diploması + iş tecrübesi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ausbildung Şartları
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <req.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{req.title}</h3>
                  <p className="text-gray-600 text-sm">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="mt-8 border-amber-200 bg-amber-50">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Önemli Not</AlertTitle>
            <AlertDescription className="text-amber-700">
              Ausbildung vizesi için <strong>B1 Almanca sertifikası</strong> minimum şarttır. 
              Ancak B2 seviyesi ile başvuru yapmanız, kabul şansınızı önemli ölçüde artırır. 
              Sağlık alanlarında (hemşirelik, yaşlı bakımı) B2 zorunludur.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Salary Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ausbildung Maaşları 2026
              </h2>
              <p className="text-gray-600 mb-6">
                Ausbildung yapan öğrenciler, eğitim süresince düzenli maaş alırlar. 
                Maaşlar mesleğe, eyalete ve şirkete göre değişir.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-700">1. Yıl</p>
                    <p className="text-gray-600">700-1.000€</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-blue-700">2. Yıl</p>
                    <p className="text-gray-600">800-1.200€</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-purple-700">3. Yıl</p>
                    <p className="text-gray-600">900-1.400€</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Mesleklere Göre Ortalama Maaşlar (3. Yıl)</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[
                      { job: "IT Uzmanı", salary: "1.200-1.400€" },
                      { job: "Hemşire", salary: "1.200-1.350€" },
                      { job: "Elektrikçi", salary: "1.000-1.200€" },
                      { job: "Mekanikçi", salary: "1.050-1.250€" },
                      { job: "Aşçı", salary: "850-1.000€" },
                      { job: "Otel Görevlisi", salary: "900-1.050€" },
                      { job: "Tır Şoförü", salary: "950-1.100€" },
                      { job: "Yaşlı Bakıcı", salary: "1.100-1.300€" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{item.job}</span>
                        <Badge variant="secondary">{item.salary}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 border-emerald-200 h-full">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="flex items-center gap-2 text-emerald-900">
                    <TrendingUp className="h-5 w-5" />
                    Mezuniyet Sonrası
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">
                    Ausbildung tamamlandığında maaşlar önemli ölçüde artar:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <p className="font-semibold text-emerald-900">Başlangıç Maaşı</p>
                      <p className="text-2xl font-bold text-emerald-700">2.500-3.500€</p>
                      <p className="text-sm text-gray-600">Yıllık artışlarla birlikte</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-900">5 Yıl Sonra</p>
                      <p className="text-2xl font-bold text-blue-700">3.500-5.000€</p>
                      <p className="text-sm text-gray-600">Tecrübeye göre</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="font-semibold text-purple-900">Uzman Seviyesi</p>
                      <p className="text-2xl font-bold text-purple-700">4.500-7.000€</p>
                      <p className="text-sm text-gray-600">Meister veya uzman</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <Info className="h-4 w-4 inline mr-1" />
                      <strong>Not:</strong> Sağlık ve IT sektöründe maaşlar daha yüksektir.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            En Çok Tercih Edilen Ausbildung Alanları
          </h2>

          <Tabs defaultValue="Teknik ve Mühendislik" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              {ausbildungTypes.map((type) => (
                <TabsTrigger key={type.category} value={type.category} className="px-4 py-2">
                  {type.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {ausbildungTypes.map((type) => (
              <TabsContent key={type.category} value={type.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {type.fields.map((field, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{field.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Süre:</span>
                            <span className="font-medium">{field.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Maaş:</span>
                            <span className="font-medium">{field.salary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Talep:</span>
                            <Badge className={
                              field.demand === "Çok Yüksek" ? "bg-emerald-500" :
                              field.demand === "Yüksek" ? "bg-blue-500" : "bg-amber-500"
                            }>{field.demand}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Application Websites */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ausbildung Başvuru Siteleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationWebsites.map((site, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-emerald-600" />
                    {site.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <ul className="space-y-1 mb-4">
                    {site.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://${site.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline text-sm flex items-center gap-1"
                  >
                    {site.url}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Story */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-600 text-white mb-4">Gerçek Hikaye</Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              {realStory.name} - {realStory.field}
            </h2>
            <p className="text-gray-600 mt-2">
              {realStory.age} yaşında, {realStory.from} → {realStory.company}
            </p>
          </div>

          <Card className="border-2 border-emerald-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{realStory.name}</p>
                  <p className="text-gray-600">{realStory.field}</p>
                  <Badge variant="secondary">{realStory.currentSalary}</Badge>
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                {realStory.story.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Ayşe'nin Tavsiyeleri
                </h4>
                <ul className="space-y-2">
                  {realStory.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ausbildung ile Almanya'da Kariyer Yapın
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            350+ meslek seçeneği, eğitim süresince maaş ve %90+ iş garantisi. 
            Almanya'da mesleki eğitim için ilk adımı atın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/meslege-gore">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Briefcase className="mr-2 h-5 w-5" />
                Meslek Rehberi
              </Button>
            </Link>
            <Link to="/universiteler">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <GraduationCap className="mr-2 h-5 w-5" />
                Üniversite Seçenekleri
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
