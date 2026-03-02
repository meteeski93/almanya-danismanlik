import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Euro, 
  FileText, 
  Shield, 
  CheckCircle, 
  Calendar,
  HeartPulse,
  Percent,
  Info,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const socialInsurance = [
  {
    name: "Krankenversicherung (Sağlık)",
    rate: "14.6% (işveren + çalışan)",
    description: "Zorunlu sağlık sigortası. Doktor, hastane, ilaç masraflarını karşılar.",
    note: "Aile sigortası: Çocuklar ve eş (gelirsizse) ücretsiz"
  },
  {
    name: "Rentenversicherung (Emeklilik)",
    rate: "18.6% (işveren + çalışan)",
    description: "Emeklilik maaşınızı oluşturan prim. En az 5 yıl prim ödemek gerekir.",
    note: "Türkiye ile sosyal güvenlik anlaşması var, primler aktarılabilir"
  },
  {
    name: "Arbeitslosenversicherung (İşsizlik)",
    rate: "2.6% (işveren + çalışan)",
    description: "İşsiz kalırsanız maaşınızın %60-67'sini 12-24 ay öder.",
    note: "En az 12 ay prim ödemiş olmanız gerekir"
  },
  {
    name: "Pflegeversicherung (Bakım)",
    rate: "3.4% (işveren + çalışan)",
    description: "Yaşlı veya bakıma muhtaç kişilerin bakım masraflarını karşılar.",
    note: "Çocuksuzlar %0.6 daha fazla öder"
  }
];

const taxBrackets = [
  { income: "0 - 11.784€", rate: "%0", note: "Vergi muafiyeti (Grundfreibetrag)" },
  { income: "11.785 - 17.374€", rate: "%14-24", note: "Düşük gelir vergisi" },
  { income: "17.375 - 68.814€", rate: "%24-42", note: "Orta gelir vergisi" },
  { income: "68.815 - 277.825€", rate: "%42", note: "Yüksek gelir vergisi" },
  { income: "277.826€+", rate: "%45", note: "Zenginlik vergisi" }
];

const workBenefits = [
  {
    name: "Urlaub (Yıllık İzin)",
    details: "Yasal minimum 20 gün, çoğu şirket 25-30 gün verir",
    icon: Calendar
  },
  {
    name: "Urlaubsgeld (Tatil Parası)",
    details: "Bazı şirketler yıllık ekstra 50-100% maaş öder",
    icon: Euro
  },
  {
    name: "Weihnachtsgeld (Yılbaşı Parası)",
    details: "Aralık ayında ekstra maaş veya ikramiye",
    icon: Gift
  },
  {
    name: "Vergi İadesi (Steuererklärung)",
    details: "Her yıl vergi iadesi alabilirsiniz (ortalama 1.000€)",
    icon: FileText
  },
  {
    name: "Krankengeld (Hastalık Parası)",
    details: "6 hafta ücretli izin, sonrası %70 maaş (max 78 hafta)",
    icon: HeartPulse
  },
  {
    name: "Elternzeit (Ebeveyn İzni)",
    details: "3 yıla kadar korunmalı izin, Elterngeld alınabilir",
    icon: Baby
  }
];

const jobSearchPlatforms = [
  { name: "LinkedIn", url: "linkedin.com/jobs", type: "Profesyonel ağ" },
  { name: "Indeed", url: "indeed.de", type: "Genel iş ilanları" },
  { name: "StepStone", url: "stepstone.de", type: "Profesyonel işler" },
  { name: "XING", url: "xing.com", type: "Alman LinkedIn'i" },
  { name: "Arbeitsagentur", url: "arbeitsagentur.de", type: "Devlet iş kurumu" },
  { name: "Make it in Germany", url: "make-it-in-germany.com", type: "Yabancılar için" }
];

import { Baby, Gift } from 'lucide-react';

