import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { extendedFAQData, faqCategories } from '@/data/extendedFAQ';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Flatten all questions with IDs
  const allQuestions = extendedFAQData.flatMap((cat) => 
    cat.questions.map((q, qIdx) => ({ 
      ...q, 
      category: cat.category, 
      id: `${cat.category}-${qIdx}` 
    }))
  );

  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory 
      ? allQuestions.filter(q => q.category === activeCategory)
      : allQuestions;

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Genel': 'bg-gray-500',
      'Şans Kartı': 'bg-emerald-500',
      'Mavi Kart': 'bg-blue-500',
      'Mesleki Denklik': 'bg-purple-500',
      'Aile Birleşimi': 'bg-rose-500',
      'Kalıcı Oturum': 'bg-amber-500',
      'Öğrenci Vizesi': 'bg-indigo-500',
      'Ausbildung': 'bg-teal-500',
      'İş Değişikliği': 'bg-cyan-500',
      'Sağlık Sigortası': 'bg-red-500',
      'Vergiler': 'bg-orange-500',
      'Konut': 'bg-lime-600',
      'Almanca': 'bg-pink-500',
      'Ret ve İtiraz': 'bg-red-600'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">SSS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Almanya vizesi ve göç hakkında en çok sorulan {allQuestions.length}+ sorunun cevabı. 
              Aradığınız cevabı bulamıyorsanız bize ulaşın.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Soru ara..."
                className="pl-12 py-6 text-lg bg-white border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {!searchQuery && (
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={activeCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(null)}
              >
                Tümü ({allQuestions.length})
              </Button>
              {faqCategories.map((cat) => {
                const count = allQuestions.filter(q => q.category === cat).length;
                return (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat} ({count})
                  </Button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sonuç bulunamadı</h3>
              <p className="text-gray-600">Aramanızla eşleşen soru bulunamadı. Farklı anahtar kelimeler deneyin.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                {filteredQuestions.length} soru bulundu
                {searchQuery && ` "${searchQuery}" için`}
                {activeCategory && ` - ${activeCategory}`}
              </p>
              <div className="space-y-4">
                {filteredQuestions.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left"
                    >
                      <CardHeader className="p-4 flex flex-row items-center justify-between hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 flex-1">
                          <Badge className={`${getCategoryColor(item.category)} text-white text-xs whitespace-nowrap`}>
                            {item.category}
                          </Badge>
                          <CardTitle className="text-base font-medium">
                            {item.q}
                          </CardTitle>
                        </div>
                        {expandedItems[item.id] ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </CardHeader>
                    </button>
                    {expandedItems[item.id] && (
                      <CardContent className="px-4 pb-4 pt-0">
                        <div className="pl-[88px] pr-4">
                          <p className="text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            En Çok Aranan Sorular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { q: "Almanya vizesi kaç günde çıkar?", a: "Turistik: 7-15 gün, Çalışma: 4-12 hafta" },
              { q: "Mavi Kart maaş şartı nedir?", a: "2026 için 48.300€ (normal) veya 43.760€ (eksik meslekler)" },
              { q: "Bloke hesap ne kadar?", a: "2026 için yıllık 11.904€ (aylık 992€)" },
              { q: "Aile birleşimi ne kadar sürer?", a: "Mavi Kart'ta hemen, diğerlerinde 3-6 ay" },
              { q: "Kalıcı oturum ne zaman alınır?", a: "Mavi Kart: 21-33 ay, Diğer: 5 yıl" },
              { q: "Ausbildung maaşları ne kadar?", a: "700-1.400€ arası, yıla ve mesleğe göre değişir" }
            ].map((item, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 mb-2">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hala Sorunuz mu Var?
            </h2>
            <p className="text-lg text-gray-600">
              Cevabını bulamadığınız sorular için resmi kaynaklara başvurabilir veya bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a 
              href="https://idata.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">iDATA</h3>
                  <p className="text-sm text-gray-600">
                    Resmi vize başvuru merkezi
                  </p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://www.make-it-in-germany.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Make it in Germany</h3>
                  <p className="text-sm text-gray-600">
                    Almanya göç portalı
                  </p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://www.anerkennung-in-deutschland.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Anerkennung</h3>
                  <p className="text-sm text-gray-600">
                    Mesleki denklik portalı
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Link to="/iletisim">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Bize Soru Sorun
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hazır mısınız?
          </h2>
          <p className="text-lg text-amber-100 mb-8">
            Tüm sorularınızın cevabını aldıysanız başvuru sürecine başlayabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vize-turleri">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Vize Türlerini Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vize-bulucu">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Vize Bulucu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
