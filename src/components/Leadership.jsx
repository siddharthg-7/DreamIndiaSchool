import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 relative bg-[#051124] text-white border-y border-[#c28e34]/20 overflow-hidden select-none">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(194,142,52,0.04),transparent_60%)] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#c28e34]/25 shadow-xl max-w-[400px] mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-[#051124]/30 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2940&auto=format&fit=crop" 
              alt="Chairman Dr. K. Sridhar" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 text-left">
              <h3 className="text-xl md:text-2xl font-outfit font-black text-white mb-1 tracking-tight">Dr. K. Sridhar</h3>
              <p className="text-[#c28e34] font-extrabold text-xs tracking-widest uppercase font-outfit">Chairman, DIS Group</p>
            </div>
          </motion.div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c28e34]/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 relative text-left">
          {/* Decorative quote icon in bg */}
          <Quote className="absolute -top-10 -left-6 w-24 h-24 text-white/5 -z-10 rotate-180 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#c28e34] font-extrabold tracking-widest uppercase text-xs mb-3 block font-outfit">Leadership Vision</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-black text-white mb-6 leading-tight">
              Shaping Responsible <br />
              <span className="text-slate-400 font-bold">Global Citizens</span>
            </h2>
            
            <div className="space-y-5 text-sm md:text-base font-medium text-slate-300 leading-relaxed border-l-2 border-[#c28e34] pl-5">
              <p>
                "Education at Dream India School is not merely about academic progression. It is a holistic journey designed to foster ethical leadership, critical thinking, and technological fluency."
              </p>
              <p>
                "We believe in cultivating an ecosystem where traditional values seamlessly integrate with futuristic, smart learning methodologies. Our goal is to empower the next generation to lead with integrity, innovate with purpose, and build a sustainable future."
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="text-center p-4 rounded-xl bg-[#0c1c33] border border-[#c28e34]/20 backdrop-blur-md min-w-[120px]">
                <span className="block text-2xl font-black text-[#c28e34] mb-0.5 font-outfit">15+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-outfit">Years Exp.</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#0c1c33] border border-[#c28e34]/20 backdrop-blur-md min-w-[120px]">
                <span className="block text-2xl font-black text-[#c28e34] mb-0.5 font-outfit">10k+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-outfit">Alumni</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