export function WorkLife() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Çalışma Hayatı</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'da Çalışmak
            </h1>
            <p className="text-xl text-blue-100">
              Vergi sistemi, sosyal sigortalar, çalışan hakları ve iş arama rehberi. 
              Almanya'da çalışma hayatınızı şekillendirin.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="tax" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="tax" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                <span className="hidden sm:inline">Vergi</span>
              </TabsTrigger>
              <TabsTrigger value="insurance" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Sigorta</span>
              </TabsTrigger>
              <TabsTrigger value="benefits" className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4" />
                <span className="hidden sm:inline">Haklar</span>
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">İş Arama</span>
              </TabsTrigger>
            </TabsList>

            {/* Tax Tab */}
            <TabsContent value="tax">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Percent className="h-6 w-6" />
                        Gelir Vergisi Dilimleri (2026)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-6">
                        Almanya'da gelir vergisi kademelidir. Ne kadar kazanırsanız o kadar vergi ödersiniz. 
                        İşvereniniz maaşınızdan otomatik kesinti yapar.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="p-3 text-left">Yıllık Gelir</th>
                              <th className="p-3 text-left">Vergi Oranı</th>
                              <th className="p-3 text-left">Not</th>
                            </tr>
                          </thead>
                          <tbody>
                            {taxBrackets.map((bracket, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="p-3 font-medium">{bracket.income}</td>
                                <td className="p-3">
                                  <Badge variant={idx === 0 ? "secondary" : "default"}>{bracket.rate}</Badge>
                                </td>
                                <td className="p-3 text-sm text-gray-600">{bracket.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <Alert className="mt-6 border-amber-200 bg-amber-50">
                        <Info className="h-5 w-5 text-amber-600" />
                        <AlertTitle className="text-amber-800">Vergi İadesi (Steuererklärung)</AlertTitle>
                        <AlertDescription className="text-amber-700">
                          Her yıl Mart-Nisan aylarında vergi iadesi başvurusu yapabilirsiniz. 
                          İşe gitme masrafları, ev çalışma odası, mesleki eğitim giderleri gibi 
                          kalemleri düşebilirsiniz. <strong>Ortalama iade: 1.000€</strong>
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-emerald-50">
                      <CardTitle className="text-emerald-900">Vergi İadesi İçin Giderler</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { item: "İşe gitme masrafları", amount: "0,30€/km (one way)" },
                          { item: "Ev çalışma odası", amount: "5€/gün (max 600€/yıl)" },
                          { item: "Mesleki eğitim", amount: "Tamamı" },
                          { item: "İş kıyafetleri", amount: "110€/yıl" },
                          { item: "İş arama masrafları", amount: "Tamamı" },
                          { item: "Çiftler için vergi sınıfı", amount: "3+5 kombinasyonu" }
                        ].map((gider, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-700">{gider.item}</span>
                            <Badge variant="outline">{gider.amount}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900">Steuer-ID</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">
                        Anmeldung sonrası otomatik olarak 11 haneli vergi numaranız (Steuer-ID) 
                        postayla gönderilir.
                      </p>
                      <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2"><strong>Ne zaman gerekli?</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• İşe başlarken (işverene verilir)</li>
                          <li>• Vergi iadesi başvurusu için</li>
                          <li>• Banka işlemlerinde</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">
                          <Info className="h-4 w-4 inline mr-1" />
                          Gelmediyse Finanzamt'a başvurun
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader className="bg-purple-50">
                      <CardTitle className="text-purple-900">Vergi Sınıfları (Steuerklasse)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span><strong>I</strong> - Bekar</span>
                          <span className="text-gray-500">En yüksek kesinti</span>
                        </li>
                        <li className="flex justify-between p-2 bg-emerald-50 rounded">
                          <span><strong>III</strong> - Evli (yüksek gelirli)</span>
                          <span className="text-emerald-600">En avantajlı</span>
                        </li>
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span><strong>IV</strong> - Evli (eşit gelir)</span>
                          <span className="text-gray-500">Orta</span>
                        </li>
                        <li className="flex justify-between p-2 bg-gray-50 rounded">
                          <span><strong>V</strong> - Evli (düşük gelirli)</span>
                          <span className="text-gray-500">Yüksek kesinti</span>
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 mt-4">
                        Evliler III + V kombinasyonuyla daha az vergi öder
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Insurance Tab */}
            <TabsContent value="insurance">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sosyal Sigorta Sistemi</h2>
                <p className="text-gray-600">
                  Almanya'da çalışanlar için zorunlu sosyal sigortalar vardır. 
                  Brüt maaşınızdan otomatik kesilir, işveren de aynı miktarda katkıda bulunur.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialInsurance.map((insurance, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{insurance.name}</CardTitle>
                        <Badge>{insurance.rate}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{insurance.description}</p>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <Info className="h-4 w-4 inline mr-1" />
                          {insurance.note}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">Örnek Maaş Hesaplaması</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Brüt: 3.500€/ay</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Sağlık sigortası</span>
                          <span className="text-red-600">- 315€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Emeklilik</span>
                          <span className="text-red-600">- 326€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>İşsizlik</span>
                          <span className="text-red-600">- 46€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Bakım</span>
                          <span className="text-red-600">- 60€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Gelir vergisi</span>
                          <span className="text-red-600">- 450€</span>
                        </li>
                        <li className="border-t pt-2 flex justify-between font-semibold">
                          <span>Net Maaş</span>
                          <span className="text-emerald-600">~ 2.300€</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-4">
                        Bu hesaplama yaklaşıktır. Gerçek tutarlar:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Vergi sınıfınıza göre değişir</li>
                        <li>• Sağlık sigortası şirketine göre değişir</li>
                        <li>• Kilise vergisi (varsa) eklenir</li>
                        <li>• Solidaritätszuschlag (%5.5) eklenir</li>
                      </ul>
                      <div className="mt-4 p-3 bg-amber-50 rounded border border-amber-200">
                        <p className="text-sm text-amber-800">
                          Net maaş hesaplaması için: 
                          <a href="https://www.brutto-netto-rechner.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                            brutto-netto-rechner.info
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Çalışan Hakları ve Yan Haklar</h2>
                <p className="text-gray-600">
                  Almanya'da çalışanlar güçlü yasal korumaya sahiptir. İşte bilmeniz gereken haklar:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workBenefits.map((benefit, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <benefit.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold">{benefit.name}</h3>
                      </div>
                      <p className="text-gray-600">{benefit.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-2 border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-900">İşten Çıkarılma Koruması</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Deneme süresi:</strong> 6 ay (bu sürede kolay çıkarılabilirsiniz)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Kıdem tazminatı:</strong> Her çalışılan yıl için 0.5 aylık maaş</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700"><strong>İhbar süresi:</strong> 4 hafta (kıdeme göre artar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700"><strong>İş mahkemesi:</strong> Haksız çıkarma için dava açabilirsiniz</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-emerald-200">
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-900">İşsizlik Parası (ALG I)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <p className="text-4xl font-bold text-emerald-700">%60-67</p>
                      <p className="text-gray-600">Son maaşınızdan</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>En az 12 ay prim ödemiş olmanız gerekir</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-5 text-emerald-500" />
                        <span>12-24 ay ödenir (yaşa göre)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Çocuğunuz varsa %67 (yoksa %60)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-amber-500" />
                        <span>Arbeitsagentur'a kaydolmanız gerekir</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">İş Arama Platformları</h2>
                <p className="text-gray-600">
                  Almanya'da iş aramak için kullanabileceğiniz en popüler platformlar:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobSearchPlatforms.map((platform, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{platform.type}</p>
                      <a 
                        href={`https://${platform.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {platform.url}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-900">CV ve Başvuru İpuçları</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Almanya'da CV (Lebenslauf)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Fotoğraf ekleyin (profesyonel)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Doğum tarihi ve yer ekleyin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Chronolojik sıralama (en yeni başta)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>2 sayfayı geçmeyin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Almanca yazın (İngilizce işler için İngilizce)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Motivasyon Mektubu (Anschreiben)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Şirket ve pozisyonu araştırın</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Neden bu şirket olduğunu belirtin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>Yeteneklerinizi örneklerle anlatın</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>1 sayfa, maksimum 400 kelime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>İmzalayın (dijital veya el yazısı)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Aile Hayatı
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Almanya'da aile kurmak, çocuk sahibi olmak ve aile haklarınız hakkında bilgi edinin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/aile-rehberi">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Aile Rehberi
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
