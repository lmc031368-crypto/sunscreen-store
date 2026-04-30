"use client";
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const categories = [
    {
      title: "Daily Defense",
      desc: "High-density protection for everyday city life.",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"
    },
    {
      title: "Professional Sport",
      desc: "Waterproof & sweatproof for extreme athletes.",
      img: "https://images.unsplash.com/photo-1598440443997-3243c19fe382?q=80&w=1000"
    },
    {
      title: "Sensitive Care",
      desc: "Eco-friendly, safe and extremely easy to absorb.",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F0F7F2]">
      {/* 顶部 Hero 区域 - 带有背景图 */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.7]" 
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Pure Defense Technology Co., Ltd.
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 opacity-90">
            Professional Sunscreen Manufacturer
          </p>
          <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1B5E20] transition shadow-lg">
            View Technical Parameters (PDF)
          </button>
        </div>
      </nav>

      {/* 中间卡片展示区 - 三栏布局 */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 text-center"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt={item.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部联系方式 - 社交图标 */}
      <footer className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-8 tracking-wider uppercase">Connect With Us</h2>
          
          <div className="flex justify-center gap-8 mb-10">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Instagram size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition"><MessageCircle size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition"><Mail size={30} /></a>
          </div>

          <div className="text-gray-500 text-sm space-y-2">
            <p className="font-medium hover:text-black cursor-pointer">Email: contact@puredefenselab.com</p>
            <p className="mt-4 opacity-70">© 2026 PURE DEFENSE LAB. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
