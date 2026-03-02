import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Briefcase, 
  Euro, 
  Clock, 
  CheckCircle, 
  GraduationCap,
  Globe,
  FileText,
  AlertCircle,
  ExternalLink,
  User,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { professions } from '@/data/professions';

export function MeslekDetay() {
  const { id } = useParams<{ id: string }>();
  const profession = professions.find(p => p.id === id);

  if (!profession) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600">Meslek Bulunamadı</h2>
          <p className="text-gray-500 mb-4">Aradığınız meslek bulunamadı.</p>
          <Link to="/meslege-gore">
            <Button>Tüm Mesleklere Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/meslege-gore" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tüm Mesleklere Dön
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <Badge className="bg-white/20 text-white mb-2">{profession.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{profession.title}</h1>
              <p className="text-xl text-white/80">{profession.titleDE}</p>
            </div>
            <div className="flex gap-2">
              <Badge className={
                profession.demand === "Çok Yüksek" ? "bg-red-500 text-white" :
                profession.demand === "Yüksek" ? "bg-orange-500 text-white" :
                profession.demand === "Orta" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
              }>
                {profession.demand} Talep
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-2xl font-bold text-emerald-700">{profession.avgSalary}</p>
              <p className="text-sm text-gray-600">Maaş</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-2xl font-bold text-blue-700">{profession.processDuration}</p>
              <p className="text-sm text-gray-600">Süreç</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-2xl font-bold text-purple-700">{profession.languageRequirement}</p>
              <p className="text-sm text-gray-600">Dil</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <p className="text-2xl font-bold text-amber-700">{profession.visaType.split(' ')[0]}</p>
              <p className="text-sm text-gray-600">Vize</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                  <TabsTrigger value="overview">Genel</TabsTrigger>
                  <TabsTrigger value="process">Süreç</TabsTrigger>
                  <TabsTrigger value="tips">İpuçları</TabsTrigger>
                  <TabsTrigger value="jobs">İş Siteleri</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meslek Hakkında</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Euro className="h-5 w-5 text-emerald-600" />
                          Maaş Bilgisi
                        </h4>
                        <p className="text-gray-600">{profession.salaryRange}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                          Deneyim Gereksinimi
                        </h4>
                        <p className="text-gray-600">{profession.experienceRequired}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Globe className="h-5 w-5 text-purple-600" />
                          Dil Gereksinimi
                        </h4>
                        <p className="text-gray-600">{profession.languageRequirement}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-amber-600" />
                          Vize Türü
                        </h4>
                        <p className="text-gray-600">{profession.visaType}</p>
                      </div>

                      {profession.recognitionRequired && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-red-600" />
                            Mesleki Denklik
                          </h4>
                          <p className="text-gray-600">
                            <strong>Kurum:</strong> {profession.recognitionBody}<br />
                            <strong>Süre:</strong> {profession.recognitionDuration}
                          </p>
                          <Alert className="mt-3 border-amber-200 bg-amber-50">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                            <AlertDescription className="text-amber-700 text-sm">
                              Bu meslek için Almanya'da denklik almanız gerekiyor.
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Process Tab */}
                <TabsContent value="process">
                  <Card>
                    <CardHeader>
                      <CardTitle>Başvuru Süreci</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Dil Hazırlığı", desc: profession.languageRequirement + " seviyesine ulaşın", duration: "3-6 ay" },
                          { step: 2, title: "Denklik Başvurusu (varsa)", desc: profession.recognitionRequired ? profession.recognitionBody + "'na başvurun" : "Gerekmez", duration: profession.recognitionDuration || "-" },
                          { step: 3, title: "CV ve Motivasyon Mektubu", desc: "Almanca/İngilizce CV hazırlayın", duration: "1-2 hafta" },
                          { step: 4, title: "İş Arama", desc: "İş ilanlarına başvurun", duration: "1-3 ay" },
                          { step: 5, title: "İş Teklifi", desc: "İş teklifi alın", duration: "-" },
                          { step: 6, title: "Vize Başvurusu", desc: "Konsolosluğa başvurun", duration: "2-4 ay" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="font-bold text-orange-700">{item.step}</span>
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
                </TabsContent>

                {/* Tips Tab */}
                <TabsContent value="tips">
                  <Card>
                    <CardHeader>
                      <CardTitle>İpuçları ve Tavsiyeler</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {profession.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Jobs Tab */}
                <TabsContent value="jobs">
                  <Card>
                    <CardHeader>
                      <CardTitle>İş Arama Siteleri</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {profession.jobSites.map((site, idx) => (
                          <a 
                            key={idx}
                            href={`https://${site}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <span className="font-medium">{site}</span>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Success Story */}
              {profession.story && (
                <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                    <p className="text-gray-700 italic mb-4">"{profession.story.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold">{profession.story.name}</p>
                        <p className="text-sm text-gray-600">{profession.story.experience}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hızlı Bağlantılar</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <Link to="/is-ilanlari">
                    <Button variant="outline" className="w-full justify-between">
                      İş İlanları
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/vize-bulucu">
                    <Button variant="outline" className="w-full justify-between">
                      Vize Bulucu
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/gerekli-evraklar">
                    <Button variant="outline" className="w-full justify-between">
                      Evrak Listesi
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/basvuru-sureci">
                    <Button variant="outline" className="w-full justify-between">
                      Başvuru Süreci
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Yardım mı ihtiyacınız var?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Bu meslek için profesyonel danışmanlık alabilirsiniz.
                  </p>
                  <a href={`mailto:meteeski93@gmail.com?subject=${encodeURIComponent(profession.title + ' Danışmanlık')}`}>
                    <Button className="w-full">
                      Bize Ulaşın
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
