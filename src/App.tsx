import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { VisaTypes } from './pages/VisaTypes';
import { VisaDetail } from './pages/VisaDetail';
import { Recognition } from './pages/Recognition';
import { ApplicationProcess } from './pages/ApplicationProcess';
import { Documents } from './pages/Documents';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { ProfessionPaths } from './pages/ProfessionPaths';
import { StateRules } from './pages/StateRules';
import { VisaSubTypes } from './pages/VisaSubTypes';
import { OnlineApplication } from './pages/OnlineApplication';
import { VisaGuide } from './pages/VisaGuide';
import { VizeBulucu } from './pages/VizeBulucu';
import { KimlerGelemez } from './pages/KimlerGelemez';
import { AfterArrival } from './pages/AfterArrival';
import { StudentGuide } from './pages/StudentGuide';
import { WorkLife } from './pages/WorkLife';
import { FamilyGuide } from './pages/FamilyGuide';
import { VisaRejection } from './pages/VisaRejection';
import { JobBoard } from './pages/JobBoard';

// Yeni sayfalar
import { AlmanyaRehberi } from './pages/AlmanyaRehberi';
import { AileBirlesimi } from './pages/AileBirlesimi';
import { MeslegeGore } from './pages/MeslegeGore';
import { MeslekDetay } from './pages/MeslekDetay';
import { Universiteler } from './pages/Universiteler';
import { BlokeHesap } from './pages/BlokeHesap';
import { Ausbildung } from './pages/Ausbildung';
import { GercekSenaryolar } from './pages/GercekSenaryolar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Ana Sayfalar */}
            <Route path="/" element={<Home />} />
            <Route path="/almanya-rehberi" element={<AlmanyaRehberi />} />
            
            {/* Vize Sayfaları */}
            <Route path="/vize-turleri" element={<VisaTypes />} />
            <Route path="/vize/:id" element={<VisaDetail />} />
            <Route path="/vize-alt-turleri" element={<VisaSubTypes />} />
            <Route path="/vize-rehberi" element={<VisaGuide />} />
            <Route path="/vize-bulucu" element={<VizeBulucu />} />
            <Route path="/kimler-gelemez" element={<KimlerGelemez />} />
            <Route path="/vize-redi-sonrasi" element={<VisaRejection />} />
            
            {/* Başvuru Süreci */}
            <Route path="/basvuru-sureci" element={<ApplicationProcess />} />
            <Route path="/online-basvuru" element={<OnlineApplication />} />
            <Route path="/gerekli-evraklar" element={<Documents />} />
            
            {/* Meslek ve Çalışma */}
            <Route path="/meslek-bazli-goc" element={<ProfessionPaths />} />
            <Route path="/meslege-gore" element={<MeslegeGore />} />
            <Route path="/meslek/:id" element={<MeslekDetay />} />
            <Route path="/mesleki-denklik" element={<Recognition />} />
            <Route path="/calisma-hayati" element={<WorkLife />} />
            <Route path="/is-ilanlari" element={<JobBoard />} />
            
            {/* Aile */}
            <Route path="/aile-rehberi" element={<FamilyGuide />} />
            <Route path="/aile-birlesimi" element={<AileBirlesimi />} />
            
            {/* Eğitim */}
            <Route path="/ogrenci-rehberi" element={<StudentGuide />} />
            <Route path="/universiteler" element={<Universiteler />} />
            <Route path="/ausbildung" element={<Ausbildung />} />
            
            {/* Araçlar */}
            <Route path="/bloke-hesap" element={<BlokeHesap />} />
            <Route path="/eyalet-kurallari" element={<StateRules />} />
            
            {/* Diğer */}
            <Route path="/geldikten-sonra" element={<AfterArrival />} />
            <Route path="/gercek-senaryolar" element={<GercekSenaryolar />} />
            <Route path="/sss" element={<FAQ />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
