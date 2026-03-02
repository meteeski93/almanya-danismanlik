import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Printer,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Users,
  Plane,
  Sparkles,
  Search,
  Building,
  Baby,
  HandHeart,
  Microscope,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface DocumentItem {
  name: string;
  detail: string;
  required: boolean;
}

interface VisaDocumentCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  documents: DocumentItem[];
  additionalInfo?: string;
}

const visaDocuments: Record<string, VisaDocumentCategory> = {
  chancenkarte: {
    id: "chancenkarte",
    title: "Şans Kartı (Chancenkarte)",
    icon: Sparkles,
    color: "emerald",
    description: "Nitelikli göçmenler için puan bazlı vize",
    additionalInfo: "Minimum 6 puan gereklidir. Dil yeterliliği ve mesleki deneyim puanları etkiler.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı, 2 boş sayfa olmalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm, beyaz fon, son 6 ay içinde", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Diploma", detail: "Noter onaylı + Almanca/İngilizce yeminli çeviri", required: true },
      { name: "Transkript", detail: "Ders programı ve not dökümü (çeviri ile)", required: true },
      { name: "Dil Sertifikası", detail: "Goethe A1 (zorunlu) veya B1 (4 puan)", required: true },
      { name: "SGK Hizmet Dökümü", detail: "Mesleki deneyim için - e-Devlet'ten", required: true },
      { name: "Banka Hesap Dökümü", detail: "Son 3 ay, yeterli bakiye gösteren", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı, Schengen kapsamlı", required: true },
      { name: "Motivasyon Mektubu", detail: "Almanya'daki kariyer planınızı anlatan", required: true },
      { name: "Mesleki Denklik", detail: "ZAB'dan denklik kararı (varsa, +4 puan)", required: false },
      { name: "Yaş Sertifikası", detail: "35 yaşından küçükseniz (+2 puan)", required: false }
    ]
  },
  bluecard: {
    id: "bluecard",
    title: "Mavi Kart (Blue Card)",
    icon: Briefcase,
    color: "blue",
    description: "Yüksek nitelikli çalışanlar için vize",
    additionalInfo: "Yıllık minimum maaş: 45.300€ (2026). STEM alanlarında 41.041€.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı, 2 boş sayfa olmalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm, beyaz fon", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Diploma", detail: "Üniversite diploması - noter onaylı + çeviri", required: true },
      { name: "Transkript", detail: "Noter onaylı + yeminli çeviri", required: true },
      { name: "İş Teklifi / Sözleşme", detail: "Alman şirketinden resmi teklif mektubu", required: true },
      { name: "Maaş Beyanı", detail: "Yıllık brüt maaşın 45.300€ üzerinde olduğunu gösteren", required: true },
      { name: "Mesleki Denklik", detail: "ZAB veya eyalet kurumundan denklik kararı", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Almanya Sağlık Sigortası", detail: "TK, AOK, Barmer vb. kayıt belgesi", required: false },
      { name: "Kira Sözleşmesi", detail: "Almanya'daki konaklama (varsa)", required: false }
    ]
  },
  workvisa: {
    id: "workvisa",
    title: "Çalışma Vizesi",
    icon: Building,
    color: "indigo",
    description: "Normal çalışma vizesi",
    additionalInfo: "Öncelikli olarak Alman veya AB vatandaşlarına iş verilmelidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Diploma", detail: "Noter onaylı + çeviri", required: true },
      { name: "Mesleki Denklik", detail: "ZAB veya eyalet kurumundan", required: true },
      { name: "İş Sözleşmesi", detail: "Alman şirketinden imzalı sözleşme", required: true },
      { name: "İşveren Beyanı", detail: "Şirketten gelir ve çalışma koşulları beyanı", required: true },
      { name: "SGK Hizmet Dökümü", detail: "İş deneyimi kanıtı", required: true },
      { name: "Banka Hesap Dökümü", detail: "Son 3 ay", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Mesleki Sertifikalar", detail: "Mesleki yeterlilik belgeleri", required: false }
    ]
  },
  studentvisa: {
    id: "studentvisa",
    title: "Öğrenci Vizesi",
    icon: GraduationCap,
    color: "purple",
    description: "Üniversite eğitimi için vize",
    additionalInfo: "Bloke hesap: 11.904€ (2026). Expatrio veya Fintiba üzerinden açılabilir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Üniversite Kabul Mektubu", detail: "Zulassungsbescheid - orijinal", required: true },
      { name: "Diploma", detail: "Lise diploması - noter onaylı + çeviri", required: true },
      { name: "Transkript", detail: "Lise not dökümü - çeviri ile", required: true },
      { name: "Dil Sertifikası", detail: "TestDaF, DSH, Goethe (programın gereksinimine göre)", required: true },
      { name: "Bloke Hesap", detail: "11.904€ bloke - Expatrio/Fintiba onay belgesi", required: true },
      { name: "Motivasyon Mektubu", detail: "Neden Almanya ve bu üniversite?", required: true },
      { name: "CV", detail: "Europass formatında", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Almanya Sağlık Sigortası", detail: "Öğrenci sağlık sigortası kaydı", required: false }
    ]
  },
  aupair: {
    id: "aupair",
    title: "Au Pair",
    icon: Baby,
    color: "pink",
    description: "Aile yanında çocuk bakımı ve dil öğrenimi",
    additionalInfo: "18-26 yaş arası, temel Almanca (A1) gereklidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Au Pair Sözleşmesi", detail: "Aile ile imzalanan resmi sözleşme", required: true },
      { name: "Dil Sertifikası", detail: "Goethe A1 veya dengi", required: true },
      { name: "Motivasyon Mektubu", detail: "Neden Au Pair olmak istiyorsunuz?", required: true },
      { name: "Sağlık Raporu", detail: "Doktordan sağlık durumu raporu", required: true },
      { name: "Adli Sicil Kaydı", detail: "Sabıka kaydı - e-Devlet'ten", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  },
  fsj: {
    id: "fsj",
    title: "FSJ / BFD",
    icon: HandHeart,
    color: "orange",
    description: "Gönüllü sosyal hizmet",
    additionalInfo: "FSJ: 16-26 yaş, BFD: 27+ yaş. Temel Almanca yeterlidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "FSJ/BFD Kabulü", detail: "Kurumdan gelen kabul mektubu", required: true },
      { name: "Dil Sertifikası", detail: "Goethe A1 veya dengi", required: true },
      { name: "Motivasyon Mektubu", detail: "Gönüllü hizmet motivasyonu", required: true },
      { name: "CV", detail: "Europass formatında", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  },
  familyreunion: {
    id: "familyreunion",
    title: "Aile Birleşimi",
    icon: Users,
    color: "rose",
    description: "Aile bireylerinin yanına gitmek için",
    additionalInfo: "Eş için A1 Almanca, çocuklar için dil şartı yok.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Evlilik Cüzdanı", detail: "Noter onaylı + çeviri", required: true },
      { name: "Nüfus Kayıt Örneği", detail: "E-Devlet'ten alınan aile kaydı", required: true },
      { name: "Eşin Pasaport Fotokopisi", detail: "Almanya'daki eşin pasaportu", required: true },
      { name: "Eşin Oturum İzni", detail: "Aufenthaltstitel fotokopisi", required: true },
      { name: "Eşin Gelir Belgesi", detail: "Maaş bordrosu veya iş sözleşmesi", required: true },
      { name: "Eşin Kira Sözleşmesi", detail: "Konut yeterliliğini gösteren", required: true },
      { name: "Dil Sertifikası", detail: "Goethe A1 (eş için)", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Çocuklar İçin", detail: "Doğum belgesi, velayet belgesi (varsa)", required: false }
    ]
  },
  jobseekervisa: {
    id: "jobseekervisa",
    title: "İş Arama Vizesi",
    icon: Search,
    color: "cyan",
    description: "Almanya'da iş aramak için 6 aylık vize",
    additionalInfo: "Mesleki denklik ve B1 Almanca gereklidir. Çalışma hakkı yoktur.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Diploma", detail: "Noter onaylı + çeviri", required: true },
      { name: "Mesleki Denklik", detail: "ZAB veya eyalet kurumundan", required: true },
      { name: "Dil Sertifikası", detail: "Goethe B1 veya dengi", required: true },
      { name: "Mesleki Deneyim", detail: "SGK hizmet dökümü", required: true },
      { name: "Bloke Hesap", detail: "6 aylık yaşam masrafları (aylık ~1.000€)", required: true },
      { name: "Motivasyon Mektubu", detail: "İş arama planı ve hedefler", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  },
  selfemployed: {
    id: "selfemployed",
    title: "Serbest Meslek / Girişimci",
    icon: Building,
    color: "amber",
    description: "Kendi işini kurmak veya serbest çalışmak için",
    additionalInfo: "Ekonomik fayda ve finansal güvence kanıtlanmalıdır.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "İş Planı", detail: "Detaylı business plan (Almanca)", required: true },
      { name: "Finansal Kanıt", detail: "Yatırım sermayesi kanıtı", required: true },
      { name: "Diploma", detail: "Noter onaylı + çeviri", required: true },
      { name: "Mesleki Deneyim", detail: "SGK veya referans mektupları", required: true },
      { name: "Müşteri Sözleşmeleri", detail: "Varsa mevcut anlaşmalar", required: false },
      { name: "Gelir Vergisi Beyannamesi", detail: "Son 2 yıl (varsa)", required: false },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  },
  researcher: {
    id: "researcher",
    title: "Araştırmacı Vizesi",
    icon: Microscope,
    color: "teal",
    description: "Bilimsel araştırma için vize",
    additionalInfo: "Host Agreement (misafir araştırmacı anlaşması) gereklidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Host Agreement", detail: "Alman araştırma kurumundan", required: true },
      { name: "Doktora Diploması", detail: "Noter onaylı + çeviri", required: true },
      { name: "CV", detail: "Akademik yayın listesi ile birlikte", required: true },
      { name: "Araştırma Özeti", detail: "Yapılacak çalışmanın özeti", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Finansal Kanıt", detail: "Burs veya maaş belgesi", required: true }
    ]
  },
  internship: {
    id: "internship",
    title: "Staj Vizesi",
    icon: Briefcase,
    color: "violet",
    description: "Almanya'da staj yapmak için",
    additionalInfo: "Staj süresi maksimum 12 ay olabilir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Staj Sözleşmesi", detail: "Şirketten imzalı staj anlaşması", required: true },
      { name: "Öğrenci Belgesi", detail: "Türkiye'deki üniversiteden", required: true },
      { name: "Transkript", detail: "Üniversite not dökümü", required: true },
      { name: "Dil Sertifikası", detail: "Program gereksinimine göre", required: false },
      { name: "Finansal Kanıt", detail: "Staj ücreti veya bloke hesap", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  },
  tourist: {
    id: "tourist",
    title: "Turistik / Ziyaret Vizesi",
    icon: Plane,
    color: "sky",
    description: "Kısa süreli turistik ziyaret için",
    additionalInfo: "Maksimum 90 gün. Schengen vizesidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı, 2 boş sayfa", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet, 35×45 mm", required: true },
      { name: "Nüfus Cüzdanı Fotokopisi", detail: "Ön ve arka yüz", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Uçak Rezervasyonu", detail: "Gidiş-dönüş uçak bileti", required: true },
      { name: "Otel Rezervasyonu", detail: "Konaklama rezervasyonu", required: true },
      { name: "Banka Hesap Dökümü", detail: "Son 3 ay, yeterli bakiye", required: true },
      { name: "Maaş Bordrosu", detail: "Çalışanlar için", required: true },
      { name: "İzin Mektubu", detail: "İşverenden izin onayı", required: true },
      { name: "Davet Mektubu", detail: "Almanya'dan davet (varsa)", required: false },
      { name: "Taahhütname", detail: "Davet eden kişinin mali taahhüdü (varsa)", required: false }
    ]
  },
  business: {
    id: "business",
    title: "İş / Ticari Vize",
    icon: Building,
    color: "slate",
    description: "İş toplantıları ve ticari faaliyetler için",
    additionalInfo: "Maksimum 90 gün. Schengen vizesidir.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Şirket Davet Mektubu", detail: "Alman şirketinden davet", required: true },
      { name: "Ticaret Sicil Gazetesi", detail: "Türkiye'deki şirketin", required: true },
      { name: "Vergi Levhası", detail: "Şirket vergi levhası", required: true },
      { name: "İmza Sirküleri", detail: "Güncel imza sirküleri", required: true },
      { name: "Banka Hesap Dökümü", detail: "Şirket ve şahsi hesap", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true },
      { name: "Uçak Rezervasyonu", detail: "Gidiş-dönüş", required: true }
    ]
  },
  transit: {
    id: "transit",
    title: "Transit Vize",
    icon: Plane,
    color: "gray",
    description: "Almanya üzerinden transit geçiş için",
    additionalInfo: "Havalimanı transit bölgesinde kalınmalıdır.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Nihai Varış Ülkesi Vizesi", detail: "Gidilecek ülkenin vizesi", required: true },
      { name: "Uçak Bileti", detail: "Gidiş-dönüş veya devam bileti", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "Transit kapsamlı", required: true }
    ]
  },
  artist: {
    id: "artist",
    title: "Sanatçı Vizesi",
    icon: Palette,
    color: "fuchsia",
    description: "Sanatsal faaliyetler için vize",
    additionalInfo: "Konser, sergi, performans vb. faaliyetler için.",
    documents: [
      { name: "Pasaport", detail: "10 yıldan eski olmamalı", required: true },
      { name: "Biyometrik Fotoğraf", detail: "2 adet", required: true },
      { name: "Etkinlik Daveti", detail: "Organizatörden davet mektubu", required: true },
      { name: "Sözleşme", detail: "Sanatsal faaliyet sözleşmesi", required: true },
      { name: "Portfolyo", detail: "Önceki çalışmalar ve referanslar", required: true },
      { name: "Finansal Kanıt", detail: "Ücret veya sponsorluk belgesi", required: true },
      { name: "Seyahat Sağlık Sigortası", detail: "30.000€ teminatlı", required: true }
    ]
  }
};

