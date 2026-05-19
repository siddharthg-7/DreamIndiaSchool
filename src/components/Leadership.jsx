import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2940&auto=format&fit=crop" 
              alt="Chairman" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-2xl font-outfit font-bold text-white mb-1">Dr. John Doe</h3>
              <p className="text-cyan-glow font-medium text-sm tracking-wide uppercase">Chairman, DIS Group</p>
            </div>
          </motion.div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-glow/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 relative">
          <Quote className="absolute -top-12 -left-8 w-24 h-24 text-white/5 -z-10 rotate-180" />
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-glow font-medium tracking-wider uppercase text-sm mb-4 block">Leadership Vision</span>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-8 leading-tight">
              Shaping Responsible <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Global Citizens</span>
            </h2>
            
            <div className="space-y-6 text-lg font-light text-white/70 leading-relaxed border-l-2 border-cyan-glow pl-6">
              <p>
                "Education at Dream India School is not merely about academic progression. It is a holistic journey designed to foster ethical leadership, critical thinking, and technological fluency."
              </p>
              <p>
                "We believe in cultivating an ecosystem where traditional values seamlessly integrate with futuristic SaaS-driven learning methodologies. Our goal is to empower the next generation to lead with integrity, innovate with purpose, and build a sustainable future."
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md min-w-[120px]">
                <span className="block text-2xl font-bold text-white mb-1">20+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Years Exp.</span>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md min-w-[120px]">
                <span className="block text-2xl font-bold text-white mb-1">10k+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Alumni</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
