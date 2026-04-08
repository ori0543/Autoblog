import React, { useState, useEffect } from 'react';
import { Accessibility, X, Type, Contrast, Eye, Underline, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    largeFont: false,
    highContrast: false,
    grayscale: false,
    underlineLinks: false,
    readableFont: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetSettings = () => {
    setSettings({
      largeFont: false,
      highContrast: false,
      grayscale: false,
      underlineLinks: false,
      readableFont: false,
    });
  };

  useEffect(() => {
    const body = document.body;
    if (settings.largeFont) body.classList.add('large-font'); else body.classList.remove('large-font');
    if (settings.highContrast) body.classList.add('high-contrast'); else body.classList.remove('high-contrast');
    if (settings.grayscale) body.classList.add('grayscale'); else body.classList.remove('grayscale');
    if (settings.underlineLinks) body.classList.add('underline-links'); else body.classList.remove('underline-links');
    if (settings.readableFont) body.classList.add('readable-font'); else body.classList.remove('readable-font');
  }, [settings]);

  return (
    <div className="fixed bottom-6 right-6 z-50" dir="rtl">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
        aria-label="תפריט נגישות"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
      </button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-72 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-serif font-bold text-slate-900">תפריט נגישות</h3>
              <button 
                onClick={resetSettings}
                className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-1 text-xs font-bold"
              >
                <RefreshCcw className="w-3 h-3" />
                איפוס
              </button>
            </div>

            <div className="p-4 space-y-2">
              <AccessibilityOption
                icon={<Type className="w-5 h-5" />}
                label="הגדלת טקסט"
                active={settings.largeFont}
                onClick={() => toggleSetting('largeFont')}
              />
              <AccessibilityOption
                icon={<Contrast className="w-5 h-5" />}
                label="ניגודיות גבוהה"
                active={settings.highContrast}
                onClick={() => toggleSetting('highContrast')}
              />
              <AccessibilityOption
                icon={<Eye className="w-5 h-5" />}
                label="גווני אפור"
                active={settings.grayscale}
                onClick={() => toggleSetting('grayscale')}
              />
              <AccessibilityOption
                icon={<Underline className="w-5 h-5" />}
                label="הדגשת קישורים"
                active={settings.underlineLinks}
                onClick={() => toggleSetting('underlineLinks')}
              />
              <AccessibilityOption
                icon={<Type className="w-5 h-5" />}
                label="גופן קריא"
                active={settings.readableFont}
                onClick={() => toggleSetting('readableFont')}
              />
            </div>
            
            <div className="p-4 bg-slate-50 text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                אוטו-בלוג • נגישות לכולם
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface OptionProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const AccessibilityOption: React.FC<OptionProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all border ${
      active 
        ? 'bg-brand-primary text-white border-brand-primary shadow-md' 
        : 'bg-white text-slate-600 border-slate-100 hover:border-brand-primary/30 hover:bg-slate-50'
    }`}
  >
    <div className={`${active ? 'text-white' : 'text-brand-primary'}`}>
      {icon}
    </div>
    <span className="font-bold text-sm">{label}</span>
  </button>
);
