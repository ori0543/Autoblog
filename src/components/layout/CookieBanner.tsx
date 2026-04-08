import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:w-[400px] z-[60]"
          dir="rtl"
        >
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -mr-12 -mt-12" />
            
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Cookie className="text-brand-primary w-6 h-6" />
              </div>
              
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-900 mb-2">אנחנו משתמשים בעוגיות</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  האתר משתמש בעוגיות כדי לשפר את חוויית הגלישה שלך, לנתח תנועה ולהציג פרסומות מותאמות אישית. 
                  למידע נוסף, עיין ב<Link to="/privacy-policy" className="text-brand-primary hover:underline font-bold">מדיניות הפרטיות</Link> שלנו.
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={acceptCookies}
                    className="flex-grow bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
                  >
                    אישור והמשך
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-3 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="סגור"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
