import React from 'react';
import { motion } from 'framer-motion';
import { Target, Laptop, ShieldCheck, Trophy } from 'lucide-react';
import disLogo from '../assets/dis-logo.png';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Qualitative Focus",
      desc: "Individual attention through optimized teacher-student ratios for deep conceptual understanding.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Technology Focus",
      desc: "Smart digital boards and modern computer labs preparing kids for the tech-driven future.",
      icon: <Laptop className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      title: "Health & Safety",
      desc: "Secure campus with 24/7 CCTV monitoring, trained guards, and strict health care protocols.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      title: "Sports Excellence",
      desc: "Extensive play fields and structured fitness coaching to build active teamwork & discipline.",
      icon: <Trophy className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50",
      border: "border-amber-100"
    }
  ];

  return (
    <section className="relative z-30 px-6 md:px-12 py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Centered Logo with Gentle Float Animation */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            className="relative cursor-pointer"
          >
            {/* Clean Logo Container */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center p-4">
              <img 
                src={disLogo} 
                alt="Dream India School Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Accent Title and Subtitle */}
          <h2 className="mt-6 text-2xl md:text-3xl font-outfit font-extrabold text-[#0f172a] tracking-tight">
            Our Core Pillars
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-500 text-xs md:text-sm font-semibold max-w-md leading-relaxed">
            Providing world-class standard curriculum and a holistic environment for future leaders.
          </p>
        </motion.div>

        {/* Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 md:p-8 border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left group cursor-default"
            >
              {/* Minimal Icon Container */}
              <div className={`w-11 h-11 rounded-lg ${card.bg} border ${card.border} flex items-center justify-center mb-6 shrink-0`}>
                {card.icon}
              </div>
              
              {/* Card Title */}
              <h3 className="text-base md:text-lg font-outfit font-extrabold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
