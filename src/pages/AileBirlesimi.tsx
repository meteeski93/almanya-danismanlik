import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Euro, 
  Home, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Info,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const requiredDocuments = [
  { name: "Pasaport", detail: "10 yıldan eski olmamalı, 2 boş sayfa", required: true },
  { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
  { name: "Evlilik Cüzdanı", detail: "Noter onaylı + Almanca yeminli çeviri", required: true },
  { name: "Nüfus Kayıt Örneği", detail: "E-Devlet'ten alınan aile kaydı", required: true },
  { name: "Eşin Pasaport Fotokopisi", detail: "Almanya'daki eşin pasaportu", required: true },
  { name: "Eşin Oturum İzni", detail: "Aufenthaltstitel fotokopisi", required: true },
  { name: "Eşin Gelir Belgesi", detail: "Son 3 ay maaş bordrosu", required: true },
  { name: "Eşin İş Sözleşmesi", detail: "Güncel ve imzalı", required: true },
  { name: "Eşin Kira Sözleşmesi", detail: "Konut yeterliliğini gösteren", required: true },
  { name: "Dil Sertifikası", detail: "Goethe A1 veya dengi (eş için)", required: true },
  { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
  { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm", required: true },
  { name: "Çocuklar için", detail: "Doğum belgesi, velayet belgesi (varsa)", required: false },
  { name: "Vergi Numarası", detail: "Eşin Steuer-ID (varsa)", required: false },
];

const incomeRequirements = [
  { family: "Sponsor (kendisi)", amount: "~1.200€/ay", note: "Asgari yaşam masrafı" },
  { family: "Eş için ek", amount: "~450€/ay", note: "Her eş için" },
  { family: "1. Çocuk için", amount: "~400€/ay", note: "0-6 yaş" },
  { family: "2. Çocuk için", amount: "~350€/ay", note: "7-14 yaş" },
  { family: "3. Çocuk+", amount: "~300€/ay", note: "15+ yaş" },
];

const commonMistakes = [
  {
    mistake: "Yetersiz Gelir",
    description: "Sponsorun geliri hesaplanan ihtiyacı karşılamıyor.",
    solution: "Gelir belgelerini kontrol edin. Gerekirse ek gelir kaynakları gösterin."
  },
  {
    mistake: "Küçük Konut",
    description: "Ev metrekaresi aile büyüklüğüne göre yetersiz.",
    solution: "Kişi başı minimum 12-15 m² gerekli. Daha büyük ev bulun."
  },
  {
    mistake: "Dil Sertifikası Eksik",
    description: "Eş A1 Almanca sertifikası sunamıyor.",
    solution: "Goethe A1 sınavına girin. Üniversite mezunu eşler muaf."
  },
  {
    mistake: "Eksik Evrak",
    description: "Çeviri eksik veya noter onayı yok.",
    solution: "Tüm belgeler noter onaylı ve yeminli çeviri olmalı."
  },
  {
    mistake: "Geçersiz Evlilik",
    description: "Evlilik resmi olarak tanınmıyor.",
    solution: "Türkiye'de resmi nikah yapılmalı, dini nikah yeterli değil."
  },
];

const scenarios = [
  {
    title: "Türkiye'de Evlenenler",
    description: "Türkiye'de evlendikten sonra Almanya'ya eş vizesi başvurusu.",
    steps: [
      "Türkiye'de resmi nikah yapın",
      "Evlilik cüzdanını noterden onaylatın",
      "Yeminli çeviri yaptırın",
      "Eş Almanya'da gelir ve konut hazırlasın",
      "Vize başvurusu yapın",
      "A1 Almanca sertifikası alın"
    ],
    timeline: "3-6 ay"
  },
  {
    title: "Almanya'da Evlenenler",
    description: "Almanya'da evlenip eşin oturum izni başvurusu.",
    steps: [
      "Almanya'da belediyede nikah başvurusu",
      "Türk belgelerini (bekarlık) getirin",
      "Standesamt'ta nikah yapın",
      "Evlilik cüzdanı alın",
      "Eş için oturum izni başvurusu",
      "A1 Almanca şartı aranmaz (bazı durumlarda)"
    ],
    timeline: "2-4 ay"
  },
  {
    title: "Çalışma + Eş + Çocuk Aynı Anda",
    description: "Aynı anda çalışma vizesi ve aile birleşimi başvurusu.",
    steps: [
      "Önce çalışma vizesi başvurusu yapın",
      "İş teklifiniz ve ZAV onayınız olsun",
      "Aynı anda eş ve çocuk için başvuru",
      "Aile birleşimi için ek evraklar",
      "Aile birlikte Almanya'ya gider",
      "Eş ve çocuk için oturum izni alın"
    ],
    timeline: "4-8 ay"
  }
];

export function AileBirlesimi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Aile Vizesi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya Aile Birleşimi Vizesi 2026
            </h1>
            <p className="text-xl text-rose-100 mb-6">
              Eş ve çocuklarınızı Almanya'ya yanınıza getirin. 
              Güncel evrak listesi, gelir şartları ve başvuru süreci.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-white/20">Eş Vizesi</Badge>
              <Badge className="bg-white/20">Çocuk Vizesi</Badge>
              <Badge className="bg-white/20">Aile Birleşimi</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-rose-50 rounded-xl">
              <Clock className="h-8 w-8 text-rose-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-rose-700">3-6 Ay</p>
              <p className="text-sm text-gray-600">Ortalama Süre</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <Euro className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-emerald-700">75€</p>
              <p className="text-sm text-gray-600">Vize Ücreti</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">A1</p>
              <p className="text-sm text-gray-600">Almanca Şartı</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <Home className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-700">12m²</p>
              <p className="text-sm text-gray-600">Kişi Başı Alan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="scenarios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              <TabsTrigger value="scenarios">Senaryolar</TabsTrigger>
              <TabsTrigger value="documents">Evraklar</TabsTrigger>
              <TabsTrigger value="income">Gelir Şartı</TabsTrigger>
              <TabsTrigger value="mistakes">Hatalar</TabsTrigger>
              <TabsTrigger value="process">Süreç</TabsTrigger>
            </TabsList>

            {/* Scenarios Tab */}
            <TabsContent value="scenarios">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {scenarios.map((scenario, idx) => (
                  <Card key={idx} className="border-2 border-rose-200">
                    <CardHeader className="bg-rose-50">
                      <CardTitle className="text-rose-900 text-lg">{scenario.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{scenario.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Adımlar:</h4>
                        <ol className="space-y-1 text-sm">
                          {scenario.steps.map((step, sidx) => (
                            <li key={sidx} className="flex gap-2">
                              <span className="text-rose-600 font-bold">{sidx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <Badge variant="outline" className="w-full justify-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {scenario.timeline}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <FileText className="h-5 w-5" />
                        Gerekli Belgeler
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {requiredDocuments.map((doc, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-start gap-3 p-3 rounded-lg ${
                              doc.required ? 'bg-gray-50' : 'bg-gray-50/50'
                            }`}
                          >
                            {doc.required ? (
                              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            ) : (
                              <Info className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{doc.name}</span>
                                {doc.required && (
                                  <Badge variant="destructive" className="text-xs">Zorunlu</Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{doc.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Alert className="border-amber-200 bg-amber-50 mb-6">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <AlertTitle className="text-amber-800">Önemli Not</AlertTitle>
                    <AlertDescription className="text-amber-700 text-sm">
                      Tüm belgeler <strong>noter onaylı</strong> ve <strong>yeminli çeviri</strong> ile sunulmalıdır.
                    </AlertDescription>
                  </Alert>

                  <Card>
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="text-emerald-900 text-lg">Dil Şartı Muafiyeti</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">
                        A1 Almanca şartından muaf olanlar:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">Üniversite mezunu eşler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">AB vatandaşı eşler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">Çocuklar (18 yaş altı)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Income Tab */}
            <TabsContent value="income">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="flex items-center gap-2 text-emerald-900">
                      <Euro className="h-5 w-5" />
                      Gelir Gereksinimleri (2026)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      Sponsorun (Almanya'daki eş/kişi) net geliri aşağıdaki asgari tutarları karşılamalıdır:
                    </p>
                    <div className="space-y-3">
                      {incomeRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{req.family}</span>
                          <div className="text-right">
                            <span className="font-bold text-emerald-700">{req.amount}</span>
                            <p className="text-xs text-gray-500">{req.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-amber-900">Örnek Hesaplama</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Sponsor + Eş</h4>
                        <p className="text-sm text-gray-600 mb-2">Gereken minimum gelir:</p>
                        <p className="text-2xl font-bold text-emerald-700">~1.650€/ay</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Sponsor + Eş + 1 Çocuk</h4>
                        <p className="text-sm text-gray-600 mb-2">Gereken minimum gelir:</p>
                        <p className="text-2xl font-bold text-emerald-700">~2.050€/ay</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Sponsor + Eş + 2 Çocuk</h4>
                        <p className="text-sm text-gray-600 mb-2">Gereken minimum gelir:</p>
                        <p className="text-2xl font-bold text-emerald-700">~2.400€/ay</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Gelir Kaynakları</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Maaş, kira geliri, serbest meslek geliri, emekli maaşı gibi düzenli gelirler kabul edilir. 
                  Tasarruflar ve tek seferli gelirler genellikle kabul edilmez.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Mistakes Tab */}
            <TabsContent value="mistakes">
              <div className="space-y-4">
                {commonMistakes.map((item, idx) => (
                  <Card key={idx} className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                          <XCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-red-900 mb-2">{item.mistake}</h3>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <p className="text-sm text-emerald-800">
                              <CheckCircle className="h-4 w-4 inline mr-1" />
                              <strong>Çözüm:</strong> {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process">
              <Card>
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-900">Başvuru Süreci Adım Adım</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Eş Almanya'da Hazırlık Yapar",
                        desc: "Gelir belgeleri, kira sözleşmesi, oturum izni fotokopisi hazırlanır.",
                        duration: "1-2 hafta"
                      },
                      {
                        step: 2,
                        title: "Evraklar Türkiye'ye Gönderilir",
                        desc: "Orjinal belgeler kurye veya posta ile Türkiye'ye gönderilir.",
                        duration: "1 hafta"
                      },
                      {
                        step: 3,
                        title: "Türkçe Evraklar Hazırlanır",
                        desc: "Evlilik cüzdanı, nüfus kaydı vb. belgeler hazırlanır.",
                        duration: "1 hafta"
                      },
                      {
                        step: 4,
                        title: "Noter Onayı ve Çeviri",
                        desc: "Tüm belgeler noterden onaylanır ve yeminli çeviri yapılır.",
                        duration: "1-2 hafta"
                      },
                      {
                        step: 5,
                        title: "Almanca A1 Sertifikası",
                        desc: "Eş Goethe veya Telc A1 sınavına girer.",
                        duration: "2-3 ay (hazırlık dahil)"
                      },
                      {
                        step: 6,
                        title: "Online Başvuru",
                        desc: "digital.diplo.de üzerinden form doldurulur.",
                        duration: "1 gün"
                      },
                      {
                        step: 7,
                        title: "Randevu ve Başvuru",
                        desc: "iDATA'dan randevu alınır ve evraklar teslim edilir.",
                        duration: "1-4 hafta (randevu bekleme)"
                      },
                      {
                        step: 8,
                        title: "Değerlendirme",
                        desc: "Konsolosluk evrakları inceler, gerekirse ek belge ister.",
                        duration: "2-4 ay"
                      },
                      {
                        step: 9,
                        title: "Vize Onayı ve Pasaport",
                        desc: "Vize onaylanınca pasaport teslim alınır.",
                        duration: "1 hafta"
                      },
                      {
                        step: 10,
                        title: "Almanya'ya Geliş",
                        desc: "Almanya'ya gidilir ve 14 gün içinde Anmeldung yapılır.",
                        duration: "-"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-purple-700">{item.step}</span>
                        </div>
                        <div className="flex-1 pb-6 border-b last:border-0">
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.desc}</p>
                          <Badge variant="outline" className="mt-2">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.duration}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Aile Birleşimi Başvurusu Yapın
          </h2>
          <p className="text-lg text-rose-100 mb-8">
            Eş ve çocuklarınızı yanınıza getirmek için hemen başvurun. 
            Profesyonel destek almak ister misiniz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gerekli-evraklar">
              <Button size="lg" className="bg-white text-rose-700 hover:bg-gray-100">
                Evrak Listesi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:meteeski93@gmail.com?subject=Aile%20Birlesimi%20Danismanlik">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Danışmanlık Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
