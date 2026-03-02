import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  BookOpen,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const topUniversities = [
  {
    name: "Technische Universität München (TUM)",
    city: "Münih",
    ranking: 1,
    type: "Teknik",
    students: "47.000+",
    programs: 170,
    tuition: "Ücretsiz (dönemlik ücret: 150€)",
    features: ["Mühendislik lideri", "Silicon Valley bağlantıları", "Girişimcilik merkezi"],
    website: "tum.de"
  },
  {
    name: "Ludwig-Maximilians-Universität München (LMU)",
    city: "Münih",
    ranking: 2,
    type: "Kapsamlı",
    students: "51.000+",
    programs: 200,
    tuition: "Ücretsiz (dönemlik ücret: 150€)",
    features: ["550 yıllık tarih", "Nobel ödüllü mezunlar", "Tıp ve hukuk güçlü"],
    website: "lmu.de"
  },
  {
    name: "Ruprecht-Karls-Universität Heidelberg",
    city: "Heidelberg",
    ranking: 3,
    type: "Kapsamlı",
    students: "28.000+",
    programs: 180,
    tuition: "Ücretsiz (dönemlik ücret: 1.500€ - Eyalet farkı)",
    features: ["Almanya'nın en eski üniversitesi (1386)", "Araştırma odaklı", "Uluslararası öğrenci dostu"],
    website: "uni-heidelberg.de"
  },
  {
    name: "Humboldt-Universität zu Berlin",
    city: "Berlin",
    ranking: 4,
    type: "Kapsamlı",
    students: "36.000+",
    programs: 190,
    tuition: "Ücretsiz (dönemlik ücret: 315€)",
    features: ["Berlin'in en eski üniversitesi", "Sosyal bilimler güçlü", "Şehir merkezinde"],
    website: "hu-berlin.de"
  },
  {
    name: "Freie Universität Berlin",
    city: "Berlin",
    ranking: 5,
    type: "Kapsamlı",
    students: "38.000+",
    programs: 150,
    tuition: "Ücretsiz (dönemlik ücret: 315€)",
    features: ["Uluslararası odaklı", "Dahlem Araştırma Kampüsü", "Sosyal bilimler"],
    website: "fu-berlin.de"
  },
  {
    name: "Karlsruher Institut für Technologie (KIT)",
    city: "Karlsruhe",
    ranking: 6,
    type: "Teknik",
    students: "25.000+",
    programs: 100,
    tuition: "Ücretsiz (dönemlik ücret: 1.500€)",
    features: ["Helmholtz Birliği üyesi", "Mühendislik ve doğa bilimleri", "İnovasyon odaklı"],
    website: "kit.edu"
  },
  {
    name: "RWTH Aachen",
    city: "Aachen",
    ranking: 7,
    type: "Teknik",
    students: "47.000+",
    programs: 160,
    tuition: "Ücretsiz (dönemlik ücret: 315€)",
    features: ["Makine mühendisliği lideri", "Endüstri bağlantıları", "Europa's en büyük teknik üniversitesi"],
    website: "rwth-aachen.de"
  },
  {
    name: "Technische Universität Berlin (TUB)",
    city: "Berlin",
    ranking: 8,
    type: "Teknik",
    students: "35.000+",
    programs: 120,
    tuition: "Ücretsiz (dönemlik ücret: 315€)",
    features: ["Almanya'nın en büyük teknik üniversitesi", "Start-up ekosistemi", "Mühendislik ve mimarlık"],
    website: "tu-berlin.de"
  }
];

const popularPrograms = [
  { name: "Computer Science / Informatik", universities: "50+", demand: "Çok Yüksek", salary: "50.000€+" },
  { name: "Mechanical Engineering / Maschinenbau", universities: "40+", demand: "Yüksek", salary: "48.000€+" },
  { name: "Business Administration / BWL", universities: "60+", demand: "Yüksek", salary: "45.000€+" },
  { name: "Medicine / Medizin", universities: "35+", demand: "Çok Yüksek", salary: "55.000€+" },
  { name: "Electrical Engineering / Elektrotechnik", universities: "35+", demand: "Yüksek", salary: "48.000€+" },
  { name: "Psychology / Psychologie", universities: "45+", demand: "Orta", salary: "42.000€+" },
  { name: "Architecture / Architektur", universities: "25+", demand: "Orta", salary: "40.000€+" },
  { name: "Law / Jura", universities: "40+", demand: "Orta", salary: "50.000€+" },
];

const applicationSteps = [
  {
    step: 1,
    title: "Üniversite ve Program Araştırması",
    desc: "Uni-Assist veya doğrudan üniversite web sitelerinden bilgi alın.",
    duration: "1-2 ay"
  },
  {
    step: 2,
    title: "Dil Yeterliliği",
    desc: "TestDaF, DSH veya Goethe sertifikası alın.",
    duration: "3-6 ay"
  },
  {
    step: 3,
    title: "Evrak Hazırlığı",
    desc: "Transkript, diploma, motivasyon mektubu, CV hazırlayın.",
    duration: "1 ay"
  },
  {
    step: 4,
    title: "Başvuru",
    desc: "Uni-Assist üzerinden veya doğrudan üniversiteye başvurun.",
    duration: "-"
  },
  {
    step: 5,
    title: "Kabul Mektubu",
    desc: "Zulassungsbescheid bekleyin.",
    duration: "4-8 hafta"
  },
  {
    step: 6,
    title: "Bloke Hesap",
    desc: "11.904€ bloke hesap açın.",
    duration: "1-2 hafta"
  },
  {
    step: 7,
    title: "Vize Başvurusu",
    desc: "Öğrenci vizesi için başvurun.",
    duration: "6-12 hafta"
  }
];

