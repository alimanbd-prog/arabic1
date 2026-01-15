
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHoveringButton(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: position.x - (isHoveringButton ? 24 : 10),
        y: position.y - (isHoveringButton ? 24 : 10),
        scale: isHoveringButton ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    >
      {isHoveringButton ? (
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-palaceGold flex items-center justify-center bg-white/20 backdrop-blur-sm">
             <span className="text-xl">⚽</span>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-palaceGold/50 scale-125"
          />
        </div>
      ) : (
        <div className="w-5 h-5 bg-palaceGold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
      )}
    </motion.div>
  );
};

export default CustomCursor;
