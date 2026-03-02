import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  AlertTriangle, 
  XCircle, 
  FileX, 
  Languages,
  Briefcase,
  Wallet,
  Instagram,
  CheckCircle,
  Gavel,
  RefreshCw,
  AlertOctagon,
  Scale,
  FileText,
  UserX,
  HeartCrack,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const rejectionReasons = [
  {
    category: "Dil Yetersizliği",
    icon: Languages,
    color: "blue",
    description: "Almanca seviyeniz başvurduğunuz vize için yeterli değil.",
    examples: [
      "Aile birleşimi için A1 şartı karşılanmamış",
      "Şans Kartı için minimum dil gereksinimi",
      "Öğrenci vizesi için B2/C1 şartı"
    ],
    solution: "Goethe veya Telc sınavına girin. Online kurslarla seviyenizi artırın."
  },
  {
    category: "Mesleki Eksiklik",
    icon: Briefcase,
    color: "amber",
    description: "Mesleğiniz Almanya'da aranan meslekler arasında değil veya denkliğiniz yok.",
    examples: [
      "Mesleki denklik (Anerkennung) yapılmamış",
      "Deneyim süresi yetersiz",
      "Meslek Almanya'da düşük talep görüyor"
    ],
    solution: "ZAB üzerinden denklik başvurusu yapın. Alternatif mesleklere yönelin."
  },
  {
    category: "Mali Yetersizlik",
    icon: Wallet,
    color: "red",
    description: "Almanya'da yaşam masraflarını karşılayacak yeterli geliriniz yok.",
    examples: [
      "Bloke hesap bakiyesi yetersiz",
      "Gelir belgeleri eksik/şüpheli",
      "Sponsor geliri yetersiz (aile birleşimi)"
    ],
    solution: "Bloke hesabı doldurun veya sponsor gelirini artırın."
  },
  {
    category: "Sağlık Sorunları",
    icon: HeartCrack,
    color: "rose",
    description: "Kronik hastalık veya ciddi sağlık sorunları vize reddine neden olabilir.",
    examples: [
      "Pahalı tedavi gerektiren hastalıklar",
      "Kontrolsüz kronik rahatsızlıklar",
      "Aşısız bulaşıcı hastalıklar"
    ],
    solution: "Sağlık raporu alın, tedavi planı sunun, özel sağlık sigortası gösterin."
  },
  {
    category: "Sahte/Eksik Evrak",
    icon: FileX,
    color: "red",
    description: "Belgelerde tutarsızlık, sahte belge veya eksik evrak.",
    examples: [
      "Sahte diploma veya sertifika",
      "Banka dökümünde tutarsızlık",
      "Çelişkili bilgiler farklı belgelerde"
    ],
    solution: "Tüm belgeleri orijinal ve noter onaylı hazırlayın. Çeviriler yeminli olsun."
  },
  {
    category: "Sosyal Medya İncelemesi",
    icon: Instagram,
    color: "pink",
    description: "Konsolosluklar sosyal medya hesaplarınızı inceleyebilir.",
    examples: [
      "Silahlı fotoğraflar",
      "Aşırı siyasi paylaşımlar",
      "Şüpheli bağlantılar/etiketler",
      "Başvuru amacıyla çelişen içerikler"
    ],
    solution: "Sosyal medyanızı temizleyin, profesyonel görünüm sağlayın."
  }
];

const difficultCases = [
  {
    situation: "Sabıka Kaydı Var",
    severity: "Yüksek",
    description: "Cezai sabıka kaydı vize reddine neden olur.",
    alternatives: [
      "Suçun ne zaman işlendiği önemli (5+ yıl önceyse şans daha yüksek)",
      "Hafif suçlar (trafik cezası vb.) daha tolere edilir",
      "Adli sicil kaydınızı temizleyin (süre dolduysa)",
      "Alternatif ülkeleri değerlendirin (Avusturya, Hollanda)"
    ]
  },
  {
    situation: "Önceki Vize İhlali",
    severity: "Çok Yüksek",
    description: "Schengen vizesini aşma, yasadışı çalışma vb.",
    alternatives: [
      "Ne kadar süre önce olduğu önemli",
      "İhlal süresi kısaysa (birkaç gün) şansınız daha yüksek",
      "Yeni başvuru için uzun süre bekleyin (1-3 yıl)",
      "Profesyonel danışmanlık alın"
    ]
  },
  {
    situation: "Yaşlı Aile Üyesi Bakımı",
    severity: "Orta",
    description: "Türkiye'de bakıma muhtaç aile üyesi var.",
    alternatives: [
      "Aile birleşimi vizesi (bakıma muhtaç ebeveyn için)",
      "Pflegevisum (özel bakım vizesi)",
      "Aile üyesini Almanya'ya getirme seçeneği"
    ]
  }
];

