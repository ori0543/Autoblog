import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>תקנון שימוש באתר | אוטו-בלוג</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-slate-900">📄 תקנון שימוש באתר</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>ברוכים הבאים לאתר [אוטו בלוג].</p>
          <p>השימוש באתר כפוף לתנאים המפורטים להלן. גלישה באתר מהווה הסכמה לתקנון זה.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. כללי</h2>
          <p>האתר מספק מידע, תוכן, השוואות והמלצות בתחום הרכבים. התוכן מוצג למטרות מידע בלבד ואינו מהווה ייעוץ מקצועי, המלצה לרכישה או תחליף לבדיקה עצמאית.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. אחריות</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>כל המידע באתר עשוי להשתנות מעת לעת.</li>
            <li>הנהלת האתר אינה אחראית לטעויות, אי-דיוקים או נזקים שייגרמו כתוצאה מהסתמכות על התוכן.</li>
            <li>שימוש במידע באתר הוא באחריות המשתמש בלבד.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. שימוש באתר</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>אין לעשות שימוש בלתי חוקי באתר.</li>
            <li>אין להעתיק, לשכפל או להפיץ תוכן ללא אישור.</li>
            <li>אין לבצע פעולות שעלולות לפגוע באתר או במשתמשים אחרים.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. קניין רוחני</h2>
          <p>כל התוכן באתר, כולל טקסטים, עיצוב, תמונות ולוגו, שייך לבעלי האתר ואין להשתמש בו ללא אישור.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">5. פרסומות ותוכן צד שלישי</h2>
          <p>האתר עשוי להציג פרסומות ותכנים מצדדים שלישיים, לרבות דרך Google AdSense. האתר אינו אחראי לתוכן הפרסומות או לשירותים המוצעים בהם.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">6. שינויים בתקנון</h2>
          <p>הנהלת האתר רשאית לעדכן את התקנון בכל עת ללא הודעה מוקדמת.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">7. יצירת קשר</h2>
          <p>לכל שאלה ניתן לפנות דרך עמוד "צור קשר" באתר.</p>
        </div>
      </div>
    </div>
  );
};
