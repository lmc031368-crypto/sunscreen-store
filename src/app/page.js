"use client";
import { motion } from 'framer-motion';
import { Shield, Sun, Droplets, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] selection:bg-blue-100 font-sans">
      {/* 顶部导航 */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">PURE.DEFENSE</div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
          <a href="#" className="hover:text-black transition">Science</a>
          <a href="#" className="hover:text-black transition">Product</a>
          <a href="#" className="hover:text-black transition">Wholesale</a>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-neutral-800 transition">
          Inquiry Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.3em] font-bold rounded mb-6">
              Next-Gen Protection
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 tracking-tighter">
              Invisible <br />
              <span className="font-serif italic text-blue-600">Shield.</span>
            </h1>
            <p className="text-neutral-500 text-lg max-w-md mb-10 leading-relaxed">
              Ultra-light mineral formula that disappears into your skin. SPF 50+ protection without the white cast.
            </p>
            <div className="flex gap-6 items-center">
              <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 group hover:scale-105 transition">
                Explore Product <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* 这里显示占位图，后续你可以换成自己的产品图 */}
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000" 
              alt="Premium Sunscreen"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">4.9/5 Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 特性展示区 */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <h2 className="text-4xl font-light tracking-tight mb-4">Science-Backed Care</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Shield className="text-blue-500" />, title: "Broad Spectrum", desc: "Clinically proven to block UVA and UVB rays effectively." },
              { icon: <Droplets className="text-blue-500" />, title: "Water Resistant", desc: "Stay protected for up to 80 minutes in the water." },
              { icon: <Sun className="text-blue-500" />, title: "Non-Greasy", desc: "A weightless finish that feels like a second skin." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-neutral-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-2xl font-bold tracking-tighter mb-6 font-serif italic text-blue-400 underline">PURE.DEFENSE</div>
            <p className="text-neutral-500 text-sm">
              World-class sun protection for global markets. Private label and wholesale inquiries welcome.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold">Contact</h4>
              <p className="text-neutral-500 text-sm">sales@pureglow.com</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold">Location</h4>
              <p className="text-neutral-500 text-sm">Guangzhou, China</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}