import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Laptop, Beaker, Trophy, Sparkles, ArrowRight } from 'lucide-react';

const Infrastructure = () => {
  const items = [
    {
      title: "Smart Classrooms",
      category: "ACADEMICS",
      desc: "Fully air-conditioned learning spaces integrated with smart digital audio-visual boards and ergonomic student spaces.",
      image: "/images/dis-banner-3.png",
      icon: <Laptop className="w-5 h-5 text-[#c28e34]" />,
      gridClass: "lg:col-span-2 lg:row-span-2 lg:flex-row",
      imgClass: "lg:w-1/2 lg:h-full",
      contentClass: "lg:w-1/2"
    },
    {
      title: "Science & STEM Labs",
      category: "RESEARCH",
      desc: "State-of-the-art physics, chemistry, biology, and advanced robotics stations.",
      image: "/images/dis-banner-5.png",
      icon: <Beaker className="w-5 h-5 text-[#c28e34]" />,
      gridClass: "lg:col-span-1 lg:row-span-1 lg:flex-col",
      imgClass: "lg:w-full lg:h-[180px]",
      contentClass: "lg:w-full"
    },
    {
      title: "Student Activity Center",
      category: "CO-CURRICULAR",
      desc: "Dedicated workspaces for fine arts, cultural events, music, and group work.",
      image: "/images/dis-banner-4.png",
      icon: <Sparkles className="w-5 h-5 text-[#c28e34]" />,
      gridClass: "lg:col-span-1 lg:row-span-1 lg:flex-col",
      imgClass: "lg:w-full lg:h-[180px]",
      contentClass: "lg:w-full"
    },
    {
      title: "Physical & Sports Fields",
      category: "ATHLETICS",
      desc: "Extensive grass play courts for football, cricket pitches, and basketball.",
      image: "/images/dis-banner-2.png",
      icon: <Trophy className="w-5 h-5 text-[#c28e34]" />,
      gridClass: "lg:col-span-1 lg:row-span-1 lg:flex-col",
      imgClass: "lg:w-full lg:h-[180px]",
      contentClass: "lg:w-full"
    },
    {
      title: "CBSE Syllabus Standards",
      category: "CURRICULUM",
      desc: "A highly structured, outcome-based academic program engineered to drive national scholastic success and build conceptual life depth.",
      image: "/images/dis-banner-1.png",
      icon: <BookOpen className="w-5 h-5 text-[#c28e34]" />,
      gridClass: "lg:col-span-2 lg:row-span-1 lg:flex-row-reverse",
      imgClass: "lg:w-5/12 lg:h-full",
      contentClass: "lg:w-7/12"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#c28e34] tracking-wider uppercase mb-3 block font-outfit">
            Academic & Facility Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mb-4">
            World-Class Infrastructure
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Spacious, safe, and future-ready facilities engineered to provide a supportive environment for comprehensive education.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-[minmax(280px,auto)] items-stretch">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`bg-white rounded-2xl overflow-hidden border border-[#c28e34]/15 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-default h-full ${item.gridClass}`}
            >
              {/* Photo Area */}
              <div className={`relative overflow-hidden shrink-0 w-full h-[200px] ${item.imgClass}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#051124]/90 backdrop-blur-xs px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#c28e34] uppercase border border-[#c28e34]/35">
                  {item.category}
                </div>
              </div>

              {/* Description Content */}
              <div className={`p-6 md:p-8 flex-1 flex flex-col items-start justify-center text-left ${item.contentClass}`}>
                {/* Icon & Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#0c1c33] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-outfit font-black text-[#051124] group-hover:text-[#c28e34] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold mb-6">
                  {item.desc}
                </p>

                {/* Action Link */}
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#c28e34] font-bold text-[10px] hover:text-[#a67526] tracking-wide font-outfit uppercase mt-auto"
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
