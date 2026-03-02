import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  XCircle, 
  FileX, 
  ShieldAlert,
  Languages,
  Briefcase,
  Wallet,
  Clock,
  Instagram,
  Camera,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Gavel,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const rejectionReasons = [
  {
    category: "Dil Yetersizliği",
    icon: Languages,
    color: "bg-amber-500",
    description: "Almanca veya İngilizce yeterliliği olmayanlar için süreç zordur.",
    details: [
      {
        title: "Şans Kartı için en az A1 gerekli",
        description: "Almanca A1 seviye (temel) bilmeden Şans Kartı başvurusu yapılamaz."
      },
      {
        title: "Aile Birleşimi için A1 zorunlu",
        description: "Eşler için Almanca A1 sertifikası zorunludur. Üniversite mezunları muaf."
      },
      {
        title: "Çalışma vizelerinde B1 önerilir",
        description: "Almanca B1 seviye iş bulmayı kolaylaştırır."
      }
    ],
    solutions: [
      "Goethe, ÖSD veya TELC sınavlarına girin",
      "Online Almanca kursları alın (2-3 ayda A1 tamamlanabilir)",
      "IT sektöründe İngilizce ile başlayabilirsiniz (Mavi Kart)"
    ]
  },
  {
    category: "Mesleki Eksiklik",
    icon: Briefcase,
    color: "bg-blue-500",
    description: "Belirli bir mesleği veya eğitimi olmayanlar için seçenekler sınırlıdır.",
    details: [
      {
        title: "Şans Kartı için diploma veya deneyim gerekli",
        description: "Üniversite veya meslek lisesi diploması, veya 6 puan toplamanız gerekli."
      },
      {
        title: "Mavi Kart için üniversite şartı",
        description: "IT hariç, Mavi Kart için üniversite diploması gerekir."
      },
      {
        title: "Mesleki denklik zorunluluğu",
        description: "Doktor, hemşire, mühendis gibi mesleklerde denklik zorunludur."
      }
    ],
    solutions: [
      "Mesleki kurslar ve sertifikalar alın",
      "IT sektörüne yönelin (diplomasız Mavi Kart mümkün)",
      "Öğrenci vizesi ile Almanya'da eğitim alın"
    ]
  },
  {
    category: "Mali Yetersizlik",
    icon: Wallet,
    color: "bg-red-500",
    description: "Yeterli mali kaynağı olmayanlar vize almakta zorlanır.",
    details: [
      {
        title: "Öğrenci vizesi için 11.904€ bloke hesap",
        description: "Yıllık 11.904€ bloke hesap açmanız zorunludur."
      },
      {
        title: "Şans Kartı için aylık 1.000€ gösterme",
        description: "Almanya'da yaşama masraflarınızı karşılayabileceğinizi kanıtlamanız gerekir."
      },
      {
        title: "Aile birleşiminde sponsor geliri",
        description: "Eşinizin sosyal yardım almaması ve yeterli geliri olması gerekir."
      }
    ],
    solutions: [
      "Burs başvuruları yapın (DAAD, Erasmus)",
      "İş teklifi alın (işveren mali destek sağlar)",
      "Aile desteği gösterin"
    ]
  },
  {
    category: "Sabıka Kaydı",
    icon: Gavel,
    color: "bg-purple-600",
    description: "Ciddi suç kaydı olanların vize başvurusu reddedilebilir.",
    details: [
      {
        title: "Adli sicil kaydı (Sabıka kaydı)",
        description: "Ciddi suçlar (şiddet, uyuşturucu, dolandırıcılık) vize almanızı engelleyebilir."
      },
      {
        title: "Terör bağlantıları",
        description: "Terör örgütleriyle bağlantı kesin red sebebidir."
      },
      {
        title: "Önceki vize ihlalleri",
        description: "Schengen vizesini ihlal etmişseniz (overstay) yeni vize almanız zorlaşır."
      }
    ],
    solutions: [
      "Sabıka kaydınızı temizleyin (affa uğrayan suçlar)",
      "Avukat danışmanlığı alın",
      "Dürüst olun, belgeleri eksiksiz sunun"
    ]
  },
  {
    category: "Sosyal Medya İncelemesi",
    icon: Instagram,
    color: "bg-pink-500",
    description: "Sosyal medya paylaşımlarınız vize değerlendirmesine girebilir.",
    details: [
      {
        title: "Şüpheli içerikler",
        description: "Terör propagandası, nefret söylemi, şiddet içerikli paylaşımlar red sebebidir."
      },
      {
        title: "Silahlı fotoğraflar",
        description: "Silah veya şiddet içerikli fotoğraflar güvenlik riski olarak değerlendirilir."
      },
      {
        title: "Sahte bilgiler",
        description: "Sosyal medyada sahte kimlik veya bilgi paylaşımı red sebebidir."
      }
    ],
    solutions: [
      "Sosyal medya hesaplarınızı gözden geçirin",
      "Şüpheli içerikleri kaldırın",
      "Gizlilik ayarlarınızı kontrol edin"
    ]
  },
  {
    category: "Sağlık Sorunları",
    icon: ShieldAlert,
    color: "bg-emerald-500",
    description: "Bulaşıcı hastalıklar ve ağır sağlık sorunları vizeyi etkileyebilir.",
    details: [
      {
        title: "Bulaşıcı hastalıklar",
        description: "Tüberküloz gibi bulaşıcı hastalıklar vize almanızı engelleyebilir."
      },
      {
        title: "Ağır sağlık sorunları",
        description: "Sosyal güvenlik sistemine aşırı yük getirecek sağlık sorunları red sebebi olabilir."
      }
    ],
    solutions: [
      "Sağlık kontrolünden geçin",
      "Seyahat sağlık sigortası yaptırın",
      "Tedavi belgelerinizi hazırlayın"
    ]
  },
  {
    category: "Eksik veya Sahte Evrak",
    icon: FileX,
    color: "bg-orange-500",
    description: "Eksik veya sahte belgeler en yaygın red sebeplerindendir.",
    details: [
      {
        title: "Eksik evrak",
        description: "Tüm gerekli belgeleri eksiksiz sunmazsanız başvurunuz reddedilir."
      },
      {
        title: "Sahte belgeler",
        description: "Sahte diploma, sahte banka dökümü gibi belgeler kesin red ve yasal işlem sebebidir."
      },
      {
        title: "Güncel olmayan belgeler",
        description: "Eski tarihli belgeler (3 aydan eski banka dökümü vb.) kabul edilmez."
      }
    ],
    solutions: [
      "Evrak listesini dikkatle takip edin",
      "Tüm belgelerin güncel olduğundan emin olun",
      "Yeminli çevirmen kullanın"
    ]
  }
];

