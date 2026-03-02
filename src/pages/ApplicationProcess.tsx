import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Calendar, 
  Building,
  Plane,
  Home,
  Briefcase,
  AlertCircle,
  ExternalLink,
  Clock,
  Euro
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const steps = [
  {
    id: 1,
    title: "Vize Türünü Seçin",
    description: "Amaçlarınıza en uygun vize türünü belirleyin.",
    icon: Briefcase,
    details: [
      "Çalışmak için: Şans Kartı, Mavi Kart veya Çalışma Vizesi",
      "Okumak için: Öğrenci Vizesi",
      "Turistik: Schengen Vizesi",
      "Kısa süreli iş arama: İş Arama Vizesi"
    ],
    tip: "Henüz karar vermediyseniz Vize Türleri sayfamıza göz atın."
  },
  {
    id: 2,
    title: "Evrakları Hazırlayın",
    description: "Gerekli tüm belgeleri toplayın ve çevirilerini yaptırın.",
    icon: FileText,
    details: [
      "Pasaport (10 yıldan eski olmamalı)",
      "2 adet biyometrik fotoğraf (35×45 mm)",
      "Diploma ve transkript (çeviri ile)",
      "Dil sertifikası (Almanca/İngilizce)",
      "Banka hesap dökümü",
      "Seyahat sağlık sigortası",
      "İş teklifi veya kabul mektubu (varsa)"
    ],
    tip: "Tüm belgelerin güncel ve eksiksiz olması çok önemli. Eksik evrak ret nedeni olabilir."
  },
  {
    id: 3,
    title: "Randevu Alın",
    description: "iDATA üzerinden randevu alın.",
    icon: Calendar,
    details: [
      "idata.com.tr adresine gidin",
      "Vize kategorinizi seçin",
      "Uygun tarih ve saat seçin",
      "Randevu onayınızı alın",
      "Randevu ücretini ödeyin (güncel fiyat için siteye bakın)"
    ],
    tip: "Randevu bulmak bazen zor olabilir, sabah erken saatlerde kontrol edin."
  },
  {
    id: 4,
    title: "Konsolosluğa Başvurun",
    description: "Randevu günü eksiksiz evraklarınızla gidin.",
    icon: Building,
    details: [
      "Randevu saatinden önce gelin",
      "Tüm evrakları düzenli bir şekilde getirin",
      "Vize ücretini (75-90€) nakit Euro olarak ödeyin",
      "Parmak izi verin",
      "Gerekirse kısa bir mülakat yapılır"
    ],
    tip: "Sadece Euro kabul edilir, Türk Lirası kabul edilmez."
  },
  {
    id: 5,
    title: "Sonuç Bekleyin",
    description: "Başvurunuz değerlendiriliyor.",
    icon: Clock,
    details: [
      "Schengen vizesi: 15 gün",
      "Ulusal vize (çalışma/öğrenci): 4-12 hafta",
      "SMS/e-posta ile bilgilendirme",
      "Pasaportunuzu teslim alın"
    ],
    tip: "Acele ediyorsanız 'hızlandırılmış işlem' seçeneğini sorun (ek ücretli)."
  },
  {
    id: 6,
    title: "Almanya'ya Gidin",
    description: "Vizeniz onaylandı, yola çıkabilirsiniz.",
    icon: Plane,
    details: [
      "Uçak bileti alın",
      "Konaklama ayarlayın",
      "Önemli belgelerin kopyalarını alın",
      "Yeterli miktarda Euro bulundurun"
    ],
    tip: "İlk günler için en az 1.000-2.000€ nakit bulundurmanız önerilir."
  },
  {
    id: 7,
    title: "Belediyeye Kaydolun (Anmeldung)",
    description: "Almanya'ya varışta ilk yapmanız gereken.",
    icon: Home,
    details: [
      "14 gün içinde belediyeye gidin",
      "Kira sözleşmesi ve pasaport gösterin",
      "Kayıt belgesi (Anmeldebestätigung) alın",
      "Vergi numarası (Steueridentifikationsnummer) alın"
    ],
    tip: "Bu belge banka hesabı açmak ve diğer işlemler için zorunludur."
  },
  {
    id: 8,
    title: "Yabancılar Dairesine Gidin",
    description: "Vizenizi oturum iznine dönüştürün.",
    icon: Building,
    details: [
      "Ausländerbehörde'ye randevu alın",
      "Tüm evrakları götürün",
      "Oturum kartı (Aufenthaltstitel) için başvurun",
      "Parmak izi ve fotoğraf verin"
    ],
    tip: "Randevu bulmak zor olabilir, online sistemleri takip edin."
  }
];

