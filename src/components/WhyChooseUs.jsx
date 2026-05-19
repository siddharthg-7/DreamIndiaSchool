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
    <section className="relative z-30 px-6 md:px-12 py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Centered Logo with Framer Motion Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut"
          }}
          className="flex flex-col items-center mb-16 text-center"
        >
          {/* Elegant Glowing Ring Container */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            className="relative group cursor-pointer"
          >
            {/* Ambient Glow effect */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Logo Container */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border-2 border-blue-500 shadow-xl flex items-center justify-center p-3.5 overflow-hidden">
              <img 
                src={disLogo} 
                alt="Dream India School Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Accent Title and Subtitle */}
          <h2 className="mt-6 text-3xl md:text-4xl font-outfit font-black text-[#0f172a] tracking-tight">
            Our Core Pillars
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-500 text-xs md:text-sm font-semibold max-w-md leading-relaxed">
            Providing world-class standard curriculum and a holistic environment for future leaders.
          </p>
        </motion.div>

        {/* Horizontal Card Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left group cursor-default"
            >
              {/* Minimal Icon Container */}
              <div className={`w-12 h-12 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                {card.icon}
              </div>
              
              {/* Card Title */}
              <h3 className="text-lg font-outfit font-extrabold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">
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