const difficultCases = [
  {
    title: "50+ Yaş",
    description: "45 yaş üstü için serbest meslek vizesinde emeklilik planı gerekir. Mavi Kart ve çalışma vizeleri yaş sınırı yoktur.",
    icon: Clock
  },
  {
    title: "Dil Bilmeyenler",
    description: "Almanca bilmeyenler için IT sektörü (İngilizce) veya turist vizesi seçenekleri vardır.",
    icon: Languages
  },
  {
    title: "Mesleksizler",
    description: "Belirli bir mesleği olmayanlar için öğrenci vizesi, Au Pair veya FSJ seçenekleri değerlendirilebilir.",
    icon: Briefcase
  },
  {
    title: "Düşük Gelirliler",
    description: "Burs imkanları, iş teklifi almak veya aile desteği ile vize alınabilir.",
    icon: Wallet
  }
];

export function KimlerGelemez() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-800 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-medium">Önemli Bilgilendirme</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kimler Gelemez?
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Vize başvurusu reddedilebilecek durumlar ve yaygın red sebepleri. 
            Bu bilgileri dikkate alarak başvurunuzu hazırlayın.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-amber-300 bg-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Önemli Uyarı</AlertTitle>
            <AlertDescription className="text-amber-700">
              Bu sayfada belirtilen durumlar kesin red sebebi değildir. Her başvuru bireysel olarak değerlendirilir. 
              Şüpeleriniz varsa bir göçmenlik danışmanından veya avukattan yardım almanız önerilir.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Rejection Reasons */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Yaygın Red Sebepleri
            </h2>
            <p className="text-lg text-gray-600">
              Vize başvurusu reddedilebilecek yaygın durumlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rejectionReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <Card key={idx} className="border-2 border-gray-100 hover:border-gray-200 transition-colors">
                  <CardHeader className={`${reason.color} text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{reason.category}</CardTitle>
                    </div>
                    <p className="text-white/90 mt-2">{reason.description}</p>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        Red Sebepleri
                      </h4>
                      <ul className="space-y-2">
                        {reason.details.map((detail, dIdx) => (
                          <li key={dIdx} className="bg-gray-50 rounded-lg p-3">
                            <p className="font-medium text-gray-900">{detail.title}</p>
                            <p className="text-sm text-gray-600">{detail.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Çözüm Önerileri
                      </h4>
                      <ul className="space-y-1">
                        {reason.solutions.map((solution, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-emerald-700 text-sm">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{solution}</span>
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

      {/* Difficult Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zor Durumdakiler İçin Alternatifler
            </h2>
            <p className="text-lg text-gray-600">
              Bazı durumlar vize almayı zorlaştırabilir, ancak imkansız değildir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {difficultCases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Warning */}
      <section className="py-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Instagram className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Sosyal Medya Uyarısı
            </h2>
            <p className="text-lg text-white/90">
              Konsolosluklar sosyal medya hesaplarınızı inceleyebilir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Riskli İçerikler
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Silahlı fotoğraflar</li>
                  <li>• Şiddet içerikli paylaşımlar</li>
                  <li>• Uyuşturucu ile ilgili gönderiler</li>
                  <li>• Terör propagandası</li>
                  <li>• Nefret söylemi</li>
                  <li>• Sahte bilgiler</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Yapmanız Gerekenler
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Sosyal medya hesaplarınızı gözden geçirin</li>
                  <li>• Şüpheli içerikleri kaldırın</li>
                  <li>• Gizlilik ayarlarınızı kontrol edin</li>
                  <li>• Profesyonel bir görünüm sağlayın</li>
                  <li>• LinkedIn profilinizi güncelleyin</li>
                  <li>• Olumlu içerikler paylaşın</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Red Almamak İçin İpuçları
            </h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Eksiksiz Evrak</h3>
                  <p className="text-gray-600">Tüm gerekli belgeleri eksiksiz ve güncel olarak hazırlayın. Eksik evrak en yaygın red sebebidir.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dil Öğrenin</h3>
                  <p className="text-gray-600">En az temel düzeyde Almanca öğrenin. A1 seviye birçok vize için yeterlidir.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dürüst Olun</h3>
                  <p className="text-gray-600">Başvurunuzda dürüst olun. Sahte bilgi veya belge kesin red ve yasal işlem sebebidir.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Profesyonel Yardım</h3>
                  <p className="text-gray-600">Karmaşık durumlarda göçmenlik danışmanı veya avukattan yardım alın.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
Size Uygun Vizeyi Bulun
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Hangi vize türü size uygun öğrenmek için vize bulucuyu kullanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-bulucu">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Vize Bulucuyu Kullan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Tüm Vize Türleri
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
