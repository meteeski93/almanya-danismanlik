import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Baby, 
  Heart, 
  Euro, 
  CheckCircle, 
  AlertCircle,
  Building2,
  GraduationCap,
  Info,
  ExternalLink,
  Shield,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const kitaInfo = {
  types: [
    { name: "Krippe", age: "0-3 yaş", hours: "Yarım/gün tam gün", note: "Bebek bakımı" },
    { name: "Kindergarten", age: "3-6 yaş", hours: "Yarım/gün tam gün", note: "Anaokulu" },
    { name: "Hort", age: "6+ yaş", hours: "Okul sonrası", note: "İlkokul sonrası bakım" }
  ],
  costs: [
    { city: "Berlin", cost: "Ücretsiz", note: "Tüm çocuklar için" },
    { city: "Münih", cost: "100-400€/ay", note: "Gelire göre değişir" },
    { city: "Hamburg", cost: "Ücretsiz", note: "Tüm çocuklar için" },
    { city: "Köln", cost: "50-300€/ay", note: "Gelire göre değişir" }
  ],
  application: [
    "Belediyeye (Stadt/Jugendamt) başvurun",
    "Kita-Gutschein (devlet kuponu) alın",
    "Kreşlere başvurun (en az 10-15 yere)",
    "Görüşmelere katılın",
    "Yerleşme süreci (Eingewöhnung)",
    "Sözleşme imzalayın"
  ]
};

const childBenefits = [
  {
    name: "Kindergeld (Çocuk Parası)",
    amount: "250-292€/ay/çocuk",
    details: "Tüm çocuklar için (18 yaşına kadar, öğrenciler için 25 yaşına kadar)",
    howToApply: "Familienkasse'ye başvurun veya işvereniniz aracılığıyla",
    website: "familienkasse.de"
  },
  {
    name: "Kinderzuschlag (Ek Çocuk Yardımı)",
    amount: "292€/ay/çocuk (max)",
    details: "Düşük gelirli aileler için ek destek",
    howToApply: "Jobcenter veya Arbeitsagentur aracılığıyla",
    website: "arbeitsagentur.de"
  },
  {
    name: "Elterngeld (Ebeveyn Parası)",
    amount: "300-1.800€/ay",
    details: "Doğum sonrası 12 ay boyunca (14 ay çiftler için)",
    howToApply: "Elterngeldstelle'ye başvurun",
    website: "familienportal.de"
  },
  {
    name: "Elternzeit (Ebeveyn İzni)",
    amount: "Ücretsiz (korunmalı izin)",
    details: "3 yıla kadar işten çıkarılmama garantisi",
    howToApply: "İşverene 7 hafta önce yazılı bildirim",
    website: "-"
  }
];

const pregnancyRights = [
  {
    title: "Mutterschutz (Hamilelik İzni)",
    period: "Doğumdan 6 hafta önce - 8 hafta sonra",
    payment: "Net maaşınızın tamamı (Mutterschaftsgeld)",
    note: "İşveren çalıştıramaz, zorunlu izin"
  },
  {
    title: "Mutterschaftsgeld",
    amount: "13-25€/gün (devlet) + işveren tamamlaması",
    duration: "14 hafta (doğum öncesi/sonrası)",
    note: "Sağlık sigortasından alınır"
  },
  {
    title: "Bescherungstermin (Doğum İzni)",
    period: "Talep üzerine 6 hafta ücretsiz izin",
    note: "Baba için de geçerli (bazı eyaletlerde)"
  }
];

const familyReunionSteps = [
  {
    step: 1,
    title: "Sponsorunuzun Hazırlıkları",
    tasks: [
      "Yeterli gelir kanıtı (kira + yaşam masrafları + aile)",
      "Yeterli konut (metrekare hesabı)",
      "Sağlık sigortası",
      "Geçerli oturum izni"
    ],
    icon: Shield
  },
  {
    step: 2,
    title: "Eş için Almanca Şartı",
    tasks: [
      "Goethe A1 sertifikası (zorunlu)",
      "Telc A1, ÖSD A1 kabul edilir",
      "Üniversite mezunu eşler muaf (bazı durumlarda)"
    ],
    icon: GraduationCap
  },
  {
    step: 3,
    title: "Türkiye'den Başvuru",
    tasks: [
      "Evlilik cüzdanı (noter onaylı + çeviri)",
      "Nüfus kayıt örneği",
      "Sponsorun pasaport ve oturum izni fotokopisi",
      "Vize başvuru formu",
      "Sağlık sigortası"
    ],
    icon: Building2
  },
  {
    step: 4,
    title: "Almanya'ya Geliş ve Kayıt",
    tasks: [
      "14 gün içinde Anmeldung yapın",
      "Aufenthaltstitel (oturum kartı) başvurusu",
      "Sağlık sigortasına kaydolun",
      "Çocuklar için Kita/okul kaydı"
    ],
    icon: MapPin
  }
];

