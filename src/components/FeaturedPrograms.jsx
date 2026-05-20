import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Beaker, Code, Dumbbell, Globe } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "AI & Robotics",
      category: "Innovation",
      desc: "Building future-ready skills in electronics, mechanics, and algorithm design through hands-on labs.",
      image: "/images/dis-banner-5.png",
      icon: <Cpu className="w-4 h-4 text-[#c28e34]" />
    },
    {
      title: "STEM Education",
      category: "Science & Math",
      desc: "Integrated approach to science, technology, engineering, and math for practical conceptual depth.",
      image: "/images/dis-banner-3.png",
      icon: <Beaker className="w-4 h-4 text-[#c28e34]" />
    },
    {
      title: "Coding for Kids",
      category: "Logic & Tech",
      desc: "Introducing programming principles, block coding, and problem-solving paradigms from early grades.",
      image: "/images/dis-banner-4.png",
      icon: <Code className="w-4 h-4 text-[#c28e34]" />
    },
    {
      title: "Sports Excellence",
      category: "Athletics",
      desc: "Professional sports mentoring, track & field guidelines, and physical fitness tracking.",
      image: "/images/dis-banner-2.png",
      icon: <Dumbbell className="w-4 h-4 text-[#c28e34]" />
    },
    {
      title: "Language Programs",
      category: "Communication",
      desc: "Comprehensive vocabulary development, public speaking training, and global English mastery.",
      image: "/images/dis-banner-1.png",
      icon: <Globe className="w-4 h-4 text-[#c28e34]" />
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100 relative overflow-hidden select-none">
      {/* Background shape */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#c28e34] tracking-wider uppercase mb-3 block font-outfit">
            Academic Pathways
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mb-4">
            Our Featured Programs
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Delivering modern skillsets that extend far beyond traditional textbook learning, enabling students to excel in a global arena.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#c28e34]/15 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-default"
            >
              {/* Image Area with Zoom */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden shrink-0">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 bg-[#051124]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-extrabold tracking-widest text-[#c28e34] uppercase border border-[#c28e34]/30">
                  {prog.category}
                </div>
              </div>

              {/* Text Description Content */}
              <div className="p-5 flex-1 flex flex-col items-start text-left">
                {/* Icon + Title */}
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0c1c33] flex items-center justify-center shrink-0">
                    {prog.icon}
                  </div>
                  <h3 className="text-sm font-outfit font-black text-[#051124] group-hover:text-[#c28e34] transition-colors leading-tight">
                    {prog.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-[11px] leading-relaxed font-semibold mb-5 flex-1">
                  {prog.desc}
                </p>

                {/* Micro-animated Call-to-action path */}
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#c28e34] hover:text-[#a67526] font-bold text-[10px] tracking-wide font-outfit uppercase mt-auto"
                >
                  Explore Program <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPrograms;
