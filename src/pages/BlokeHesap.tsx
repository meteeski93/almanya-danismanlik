import { 
  CheckCircle, 
  AlertCircle,
  Clock,
  Info,
  ExternalLink,
  Lock,
  Unlock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const blockedAccountProviders = [
  {
    name: "Expatrio",
    type: "Online",
    setupFee: "49€",
    monthlyFee: "5€",
    features: ["Tamamen online", "Hızlı onay (24-48 saat)", "Vize reddi garantisi", "Türkçe destek"],
    website: "expatrio.com",
    recommended: true
  },
  {
    name: "Fintiba",
    type: "Online",
    setupFee: "89€",
    monthlyFee: "4.90€",
    features: ["Alman bankası", "Mobil uygulama", "Vize reddi garantisi", "Sağlık sigortası paketi"],
    website: "fintiba.com",
    recommended: true
  },
  {
    name: "Deutsche Bank",
    type: "Geleneksel Banka",
    setupFee: "150€",
    monthlyFee: "5.90€",
    features: ["Fiziksel şube", "Güvenilir", "Vize reddi garantisi", "Tüm bankacılık hizmetleri"],
    website: "deutsche-bank.de",
    recommended: false
  },
  {
    name: "Coracle",
    type: "Online",
    setupFee: "0€",
    monthlyFee: "5€",
    features: ["Ücretsiz açılış", "Hızlı onay", "Vize reddi garantisi", "Basit arayüz"],
    website: "coracle.de",
    recommended: false
  }
];

const requiredDocuments = [
  "Pasaport (geçerli)",
  "Üniversite kabul mektubu (Zulassung)",
  "Adres bilgileri (Türkiye ve Almanya)",
  "E-posta adresi",
  "Telefon numarası"
];

const faqItems = [
  {
    question: "Bloke hesap nedir?",
    answer: "Bloke hesap (Sperrkonto), Almanya'da yaşam masraflarınızı karşılayabileceğinizi kanıtlamak için açtığınız özel bir banka hesabıdır. Her ay sadece belirli bir miktar (992€) çekebilirsiniz."
  },
  {
    question: "11.904€ nereden geliyor?",
    answer: "Alman hükümeti, öğrencilerin aylık minimum 992€ yaşam masrafına ihtiyaç duyduğunu hesaplamıştır. 12 ay x 992€ = 11.904€."
  },
  {
    question: "Parayı geri alabilir miyim?",
    answer: "Evet! Vize reddi durumunda tüm paranızı (kesintiler hariç) geri alabilirsiniz. Almanya'ya gittiğinizde de kalan parayı çekebilirsiniz."
  },
  {
    question: "Hangi bankayı seçmeliyim?",
    answer: "Expatrio ve Fintiba en popüler seçenekler. Online, hızlı ve Türkçe destekleri var. Geleneksel banka istiyorsanız Deutsche Bank."
  },
  {
    question: "Bloke hesap ne zaman açılmalı?",
    answer: "Kabul mektubunuzu aldıktan sonra hemen açın. Vize başvurusundan önce bloke hesap onay belgesi (06 Form) gereklidir."
  },
  {
    question: "Ailem de bloke hesap açmalı mı?",
    answer: "Hayır, sadece öğrenci (ana başvuru sahibi) bloke hesap açar. Aile birleşiminde sponsorun geliri yeterlidir."
  }
];

export function BlokeHesap() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">Finans</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bloke Hesap (Sperrkonto)
            </h1>
            <p className="text-xl text-emerald-100 mb-6">
              Almanya öğrenci vizesi için zorunlu bloke hesap. 
              11.904€ nasıl yatırılır, hangi banka seçilmeli?
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-5xl font-bold">11.904€</p>
              <p className="text-emerald-100">Yıllık Gereken Miktar (2026)</p>
              <p className="text-sm text-emerald-200 mt-2">= 992€ x 12 ay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-2xl font-bold text-emerald-700">992€</p>
              <p className="text-sm text-gray-600">Aylık Limit</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-2xl font-bold text-blue-700">24-48s</p>
              <p className="text-sm text-gray-600">Online Onay</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <p className="text-2xl font-bold text-amber-700">49-150€</p>
              <p className="text-sm text-gray-600">Açılış Ücreti</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-2xl font-bold text-purple-700">%100</p>
              <p className="text-sm text-gray-600">Vize Reddi Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="providers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="providers">Bankalar</TabsTrigger>
              <TabsTrigger value="process">Süreç</TabsTrigger>
              <TabsTrigger value="withdrawal">Para Çekme</TabsTrigger>
              <TabsTrigger value="faq">SSS</TabsTrigger>
            </TabsList>

            {/* Providers */}
            <TabsContent value="providers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blockedAccountProviders.map((provider, idx) => (
                  <Card key={idx} className={`hover:shadow-lg transition-shadow ${provider.recommended ? 'border-2 border-emerald-400' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <p className="text-sm text-gray-500">{provider.type}</p>
                        </div>
                        {provider.recommended && (
                          <Badge className="bg-emerald-500">Önerilen</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-emerald-700">{provider.setupFee}</p>
                          <p className="text-xs text-gray-500">Açılış</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-700">{provider.monthlyFee}</p>
                          <p className="text-xs text-gray-500">Aylık</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {provider.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href={`https://${provider.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline text-sm flex items-center gap-1"
                      >
                        {provider.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert className="mt-6 border-emerald-200 bg-emerald-50">
                <Info className="h-5 w-5 text-emerald-600" />
                <AlertTitle className="text-emerald-800">Tavsiyemiz</AlertTitle>
                <AlertDescription className="text-emerald-700">
                  <strong>Expatrio</strong> veya <strong>Fintiba</strong> tavsiye ederiz. 
                  Online, hızlı ve Türkçe destekleri var. Vize reddi durumunda paranızı geri alabilirsiniz.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Process */}
            <TabsContent value="process">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-900">Bloke Hesap Açma Adımları</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        { step: 1, title: "Sağlayıcı Seçin", desc: "Expatrio, Fintiba veya Deutsche Bank", duration: "-" },
                        { step: 2, title: "Online Başvuru", desc: "Web sitesinden başvuru formunu doldurun", duration: "15 dk" },
                        { step: 3, title: "Evrak Yükleme", desc: "Pasaport ve kabul mektubunu yükleyin", duration: "10 dk" },
                        { step: 4, title: "Ödeme Yapın", desc: "11.904€ + ücretleri ödeyin", duration: "1-3 gün" },
                        { step: 5, title: "Onay Belgesi", desc: "06 Form (Bloke hesap onay belgesi) alın", duration: "24-48s" },
                        { step: 6, title: "Vize Başvurusu", desc: "06 Form ile vize başvurusu yapın", duration: "-" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-emerald-700">{item.step}</span>
                          </div>
                          <div className="flex-1 pb-4 border-b last:border-0">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                            {item.duration !== "-" && (
                              <Badge variant="outline" className="mt-2">
                                <Clock className="h-3 w-3 mr-1" />
                                {item.duration}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-900">Gerekli Evraklar</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {requiredDocuments.map((doc, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-amber-200">
                    <CardHeader className="bg-amber-50">
                      <CardTitle className="text-amber-900">Önemli Notlar</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <span>Bloke hesap <strong>Almanya'da açılır</strong>, Türkiye'den para transferi yapılır.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <span>Vize reddi durumunda <strong>paranızı geri alabilirsiniz</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <span>Almanya'ya gittiğinizde <strong>banka kartı</strong> alırsınız.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Withdrawal */}
            <TabsContent value="withdrawal">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-900">Aylık Para Çekme Limiti</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center p-6 bg-emerald-50 rounded-xl mb-6">
                      <p className="text-5xl font-bold text-emerald-700">992€</p>
                      <p className="text-gray-600 mt-2">Aylık Çekilebilir Miktar</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span>ATM'den çekim</span>
                        <Badge>Ücretsiz</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span>POS/Online ödeme</span>
                        <Badge>Ücretsiz</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span>IBAN transferi</span>
                        <Badge variant="outline">Ücretli</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-purple-900">Bloke Hesap Çeşitleri</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-emerald-400 rounded-lg bg-emerald-50">
                        <h4 className="font-semibold text-emerald-900 flex items-center gap-2">
                          <Lock className="h-5 w-5" />
                          Sperrkonto (Bloke)
                        </h4>
                        <p className="text-sm text-gray-600 mt-2">
                          Standart bloke hesap. Her ay sadece 992€ çekebilirsiniz. 
                          En yaygın tür.
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Unlock className="h-5 w-5" />
                          Kontokorrent (Vadesiz)
                        </h4>
                        <p className="text-sm text-gray-600 mt-2">
                          Bloke olmayan normal hesap. Almanya'ya gittikten sonra 
                          bloke hesabınızı vadesiz hesaba çevirebilirsiniz.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq">
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bloke Hesabınızı Hemen Açın
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Expatrio veya Fintiba ile 24-48 saat içinde bloke hesabınızı açın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://expatrio.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Expatrio'ya Git
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://fintiba.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Fintiba'ya Git
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