export function FamilyGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-500 to-rose-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Aile Rehberi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'da Aile Hayatı
            </h1>
            <p className="text-xl text-rose-100">
              Çocuk bakımı, aile yardımları, hamilelik hakları ve aile birleşimi. 
              Almanya'da aile kurmanın tüm detayları.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="kita" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="kita" className="flex items-center gap-2">
                <Baby className="h-4 w-4" />
                <span className="hidden sm:inline">Kreş</span>
              </TabsTrigger>
              <TabsTrigger value="benefits" className="flex items-center gap-2">
                <Euro className="h-4 w-4" />
                <span className="hidden sm:inline">Yardımlar</span>
              </TabsTrigger>
              <TabsTrigger value="pregnancy" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Hamilelik</span>
              </TabsTrigger>
              <TabsTrigger value="reunion" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Aile Birleşimi</span>
              </TabsTrigger>
            </TabsList>

            {/* Kita Tab */}
            <TabsContent value="kita">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kita (Kreş) Sistemi</h2>
                <p className="text-gray-600">
                  Almanya'da çocuk bakımı eyaletlere göre değişir. Berlin ve Hamburg gibi bazı şehirlerde 
                  ücretsiz, diğerlerinde gelire göre ücretlidir.
                </p>
              </div>

              <Alert className="mb-8 border-amber-200 bg-amber-50">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-800">Kita Yeri Bulmak Zor!</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Özellikle büyük şehirlerde (Münih, Frankfurt, Hamburg) Kita yeri bulmak 
                  <strong> 1-2 yıl</strong> sürebilir. Hamileyken başvurmaya başlayın!
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {kitaInfo.types.map((type, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-lg">{type.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Yaş:</span>
                          <span>{type.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Saat:</span>
                          <span>{type.hours}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{type.note}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mb-8">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">Şehirlere Göre Kita Ücretleri</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {kitaInfo.costs.map((city, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{city.city}</span>
                        <div className="text-right">
                          <Badge variant={city.cost === "Ücretsiz" ? "default" : "secondary"}>
                            {city.cost}
                          </Badge>
                          <p className="text-xs text-gray-500">{city.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-900">Kita Başvuru Süreci</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ol className="space-y-4">
                    {kitaInfo.application.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-700">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aile Yardımları</h2>
                <p className="text-gray-600">
                  Almanya'da çocuk sahibi ailelere devlet tarafından çeşitli maddi destekler sağlanır.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {childBenefits.map((benefit, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{benefit.name}</CardTitle>
                        <Badge className="bg-emerald-500">{benefit.amount}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{benefit.details}</p>
                      <div className="p-3 bg-blue-50 rounded-lg mb-4">
                        <p className="text-sm text-blue-800">
                          <Info className="h-4 w-4 inline mr-1" />
                          <strong>Nasıl başvurulur:</strong> {benefit.howToApply}
                        </p>
                      </div>
                      {benefit.website !== "-" && (
                        <a 
                          href={`https://${benefit.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                        >
                          {benefit.website}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">Örnek Hesaplama</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">2 Çocuklu Aile</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Kindergeld (1. çocuk)</span>
                          <span className="font-semibold">250€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Kindergeld (2. çocuk)</span>
                          <span className="font-semibold">250€</span>
                        </li>
                        <li className="border-t pt-2 flex justify-between font-semibold text-emerald-700">
                          <span>Toplam Aylık</span>
                          <span>500€</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">3 Çocuklu Aile</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Kindergeld (1. çocuk)</span>
                          <span className="font-semibold">250€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Kindergeld (2. çocuk)</span>
                          <span className="font-semibold">250€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Kindergeld (3. çocuk)</span>
                          <span className="font-semibold">292€</span>
                        </li>
                        <li className="border-t pt-2 flex justify-between font-semibold text-emerald-700">
                          <span>Toplam Aylık</span>
                          <span>792€</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pregnancy Tab */}
            <TabsContent value="pregnancy">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hamilelik ve Doğum Hakları</h2>
                <p className="text-gray-600">
                  Almanya'da çalışan kadınlar hamilelik ve doğum sürecinde güçlü yasal korumaya sahiptir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pregnancyRights.map((right, idx) => (
                  <Card key={idx} className="border-2 border-rose-200">
                    <CardHeader className="bg-rose-50">
                      <CardTitle className="text-rose-900 text-lg">{right.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {right.period && (
                          <div>
                            <span className="text-gray-500 text-sm">Süre:</span>
                            <p className="font-medium">{right.period}</p>
                          </div>
                        )}
                        {right.amount && (
                          <div>
                            <span className="text-gray-500 text-sm">Miktar:</span>
                            <p className="font-medium text-emerald-700">{right.amount}</p>
                          </div>
                        )}
                        {right.payment && (
                          <div>
                            <span className="text-gray-500 text-sm">Ödeme:</span>
                            <p className="font-medium text-emerald-700">{right.payment}</p>
                          </div>
                        )}
                        {right.duration && (
                          <div>
                            <span className="text-gray-500 text-sm">Süre:</span>
                            <p className="font-medium">{right.duration}</p>
                          </div>
                        )}
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <p className="text-sm text-amber-800">
                            <Info className="h-4 w-4 inline mr-1" />
                            {right.note}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">Baba Hakları</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Vaterschaftsurlaub (Baba İzni)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Doğumdan sonra 4 hafta ücretsiz izin</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>İşveren onayı gerekmez</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>İşten çıkarılamazsınız</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Elternzeit (Ebeveyn İzni)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>3 yıla kadar korunmalı izin</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Elterngeld alınabilir</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>İşverene 7 hafta önce bildirim</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reunion Tab */}
            <TabsContent value="reunion">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aile Birleşimi Süreci</h2>
                <p className="text-gray-600">
                  Almanya'da yaşayan kişiler eş ve çocuklarını yanına getirebilir. 
                  Süreç sponsorun durumuna göre değişir.
                </p>
              </div>

              <Alert className="mb-8 border-blue-200 bg-blue-50">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Online Başvuru Mümkün</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Aile birleşimi vizesi artık <strong>digital.diplo.de</strong> üzerinden online başvuru yapılabilir. 
                  Randevu almadan önce online form doldurulmalıdır.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {familyReunionSteps.map((step, idx) => (
                  <Card key={idx} className="border-l-4 border-l-rose-500">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-rose-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-3">
                            {step.step}. {step.title}
                          </h3>
                          <ul className="space-y-2">
                            {step.tasks.map((task, tidx) => (
                              <li key={tidx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                <span className="text-gray-700">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-amber-200">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-amber-900">Sponsorun Yeterli Gelir Şartı (2026)</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Aylık Net Gelir Gereksinimi</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>Sponsor (kendisi)</span>
                          <span className="font-semibold">~1.200€</span>
                        </li>
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>Eş için ek</span>
                          <span className="font-semibold">~450€</span>
                        </li>
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span>Her çocuk için ek</span>
                          <span className="font-semibold">~400€</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Örnek Hesaplama</h4>
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2">Sponsor + Eş + 1 Çocuk:</p>
                        <p className="text-2xl font-bold text-emerald-700">~2.050€/ay</p>
                        <p className="text-sm text-gray-500 mt-2">Net gelir gereklidir</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Entegrasyon ve Dil Kursları
          </h2>
          <p className="text-lg text-rose-100 mb-8">
            Almanya'da yaşamınızı kolaylaştırmak için entegrasyon kurslarına katılın. 
            BAMF tarafından desteklenen kurslarla Almancanızı geliştirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/geldikten-sonra">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Geldikten Sonra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/ogrenci-rehberi">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Öğrenci Rehberi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
