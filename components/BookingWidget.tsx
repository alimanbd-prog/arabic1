
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../translations';
import { Language, BookingSlot } from '../types';

const slots: BookingSlot[] = [
  { id: '1', time: '16:00', available: true },
  { id: '2', time: '17:30', available: true },
  { id: '3', time: '19:00', available: false },
  { id: '4', time: '20:30', available: true },
];

const ages = [
  { label: 'U-8', size: 60 },
  { label: 'U-12', size: 80 },
  { label: 'U-16', size: 100 },
  { label: 'Elite', size: 120 },
];

const BookingWidget: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirm = () => {
    if (selectedAge && selectedSlot) {
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-7xl mb-6"
        >
          ⚽
        </motion.div>
        <h2 className="text-3xl font-bold text-royalGreen mb-4">
          {lang === 'en' ? 'GOAL! APPOINTMENT SECURED' : 'هدف! تم تأكيد الموعد'}
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {lang === 'en' 
            ? "Your royal training session has been registered. Welcome to the elite tier."
            : "تم تسجيل جلستك التدريبية الملكية. أهلاً بك في النخبة."}
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-royalGreen text-palaceGold px-8 py-3 rounded-full font-bold"
        >
          {lang === 'en' ? 'Back' : 'العودة'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {t.bookNow}
        </h2>
        <div className="w-24 h-1 bg-palaceGold mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
        {/* Age Groups */}
        <div>
          <h3 className="text-palaceGold font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-palaceGold" />
            {t.ageGroup}
          </h3>
          <div className="flex flex-wrap items-end gap-6">
            {ages.map((age) => (
              <motion.button
                key={age.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAge(age.label)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  selectedAge === age.label ? 'text-palaceGold' : 'text-white/40'
                }`}
              >
                <div 
                  style={{ width: age.size, height: age.size }}
                  className={`rounded-full flex items-center justify-center border-2 transition-all ${
                    selectedAge === age.label 
                      ? 'border-palaceGold bg-palaceGold/10 shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                      : 'border-white/20 bg-white/5'
                  }`}
                >
                  <span className="text-2xl">⚽</span>
                </div>
                <span className="font-bold text-sm uppercase tracking-widest">{age.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-palaceGold font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-palaceGold" />
            {t.selectTime}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {slots.map((slot) => (
              <motion.button
                key={slot.id}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.id)}
                className={`relative h-20 perspective-1000 group ${
                  !slot.available ? 'opacity-30 cursor-not-allowed' : ''
                }`}
              >
                <motion.div
                  animate={{ 
                    rotateY: selectedSlot === slot.id ? 180 : 0 
                  }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="w-full h-full relative preserve-3d"
                >
                  {/* Front: Time */}
                  <div className={`absolute inset-0 backface-hidden flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white font-bold transition-colors group-hover:border-palaceGold/50`}>
                    {slot.time}
                  </div>
                  {/* Back: Selected */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-xl bg-palaceGold text-royalGreen font-black">
                    {lang === 'en' ? 'PICKED' : 'مختار'}
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </div>

          <button
            disabled={!selectedAge || !selectedSlot}
            onClick={handleConfirm}
            className={`w-full mt-10 py-5 rounded-xl font-black text-xl transition-all shadow-xl ${
              selectedAge && selectedSlot 
                ? 'gold-gradient text-royalGreen translate-y-0 opacity-100' 
                : 'bg-white/10 text-white/20 cursor-not-allowed translate-y-4 opacity-50'
            }`}
          >
            {t.confirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
