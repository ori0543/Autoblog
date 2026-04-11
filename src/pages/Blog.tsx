import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Search, Calendar, User, Tag, ArrowRight, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { articles } from '../data/mockData';
import { GoogleAd } from '../components/ads/GoogleAd';

export const Blog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState<string>('הכל');
  const [localSearch, setLocalSearch] = useState('');

  const categories = ['הכל', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'הכל' || article.category === activeCategory;
      
      const searchTerm = query.toLowerCase();
      const localTerm = localSearch.toLowerCase();
      
      const matchesQuery = !query || 
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm);
        
      const matchesLocal = !localSearch ||
        article.title.toLowerCase().includes(localTerm) ||
        article.excerpt.toLowerCase().includes(localTerm) ||
        article.content.toLowerCase().includes(localTerm);
      
      return matchesCategory && matchesQuery && matchesLocal;
    });
  }, [activeCategory, query, localSearch]);

  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>יזמות וקריירה | המדריך הפיננסי שלך</title>
        <meta name="description" content="כל מה שחדש ומעניין בעולם היזמות, הקריירה והכלכלה האישית." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic underline decoration-brand-primary/20 underline-offset-8 text-slate-900">יזמות וקריירה: המדריך להצלחה</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            כל מה שחדש ומעניין בעולם היזמות, הקריירה והכלכלה האישית: כתבות, מדריכים וטיפים מעשיים.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Local Search */}
            <div className="relative w-full md:w-96 group">
              <input
                type="text"
                placeholder="חפשו בתוך הכתבות..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-12 pl-4 text-slate-900 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
              {localSearch && (
                <button 
                  onClick={() => setLocalSearch('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {query && (
            <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-4 py-2 rounded-lg w-fit">
              <span>תוצאות חיפוש עבור: <strong>{query}</strong></span>
              <Link to="/" className="text-brand-primary hover:underline text-sm font-bold">ביטול</Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <React.Fragment key={article.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={`/blog/${article.id}`}
                      className="group block bg-white border border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden hover:border-brand-primary/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                    >
                      <div className="grid grid-cols-12 gap-4 md:gap-8 p-3 md:p-6">
                        <div className="col-span-4 md:col-span-5 aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-slate-100">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="col-span-8 md:col-span-7 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[10px] md:text-xs text-slate-400 mb-2 md:mb-4 font-bold uppercase tracking-widest">
                            <span className="text-brand-primary">{article.category}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {article.date}
                            </div>
                          </div>
                          <h2 className="text-base md:text-3xl font-bold mb-2 md:mb-4 text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                          <div className="flex items-center gap-2 text-brand-primary font-bold text-xs md:text-sm">
                            קרא עוד <ChevronLeft className="w-3 h-3 md:w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                  {(index + 1) % 3 === 0 && <GoogleAd className="max-w-4xl mx-auto" />}
                </React.Fragment>
              ))
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">לא נמצאו כתבות</h3>
                <p className="text-slate-500">נסו לחפש משהו אחר או לשנות קטגוריה.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
