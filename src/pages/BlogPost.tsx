import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, Share2, Heart } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { articles } from '../data/mockData';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

export const BlogPost: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4 bg-white">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4 text-slate-900">המאמר לא נמצא</h1>
          <p className="text-slate-500 mb-8">מצטערים, לא הצלחנו למצוא את המאמר שחיפשתם.</p>
          <Link to="/" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>{article.title} | אוטו-בלוג</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-brand-primary text-sm font-bold mb-8">
              <Link to="/" className="hover:underline">בית</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-slate-400">{article.title}</span>
            </div>

            <article>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-bold uppercase tracking-widest">
                <span className="text-brand-primary">{article.category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-slate-900">
                {article.title}
              </h1>

              <AdPlaceholder label="פרסומת עליונה" />

              <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-slate-100 shadow-lg">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-slate prose-lg max-w-none">
                <div className="text-slate-700 text-lg leading-relaxed space-y-6 markdown-content">
                  {article.content.split('\n\n').map((chunk, index) => (
                    <React.Fragment key={index}>
                      <ReactMarkdown>{chunk}</ReactMarkdown>
                      {(index + 1) % 3 === 0 && (
                        <AdPlaceholder label={`פרסומת תוכן ${Math.floor(index / 3) + 1}`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <AdPlaceholder label="פרסומת אמצע מאמר" />
              <AdPlaceholder label="פרסומת נוספת" />

              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-600 px-6 py-2 rounded-full transition-colors border border-slate-200">
                    <Share2 className="w-4 h-4" />
                    <span>שיתוף</span>
                  </button>
                  <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-600 px-6 py-2 rounded-full transition-colors border border-slate-200">
                    <Heart className="w-4 h-4" />
                    <span>אהבתי</span>
                  </button>
                </div>
              </div>
            </article>

            <AdPlaceholder label="פרסומת תחתונה" className="mt-20" />
          </div>

          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <AdPlaceholder label="פרסומת צד מאמר" className="min-h-[400px]" />
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="text-xl font-serif font-bold mb-6 text-slate-900">כתבות נוספות</h4>
                <div className="space-y-6">
                  {articles.filter(a => a.id !== article.id).slice(0, 3).map(a => (
                    <Link key={a.id} to={`/blog/${a.id}`} className="group block">
                      <h5 className="text-sm font-bold group-hover:text-brand-primary transition-colors line-clamp-2 mb-2">{a.title}</h5>
                      <span className="text-xs text-slate-400">{a.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <AdPlaceholder label="פרסומת צד נוספת" className="min-h-[250px]" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
