import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { articles } from '../data/mockData';

export const Blog: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>אוטו-בלוג | המדריך המלא לרכבים</title>
        <meta name="description" content="כל מה שחדש ומעניין בעולם הרכב: כתבות, מדריכים וסקירות מקצועיות." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic underline decoration-brand-primary/20 underline-offset-8 text-slate-900">אוטו-בלוג: המדריך המלא לרכבים</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            כל מה שחדש ומעניין בעולם הרכב: כתבות, מדריכים וסקירות מקצועיות.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {articles.map((article, index) => (
              <React.Fragment key={article.id}>
                <Link 
                  to={`/blog/${article.id}`}
                  className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-brand-primary/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                    <div className="md:col-span-2 aspect-video md:aspect-square rounded-2xl overflow-hidden border border-slate-100">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
                        <span className="text-brand-primary">{article.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                        קרא עוד <ChevronLeft className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="text-xl font-serif font-bold mb-6 text-slate-900">קטגוריות</h4>
                <div className="flex flex-wrap gap-2">
                  {['מדריכים', 'קנייה', 'תחזוקה', 'חדשות'].map(cat => (
                    <button key={cat} className="bg-white hover:bg-brand-primary hover:text-white border border-slate-200 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-sm">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
