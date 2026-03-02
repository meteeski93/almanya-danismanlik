import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Plane, 
  Search, 
  Instagram,
  MessageSquare,
  FileText,
  Briefcase,
  CheckCircle,
  Clock,
  Euro,
  Users,
  MapPin,
  Send,
  CheckSquare,
  AlertCircle,
  BookOpen,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { visaTypes } from '@/data/visaTypes';

const quickLinks = [
  { 
    title: "Vize Türleri", 
    desc: "Tüm vize seçenekleri",
    path: "/vize-turleri", 
    icon: Briefcase, 
    color: "bg-blue-500",
    badge: "15 Vize"
  },
  { 
    title: "Vize Bulucu", 
    desc: "Size uygun vizeyi bulun",
    path: "/vize-bulucu", 
    icon: Search, 
    color: "bg-emerald-500",
    badge: "Quiz"
  },
  { 
    title: "Başvuru Süreci", 
    desc: "Adım adım rehber",
    path: "/basvuru-sureci", 
    icon: CheckSquare, 
    color: "bg-purple-500",
    badge: "8 Adım"
  },
  { 
    title: "Gerekli Evraklar", 
    desc: "Evrak kontrol listesi",
    path: "/gerekli-evraklar", 
    icon: FileText, 
    color: "bg-amber-500",
    badge: "PDF"
  },
  { 
    title: "Gönüllülük Projeleri", 
    desc: "ESC ve fırsatlar",
    path: "/vize/fsj", 
    icon: Users, 
    color: "bg-rose-500",
    badge: "ESC"
  },
  { 
    title: "İletişim", 
    desc: "Bize ulaşın",
    path: "/iletisim", 
    icon: Phone, 
    color: "bg-cyan-500",
    badge: "Mail"
  },
];

