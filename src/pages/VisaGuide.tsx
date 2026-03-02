import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  FileText, 
  Calendar, 
  Building,
  Plane,
  Home,
  Briefcase,
  AlertCircle,
  Clock,
  Users,
  GraduationCap,
  Search,
  Ticket,
  CreditCard,
  Baby,
  HeartHandshake,
  ClipboardList,
  Building2,
  Palette,
  CheckSquare,
  Wallet,
  BookOpen,
  Globe,
  Send,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { visaTypes } from '@/data/visaTypes';

const iconMap: Record<string, React.ElementType> = {
  Ticket, CreditCard, Briefcase, GraduationCap, Search, Baby, HeartHandshake, Plane,
  Users, ClipboardList, Building2, Palette
};

// Tüm vize türleri için adım verileri
const visaGuideData: Record<string, {
  title: string;
  description: string;
  totalSteps: number;
  steps: Array<{
    stepNum: number;
    title: string;
    description: string;
    icon: React.ElementType;
    content: {
      what: string;
      details: string[];
      tips: string[];
      docs: string[];
    };
  }>;
}> = {
  chancenkarte: {
    title: "Şans Kartı (Chancenkarte)",
    description: "Almanya'ya iş teklifi olmadan gidip iş arama fırsatı",
    totalSteps: 10,
    steps: [
      {
        stepNum: 1,
        title: "Puan Hesaplama",
        description: "Başvuru için yeterli puana sahip misiniz?",
        icon: CheckSquare,
        content: {
          what: "Şans Kartı için en az 6 puan toplamanız gerekir. Üniversite mezunları direkt başvuru hakkına sahiptir.",
          details: [
            "Üniversite diploması = DİREKT başvuru (puan gerekmez)",
            "Meslek lisesi mezunu = 6 puan toplamalı",
            "Dil: Almanca A1=1, B1=2, B2=3 puan / İngilizce B2=1 puan",
            "Deneyim: 5 yıl=3, 2 yıl=2 puan",
            "Yaş: 35 altı=2, 35-40=1 puan",
            "Eksik meslek listesi = +1 puan"
          ],
          tips: ["Goethe sınavı için erken kaydolun", "SGK dökümünüzü e-Devlet'ten alın"],
          docs: ["Diploma", "SGK Hizmet Dökümü", "Dil Sertifikası"]
        }
      },
      {
        stepNum: 2,
        title: "Dil Sertifikası",
        description: "Gerekli dil yeterliliğini kanıtlayın",
        icon: BookOpen,
        content: {
          what: "En az Almanca A1 veya İngilizce B2 seviye belgesi gereklidir.",
          details: [
            "Goethe-Zertifikat A1 veya üstü",
            "ÖSD, TELC sınavları da kabul edilir",
            "İngilizce için IELTS/TOEFL B2",
            "Sınav randevusu alın ve hazırlanın"
          ],
          tips: ["Online sınav seçenekleri mevcut", "A1 seviyesi 2-3 ayda tamamlanır"],
          docs: ["Goethe A1 Sertifikası", "veya İngilizce B2 Sertifikası"]
        }
      },
      {
        stepNum: 3,
        title: "Evrak Hazırlığı",
        description: "Tüm gerekli belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için gerekli tüm belgeleri eksiksiz hazırlayın.",
          details: [
            "Pasaport (10 yıldan eski olmamalı, 2 boş sayfa)",
            "2 adet biyometrik fotoğraf (35×45 mm, beyaz fon)",
            "Diploma ve transkript (noter onaylı + çeviri)",
            "Dil sertifikası",
            "SGK hizmet dökümü (deneyim için)",
            "Banka hesap dökümü (son 3 ay)",
            "Seyahat sağlık sigortası (30.000€)"
          ],
          tips: ["Tüm belgeleri çift dilde hazırlayın", "Eksik evrak ret nedeni olabilir"],
          docs: ["Pasaport", "Fotoğraf", "Diploma", "Dil Sertifikası", "Banka Dökümü", "Sigorta"]
        }
      },
      {
        stepNum: 4,
        title: "Mali Yeterlilik",
        description: "Almanya'da yaşayabileceğinizi kanıtlayın",
        icon: Wallet,
        content: {
          what: "Almanya'da yaşama masraflarınızı karşılayabileceğinizi gösterin.",
          details: [
            "Aylık ~1.000€ yaşam masrafı gösterilmeli",
            "Banka hesabınızda yeterli bakiye",
            "Bloke hesap açabilirsiniz (isteğe bağlı)",
            "12.000€+ göstermek güvenli olur"
          ],
          tips: ["Expatrio veya Fintiba kullanabilirsiniz", "Aile desteği de kabul edilir"],
          docs: ["Banka Hesap Dökümü", "Bloke Hesap (varsa)"]
        }
      },
      {
        stepNum: 5,
        title: "Randevu Alma",
        description: "iDATA üzerinden randevu alın",
        icon: Calendar,
        content: {
          what: "idata.com.tr üzerinden vize randevusu alın.",
          details: [
            "idata.com.tr adresine gidin",
            "'Nitelikli Göç Yasası (Chancenkarte)' seçin",
            "Uygun tarih ve saat seçin",
            "Randevu ücretini ödeyin (~500-800₺)"
          ],
          tips: ["Sabah erken saatlerde kontrol edin", "Ankara/İstanbul dışı merkezleri deneyin"],
          docs: ["Randevu Onayı"]
        }
      },
      {
        stepNum: 6,
        title: "Konsolosluk Başvurusu",
        description: "Vize başvurunuzu tamamlayın",
        icon: Building,
        content: {
          what: "Randevu günü eksiksiz evraklarınızla konsolosluğa gidin.",
          details: [
            "Randevu saatinden önce gelin",
            "Vize ücretini nakit Euro olarak ödeyin (75€)",
            "Parmak izi verin",
            "Kısa bir mülakat yapılabilir"
          ],
          tips: ["Sadece Euro kabul edilir", "Evrakları düzenli klasörde getirin"],
          docs: ["Tüm Evraklar", "75€ Nakit"]
        }
      },
      {
        stepNum: 7,
        title: "Sonuç Bekleme",
        description: "Başvurunuz değerlendiriliyor",
        icon: Clock,
        content: {
          what: "Başvurunuzun sonuçlanmasını bekleyin.",
          details: [
            "Ortalama işlem süresi: 4-12 hafta",
            "SMS/e-posta ile bilgilendirme",
            "Pasaportunuzu teslim alın"
          ],
          tips: ["Hızlandırılmış işlem sorun (ek ücretli)", "Sorgulama için aramayın"],
          docs: ["Pasaport (Vize Yapıştırılmış)"]
        }
      },
      {
        stepNum: 8,
        title: "Almanya'ya Gidiş",
        description: "Yolculuğunuzu planlayın",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi Almanya'ya gidebilirsiniz.",
          details: [
            "Uçak bileti alın",
            "Geçici konaklama ayarlayın",
            "Önemli belgelerin kopyalarını alın",
            "1.000-2.000€ nakit bulundurun"
          ],
          tips: ["Vize onayı sonrası uçak bileti alın", "Airbnb/otel rezervasyonu yapın"],
          docs: ["Vize Pasaportunuzda", "Konaklama Rezervasyonu"]
        }
      },
      {
        stepNum: 9,
        title: "Belediye Kaydı",
        description: "Almanya'da ikamet kaydınızı yapın",
        icon: Home,
        content: {
          what: "14 gün içinde belediyeye (Bürgeramt) kaydolun.",
          details: [
            "Bürgeramt'tan randevu alın",
            "Kira sözleşmesi ve pasaport gösterin",
            "Anmeldebestätigung (kayıt belgesi) alın",
            "Vergi numarası (Steuer-ID) alın"
          ],
          tips: ["Randevu almayı unutmayın", "Bu belge banka için zorunlu"],
          docs: ["Pasaport", "Kira Sözleşmesi"]
        }
      },
      {
        stepNum: 10,
        title: "Şans Kartınızı Alın",
        description: "Yabancılar dairesine gidin",
        icon: Building2,
        content: {
          what: "Ausländerbehörde'ye gidip Şans Kartınızı alın.",
          details: [
            "Ausländerbehörde'ye randevu alın",
            "Şans Kartı başvurusu yapın",
            "Parmak izi ve fotoğraf verin",
            "Elektronik oturum kartı (eAT) alın"
          ],
          tips: ["Randevu bulmak zor olabilir", "Online sistemleri takip edin"],
          docs: ["Pasaport", "Anmeldebestätigung", "Vize", "Fotoğraf"]
        }
      }
    ]
  },
  bluecard: {
    title: "Mavi Kart (EU Blue Card)",
    description: "Nitelikli çalışanlar için en hızlı kalıcı oturum yolu",
    totalSteps: 8,
    steps: [
      {
        stepNum: 1,
        title: "İş Teklifi Bulma",
        description: "Almanya'dan iş teklifi alın",
        icon: Briefcase,
        content: {
          what: "Almanya'dan iş teklifi almanız gerekiyor.",
          details: [
            "LinkedIn, Xing, StepStone'dan iş arayın",
            "Maaş şartı: Yıllık 48.300€ (normal) veya 43.760€ (eksik meslekler)",
            "IT uzmanları için diploma şartsız, 3 yıl deneyim yeterli"
          ],
          tips: ["İngilizce iş ilanlarına bakın", "Remote mülakatlar mümkün"],
          docs: ["CV (Almanca/İngilizce)", "Motivasyon Mektubu"]
        }
      },
      {
        stepNum: 2,
        title: "İş Sözleşmesi",
        description: "Resmi iş teklifi alın",
        icon: FileText,
        content: {
          what: "Alman şirketinden resmi iş teklifi alın.",
          details: [
            "Arbeitsvertrag (iş sözleşmesi) alın",
            "Maaş yıllık brüt 48.300€+ olmalı",
            "Pozisyon ve maaş net yazmalı"
          ],
          tips: ["Yıllık brüt olduğundan emin olun", "Sözleşmeyi dikkatle okuyun"],
          docs: ["İş Sözleşmesi (Arbeitsvertrag)"]
        }
      },
      {
        stepNum: 3,
        title: "Diploma Denkliği",
        description: "Diplomanızı tanıtın (gerekirse)",
        icon: GraduationCap,
        content: {
          what: "Üniversite diplomanızın Almanya'da tanınması gerekir.",
          details: [
            "ZAB üzerinden denklik başvurusu yapın",
            "IT uzmanları için denklik şartı yok (3 yıl deneyim yeterli)",
            "3-6 ay sürebilir"
          ],
          tips: ["Erken başvurun", "Kulturkultur.de üzerinden takip edin"],
          docs: ["Diploma Denklik Kararı"]
        }
      },
      {
        stepNum: 4,
        title: "Evrak Hazırlığı",
        description: "Tüm gerekli belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için tüm belgeleri hazırlayın.",
          details: [
            "Pasaport (10 yıldan eski olmamalı)",
            "2 biyometrik fotoğraf",
            "Diploma ve transkript (çeviri ile)",
            "İş sözleşmesi",
            "Diploma denklik kararı (varsa)",
            "Sağlık sigortası onayı"
          ],
          tips: ["Tüm belgeleri çeviri ile hazırlayın", "Eksik evrak ret nedeni"],
          docs: ["Pasaport", "Fotoğraf", "Diploma", "İş Sözleşmesi", "Sigorta"]
        }
      },
      {
        stepNum: 5,
        title: "Randevu Alma",
        description: "iDATA üzerinden randevu alın",
        icon: Calendar,
        content: {
          what: "iDATA üzerinden Mavi Kart randevusu alın.",
          details: [
            "idata.com.tr'ye gidin",
            "'Mavi Kart (Blue Card)' kategorisini seçin",
            "Randevu alın ve ücreti ödeyin"
          ],
          tips: ["Erken randevu alın", "İş başlangıç tarihini dikkate alın"],
          docs: ["Randevu Onayı"]
        }
      },
      {
        stepNum: 6,
        title: "Konsolosluk Başvurusu",
        description: "Vize başvurunuzu yapın",
        icon: Building,
        content: {
          what: "Konsolosluğa gidip başvurunuzu tamamlayın.",
          details: [
            "Evraklarınızla konsolosluğa gidin",
            "75€ vize ücretini ödeyin",
            "Parmak izi verin"
          ],
          tips: ["Euro olarak nakit getirin", "Randevu saatinden erken gidin"],
          docs: ["Tüm Evraklar", "75€ Nakit"]
        }
      },
      {
        stepNum: 7,
        title: "Sonuç ve Gidiş",
        description: "Vizenizi alıp Almanya'ya gidin",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi gidebilirsiniz.",
          details: [
            "4-8 hafta içinde sonuçlanır",
            "Pasaportunuzu teslim alın",
            "Almanya'ya gidin"
          ],
          tips: ["İş başlangıç tarihinden önce gidin", "Geçici konaklama ayarlayın"],
          docs: ["Vize Pasaportunuzda"]
        }
      },
      {
        stepNum: 8,
        title: "Mavi Kartınızı Alın",
        description: "Almanya'da Mavi Kart başvurusu yapın",
        icon: CreditCard,
        content: {
          what: "Ausländerbehörde'ye gidip Mavi Kartınızı alın.",
          details: [
            "Ausländerbehörde'ye randevu alın",
            "Mavi Kart başvurusu yapın",
            "Elektronik kartınızı alın"
          ],
          tips: ["Randevu almayı unutmayın", "İş sözleşmenizi yanınızda bulundurun"],
          docs: ["Pasaport", "İş Sözleşmesi", "Vize"]
        }
      }
    ]
  },
  familyreunion: {
    title: "Aile Birleşimi Vizesi",
    description: "Almanya'daki ailenizin yanına gidin",
    totalSteps: 8,
    steps: [
      {
        stepNum: 1,
        title: "Sponsorun Durumu",
        description: "Eşinizin/ailenizin durumunu kontrol edin",
        icon: Users,
        content: {
          what: "Eşinizin Almanya'daki durumu başvurunuz için kritik.",
          details: [
            "Eşiniz Almanya'da oturum iznine sahip olmalı",
            "Eşiniz sosyal yardım (Bürgergeld) almamalı",
            "Eşinizin yeterli geliri olmalı"
          ],
          tips: ["Eşinizin maaş bordrolarını isteyin", "Kira sözleşmesini kontrol edin"],
          docs: ["Eşin Oturum İzni", "Eşin Maaş Bordrosu"]
        }
      },
      {
        stepNum: 2,
        title: "Konut Kontrolü",
        description: "Yeterli konut alanı olduğundan emin olun",
        icon: Home,
        content: {
          what: "Almanya'da yeterli büyüklükte konut olmalı.",
          details: [
            "Yetişkin için en az 12 m², çocuk için 10 m²",
            "Kira sözleşmesi veya tapu gösterilmeli",
            "Wohnraumzustandsbericht gerekli olabilir"
          ],
          tips: ["Kira sözleşmesindeki metrekareyi kontrol edin", "Çocuk sayısına göre hesap yapın"],
          docs: ["Kira Sözleşmesi", "Konut Planı"]
        }
      },
      {
        stepNum: 3,
        title: "Almanca A1 Sertifikası",
        description: "Dil yeterliliğinizi kanıtlayın",
        icon: BookOpen,
        content: {
          what: "Eşler için Almanca A1 sertifikası zorunludur.",
          details: [
            "Goethe, ÖSD, TELC sınavları kabul edilir",
            "Üniversite mezunları ve bazı durumlar muaf",
            "A1 seviyesi temel düzeydir"
          ],
          tips: ["Online kurslarla 2-3 ayda hazırlanabilirsiniz", "Erken başvurun"],
          docs: ["Almanca A1 Sertifikası"]
        }
      },
      {
        stepNum: 4,
        title: "Evrak Hazırlığı",
        description: "Tüm belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için tüm belgeleri eksiksiz hazırlayın.",
          details: [
            "Pasaport",
            "Evlilik cüzdanı (aslı ve apostilli çeviri)",
            "Doğum belgeleri (çocuklar için)",
            "Almanca A1 sertifikası",
            "Sponsorun evrakları (oturum, maaş, kira)",
            "Seyahat sağlık sigortası"
          ],
          tips: ["Evlilik cüzdanınızın apostilli kopyasını alın", "Tüm belgeleri çevirttirin"],
          docs: ["Pasaport", "Evlilik Cüzdanı", "Doğum Belgeleri", "Dil Sertifikası", "Sigorta"]
        }
      },
      {
        stepNum: 5,
        title: "Online Başvuru",
        description: "Digital.diplo.de üzerinden başvurun",
        icon: Globe,
        content: {
          what: "Aile birleşimi artık online yapılabiliyor!",
          details: [
            "digital.diplo.de adresine gidin",
            "Hesap oluşturun ve formu doldurun",
            "Belgeleri yükleyin",
            "Başvuru ücretini ödeyin (75€)"
          ],
          tips: ["Formu dikkatle doldurun", "Tüm belgeleri PDF olarak hazırlayın"],
          docs: ["Dijital Başvuru Onayı"]
        }
      },
      {
        stepNum: 6,
        title: "Randevu ve Mülakat",
        description: "Konsolosluğa gidin",
        icon: Calendar,
        content: {
          what: "Online başvuru sonrası randevuya gidin.",
          details: [
            "Online başvuru sonrası randevu alın",
            "Evraklarınızı götürün",
            "Parmak izi verin"
          ],
          tips: ["Randevu için sabırlı olun", "Eksik evrak getirmeyin"],
          docs: ["Tüm Orijinal Evraklar"]
        }
      },
      {
        stepNum: 7,
        title: "Sonuç ve Gidiş",
        description: "Vizenizi alıp ailenize kavuşun",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi ailenize kavuşabilirsiniz.",
          details: [
            "8-12 hafta içinde sonuçlanır",
            "Pasaportunuzu teslim alın",
            "Almanya'ya gidin"
          ],
          tips: ["Süreç uzun olabilir, sabırlı olun", "Eşinizle iletişimi kesmeyin"],
          docs: ["Vize Pasaportunuzda"]
        }
      },
      {
        stepNum: 8,
        title: "Almanya'da Kayıt",
        description: "İkamet izninizi alın",
        icon: Building2,
        content: {
          what: "Almanya'da oturum izninizi alın.",
          details: [
            "14 gün içinde belediyeye kaydolun",
            "Yabancılar dairesine gidin",
            "Aile birleşimi oturum izninizi alın"
          ],
          tips: ["Randevu almayı unutmayın", "Eşiniz yanınızda olsun"],
          docs: ["Pasaport", "Vize", "Kira Sözleşmesi"]
        }
      }
    ]
  },
  studentvisa: {
    title: "Öğrenci Vizesi",
    description: "Almanya'da üniversite okuyun",
    totalSteps: 6,
    steps: [
      {
        stepNum: 1,
        title: "Üniversite Kabulü",
        description: "Alman üniversitesinden kabul alın",
        icon: GraduationCap,
        content: {
          what: "Alman üniversitesinden kabul mektubu almanız gerekiyor.",
          details: [
            "Üniversitelere başvurun",
            "Zulassungsbescheid (kabul mektubu) alın",
            "Dil şartını karşılayın (Almanca B1/B2 veya İngilizce)"
          ],
          tips: ["Uni-Assist üzerinden başvurun", "Erken başvurun (deadline'leri kaçırmayın)"],
          docs: ["Kabul Mektubu (Zulassung)"]
        }
      },
      {
        stepNum: 2,
        title: "Bloke Hesap Açma",
        description: "Finansal yeterliliğinizi kanıtlayın",
        icon: Wallet,
        content: {
          what: "Bloke hesap açmanız zorunludur.",
          details: [
            "Expatrio veya Fintiba üzerinden bloke hesap açın",
            "11.904€ yatırın (2025 yıllık limit)",
            "Hesap onayını alın"
          ],
          tips: ["Aylık 992€ çekim hakkınız olacak", "Hesap açma ücreti ~100-150€"],
          docs: ["Bloke Hesap Onayı"]
        }
      },
      {
        stepNum: 3,
        title: "Evrak Hazırlığı",
        description: "Tüm belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için tüm belgeleri hazırlayın.",
          details: [
            "Pasaport",
            "Biyometrik fotoğraf",
            "Üniversite kabul mektubu",
            "Bloke hesap onayı",
            "Dil sertifikası",
            "Motivasyon mektubu",
            "CV",
            "Sağlık sigortası"
          ],
          tips: ["Motivasyon mektubunu dikkatle yazın", "Tüm belgeleri çevirttirin"],
          docs: ["Pasaport", "Fotoğraf", "Kabul Mektubu", "Bloke Hesap", "Dil Sertifikası", "Motivasyon Mektubu", "CV", "Sigorta"]
        }
      },
      {
        stepNum: 4,
        title: "Randevu ve Başvuru",
        description: "iDATA üzerinden başvurun",
        icon: Calendar,
        content: {
          what: "iDATA üzerinden randevu alıp başvurun.",
          details: [
            "idata.com.tr'den randevu alın",
            "Evraklarınızı götürün",
            "75€ ücreti ödeyin"
          ],
          tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
          docs: ["Tüm Evraklar", "75€ Nakit"]
        }
      },
      {
        stepNum: 5,
        title: "Sonuç ve Gidiş",
        description: "Vizenizi alıp eğitime başlayın",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi eğitime başlayabilirsiniz.",
          details: [
            "6-12 hafta içinde sonuçlanır",
            "Pasaportunuzu teslim alın",
            "Almanya'ya gidin"
          ],
          tips: ["Okul başlangıç tarihinden önce gidin", "Konaklama ayarlayın"],
          docs: ["Vize Pasaportunuzda"]
        }
      },
      {
        stepNum: 6,
        title: "Almanya'da Kayıt",
        description: "Öğrenci kaydınızı yapın",
        icon: Building2,
        content: {
          what: "Almanya'da kayıtlarınızı tamamlayın.",
          details: [
            "Belediyeye kaydolun (Anmeldung)",
            "Üniversiteye kaydolun (Immatrikulation)",
            "Öğrenci oturum izni alın"
          ],
          tips: ["Öğrenci indirimlerinden yararlanın", "Banka hesabı açın"],
          docs: ["Pasaport", "Vize", "Kabul Mektubu", "Bloke Hesap"]
        }
      }
    ]
  },
  workvisa: {
    title: "Çalışma Vizesi",
    description: "Almanya'da çalışın",
    totalSteps: 6,
    steps: [
      {
        stepNum: 1,
        title: "İş Teklifi Bulma",
        description: "Almanya'dan iş teklifi alın",
        icon: Briefcase,
        content: {
          what: "Almanya'dan iş teklifi almanız gerekiyor.",
          details: [
            "LinkedIn, StepStone, Indeed'den iş arayın",
            "Almanca B1 seviye şartı olabilir",
            "Mesleki denklik gerekebilir"
          ],
          tips: ["Almanca CV hazırlayın", "Mülakatlara hazırlanın"],
          docs: ["CV (Almanca)", "Motivasyon Mektubu"]
        }
      },
      {
        stepNum: 2,
        title: "Mesleki Denklik",
        description: "Diplomanızı tanıtın (gerekirse)",
        icon: GraduationCap,
        content: {
          what: "Düzenlenmiş meslekler için denklik zorunlu.",
          details: [
            "Anerkennung in Deutschland üzerinden başvurun",
            "3-6 ay sürebilir",
            "ZAB veya eyalet kurumuna başvurun"
          ],
          tips: ["Erken başvurun", "Diplomanızı apostilleyin"],
          docs: ["Mesleki Denklik Kararı"]
        }
      },
      {
        stepNum: 3,
        title: "ZAV Onayı",
        description: "Federal İstihdam Ajansı onayı",
        icon: Building,
        content: {
          what: "İşvereniniz ZAV'dan onay almalı.",
          details: [
            "Federal İstihdam Ajansı'ndan onay gerekli",
            "Öncelikli işgücü kontrolü yapılır",
            "4-8 hafta sürebilir"
          ],
          tips: ["Bu süreci işvereniniz halleder", "Nitelikli göç yasası kapsamındaysanız onay gerekmez"],
          docs: ["ZAV Onayı (işverenden)"]
        }
      },
      {
        stepNum: 4,
        title: "Evrak Hazırlığı",
        description: "Tüm belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için tüm belgeleri hazırlayın.",
          details: [
            "Pasaport",
            "Fotoğraf",
            "İş sözleşmesi",
            "Diploma ve denklik (varsa)",
            "Dil sertifikası",
            "Sağlık sigortası"
          ],
          tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni"],
          docs: ["Pasaport", "Fotoğraf", "İş Sözleşmesi", "Diploma", "Sigorta"]
        }
      },
      {
        stepNum: 5,
        title: "Randevu ve Başvuru",
        description: "iDATA üzerinden başvurun",
        icon: Calendar,
        content: {
          what: "iDATA üzerinden randevu alıp başvurun.",
          details: [
            "idata.com.tr'den randevu alın",
            "Evraklarınızı götürün",
            "75€ ücreti ödeyin"
          ],
          tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
          docs: ["Tüm Evraklar", "75€ Nakit"]
        }
      },
      {
        stepNum: 6,
        title: "Sonuç ve Gidiş",
        description: "Vizenizi alıp işe başlayın",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi işe başlayabilirsiniz.",
          details: [
            "6-12 hafta içinde sonuçlanır",
            "Pasaportunuzu teslim alın",
            "Almanya'ya gidin"
          ],
          tips: ["İş başlangıç tarihinden önce gidin", "Konaklama ayarlayın"],
          docs: ["Vize Pasaportunuzda"]
        }
      }
    ]
  },
  tourist: {
    title: "Tourist Vizesi",
    description: "Almanya'yı keşfedin",
    totalSteps: 4,
    steps: [
      {
        stepNum: 1,
        title: "Seyahat Planı",
        description: "Seyahatinizi planlayın",
        icon: Plane,
        content: {
          what: "Seyahat detaylarınızı belirleyin.",
          details: [
            "Seyahat tarihlerinizi belirleyin",
            "Gideceğiniz şehirleri planlayın",
            "Konaklama ayarlayın"
          ],
          tips: ["90 günden fazla kalmayın", "Schengen kurallarına uyun"],
          docs: ["Seyahat Planı"]
        }
      },
      {
        stepNum: 2,
        title: "Evrak Hazırlığı",
        description: "Tüm belgeleri toplayın",
        icon: FileText,
        content: {
          what: "Başvuru için gerekli belgeleri hazırlayın.",
          details: [
            "Pasaport (10 yıldan eski olmamalı, 2 boş sayfa)",
            "Biyometrik fotoğraf",
            "Otel rezervasyonu",
            "Uçak rezervasyonu",
            "Seyahat sağlık sigortası (30.000€)",
            "Banka hesap dökümü"
          ],
          tips: ["Uçak biletinizi önceden almayın, rezervasyon yaptırın", "Sigorta Schengen kapsamlı olsun"],
          docs: ["Pasaport", "Fotoğraf", "Otel Rezervasyonu", "Uçak Rezervasyonu", "Sigorta", "Banka Dökümü"]
        }
      },
      {
        stepNum: 3,
        title: "Randevu ve Başvuru",
        description: "iDATA üzerinden başvurun",
        icon: Calendar,
        content: {
          what: "iDATA üzerinden randevu alıp başvurun.",
          details: [
            "idata.com.tr'den randevu alın",
            "Evraklarınızı götürün",
            "90€ ücreti ödeyin"
          ],
          tips: ["Yaz sezonunda erken randevu alın", "Eksik evrak getirmeyin"],
          docs: ["Tüm Evraklar", "90€ Nakit"]
        }
      },
      {
        stepNum: 4,
        title: "Sonuç ve Seyahat",
        description: "Vizenizi alıp seyahat edin",
        icon: Plane,
        content: {
          what: "Vizeniz onaylandı, şimdi seyahat edebilirsiniz.",
          details: [
            "15 gün içinde sonuçlanır",
            "Pasaportunuzu teslim alın",
            "Seyahatinizi yapın"
          ],
          tips: ["Vizenizin tarihlerine dikkat edin", "Schengen kurallarına uyun"],
          docs: ["Vize Pasaportunuzda"]
        }
      }
    ]
  }
};

