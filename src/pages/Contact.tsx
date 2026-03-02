import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  MapPin, 
  ExternalLink,
  Clock,
  AlertCircle,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const officialContacts = [
  {
    name: "iDATA",
    description: "Almanya vize başvuru merkezi",
    website: "https://idata.com.tr",
    phone: "0850 466 33 77",
    icon: Phone
  },
  {
    name: "Almanya Konsolosluğu - İstanbul",
    description: "Başkonsolosluk",
    website: "https://ista.diplo.de",
    phone: "+90 212 334 61 00",
    address: "İnönü Caddesi 10, 34437 Gümüşsuyu/İstanbul",
    icon: MapPin
  },
  {
    name: "Almanya Konsolosluğu - Ankara",
    description: "Büyükelçilik",
    website: "https://ankara.diplo.de",
    phone: "+90 312 455 51 00",
    address: "Atatürk Bulvarı 114, 06680 Kavaklıdere/Ankara",
    icon: MapPin
  },
  {
    name: "ZAB (Denklik)",
    description: "Mesleki denklik değerlendirme",
    website: "https://www.kmk.org/zab/",
    icon: ExternalLink
  },
  {
    name: "Make it in Germany",
    description: "Resmi göç portalı",
    website: "https://www.make-it-in-germany.com",
    icon: ExternalLink
  }
];

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              İletişim
            </h1>
            <p className="text-xl text-gray-300">
              Resmi kurumlar ve önemli bağlantılar. 
              Bu site bilgilendirme amaçlıdır, resmi başvurular için 
              yetkili kurumlara başvurunuz.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Önemli Bilgilendirme</h3>
              <p className="text-amber-700">
                Bu web sitesi <strong>bilgilendirme amaçlıdır</strong> ve resmi bir kurumla 
                bağlantısı yoktur. Vize başvuruları için lütfen <strong>iDATA</strong> veya 
                <strong>Almanya Konsolosluğu</strong> ile doğrudan iletişime geçiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bize Ulaşın
            </h2>
            <p className="text-lg text-gray-600">
              Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-600 mb-4">
                  Sorularınızı ve önerilerinizi bize e-posta ile gönderebilirsiniz.
                </p>
                <a 
                  href="mailto:meteeski93@gmail.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline text-lg font-medium"
                >
                  <Mail className="h-5 w-5" />
                  meteeski93@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resmi İletişim Kanalları
            </h2>
            <p className="text-lg text-gray-600">
              Vize başvurusu ve diğer işlemler için resmi kurumlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialContacts.map((contact, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <contact.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                      
                      {contact.phone && (
                        <div className="flex items-center gap-2 text-sm mb-1">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                            {contact.phone}
                          </a>
                        </div>
                      )}
                      
                      {contact.address && (
                        <div className="flex items-start gap-2 text-sm mb-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                          <span className="text-gray-600">{contact.address}</span>
                        </div>
                      )}
                      
                      <a 
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mt-2"
                      >
                        Web Sitesi
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Faydalı Bağlantılar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vize Başvurusu</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://digital.diplo.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200"
                    >
                      <div>
                        <span className="font-medium text-emerald-900">Digital.diplo.de</span>
                        <p className="text-xs text-emerald-700">Online Vize Başvurusu (Aile Birleşimi vb.)</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-emerald-600" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://idata.com.tr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>iDATA - Randevu ve Başvuru</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://videx.diplo.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>VIDEX - Online Başvuru Formu</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.auswaertiges-amt.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Almanya Dışişleri Bakanlığı</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mesleki Denklik</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.anerkennung-in-deutschland.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Anerkennung in Deutschland</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.kmk.org/zab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>ZAB - Merkezi Denklik Ofisi</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.kulturkultur.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Kulturkultur - Denklik Portalı</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>İş ve Kariyer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.make-it-in-germany.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Make it in Germany</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.arbeitsagentur.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Federal İstihdam Ajansı</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.stepstone.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>StepStone - İş İlanları</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gönüllülük Projeleri</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://youth.europa.eu/solidarity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200"
                    >
                      <div>
                        <span className="font-medium text-emerald-900">European Solidarity Corps (ESC)</span>
                        <p className="text-xs text-emerald-700">AB gönüllülük projeleri portalı</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-emerald-600" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.european-solidarity-corps.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Almanya ESC Portalı</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.bundesfreiwilligendienst.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>BFD (Bundesfreiwilligendienst)</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.fsj.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>FSJ (Freiwilliges Soziales Jahr)</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Yaşam ve Entegrasyon</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.deutschland.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Deutschland.de</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.goethe.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Goethe Enstitüsü</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.tuerkische-gemeinde.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Türk Toplumu Almanya</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Çalışma Saatleri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  iDATA Başvuru Merkezi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span className="font-medium">08:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cumartesi</span>
                    <span className="font-medium">08:00 - 12:00</span>
                  </li>
                  <li className="flex justify-between text-gray-500">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Almanya Konsolosluğu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Pazartesi - Perşembe</span>
                    <span className="font-medium">08:30 - 12:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cuma</span>
                    <span className="font-medium">08:30 - 12:00</span>
                  </li>
                  <li className="text-sm text-gray-500 mt-4">
                    * Sadece randevu ile hizmet verilir.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Başvurunuza Başlayın
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Tüm bilgilere sahipsiniz. Şimdi vize türünüzü seçin ve 
            başvuru sürecine başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
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
