import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Wrench, 
  Stethoscope, 
  Code, 
  Truck, 
  ChefHat, 
  HardHat,
  Users,
  ExternalLink,
  CheckCircle,
  Euro,
  GraduationCap,
  Search,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { professionPaths, jobSearchSites } from '@/data/extendedVisaTypes';

const categoryIcons: Record<string, React.ElementType> = {
  "Handwerk (Zanaat)": Wrench,
  "Sağlık": Stethoscope,
  "Bilişim": Code,
  "Mühendislik": HardHat,
  "Lojistik": Truck,
  "Turizm / Gastronomi": ChefHat,
  "İnşaat": HardHat,
  "Sağlık / Bakım": Users
};

export function ProfessionPaths() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(professionPaths.map(p => p.category))];

  const filteredProfessions = professionPaths.filter(p => {
    const matchesSearch = p.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Meslek Bazlı Rehber
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mesleğine Göre Almanya'ya Git
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Her mesleğin kendine özgü vize yolu, şartları ve stratejileri vardır. 
              Mesleğinize göre en uygun göç yolunu keşfedin.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">10+</span>
                <span className="text-sm ml-2 text-emerald-200">Meslek</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">Detaylı</span>
                <span className="text-sm ml-2 text-emerald-200">Stratejiler</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">2026</span>
                <span className="text-sm ml-2 text-emerald-200">Güncel</span>
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
                placeholder="Meslek ara... (örn: elektrikçi, yazılımcı)"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                Tümü
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className="whitespace-nowrap"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profession Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProfessions.map((profession, idx) => {
              const Icon = categoryIcons[profession.category] || Briefcase;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-emerald-600 p-3 rounded-xl">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{profession.profession}</CardTitle>
                          <p className="text-sm text-gray-500">{profession.category}</p>
                        </div>
                      </div>
                      <Badge variant={profession.denklikRequired ? 'default' : 'secondary'}>
                        {profession.denklikRequired ? 'Denklik Gerekli' : 'Denkliksiz'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Vize Türü</p>
                        <p className="font-semibold text-sm">{profession.visaCode}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Ort. Maaş</p>
                        <p className="font-semibold text-sm">{profession.averageSalary}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Gereksinimler:</p>
                      <ul className="space-y-1">
                        {profession.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">İş Bulma Siteleri:</p>
                      <div className="flex flex-wrap gap-2">
                        {profession.jobSites.map((site, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {site}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-amber-800 mb-2">💡 Pro İpuçları:</p>
                      <ul className="space-y-1">
                        {profession.tips.slice(0, 2).map((tip, i) => (
                          <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                            <span className="text-amber-500">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Search Sites */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Almanya'da İş Bulma Siteleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İş arama sürecinde kullanmanız gereken en popüler ve güvenilir platformlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSearchSites.map((site, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{site.name}</CardTitle>
                    <a 
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{site.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">Dil: {site.language}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {site.bestFor.map((bf, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {bf}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İş Başvurusu İpuçları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Almanca CV Hazırla</h3>
                <p className="text-sm text-gray-600">
                  "Lebenslauf" formatına uygun, fotoğraflı ve detaylı bir CV hazırlayın.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Motivasyon Mektubu</h3>
                <p className="text-sm text-gray-600">
                  "Anschreiben" her iş için özelleştirilmiş olmalı. Şirketi araştırın.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Maaş Beklentisi</h3>
                <p className="text-sm text-gray-600">
                  Brüt yıllık maaş (Jahresbruttogehalt) istenecektir. Araştırın.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Sertifikalar</h3>
                <p className="text-sm text-gray-600">
                  TÜV, SRC, ADR gibi sertifikalarınızı belirtin. Almanya'da geçerli.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mesleğiniz İçin Doğru Vizeyi Bulun
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Tüm vize türlerini inceleyin ve size en uygun olanı seçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Vize Türlerini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/eyalet-kurallari">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Eyalet Kuralları
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