export function Universiteler() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">Eğitim</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya Üniversiteleri
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Dünya sıralamasında üst sıralarda yer alan 400+ devlet üniversitesi. 
              Çoğu bölüm ücretsiz, kaliteli eğitim.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/bloke-hesap">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  🏦 Bloke Hesap
                </Button>
              </Link>
              <Link to="/ogrenci-rehberi">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  📚 Öğrenci Rehberi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-3xl font-bold text-purple-700">400+</p>
              <p className="text-sm text-gray-600">Devlet Üniversitesi</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-3xl font-bold text-emerald-700">Ücretsiz</p>
              <p className="text-sm text-gray-600">Eğitim (çoğu bölüm)</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl font-bold text-blue-700">20.000+</p>
              <p className="text-sm text-gray-600">Program</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <p className="text-3xl font-bold text-amber-700">400.000+</p>
              <p className="text-sm text-gray-600">Uluslararası Öğrenci</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="top" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="top">En İyiler</TabsTrigger>
              <TabsTrigger value="programs">Popüler Bölümler</TabsTrigger>
              <TabsTrigger value="application">Başvuru</TabsTrigger>
              <TabsTrigger value="costs">Maliyetler</TabsTrigger>
            </TabsList>

            {/* Top Universities */}
            <TabsContent value="top">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topUniversities.map((uni, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-purple-500">#{uni.ranking}</Badge>
                            <Badge variant="outline">{uni.type}</Badge>
                          </div>
                          <h3 className="text-lg font-semibold">{uni.name}</h3>
                          <p className="text-gray-500 flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {uni.city}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-bold text-purple-700">{uni.students}</p>
                          <p className="text-xs text-gray-500">Öğrenci</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-bold text-purple-700">{uni.programs}</p>
                          <p className="text-xs text-gray-500">Program</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-bold text-emerald-700">Ücretsiz</p>
                          <p className="text-xs text-gray-500">Eğitim</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Özellikler:</strong>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {uni.features.map((feat, fidx) => (
                            <span key={fidx} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={`https://${uni.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline text-sm flex items-center gap-1"
                      >
                        {uni.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Popular Programs */}
            <TabsContent value="programs">
              <Card>
                <CardHeader>
                  <CardTitle>En Popüler Bölümler</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Bölüm</th>
                          <th className="p-3 text-center">Üniversite</th>
                          <th className="p-3 text-center">Talep</th>
                          <th className="p-3 text-center">Başlangıç Maaşı</th>
                        </tr>
                      </thead>
                      <tbody>
                        {popularPrograms.map((prog, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="p-3 font-medium">{prog.name}</td>
                            <td className="p-3 text-center">{prog.universities}</td>
                            <td className="p-3 text-center">
                              <Badge className={
                                prog.demand === "Çok Yüksek" ? "bg-red-500" :
                                prog.demand === "Yüksek" ? "bg-orange-500" : "bg-blue-500"
                              }>
                                {prog.demand}
                              </Badge>
                            </td>
                            <td className="p-3 text-center font-semibold text-emerald-700">{prog.salary}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Application */}
            <TabsContent value="application">
              <Card>
                <CardHeader>
                  <CardTitle>Başvuru Süreci</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {applicationSteps.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-purple-700">{item.step}</span>
                        </div>
                        <div className="flex-1 pb-6 border-b last:border-0">
                          <h4 className="font-semibold">{item.title}</h4>
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

              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <AlertTitle className="text-blue-800">Uni-Assist</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Çoğu üniversite başvuruları <strong>uni-assist.de</strong> üzerinden yapılır. 
                  Başvuru ücreti: 75€ (ilk üniversite), 30€ (ek üniversiteler)
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Costs */}
            <TabsContent value="costs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-900">Eğitim Ücretleri</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Devlet Üniversiteleri</span>
                        <Badge className="bg-emerald-500">Ücretsiz</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Özel Üniversiteler</span>
                        <Badge>5.000 - 20.000€/yıl</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Baden-Württemberg Eyaleti</span>
                        <Badge variant="outline">1.500€/dönem</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      * Dönemlik ücretler (Semesterbeitrag) hariç
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-amber-900">Yaşam Maliyetleri</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Bloke Hesap (yıllık)</span>
                        <Badge className="bg-amber-500">11.904€</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Kira (aylık)</span>
                        <Badge variant="outline">300 - 600€</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Sağlık Sigortası</span>
                        <Badge variant="outline">~120€/ay</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Yemek/Ulaşım</span>
                        <Badge variant="outline">~200€/ay</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Üniversiteye Başvurmaya Hazır mısınız?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Detaylı başvuru rehberi ve danışmanlık için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ogrenci-rehberi">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                Öğrenci Rehberi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:meteeski93@gmail.com?subject=Universite%20Danismanlik">
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