// Varsayılan adımlar (diğer vizeler için)
const defaultSteps = [
  {
    stepNum: 1,
    title: "Vize Şartları",
    description: "Başvuru şartlarını kontrol edin",
    icon: CheckSquare,
    content: {
      what: "Bu vize türü için gerekli şartları öğrenin.",
      details: ["Vize sayfasını inceleyin", "Gerekli belgeleri öğrenin"],
      tips: ["Detaylı bilgi için vize sayfasına bakın"],
      docs: ["Pasaport", "Fotoğraf"]
    }
  },
  {
    stepNum: 2,
    title: "Evrak Hazırlığı",
    description: "Tüm belgeleri toplayın",
    icon: FileText,
    content: {
      what: "Başvuru için gerekli belgeleri hazırlayın.",
      details: ["Pasaport", "Fotoğraf", "Diğer belgeler"],
      tips: ["Tüm belgeleri çeviri ile hazırlayın"],
      docs: ["Pasaport", "Fotoğraf"]
    }
  },
  {
    stepNum: 3,
    title: "Randevu Alma",
    description: "iDATA üzerinden randevu alın",
    icon: Calendar,
    content: {
      what: "iDATA üzerinden randevu alın.",
      details: ["idata.com.tr'den randevu alın", "Ücreti ödeyin"],
      tips: ["Erken randevu alın"],
      docs: ["Randevu Onayı"]
    }
  },
  {
    stepNum: 4,
    title: "Başvuru",
    description: "Konsolosluğa başvurun",
    icon: Building,
    content: {
      what: "Konsolosluğa gidip başvurunuzu yapın.",
      details: ["Evraklarınızı götürün", "Parmak izi verin"],
      tips: ["Eksik evrak getirmeyin"],
      docs: ["Tüm Evraklar"]
    }
  },
  {
    stepNum: 5,
    title: "Sonuç",
    description: "Vizenizi alın",
    icon: CheckCircle,
    content: {
      what: "Sonucu bekleyin ve vizenizi alın.",
      details: ["Sonucu bekleyin", "Pasaportunuzu alın"],
      tips: ["Sabırlı olun"],
      docs: ["Vize Pasaportunuzda"]
    }
  }
];

