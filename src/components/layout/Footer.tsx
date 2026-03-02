import { Link } from 'react-router-dom';
import { Plane, Mail, ExternalLink, Instagram, Video, Megaphone } from 'lucide-react';
import { visaTypes } from '@/data/visaTypes';
import { socialMedia } from '@/data/extendedVisaTypes';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Ad Space */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-dashed border-gray-600 rounded-xl p-8 text-center">
            <div className="bg-gray-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Megaphone className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-400 font-medium text-lg mb-2">Reklam Alanı</p>
            <p className="text-gray-500 text-sm mb-4">
              Almanya'ya Yol'da reklam vermek için bizimle iletişime geçin
            </p>
            <a 
              href="mailto:meteeski93@gmail.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Mail className="h-4 w-4" />
              meteeski93@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Almanya'ya Yol
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Türkiye'den Almanya'ya gitmek isteyenler için kapsamlı vize 
              rehberi. Tüm vize türleri, başvuru süreçleri ve mesleki denklik 
              hakkında detaylı bilgiler.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:meteeski93@gmail.com" className="hover:text-white transition-colors">
                meteeski93@gmail.com
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Bizi Takip Edin</p>
              <div className="flex gap-3">
                <a 
                  href={`https://instagram.com/${socialMedia.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href={`https://tiktok.com/@${socialMedia.tiktok.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Video className="h-5 w-5 text-white" />
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">{socialMedia.instagram}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/vize-turleri" className="hover:text-white transition-colors">
                  Vize Türleri
                </Link>
              </li>
              <li>
                <Link to="/vize-alt-turleri" className="hover:text-white transition-colors">
                  Vize Alt Türleri
                </Link>
              </li>
              <li>
                <Link to="/meslek-bazli-goc" className="hover:text-white transition-colors">
                  Meslek Bazlı Göç
                </Link>
              </li>
              <li>
                <Link to="/eyalet-kurallari" className="hover:text-white transition-colors">
                  Eyalet Kuralları
                </Link>
              </li>
              <li>
                <Link to="/online-basvuru" className="hover:text-white transition-colors">
                  Online Başvuru
                </Link>
              </li>
              <li>
                <Link to="/basvuru-sureci" className="hover:text-white transition-colors">
                  Başvuru Süreci
                </Link>
              </li>
              <li>
                <Link to="/gerekli-evraklar" className="hover:text-white transition-colors">
                  Gerekli Evraklar
                </Link>
              </li>
              <li>
                <Link to="/sss" className="hover:text-white transition-colors">
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Visa Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popüler Vize Türleri</h3>
            <ul className="space-y-2">
              {visaTypes.slice(0, 6).map((visa) => (
                <li key={visa.id}>
                  <Link 
                    to={`/vize/${visa.id}`} 
                    className="hover:text-white transition-colors"
                  >
                    {visa.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resmi Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://idata.com.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  iDATA <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://digital.diplo.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Dijital Vize Portalı <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.auswaertiges-amt.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Almanya Dışişleri Bakanlığı <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.anerkennung-in-deutschland.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Anerkennung in Deutschland <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.make-it-in-germany.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Make it in Germany <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.arbeitsagentur.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Federal İş Ajansı <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} Almanya'ya Yol. Tüm hakları saklıdır.
          </p>
          <p className="mt-2 text-gray-500">
            Bu site bilgilendirme amaçlıdır. Resmi başvurular için yetkili 
            kurumlara başvurunuz.
          </p>
          <p className="mt-4 text-gray-600">
            Sosyal Medya: {socialMedia.instagram} | TikTok: {socialMedia.tiktok}
          </p>
        </div>
      </div>
    </footer>
  );
}
