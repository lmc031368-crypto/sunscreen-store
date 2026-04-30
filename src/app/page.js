"use client";
import { motion } from 'framer-motion';

export default function Home() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.95] };

  return (
    <main className="bg-[#f0f0f0] text-[#1a1a1a] selection:bg-black selection:text-white font-sans overflow-x-hidden">
      
      {/* 极简浮动导航 */}
      <nav className="fixed top-0 left-0 w-full z-50 p-10 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto mix-blend-difference text-white">
          <p className="text-[10px] tracking-[0.5em] font-bold">PURE.DEFENSE</p>
        </div>
        <div className="pointer-events-auto text-right hidden md:block">
          <p className="text-[10px] tracking-[0.2em] leading-loose text-neutral-400 uppercase">
            Product v1.0<br/>Global Distribution
          </p>
        </div>
      </nav>

      {/* Hero Section: 杂志封面质感 */}
      <section className="min-h-screen flex items-center px-10 relative">
        <div className="w-full max-w-[1800px] mx-auto">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transition}
          >
            <h1 className="text-[22vw] leading-[0.75] font-light tracking-[-0.05em] uppercase">
              Solar<br/>
              <span className="ml-[10vw]">Shield</span>
            </h1>
          </motion.div>

          <div className="mt-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transition, delay: 0.5 }}
              className="text-xl md:text-3xl max-w-2xl font-light leading-snug tracking-tight text-neutral-500"
            >
              Beyond protection. A molecular barrier designed for the skin's biological rhythm. Invisible, weightless, absolute.
            </motion.p>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ ...transition, delay: 0.8 }}
              className="h-[1px] w-40 bg-black origin-left hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* 视觉断层: 模仿参考站的大面积色块 */}
      <section className="py-40 bg-white">
        <div className="px-10 max-w-[1800px] mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 mb-20 md:mb-0">
             <motion.div 
               whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="aspect-[3/4] bg-neutral-100 overflow-hidden"
             >
                <img 
                  src="https://images.unsplash.com/photo-1598440443997-3243c19fe382?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </motion.div>
          </div>
          
          <div className="md:col-span-6 md:col-start-7 pt-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400">01 / Formulation</span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter mt-10 mb-16 italic font-serif">Mineral Flow.</h2>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-md">
              A fluid that acts like a second skin. Our non-nano technology ensures the shield stays exactly where it's needed—on the surface.
            </p>
          </div>
        </div>
      </section>

      {/* 联系区: 极致的文字张力 */}
      <footer className="h-screen flex flex-col justify-center items-center px-10 text-center bg-[#f0f0f0]">
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase mb-10">Get in touch</p>
          <a href="mailto:hello@puredf.com" className="text-[10vw] leading-none tracking-tighter hover:italic transition-all inline-block">
            Contact.Lab
          </a>
          <div className="mt-20 flex gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
            <a href="#" className="hover:text-black">Wholesale</a>
            <a href="#" className="hover:text-black">Distribution</a>
          </div>
        </motion.div>
      </footer>

    </main>
  );
}