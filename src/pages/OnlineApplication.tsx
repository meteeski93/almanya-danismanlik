import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock,
  FileText,
  Upload,
  Fingerprint,
  ExternalLink,
  AlertCircle,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { onlineApplicationProcess } from '@/data/extendedVisaTypes';

export function OnlineApplication() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              2026 Güncel
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Online Vize Başvurusu
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Almanya 1 Ocak 2025'ten itibaren yeni dijital vize sistemine geçti. 
              2026'da artık çoğu vize türü için online başvuru mümkün!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">167</span>
                <span className="text-sm ml-2 text-cyan-200">Konsolosluk</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">4-6</span>
                <span className="text-sm ml-2 text-cyan-200">Hafta Süre</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">%50</span>
                <span className="text-sm ml-2 text-cyan-200">Daha Hızlı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Link */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-100 p-3 rounded-xl">
                <Globe className="h-8 w-8 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Resmi Başvuru Portalı</p>
                <p className="text-xl font-bold text-gray-900">digital.diplo.de</p>
              </div>
            </div>
            <a 
              href="https://digital.diplo.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Portala Git
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              3 adımda dijital vize başvurusu. Artık konsolosluğa gitmeden 
              önce çoğu işlemi online tamamlayabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <div className="absolute -top-4 left-6 bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <CardHeader className="pt-8">
                <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle>Online Başvuru</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consular Services Portal üzerinden form doldurun, 
                  belgelerinizi yükleyin.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Pasaport taraması
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Diploma ve belgeler
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Finansal kanıt
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute -top-4 left-6 bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <CardHeader className="pt-8">
                <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle>Dijital İnceleme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Yetkililer başvurunuzu online inceler. 
                  Eksik belge varsa portal üzerinden istenir.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Hızlı ön inceleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Online bildirim
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Belge tamamlama
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute -top-4 left-6 bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <CardHeader className="pt-8">
                <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Fingerprint className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle>Yüz Yüze Randevu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ön onay aldıktan sonra biyometri ve 
                  kimlik doğrulama için konsolosluğa gidin.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Parmak izi alımı
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Fotoğraf çekimi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Orijinal belge kontrolü
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Visa Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Online Başvuru Yapılabilen Vize Türleri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineApplicationProcess.visaTypes.map((visa, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <span className="font-medium">{visa}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dijital Sistem Avantajları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineApplicationProcess.benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-7 w-7 text-cyan-600" />
                  </div>
                  <p className="font-medium text-gray-900">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Time Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İşlem Süresi Karşılaştırması
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gray-100">
                <CardTitle className="text-center">Eski Sistem</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-700 mb-2">8-12</p>
                <p className="text-gray-600">Hafta</p>
                <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Posta ile belge gönderimi</li>
                  <li>• Uzun randevu bekleme</li>
                  <li>• Eksik belgede süre uzaması</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-500">
              <CardHeader className="bg-cyan-600 text-white">
                <CardTitle className="text-center">Yeni Dijital Sistem</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <Clock className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
                <p className="text-4xl font-bold text-cyan-600 mb-2">4-6</p>
                <p className="text-gray-600">Hafta</p>
                <ul className="text-left mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Online belge yükleme</li>
                  <li>• Hızlı randevu alma</li>
                  <li>• Anlık eksik belge bildirimi</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-amber-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Önemli Notlar
              </h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Online başvuru tüm ülkelerde henüz aktif değil. Türkiye aktif.</li>
                <li>• Biyometri (parmak izi) için hala konsolosluğa gitmeniz gerekir.</li>
                <li>• Bloke hesap gibi finansal kanıtlar hala gereklidir.</li>
                <li>• Vize ücreti online ödenebilir.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Online Başvuruya Hazır mısınız?
          </h2>
          <p className="text-lg text-cyan-100 mb-8">
            Tüm bilgilerinizi hazırladıysanız dijital başvuru portalına 
            giderek süreci başlatabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://digital.diplo.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
                Başvuru Portalı
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/gerekli-evraklar">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Evrak Listesi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
