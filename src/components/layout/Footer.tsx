import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-md">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">אוטו-בלוג</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              מגזין הרכב המוביל בישראל. אנחנו כאן כדי לעזור לכם להבין את עולם הרכב טוב יותר, עם כתבות מקצועיות, השוואות מעמיקות ומדריכים שיחסכו לכם כסף.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-slate-900">ניווט מהיר</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">בית</Link></li>
              <li><Link to="/" className="hover:text-brand-primary transition-colors">בלוג ומדריכים</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-slate-900">קטגוריות</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><button className="hover:text-brand-primary transition-colors">מדריכים</button></li>
              <li><button className="hover:text-brand-primary transition-colors">קנייה</button></li>
              <li><button className="hover:text-brand-primary transition-colors">תחזוקה</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-slate-900">צור קשר</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>info@autoblog.co.il</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 אוטו-בלוג. כל הזכויות שמורות.</p>
          <div className="flex gap-6">
            <Link to="/terms-of-use" className="hover:text-slate-900 transition-colors">תנאי שימוש</Link>
            <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">מדיניות פרטיות</Link>
            <Link to="/accessibility" className="hover:text-slate-900 transition-colors">הצהרת נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
