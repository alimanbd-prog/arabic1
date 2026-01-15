
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import Boutique from './components/Boutique';
import RoyalStats from './components/RoyalStats';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  // Update document direction on language change
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen font-${lang === 'en' ? 'english' : 'arabic'} bg-pearlWhite selection:bg-palaceGold selection:text-royalGreen`}>
      <CustomCursor />
      <Navbar 
        lang={lang} 
        toggleLang={toggleLang} 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
      />
      
      <main className="relative z-10">
        <Hero lang={lang} />
        <RoyalStats lang={lang} />
        
        <section id="booking" className="py-24 bg-royalGreen relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <BookingWidget lang={lang} />
          </div>
        </section>

        <section id="boutique" className="py-24 bg-pearlWhite">
          <Boutique lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: lang === 'en' ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: lang === 'en' ? '100%' : '-100%' }}
            className="fixed inset-0 z-50 bg-royalGreen flex flex-col items-center justify-center space-y-8"
          >
            <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-palaceGold text-3xl"
            >
              ✕
            </button>
            <nav className="text-center space-y-8">
              {['academy', 'boutique', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-4xl font-bold text-white hover:text-palaceGold transition-colors"
                >
                  {lang === 'en' ? item.toUpperCase() : item} {/* Add translation helper */}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
