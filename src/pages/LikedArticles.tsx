import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, Heart, Trash2 } from 'lucide-react';
import { articles } from '../data/mockData';
import { Article } from '../types';

export const LikedArticles: React.FC = () => {
  const [likedArticles, setLikedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('liked_articles') || '[]');
    const filtered = articles.filter(a => likedIds.includes(a.id));
    setLikedArticles(filtered);
  }, []);

  const handleRemoveLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const likedIds = JSON.parse(localStorage.getItem('liked_articles') || '[]');
    const newLikedIds = likedIds.filter((likedId: string) => likedId !== id);
    localStorage.setItem('liked_articles', JSON.stringify(newLikedIds));
    setLikedArticles(likedArticles.filter(a => a.id !== id));
  };

  return (
    <div className="pb-20 pt-10 bg-white min-h-screen">
      <Helmet>
        <title>כתבות שאהבתי | יזמות וקריירה</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900">כתבות שאהבתי</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            כל הכתבות שסימנתם בלב, מרוכזות במקום אחד.
          </p>
        </div>

        {likedArticles.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">עדיין לא אהבתם אף כתבה</h2>
            <p className="text-slate-500 mb-8">זה הזמן לחזור לבלוג ולמצוא תכנים מעניינים!</p>
            <Link to="/" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-secondary transition-colors">
              חזרה לבלוג
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {likedArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/blog/${article.id}`}
                className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-brand-primary/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                  <div className="md:col-span-2 aspect-video md:aspect-square rounded-2xl overflow-hidden border border-slate-100 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={(e) => handleRemoveLike(article.id, e)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                      title="הסרה מהמועדפים"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
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
                    <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                      קרא עוד <ChevronLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