const costs = [
  { item: "Vize Ücreti", cost: "75-90€", note: "Nakit Euro olarak" },
  { item: "iDATA Randevu", cost: "~500-800₺", note: "Güncel fiyat için siteye bakın" },
  { item: "Seyahat Sigortası", cost: "50-150€", note: "30.000€ teminatlı" },
  { item: "Belge Çevirileri", cost: "50-150₺/adet", note: "Yeminli çevirmen" },
  { item: "Noter Onayları", cost: "50-100₺/adet", note: "Apostil dahil" },
  { item: "Dil Sınavı", cost: "500-1.500₺", note: "Goethe, TestDaF vb." },
  { item: "Bloke Hesap (öğrenciler)", cost: "11.904€", note: "Yıllık yaşam masrafı" }
];

export function ApplicationProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Başvuru Süreci
            </h1>
            <p className="text-xl text-blue-100">
              Almanya vizesi için adım adım başvuru rehberi. 
              Her aşamada yapmanız gerekenleri öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeStep === step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeStep === step.id ? 'bg-white text-blue-600' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step.id}
                </span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Step Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step) => (
            activeStep === step.id && (
              <div key={step.id} className="animate-in fade-in duration-300">
                <Card className="border-2 border-blue-100">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          Adım {step.id} / {steps.length}
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        Yapılacaklar
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-800">İpucu</p>
                          <p className="text-amber-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={() => setActiveStep(Math.max(1, step.id - 1))}
                        disabled={step.id === 1}
                      >
                        ← Önceki Adım
                      </Button>
                      <Button
                        onClick={() => setActiveStep(Math.min(steps.length, step.id + 1))}
                        disabled={step.id === steps.length}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Sonraki Adım →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Süreç Özeti
            </h2>
            <p className="text-lg text-gray-600">
              Tüm adımların hızlı görünümü.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={step.id} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="hidden md:block flex-1"></div>
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 flex-shrink-0">
                    {step.id}
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maliyetler
            </h2>
            <p className="text-lg text-gray-600">
              Başvuru sürecindeki tahmini maliyetler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {costs.map((cost, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{cost.item}</h4>
                    <span className="text-lg font-bold text-blue-600">{cost.cost}</span>
                  </div>
                  <p className="text-sm text-gray-500">{cost.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <div className="flex items-start gap-4">
              <Euro className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Toplam Tahmini Maliyet</h4>
                <p className="text-blue-800">
                  Vize türüne göre değişmekle birlikte, toplam maliyet 
                  <strong> 1.500-3.000€</strong> arasındadır (bloke hesap hariç). 
                  Öğrenci vizesi için bloke hesap (11.904€) eklenmelidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Önemli Bağlantılar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://idata.com.tr" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">iDATA</h4>
                      <p className="text-sm text-gray-500">Randevu alma</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://videx.diplo.de" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">VIDEX</h4>
                      <p className="text-sm text-gray-500">Online başvuru formu</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.make-it-in-germany.com" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Make it in Germany</h4>
                      <p className="text-sm text-gray-500">Resmi göç portalı</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Başvurunuza Başlamaya Hazır mısınız?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Tüm bilgileri edindiniz. Şimdi ilk adımı atın ve vize türünüzü seçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Vize Türlerini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
