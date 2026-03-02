import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Euro, 
  Clock, 
  Building2, 
  CheckCircle, 
  Mail,
  Globe,
  Plus,
  X,
  Star,
  Users,
  AlertCircle,
  MessageSquare,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


// Örnek iş ilanları (gerçek uygulamada veritabanından gelecek)
const sampleJobs = [
  {
    id: 1,
    title: "Yazılım Geliştirici (Software Developer)",
    company: "TechSolutions GmbH",
    location: "Münih",
    type: "Tam Zamanlı",
    salary: "55.000 - 70.000€/yıl",
    language: "İngilizce (B2)",
    visa: "Mavi Kart",
    requirements: ["JavaScript/React", "3+ yıl deneyim", "Üniversite mezunu"],
    benefits: ["Uzaktan çalışma", "Yemek kartı", "Spor salonu"],
    contact: "jobs@techsolutions.de",
    postedDate: "2 gün önce",
    urgent: true
  },
  {
    id: 2,
    title: "Hemşire (Krankenpfleger/in)",
    company: "Klinikum Berlin",
    location: "Berlin",
    type: "Tam Zamanlı",
    salary: "3.200 - 4.000€/ay",
    language: "Almanca (B1)",
    visa: "Çalışma Vizesi",
    requirements: ["Hemşirelik diploması", "B1 Almanca", "Mesleki denklik"],
    benefits: ["Vardiye primi", "Eğitim desteği", "Taşınma yardımı"],
    contact: "personal@klinikum-berlin.de",
    postedDate: "5 gün önce",
    urgent: false
  },
  {
    id: 3,
    title: "Mutfak Şefi (Koch/Köchin)",
    company: "Restaurant München",
    location: "Münih",
    type: "Tam Zamanlı",
    salary: "2.800 - 3.500€/ay",
    language: "Almanca (A2)",
    visa: "Çalışma Vizesi",
    requirements: ["Aşçılık diploması", "5+ yıl deneyim", "A2 Almanca"],
    benefits: ["Yemek", "Konaklama desteği", "İzin günleri"],
    contact: "chef@restaurant-muenchen.de",
    postedDate: "1 hafta önce",
    urgent: true
  },
  {
    id: 4,
    title: "İnşaat İşçisi (Bauarbeiter)",
    company: "Bau GmbH",
    location: "Stuttgart",
    type: "Tam Zamanlı",
    salary: "2.500 - 3.200€/ay",
    language: "Temel Almanca",
    visa: "Çalışma Vizesi",
    requirements: ["İnşaat deneyimi", "Fiziksel yeterlilik", "A1 Almanca"],
    benefits: ["Servis", "Öğlen yemeği", "Kış primi"],
    contact: "info@bau-gmbh.de",
    postedDate: "3 gün önce",
    urgent: false
  },
  {
    id: 5,
    title: "IT Sistem Uzmanı",
    company: "DataCorp AG",
    location: "Hamburg",
    type: "Tam Zamanlı",
    salary: "60.000 - 80.000€/yıl",
    language: "İngilizce (B2)",
    visa: "Mavi Kart",
    requirements: ["Linux/Windows Server", "5+ yıl deneyim", "Üniversite"],
    benefits: ["Hibrit çalışma", "Bireysel gelişim bütçesi", "Şirket aracı"],
    contact: "careers@datacorp.de",
    postedDate: "1 gün önce",
    urgent: true
  },
  {
    id: 6,
    title: "Temizlik Personeli (Reinigungskraft)",
    company: "CleanService",
    location: "Köln",
    type: "Yarı Zamanlı",
    salary: "13-15€/saat",
    language: "Temel Almanca",
    visa: "Çalışma Vizesi",
    requirements: ["Deneyim tercih edilir", "Güvenilirlik", "Esnek çalışma saatleri"],
    benefits: ["Esnek saatler", "Ulaşım desteği"],
    contact: "jobs@cleanservice.de",
    postedDate: "4 gün önce",
    urgent: false
  }
];

// Sektörler
const sectors = [
  { name: "IT & Yazılım", count: 45 },
  { name: "Sağlık & Bakım", count: 32 },
  { name: "İnşaat", count: 28 },
  { name: "Lojistik & Depo", count: 24 },
  { name: "Gastronomi", count: 19 },
  { name: "Üretim", count: 17 },
  { name: "Mali Müşavirlik", count: 12 },
  { name: "Eğitim", count: 8 }
];

