"use client";
import { motion } from 'framer-motion';
import { Mail, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const categories = [
    {
      title: "Sunscreen",
      desc: "Superior UV protection for daily skin defense.",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"
    },
    {
      title: "Repair Cream",
      desc: "Deeply nourishes and restores skin vitality.",
      img: "https://images.unsplash.com/photo-1598440443997-3243c19fe382?q=80&w=1000"
    },
    {
      title: "Whitening lotion",
      desc: "Brightens and evens skin tone with natural extracts.",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8F9]">
      {/* 顶部 Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7]" 
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Handan Yueran Technology Company
          </motion.h1>
          <p className="text-base md:text-lg font-medium mb-8 opacity-90 tracking-wide">
            Innovative Skincare & Technology Solutions
          </p>
          <button className="bg-[#E91E63] text-white px-8 py-3 rounded-full font-bold hover:bg-[#C2185B] transition-all transform hover:scale-105 shadow-lg">
            Browse Our Collection
          </button>
        </div>
      </section>

      {/* 产品展示区 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-pink-50"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt={item.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#880E4F] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部 */}
      <footer className="py-16 bg-white border-t border-pink-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-bold text-gray-800 mb-8 tracking-[0.3em] uppercase">Contact Us</h2>
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" className="text-gray-400 hover:text-[#1877F2] transition"><Facebook size={26} /></a>
            <a href="https://x.com/cml1599897" target="_blank" className="text-gray-400 hover:text-black transition"><Twitter size={26} /></a>
            <a href="https://wa.me/8615075550800" target="_blank" className="text-gray-400 hover:text-[#25D366] transition"><MessageCircle size={26} /></a>
            <a href="mailto:Imc031368@gmail.com" className="text-gray-400 hover:text-[#EA4335] transition"><Mail size={26} /></a>
          </div>
          <div className="text-gray-400 text-xs space-y-2">
            <p className="font-medium text-gray-500 underline decoration-pink-200">Email: Imc031368@gmail.com</p>
            <p className="opacity-50 pt-6">© 2026 Handan Yueran Technology Company. 🌸</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
