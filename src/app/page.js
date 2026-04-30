"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Home() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.95] };

  return (
    <main className="bg-[#f2f2f0] text-[#1a1a1a] selection:bg-black selection:text-white min-h-screen">
      
      {/* 极简侧边社交栏 - 模仿高端站的固定元素 */}
      <div className="fixed left-6 bottom-10 z-50 flex flex-col gap-6 text-neutral-400">
        <motion.a href="#" whileHover={{ scale: 1.2, color: "#000" }}><Instagram size={18} strokeWidth={1.5} /></motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2, color: "#000" }}><Twitter size={18} strokeWidth={1.5} /></motion.a>
        <motion.a href="#" whileHover={{ scale: 1.2, color: "#000" }}><Linkedin size={18} strokeWidth={1.5} /></motion.a>
      </div>

      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full z-50 p-10 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-[10px] tracking-[0.5em] font-bold">PD.LAB</div>
        <div className="flex gap-8 items-center text-[10px] tracking-[0.2em] uppercase font-medium">
          <span>Global / 2026</span>
          <div className="w-8 h-[1px] bg-white opacity-30"></div>
          <button className="hover:opacity-50 transition">Inquiry</button>
        </div>
      </nav>

      {/* Hero Section - 巨大的文字张力 */}
      <section className="h-screen flex flex-col justify-center px-10 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition}>
            <h1 className="text-[18vw] leading-[0.8] font-light tracking-[-0.06em] uppercase">
              Solar<br/>
              <span className="italic font-serif ml-[8vw] text-blue-600">Bio-Tech</span>
            </h1>
          </motion.div>

          <div className="mt-24 flex justify-between items-end border-t border-black/5 pt-10">
            <p className="text-xl md:text-2xl max-w-xl font-light text-neutral-500 leading-tight">
              A high-performance mineral barrier. <br/>
              Invisible to the eye, absolute to the skin.
            </p>
            <div className="hidden md:flex items-center gap-4 text-[10px] tracking-widest uppercase font-bold">
              Scroll to explore <div className="w-12 h-[1px] bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 - 错位布局 */}
      <section className="py-40 px-10">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10">
          <motion.div 
            whileInView={{ y: -50 }} 
            transition={{ duration: 2 }}
            className="md:col-span-7 aspect-[16/10] bg-neutral-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1500" 
              className="w-full h-full object-cover"
              alt="Texture"
            />
          </motion.div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.4em] text-neutral-400 mb-6 uppercase">01 / Invisible</span>
            <h2 className="text-5xl font-light mb-8 tracking-tighter italic font-serif">Weightless flow.</h2>
            <p className="text-neutral-500 leading-relaxed font-light">
              Our formulation mimics the skin's natural lipids, ensuring a seamless application that feels like nothing at all. 
            </p>
          </div>
        </div>
      </section>

      {/* Footer - 巨大的联系按钮 */}
      <footer className="bg-white py-40 px-10 text-center">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <p className="text-[10px] tracking-[0.5em] uppercase mb-16 text-neutral-400">Join the defense</p>
          <a href="mailto:contact@pdlab.com" className="group text-[12vw] leading-none tracking-tighter flex items-center justify-center gap-4">
            Inquire <ArrowUpRight size={80} strokeWidth={0.5} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
          
          {/* 页脚底部的社交媒体文字版，更符合极简风格 */}
          <div className="mt-40 pt-10 border-t border-neutral-100 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-bold">
            <div className="flex gap-10">
              <a href="#" className="hover:text-black transition">Instagram</a>
              <a href="#" className="hover:text-black transition">Linkedin</a>
            </div>
            <p>© 2026 PD.LAB GLOBAL</p>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}