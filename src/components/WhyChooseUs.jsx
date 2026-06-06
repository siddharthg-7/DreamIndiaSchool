 
import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { MonitorPlay, GraduationCap, Sparkles, ShieldCheck, Globe } from 'lucide-react';

const WhyChooseCard = ({ title, desc, icon, bg, border, delay }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      className={`rounded-2xl p-6 border ${border} ${bg} shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start text-left group cursor-default relative overflow-hidden`}
    >
      {/* Spotlight Hover Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(194, 142, 52, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Highlight card borders on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#c28e34]/40 transition-colors duration-300 rounded-2xl pointer-events-none"></div>
      
      {/* Icon */}
      <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0c1c33] flex items-center justify-center mb-5 shrink-0 transition-colors duration-300 group-hover:bg-[#c28e34]">
        <div className="transition-transform duration-300 group-hover:scale-110">
          {React.cloneElement(icon, {
            className: "w-6 h-6 text-[#c28e34] group-hover:text-white transition-colors duration-300"
          })}
        </div>
      </div>
      
      {/* Card Title */}
      <h3 className="relative z-10 text-base font-outfit font-black text-[#051124] mb-2 group-hover:text-[#c28e34] transition-colors">
        {title}
      </h3>
      
      {/* Card Description */}
      <p className="relative z-10 text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
        {desc}
      </p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Smart Learning",
      desc: "Technology-driven digital smart boards and high-speed computer coding laboratories.",
      icon: <MonitorPlay className="w-6 h-6" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/20"
    },
    {
      title: "Experienced Faculty",
      desc: "Highly qualified and dedicated CBSE subject mentors focused on deep child progress.",
      icon: <GraduationCap className="w-6 h-6" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/20"
    },
    {
      title: "Holistic Development",
      desc: "Balanced education combining structured sports fields, music, arts, and analytical life skills.",
      icon: <Sparkles className="w-6 h-6" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/20"
    },
    {
      title: "Safe & Secure Campus",
      desc: "24/7 CCTV smart coverage, secure gates, and strict sanitation/health guidelines.",
      icon: <ShieldCheck className="w-6 h-6" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/20"
    },
    {
      title: "Global Exposure",
      desc: "Innovative academic curriculums and activity programs preparing students for international avenues.",
      icon: <Globe className="w-6 h-6" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/20"
    }
  ];

  return (
    <section className="relative z-20 px-6 md:px-12 py-20 md:py-24 bg-white border-b border-slate-100">
      {/* Background shape */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center max-w-xl"
        >
          <span className="text-xs font-bold text-[#c28e34] tracking-widest uppercase mb-3 block font-outfit">
            Academic Integrity
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] tracking-tight leading-tight">
            Why Choose Our School
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Dream India School Tiruvuru offers an immersive, child-centric learning space dedicated to nurturing tomorrow's leaders.
          </p>
        </motion.div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {cards.map((card, i) => (
            <WhyChooseCard
              key={i}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
              bg={card.bg}
              border={card.border}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
