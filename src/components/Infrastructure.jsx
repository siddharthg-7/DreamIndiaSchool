import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Laptop, Beaker, Trophy, Sparkles, ArrowRight } from 'lucide-react';

const Infrastructure = () => {
  const items = [
    {
      title: "Smart Classrooms",
      category: "ACADEMICS",
      desc: "Fully air-conditioned classrooms integrated with smart digital audio-visual boards.",
      image: "/images/dis-banner-3.png",
      icon: <Laptop className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Science & STEM Labs",
      category: "RESEARCH",
      desc: "State-of-the-art experiment stations for physics, chemistry, biology, and computer learning.",
      image: "/images/dis-banner-5.png",
      icon: <Beaker className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Physical & Sports Fields",
      category: "ATHLETICS",
      desc: "Extensive play courts and fields for football, basketball, cricket, and general fitness.",
      image: "/images/dis-banner-2.png",
      icon: <Trophy className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Student Activity Center",
      category: "CO-CURRICULAR",
      desc: "Dedicated workspaces for cultural festivals, artistic workshops, and group competitions.",
      image: "/images/dis-banner-4.png",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    },
    {
      title: "CBSE Syllabus Standards",
      category: "CURRICULUM",
      desc: "A highly structured academic program focused on fundamental mastery and global success.",
      image: "/images/dis-banner-1.png",
      icon: <BookOpen className="w-5 h-5 text-rose-600" />
    }
  ];

  return (
    <section id="infrastructure" className="py-20 md:py-28 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block font-outfit">
            Academic & Facility Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-[#0f172a] mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Recreating the clean, structured presentation of elite academic academies. Safe, spacious, and future-ready.
          </p>
        </div>

        {/* 3-Column Grid Layout matching professional WordPress layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-default"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#0f172a] uppercase border border-slate-100">
                  {item.category}
                </div>
              </div>

              {/* Description Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col items-start text-left">
                {/* Icon & Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-outfit font-extrabold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Minimal clean action path */}
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs hover:text-blue-700 tracking-wide font-outfit uppercase mt-auto"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
