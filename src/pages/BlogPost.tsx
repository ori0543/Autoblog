import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, Share2, Heart, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { articles } from '../data/mockData';
import { GoogleAd } from '../components/ads/GoogleAd';

export const BlogPost: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === articleId);
  
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    if (articleId) {
      const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '[]');
      setIsLiked(likedArticles.includes(articleId));
    }
  }, [articleId]);

  const handleLike = () => {
    if (!articleId) return;
    
    const likedArticles = JSON.parse(localStorage.getItem('liked_articles') || '[]');
    let newLikedArticles;
    
    if (isLiked) {
      newLikedArticles = likedArticles.filter((id: string) => id !== articleId);
    } else {
      newLikedArticles = [...likedArticles, articleId];
    }
    
    localStorage.setItem('liked_articles', JSON.stringify(newLikedArticles));
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    const shareData = {
      title: article?.title,
      text: article?.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

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
        <title>{article.title} | יזמות וקריירה</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <div className="">
            <div className="flex items-center gap-2 text-brand-primary text-sm font-bold mb-8">
              <Link to="/" className="hover:underline">בית</Link>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-slate-400">{article.title}</span>
            </div>

            <article>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-slate-900">
                {article.title}
              </h1>

              <GoogleAd />

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
                      {(index + 1) % 4 === 0 && <GoogleAd />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-4">
                  <button 
                    onClick={handleShare}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all border ${
                      isShared 
                        ? 'bg-green-50 text-green-600 border-green-200' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {isShared ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                    <span>{isShared ? 'הקישור הועתק' : 'שיתוף'}</span>
                  </button>
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all border ${
                      isLiked 
                        ? 'bg-red-50 text-red-600 border-red-200' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{isLiked ? 'אהבתי' : 'אהבתי'}</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
