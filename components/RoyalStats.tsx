
import { motion } from 'framer-motion';
import React from 'react';
import { Language } from '../types';

const RoyalStats: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="py-20 border-b border-palaceGold/20 bg-pearlWhite relative overflow-hidden">
      {/* Subtle background ambient element */}
      <div className="absolute top-0 left-0 w-full h-full islamic-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Ministry Seal - Enhanced Royal Animation */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              {/* Outer Glow Halo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1], 
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-[-10px] border border-palaceGold/20 rounded-full blur-[2px]"
              />
              
              {/* Main Rotating Seal Container */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-palaceGold border-double rounded-full flex items-center justify-center relative bg-pearlWhite z-10 shadow-[0_10px_30px_rgba(212,175,55,0.15)] overflow-hidden"
              >
                {/* Internal Pattern Rotating Counter-Clockwise */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 islamic-pattern opacity-30 pointer-events-none scale-150" 
                />
                
                {/* Elegant Sheen Sweep - This adds the "Palace Level" luxury feel */}
                <motion.div
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 4, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-45 pointer-events-none z-20"
                />

                {/* Steady Crown Centerpiece */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-30"
                >
                  <span className="text-4xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" role="img" aria-label="Royal Crown">
                    👑
                  </span>
                </motion.div>
              </motion.div>
            </div>
            
            <h4 className="text-royalGreen font-bold text-xl mb-1 tracking-tight">
              {lang === 'en' ? 'Ministry Licensed' : 'مرخص من الوزارة'}
            </h4>
            <div className="relative inline-block px-3 py-1 bg-royalGreen/5 rounded-full border border-palaceGold/10">
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">#8892-SHANKL-ROYAL</p>
            </div>
          </div>

          {/* Vision 2030 - High Contrast Saudi Touch */}
          <div className="flex flex-col items-center text-center border-x-0 md:border-x border-palaceGold/10 px-8 py-4">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-36 mb-6 cursor-pointer relative group"
            >
              <div className="absolute inset-0 bg-palaceGold/5 rounded-full blur-xl group-hover:bg-palaceGold/10 transition-colors" />
              <img 
                src="https://www.vision2030.gov.sa/media/rc0bcj1b/vision-2030-logo.png" 
                alt="Saudi Vision 2030" 
                className="w-full relative z-10 transition-all duration-700"
                style={{ 
                  filter: 'sepia(1) saturate(2) hue-rotate(-10deg) brightness(0.95)',
                }}
              />
            </motion.div>
            <h4 className="text-royalGreen font-bold text-xl mb-2">
              {lang === 'en' ? 'Vision 2030 Partner' : 'شريك رؤية 2030'}
            </h4>
            <p className="text-gray-400 text-sm font-light">
              {lang === 'en' ? 'Empowering the Saudi Spirit' : 'تمكين الروح السعودية'}
            </p>
          </div>

          {/* Excellence Metrics */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-palaceGold font-black text-6xl drop-shadow-sm"
              >
                 15+
              </motion.div>
              <motion.div
                animate={{ width: ['0%', '100%'] }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                className="h-1 bg-gradient-to-r from-transparent via-palaceGold to-transparent mt-1"
              />
            </div>
            <h4 className="text-royalGreen font-bold text-xl mb-2">
              {lang === 'en' ? 'Elite Coaches' : 'مدربون عالميون'}
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-palaceGold animate-pulse" />
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                {lang === 'en' ? 'UEFA Pro Licensed' : 'رخص احترافية أوروبية'}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RoyalStats;
