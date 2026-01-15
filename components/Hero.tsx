
import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../translations';
import { Language } from '../types';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-royalGreen">
      {/* Background Video Placeholder (using an image for initial load efficiency) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
          alt="Football Training" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royalGreen via-transparent to-royalGreen/50" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 z-10 islamic-pattern opacity-10" />

      {/* Animated Calligraphy/Logo Element */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block relative">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
               className="absolute inset-[-40px] border border-palaceGold/20 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute inset-[-20px] border-2 border-dashed border-palaceGold/10 rounded-full"
             />
             <div className="w-24 h-24 md:w-32 md:h-32 bg-palaceGold rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
               <span className="text-royalGreen font-extrabold text-4xl md:text-5xl">S</span>
             </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
        >
          <span className="text-gold-gradient drop-shadow-2xl">
            {t.heroTitle}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-pearlWhite/80 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto"
        >
          {t.heroSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#booking"
            className="px-10 py-4 bg-palaceGold text-royalGreen font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-transform"
          >
            {t.bookNow}
          </a>
          <a 
            href="#academy"
            className="px-10 py-4 border-2 border-palaceGold text-palaceGold font-bold rounded-full text-lg hover:bg-palaceGold hover:text-royalGreen transition-all"
          >
            {lang === 'en' ? 'Watch Tour' : 'شاهد الجولة'}
          </a>
        </motion.div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
           className="w-20 h-20 border border-palaceGold/30 rotate-45"
         />
      </div>
      <div className="absolute top-24 right-10 hidden lg:block">
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
           className="w-16 h-16 border-2 border-palaceGold/20"
         />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-palaceGold"
      >
        <span className="text-sm uppercase tracking-widest opacity-60">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-palaceGold to-transparent mx-auto mt-2" />
      </motion.div>
    </section>
  );
};

export default Hero;
