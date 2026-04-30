"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const transition = { duration: 1.4, ease: [0.76, 0, 0.24, 1] };

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-blue-600 overflow-x-hidden">
      
      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-start mix-blend-difference">
        <div className="text-[12px] tracking-[0.6em] font-black uppercase">PURE.DEFENSE</div>
        <div className="hidden md:flex flex-col items-end gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-500">
          <p>Global Distribution</p>
          <p className="text-white">v1.0 / 2026</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-10 relative">
        <div className="max-w-[1800px] mx-auto w-full">
          <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition}>
            <h1 className="text-[18vw] leading-[0.75] font-bold tracking-[-0.06em] uppercase">
              Solar<br />
              <span className="text-neutral-800 ml-[12vw]">Shield</span>
            </h1>
          </motion.div>

          <div className="mt-24 flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-12">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ ...transition, delay: 0.6 }}
              className="text-xl md:text-3xl max-w-2xl font-light text-neutral-400 leading-tight tracking-tighter"
            >
              Advanced molecular barrier technology. <br />
              Engineered for extreme solar environments.
            </motion.p>
            <motion.div whileHover={{ rotate: 45 }} className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-500">
              <ArrowUpRight size={40} strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 产品视觉展示 */}
      <section className="py-60 bg-white text-black px-10">
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <motion.div 
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="aspect-[16/10] bg-neutral-100 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=2000" 
                className="w-full h-full object-cover grayscale"
                alt="Product"
              />
            </motion.div>
          </div>
          <div className="md:col-span-4 md:col-start-9 pt-20">
            <span className="text-[10px] tracking-[0.5em] text-neutral-400 mb-8 block uppercase font-bold">01 / Formulation</span>
            <h2 className="text-7xl font-bold tracking-tighter mb-12 uppercase leading-[0.9]">Beyond<br/>Invisible.</h2>
            <p className="text-neutral-500 text-xl leading-relaxed font-light">
              Our unique non-nano formula creates a seamless mesh that allows skin to breathe while reflecting 99% of harmful UV rays.
            </p>
          </div>
        </div>
      </section>

      {/* 页脚社交媒体 */}
      <footer className="bg-[#0f0f0f] py-40 px-10 text-center border-t border-white/5">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={transition}>
          <p className="text-[10px] tracking-[0.6em] uppercase mb-12 text-neutral-500 font-bold">Request Collaboration</p>
          <a href="mailto:hello@puredf.com" className="text-[10vw] leading-none tracking-tighter hover:text-blue-600 transition-colors duration-700">
            CONTACT.LAB
          </a>
          
          <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-10 text-neutral-500 border-t border-white/5 pt-10 text-[10px] tracking-[0.4em] uppercase font-bold">
            <div className="flex gap-12">
              <a href="#" className="hover:text-white flex items-center gap-2"><Instagram size={14}/> Instagram</a>
              <a href="#" className="hover:text-white flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
              <a href="#" className="hover:text-white flex items-center gap-2"><Twitter size={14}/> Twitter</a>
            </div>
            <p>© 2026 PURE DEFENSE GLOBAL</p>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