const colorClasses: Record<string, { bg: string; light: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  blue: { bg: "bg-blue-600", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  indigo: { bg: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  purple: { bg: "bg-purple-600", light: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  pink: { bg: "bg-pink-600", light: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  orange: { bg: "bg-orange-600", light: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  rose: { bg: "bg-rose-600", light: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  cyan: { bg: "bg-cyan-600", light: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  amber: { bg: "bg-amber-600", light: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  teal: { bg: "bg-teal-600", light: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  violet: { bg: "bg-violet-600", light: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  sky: { bg: "bg-sky-600", light: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  slate: { bg: "bg-slate-600", light: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
  gray: { bg: "bg-gray-600", light: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" },
  fuchsia: { bg: "bg-fuchsia-600", light: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200" }
};

export function Documents() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState("chancenkarte");

  const toggleCheck = (docName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [docName]: !prev[docName]
    }));
  };

  const currentVisa = visaDocuments[activeTab];
  const currentDocs = currentVisa?.documents || [];
  const checkedCount = currentDocs.filter(doc => checkedItems[doc.name]).length;
  const totalDocuments = currentDocs.length;

  const printList = () => {
    window.print();
  };

  const resetChecklist = () => {
    const newChecked: Record<string, boolean> = {};
    setCheckedItems(newChecked);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vize Türüne Göre Evrak Listesi
            </h1>
            <p className="text-xl text-purple-100">
              Hangi vize türü için hangi belgeler gerekli? 
              Detaylı ve güncel evrak listeleri ile eksiksiz başvuru yapın.
            </p>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 px-4 py-2 rounded-lg">
                <span className="text-purple-700 font-semibold">
                  {checkedCount} / {totalDocuments} kontrol edildi
                </span>
              </div>
              <div className="hidden sm:block w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-600 transition-all duration-300"
                  style={{ width: `${(checkedCount / totalDocuments) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetChecklist}>
                Sıfırla
              </Button>
              <Button variant="outline" size="sm" onClick={printList}>
                <Printer className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Yazdır</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Document Categories by Visa Type */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="flex flex-nowrap gap-2 p-2 bg-gray-100 rounded-xl min-w-max">
                {Object.values(visaDocuments).map((visa) => (
                  <TabsTrigger 
                    key={visa.id} 
                    value={visa.id} 
                    className="flex items-center gap-2 px-4 py-2 whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                  >
                    <visa.icon className="h-4 w-4" />
                    <span className="text-sm">{visa.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.values(visaDocuments).map((visa) => {
              const colors = colorClasses[visa.color];
              return (
                <TabsContent key={visa.id} value={visa.id} className="mt-0">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className={`${colors.light} border-b ${colors.border}`}>
                      <div className="flex items-start gap-4">
                        <div className={`${colors.bg} p-4 rounded-xl shadow-md`}>
                          <visa.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`text-2xl ${colors.text} mb-2`}>{visa.title}</CardTitle>
                          <p className="text-gray-600 mb-2">{visa.description}</p>
                          {visa.additionalInfo && (
                            <Alert className="mt-4 bg-white/80">
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>{visa.additionalInfo}</AlertDescription>
                            </Alert>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {visa.documents.map((doc, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                              checkedItems[doc.name] 
                                ? `bg-${visa.color}-50 border-${visa.color}-200` 
                                : 'bg-white border-gray-100 hover:border-gray-200'
                            }`}
                            onClick={() => toggleCheck(doc.name)}
                          >
                            <Checkbox 
                              checked={checkedItems[doc.name] || false}
                              onCheckedChange={() => toggleCheck(doc.name)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className={`font-semibold ${checkedItems[doc.name] ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                  {doc.name}
                                </span>
                                {doc.required && (
                                  <Badge variant="destructive" className="text-xs">Zorunlu</Badge>
                                )}
                                {!doc.required && (
                                  <Badge variant="secondary" className="text-xs">İsteğe Bağlı</Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{doc.detail}</p>
                            </div>
                            {checkedItems[doc.name] && (
                              <CheckCircle className={`h-5 w-5 text-${visa.color}-500`} />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <ExternalLink className="h-5 w-5 text-purple-600" />
                          İlgili Sayfalar
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          <Link to={`/vize/${visa.id}`}>
                            <Button variant="outline" size="sm">
                              Vize Detayları
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          <Link to="/basvuru-sureci">
                            <Button variant="outline" size="sm">
                              Başvuru Süreci
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* General Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Genel Bilgiler
            </h2>
            <p className="text-lg text-gray-600">
              Tüm vize türleri için geçerli önemli notlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-amber-200">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <AlertCircle className="h-5 w-5" />
                  Çeviri ve Onay
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Tüm resmi belgeler <strong>noter onaylı</strong> olmalı
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Çeviriler <strong>yeminli çevirmen</strong> tarafından yapılmalı
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Diploma için <strong>apostil</strong> şartı olabilir
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Çeviri maliyeti: <strong>50-150₺/adet</strong>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <FileText className="h-5 w-5" />
                  Evrak Hazırlama
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Belgelerin <strong>fotokopilerini</strong> alın
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Düzenli bir klasörde</strong> saklayın
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>PDF kopyalarını</strong> dijital ortamda saklayın
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Eksik belge = <strong>Red riski</strong>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <Sparkles className="h-5 w-5" />
                  İpuçları
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Başvurudan <strong>3-6 ay önce</strong> hazırlık yapın
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Her vize türü</strong> farklı evrak ister
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      Güncel bilgi için <strong>konsolosluk</strong> sitesini kontrol edin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Vize Bulucu</strong> ile doğru vizeyi bulun
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hangi Vize Size Uygun?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Vize Bulucu ile size en uygun vize türünü keşfedin ve 
            eksiksiz başvuru yapın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-bulucu">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Sparkles className="mr-2 h-5 w-5" />
                Vize Bulucu
              </Button>
            </Link>
            <Link to="/vize-rehberi">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Vize Rehberi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
