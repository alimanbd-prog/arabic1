
import React from 'react';
import { motion } from 'framer-motion';
import { Product, Language } from '../types';

const products: Product[] = [
  { id: 1, name: "Royal Training Jersey", arName: "قميص التدريب الملكي", price: 450, image: "https://picsum.photos/seed/jersey/400/500" },
  { id: 2, name: "Gold Edition Boots", arName: "حذاء الإصدار الذهبي", price: 1200, image: "https://picsum.photos/seed/boots/400/500" },
  { id: 3, name: "Academy Pro Ball", arName: "كرة الأكاديمية الاحترافية", price: 300, image: "https://picsum.photos/seed/ball/400/500" },
  { id: 4, name: "Elite Performance Kit", arName: "طقم الأداء العالي", price: 850, image: "https://picsum.photos/seed/kit/400/500" },
];

const ProductCard: React.FC<{ product: Product; lang: Language }> = ({ product, lang }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-royalGreen/5"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-royalGreen/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <motion.button 
             whileTap={{ scale: 0.9 }}
             className="bg-palaceGold text-royalGreen px-6 py-3 rounded-full font-bold shadow-2xl"
           >
             {lang === 'en' ? 'Add to Cart' : 'أضف للسلة'}
           </motion.button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-royalGreen mb-2">
          {lang === 'en' ? product.name : product.arName}
        </h3>
        <div className="flex items-center justify-between">
           <span className="text-palaceGold font-black text-2xl">
             {product.price} <span className="text-sm">SAR</span>
           </span>
           <div className="w-8 h-8 rounded-full border border-palaceGold/30 flex items-center justify-center">
              <span className="text-xs">✨</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Boutique: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-palaceGold font-bold uppercase tracking-[0.2em] mb-4 block">
            Exclusive Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-royalGreen">
            {lang === 'en' ? 'AL-SHANKL BOUTIQUE' : 'بوتيك شنكل'}
          </h2>
        </div>
        <p className="max-w-md text-gray-500 font-light text-lg">
          {lang === 'en' 
            ? "Elite sports equipment designed for the masters of the game. Palace-level quality meets athletic precision."
            : "معدات رياضية نخبوية مصممة لأساتذة اللعبة. جودة القصر تلتقي بالدقة الرياضية."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default Boutique;
