import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  FileText, 
  Clock, 
  Euro,
  AlertCircle,
  Building,
  GraduationCap,
  ExternalLink,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recognitionTypes } from '@/data/visaTypes';

const regulatedProfessions = [
  "Doktor", "Hemşire", "Eczacı", "Diş Hekimi", "Veteriner",
  "Mühendis (bazı alanlar)", "Mimar", "Öğretmen", "Avukat",
  "Elektrikçi", "Sıvacı", "Duvarcı", "Çatıcı", "Tesisatçı"
];

const nonRegulatedProfessions = [
  "IT Uzmanı", "Yazılımcı", "Veri Analisti", "Proje Yöneticisi",
  "Muhasebeci", "Pazarlama Uzmanı", "İnsan Kaynakları",
  "Grafik Tasarımcı", "İç Mimar", "Satış Temsilcisi"
];

const steps = [
  {
    title: "Başvuru Yapın",
    description: "Kulturkultur.de veya ZAB üzerinden online başvuru formunu doldurun."
  },
  {
    title: "Evrakları Gönderin",
    description: "Diploma, transkript ve diğer belgeleri çeviri ile birlikte gönderin."
  },
  {
    title: "Ücreti Ödeyin",
    description: "Değerlendirme ücretini (100-600€) ödeyin."
  },
  {
    title: "Değerlendirme Bekleyin",
    description: "3-6 ay içinde sonuç alırsınız."
  },
  {
    title: "Sonucu Değerlendirin",
    description: "Tam, kısmi denklik veya denklik yok kararına göre hareket edin."
  }
];

export function Recognition() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mesleki Denklik (Anerkennung)
            </h1>
            <p className="text-xl text-emerald-100">
              Türkiye'de aldığınız mesleki eğitimin veya üniversite diplomanızın 
              Almanya'da tanınması için yapmanız gerekenler.
            </p>
          </div>
        </div>
      </section>

      {/* What is Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-500">Neden Önemli?</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mesleki Denklik Nedir?
              </h2>
              <p className="text-gray-600 mb-4">
                Mesleki denklik (Berufliche Anerkennung), Türkiye'de aldığınız 
                mesleki eğitimin veya üniversite diplomanızın Almanya'daki 
                mesleki standartlara ne ölçüde uyduğunun değerlendirilmesidir.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Düzenlenmiş mesleklerde</strong> (doktor, hemşire, mühendis vb.) 
                denklik zorunludur. <strong>Düzenlenmemiş mesleklerde</strong> (IT, 
                muhasebe vb.) denklik isteğe bağlıdır ama iş bulmayı kolaylaştırır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.anerkennung-in-deutschland.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Resmi Siteye Git
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/vize/bluecard">
                  <Button variant="outline">
                    Mavi Kart Bilgisi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Denklik Türleri</h3>
              <div className="space-y-4">
                {recognitionTypes.map((type) => (
                  <div key={type.id} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className={`p-2 rounded-lg ${
                      type.id === 'full' ? 'bg-emerald-100' : 
                      type.id === 'partial' ? 'bg-amber-100' : 'bg-red-100'
                    }`}>
                      {type.id === 'full' ? <CheckCircle className="h-5 w-5 text-emerald-600" /> :
                       type.id === 'partial' ? <AlertCircle className="h-5 w-5 text-amber-600" /> :
                       <XCircle className="h-5 w-5 text-red-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold">{type.title}</h4>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulated vs Non-Regulated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meslek Kategorileri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mesleğinizin düzenlenmiş olup olmadığını öğrenin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-emerald-600" />
                  Düzenlenmiş Meslekler
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Bu mesleklerde denklik <strong>zorunludur</strong>. 
                  Denklik olmadan çalışamazsınız.
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {regulatedProfessions.map((prof, idx) => (
                    <Badge key={idx} variant="secondary">{prof}</Badge>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      Bu mesleklerde denklik başvurusu yapmadan iş başvurusu 
                      yapmanız pek mantıklı değildir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Düzenlenmemiş Meslekler
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Bu mesleklerde denklik <strong>isteğe bağlıdır</strong> 
                  ama iş bulmayı kolaylaştırır.
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {nonRegulatedProfessions.map((prof, idx) => (
                    <Badge key={idx} variant="secondary">{prof}</Badge>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      IT sektöründe Mavi Kart için denklik şartı yoktur, 
                      3 yıl deneyim yeterlidir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Başvuru Süreci
            </h2>
            <p className="text-lg text-gray-600">
              Mesleki denklik başvurusu için izlemeniz gereken adımlar.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl z-10">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hidden md:block">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gerekli Belgeler
            </h2>
            <p className="text-lg text-gray-600">
              Başvuru için hazırlamanız gereken evraklar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Temel Belgeler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Diploma (noter onaylı Türkçe + Almanca/İngilizce çeviri)",
                    "Transkript/ders programı (çeviri ile)",
                    "Pasaport fotokopisi",
                    "CV (Almanca)",
                    "Motivasyon mektubu (Almanca)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Ek Belgeler (Gerekirse)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Mesleki deneyim belgeleri (SGK dökümü)",
                    "Sertifikalar ve kurs belgeleri",
                    "Mesleki sınav sonuçları",
                    "Çalışma referansları",
                    "Mesleki üyelik belgeleri"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Önemli Not</h4>
                <p className="text-amber-700">
                  Tüm belgelerin <strong>apostilli</strong> (noter onaylı) ve 
                  <strong>yeminli çevirmen</strong> tarafından çevrilmiş olması gerekir. 
                  Çeviri maliyeti belge başına 50-150 TL arasındadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Duration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maliyet ve Süre
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Değerlendirme Ücreti</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">100-600€</p>
                <p className="text-gray-600 text-sm">
                  Mesleğe göre değişir. Üniversite diplomaları daha pahalıdır.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">İşlem Süresi</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">3-6 Ay</p>
                <p className="text-gray-600 text-sm">
                  Yoğunluğa göre değişebilir. Bazı eyaletler daha hızlıdır.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Çeviri Maliyeti</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">50-150₺</p>
                <p className="text-gray-600 text-sm">
                  Belge başına yeminli çeviri ücreti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nereye Başvurulur?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>ZAB (Merkezi)</CardTitle>
                <p className="text-sm text-gray-600">
                  Üniversite diplomaları ve bazı meslekler için
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Zentralstelle für ausländisches Bildungswesen (ZAB), 
                  üniversite diplomalarının denkliği için yetkilidir.
                </p>
                <a 
                  href="https://www.kmk.org/zab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    ZAB Web Sitesi
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eyalet Kurumları</CardTitle>
                <p className="text-sm text-gray-600">
                  Mesleki eğitimler için eyalet yetkilileri
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mesleki eğitim diplomaları için çalışacağınız eyaletin 
                  ilgili kurumuna başvurmanız gerekir.
                </p>
                <a 
                  href="https://www.anerkennung-in-deutschland.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Uygun Kurumu Bul
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Denklik Sürecine Başlamaya Hazır mısınız?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Mesleki denklik başvurunuzu yapın ve Almanya'daki kariyerinize 
            ilk adımı atın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.anerkennung-in-deutschland.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Başvuruya Başla
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Vize Türlerine Dön
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
