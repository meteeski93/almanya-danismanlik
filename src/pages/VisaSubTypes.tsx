import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Users,
  Building,
  Code,
  Heart,
  CheckCircle,
  Clock,
  Euro,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { visaSubTypes } from '@/data/extendedVisaTypes';

const codeIcons: Record<string, React.ElementType> = {
  "§18a": Briefcase,
  "§18b": GraduationCap,
  "§18g": Code,
  "§18d": BookOpen,
  "§19c": Building,
  "§20": Search,
  "§21": Building,
  "§28": Heart,
  "§81a": CheckCircle,
  "§16d": GraduationCap,
  "§16f": Users
};

const codeColors: Record<string, string> = {
  "§18a": "bg-blue-600",
  "§18b": "bg-indigo-600",
  "§18g": "bg-emerald-600",
  "§18d": "bg-purple-600",
  "§19c": "bg-amber-600",
  "§20": "bg-cyan-600",
  "§21": "bg-rose-600",
  "§28": "bg-pink-600",
  "§81a": "bg-teal-600",
  "§16d": "bg-violet-600",
  "§16f": "bg-orange-600"
};

export function VisaSubTypes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'work', label: 'Çalışma' },
    { id: 'study', label: 'Eğitim' },
    { id: 'family', label: 'Aile' },
    { id: 'business', label: 'İş Kurma' },
    { id: 'other', label: 'Diğer' }
  ];

  const getCategory = (code: string) => {
    if (['§18a', '§18b', '§18g', '§18d', '§19c'].includes(code)) return 'work';
    if (['§16d', '§16f'].includes(code)) return 'study';
    if (code === '§28') return 'family';
    if (code === '§21') return 'business';
    return 'other';
  };

  const filteredTypes = visaSubTypes.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || getCategory(v.code) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              AufenthG Maddeleri
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vize Alt Türleri
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Almanya Göç Yasası (AufenthG) kapsamındaki tüm vize alt türleri. 
              §18a, §18b, §18g (Blue Card), §20, §21, §28 ve daha fazlası.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">11+</span>
                <span className="text-sm ml-2 text-slate-300">Vize Alt Türü</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">AufenthG</span>
                <span className="text-sm ml-2 text-slate-300">Yasası</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Vize kodu veya adı ara... (örn: 18a, Blue Card)"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="whitespace-nowrap"
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTypes.map((visa, idx) => {
              const Icon = codeIcons[visa.code] || Briefcase;
              const colorClass = codeColors[visa.code] || "bg-gray-600";
              
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-300">
                  <CardHeader className={`${colorClass} text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{visa.code}</div>
                          <CardTitle className="text-lg font-medium text-white/90">{visa.name}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{visa.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Clock className="h-4 w-4" />
                          İşlem Süresi
                        </div>
                        <p className="font-semibold">{visa.processingTime}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Euro className="h-4 w-4" />
                          Maliyet
                        </div>
                        <p className="font-semibold">{visa.cost}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Şartlar:</p>
                      <ul className="space-y-1">
                        {visa.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {visa.requirements.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{visa.requirements.length - 3} daha...
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Avantajlar:</p>
                      <div className="flex flex-wrap gap-2">
                        {visa.advantages.slice(0, 2).map((adv, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-emerald-50 text-emerald-700">
                            {adv}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Kimler İçin:</p>
                      <p className="text-sm text-blue-700">
                        {visa.whoIsItFor.slice(0, 2).join(', ')}
                        {visa.whoIsItFor.length > 2 && '...'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 81a Special Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <Badge className="mb-4 bg-amber-600 text-white">Önemli!</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                §81a Ön Onay (Vorabzustimmung) Nedir?
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>81a bağımsız bir vize değildir!</strong> İşverenin Federal İş Ajansı'ndan 
                aldığı ön onaydır. Bu onay ile vize süreci hızlanır ve ret riski azalır.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>İşveren başvurur, siz değil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>2-4 haftada sonuçlanır</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Vize başvurunuz hızlanır</span>
                </li>
              </ul>
              <Link to="/sss">
                <Button variant="outline">
                  Daha Fazla Bilgi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Card>
                <CardHeader className="bg-amber-600 text-white">
                  <CardTitle>81a Süreci Nasıl İşler?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-amber-700 flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold">İşveren Başvurusu</p>
                        <p className="text-sm text-gray-600">İşveren Federal İş Ajansı'na (Bundesagentur für Arbeit) başvurur</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-amber-700 flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold">İş İlanı Kontrolü</p>
                        <p className="text-sm text-gray-600">Öncelikli işveren kontrolü (Vorrangprüfung) yapılır</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-amber-700 flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold">Ön Onay</p>
                        <p className="text-sm text-gray-600">Olumlu sonuçta ön onay belgesi verilir</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-amber-700 flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold">Vize Başvurusu</p>
                        <p className="text-sm text-gray-600">Siz konsolosluğa 81a belgesi ile başvurursunuz</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hızlı Karşılaştırma
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-4 text-left">Özellik</th>
                  <th className="border p-4 text-center">§18a (Mesleki)</th>
                  <th className="border p-4 text-center">§18b (Akademik)</th>
                  <th className="border p-4 text-center">§18g (Blue Card)</th>
                  <th className="border p-4 text-center">§20 (İş Arama)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4 font-medium">Eğitim</td>
                  <td className="border p-4 text-center">Mesleki</td>
                  <td className="border p-4 text-center">Üniversite</td>
                  <td className="border p-4 text-center">Üniversite</td>
                  <td className="border p-4 text-center">Her ikisi</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-4 font-medium">İş Teklifi</td>
                  <td className="border p-4 text-center text-emerald-600">✓ Gerekli</td>
                  <td className="border p-4 text-center text-emerald-600">✓ Gerekli</td>
                  <td className="border p-4 text-center text-emerald-600">✓ Gerekli</td>
                  <td className="border p-4 text-center text-red-600">✗ Gerekmez</td>
                </tr>
                <tr>
                  <td className="border p-4 font-medium">Maaş Şartı</td>
                  <td className="border p-4 text-center">Asgari ücret</td>
                  <td className="border p-4 text-center">Pozisyona göre</td>
                  <td className="border p-4 text-center">45.934€+</td>
                  <td className="border p-4 text-center">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-4 font-medium">Kalıcı Oturum</td>
                  <td className="border p-4 text-center">5 yıl</td>
                  <td className="border p-4 text-center">5 yıl</td>
                  <td className="border p-4 text-center text-emerald-600">21-33 ay</td>
                  <td className="border p-4 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Size Uygun Vize Türünü Bulun
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Mesleğinize ve durumunuza göre en uygun vize alt türünü seçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/meslek-bazli-goc">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Meslek Bazlı Rehber
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/online-basvuru">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Online Başvuru
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
