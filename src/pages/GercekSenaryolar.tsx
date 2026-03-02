import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Euro,
  MapPin,
  Star,
  Search,
  BookOpen,
  Plane,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type Category = 'all' | 'aile' | 'meslek' | 'universite' | 'ausbildung' | 'problemli';

interface Scenario {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  person: string;
  age: number;
  from: string;
  summary: string;
  story: string;
  timeline: string;
  budget: string;
  challenges: string[];
  solutions: string[];
  result: string;
  tips: string[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Türkiye'de Evlenip Eşini Almanya'ya Getiren Mühendis",
    category: 'aile',
    categoryLabel: 'Aile Birleşimi',
    person: 'Mehmet Y.',
    age: 29,
    from: 'Ankara',
    summary: 'Almanya\'da çalışan bir mühendis, Türkiye\'de evlendiği eşini yanına getirme süreci.',
    story: `Berlin'de bir yazılım şirketinde çalışan Mehmet, 2 yıldır hayatını kurmaya çalışıyordu. Ankara'da tanıştığı Ayşe ile uzun mesafe ilişkisi yürütüyorlardı. "Artık birlikte olmalıyız" dediler ve Türkiye'de nikah kıydılar.

Mehmet hemen aile birleşimi vizesi için hazırlıklara başladı. Ancak karşısına çıkan ilk engel evlilik cüzdanının apostil işlemi oldu. Nüfus müdürlüğünde bekleyen kuyruklar ve evrak işlemleri 3 hafta sürdü. Bu sırada Ayşe Goethe Enstitüsü'nde hızlandırılmış A1 kursuna başladı.

İkinci sorun konutla ilgili çıktı. Mehmet'in 45m²'lik stüdyo dairesi yetersiz görüldü. Yetkililer, "en az 50m²+ kişi başı 2m²" şartını hatırlattı. Mehmet hızla yeni ev aramaya başladı ve 65m²'lik bir daire buldu.

Eksiksiz evraklarla yapılan başvuru sonrası 6 aylık bekleyiş başladı. Ayşe bu sürede Almancasını geliştirdi. Sonunda vize onaylandığında, çift Berlin'de yeni hayatlarına adım attı.`,
    timeline: 'Toplam 8 ay',
    budget: '4.500€',
    challenges: [
      'Evlilik cüzdanının apostil işlemi uzun sürdü',
      'Eşin Almanca A1 sertifikası alması gerekliydi',
      'Kira sözleşmesi yeterli büyüklükte değildi, yeni ev aramak zorunda kaldık'
    ],
    solutions: [
      'Evlilik cüzdanını hemen apostil yaptırdım',
      'Eşim Goethe Institute\'de hızlandırılmış A1 kursuna gitti',
      'Daha büyük bir daireye taşındık (50m² → 65m²)'
    ],
    result: 'Eşim 6 ay sonra vize aldı ve şimdi Berlin\'de benimle birlikte yaşıyor. O da Almanca öğreniyor ve iş arıyor.',
    tips: [
      'Evlilik işlemlerini hemen başlatın, apostil için zaman kaybetmeyin',
      'Eşinizin Almanca öğrenmesi için erken başlayın',
      'Ev büyüklüğü şartını ciddiye alın, en az 50m²+2m² kişi başı'
    ]
  },
  {
    id: 2,
    title: 'Yazılımcı olarak 3 Ayda İş Bulup Giden Genç',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Can B.',
    age: 26,
    from: 'İstanbul',
    summary: 'Backend developer olarak LinkedIn üzerinden iş bulup, 3 ayda tüm süreci tamamlayan genç yazılımcı.',
    story: `İstanbul'da bir e-ticaret şirketinde çalışan Can, kariyerinde yeni bir sayfa açmak istiyordu. "Almanya'da yazılımcılara çok ihtiyaç var" diyen bir arkadaşının tavsiyesi üzerine araştırmaya başladı.

Önce LinkedIn profilini tamamen yeniledi. Başlığını "Backend Developer | Open to Opportunities in Germany" yaptı. Her gün 10-15 Almanya merkezli şirkete özelleştirilmiş başvuru mesajları gönderdi. İngilizce bilmesi avantajdı ama Almanca bilmiyordu.

3 hafta sonra ilk mülakat daveti geldi. Münih'teki bir startup'tan gelen davet heyecanlandırdı. Video mülakatta teknik soruları başarıyla cevapladı ama Alman kültüründe direkt iletişim tarzı onu şaşırttı. "Neden sizi işe alalım?" sorusuna "Çok çalışkanım" demek yerine somut projelerini anlattı.

Teklif geldiğinde maaş görüşmesi yaptı. 45.000€ teklif edildi, kabul etti. Şirket vize sürecinde her adımda yardımcı oldu. 4 hafta sonra vizesi elindeydi.

Şimdi Münih'te yaşıyor, B1 Almanca kursuna gidiyor ve maaşı 60.000€'ya yükseldi.`,
    timeline: 'Başvuru: 3 ay, Vize: 4 hafta',
    budget: '2.800€',
    challenges: [
      'Almanca bilmediğim için şirket seçeneğim kısıtlıydı',
      'Mülakatlar İngilizce yapıldı ama kültür farkı vardı',
      'Maaş beklentimi düşük tutmam gerekti başlangıçta'
    ],
    solutions: [
      'LinkedIn profilimi optimize ettim, Almanya\'daki recruiter\'lara ulaştım',
      'İngilizce mülakatlara hazırlandım, teknik sorular pratik yaptım',
      'Başlangıçta 45.000€ kabul ettim, 1 yıl sonra 60.000€ oldum'
    ],
    result: 'Münih\'te bir startup\'ta çalışıyorum. Şirket vize sürecimde çok yardımcı oldu. Şimdi B1 Almanca öğreniyorum.',
    tips: [
      'LinkedIn profilinizi Almanca/İngilizce yapın',
      'İngilizce bilen şirketleri hedefleyin',
      'Başlangıç maaşınız düşük olsa bile tecrübe kazanın'
    ]
  },
  {
    id: 3,
    title: 'Master Yapıp Mezuniyet Sonrası Kalan Öğrenci',
    category: 'universite',
    categoryLabel: 'Üniversite',
    person: 'Zeynep A.',
    age: 27,
    from: 'İzmir',
    summary: 'Almanya\'da Master yaptı, 18 aylık iş arama vizesiyle kaldı ve iş buldu.',
    story: `Frankfurt'ta Business Analytics masterı yapan Zeynep, mezuniyete son 6 ay kala endişelenmeye başladı. "18 ay iş arama vizesi var ama iş bulamazsam ne olacak?" diye düşünüyordu.

Mezuniyetten önce son dönemde part-time staj yapmaya karar verdi. Üniversitenin kariyer merkezinin yardımıyla yerel bir finans şirketinde 3 aylık staj buldu. Bu staj ona hem tecrübe hem de network kazandırdı.

Mezun olduktan sonra iş arama vizesine geçiş yaptı. Her gün 5-10 iş ilanına başvuruyordu. İlk mülakatlarında Almanca eksikliği hissetti. B1 seviyesindeydi ama iş görüşmeleri için yetersizdi.

3 ay boyunca reddedilme yaşadı. Morali bozuldu ama vazgeçmedi. Bu süreçte B2 Almanca sertifikası aldı. Kariyer merkezinden mülakat simülasyonlarına katıldı. "Neden sizi alalım?" sorusuna güçlü bir hikaye hazırladı.

6. ayın sonunda bir bankadan teklif aldı. Veri analisti pozisyonunda 55.000€ maaşla işe başladı.`,
    timeline: 'Master: 2 yıl, İş arama: 6 ay',
    budget: '15.000€ (bloke hesap)',
    challenges: [
      'Mezuniyet sonrası iş bulma süreci stresliydi',
      'Almanca B2 seviyesinde olmam bazı şirketleri elimden kaçırdı',
      'Mülakatlarda \'neden sizi alalım\' sorusuna hazırlıklı değildim'
    ],
    solutions: [
      'Mezuniyetten önce 3 ay staj yaptım, tecrübe kazandım',
      'B2 Almanca sertifikamı aldım',
      'Kariyer merkezinden mülakat pratiği yaptım'
    ],
    result: 'Frankfurt\'ta bir bankada veri analisti olarak çalışıyorum. Maaşım 55.000€.',
    tips: [
      'Mezuniyetten önce staj yapın',
      'Almanca\'nızı geliştirin, çok önemli',
      'Kariyer merkezinden faydalanın'
    ]
  },
  {
    id: 4,
    title: 'Ausbildung ile Hemşire Olan Genç Kız',
    category: 'ausbildung',
    categoryLabel: 'Ausbildung',
    person: 'Elif K.',
    age: 22,
    from: 'Bursa',
    summary: 'Lise mezunu, B1 Almanca ile Ausbildung yapıp hemşire oldu.',
    story: `Bursa'da sağlık lisesi mezunu Elif, Almanya'da hemşire olma hayaliyle yanıyordu. Ailesi tereddütlüydü ama o kararlıydı. B1 Almanca sertifikası aldı ve başvurulara başladı.

Hamburg'daki bir hastaneden kabul mektubu geldiğinde sevinçten ağladı. Ama zorluklar başlamıştı bile. İlk günlerde teknik tıbbi terimleri anlamakta zorlandı. "Blutdruck", "Herzfrequenz" gibi kelimeler kulağına garip geliyordu.

Hastanede çalışan Türk hemşirelerle tanıştı. Onların desteğiyle kendini daha iyi hissetti. Yemek molalarında birlikte olmak, sorularını sormak büyük rahatlıktı. Yalnızlık hissini yenmeye başladı.

Vardiya sistemi ilk başta çok zordu. Gece nöbetleri, düzensiz uyku... Ama zamanla alıştı. Düzenli spor yapmaya başladı, beslenmesine dikkat etti. Almanca kursuna devam ederek B2 seviyesine geldi.

3 yıllık Ausbildung bittiğinde aynı hastanede tam zamanlı iş teklifi aldı. Şimdi 3.200€ maaşla çalışıyor ve ailesini de yanına getirmeyi planlıyor.`,
    timeline: 'Ausbildung: 3 yıl',
    budget: '1.200€ (başlangıç masrafları)',
    challenges: [
      'B1 Almanca ile başlamak zordu, teknik terimleri öğrenmem zaman aldı',
      'İlk 6 ay çok yalnız hissettim',
      'Vardiya sistemi düzenimi bozdu'
    ],
    solutions: [
      'Hastanede Türk hemşirelerle tanıştım, destek aldım',
      'Almanca kursuna devam ettim, B2 oldum',
      'Düzenli uyku ve beslenme programı yaptım'
    ],
    result: 'Ausbildung bitti, şimdi aynı hastanede 3.200€ maaşla çalışıyorum. Çok mutluyum.',
    tips: [
      'B1 ile gelecekseniz, hemen B2\'ye çalışın',
      'Türk topluluğuyla bağlantı kurun',
      'Sağlık sektörü zor ama kazançlı'
    ]
  },
  {
    id: 5,
    title: 'Çocuklu Aile Birleşimi - 2 Çocukla Gelen Aile',
    category: 'aile',
    categoryLabel: 'Aile Birleşimi',
    person: 'Ali ve Ayşe V.',
    age: 35,
    from: 'Antalya',
    summary: 'Baba Almanya\'da çalışıyor, anne ve 2 çocuk (5 ve 8 yaş) aile birleşimi ile geldi.',
    story: `Stuttgart'ta otomotiv sektöründe çalışan Ali, 1.5 yıldır ailesinden ayrıydı. Eşi Ayşe Antalya'da 5 yaşındaki Efe ve 8 yaşındaki Zeynep ile yaşıyordu. Aile birleşimi vizesi için hazırlıklara başladılar.

Ali önce yeterli büyüklükte bir ev buldu. 75m²'lik 3 odalı daire, 4 kişilik aile için uygun görüldü. Ayşe bu sırada Goethe'den A1 sertifikası aldı. Çocuklara da Almanya'ya gelmeden önce temel Almanca öğrettiler.

Vize başvurusu 10 ay sürdü. Bu uzun bekleyişte çocuklar merakla "Baba ne zaman geleceğiz?" diye soruyordu. Sonunda vize onaylandığında büyük bir kutlama yaptılar.

Almanya'ya geldiklerinde 8 yaşındaki Zeynep okula başladı. Almanca bilmediği için bir sınıf geriden başladı. İlk aylar zor geçti, ağlayarak okula gitmek istemedi. Okul psikoloğu desteğiyle ve Türk öğretmen yardımcısıyla zamanla alıştı.

5 yaşındaki Efe kreşe başladı. Alman kreş sistemi farklıydı ama çocuklar çabuk uyum sağladı. Bir yıl sonra her iki çocuk da akıcı Almanca konuşuyordu.`,
    timeline: 'Toplam 10 ay',
    budget: '6.000€',
    challenges: [
      'Çocukların okula uyum sağlaması zor oldu',
      '8 yaşındaki çocuk Almanca bilmediği için sınıf tekrarı yaptı',
      'Kreş/okul için yer bulmak zordu'
    ],
    solutions: [
      'Çocuklara Almanya\'ya gelmeden önce temel Almanca öğrettik',
      'Okul psikoloğundan destek aldık',
      'Yerel aile danışma merkezinden yardım aldık'
    ],
    result: 'Çocuklar şimdi akıcı Almanca konuşuyor, okulları çok seviyorlar. Biz de çok mutluyuz.',
    tips: [
      'Çocuklara erken yaşta Almanca öğretin',
      'Okul/kreş için erken başvurun',
      'Çocukların duygusal desteğe ihtiyacı olabilir'
    ]
  },
  {
    id: 6,
    title: 'Elektrikçi Ustası - Mavi Yaka Başarı Hikayesi',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Hasan T.',
    age: 32,
    from: 'Konya',
    summary: 'Türkiye\'de elektrikçi ustası, denklik alıp Almanya\'da çalışmaya başladı.',
    story: `Konya'da 10 yıldır elektrikçi ustası olarak çalışan Hasan, ekonomik nedenlerle Almanya'ya gitmeyi düşünmeye başladı. Mesleki denklik konusunda endişeleri vardı ama araştırınca umutlandı.

Önce Anerkannt.de üzerinden denklik başvurusu yaptı. Türkiye'deki mesleki yeterlilik belgesini ve çalışma tecrübelerini gösteren evrakları hazırladı. 4 ay süren bir süreçti. Sonunda "kısmi denklik" kararı çıktı - yani ek sınav şartıyla.

Bu sırada B1 Almanca sertifikası aldı. Mesleki Almanca kursuna gitti. "Klemme", "Sicherung", "Verteilerkasten" gibi teknik terimleri öğrendi. Stuttgart'taki bir inşaat şirketiyle görüştü, iş teklifi aldı.

Ek sınavı başarıyla geçti. Vize başvurusu yapıp 3 hafta sonra vizesini aldı. Şimdi Stuttgart'ta 3.800€ maaşla çalışıyor. "Elektrikçi, tesisatçı, klima teknisyeni - bu meslekler çok aranıyor" diyor.`,
    timeline: 'Denklik: 4 ay, İş bulma: 2 ay',
    budget: '3.500€',
    challenges: [
      'Denklik süreci uzun ve karmaşıktı',
      'Türk diplomaları için ek sınav istediler',
      'Almanca teknik terimleri öğrenmek zordu'
    ],
    solutions: [
      'Anerkannt.de üzerinden denklik başvurusu yaptım',
      'B1 Almanca sertifikamı aldım',
      'Mesleki Almanca kursuna gittim'
    ],
    result: 'Stuttgart\'ta bir inşaat şirketinde 3.800€ maaşla çalışıyorum. İşçi aranıyor, talep çok.',
    tips: [
      'Denklik işlemlerini erken başlatın',
      'Mesleki Almanca öğrenin',
      'Elektrikçi, tesisatçı gibi meslekler çok aranıyor'
    ]
  },
  {
    id: 7,
    title: 'Doktor - Tıp Diploması Denkliği',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Dr. Selin P.',
    age: 30,
    from: 'Adana',
    summary: 'Türkiye\'de doktor, Almanya\'da tıp denkliği alıp uzmanlık yapmaya başladı.',
    story: `Adana'da pratisyen hekim olarak çalışan Dr. Selin, Almanya'da uzmanlık yapma hayaliyle harekete geçti. Tıp denkliği sürecinin zorluğunu biliyordu ama kararlıydı.

Önce Hamburg Landesärztekammer'e başvurdu. Türkiye'deki tıp diploması, transkript, staj belgeleri... Sayfalarca evrak hazırladı. 8 ay süren değerlendirme sürecinde C1 Almanca sertifikası aldı. Tıbbi Almanca kursuna gitti - "Anamnese", "Diagnose", "Therapie" gibi terimleri öğrendi.

Denklik kararı "Hospitation şartı" ile geldi. 3 ay boyunca bir hastanede gözlemci olarak çalıştı. Bu sürede Alman sağlık sistemini, hasta doktor ilişkilerini, prosedürleri öğrendi.

Sonunda tam denklik aldı ve iç hastalıkları uzmanlık eğitimine başladı. Başlangıç maaşı 5.500€. "Çok çalışmak gerekiyor ama değer" diyor. Şimdi 5 yıllık uzmanlık eğitiminin ilk yılında.`,
    timeline: 'Denklik: 8 ay, Uzmanlık: 5+ yıl',
    budget: '5.000€',
    challenges: [
      'Tıp denkliği çok uzun sürdü, çok evrak istediler',
      'C1 Almanca şartı vardı, zordu',
      'Tıbbi Almanca çok farklıydı'
    ],
    solutions: [
      'Landesärztekammer\'e başvurdum',
      'C1 Almanca ve tıbbi Almanca kursu aldım',
      'Hospitation (gözlem) yaptım 3 ay'
    ],
    result: 'Hamburg\'da bir hastanede iç hastalıkları uzmanlığı yapıyorum. Maaşım 5.500€ başlangıç.',
    tips: [
      'Tıp denkliği uzun sürer, sabırlı olun',
      'C1 Almanca şart, erken başlayın',
      'Hospitation fırsatlarını değerlendirin'
    ]
  },
  {
    id: 8,
    title: 'Ausbildung Reddi Sonrası Başarılı Başvuru',
    category: 'problemli',
    categoryLabel: 'Problem ve Çözüm',
    person: 'Burak S.',
    age: 21,
    from: 'Samsun',
    summary: 'Ausbildung vizesi reddedildi, itiraz edip 4 ay sonra kazandı.',
    story: `Samsun'da lise mezunu Burak, Almanya'da IT Ausbildung yapma hayaliyle başvuru yaptı. Köln'deki bir şirketten kabul mektubu almıştı, her şey yolunda görünüyordu. Ama 3 ay sonra gelen ret mektubuyla yıkıldı.

Ret gerekçesi: "Türkiye'ye bağlılık yetersiz". Konsolosluk, Burak'ın Almanya'dan sonra Türkiye'ye döneceğine ikna olmamıştı. Şirket bekleyemeyeceğini söyleyip başka aday buldu.

Burak pes etmedi. İnternette araştırma yaparken idari mahkemeye (Verwaltungsgericht) başvurabileceğini öğrendi. Bir göçmenlik avukatı tuttu. 1.500€ masraf çıktı ama avukat "Haklısınız, kazanma şansı yüksek" dedi.

4 ay süren hukuk süreci zorlu geçti. Bu arada yeni şirketler aradı. Düsseldorf'taki bir şirketten yeni kabul aldı, bu sefer daha güçlü referans mektuplarıyla.

Mahkeme sonunda Burak'ı haklı buldu. Ret kararı iptal edildi. Yeni şirketle birlikte vize aldı ve Ausbildung'a başladı. "Hiç pes etmeyin" diyor, "haklıysanız savaşın."`,
    timeline: 'İlk başvuru: red, İtiraz: 4 ay',
    budget: '2.000€ ek masraf',
    challenges: [
      'Vize reddedildi, gerekçe: \'bağlantı eksikliği\'',
      'Şirket başka aday buldu, teklif iptal oldu',
      'Yeni şirket bulmak zordu'
    ],
    solutions: [
      'Reddi mahkemeye taşıdım (Verwaltungsgericht)',
      'Avukat tuttum, 1.500€ ödedim',
      'Yeni şirket buldum, daha güçlü referanslar aldım'
    ],
    result: 'Mahkeme davamı kazandım, vize aldım. Şimdi Köln\'de IT Ausbildung yapıyorum.',
    tips: [
      'Ret gerekçesini iyi analiz edin',
      'Haklıysanız mahkemeye gidin',
      'Avukat tutun, değer'
    ]
  },
  {
    id: 9,
    title: 'Üniversite Öğrencisi - Bloke Hesap Problemi',
    category: 'problemli',
    categoryLabel: 'Problem ve Çözüm',
    person: 'Deniz Y.',
    age: 20,
    from: 'Eskişehir',
    summary: 'Bloke hesap açılışında sorun yaşadı, vizesi gecikti.',
    story: `Eskişehir'de mühendislik okuyan Deniz, Münih Teknik Üniversitesi'ne kabul aldığında dünyalar onun olmuştu. Ama bloke hesap süreci kabusa dönecekti.

Fintiba üzerinden hesap açmaya çalıştı ama evraklarında bir eksiklik çıktı. Pasaport kopyası net değildi, adres belgesi kabul edilmedi. Her düzeltme 1 hafta daha gecikme demekti. 4 hafta geçti, hala çözülmedi.

Konsolosluk ek belge istedi - üniversiteden daha detaylı kabul mektubu. Bu arada kayıt tarihi yaklaşıyordu, stres doruktaydı. Her gün Fintiba'ya mail atıyor, telefonla arıyordu.

Üniversitenin uluslararası ofisiyle iletişime geçti. Durumunu anlattı, kayıt süresinin uzatılmasını talep etti. Şansına kabul ettiler, 2 hafta ek süre verildi.

Sonunda bloke hesap onaylandı, vize başvurusu tamamlandı. 10 hafta süren süreç sonunda vize elindeydi. Son anda yetişip kaydını yaptırdı. "Erken başlayın ve takipçi olun" diyor.`,
    timeline: 'Normal: 4 hafta, Gerçek: 10 hafta',
    budget: '11.904€ bloke hesap',
    challenges: [
      'Fintiba\'da hesap açılışı gecikti',
      'Konsolosluk ek belge istedi',
      'Kayıt tarihi kaçırma riski vardı'
    ],
    solutions: [
      'Fintiba\'ya her gün mail attım, takipçi oldum',
      'Konsolosluğa ek belgeleri hızlıca ilettim',
      'Üniversiteye durumu bildirdim, kayıt süresi uzattılar'
    ],
    result: 'Vizeyi son anda aldım, şimdi Münih\'te mühendislik okuyorum.',
    tips: [
      'Bloke hesap için erken başvurun',
      'Sorun olursa sürekli takip edin',
      'Üniversiteyle iletişimde kalın'
    ]
  },
  {
    id: 10,
    title: 'Öğretmen - Öğretmenlik Denkliği',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Fatma K.',
    age: 34,
    from: 'Trabzon',
    summary: 'Türkiye\'de İngilizce öğretmeni, Almanya\'da denklik alıp çalışmaya başladı.',
    story: `Trabzon'da 8 yıldır İngilizce öğretmenliği yapan Fatma, Almanya'da çalışmak istedi. İngilizce öğretmenliği talep gören bir alandı ama denklik süreci zorlu geçecekti.

Berlin Kultusministerium'a başvurdu. Türkiye'deki diploması, ders programları, pedagoji dersleri incelendi. Eksik pedagoji dersleri olduğu tespit edildi. C1 Almanca şartı da vardı.

6 ay süren süreçte C1 Almanca sertifikası aldı. Eksik pedagoji derslerini online tamamladı. Berlin'deki bir Gymnasium'da 2 aylık staj yaptı. Alman eğitim sistemi çok farklıydı - "Gymnasium", "Realschule", "Hauptschule" kavramlarını öğrendi.

Denklik onayı geldiğinde hemen iş aramaya başladı. İngilizce öğretmeni açığı vardı, 1 ay içinde iş buldu. Şimdi Berlin'de bir Gymnasium'da 4.200€ maaşla çalışıyor. "Öğretmenlik denkliği zor ama mümkün" diyor.`,
    timeline: 'Denklik: 6 ay, İş: 1 ay',
    budget: '3.000€',
    challenges: [
      'Öğretmenlik denkliği zordu, pedagoji dersleri eksikti',
      'C1 Almanca şartı vardı',
      'Alman eğitim sistemi çok farklıydı'
    ],
    solutions: [
      'Kultusministerium\'a başvurdum',
      'C1 Almanca aldım, pedagoji kursuna gittim',
      'Alman okullarında staj yaptım'
    ],
    result: 'Berlin\'de bir Gymnasium\'da İngilizce öğretmeni olarak çalışıyorum. Maaşım 4.200€.',
    tips: [
      'Öğretmenlik denkliği uzun sürebilir',
      'Alman eğitim sistemini öğrenin',
      'Pedagoji eksiklerinizi kapatın'
    ]
  },
  {
    id: 11,
    title: 'Aile Birleşimi - Eş Reddi Sonrası İkinci Başvuru',
    category: 'problemli',
    categoryLabel: 'Problem ve Çözüm',
    person: 'Serkan ve Dilek M.',
    age: 31,
    from: 'Gaziantep',
    summary: 'Eş vizesi reddedildi, eksikleri tamamlayıp ikinci başvuruda kabul edildi.',
    story: `Düsseldorf'ta çalışan Serkan, Gaziantep'teki eşi Dilek'i yanına getirmek istedi. İlk başvurularında eksikler vardı ve ret aldılar. Büyük bir hayal kırıklığı yaşadılar.

Ret gerekçeleri: Eşin A1 Almanca sertifikası yoktu, bazı evraklar eksikti, Serkan'ın geliri sınırdaydı. "Her şeyi daha dikkatli yapmalıydık" dedi Serkan.

Dilek hemen Goethe Enstitüsü'nde A1 kursuna başladı. 3 ayda sınavı geçti. Eksik evraklar tamamlandı - evlilik cüzdanı apostili, sağlık sigortası belgeleri, daha detaylı evraklar.

Serkan bu arada maaşını arttırmak için şirketinde görüştü. Terfi aldı, gelir şartını net şekilde karşılamaya başladı. Yeni, daha büyük bir daire kiraladılar.

İkinci başvuru tam ve eksiksiz yapıldı. 5 ay sonra vize onaylandı. Şimdi Düsseldorf'ta birlikte mutlu bir hayat kuruyorlar. "İlk ret bizi yıktı ama doğrusunu yapınca başardık" diyorlar.`,
    timeline: 'İlk: red, İkinci: 5 ay',
    budget: '3.500€',
    challenges: [
      'Eşim A1 Almanca sertifikası alamadı, red geldi',
      'Eksik evraklar tamamlanmamıştı',
      'Gelir şartı sınırda kalmıştık'
    ],
    solutions: [
      'Eşim Goethe A1 sınavını geçti',
      'Tüm eksik evrakları tamamladık',
      'Maaşım arttı, gelir şartını karşıladık'
    ],
    result: 'İkinci başvuruda eşim kabul edildi. Şimdi Düsseldorf\'ta birlikteyiz.',
    tips: [
      'A1 Almanca şart, ciddiye alın',
      'Tüm evrakları eksiksiz hazırlayın',
      'Gelir şartını net karşılayın'
    ]
  },
  {
    id: 12,
    title: 'Tır Şoförü - Sürücü Belgesi Değişimi',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'İbrahim C.',
    age: 38,
    from: 'Kayseri',
    summary: 'Tır şoförü, ehliyet değişimi yapıp Almanya\'da şoför oldu.',
    story: `Kayseri'de 15 yıldır tır şoförlüğü yapan İbrahim, Almanya'daki şoför açığını duydu. "Neden ben yapmayayım?" dedi ve harekete geçti.

Önce Münih Fahrerlaubnisbehörde'ye (Ehliyet Dairesi) başvurdu. Türk ehliyetinin değişimi için gerekli evrakları hazırladı. B sınıfı (otomobil) kısa sürede değişti ama C sınıfı (kamyon) için ek sınav şartı çıktı.

2 ay süren süreçte trafik kuralları kursuna gitti. Alman trafik kuralları farklıydı - "Rechts vor links", "Vorfahrt" gibi kavramları öğrendi. B1 Almanca sertifikası da şarttı.

Ehliyet değişimi tamamlanınca hemen iş aramaya başladı. Lojistik sektöründe şoför açığı büyüktü. 3 hafta içinde Münih'teki bir lojistik şirketinden iş teklifi aldı.

Şimdi 3.200€ maaşla tır şoförlüğü yapıyor. "Şoförler çok aranıyor, ehliyet değişimi zahmetli ama değer" diyor.`,
    timeline: 'Ehliyet: 2 ay, İş: 3 hafta',
    budget: '2.500€',
    challenges: [
      'Türk ehliyeti değişimi uzun sürdü',
      'C sınıfı için ek sınav istediler',
      'Almanca trafik kuralları farklıydı'
    ],
    solutions: [
      'Fahrerlaubnisbehörde\'ye başvurdum',
      'Trafik kuralları kursuna gittim',
      'B1 Almanca sertifikası aldım'
    ],
    result: 'Münih\'te bir lojistik şirketinde tır şoförü olarak çalışıyorum. Maaşım 3.200€.',
    tips: [
      'Ehliyet değişimi zaman alır, erken başlayın',
      'Trafik kurallarını öğrenin',
      'Şoförler çok aranıyor, fırsat var'
    ]
  },
  {
    id: 13,
    title: 'Aşçı - Gastronomi Sektöründe Çalışmak',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Emre A.',
    age: 28,
    from: 'Hatay',
    summary: 'Aşçı, Almanya\'da restoranda çalışmaya başladı.',
    story: `Hatay'da aile restoranında çalışan Emre, Almanya'da farklı mutfaklar deneyimlemek istedi. Gastronomi sektöründe iş olduğunu biliyordu, hazırlıklara başladı.

Önce B1 Almanca sertifikası aldı. Sonra online Alman mutfağı kursuna gitti. "Sauerbraten", "Schnitzel", "Spätzle" gibi klasik Alman yemeklerini öğrendi. LinkedIn ve gastronomi sitelerinden iş ilanlarına başvurdu.

Frankfurt'taki bir restorandan mülakat daveti geldi. Video görüşmede hem Türk mutfağı bilgisini hem de Alman mutfağındaki yeni becerilerini gösterdi. İşveren deneyimli bir aşçı arıyordu.

Teklif aldı, vize başvurusu yaptı. 3 hafta sonra vizesi onaylandı. Frankfurt'ta yeni bir hayata başladı.

Şimdi 2.800€ maaşla çalışıyor. "Gastronomi yoğun, uzun saatler ama iş var" diyor. Gelecekte kendi restoranını açmayı planlıyor.`,
    timeline: 'İş bulma: 1 ay, Vize: 3 hafta',
    budget: '2.200€',
    challenges: [
      'Gastronomi sektörü yoğun, uzun saatler',
      'Alman mutfağı farklıydı',
      'B1 Almanca şartı vardı'
    ],
    solutions: [
      'LinkedIn ve gastronomi sitelerinden başvurdum',
      'Online Alman mutfağı kursu aldım',
      'B1 Almanca sertifikası aldım'
    ],
    result: 'Frankfurt\'ta bir restoranda aşçı olarak çalışıyorum. Maaşım 2.800€.',
    tips: [
      'Gastronomi yoğun ama iş var',
      'Alman mutfağını öğrenin',
      'Referanslar önemli'
    ]
  },
  {
    id: 14,
    title: 'Üniversite - Doktora Yapan Araştırmacı',
    category: 'universite',
    categoryLabel: 'Üniversite',
    person: 'Ceren B.',
    age: 26,
    from: 'Ankara',
    summary: 'Doktora öğrencisi, burslu olarak Almanya\'da araştırma yapıyor.',
    story: `Ankara'da yüksek lisansını tamamlayan Ceren, akademik kariyer yapmak istiyordu. Almanya'nın araştırma imkanları cezbetmişti. DAAD bursu için hazırlıklara başladı.

Doktora başvurusu çok rekabetçiydi. Önce araştırma önerisi hazırladı, bu 3 ayını aldı. Konferanslarda Alman hocalarla tanıştı, Heidelberg Üniversitesi'nden bir profesör ilgilendi.

DAAD bursuna başvurdu. Kabul mektubu, transkript, dil belgesi, araştırma önerisi... Sayfalarca evrak hazırladı. 6 ay süren değerlendirme süreci stresli geçti.

Sonunda hem üniversite kabulü hem de burs onayı geldi. Aylık 1.200€ burs + sağlık sigortası. 3 haftada vizesini aldı.

Şimdi Heidelberg'de doktora yapıyor. "Araştırma imkanları harika" diyor. Gelecekte akademisyen olmayı hedefliyor.`,
    timeline: 'Başvuru: 6 ay, Vize: 3 hafta',
    budget: 'Burs: 1.200€/ay',
    challenges: [
      'Doktora başvurusu çok rekabetçiydi',
      'Araştırma önerisi yazmak zordu',
      'Hoca bulmak zaman aldı'
    ],
    solutions: [
      'DAAD bursuna başvurdum',
      'Araştırma önerimi 3 ayda hazırladım',
      'Konferanslarda Alman hocalarla tanıştım'
    ],
    result: 'Heidelberg Üniversitesi\'nde doktora yapıyorum, DAAD bursu alıyorum.',
    tips: [
      'Doktora için erken başvurun',
      'Araştırma önerinizi iyi hazırlayın',
      'Hoca bulmak kritik, network kurun'
    ]
  },
  {
    id: 15,
    title: 'Ausbildung - Kaynakçı Mesleği',
    category: 'ausbildung',
    categoryLabel: 'Ausbildung',
    person: 'Murat D.',
    age: 24,
    from: 'Sivas',
    summary: 'Kaynakçı Ausbildung yapıp, metal sektöründe çalışmaya başladı.',
    story: `Sivas'ta meslek lisesi mezunu Murat, Almanya'da kaynakçı olmak istedi. Metal sektöründe işçi açığı olduğunu biliyordu. B1 Almanca ile başvurulara başladı.

Dortmund'daki bir metal fabrikasından Ausbildung teklifi aldı. 3.5 yıllık eğitim başladı. İlk günler zordu - kaynakçılık tehlikeli bir meslekti, iş güvenliği kurallarını öğrenmesi gerekti.

Teknik çizim okumakta zorlandı. "Schweißnaht", "Nahtdicke", "Wurzel" gibi terimleri öğrendi. Teknik çizim kursuna gitti. Fiziksel olarak yorucuydu, düzenli spor yapmaya başladı.

Ausbildung süresinde maaş arttı - ilk yıl 900€, son yıl 1.400€. Eğitim bittiğinde aynı fabrikada tam zamanlı iş teklifi aldı.

Şimdi 3.500€ maaşla kaynakçı olarak çalışıyor. "Zor meslek ama kazançlı" diyor.`,
    timeline: 'Ausbildung: 3.5 yıl',
    budget: '1.500€',
    challenges: [
      'Kaynakçılık zor ve tehlikeli bir meslek',
      'Teknik çizim okumayı öğrenmek zordu',
      'Fiziksel olarak yorucuydu'
    ],
    solutions: [
      'İş güvenliği kurslarına katıldım',
      'Teknik çizim kursuna gittim',
      'Düzenli spor yapmaya başladım'
    ],
    result: 'Ausbildung bitti, şimdi bir metal fabrikasında 3.500€ maaşla çalışıyorum.',
    tips: [
      'Kaynakçılık kazançlı ama zor',
      'İş güvenliğine dikkat edin',
      'Teknik bilgi şart'
    ]
  },
  {
    id: 16,
    title: 'Aile Birleşimi - Hamilelik ve Doğum',
    category: 'aile',
    categoryLabel: 'Aile Birleşimi',
    person: 'Kemal ve Seda T.',
    age: 33,
    from: 'İstanbul',
    summary: 'Eş hamileyken geldiler, Almanya\'da doğum yaptılar.',
    story: `Münih'te çalışan Kemal, İstanbul'da hamile olan eşi Seda'yı yanına getirmek istedi. Seda 7 aylık hamileydi, zaman daralıyordu.

Önce doktorlarına danıştılar. Hamilelikte seyahat için onay aldılar. Hemen vize başvurusu yaptılar, hızlandırılmış işlem talep ettiler. 2 ayda vize çıktı.

Almanya'ya geldiklerinde ilk iş sağlık sigortası yaptırmak oldu. Alman sağlık sistemi farklıydı - "Krankenkasse", "Hausarzt", "Facharzt" kavramlarını öğrendiler.

Doğum için Geburtshaus (doğum merkezi) aradılar. Hebamme (ebe) bulmak önemliydi. 2 ay içinde doğum hazırlıklarını tamamladılar.

9. ayda sağlıklı bir kız bebekleri oldu. Almanya'da doğum yardımları, anne izni, çocuk parası (Kindergeld) gibi desteklerle hayatlarını kurmaya başladılar.`,
    timeline: 'Geliş: 7. ay, Doğum: 9. ay',
    budget: '5.000€',
    challenges: [
      'Hamilelikte seyahat zordu',
      'Alman sağlık sistemi farklıydı',
      'Doğum için doktor bulmak stresliydi'
    ],
    solutions: [
      'Doktor onayıyla seyahat ettik',
      'Hemen sağlık sigortası yaptırdık',
      'Geburtshaus bulduk, doğuma hazırlandık'
    ],
    result: 'Sağlıklı bir bebek dünyaya getirdik. Almanya\'da doğum yardımları çok iyi.',
    tips: [
      'Hamileyken seyahat için doktor onayı alın',
      'Hemen sağlık sigortası yaptırın',
      'Geburtshaus/Hebamme erken bulun'
    ]
  },
  {
    id: 17,
    title: 'İş Değişikliği - Mavi Kart ile İş Değiştirmek',
    category: 'problemli',
    categoryLabel: 'Problem ve Çözüm',
    person: 'Ozan R.',
    age: 30,
    from: 'İzmir',
    summary: 'Mavi Kart ile geldi, 1 yıl sonra iş değiştirdi.',
    story: `Berlin'de Mavi Kart ile çalışan Ozan, mevcut işinden memnun değildi. Daha iyi bir fırsat gördü ama Mavi Kart ile iş değişikliği izin gerektiriyordu.

Önce yeni iş teklifi almadan istifa etmemeye karar verdi. Gizlice mülakatlara girmeye başladı. 1 ay sonra daha iyi maaşlı bir şirketten teklif aldı.

Ausländerbehörde'ye (Yabancılar Dairesi) başvurdu. Yeni iş sözleşmesi, maaş belgesi, şirket bilgileri... Evraklar tamamlandı. İş değişikliği onayı için 2 ay bekledi.

Bu sürede yeni işvereni sabırla bekledi. İnsan kaynakları departmanı destek oldu, gerekli belgeleri hazırladı. Sonunda onay geldi.

Şimdi daha iyi koşullarda çalışıyor. "Mavi Kart ile iş değişikliği mümkün ama sabır gerekiyor" diyor.`,
    timeline: 'İş değişikliği: 2 ay',
    budget: '500€',
    challenges: [
      'Mavi Kart ile iş değişikliği izin gerektiriyordu',
      'Yeni iş teklifi almak zaman aldı',
      'Ausländerbehörde süreci yavaştı'
    ],
    solutions: [
      'Yeni iş teklifi almadan istifa etmedim',
      'Ausländerbehörde\'ye başvurdum',
      'Yeni işveren destek oldu'
    ],
    result: 'İş değişikliği onaylandı, şimdi daha iyi bir şirkette çalışıyorum.',
    tips: [
      'Mavi Kart ile iş değişikliği için izin alın',
      'Yeni iş bulmadan istifa etmeyin',
      'Yeni işverenin desteği önemli'
    ]
  },
  {
    id: 18,
    title: 'Yaşlı Bakıcı - Pflege Sektöründe Çalışmak',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Sevgi Y.',
    age: 36,
    from: 'Rize',
    summary: 'Yaşlı bakıcı olarak Almanya\'da çalışmaya başladı.',
    story: `Rize'de hasta bakıcılık yapan Sevgi, Almanya'da yaşlı bakıcı (Pflegefachkraft) olmak istedi. Pflege sektöründe büyük işçi açığı vardı ama B2 Almanca şartı vardı.

1 yıl boyunca Almanca çalıştı. B2 sertifikası aldı. Pflege kursuna gitti - "Körperpflege", "Ernaehrung", "Mobilisation" gibi konuları öğrendi.

Nürnberg'deki bir huzureviyle görüştü. İş teklifi aldı, vize başvurusu yaptı. 4 hafta sonra vizesi onaylandı.

İş yoğun ve yorucuydu. Vardiya sistemi, gece nöbetleri... Yaşlılarla empati kurmak, sabırlı olmak gerekiyordu. Ama iş garantisiydi, maaşı iyiydi.

Şimdi 2.900€ maaşla huzurevinde çalışıyor. "Pflege zor ama değerli bir iş" diyor. Gelecekte daha ileri pozisyonlara yükselmeyi planlıyor.`,
    timeline: 'İş bulma: 2 ay, Vize: 4 hafta',
    budget: '2.500€',
    challenges: [
      'Pflege sektörü yoğun ve yorucu',
      'B2 Almanca şartı vardı',
      'Vardiya sistemi zordu'
    ],
    solutions: [
      'B2 Almanca sertifikası aldım',
      'Pflege kursuna gittim',
      'Düzenli uyku programı yaptım'
    ],
    result: 'Bir huzurevinde yaşlı bakıcı olarak çalışıyorum. Maaşım 2.900€.',
    tips: [
      'Pflege sektörü çok aranıyor',
      'B2 Almanca şart',
      'Sabır ve empati önemli'
    ]
  },
  {
    id: 19,
    title: 'Üniversite - Üniversite Değişimi (Transfer)',
    category: 'universite',
    categoryLabel: 'Üniversite',
    person: 'Berk H.',
    age: 22,
    from: 'Türkiye',
    summary: 'Türkiye\'de üniversiteye başladı, 2. sınıfta Almanya\'ya transfer oldu.',
    story: `İstanbul'da mühendislik okuyan Berk, 2. sınıfta Almanya'ya transfer olmaya karar verdi. Eğitim kalitesi ve fırsatlar cezbetmişti ama transfer zorlu bir süreçti.

Önce B2 Almanca sertifikası aldı. Uni-Assist'e başvurdu. Transkript, ders içerikleri, ders tanımları... Her dersin içeriğini detaylı hazırladı. Kredi transferi için uğraştı.

Berlin Teknik Üniversitesi'nden kabul aldı ama bazı dersler denk sayılmadı. 2. sınıftan başlayacaktı, biraz kayıp olacaktı. Ama kabulü önemliydi.

Bloke hesap açtı, vize başvurusu yaptı. 6 aylık süreç sonunda Berlin'e geldi. Yeni okuluna, yeni hayatına alışmaya çalıştı.

Şimdi Berlin'de mühendislik eğitimine devam ediyor. "Transfer zor ama mümkün" diyor. Mezun olduktan sonra Almanya'da kalmayı planlıyor.`,
    timeline: 'Transfer: 6 ay',
    budget: '12.000€',
    challenges: [
      'Derslerin denkliği zordu',
      'Almanca B2 şartı vardı',
      'Kredi transferi uzun sürdü'
    ],
    solutions: [
      'Uni-Assist\'e başvurdum',
      'B2 Almanca aldım',
      'Transkript ve ders içeriklerini hazırladım'
    ],
    result: 'Berlin\'de üniversiteye devam ediyorum, 2. sınıftan başladım.',
    tips: [
      'Transfer için erken başvurun',
      'Ders içeriklerini detaylı hazırlayın',
      'B2 Almanca şart'
    ]
  },
  {
    id: 20,
    title: 'Ausbildung - Otel Personeli',
    category: 'ausbildung',
    categoryLabel: 'Ausbildung',
    person: 'Gizem S.',
    age: 20,
    from: 'Muğla',
    summary: 'Otelcilik Ausbildung yapıp, turizm sektöründe çalışmaya başladı.',
    story: `Muğla'da turizm lisesi mezunu Gizem, Almanya'da otelcilik yapmak istedi. Turizm sektöründe deneyim kazanmak için Ausbildung araştırdı.

Bodrum'da turizm sektöründe çalışırken B1 Almanca ve İngilizce sertifikası aldı. Münih'teki bir 5 yıldızlı otelden Ausbildung teklifi aldı.

3 yıllık eğitim başladı. Rezepsiyon, kat hizmetleri, yiyecek-içecek departmanlarında dönüşümlü çalıştı. Turizm sektörü mevsimlik yoğundu - yaz aylarında 50-60 saat çalışmak normaldi.

Müşteri ilişkileri zordu. Alman müşterilerin beklentileri yüksekti. Müşteri ilişkileri kursuna gitti. "Service", "Kundenzufriedenheit", "Beschwerdemanagement" öğrendi.

Ausbildung bittiğinde aynı otelde tam zamanlı iş teklifi aldı. Şimdi 2.500€ maaşla çalışıyor. "Turizm yoğun ama keyifli" diyor.`,
    timeline: 'Ausbildung: 3 yıl',
    budget: '1.500€',
    challenges: [
      'Turizm sektörü mevsimlik yoğun',
      'Müşteri ilişkileri zordu',
      'Almanca ve İngilizce şartı vardı'
    ],
    solutions: [
      'B1 Almanca ve İngilizce sertifikası aldım',
      'Müşteri ilişkileri kursuna gittim',
      'Mevsimlik yoğunluğa hazırlandım'
    ],
    result: 'Ausbildung bitti, şimdi bir 5 yıldızlı otelde 2.500€ maaşla çalışıyorum.',
    tips: [
      'Turizm sektörü mevsimlik yoğun',
      'Dil bilgisi çok önemli',
      'Müşteri ilişkileri kritik'
    ]
  },
  {
    id: 21,
    title: 'Aile Birleşimi - Boşanmış Ebeveyn ve Çocuk',
    category: 'aile',
    categoryLabel: 'Aile Birleşimi',
    person: 'Ece K.',
    age: 32,
    from: 'Bursa',
    summary: 'Boşanmış anne, 1 çocuğuyla Almanya\'da çalışan babaya birleşti.',
    story: `Bursa'da yaşayan Ece, boşanmış bir anneydi. 7 yaşındaki oğlu Emir'in babası Hamburg'da çalışıyordu. Aile birleşimi için hazırlıklara başladılar.

Velayet belgeleri karmaşıktı. Boşanma kararı, velayet düzenlemesi, babanın razılığı... Tüm belgeleri apostil yaptırdılar. Babanın geliri ilk başta sınırdıydı, maaşını arttırdı.

Çocuk için zordu bu süreç. Babasına hasret, yeni bir ülke, yeni dil... Ece psikolojik destek aldı, çocuğa nasıl davranacağını öğrendi.

7 ay süren vize süreci sonunda Almanya'ya geldiler. Emir okula başladı, Almanca öğrendi. İlk aylar zor geçti ama zamanla alıştı.

Şimdi çocuğumla birlikte mutlu bir hayat kuruyorlar. "Çocukların duygusal desteğe ihtiyacı var" diyor Ece.`,
    timeline: 'Toplam 7 ay',
    budget: '4.000€',
    challenges: [
      'Velayet belgeleri karmaşıktı',
      'Babanın gelir şartını karşılaması zordu',
      'Çocuğun uyum süreci zordu'
    ],
    solutions: [
      'Velayet belgelerini apostil yaptırdım',
      'Baba maaşını arttırdı, şartı karşıladı',
      'Çocuk için psikolojik destek aldık'
    ],
    result: 'Çocuğumla birlikte başarılı bir şekilde geldik. Çocuk okula başladı, çok mutlu.',
    tips: [
      'Velayet belgelerini eksiksiz hazırlayın',
      'Gelir şartını net karşılayın',
      'Çocuğun duygusal desteğe ihtiyacı olabilir'
    ]
  },
  {
    id: 22,
    title: 'CNC Operatörü - İmalat Sektöründe Çalışmak',
    category: 'meslek',
    categoryLabel: 'Meslek ile Göç',
    person: 'Yusuf T.',
    age: 29,
    from: 'Kocaeli',
    summary: 'CNC operatörü olarak Almanya\'da imalat sektöründe çalışmaya başladı.',
    story: `Kocaeli'de bir otomotiv fabrikasında CNC operatörü olarak çalışan Yusuf, Almanya'da daha iyi imkanlar olduğunu duydu. CNC programlama bilgisi olan eleman aranıyordu.

Önce CNC programlama sertifikası aldı. Sonra teknik Almanca kursuna gitti. "Drehen", "Fraesen", "Programmierung" gibi terimleri öğrendi. B1 Almanca sertifikası aldı.

Stuttgart'taki bir otomotiv fabrikasıyla görüştü. Video mülakatta CNC bilgisini gösterdi, teknik soruları cevapladı. İş teklifi aldı.

Vize başvurusu yaptı, 3 hafta sonra vizesi onaylandı. Almanya'ya geldi, vardiya sistemine alıştı. İmalat sektörü yoğundu ama kazançlıydı.

Şimdi 3.200€ maaşla CNC operatörü olarak çalışıyor. "İmalat sektöründe çok fırsat var" diyor.`,
    timeline: 'İş bulma: 1.5 ay, Vize: 3 hafta',
    budget: '2.800€',
    challenges: [
      'CNC programlama bilgisi şarttı',
      'Teknik Almanca zordu',
      'Vardiya sistemi vardı'
    ],
    solutions: [
      'CNC programlama sertifikası aldım',
      'Teknik Almanca kursuna gittim',
      'Vardiya sistemine alıştım'
    ],
    result: 'Bir otomotiv fabrikasında CNC operatörü olarak çalışıyorum. Maaşım 3.200€.',
    tips: [
      'CNC programlama bilgisi şart',
      'Teknik Almanca öğrenin',
      'İmalat sektörü çok aranıyor'
    ]
  }
];

