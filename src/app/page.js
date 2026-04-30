"use client";
import { motion } from 'framer-motion';
import { Shield, Droplets, Wind, ArrowRight, Zap } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans">
      {/* 极简导航 */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-[#F9F9F7]/80 backdrop-blur-md">
        <div className="text-xl font-bold tracking-[0.2em]">PURE DEFENSE</div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-500">
          <a href="#" className="hover:text-black transition">Technology</a>
          <a href="#" className="hover:text-black transition">B2B Solutions</a>
          <a href="#" className="text-black border-b border-black">Contact</a>
        </div>
      </nav>

      {/* Hero Section - 模仿参考站的大图感 */}
      <section className="relative h-screen flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
              Solar <br /> <span className="italic font-serif text-blue-600">Bio-Shield</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-sm leading-relaxed mb-10">
              High-performance SPF 50+ protection engineered for the most demanding environments. 
            </p>
            <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition">
              View Collection <ArrowRight size={16} className="group-hover:translate-x-2 transition" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden"
          >
             {/* 这里建议换成你自己的高清产品图 */}
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000" 
              className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition duration-1000"
              alt="Premium Sunscreen"
            />
          </motion.div>
        </div>
      </section>

      {/* 科技卖点 - 模仿参考站的网格布局 */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <h2 className="text-4xl font-light tracking-tight">The Science of Defense</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-24">
            {[
              { icon: <Shield size={30} />, title: "UVA/UVB PRO", desc: "Advanced broad-spectrum filtering system." },
              { icon: <Zap size={30} />, title: "Instant Absorb", desc: "Micro-molecular formula leaves zero residue." },
              { icon: <Wind size={30} />, title: "Breathable", desc: "Won't clog pores even in 90% humidity." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="mb-8 text-neutral-300 group-hover:text-blue-600 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 Inquiry - 简洁呼吁 */}
      <section className="py-40 bg-[#1A1A1A] text-white px-8 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tighter">Ready to protect?</h2>
          <a href="mailto:info@yourbrand.com" className="inline-block px-12 py-5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.4em] text-[10px]">
            Request Wholesale Catalog
          </a>
        </motion.div>
      </section>
    </main>
  );
}