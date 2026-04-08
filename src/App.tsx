import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Accessibility } from './pages/Accessibility';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { AccessibilityMenu } from './components/accessibility/AccessibilityMenu';
import { CookieBanner } from './components/layout/CookieBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-bg-dark text-white font-sans antialiased" dir="rtl">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/blog/:articleId" element={<BlogPost />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityMenu />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}
