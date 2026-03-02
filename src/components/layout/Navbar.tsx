import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Plane, Instagram, Video, Globe, Mail, Briefcase, GraduationCap, BookOpen, Users, HelpCircle, CheckSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { socialMedia } from '@/data/extendedVisaTypes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Yeni menü yapısı
  const mainNavLinks = [
    { path: '/', label: 'Ana Sayfa', icon: Plane },
    { path: '/almanya-rehberi', label: 'Almanya Rehberi', icon: BookOpen },
    { path: '/vize-turleri', label: 'Vize Türleri', icon: Globe },
    { path: '/meslege-gore', label: 'Mesleğe Göre', icon: Briefcase },
    { path: '/ausbildung', label: 'Ausbildung', icon: GraduationCap },
    { path: '/universiteler', label: 'Üniversiteler', icon: BookOpen },
  ];

  const moreNavLinks = [
    { path: '/gercek-senaryolar', label: 'Gerçek Senaryolar', icon: Users },
    { path: '/basvuru-sureci', label: 'Başvuru Süreci', icon: CheckSquare },
    { path: '/gerekli-evraklar', label: 'Gerekli Evraklar', icon: FileText },
    { path: '/sss', label: 'Sıkça Sorulan Sorular', icon: HelpCircle },
    { path: '/iletisim', label: 'İletişim', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Social Media */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm hidden sm:block">
              Almanya'ya göç etmek isteyenler için kapsamlı rehber
            </p>
            <div className="flex items-center gap-4 ml-auto">
              <a 
                href={`https://instagram.com/${socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:underline"
              >
                <Instagram className="h-4 w-4" />
                <span className="hidden sm:inline">{socialMedia.instagram}</span>
              </a>
              <a 
                href={`https://tiktok.com/@${socialMedia.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:underline"
              >
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Almanya'ya Yol
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-sm">
                  Diğer <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {moreNavLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-sm text-blue-600">
                  Araçlar <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/vize-bulucu" className="cursor-pointer">🔍 Vize Bulucu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/is-ilanlari" className="cursor-pointer">💼 İş İlanları</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/vize-rehberi" className="cursor-pointer">📋 Vize Rehberi</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bloke-hesap" className="cursor-pointer">🏦 Bloke Hesap</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>TR</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer font-medium bg-blue-50">
                  🇹🇷 Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-500">
                  🇩🇪 Deutsch (Yakında)
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-gray-500">
                  🇬🇧 English (Yakında)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <a href="mailto:meteeski93@gmail.com">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Ana Menü</p>
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">Diğer</p>
            {moreNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase mt-4">Araçlar</p>
            <Link
              to="/vize-bulucu"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
            >
              🔍 Vize Bulucu
            </Link>
            <Link
              to="/is-ilanlari"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
            >
              💼 İş İlanları
            </Link>
            <Link
              to="/bloke-hesap"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
            >
              🏦 Bloke Hesap
            </Link>

            <div className="pt-2 border-t mt-4">
              <p className="px-3 py-2 text-sm font-semibold text-gray-500">
                Sosyal Medya
              </p>
              <a 
                href={`https://instagram.com/${socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                <Instagram className="h-4 w-4" />
                {socialMedia.instagram}
              </a>
              <a 
                href={`https://tiktok.com/@${socialMedia.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                <Video className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
