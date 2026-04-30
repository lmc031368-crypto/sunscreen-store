"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Shield } from 'lucide-react';

export default function Home() {
  const transition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-blue-600">
      {/* 顶部导航: 极简线条感 */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-[12px] tracking-[0.6em] font-black uppercase">Oudoman.Sun</div>
        <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-400">
          <a href="#" className="hover:text-white transition">Collection</a>
          <a href="#" className="hover:text-white transition">Lab Notes</a>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Inquiry</button>
        </div>
      </nav>

      {/* Hero Section: 巨大的排版压力 */}
      <section className="h-screen flex flex-col justify-center px-10 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition}>
            <h1 className="text-[16vw] leading-[0.8] font-bold tracking-[-0.05em] uppercase">
              Pure<br />
              <span className="text-neutral-700 ml-[10vw]">Defense</span>
            </h1>
          </motion.div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-end">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ ...transition, delay: 0.5 }}
              className="text-xl md:text-2xl max-w-xl font-light text-neutral-400 leading-tight"
            >
              Clinical-grade mineral protection. <br />
              Engineered for the modern biological rhythm.
            </motion.p>
            <div className="mt-10 md:mt-0 flex gap-6">
              <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <ArrowUpRight size={24} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品视觉: 类似参考仓库的黑白影像风格 */}
      <section className="py-40 bg-white text-black px-10">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileInView={{ scale: 1.05 }} 
            transition={{ duration: 2 }}
            className="md:col-span-6 aspect-square bg-neutral-100 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1500" 
              className="w-full h-full object-cover grayscale"
              alt="Lab Bottle"
            />
          </motion.div>
          <div className="md:col-span-5 md:col-start-8">
            <span className="text-[10px] tracking-[0.4em] text-neutral-400 mb-6 block uppercase">01 / Formulation</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 uppercase leading-none">The<br/>Liquid<br/>Shield.</h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Non-nano Zinc Oxide technology that disappears into your skin, leaving a velvet-matte finish with zero white cast.
            </p>
          </div>
        </div>
      </section>

      {/* 页脚: 社交媒体图标 */}
      <footer className="py-20 px-10 border-t border-neutral-900 bg-[#0f0f0f]">
        <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-neutral-500">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white flex items-center gap-2"><Instagram size={14}/> Instagram</a>
            <a href="#" className="hover:text-white flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
          </div>
          <p>© 2026 PURE DEFENSE LAB</p>
        </div>
      </footer>
    </main>
  );
}
