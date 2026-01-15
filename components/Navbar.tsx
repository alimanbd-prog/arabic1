
import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, isOpen, setIsOpen }) => {
  const t = translations[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
        {/* Logo/Emblem */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-12 h-12 bg-royalGreen rounded-full flex items-center justify-center border-2 border-palaceGold shadow-lg"
          >
            <span className="text-palaceGold font-bold text-xl">S</span>
          </motion.div>
          <span className="font-bold text-royalGreen hidden md:block">
            {lang === 'en' ? 'SHANKL ACADEMY' : 'أكاديمية شنكل'}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['academy', 'boutique', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-royalGreen font-medium hover:text-palaceGold transition-colors relative group"
            >
              {t[item as keyof typeof t]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-palaceGold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-royalGreen/5 hover:bg-royalGreen/10 px-3 py-1.5 rounded-full border border-palaceGold/30 transition-all"
          >
            <span className="text-lg">{lang === 'en' ? '🇸🇦' : '🇬🇧'}</span>
            <span className="text-xs font-bold text-royalGreen">{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-royalGreen"
          >
            <div className="w-6 h-0.5 bg-current mb-1" />
            <div className="w-6 h-0.5 bg-current mb-1" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
          
          <a 
            href="#booking"
            className="hidden lg:block gold-gradient text-royalGreen font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            {t.bookNow}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
