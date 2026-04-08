import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Accessibility: React.FC = () => {
  return (
    <div className="pb-20 pt-10 bg-white">
      <Helmet>
        <title>הצהרת נגישות | אוטו-בלוג</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8 text-slate-900">הצהרת נגישות</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>
            אנו באוטו-בלוג רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים ובשיפור חווית הגלישה לאנשים עם מוגבלויות.
            אנו משקיעים משאבים רבים כדי להפוך את האתר לנגיש, מתוך אמונה כי לכל אדם מגיעה הזכות לחיות בשוויון, בכבוד, בנוחות ובעצמאות.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">כיצד הנגישות באה לידי ביטוי באתר?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>תמיכה בטכנולוגיות מסייעות (קוראי מסך).</li>
            <li>ניווט באמצעות המקלדת.</li>
            <li>התאמה לכל סוגי הדפדפנים והמכשירים.</li>
            <li>שימוש בצבעים עם ניגודיות גבוהה.</li>
            <li>הוספת תיאור טקסטואלי לתמונות (Alt text).</li>
          </ul>
          <p className="mt-8">
            אם נתקלתם בקושי או שיש לכם הצעה לשיפור הנגישות, נשמח לשמוע מכם במייל: info@autoblog.co.il
          </p>
        </div>
      </div>
    </div>
  );
};
