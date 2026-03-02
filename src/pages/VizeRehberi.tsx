import { useState } from 'react';
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
  Globe,
  CheckSquare,
  Wallet,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { visaTypes } from '@/data/visaTypes';

const iconMap: Record<string, React.ElementType> = {
  Ticket,
  CreditCard,
  Briefcase,
  GraduationCap,
  Search,
  Baby,
  HeartHandshake,
  Plane,
  Users,
  ClipboardList,
  Building2,
  Palette
};

// Her vize türüne özel adımlar
const visaSteps: Record<string, Array<{
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  tips: string[];
  docs: string[];
}>> = {
  chancenkarte: [
    {
      id: 1,
      title: "Puan Hesaplama",
      description: "Şans Kartı için yeterli puana sahip misiniz?",
      icon: CheckSquare,
      details: [
        "Üniversite mezunuysanız: DİREKT başvuru hakkınız var (puan gerekmez)",
        "Meslek lisesi mezunuysanız: 6 puan toplamanız gerekir",
        "Puan hesaplama: Dil (3 puan) + Deneyim (3 puan) + Yaş (2 puan) + Diğerleri"
      ],
      tips: ["Almanca A1 = 1 puan, B1 = 2 puan, B2 = 3 puan", "İngilizce B2 = 1 puan"],
      docs: ["Diploma", "SGK hizmet dökümü (deneyim için)", "Dil sertifikası"]
    },
    {
      id: 2,
      title: "Dil Sertifikası",
      description: "Gerekli dil yeterliliğini kanıtlayın",
      icon: BookOpen,
      details: [
        "En az Almanca A1 veya İngilizce B2 seviye belgesi gerekli",
        "Goethe-Zertifikat, ÖSD, TELC kabul edilir",
        "Sınav randevusu alın ve sertifikanızı alın"
      ],
      tips: ["Goethe sınavları için erken randevu alın", "Online sınav seçenekleri mevcut"],
      docs: ["Goethe A1 veya İngilizce B2 sertifikası"]
    },
    {
      id: 3,
      title: "Evrak Hazırlığı",
      description: "Tüm gerekli belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport (10 yıldan eski olmamalı)",
        "2 adet biyometrik fotoğraf (35×45 mm)",
        "Diploma ve transkript (çeviri ile)",
        "Dil sertifikası",
        "SGK hizmet dökümü (deneyim için)",
        "Banka hesap dökümü (son 3 ay)",
        "Seyahat sağlık sigortası"
      ],
      tips: ["Tüm belgelerin noter onaylı Türkçe ve Almanca/İngilizce çevirisi olsun", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Diploma", "Dil sertifikası", "Banka dökümü", "Sigorta"]
    },
    {
      id: 4,
      title: "Mali Yeterlilik",
      description: "Almanya'da yaşayabileceğinizi kanıtlayın",
      icon: Wallet,
      details: [
        "Aylık ~1.000€ yaşam masrafı gösterilmeli",
        "Banka hesabınızda yeterli bakiye olmalı",
        "Bloke hesap açabilirsiniz (isteğe bağlı ama güvenli)"
      ],
      tips: ["12.000€+ göstermek güvenli olur", "Bloke hesap için Expatrio veya Fintiba kullanabilirsiniz"],
      docs: ["Banka hesap dökümü (son 3 ay)", "Bloke hesap onayı (varsa)"]
    },
    {
      id: 5,
      title: "Randevu Alma",
      description: "iDATA üzerinden randevu alın",
      icon: Calendar,
      details: [
        "idata.com.tr adresine gidin",
        "'Nitelikli Göç Yasası (Chancenkarte)' kategorisini seçin",
        "Uygun tarih ve saat seçin",
        "Randevu ücretini ödeyin"
      ],
      tips: ["Randevu bulmak zor olabilir, sabah erken saatlerde kontrol edin", "İstanbul ve Ankara dışındaki merkezleri de deneyin"],
      docs: ["Randevu onayı"]
    },
    {
      id: 6,
      title: "Konsolosluk Başvurusu",
      description: "Vize başvurunuzu tamamlayın",
      icon: Building,
      details: [
        "Randevu günü eksiksiz evraklarınızla gidin",
        "Vize ücretini nakit Euro olarak ödeyin (75€)",
        "Parmak izi verin",
        "Kısa bir mülakat yapılabilir"
      ],
      tips: ["Sadece Euro kabul edilir, Türk Lirası kabul edilmez", "Evrakları düzenli bir klasörde getirin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 7,
      title: "Sonuç Bekleme",
      description: "Başvurunuz değerlendiriliyor",
      icon: Clock,
      details: [
        "Ortalama işlem süresi: 4-12 hafta",
        "SMS/e-posta ile bilgilendirme alırsınız",
        "Pasaportunuzu teslim alın"
      ],
      tips: ["Acele ediyorsanız 'hızlandırılmış işlem' sorun (ek ücretli)", "Sorgulama için iDATA'yı aramayın, bekleyin"],
      docs: ["Pasaport (vize yapıştırılmış)"]
    },
    {
      id: 8,
      title: "Almanya'ya Gidiş",
      description: "Yolculuğunuzu planlayın",
      icon: Plane,
      details: [
        "Uçak bileti alın",
        "Geçici konaklama ayarlayın (Airbnb, otel vb.)",
        "Önemli belgelerin kopyalarını alın",
        "Yeterli Euro bulundurun"
      ],
      tips: ["İlk günler için 1.000-2.000€ nakit bulundurun", "Uçak biletinizi önceden almayın, vize onayı sonrası alın"],
      docs: ["Vize pasaportunuzda", "Konaklama rezervasyonu"]
    },
    {
      id: 9,
      title: "Belediye Kaydı (Anmeldung)",
      description: "Almanya'da ikamet kaydınızı yapın",
      icon: Home,
      details: [
        "14 gün içinde belediyeye (Bürgeramt) gidin",
        "Kira sözleşmesi ve pasaport gösterin",
        "Kayıt belgesi (Anmeldebestätigung) alın",
        "Vergi numarası (Steueridentifikationsnummer) alın"
      ],
      tips: ["Randevu almayı unutmayın", "Bu belge banka hesabı açmak için zorunludur"],
      docs: ["Pasaport", "Kira sözleşmesi"]
    },
    {
      id: 10,
      title: "Yabancılar Dairesi",
      description: "Şans Kartınızı alın",
      icon: Building2,
      details: [
        "Ausländerbehörde'ye randevu alın",
        "Şans Kartı başvurunuzu yapın",
        "Parmak izi ve fotoğraf verin",
        "Elektronik oturum kartınızı (eAT) alın"
      ],
      tips: ["Randevu bulmak zor olabilir, sabırlı olun", "Online randevu sistemini takip edin"],
      docs: ["Pasaport", "Anmeldebestätigung", "Vize", "Fotoğraf"]
    },
    {
      id: 11,
      title: "İş Arama",
      description: "Almanya'da iş aramaya başlayın",
      icon: Search,
      details: [
        "LinkedIn, Xing, StepStone gibi sitelerden iş arayın",
        "Haftada 20 saat part-time çalışabilirsiniz",
        "İş bulunca çalışma iznine geçiş yapabilirsiniz"
      ],
      tips: ["Almanca CV hazırlayın", "Network yapın, fuarlara katılın"],
      docs: ["CV (Almanca)", "Motivasyon mektubu"]
    }
  ],
  bluecard: [
    {
      id: 1,
      title: "İş Teklifi Bulma",
      description: "Almanya'dan iş teklifi alın",
      icon: Briefcase,
      details: [
        "LinkedIn, Xing, StepStone'dan iş arayın",
        "Maaş şartı: Yıllık 48.300€ (normal) veya 43.760€ (eksik meslekler)",
        "IT uzmanları için diploma şartsız, 3 yıl deneyim yeterli"
      ],
      tips: ["İngilizce iş ilanlarına bakın", "Remote mülakatlar mümkün"],
      docs: ["CV (Almanca/İngilizce)", "Motivasyon mektubu"]
    },
    {
      id: 2,
      title: "İş Sözleşmesi",
      description: "Resmi iş teklifi alın",
      icon: FileText,
      details: [
        "Alman şirketinden resmi iş teklifi (Arbeitsvertrag) alın",
        "Maaşın brüt yıllık 48.300€+ olduğundan emin olun",
        "Sözleşmede pozisyonunuz ve maaşınız net yazmalı"
      ],
      tips: ["Maaşın yıllık brüt olduğundan emin olun", "Sözleşmeyi dikkatle okuyun"],
      docs: ["İş sözleşmesi (Arbeitsvertrag)"]
    },
    {
      id: 3,
      title: "Diploma Denkliği",
      description: "Diplomanızı tanıtın (gerekirse)",
      icon: GraduationCap,
      details: [
        "Üniversite diplomanızın Almanya'da tanınması gerekir",
        "ZAB üzerinden denklik başvurusu yapın",
        "IT uzmanları için denklik şartı yoktur (3 yıl deneyim yeterli)"
      ],
      tips: ["Denklik başvurusu 3-6 ay sürebilir", "Erken başvurun"],
      docs: ["Diploma denklik kararı (varsa)"]
    },
    {
      id: 4,
      title: "Evrak Hazırlığı",
      description: "Tüm gerekli belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport (10 yıldan eski olmamalı)",
        "2 adet biyometrik fotoğraf",
        "Diploma ve transkript (çeviri ile)",
        "İş sözleşmesi",
        "Diploma denklik kararı (varsa)",
        "Sağlık sigortası onayı"
      ],
      tips: ["Tüm belgelerin çevirisi olsun", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Diploma", "İş sözleşmesi", "Sigorta"]
    },
    {
      id: 5,
      title: "Randevu Alma",
      description: "iDATA üzerinden randevu alın",
      icon: Calendar,
      details: [
        "idata.com.tr adresine gidin",
        "'Mavi Kart (Blue Card)' kategorisini seçin",
        "Randevu alın ve ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "İş başlangıç tarihini dikkate alın"],
      docs: ["Randevu onayı"]
    },
    {
      id: 6,
      title: "Konsolosluk Başvurusu",
      description: "Vize başvurunuzu yapın",
      icon: Building,
      details: [
        "Evraklarınızla konsolosluğa gidin",
        "75€ vize ücretini ödeyin",
        "Parmak izi verin"
      ],
      tips: ["Euro olarak nakit getirin", "Randevu saatinden erken gidin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 7,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp Almanya'ya gidin",
      icon: Plane,
      details: [
        "4-8 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin"
      ],
      tips: ["İş başlangıç tarihinden önce gidin", "Geçici konaklama ayarlayın"],
      docs: ["Vize pasaportunuzda"]
    },
    {
      id: 8,
      title: "Mavi Kartınızı Alın",
      description: "Almanya'da Mavi Kart başvurusu yapın",
      icon: CreditCard,
      details: [
        "Ausländerbehörde'ye gidin",
        "Mavi Kart başvurunuzu yapın",
        "Elektronik kartınızı alın"
      ],
      tips: ["Randevu almayı unutmayın", "İş sözleşmenizi yanınızda bulundurun"],
      docs: ["Pasaport", "İş sözleşmesi", "Vize"]
    }
  ],
  familyreunion: [
    {
      id: 1,
      title: "Sponsorun Durumu",
      description: "Eşinizin/ailenizin Almanya'daki durumunu kontrol edin",
      icon: Users,
      details: [
        "Eşiniz Almanya'da oturum iznine sahip olmalı",
        "Eşiniz sosyal yardım (Bürgergeld) almamalı",
        "Eşinizin yeterli geliri olmalı"
      ],
      tips: ["Eşinizin maaş bordrolarını isteyin", "Kira sözleşmesini kontrol edin"],
      docs: ["Eşin oturum izni kopyası", "Eşin maaş bordrosu"]
    },
    {
      id: 2,
      title: "Konut Kontrolü",
      description: "Yeterli konut alanı olduğundan emin olun",
      icon: Home,
      details: [
        "Yetişkin için en az 12 m², çocuk için 10 m² gerekli",
        "Kira sözleşmesi veya tapu gösterilmeli",
        "Konut uygunluk raporu (Wohnraumzustandsbericht) gerekli olabilir"
      ],
      tips: ["Kira sözleşmesindeki metrekareyi kontrol edin", "Çocuk sayısına göre hesap yapın"],
      docs: ["Kira sözleşmesi", "Konut planı"]
    },
    {
      id: 3,
      title: "Almanca A1 Sertifikası",
      description: "Dil yeterliliğinizi kanıtlayın",
      icon: BookOpen,
      details: [
        "Eşler için Almanca A1 sertifikası zorunlu",
        "Goethe, ÖSD, TELC sınavları kabul edilir",
        "Üniversite mezunları ve bazı durumlar muaf"
      ],
      tips: ["A1 seviyesi temel düzeydir", "Online kurslarla 2-3 ayda hazırlanabilirsiniz"],
      docs: ["Almanca A1 sertifikası"]
    },
    {
      id: 4,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Evlilik cüzdanı (aslı ve çeviri)",
        "Doğum belgeleri (çocuklar için)",
        "Almanca A1 sertifikası",
        "Sponsorun evrakları (oturum, maaş, kira)",
        "Seyahat sağlık sigortası"
      ],
      tips: ["Evlilik cüzdanınızın apostilli kopyasını alın", "Tüm belgeleri çevirttirin"],
      docs: ["Pasaport", "Evlilik cüzdanı", "Doğum belgeleri", "Dil sertifikası", "Sigorta"]
    },
    {
      id: 5,
      title: "Online Başvuru",
      description: "Digital.diplo.de üzerinden başvurun",
      icon: Globe,
      details: [
        "digital.diplo.de adresine gidin",
        "Hesap oluşturun ve formu doldurun",
        "Belgeleri yükleyin",
        "Başvuru ücretini ödeyin (75€)"
      ],
      tips: ["Formu dikkatle doldurun", "Tüm belgeleri PDF olarak hazırlayın"],
      docs: ["Dijital başvuru onayı"]
    },
    {
      id: 6,
      title: "Randevu ve Mülakat",
      description: "Konsolosluğa gidin",
      icon: Calendar,
      details: [
        "Online başvuru sonrası randevu alın",
        "Evraklarınızı götürün",
        "Parmak izi verin"
      ],
      tips: ["Randevu için sabırlı olun", "Eksik evrak getirmeyin"],
      docs: ["Tüm orijinal evraklar"]
    },
    {
      id: 7,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp ailenize kavuşun",
      icon: Plane,
      details: [
        "8-12 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin"
      ],
      tips: ["Süreç uzun olabilir, sabırlı olun", "Eşinizle iletişimi kesmeyin"],
      docs: ["Vize pasaportunuzda"]
    },
    {
      id: 8,
      title: "Almanya'da Kayıt",
      description: "İkamet izninizi alın",
      icon: Building2,
      details: [
        "14 gün içinde belediyeye kaydolun",
        "Yabancılar dairesine gidin",
        "Aile birleşimi oturum izninizi alın"
      ],
      tips: ["Randevu almayı unutmayın", "Eşiniz yanınızda olsun"],
      docs: ["Pasaport", "Vize", "Kira sözleşmesi"]
    }
  ],
  studentvisa: [
    {
      id: 1,
      title: "Üniversite Kabulü",
      description: "Alman üniversitesinden kabul alın",
      icon: GraduationCap,
      details: [
        "Üniversitelere başvurun",
        "Zulassungsbescheid (kabul mektubu) alın",
        "Dil şartını karşılayın (Almanca B1/B2 veya İngilizce)"
      ],
      tips: ["Uni-Assist üzerinden başvurun", "Erken başvurun (deadline'leri kaçırmayın)"],
      docs: ["Kabul mektubu (Zulassung)"]
    },
    {
      id: 2,
      title: "Bloke Hesap Açma",
      description: "Finansal yeterliliğinizi kanıtlayın",
      icon: Wallet,
      details: [
        "Expatrio veya Fintiba üzerinden bloke hesap açın",
        "11.904€ yatırın (2025 yıllık limit)",
        "Hesap onayını alın"
      ],
      tips: ["Aylık 992€ çekim hakkınız olacak", "Hesap açma ücreti ~100-150€"],
      docs: ["Bloke hesap onayı"]
    },
    {
      id: 3,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
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
      docs: ["Pasaport", "Fotoğraf", "Kabul mektubu", "Bloke hesap", "Dil sertifikası", "Motivasyon mektubu", "CV", "Sigorta"]
    },
    {
      id: 4,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 5,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp eğitime başlayın",
      icon: Plane,
      details: [
        "6-12 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin"
      ],
      tips: ["Okul başlangıç tarihinden önce gidin", "Konaklama ayarlayın"],
      docs: ["Vize pasaportunuzda"]
    },
    {
      id: 6,
      title: "Almanya'da Kayıt",
      description: "Öğrenci kaydınızı yapın",
      icon: Building2,
      details: [
        "Belediyeye kaydolun (Anmeldung)",
        "Üniversiteye kaydolun (Immatrikulation)",
        "Öğrenci oturum izni alın"
      ],
      tips: ["Öğrenci indirimlerinden yararlanın", "Banka hesabı açın"],
      docs: ["Pasaport", "Vize", "Kabul mektubu", "Bloke hesap"]
    }
  ],
  selfemployed: [
    {
      id: 1,
      title: "İş Fikri ve Planı",
      description: "İş fikrinizi ve planınızı hazırlayın",
      icon: Briefcase,
      details: [
        "Ekonomik ilgi veya bölgesel talep kanıtlayın",
        "Detaylı iş planı hazırlayın",
        "Gelir tahmini yapın",
        "Müşteri mektupları alın (en az 2 adet)"
      ],
      tips: ["Almanca iş planı hazırlayın", "Müşteri mektupları çok önemli"],
      docs: ["İş planı", "Müşteri mektupları"]
    },
    {
      id: 2,
      title: "Sermaye Hazırlığı",
      description: "Yeterli sermayeniz olduğunu kanıtlayın",
      icon: Wallet,
      details: [
        "İş kurulumu için yeterli sermaye gösterin",
        "Banka hesap dökümü veya kredi taahhüdü",
        "45+ yaş için emeklilik planı gerekli"
      ],
      tips: ["Ne kadar sermaye gerektiğini iş planınıza göre hesaplayın", "Banka kredisi onayı alabilirsiniz"],
      docs: ["Banka hesap dökümü", "Kredi taahhüdü (varsa)"]
    },
    {
      id: 3,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "İş planı",
        "Müşteri mektupları",
        "Sermaye kanıtı",
        "Diploma ve deneyim belgeleri",
        "Sağlık sigortası"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "İş planı", "Müşteri mektupları", "Sermaye kanıtı", "Sigorta"]
    },
    {
      id: 4,
      title: "Başvuru",
      description: "Konsolosluk veya Almanya'da başvurun",
      icon: Building,
      details: [
        "Türkiye'den konsolosluğa başvurun VEYA",
        "Tourist vizesiyle Almanya'ya gidip orada başvurun",
        "75€ ücreti ödeyin"
      ],
      tips: ["Almanya'da başvuru daha hızlı olabilir", "Aber dikkatli olun, ret riski var"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 5,
      title: "Değerlendirme",
      description: "İHK ve ekonomi dairesi değerlendirmesi",
      icon: Clock,
      details: [
        "Ticaret odası (IHK) iş planınızı değerlendirir",
        "Ekonomi dairesi ve yabancılar dairesi onay verir",
        "8-16 hafta sürebilir"
      ],
      tips: ["Sabırlı olun", "Ek evrak istenebilir"],
      docs: ["Başvuru onayı (varsa)"]
    },
    {
      id: 6,
      title: "Vergi ve Kayıt",
      description: "Resmi kayıtlarınızı yapın",
      icon: Building2,
      details: [
        "Vergi dairesine (Finanzamt) kaydolun",
        "Ticaret siciline (Handelsregister) kaydolun (gerekirse)",
        "Esnaf odasına (IHK/HWK) kaydolun"
      ],
      tips: ["Muhasebeci tutun", "Vergi yükümlülüklerinizi öğrenin"],
      docs: ["Vergi numarası", "Ticaret sicil kaydı"]
    }
  ],
  workvisa: [
    {
      id: 1,
      title: "İş Teklifi Bulma",
      description: "Almanya'dan iş teklifi alın",
      icon: Briefcase,
      details: [
        "LinkedIn, StepStone, Indeed'den iş arayın",
        "Almanca B1 seviye şartı olabilir",
        "Mesleki denklik gerekebilir"
      ],
      tips: ["Almanca CV hazırlayın", "Mülakatlara hazırlanın"],
      docs: ["CV (Almanca)", "Motivasyon mektubu"]
    },
    {
      id: 2,
      title: "Mesleki Denklik",
      description: "Diplomanızı tanıtın (gerekirse)",
      icon: GraduationCap,
      details: [
        "Düzenlenmiş meslekler için denklik zorunlu",
        "Anerkennung in Deutschland üzerinden başvurun",
        "3-6 ay sürebilir"
      ],
      tips: ["Erken başvurun", "ZAB veya eyalet kurumuna başvurun"],
      docs: ["Mesleki denklik kararı (varsa)"]
    },
    {
      id: 3,
      title: "Federal İstihdam Ajansı Onayı",
      description: "Vorrangprüfung işlemi",
      icon: Building,
      details: [
        "İşvereniniz Federal İstihdam Ajansı'ndan onay almalı",
        "Öncelikli işgücü kontrolü yapılır",
        "AB/Avrupa vatandaşları öncelikli"
      ],
      tips: ["Bu süreci işvereniniz halleder", "Nitelikli göç yasası kapsamındaysanız onay gerekmez"],
      docs: ["ZAV onayı (işverenden)"]
    },
    {
      id: 4,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "İş sözleşmesi",
        "Diploma ve denklik (varsa)",
        "Dil sertifikası",
        "Sağlık sigortası"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "İş sözleşmesi", "Diploma", "Sigorta"]
    },
    {
      id: 5,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 6,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp işe başlayın",
      icon: Plane,
      details: [
        "6-12 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin"
      ],
      tips: ["İş başlangıç tarihinden önce gidin", "Konaklama ayarlayın"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  tourist: [
    {
      id: 1,
      title: "Seyahat Planı",
      description: "Seyahatinizi planlayın",
      icon: Plane,
      details: [
        "Seyahat tarihlerinizi belirleyin",
        "Gideceğiniz şehirleri planlayın",
        "Konaklama ayarlayın"
      ],
      tips: ["90 günden fazla kalmayın", "Schengen kurallarına uyun"],
      docs: ["Seyahat planı"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport (10 yıldan eski olmamalı, 2 boş sayfa)",
        "Biyometrik fotoğraf",
        "Otel rezervasyonu",
        "Uçak rezervasyonu",
        "Seyahat sağlık sigortası (30.000€ teminatlı)",
        "Banka hesap dökümü",
        "Davet mektubu (varsa)"
      ],
      tips: ["Uçak biletinizi önceden almayın, rezervasyon yaptırın", "Sigorta Schengen kapsamlı olsun"],
      docs: ["Pasaport", "Fotoğraf", "Otel rezervasyonu", "Uçak rezervasyonu", "Sigorta", "Banka dökümü"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "90€ ücreti ödeyin"
      ],
      tips: ["Yaz sezonunda erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "90€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Seyahat",
      description: "Vizenizi alıp seyahat edin",
      icon: Plane,
      details: [
        "15 gün içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Seyahatinizi yapın"
      ],
      tips: ["Vizenizin tarihlerine dikkat edin", "Schengen kurallarına uyun"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  jobseekervisa: [
    {
      id: 1,
      title: "Nitelik Kontrolü",
      description: "Vize şartlarını karşılayın",
      icon: CheckSquare,
      details: [
        "Üniversite diploması gerekli",
        "5 yıl mesleki deneyim şartı",
        "Almanca B1 seviye gerekli"
      ],
      tips: ["Şans Kartı daha avantajlı olabilir", "Deneyimlerinizi belgelendirin"],
      docs: ["Diploma", "SGK hizmet dökümü"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Diploma ve transkript",
        "Dil sertifikası (Almanca B1)",
        "SGK hizmet dökümü",
        "Banka hesap dökümü",
        "Sağlık sigortası"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Diploma", "Dil sertifikası", "Banka dökümü", "Sigorta"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp iş aramaya başlayın",
      icon: Plane,
      details: [
        "4-8 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin ve 6 ay içinde iş arayın"
      ],
      tips: ["Haftada 10 saat deneme çalışması yapabilirsiniz", "İş bulunca çalışma iznine geçin"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  "au pair": [
    {
      id: 1,
      title: "Host Aile Bulma",
      description: "Almanya'da host aile bulun",
      icon: Users,
      details: [
        "Au Pair ajanslarına kaydolun",
        "Host aile ile iletişime geçin",
        "Anlaşma imzalayın"
      ],
      tips: ["Güvenilir ajanslar kullanın", "Aile ile görüntülü görüşün"],
      docs: ["Host aile anlaşması"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Host aile anlaşması",
        "Almanca A1 sertifikası",
        "Sağlık sigortası",
        "Bakım deneyimi belgeleri"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Anlaşma", "Dil sertifikası", "Sigorta"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp aileye gidin",
      icon: Plane,
      details: [
        "4-8 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin ve Au Pair olarak çalışmaya başlayın"
      ],
      tips: ["Haftada 30 saat çalışabilirsiniz", "Haftalık 280€ harçlık alırsınız"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  "fsj": [
    {
      id: 1,
      title: "Kurum Bulma",
      description: "FSJ/BFD kurumu bulun",
      icon: Building,
      details: [
        "FSJ veya BFD kurumlarına başvurun",
        "Kabul mektubu alın",
        "27 yaş altı (FSJ) / yaş sınırı yok (BFD)"
      ],
      tips: ["Erken başvurun", "Sosyal alanlarda çalışacaksınız"],
      docs: ["Kurum kabul mektubu"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Kurum kabul mektubu",
        "Almanca B1 sertifikası",
        "Sağlık sigortası"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Kabul mektubu", "Dil sertifikası", "Sigorta"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp hizmete başlayın",
      icon: Plane,
      details: [
        "4-8 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin ve gönüllü hizmete başlayın"
      ],
      tips: ["Aylık 450-550€ harçlık alırsınız", "Konaklama desteği sağlanır"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  researcher: [
    {
      id: 1,
      title: "Araştırma Kurumu",
      description: "Kurumdan kabul alın",
      icon: GraduationCap,
      details: [
        "Alman üniversite veya araştırma kurumuna başvurun",
        "Host anlaşması (Hosting Agreement) alın",
        "Doktora derecesi veya doktora adayı olmalısınız"
      ],
      tips: ["Marie Curie burslarına bakın", "Alexander von Humboldt Vakfı'na başvurun"],
      docs: ["Host anlaşması"]
    },
    {
      id: 2,
      title: "Finansman",
      description: "Gelir kaynağınızı kanıtlayın",
      icon: Wallet,
      details: [
        "Aylık 1.027€ gelir kanıtı gerekli (12.324€/yıl)",
        "Burs, maaş veya araştırma fonu olabilir",
        "Banka hesap dökümü veya burs onayı"
      ],
      tips: ["Burs başvuruları erken yapılır", "DAAD burslarına bakın"],
      docs: ["Burs onayı", "Banka hesap dökümü"]
    },
    {
      id: 3,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Host anlaşması",
        "Diploma",
        "Finansman kanıtı",
        "Sağlık sigortası",
        "Konaklama kanıtı"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Host anlaşması", "Diploma", "Finansman kanıtı", "Sigorta"]
    },
    {
      id: 4,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 5,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp araştırmaya başlayın",
      icon: Plane,
      details: [
        "4-8 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin ve araştırmaya başlayın"
      ],
      tips: ["Diğer Schengen ülkelerinde de çalışabilirsiniz (180 gün)", "Mavi Kart'a geçiş yapabilirsiniz"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  internship: [
    {
      id: 1,
      title: "Staj Yeri Bulma",
      description: "Almanya'da staj yeri bulun",
      icon: Briefcase,
      details: [
        "Üniversite öğrencisi veya son 2 yıl içinde mezun olmalısınız",
        "Alman şirketinden staj teklifi alın",
        "Staj sözleşmesi (Praktikumsvertrag) imzalayın"
      ],
      tips: ["Erken başvurun", "Erasmus staj bursuna bakın"],
      docs: ["Staj sözleşmesi"]
    },
    {
      id: 2,
      title: "ZAV Onayı (Gerekirse)",
      description: "Federal İstihdam Ajansı onayı",
      icon: Building,
      details: [
        "3 aydan uzun gönüllü stajlar için ZAV onayı gerekli",
        "İşvereniniz bu süreci halleder",
        "4-8 hafta sürebilir"
      ],
      tips: ["Zorunlu stajlar için onay gerekmez", "İşvereninizle iletişimde kalın"],
      docs: ["ZAV onayı (işverenden)"]
    },
    {
      id: 3,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Staj sözleşmesi",
        "Öğrenci belgesi veya diploma",
        "ZAV onayı (varsa)",
        "Sağlık sigortası"
      ],
      tips: ["Tüm belgeleri çevirttirin", "Eksik evrak ret nedeni olabilir"],
      docs: ["Pasaport", "Fotoğraf", "Staj sözleşmesi", "Öğrenci belgesi", "Sigorta"]
    },
    {
      id: 4,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "75€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "75€ nakit"]
    },
    {
      id: 5,
      title: "Sonuç ve Gidiş",
      description: "Vizenizi alıp staja başlayın",
      icon: Plane,
      details: [
        "4-12 hafta içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Almanya'ya gidin ve staja başlayın"
      ],
      tips: ["Asgari ücret (12.82€/saat) almalısınız", "Staj süreniz boyunca çalışabilirsiniz"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  business: [
    {
      id: 1,
      title: "Davet Mektubu",
      description: "Alman şirketinden davet alın",
      icon: Building2,
      details: [
        "Alman şirketinden davet mektubu alın",
        "Toplantı, fuar veya konferans için davet",
        "Davet mektubunda amaç net yazmalı"
      ],
      tips: ["Davet mektubunu PDF olarak alın", "Şirketin antetli kağıdında olmalı"],
      docs: ["Davet mektubu"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Davet mektubu",
        "Otel rezervasyonu",
        "Uçak rezervasyonu",
        "Seyahat sağlık sigortası",
        "Banka hesap dökümü"
      ],
      tips: ["Uçak biletinizi önceden almayın", "Sigorta Schengen kapsamlı olsun"],
      docs: ["Pasaport", "Fotoğraf", "Davet mektubu", "Otel rezervasyonu", "Sigorta", "Banka dökümü"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "90€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "90€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Seyahat",
      description: "Vizenizi alıp seyahat edin",
      icon: Plane,
      details: [
        "15 gün içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "İş seyahatinizi yapın"
      ],
      tips: ["Çalışmak yasaktır", "Vizenizin tarihlerine dikkat edin"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  transit: [
    {
      id: 1,
      title: "Seyahat Planı",
      description: "Aktarma planınızı yapın",
      icon: Plane,
      details: [
        "Schengen dışı bir ülkeye gideceksiniz",
        "Almanya'da aktarma yapacaksınız",
        "24 saatten fazla kalmayacaksınız"
      ],
      tips: ["Havalimanı transit bölgesinde kalın", "Pasaport kontrolüne takılmadan geçin"],
      docs: ["Uçak bileti"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Gerekli belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Varış ülkesi vizesi (gerekirse)",
        "Devam eden uçak bileti"
      ],
      tips: ["Transit bölgede kalacağınızdan emin olun", "Bagajınızın direkt varışa gittiğinden emin olun"],
      docs: ["Pasaport", "Varış ülkesi vizesi", "Uçak bileti"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "90€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "90€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Transit",
      description: "Vizenizi alıp transit geçiş yapın",
      icon: Plane,
      details: [
        "15 gün içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Transit geçişinizi yapın"
      ],
      tips: ["24 saatten fazla kalmayın", "Havalimanı dışına çıkmayın"],
      docs: ["Vize pasaportunuzda"]
    }
  ],
  artist: [
    {
      id: 1,
      title: "Etkinlik Daveti",
      description: "Kültürel etkinlikten davet alın",
      icon: Palette,
      details: [
        "Festival, konser veya gösteriden davet alın",
        "Organizatörden resmi davet mektubu",
        "Etkinlik programı ve detayları"
      ],
      tips: ["Davet mektubunda etkinlik detayları net olsun", "Ücretli performans için ek izin gerekli"],
      docs: ["Davet mektubu", "Etkinlik programı"]
    },
    {
      id: 2,
      title: "Evrak Hazırlığı",
      description: "Tüm belgeleri toplayın",
      icon: FileText,
      details: [
        "Pasaport",
        "Fotoğraf",
        "Davet mektubu",
        "Otel rezervasyonu",
        "Seyahat sağlık sigortası",
        "Banka hesap dökümü"
      ],
      tips: ["Sanatsal geçmişinizi belgelendirin", "Etkinlikle ilgili belgeleri ekleyin"],
      docs: ["Pasaport", "Fotoğraf", "Davet mektubu", "Otel rezervasyonu", "Sigorta", "Banka dökümü"]
    },
    {
      id: 3,
      title: "Randevu ve Başvuru",
      description: "iDATA üzerinden başvurun",
      icon: Calendar,
      details: [
        "idata.com.tr'den randevu alın",
        "Evraklarınızı götürün",
        "90€ ücreti ödeyin"
      ],
      tips: ["Erken randevu alın", "Eksik evrak getirmeyin"],
      docs: ["Tüm evraklar", "90€ nakit"]
    },
    {
      id: 4,
      title: "Sonuç ve Etkinlik",
      description: "Vizenizi alıp etkinliğe katılın",
      icon: Plane,
      details: [
        "15 gün içinde sonuçlanır",
        "Pasaportunuzu teslim alın",
        "Etkinliğe katılın"
      ],
      tips: ["Vizenizin tarihlerine dikkat edin", "Schengen kurallarına uyun"],
      docs: ["Vize pasaportunuzda"]
    }
  ]
};

// Varsayılan adımlar (tanımlanmamış vizeler için)
const defaultSteps = [
  {
    id: 1,
    title: "Vize Türünü Kontrol Etme",
    description: "Vize şartlarını inceleyin",
    icon: CheckSquare,
    details: ["Vize şartlarını okuyun", "Gerekli belgeleri öğrenin"],
    tips: ["Detaylı bilgi için vize sayfasına bakın"],
    docs: ["Pasaport", "Fotoğraf"]
  },
  {
    id: 2,
    title: "Evrak Hazırlığı",
    description: "Tüm belgeleri toplayın",
    icon: FileText,
    details: ["Pasaport", "Fotoğraf", "Diğer belgeler"],
    tips: ["Tüm belgeleri çevirttirin"],
    docs: ["Pasaport", "Fotoğraf"]
  },
  {
    id: 3,
    title: "Randevu Alma",
    description: "iDATA üzerinden randevu alın",
    icon: Calendar,
    details: ["idata.com.tr'den randevu alın", "Ücreti ödeyin"],
    tips: ["Erken randevu alın"],
    docs: ["Randevu onayı"]
  },
  {
    id: 4,
    title: "Başvuru",
    description: "Konsolosluğa başvurun",
    icon: Building,
    details: ["Evraklarınızı götürün", "Parmak izi verin"],
    tips: ["Eksik evrak getirmeyin"],
    docs: ["Tüm evraklar"]
  },
  {
    id: 5,
    title: "Sonuç",
    description: "Vizenizi alın",
    icon: CheckCircle,
    details: ["Sonucu bekleyin", "Pasaportunuzu alın"],
    tips: ["Sabırlı olun"],
    docs: ["Vize pasaportunuzda"]
  }
];

export function VizeRehberi() {
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const selectedVisaData = visaTypes.find(v => v.id === selectedVisa);
  const steps = selectedVisa ? (visaSteps[selectedVisa] || defaultSteps) : [];
  const currentStepData = steps[currentStep];

  const handleVisaSelect = (visaId: string) => {
    setSelectedVisa(visaId);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(s => s !== currentStep - 1));
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex <= Math.max(...completedSteps, -1) + 1) {
      setCurrentStep(stepIndex);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  // Vize seçim ekranı
  if (!selectedVisa) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kişiselleştirilmiş
              <span className="block text-emerald-300 mt-2">Vize Rehberi</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hangi vize türüne başvuracağınızı seçin, size özel adım adım rehberlik edelim.
            </p>
          </div>
        </section>

        {/* Visa Selection */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vize Türünüzü Seçin
              </h2>
              <p className="text-lg text-gray-600">
                Başvuracağınız vize türüne tıklayın, size özel yol haritası oluşturacağız.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {visaTypes.map((visa) => {
                const Icon = iconMap[visa.icon] || Briefcase;
                return (
                  <button
                    key={visa.id}
                    onClick={() => handleVisaSelect(visa.id)}
                    className="group text-left bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`${visa.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{visa.shortTitle}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{visa.description}</p>
                    <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                      <span>Rehberi Başlat</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Rehber ekranı
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedVisa(null)}
            className="flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Vize Seçimine Dön
          </button>
          <div className="flex items-center gap-4">
            <div className={`${selectedVisaData?.color} p-3 rounded-xl`}>
              {(() => {
                const Icon = iconMap[selectedVisaData?.icon || ''] || Briefcase;
                return <Icon className="h-8 w-8 text-white" />;
              })()}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{selectedVisaData?.title}</h1>
              <p className="text-blue-200">Adım {currentStep + 1} / {steps.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
              İlerleme: {Math.round(progress)}%
            </span>
            <div className="flex-1">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  idx === currentStep 
                    ? 'bg-blue-600 text-white' 
                    : completedSteps.includes(idx)
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-500'
                }`}
              >
                {completedSteps.includes(idx) ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <span className="w-5 h-5 rounded-full bg-current text-white flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                )}
                <span className="hidden sm:inline text-sm">{step.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <section className="py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentStepData && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <Card className="border-2 border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center">
                      <currentStepData.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-medium mb-1">
                        Adım {currentStep + 1} / {steps.length}
                      </p>
                      <CardTitle className="text-2xl">{currentStepData.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">{currentStepData.description}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Details */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckSquare className="h-5 w-5 text-blue-600" />
                      Yapılacaklar
                    </h4>
                    <ul className="space-y-2">
                      {currentStepData.details.map((detail, idx) => (
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
                  {currentStepData.tips.length > 0 && (
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        İpuçları
                      </h4>
                      <ul className="space-y-1">
                        {currentStepData.tips.map((tip, idx) => (
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
                      {currentStepData.docs.map((doc, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
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

                {currentStep === steps.length - 1 ? (
                  <Link to="/iletisim">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Tamamlandı
                    </Button>
                  </Link>
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
          )}
        </div>
      </section>
    </div>
  );
}