const stats = [
  { value: "8+", label: "Vize Türü", icon: Briefcase },
  { value: "Şubat 2026", label: "Son Güncelleme", icon: Clock },
  { value: "100%", label: "Ücretsiz", icon: Euro },
  { value: "Adım Adım", label: "Rehber", icon: MapPin },
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    // Gmail compose URL - daha pratik, kullanıcının Gmail'i açılır
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=meteeski93@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    )}`;
    window.open(gmailLink, '_blank');
  };

  const filteredVisas = visaTypes.filter(visa => 
    visa.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visa.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Plane className="h-4 w-4" />
              <span className="text-sm font-medium">Türkiye'den Almanya'ya Yol Rehberiniz</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Almanya'ya
              <span className="block text-emerald-300 mt-2">Yol</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Türkiye'den Almanya'ya gitmek isteyenler için kapsamlı vize rehberi. 
              Tüm vize türleri, başvuru süreçleri, mesleki denklik ve daha fazlası 
              tek adreste. Güncel, doğrulanmış ve ücretsiz bilgiler.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text"
                placeholder="Vize türü ara... (örn: Şans Kartı, Mavi Kart)"
                className="pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="max-w-2xl mx-auto mb-8 bg-white rounded-xl shadow-xl overflow-hidden">
                {filteredVisas.length > 0 ? (
                  <div className="max-h-64 overflow-y-auto">
                    {filteredVisas.map((visa) => (
                      <Link 
                        key={visa.id} 
                        to={`/vize/${visa.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
                      >
                        <div className={`${visa.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="font-semibold text-gray-900">{visa.title}</p>
                          <p className="text-sm text-gray-500">{visa.duration}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-gray-600">
                    Sonuç bulunamadı. <Link to="/vize-turleri" className="text-blue-600 hover:underline">Tüm vizeleri gör</Link>
                  </div>
                )}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vize-turleri">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-xl">
                  Vize Türlerini Keşfet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/basvuru-sureci">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold shadow-lg">
                  Başvuru Süreci
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-emerald-300" />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hızlı Erişim
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyacınız olan bilgiye hızlıca ulaşın
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, idx) => (
              <Link key={idx} to={link.path}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${link.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                        <link.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-gray-900">{link.title}</h3>
                          <Badge variant="secondary" className="text-xs">{link.badge}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{link.desc}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500">Hakkımızda</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Almanya Yolculuğunuzda Yanınızdayız
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Almanya Vize Rehberi, Türkiye'den Almanya'ya gitmek isteyenler için 
                kapsamlı ve güncel bir bilgi kaynağıdır. Vize süreçleri karmaşık ve 
                sürekli değişkenlik gösterebildiği için, en güncel bilgileri tek bir 
                çatı altında topladık.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sitemizde; Şans Kartı, Mavi Kart, çalışma vizeleri, öğrenci vizeleri, 
                mesleki denklik süreçleri ve başvuru adımları hakkında detaylı 
                bilgiler bulabilirsiniz. Tüm içerikler resmi kaynaklardan doğrulanmış 
                ve Şubat 2026 tarihinde araştırılarak güncellenmiştir.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Güncel Bilgiler</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Ücretsiz Rehber</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Doğrulanmış Kaynaklar</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Adım Adım Rehber</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl p-8 text-white">
              <BookOpen className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sitede Neler Var?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>8 farklı vize türünün detaylı açıklamaları</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>Mesleki denklik başvuru süreci</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>Adım adım başvuru rehberi</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>Gerekli evrakların kontrol listesi</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>Sık sorulan sorular ve cevapları</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span>Resmi kurum bağlantıları</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Visas Preview */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-500">En Popüler</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              En Çok Tercih Edilen Vizeler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'den Almanya'ya gitmek isteyenlerin en çok tercih ettiği vize türleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.slice(0, 3).map((visa) => (
              <Card key={visa.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`${visa.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{visa.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {visa.description}
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Süre:</span>
                      <span className="font-medium">{visa.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Maliyet:</span>
                      <span className="font-medium">{visa.cost}</span>
                    </div>
                  </div>
                  <Link to={`/vize/${visa.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50">
                      Detayları Gör
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/vize-turleri">
              <Button size="lg" variant="outline">
                Tüm Vize Türlerini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Consultancy Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Premium Danışmanlık</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Özel Danışmanlık Alın
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Almanya yolculuğunuzda size özel, kapsamlı danışmanlık hizmeti sunuyoruz. 
                Vize başvurunuzdan mesleki denkliğe, iş bulmadan entegrasyona kadar 
                her adımda yanınızdayız.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Birebir özel danışmanlık seansları</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Evrak kontrolü ve düzenleme desteği</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Mesleki denklik süreci takibi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>İş arama ve mülakat hazırlığı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Almanya'da yaşam ve entegrasyon rehberliği</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:meteeski93@gmail.com?subject=Premium%20Danışmanlık%20Talebi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Mail ile Ulaşın
                  </Button>
                </a>
                <a 
                  href="https://instagram.com/metein.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram'dan DM
                  </Button>
                </a>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Ücretler ve paket detayları için bize ulaşabilirsiniz.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Neden Biz?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Deneyim</h4>
                    <p className="text-white/80 text-sm">Almanya göç süreçlerinde uzmanlaşmış ekip</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Başarı Oranı</h4>
                    <p className="text-white/80 text-sm">Yüksek onay oranı ile güvenilir hizmet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">7/24 Destek</h4>
                    <p className="text-white/80 text-sm">Sorularınızı her zaman yanıtlıyoruz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Kişiselleştirilmiş</h4>
                    <p className="text-white/80 text-sm">Her müşteriye özel çözümler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram & Social Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-medium">Bizi Takip Edin</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Instagram'da Bizi Takip Edin
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Güncel vize haberleri, ipuçları ve başarı hikayeleri için 
                Instagram hesabımızı takip edin. Sorularınızı DM'den 
                iletebilirsiniz.
              </p>
              <a 
                href="https://instagram.com/metein.de" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                  <Instagram className="mr-2 h-5 w-5" />
                  @metein.de
                </Button>
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-white/80">Takipçi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Gönderi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-white/80">Başarı Hikayesi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">7/24</div>
                <div className="text-white/80">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-500">Geri Bildirim</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Görüş ve Önerileriniz
            </h2>
            <p className="text-lg text-gray-600">
              Sitemiz hakkındaki düşüncelerinizi, önerilerinizi veya 
              sorularınızı bize iletebilirsiniz.
            </p>
          </div>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-8">
              <form 
                onSubmit={handleMailtoSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız
                    </label>
                    <Input 
                      name="name"
                      type="text" 
                      placeholder="Adınız"
                      required
                      className="w-full"
                      value={formData.name}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="ornek@email.com"
                      required
                      className="w-full"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <Input 
                    name="subject"
                    type="text" 
                    placeholder="Geri bildirim konusu"
                    required
                    className="w-full"
                    value={formData.subject}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Görüş, öneri veya sorularınızı buraya yazabilirsiniz..."
                    required
                    className="w-full min-h-[150px]"
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    <strong>Not:</strong> Bu form geri bildirim içindir. 
                    Vize başvurusu için lütfen <a href="https://idata.com.tr" target="_blank" rel="noopener noreferrer" className="underline">iDATA</a>'ya başvurun.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Mail Gönder
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Butona tıkladığınızda mail programınız açılacak ve mesajınız 
                  <strong> meteeski93@gmail.com</strong> adresine gönderilecektir.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hazır mısınız?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Almanya yolculuğunuza başlamak için ilk adımı atın. 
            Size en uygun vize türünü keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8">
                Vize Türlerini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/basvuru-sureci">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Başvuru Süreci
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