// Şehirler
const cities = [
  { name: "Berlin", count: 89 },
  { name: "Münih", count: 67 },
  { name: "Hamburg", count: 54 },
  { name: "Köln", count: 43 },
  { name: "Frankfurt", count: 38 },
  { name: "Stuttgart", count: 31 }
];

export function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // İş ilanlarını filtrele
  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = !selectedSector || job.title.toLowerCase().includes(selectedSector.toLowerCase());
    const matchesCity = !selectedCity || job.location === selectedCity;
    return matchesSearch && matchesSector && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">İş İlanları</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya'da İş Bulun
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              İşverenler doğrudan sizinle iletişime geçsin. 
              Türkiye'den Almanya'ya iş bulmanın en hızlı yolu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    <Plus className="mr-2 h-5 w-5" />
                    İş İlanı Ver
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">İş İlanı Ver</DialogTitle>
                  </DialogHeader>
                  <EmployerForm />
                </DialogContent>
              </Dialog>
              <a href="mailto:meteeski93@gmail.com?subject=İş%20İlanı%20Danışmanlığı">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Bize Ulaşın
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="İş unvanı veya şirket ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tüm Sektörler</option>
              {sectors.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tüm Şehirler</option>
              {cities.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">İstatistikler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700">{sampleJobs.length}+</p>
                      <p className="text-sm text-gray-600">Aktif İlan</p>
                    </div>
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <p className="text-2xl font-bold text-emerald-700">15+</p>
                      <p className="text-sm text-gray-600">İşveren</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sectors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Sektörler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sectors.map(sector => (
                      <li 
                        key={sector.name}
                        className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => setSelectedSector(sector.name)}
                      >
                        <span className={selectedSector === sector.name ? 'text-blue-600 font-medium' : ''}>
                          {sector.name}
                        </span>
                        <Badge variant="secondary">{sector.count}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Cities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Şehirler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cities.map(city => (
                      <li 
                        key={city.name}
                        className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => setSelectedCity(city.name)}
                      >
                        <span className={selectedCity === city.name ? 'text-blue-600 font-medium' : ''}>
                          {city.name}
                        </span>
                        <Badge variant="secondary">{city.count}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Info */}
              <Alert className="border-blue-200 bg-blue-50">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-700 text-sm">
                  İş ilanları doğrudan işverenler tarafından verilmektedir. 
                  Başvuru önce vize uygunluğunuzu kontrol edin.
                </AlertDescription>
              </Alert>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {filteredJobs.length} İş İlanı Bulundu
                </h2>
                {(selectedSector || selectedCity) && (
                  <Button variant="ghost" size="sm" onClick={() => {setSelectedSector(''); setSelectedCity('');}}>
                    <X className="h-4 w-4 mr-1" />
                    Filtreleri Temizle
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <Building2 className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{job.title}</h3>
                              <p className="text-gray-600">{job.company}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-4">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Euro className="h-3 w-3" />
                              {job.salary}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Globe className="h-3 w-3" />
                              {job.language}
                            </Badge>
                            {job.urgent && (
                              <Badge className="bg-red-500">Acil</Badge>
                            )}
                          </div>

                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Gereksinimler:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, idx) => (
                                <span key={idx} className="text-sm bg-gray-100 px-2 py-1 rounded">
                                  {req}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-3">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Yan Haklar:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, idx) => (
                                <span key={idx} className="text-sm bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              {job.visa}
                            </span>
                            <span>{job.postedDate}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <a href={`mailto:${job.contact}?subject=${encodeURIComponent(job.title + ' Başvurusu')}`}>
                            <Button className="w-full">
                              <Mail className="mr-2 h-4 w-4" />
                              Başvur
                            </Button>
                          </a>
                          <Link to={`/vize-bulucu`}>
                            <Button variant="outline" size="sm" className="w-full">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Vize Uygunluğunu Kontrol Et
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    İlan Bulunamadı
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Arama kriterlerinize uygun iş ilanı bulunamadı.
                  </p>
                  <Button onClick={() => {setSearchTerm(''); setSelectedSector(''); setSelectedCity('');}}>
                    Tüm İlanları Göster
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-lg text-gray-600">
              Almanya'da iş bulmak artık çok kolay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. İş Ara</h3>
                <p className="text-gray-600">
                  Size uygun iş ilanlarını filtreleyin ve inceleyin. 
                  Vize türünüze uygun işleri kolayca bulun.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Başvur</h3>
                <p className="text-gray-600">
                  Doğrudan işverene e-posta ile başvurun. 
                  CV'nizi ve motivasyon mektubunuzu eklemeyi unutmayın.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Vize Al</h3>
                <p className="text-gray-600">
                  İş teklifi aldıktan sonra vize başvurunuzu yapın. 
                  Sitemizdeki rehberlerden faydalanın.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                İşveren misiniz?
              </h2>
              <p className="text-lg text-emerald-100 mb-6">
                Almanya'da çalışan arayan işverenler için ücretsiz ilan platformu. 
                Türkiye'den nitelikli işçilere ulaşın.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Ücretsiz iş ilanı verme</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Doğrudan adaylara ulaşma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Vize sürecinde destek</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Binlerce potansiyel çalışan</span>
                </li>
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                    <Plus className="mr-2 h-5 w-5" />
                    Hemen İlan Ver
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">İş İlanı Ver</DialogTitle>
                  </DialogHeader>
                  <EmployerForm />
                </DialogContent>
              </Dialog>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Neden Biz?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Geniş Aday Havuzu</h4>
                    <p className="text-emerald-100 text-sm">
                      Türkiye'nin her yerinden nitelikli adaylara ulaşın
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Vize Danışmanlığı</h4>
                    <p className="text-emerald-100 text-sm">
                      Adayların vize sürecinde rehberlik ediyoruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Doğrudan İletişim</h4>
                    <p className="text-emerald-100 text-sm">
                      Adaylar doğrudan sizinle iletişime geçer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// İşveren Formu
function EmployerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          İlanınız Alındı!
        </h3>
        <p className="text-gray-600 mb-6">
          İş ilanınız inceleme için bize ulaştı. Onaylandıktan sonra sitede yayınlanacaktır.
        </p>
        <p className="text-sm text-gray-500">
          İletişim: <a href="mailto:meteeski93@gmail.com" className="text-blue-600">meteeski93@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Şirket Adı *</label>
        <Input required placeholder="örn: TechSolutions GmbH" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">İletişim E-posta *</label>
        <Input type="email" required placeholder="jobs@company.de" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">İletişim Telefon</label>
        <Input placeholder="+49 123 4567890" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Pozisyon/İş Unvanı *</label>
        <Input required placeholder="örn: Yazılım Geliştirici" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Şehir *</label>
        <Input required placeholder="örn: Berlin" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Çalışma Tipi *</label>
        <select required className="w-full px-3 py-2 border rounded-lg">
          <option value="">Seçiniz</option>
          <option value="fulltime">Tam Zamanlı</option>
          <option value="parttime">Yarı Zamanlı</option>
          <option value="contract">Sözleşmeli</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Maaş Aralığı</label>
        <Input placeholder="örn: 45.000 - 60.000€/yıl" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Dil Gereksinimi *</label>
        <Input required placeholder="örn: Almanca B1 veya İngilizce B2" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Vize Desteği *</label>
        <select required className="w-full px-3 py-2 border rounded-lg">
          <option value="">Seçiniz</option>
          <option value="bluecard">Mavi Kart</option>
          <option value="workvisa">Çalışma Vizesi</option>
          <option value="both">Her ikisi</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Gereksinimler *</label>
        <textarea 
          required 
          rows={3}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Diploma, deneyim, yetenekler..."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Yan Haklar</label>
        <textarea 
          rows={2}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Örn: Uzaktan çalışma, yemek kartı..."
        />
      </div>
      
      <Alert className="border-amber-200 bg-amber-50">
        <AlertCircle className="h-5 w-5 text-amber-600" />
        <AlertDescription className="text-amber-700 text-sm">
          İlanınız onaylandıktan sonra sitede yayınlanacaktır. 
          İşveren bilgileri doğrulama amacıyla kaydedilecektir.
        </AlertDescription>
      </Alert>
      
      <Button type="submit" className="w-full">
        İlanı Gönder
      </Button>
    </form>
  );
}