// Ana sayfa - Giriş
function GuideIntro({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Plane className="h-5 w-5" />
            <span className="text-sm font-medium">Almanya'ya Yol</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Kişiselleştirilmiş
            <span className="block text-emerald-300 mt-2">Vize Rehberi</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hangi vize türüne başvuracağınızı seçin, size özel adım adım rehberlik edelim. 
            Her adımda ne yapmanız gerektiğini, hangi belgeleri hazırlamanız gerektiğini öğrenin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Vize Türü Seçin</h3>
              <p className="text-blue-100 text-sm">Size uygun vize türünü belirleyin</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Evrakları Hazırlayın</h3>
              <p className="text-blue-100 text-sm">Gerekli belgelerin listesini alın</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Başvurunuzu Tamamlayın</h3>
              <p className="text-blue-100 text-sm">Adım adım başvuru sürecini takip edin</p>
            </div>
          </div>

          <Button 
            onClick={onStart}
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-xl"
          >
            Rehberi Başlat
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Vize seçim sayfası
function VisaSelection({ onSelect }: { onSelect: (visaId: string) => void }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500">Adım 1</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vize Türünüzü Seçin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Başvuracağınız vize türüne tıklayın, size özel yol haritası oluşturacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visaTypes.map((visa) => {
            const Icon = iconMap[visa.icon] || Briefcase;
            return (
              <button
                key={visa.id}
                onClick={() => onSelect(visa.id)}
                className="group text-left bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${visa.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{visa.shortTitle}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{visa.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Devam Et</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Ana rehber bileşeni
export function VisaGuide() {
  const [step, setStep] = useState<'intro' | 'select' | 'guide'>('intro');
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // LocalStorage'dan kayıtlı ilerlemeyi oku
  useEffect(() => {
    const saved = localStorage.getItem('visaGuideProgress');
    if (saved) {
      const { visaId, stepIndex } = JSON.parse(saved);
      setSelectedVisa(visaId);
      setCurrentStep(stepIndex);
      setStep('guide');
    }
  }, []);

  // İlerlemeyi kaydet
  useEffect(() => {
    if (selectedVisa && step === 'guide') {
      localStorage.setItem('visaGuideProgress', JSON.stringify({
        visaId: selectedVisa,
        stepIndex: currentStep
      }));
    }
  }, [selectedVisa, currentStep, step]);

  const handleVisaSelect = (visaId: string) => {
    setSelectedVisa(visaId);
    setCurrentStep(0);
    setStep('guide');
  };

  const handleNext = () => {
    const guideData = selectedVisa ? (visaGuideData[selectedVisa] || { steps: defaultSteps }) : { steps: defaultSteps };
    if (currentStep < guideData.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('visaGuideProgress');
    setSelectedVisa(null);
    setCurrentStep(0);
    setStep('intro');
  };

  // Giriş ekranı
  if (step === 'intro') {
    return <GuideIntro onStart={() => setStep('select')} />;
  }

  // Vize seçim ekranı
  if (step === 'select') {
    return <VisaSelection onSelect={handleVisaSelect} />;
  }

  // Rehber ekranı
  const guideData = selectedVisa ? (visaGuideData[selectedVisa] || { 
    title: "Vize Rehberi", 
    description: "", 
    totalSteps: defaultSteps.length,
    steps: defaultSteps 
  }) : { 
    title: "Vize Rehberi", 
    description: "", 
    totalSteps: defaultSteps.length,
    steps: defaultSteps 
  };

  const currentStepData = guideData.steps[currentStep];
  const progress = ((currentStep + 1) / guideData.totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleReset}
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Başa Dön
            </button>
            <div className="text-right">
              <p className="text-sm text-blue-200">{guideData.title}</p>
              <p className="text-lg font-semibold">Adım {currentStep + 1} / {guideData.totalSteps}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
              %{Math.round(progress)}
            </span>
            <div className="flex-1">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center">
                  <currentStepData.icon className="h-7 w-7" />
                </div>
                <div>
                  <Badge className="mb-2 bg-blue-500">Adım {currentStep + 1}</Badge>
                  <CardTitle className="text-2xl">{currentStepData.title}</CardTitle>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{currentStepData.description}</p>
            </CardHeader>
            
            <CardContent className="p-6 space-y-6">
              {/* What */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Bu Adımda Ne Yapacaksınız?</h4>
                <p className="text-gray-700">{currentStepData.content.what}</p>
              </div>

              {/* Details */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  Yapılacaklar
                </h4>
                <ul className="space-y-2">
                  {currentStepData.content.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              {currentStepData.content.tips.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    İpuçları
                  </h4>
                  <ul className="space-y-1">
                    {currentStepData.content.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-amber-700">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Required Documents */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  Gerekli Belgeler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentStepData.content.docs.map((doc, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                      {doc}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Önceki Adım
            </Button>

            {currentStep === guideData.totalSteps - 1 ? (
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Tamamlandı
                </Button>
                <Link to="/iletisim">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Bize Ulaşın
                  </Button>
                </Link>
              </div>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                Sonraki Adım
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