const categoryLabels: Record<Category, string> = {
  all: 'Tümü',
  aile: 'Aile Birleşimi',
  meslek: 'Meslek ile Göç',
  universite: 'Üniversite',
  ausbildung: 'Ausbildung',
  problemli: 'Problem ve Çözüm'
};

export function GercekSenaryolar() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const filteredScenarios = scenarios.filter(scenario => {
    const matchesCategory = selectedCategory === 'all' || scenario.category === selectedCategory;
    const matchesSearch = scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scenario.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scenario.person.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'aile': return Heart;
      case 'meslek': return Briefcase;
      case 'universite': return GraduationCap;
      case 'ausbildung': return BookOpen;
      case 'problemli': return AlertTriangle;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Gerçek Hikayeler</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gerçek Senaryolar
            </h1>
            <p className="text-xl text-blue-100">
              Almanya'ya göç edenlerin gerçek hikayeleri, yaşadıkları zorluklar ve çözümleri. 
              22 farklı senaryo ile kendi yolculuğunuza hazırlanın.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Senaryo, isim veya konu ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(categoryLabels) as Category[]).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {categoryLabels[category]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-6">
            {filteredScenarios.length} senaryo bulundu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => {
              const Icon = getCategoryIcon(scenario.category);
              return (
                <Card 
                  key={scenario.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedScenario(scenario)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={
                        scenario.category === 'aile' ? 'bg-rose-500' :
                        scenario.category === 'meslek' ? 'bg-blue-500' :
                        scenario.category === 'universite' ? 'bg-purple-500' :
                        scenario.category === 'ausbildung' ? 'bg-emerald-500' :
                        'bg-amber-500'
                      }>
                        <Icon className="h-3 w-3 mr-1" />
                        {scenario.categoryLabel}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Users className="h-4 w-4" />
                      <span>{scenario.person}, {scenario.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{scenario.from}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {scenario.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{scenario.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Euro className="h-4 w-4" />
                        <span>{scenario.budget}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scenario Detail Dialog */}
      <Dialog open={!!selectedScenario} onOpenChange={() => setSelectedScenario(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedScenario && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={
                    selectedScenario.category === 'aile' ? 'bg-rose-500' :
                    selectedScenario.category === 'meslek' ? 'bg-blue-500' :
                    selectedScenario.category === 'universite' ? 'bg-purple-500' :
                    selectedScenario.category === 'ausbildung' ? 'bg-emerald-500' :
                    'bg-amber-500'
                  }>
                    {selectedScenario.categoryLabel}
                  </Badge>
                </div>
                <DialogTitle className="text-xl">{selectedScenario.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedScenario.person}, {selectedScenario.age} yaşında, {selectedScenario.from}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Story */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Hikaye
                  </h4>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedScenario.story}
                  </div>
                </div>
                
                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Özet</h4>
                  <p className="text-gray-600">{selectedScenario.summary}</p>
                </div>

                {/* Timeline & Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-900 mb-1">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">Süreç</span>
                    </div>
                    <p className="text-blue-700">{selectedScenario.timeline}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-900 mb-1">
                      <Euro className="h-5 w-5" />
                      <span className="font-semibold">Bütçe</span>
                    </div>
                    <p className="text-emerald-700">{selectedScenario.budget}</p>
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Yaşanan Zorluklar
                  </h4>
                  <ul className="space-y-2">
                    {selectedScenario.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Çözümler
                  </h4>
                  <ul className="space-y-2">
                    {selectedScenario.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    Sonuç
                  </h4>
                  <p className="text-gray-700">{selectedScenario.result}</p>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    Tavsiyeler
                  </h4>
                  <ul className="space-y-2">
                    {selectedScenario.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sizin Hikayeniz Burada Olabilir
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Bu hikayelerden ilham alın ve kendi Almanya yolculuğunuza başlayın. 
            Her zorluğun bir çözümü var.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-bulucu">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Plane className="mr-2 h-5 w-5" />
                Vize Bulucu
              </Button>
            </Link>
            <Link to="/iletisim">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
