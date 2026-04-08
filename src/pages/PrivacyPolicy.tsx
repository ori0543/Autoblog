import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>מדיניות פרטיות | אוטו-בלוג</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-slate-900">🔒 מדיניות פרטיות</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>הפרטיות שלך חשובה לנו. מסמך זה מסביר כיצד אנו אוספים ומשתמשים במידע.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. איסוף מידע</h2>
          <p>בעת שימוש באתר ייתכן וייאסף מידע כגון:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>כתובת IP</li>
            <li>סוג דפדפן</li>
            <li>דפים בהם ביקרת</li>
            <li>זמן שהייה באתר</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Cookies (עוגיות)</h2>
          <p>האתר משתמש בקובצי Cookies לצורך:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>שיפור חוויית המשתמש</li>
            <li>ניתוח תנועה</li>
            <li>הצגת פרסומות מותאמות אישית</li>
          </ul>
          <p>ייתכן כי צדדים שלישיים, כגון Google AdSense, משתמשים גם הם בעוגיות.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. שימוש במידע</h2>
          <p>המידע נאסף לצורך:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>שיפור האתר</li>
            <li>התאמת תוכן ופרסומות</li>
            <li>ניתוח שימוש באתר</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. שיתוף מידע</h2>
          <p>האתר אינו מוכר או משתף מידע אישי עם צדדים שלישיים, למעט במקרים הבאים:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>דרישה חוקית</li>
            <li>שימוש בשירותים חיצוניים (כגון Google AdSense)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">5. אבטחת מידע</h2>
          <p>האתר נוקט באמצעים סבירים להגנה על המידע, אך אין אפשרות להבטיח אבטחה מוחלטת.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">6. זכויות המשתמש</h2>
          <p>באפשרותך:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>לבקש לעיין במידע שנאסף</li>
            <li>לבקש מחיקת מידע (במידה וקיים)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">7. שינויים במדיניות</h2>
          <p>הנהלת האתר רשאית לעדכן מדיניות זו מעת לעת.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">8. יצירת קשר</h2>
          <p>לשאלות בנושא פרטיות ניתן לפנות דרך עמוד "צור קשר".</p>
        </div>
      </div>
    </div>
  );
};
