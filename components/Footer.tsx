
import React from 'react';
import { Language } from '../types';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <footer className="bg-royalGreen text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-palaceGold rounded-full flex items-center justify-center text-royalGreen font-black text-2xl">S</div>
              <div>
                <h3 className="text-2xl font-black text-palaceGold uppercase">SHANKL ACADEMY</h3>
                <p className="text-white/60 uppercase tracking-widest text-xs">Premium Sports Excellence</p>
              </div>
            </div>
            <p className="max-w-md text-pearlWhite/70 leading-relaxed font-light mb-8">
              {lang === 'en' 
                ? "The premier destination for football excellence in Saudi Arabia. Combining high-intensity athletic training with the values of royal discipline."
                : "الوجهة الأولى للتميز في كرة القدم في المملكة العربية السعودية. يجمع بين التدريب الرياضي المكثف وقيم الانضباط الملكي."}
            </p>
          </div>

          <div>
            <h4 className="text-palaceGold font-bold mb-6">{lang === 'en' ? 'Navigate' : 'تصفح'}</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-palaceGold transition-colors">The Academy</a></li>
              <li><a href="#" className="hover:text-palaceGold transition-colors">Elite Programs</a></li>
              <li><a href="#" className="hover:text-palaceGold transition-colors">Boutique</a></li>
              <li><a href="#" className="hover:text-palaceGold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-palaceGold font-bold mb-6">{lang === 'en' ? 'Kingdom of Saudi Arabia' : 'المملكة العربية السعودية'}</h4>
            <address className="not-italic text-white/60 space-y-4">
              <p>King Fahd Road, Riyadh</p>
              <p>support@shanklacademy.com</p>
              <p>+966 11 000 0000</p>
            </address>
          </div>
        </div>

        {/* License Strip */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <span className="text-palaceGold">📜</span>
              <span className="text-xs font-mono opacity-50">LICENSE: KSA-SPORTS-ACAD-2024-SHANKL</span>
           </div>
           
           <div className="flex gap-6">
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-white/40 hover:text-palaceGold transition-colors uppercase text-xs tracking-widest font-bold">
                  {social}
                </a>
              ))}
           </div>
           
           <p className="text-xs text-white/30">
             © 2024 Shankl Academy. All Rights Reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
