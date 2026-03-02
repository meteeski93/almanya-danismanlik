import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Briefcase, 
  GraduationCap,
  Info,
  Wallet,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const guideSections = [
  {
    title: "Almanya'ya Geliş",
    icon: MapPin,
    color: "blue",
    links: [
      { label: "Vize Türleri", path: "/vize-turleri" },
      { label: "Vize Bulucu", path: "/vize-bulucu" },
      { label: "Başvuru Süreci", path: "/basvuru-sureci" },
      { label: "Gerekli Evraklar", path: "/gerekli-evraklar" },
    ]
  },
  {
    title: "Almanya'da Yaşam",
    icon: Home,
    color: "emerald",
    links: [
      { label: "Geldikten Sonra", path: "/geldikten-sonra" },
      { label: "Konaklama Rehberi", path: "/geldikten-sonra" },
      { label: "Banka Hesabı", path: "/geldikten-sonra" },
      { label: "Sağlık Sistemi", path: "/geldikten-sonra" },
    ]
  },
  {
    title: "Çalışma Hayatı",
    icon: Briefcase,
    color: "amber",
    links: [
      { label: "Çalışma Hayatı Rehberi", path: "/calisma-hayati" },
      { label: "Mesleğe Göre Almanya", path: "/meslege-gore" },
      { label: "İş İlanları", path: "/is-ilanlari" },
      { label: "Vergi Sistemi", path: "/calisma-hayati" },
    ]
  },
  {
    title: "Eğitim",
    icon: GraduationCap,
    color: "purple",
    links: [
      { label: "Üniversiteler", path: "/universiteler" },
      { label: "Ausbildung", path: "/ausbildung" },
      { label: "Öğrenci Rehberi", path: "/ogrenci-rehberi" },
      { label: "Bloke Hesap", path: "/bloke-hesap" },
    ]
  },
  {
    title: "Aile",
    icon: Users,
    color: "rose",
    links: [
      { label: "Aile Birleşimi", path: "/aile-birlesimi" },
      { label: "Aile Rehberi", path: "/aile-rehberi" },
      { label: "Çocuk Yardımları", path: "/aile-rehberi" },
    ]
  },
  {
    title: "Yardım ve Destek",
    icon: Info,
    color: "cyan",
    links: [
      { label: "Sıkça Sorulan Sorular", path: "/sss" },
      { label: "Gerçek Senaryolar", path: "/gercek-senaryolar" },
      { label: "Vize Reddi Sonrası", path: "/vize-redi-sonrasi" },
      { label: "İletişim", path: "/iletisim" },
    ]
  }
];

const quickStats = [
  { label: "Vize Türü", value: "15+", desc: "Farklı vize seçeneği" },
  { label: "Meslek", value: "18+", desc: "Meslek rehberi" },
  { label: "Üniversite", value: "400+", desc: "Devlet üniversitesi" },
  { label: "Ausbildung", value: "300+", desc: "Meslek dalı" },
];

export function AlmanyaRehberi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">Kapsamlı Rehber</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Almanya Rehberi
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Almanya'ya göç etmek isteyenler için kapsamlı bilgi kaynağı. 
              Vizeden yaşama, eğitimden çalışma hayatına kadar her şey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/vize-bulucu">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  🔍 Vize Bulucu
                </Button>
              </Link>
              <Link to="/meslege-gore">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  💼 Mesleğe Göre
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
            {quickStats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="font-medium text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Rehber Bölümleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideSections.map((section, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-${section.color}-50`}>
                  <div className="flex items-center gap-3">
                    <div className={`bg-${section.color}-100 p-3 rounded-lg`}>
                      <section.icon className={`h-6 w-6 text-${section.color}-600`} />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {section.links.map((link, lidx) => (
                      <li key={lidx}>
                        <Link 
                          to={link.path}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg group"
                        >
                          <span className="text-gray-700 group-hover:text-blue-600">{link.label}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popüler Konular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/aile-birlesimi">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Aile Birleşimi</h3>
                  <p className="text-sm text-gray-600">Eş ve çocuklarınızı yanınıza getirin</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/bloke-hesap">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wallet className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Bloke Hesap</h3>
                  <p className="text-sm text-gray-600">11.904€ bloke hesap nasıl açılır?</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/meslege-gore">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mesleğe Göre</h3>
                  <p className="text-sm text-gray-600">Mesleğinize özel göç rehberi</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/ausbildung">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Ausbildung</h3>
                  <p className="text-sm text-gray-600">Mesleki eğitim ile Almanya'ya</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Almanya yolculuğunuzda yanınızdayız. Sorularınız için bize ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sss">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Sıkça Sorulan Sorular
              </Button>
            </Link>
            <a href="mailto:meteeski93@gmail.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Bize Ulaşın
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
