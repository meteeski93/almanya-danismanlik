import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Briefcase, 
  Euro, 
  Clock, 
  CheckCircle, 
  HeartPulse,
  Cpu,
  HardHat,
  Bus,
  BookOpen,
  Wrench,
  Building2,
  Utensils,
  Users,
  Star,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { professions, professionCategories } from '@/data/professions';

const categoryIcons: Record<string, React.ElementType> = {
  "Sağlık": HeartPulse,
  "IT": Cpu,
  "Mühendislik": Building2,
  "Üretim": HardHat,
  "Eğitim": BookOpen,
  "Teknik": Wrench,
  "Lojistik": Bus,
  "Turizm": Users,
  "Gastronomi": Utensils,
  "İnşaat": Building2,
};

export function MeslegeGore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProfessions = professions.filter(prof => {
    const matchesSearch = prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.titleDE.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'turizm' ? (prof.category === 'Turizm' || prof.category === 'Gastronomi') : prof.category.toLowerCase() === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">Meslek Rehberi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mesleğe Göre Almanya
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Mesleğinize özel göç rehberi. İş bulma, vize, maaş ve denklik bilgileri.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/is-ilanlari">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                  💼 İş İlanlarına Git
                </Button>
              </Link>
              <Link to="/vize-bulucu">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  🔍 Vize Bulucu
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
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <p className="text-3xl font-bold text-orange-600">{professions.length}+</p>
              <p className="text-sm text-gray-600">Meslek</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-3xl font-bold text-emerald-600">10</p>
              <p className="text-sm text-gray-600">Sektör</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl font-bold text-blue-600">2-6</p>
              <p className="text-sm text-gray-600">Ay Süreç</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-3xl font-bold text-purple-600">2.500€+</p>
              <p className="text-sm text-gray-600">Başlangıç Maaş</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Meslek ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {professionCategories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="whitespace-nowrap"
                >
                  {cat.name}
                  <Badge variant="secondary" className="ml-2">{cat.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredProfessions.length} Meslek Bulundu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessions.map(prof => {
              const Icon = categoryIcons[prof.category] || Briefcase;
              return (
                <Link key={prof.id} to={`/meslek/${prof.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <Badge className={
                          prof.demand === "Çok Yüksek" ? "bg-red-500" :
                          prof.demand === "Yüksek" ? "bg-orange-500" :
                          prof.demand === "Orta" ? "bg-blue-500" : "bg-gray-500"
                        }>
                          {prof.demand} Talep
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-1">{prof.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{prof.titleDE}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-1">
                            <Euro className="h-4 w-4" /> Maaş:
                          </span>
                          <span className="font-medium">{prof.avgSalary}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-1">
                            <Clock className="h-4 w-4" /> Süreç:
                          </span>
                          <span className="font-medium">{prof.processDuration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 flex items-center gap-1">
                            <Briefcase className="h-4 w-4" /> Vize:
                          </span>
                          <span className="font-medium">{prof.visaType.split(' ')[0]}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {prof.recognitionRequired ? "Denklik gerekli" : "Denklik gerekmez"}
                          </span>
                          <ArrowRight className="h-5 w-5 text-orange-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {filteredProfessions.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">Meslek Bulunamadı</h3>
              <p className="text-gray-500">Arama kriterlerinize uygun meslek bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Mesleki Denklik</h3>
                <p className="text-gray-600 text-sm">
                  Bazı meslekler için Almanya'da denklik (Anerkennung) almanız gerekir. 
                  Bu süreç 2-6 ay sürebilir.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Maaş Artışı</h3>
                <p className="text-gray-600 text-sm">
                  Almanya'da maaşlar deneyim ve uzmanlığa göre artar. 
                  Tarifvertrag (toplu sözleşme) maaşları garanti altına alır.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <Star className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">İş Güvencesi</h3>
                <p className="text-gray-600 text-sm">
                  Almanya'da işten çıkarılma koruması güçlüdür. 
                  Kıdem tazminatı ve işsizlik parası hakkınız var.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mesleğinizi Bulamadınız mı?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Listede olmayan meslekler için de danışmanlık veriyoruz. 
            Bize ulaşın, size özel rehberlik sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:meteeski93@gmail.com?subject=Meslek%20Danismanlik">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100">
                Bize Ulaşın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/is-ilanlari">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                İş İlanlarına Git
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
