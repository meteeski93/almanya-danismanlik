import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Euro, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Users,
  FileText,
  AlertCircle,
  ArrowRight,
  List,
  CheckSquare,
  ClipboardList,
  Building2,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { visaTypes } from '@/data/visaTypes';

const iconMap: Record<string, React.ElementType> = {
  Ticket: Calendar,
  CreditCard: Euro,
  Briefcase: CheckCircle,
  GraduationCap: Users,
  Search: List,
  Baby: Users,
  HeartHandshake: Users,
  Plane: ArrowRight,
  Users: Users,
  ClipboardList: ClipboardList,
  Building2: Building2,
  Palette: Palette
};

export function VisaDetail() {
  const { id } = useParams<{ id: string }>();
  const visa = visaTypes.find(v => v.id === id);

  if (!visa) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vize Türü Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız vize türü mevcut değil.</p>
          <Link to="/vize-turleri">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Vize Türlerine Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[visa.icon] || CheckCircle;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className={`${visa.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/vize-turleri" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tüm Vize Türleri
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Icon className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{visa.title}</h1>
              <p className="text-lg text-white/90 max-w-2xl">{visa.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Vize Süresi</p>
                    <p className="text-lg font-semibold">{visa.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">İşlem Süresi</p>
                    <p className="text-lg font-semibold">{visa.processingTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Euro className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Maliyet</p>
                    <p className="text-lg font-semibold">{visa.cost}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="requirements">Şartlar</TabsTrigger>
              <TabsTrigger value="advantages">Avantajlar</TabsTrigger>
              <TabsTrigger value="steps">Adımlar</TabsTrigger>
              <TabsTrigger value="who">Kimler İçin</TabsTrigger>
              <TabsTrigger value="faq">SSS</TabsTrigger>
            </TabsList>

            <TabsContent value="requirements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-blue-600" />
                    Başvuru Şartları
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {visa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-blue-100 p-1 rounded mt-0.5">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-800">Önemli Not</p>
                        <p className="text-sm text-amber-700 mt-1">
                          Tüm belgelerin güncel ve eksiksiz olması başvurunuzun 
                          hızlı işlemesi için kritik öneme sahiptir. Eksik evrak 
                          durumunda başvurunuz reddedilebilir.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advantages" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle className="h-5 w-5" />
                      Avantajlar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {visa.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-emerald-100 p-1 rounded mt-0.5">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <XCircle className="h-5 w-5" />
                      Dezavantajlar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {visa.disadvantages.map((dis, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-red-100 p-1 rounded mt-0.5">
                            <XCircle className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="text-gray-700">{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="steps" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <List className="h-5 w-5 text-blue-600" />
                    Başvuru Adımları
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="space-y-6">
                      {visa.steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-6">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                            {idx + 1}
                          </div>
                          <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="who" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Bu Vize Kimler İçin Uygun?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visa.whoIsItFor.map((who, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{who}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sık Sorulan Sorular</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Bu vize ile Almanya'da ne kadar kalabilirim?
                      </h4>
                      <p className="text-gray-600">
                        {visa.duration} süreyle kalabilirsiniz. Süre sonunda 
                        uzatma veya farklı bir vize türüne geçiş yapabilirsiniz.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Başvuru reddedilirse ne olur?
                      </h4>
                      <p className="text-gray-600">
                        Ret gerekçesi yazılı olarak bildirilir. Eksik evrak 
                        nedeniyle reddedildiyse tamamlayıp tekrar başvurabilirsiniz. 
                        Haksız ret durumunda itiraz hakkınız vardır.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Almanya'ya gittikten sonra vize türümü değiştirebilir miyim?
                      </h4>
                      <p className="text-gray-600">
                        Genellikle evet, Almanya'dayken yabancılar dairesine 
                        başvurarak vize türünüzü değiştirebilirsiniz. Ancak 
                        şartları karşılamanız gerekir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Sayfalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/gerekli-evraklar">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Gerekli Evraklar</h3>
                      <p className="text-sm text-gray-500">Tüm belgelerin listesi</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/basvuru-sureci">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <List className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Başvuru Süreci</h3>
                      <p className="text-sm text-gray-500">Adım adım rehber</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/sss">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <AlertCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">SSS</h3>
                      <p className="text-sm text-gray-500">Sık sorulan sorular</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Başvuruya Hazır mısınız?
          </h2>
          <p className="text-gray-400 mb-6">
            Tüm bilgileri edindiniz, şimdi başvuru sürecine başlayabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/basvuru-sureci">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Başvuru Sürecini Başlat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a 
              href="https://idata.com.tr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                iDATA'dan Randevu Al
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
