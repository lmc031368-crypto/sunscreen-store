"use client";
import { motion } from 'framer-motion';
import { Shield, Sun, Droplets, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 导航 */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-tighter">PURE.DEFENSE</div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold text-slate-500">
          <a href="#" className="hover:text-blue-600 transition">Science</a>
          <a href="#" className="hover:text-blue-600 transition">Products</a>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">Inquiry</button>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase">Professional SPF 50+</span>
          <h1 className="text-6xl md:text-8xl font-light leading-tight mt-4 mb-8 tracking-tighter">
            Ultimate <br /> <span className="font-serif italic text-blue-600">Defense.</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
            Clinical-grade protection that disappears into your skin. No white cast, just pure hydration and defense.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full flex items-center gap-3 group hover:scale-105 transition shadow-2xl font-bold uppercase text-xs tracking-widest">
            Order Samples <ArrowRight size={18} className="group-hover:translate-x-2 transition" />
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80" 
            alt="Sunscreen"
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
          />
        </motion.div>
      </section>

      {/* 卖点区域 */}
      <section className="py-20 bg-slate-50 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="flex justify-center text-blue-500"><Shield size={32}/></div>
            <h3 className="font-bold">Broad Spectrum</h3>
            <p className="text-slate-400 text-sm">Tested UVA/UVB protection for all skin types.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-blue-500"><Droplets size={32}/></div>
            <h3 className="font-bold">Water Resistant</h3>
            <p className="text-slate-400 text-sm">Up to 80 minutes of high-performance durability.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-blue-500"><Sun size={32}/></div>
            <h3 className="font-bold">Reef Safe</h3>
            <p className="text-slate-400 text-sm">Environmentally conscious, vegan formula.</p>
          </div>
        </div>
      </section>
    </main>
  );
}