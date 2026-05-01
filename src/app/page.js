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
      title: "Gym & Fitness",
      desc: "High-density durable barrier for intense training.",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"
    },
    {
      title: "Professional Golf",
      desc: "Sun protection designed for long outdoor hours.",
      img: "https://images.unsplash.com/photo-1598440443997-3243c19fe382?q=80&w=1000"
    },
    {
      title: "Landscape & Pet",
      desc: "Eco-friendly, safe and extremely easy to absorb.",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F0F7F2]">
      {/* 顶部 Hero 区域 */}
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
            Professional Artificial Barrier Manufacturer
          </p>
          <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B5E20] transition-all transform hover:scale-105 shadow-lg">
            View Technical Parameters (PDF)
          </button>
        </div>
      </section>

      {/* 产品展示区 - 三栏布局 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 text-center"
            >
              <div className="h-56 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt={item.title} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2E7D32] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部联系方式 */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-bold text-gray-700 mb-6 tracking-[0.2em] uppercase">Connect With Us</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.facebook.com/profile.php?id=61567982517175" target="_blank" className="text-gray-400 hover:text-[#1877F2] transition">
              <Facebook size={24} />
            </a>
            <a href="https://x.com/cml1599897" target="_blank" className="text-gray-400 hover:text-[#000000] transition">
              <Twitter size={24} />
            </a>
            <a href="https://wa.me/8615075550800" target="_blank" className="text-gray-400 hover:text-[#25D366] transition">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:Imc031368@gmail.com" className="text-gray-400 hover:text-[#EA4335] transition">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-[10px] space-y-1 tracking-wider">
            <p className="font-semibold text-gray-600">Email: Imc031368@gmail.com</p>
            <p className="opacity-60 pt-4">© 2026 Handan Yueran Technology Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
