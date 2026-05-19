import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

const FeatureStrip = () => {
  return (
    <section className="py-14 bg-white border-t border-b border-slate-100 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -left-10 top-1/2 w-40 h-40 bg-blue-50/50 rounded-full blur-2xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
      >
        
        {/* Left Side: Badge and Info */}
        <div className="flex items-center gap-5 text-left">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-[10px] block font-outfit">Quality Standard</span>
            <h3 className="text-xl md:text-2xl font-outfit font-extrabold text-[#0f172a] leading-tight">
              CBSE Affiliated Institution
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-semibold mt-0.5">
              Maintaining the highest national benchmarks of academic curriculum delivery.
            </p>
          </div>
        </div>

        {/* Right Side: Large Affiliation Code Block */}
        <div className="flex items-center gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0">
          <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center">
            <Award className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex flex-col items-start text-left shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-outfit leading-none mb-1">
              Affiliation Number
            </span>
            <span className="text-3xl md:text-4xl font-outfit font-black tracking-tight text-[#0f172a]">
              130822
            </span>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default FeatureStrip;