export function VisaRejection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Vize Reddi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vize Reddi Sonrası Ne Yapmalı?
            </h1>
            <p className="text-xl text-red-100">
              Vizeniz reddedildiyse panik yapmayın. Sebepleri öğrenin, 
              düzeltin ve tekrar deneyin. Tüm seçenekler burada.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Update Alert */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-red-200 bg-red-50">
            <AlertOctagon className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-800">Önemli Değişiklik: 1 Temmuz 2025</AlertTitle>
            <AlertDescription className="text-red-700">
              <strong>İtiraz hakkı (Widerspruch/Remonstration) KALDIRILDI.</strong> Artık vize reddedildiğinde 
              doğrudan itiraz edemiyorsunuz. Yeni süreç:
              <ul className="mt-2 space-y-1">
                <li>1. Yeni başvuru yapmak (en pratik)</li>
                <li>2. Berlin İdare Mahkemesi'nde dava açmak (1 ay içinde, ~480€)</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="options" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="options" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span className="hidden sm:inline">Seçenekler</span>
              </TabsTrigger>
              <TabsTrigger value="reasons" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Red Nedenleri</span>
              </TabsTrigger>
              <TabsTrigger value="difficult" className="flex items-center gap-2">
                <UserX className="h-4 w-4" />
                <span className="hidden sm:inline">Zor Vakalar</span>
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Yeni Başvuru</span>
              </TabsTrigger>
            </TabsList>

            {/* Options Tab */}
            <TabsContent value="options">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-emerald-200">
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="flex items-center gap-2 text-emerald-900">
                      <RefreshCw className="h-6 w-6" />
                      Seçenek 1: Yeni Başvuru (Önerilen)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      En hızlı ve pratik çözüm. Red nedenlerini düzelterek yeni başvuru yapın.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Red nedenlerini analiz edin",
                        "Eksik/yanlış evrakları düzeltin",
                        "Yeni randevu alın (iDATA)",
                        "Güncellenmiş evraklarla başvurun",
                        "Ortalama süre: 6-12 hafta"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-emerald-100 rounded-lg">
                      <p className="text-emerald-800 text-sm font-semibold">
                        ✓ En çok tavsiye edilen yöntem
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Scale className="h-6 w-6" />
                      Seçenek 2: İdare Mahkemesi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      Berlin İdare Mahkemesi'nde dava açabilirsiniz. Maliyetli ve uzun süreç.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Red kararından 1 ay içinde dava açılmalı",
                        "Mahkeme masrafı: ~480€",
                        "Avukat ücreti (isteğe bağlı): 500-2000€",
                        "Süreç: 6-18 ay",
                        "Kazanma şansı red nedenine göre değişir"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Gavel className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-amber-100 rounded-lg">
                      <p className="text-amber-800 text-sm">
                        ⚠️ Sadece haksız red olduğunu düşünüyorsanız düşünün
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader className="bg-gray-50">
                  <CardTitle>Hangi Durumda Hangi Seçenek?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Yeni Başvuru İçin:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Eksik evrak nedeniyle red</li>
                        <li>• Mali yetersizlik (düzeltilebilir)</li>
                        <li>• Dil seviyesi yetersiz (geliştirilebilir)</li>
                        <li>• Deneyim süresi yetersiz</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Mahkeme İçin:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Haksız/hukuksuz red kararı</li>
                        <li>• Prosedür hatası</li>
                        <li>• Belirsiz red gerekçesi</li>
                        <li>• Önceki benzer başvurular kabul edildi</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reasons Tab */}
            <TabsContent value="reasons">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sık Karşılaşılan Red Nedenleri</h2>
                <p className="text-gray-600">
                  Vize red nedenlerini anlamak, bir sonraki başvurunuzu başarılı yapmanın ilk adımıdır.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rejectionReasons.map((reason, idx) => (
                  <Card key={idx} className={`border-2 border-${reason.color}-200`}>
                    <CardHeader className={`bg-${reason.color}-50`}>
                      <div className="flex items-center gap-3">
                        <div className={`bg-${reason.color}-100 p-2 rounded-lg`}>
                          <reason.icon className={`h-5 w-5 text-${reason.color}-600`} />
                        </div>
                        <CardTitle className={`text-${reason.color}-900 text-lg`}>{reason.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{reason.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Örnekler:</h4>
                        <ul className="space-y-1">
                          {reason.examples.map((ex, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <XCircle className="h-3 w-3 text-red-400" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-3 bg-${reason.color}-50 rounded-lg`}>
                        <p className={`text-sm text-${reason.color}-800`}>
                          <CheckCircle className="h-4 w-4 inline mr-1" />
                          <strong>Çözüm:</strong> {reason.solution}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Difficult Cases Tab */}
            <TabsContent value="difficult">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Zor Vakalar ve Alternatifler</h2>
                <p className="text-gray-600">
                  Bazı durumlar vize almayı zorlaştırır. Ancak yine de alternatif yollar mevcuttur.
                </p>
              </div>

              <div className="space-y-6">
                {difficultCases.map((case_, idx) => (
                  <Card key={idx} className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{case_.situation}</h3>
                          <Badge variant={case_.severity === "Çok Yüksek" ? "destructive" : "secondary"} className="mt-2">
                            Zorluk: {case_.severity}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{case_.description}</p>
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-3">Alternatifler:</h4>
                        <ul className="space-y-2">
                          {case_.alternatives.map((alt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{alt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert className="mt-8 border-amber-200 bg-amber-50">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <AlertTitle className="text-amber-800">Profesyonel Yardım</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Zor vakalarda profesyonel danışmanlık almanız şansınızı artırabilir. 
                  Bize ulaşın: <a href="mailto:meteeski93@gmail.com" className="underline">meteeski93@gmail.com</a>
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* New Application Tab */}
            <TabsContent value="new">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Yeni Başvuru Rehberi</h2>
                <p className="text-gray-600">
                  Red aldıktan sonra yeni başvuru yaparken dikkat edilmesi gerekenler.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="text-emerald-900">Yeni Başvuru Adımları</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ol className="space-y-6">
                        {[
                          {
                            title: "Red Mektubunu Analiz Edin",
                            desc: "Red nedenlerini tek tek not alın. Hangi evrak eksik, hangi şart karşılanmamış?",
                            tip: "Red mektubunu kaybetmeyin, yeni başvuruda referans olabilir"
                          },
                          {
                            title: "Eksikleri Tamamlayın",
                            desc: "Red nedenlerine göre eksik evrakları tamamlayın veya şartları karşılayın.",
                            tip: "Dil seviyesi, mali kaynak, deneyim gibi konuları güçlendirin"
                          },
                          {
                            title: "Motivasyon Mektubunu Güncelleyin",
                            desc: "Önceki reddi açıklayın ve nasıl düzelttiğinizi belirtin.",
                            tip: "Dürüst olun, düzeltmeleri somut örneklerle anlatın"
                          },
                          {
                            title: "Yeni Randevu Alın",
                            desc: "iDATA üzerinden yeni randevu alın. Eski randevu iptal edilmiş olmalı.",
                            tip: "Randevu tarihine kadar tüm evraklar hazır olsun"
                          },
                          {
                            title: "Başvurunuzu Yapın",
                            desc: "Güncellenmiş tüm evraklarla konsolosluğa gidin.",
                            tip: "Evrakları düzenli klasörde sunun, eksik olmasın"
                          }
                        ].map((step, idx) => (
                          <li key={idx} className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-semibold text-emerald-700">
                              {idx + 1}
                            </span>
                            <div>
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              <p className="text-gray-600 mt-1">{step.desc}</p>
                              <p className="text-sm text-amber-700 mt-2">
                                <Info className="h-4 w-4 inline mr-1" />
                                {step.tip}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900">Sık Yapılan Hatalar</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {[
                          "Aynı eksik evrakla tekrar başvurmak",
                          "Red nedenlerini görmezden gelmek",
                          "Yalan/hileli belge sunmak",
                          "Çok erken tekrar başvurmak",
                          "Motivasyon mektubu eklememek"
                        ].map((error, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{error}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="text-emerald-900">Başarı İpuçları</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {[
                          "Red nedenlerini tamamen giderin",
                          "Daha güçlü evraklar sunun",
                          "Profesyonel çeviri kullanın",
                          "Başvuru tarihinden önce hazırlanın",
                          "Gerekirse profesyonel destek alın"
                        ].map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Yardıma mı ihtiyacınız var?
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Vize reddi sonrası süreç karmaşık olabilir. Profesyonel destek alarak 
            şansınızı artırabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:meteeski93@gmail.com?subject=Vize%20Reddi%20Danismanlik">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                Bize Ulaşın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/vize-bulucu">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Vize Bulucu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
