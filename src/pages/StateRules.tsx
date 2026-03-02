import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Briefcase,
  Code,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stateSpecificRules } from '@/data/extendedVisaTypes';

const stateColors: Record<string, string> = {
  "NRW": "from-blue-600 to-blue-800",
  "BE": "from-red-600 to-red-800",
  "BY": "from-amber-600 to-amber-800",
  "BW": "from-yellow-500 to-yellow-700"
};

const stateIcons: Record<string, React.ElementType> = {
  "NRW": GraduationCap,
  "BE": Briefcase,
  "BY": Building2,
  "BW": Code
};

export function StateRules() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Eyalet Farklılıkları
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Almanya Eyaletlerinde Özel Kurallar
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Almanya'nın 16 eyaletinin (Bundesland) her birinde göç ve çalışma 
              kuralları küçük farklılıklar gösterebilir. Hangi eyalette hangi avantajlar 
              var, öğrenin.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">16</span>
                <span className="text-sm ml-2 text-indigo-200">Eyalet</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">Özel</span>
                <span className="text-sm ml-2 text-indigo-200">Kurallar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Rules Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bilmeniz Gereken Eyalet Kuralları
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bazı eyaletler belirli meslek grupları için özel kolaylıklar veya 
              hızlandırılmış süreçler sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stateSpecificRules.map((rule, idx) => {
              const Icon = stateIcons[rule.stateCode] || MapPin;
              const gradient = stateColors[rule.stateCode] || "from-gray-600 to-gray-800";
              
              return (
                <Card key={idx} className="overflow-hidden border-2 border-transparent hover:border-indigo-200 transition-all">
                  <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{rule.state}</h3>
                        <p className="text-white/80 text-sm">{rule.rule}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-6">{rule.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Uygulanan Meslekler:</p>
                      <div className="flex flex-wrap gap-2">
                        {rule.applicableProfessions.map((prof, i) => (
                          <Badge key={i} variant="secondary">{prof}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Gereksinimler:</p>
                      <ul className="space-y-1">
                        {rule.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Info className="h-4 w-4" />
                      <span>Kaynak: {rule.source}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-amber-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Önemli Bilgilendirme
              </h3>
              <p className="text-amber-700 mb-4">
                Eyalet kuralları sürekli değişebilir. Başvuru yapmadan önce mutlaka 
                ilgili eyaletin resmi kaynaklarını kontrol edin. Aşağıdaki bağlantılar 
                güncel bilgilere ulaşmanızı sağlar.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.anerkennung-in-deutschland.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Anerkennung Portal
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a 
                  href="https://www.make-it-in-germany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Make it in Germany
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All States Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tüm Almanya Eyaletleri
            </h2>
            <p className="text-lg text-gray-600">
              Almanya'nın 16 federal eyaleti ve özellikleri.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Baden-Württemberg", code: "BW", capital: "Stuttgart" },
              { name: "Bavyera", code: "BY", capital: "Münih" },
              { name: "Berlin", code: "BE", capital: "Berlin" },
              { name: "Brandenburg", code: "BB", capital: "Potsdam" },
              { name: "Bremen", code: "HB", capital: "Bremen" },
              { name: "Hamburg", code: "HH", capital: "Hamburg" },
              { name: "Hessen", code: "HE", capital: "Wiesbaden" },
              { name: "Mecklenburg-Vorpommern", code: "MV", capital: "Schwerin" },
              { name: "Aşağı Saksonya", code: "NI", capital: "Hannover" },
              { name: "Kuzey Ren-Vestfalya", code: "NRW", capital: "Düsseldorf" },
              { name: "Rheinland-Pfalz", code: "RP", capital: "Mainz" },
              { name: "Saarland", code: "SL", capital: "Saarbrücken" },
              { name: "Saksonya", code: "SN", capital: "Dresden" },
              { name: "Saksonya-Anhalt", code: "ST", capital: "Magdeburg" },
              { name: "Schleswig-Holstein", code: "SH", capital: "Kiel" },
              { name: "Turingiya", code: "TH", capital: "Erfurt" }
            ].map((state, idx) => (
              <Card key={idx} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-bold text-lg text-gray-900">{state.code}</p>
                  <p className="text-xs text-gray-600 mt-1">{state.name}</p>
                  <p className="text-xs text-gray-400">{state.capital}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mesleğinize Göre Eyalet Seçin
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Hangi eyalette hangi meslekler için avantajlar var, öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/meslek-bazli-goc">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
                Meslek Bazlı Rehber
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vize-alt-turleri">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Vize Alt Türleri
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
