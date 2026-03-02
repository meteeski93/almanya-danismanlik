import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Ticket,
  CreditCard,
  Briefcase,
  GraduationCap,
  Search,
  Plane,
  CheckCircle,
  XCircle,
  Users,
  ClipboardList,
  Building2,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { visaTypes } from '@/data/visaTypes';

const iconMap: Record<string, React.ElementType> = {
  Ticket,
  CreditCard,
  Briefcase,
  GraduationCap,
  Search,
  Baby: Briefcase,
  HeartHandshake: Briefcase,
  Plane,
  Users,
  ClipboardList,
  Building2,
  Palette
};

export function VisaTypes() {
  const [filter, setFilter] = useState<'all' | 'work' | 'study' | 'other'>('all');

  const filteredVisas = visaTypes.filter((visa) => {
    if (filter === 'all') return true;
    if (filter === 'work') return ['chancenkarte', 'bluecard', 'workvisa', 'jobseekervisa'].includes(visa.id);
    if (filter === 'study') return ['studentvisa'].includes(visa.id);
    return ['au pair', 'fsj', 'tourist'].includes(visa.id);
  });

  const workVisas = visaTypes.filter(v => ['chancenkarte', 'bluecard', 'workvisa', 'jobseekervisa'].includes(v.id));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vize Türleri
            </h1>
            <p className="text-xl text-blue-100">
              Türkiye'den Almanya'ya gitmek için tüm vize seçenekleri. 
              Amaçlarınıza en uygun vize türünü keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Tümü
            </Button>
            <Button
              variant={filter === 'work' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('work')}
            >
              <Briefcase className="h-4 w-4 mr-1" />
              Çalışma
            </Button>
            <Button
              variant={filter === 'study' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('study')}
            >
              <GraduationCap className="h-4 w-4 mr-1" />
              Eğitim
            </Button>
            <Button
              variant={filter === 'other' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('other')}
            >
              <Plane className="h-4 w-4 mr-1" />
              Diğer
            </Button>
          </div>
        </div>
      </section>

      {/* Visa Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVisas.map((visa) => {
              const Icon = iconMap[visa.icon] || Briefcase;
              return (
                <Card key={visa.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`${visa.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      {visa.id === 'chancenkarte' && (
                        <Badge className="bg-emerald-500">En Popüler</Badge>
                      )}
                      {visa.id === 'bluecard' && (
                        <Badge className="bg-blue-600">En Hızlı</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mt-4">{visa.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {visa.description}
                    </p>
                    
                    <div className="space-y-2 text-sm mb-4 bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Süre:</span>
                        <span className="font-medium">{visa.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">İşlem Süresi:</span>
                        <span className="font-medium">{visa.processingTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Maliyet:</span>
                        <span className="font-medium">{visa.cost}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">KİMLER İÇİN:</p>
                      <div className="flex flex-wrap gap-1">
                        {visa.whoIsItFor.slice(0, 2).map((who, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {who}
                          </Badge>
                        ))}
                        {visa.whoIsItFor.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{visa.whoIsItFor.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Link to={`/vize/${visa.id}`} className="mt-auto">
                      <Button className="w-full" variant="outline">
                        Detayları Gör
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hızlı Karşılaştırma
            </h2>
            <p className="text-lg text-gray-600">
              Hangi vize size uygun? 3 soruda öğrenin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Question 1: Job Offer */}
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg text-blue-900">1. İş Teklifiniz Var mı?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Evet, iş teklifim var</p>
                      <p className="text-sm text-gray-600">→ Mavi Kart veya Çalışma Vizesi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <XCircle className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Hayır, iş arıyorum</p>
                      <p className="text-sm text-gray-600">→ Şans Kartı veya İş Arama Vizesi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Question 2: Education */}
            <Card className="border-2 border-purple-100">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-lg text-purple-900">2. Eğitim Durumunuz?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Üniversite mezunuyum</p>
                      <p className="text-sm text-gray-600">→ Mavi Kart, Şans Kartı</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Meslek lisesi/deneyim</p>
                      <p className="text-sm text-gray-600">→ Şans Kartı, Çalışma Vizesi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <Plane className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Öğrenci/Genç</p>
                      <p className="text-sm text-gray-600">→ Öğrenci, Au Pair, FSJ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Question 3: Language */}
            <Card className="border-2 border-emerald-100">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-lg text-emerald-900">3. Almanca Seviyeniz?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">B1 ve üzeri</p>
                      <p className="text-sm text-gray-600">→ Tüm vize türleri açık</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">A1 - A2</p>
                      <p className="text-sm text-gray-600">→ Şans Kartı, Aile Birleşimi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <XCircle className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Bilmiyorum</p>
                      <p className="text-sm text-gray-600">→ IT (İngilizce), Öğrenci</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Result Cards */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">En Popüler Seçenekler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {workVisas.slice(0, 4).map((visa) => (
                <Card key={visa.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="font-semibold text-gray-900">{visa.shortTitle}</p>
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm">
                      {visa.id === 'chancenkarte' ? (
                        <><XCircle className="h-4 w-4 text-emerald-500" /><span>İş teklifi yok</span></>
                      ) : visa.id === 'bluecard' ? (
                        <><CheckCircle className="h-4 w-4 text-blue-500" /><span>İş teklifi var</span></>
                      ) : (
                        <><CheckCircle className="h-4 w-4 text-emerald-500" /><span>Deneyim gerekli</span></>
                      )}
                    </div>
                    <Link to={`/vize/${visa.id}`}>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        İncele
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link to="/vize-bulucu">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Detaylı Vize Bulucu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Kararınızı Verdiniz mi?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Seçtiğiniz vize türü için detaylı başvuru sürecini öğrenin 
            ve hazırlıklara başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/basvuru-sureci">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Başvuru Sürecini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gerekli-evraklar">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
                Evrak Listesi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
