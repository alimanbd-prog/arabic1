
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

const RoyalStats: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="py-20 border-b border-palaceGold/20 bg-pearlWhite">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Ministry Seal */}
          <div className="flex flex-col items-center text-center group">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border-4 border-palaceGold border-double rounded-full flex items-center justify-center mb-6 relative"
            >
              <div className="absolute inset-0 islamic-pattern opacity-20" />
              <span className="text-4xl">👑</span>
            </motion.div>
            <h4 className="text-royalGreen font-bold text-xl mb-2">
              {lang === 'en' ? 'Ministry Licensed' : 'مرخص من الوزارة'}
            </h4>
            <p className="text-gray-400 text-sm">License No. #8892-SHANKL</p>
          </div>

          {/* Vision 2030 */}
          <div className="flex flex-col items-center text-center border-x-0 md:border-x border-palaceGold/10 px-8">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-32 mb-6"
            >
              <img 
                src="https://www.vision2030.gov.sa/media/rc0bcj1b/vision-2030-logo.png" 
                alt="Saudi Vision 2030" 
                className="w-full grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100"
                style={{ filter: 'sepia(1) saturate(5) hue-rotate(-5deg)' }}
              />
            </motion.div>
            <h4 className="text-royalGreen font-bold text-xl mb-2">
              {lang === 'en' ? 'Vision 2030 Partner' : 'شريك رؤية 2030'}
            </h4>
            <p className="text-gray-400 text-sm">
              {lang === 'en' ? 'Empowering the Youth' : 'تمكين الشباب'}
            </p>
          </div>

          {/* Excellence */}
          <div className="flex flex-col items-center text-center">
            <div className="text-palaceGold font-black text-6xl mb-4">
               15+
            </div>
            <h4 className="text-royalGreen font-bold text-xl mb-2">
              {lang === 'en' ? 'Elite Coaches' : 'مدربون عالميون'}
            </h4>
            <p className="text-gray-400 text-sm">
              {lang === 'en' ? 'UEFA Pro Licensed' : 'رخص احترافية أوروبية'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalStats;
