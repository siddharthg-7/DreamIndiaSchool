import { motion } from 'framer-motion';
import { BookOpen, Laptop, Beaker, Trophy, Sparkles, ArrowRight } from 'lucide-react';

const Infrastructure = () => {
  const items = [
    {
      title: "Smart Classrooms",
      category: "ACADEMICS",
      desc: "Fully air-conditioned learning spaces integrated with smart digital audio-visual boards and ergonomic student spaces.",
      image: "/images/dis-banner-3.png",
      icon: Laptop,
      gridClass: "md:col-span-2 lg:col-span-2 flex flex-col md:flex-row",
      imgClass: "w-full h-[220px] md:w-1/2 md:min-h-full md:h-auto",
      contentClass: "w-full md:w-1/2"
    },
    {
      title: "Science & STEM Labs",
      category: "RESEARCH",
      desc: "State-of-the-art physics, chemistry, biology, and advanced robotics stations.",
      image: "/images/dis-banner-5.png",
      icon: Beaker,
      gridClass: "md:col-span-1 lg:col-span-1 flex flex-col",
      imgClass: "w-full h-[220px] md:h-[180px] lg:h-[180px]",
      contentClass: "w-full"
    },
    {
      title: "Student Activity Center",
      category: "CO-CURRICULAR",
      desc: "Dedicated workspaces for fine arts, cultural events, music, and group work.",
      image: "/images/dis-banner-4.png",
      icon: Sparkles,
      gridClass: "md:col-span-1 lg:col-span-1 flex flex-col",
      imgClass: "w-full h-[220px] md:h-[180px] lg:h-[180px]",
      contentClass: "w-full"
    },
    {
      title: "Physical & Sports Fields",
      category: "ATHLETICS",
      desc: "Extensive grass play courts for football, cricket pitches, and basketball.",
      image: "/images/dis-banner-2.png",
      icon: Trophy,
      gridClass: "md:col-span-1 lg:col-span-1 flex flex-col",
      imgClass: "w-full h-[220px] md:h-[180px] lg:h-[180px]",
      contentClass: "w-full"
    },
    {
      title: "CBSE Syllabus Standards",
      category: "CURRICULUM",
      desc: "A highly structured, outcome-based academic program engineered to drive national scholastic success and build conceptual life depth.",
      image: "/images/dis-banner-1.png",
      icon: BookOpen,
      gridClass: "md:col-span-1 lg:col-span-1 flex flex-col",
      imgClass: "w-full h-[220px] md:h-[180px] lg:h-[180px]",
      contentClass: "w-full"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100 select-none scroll-mt-28 md:scroll-mt-32">
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
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`bg-white rounded-2xl overflow-hidden border border-[#c28e34]/15 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(194,142,52,0.12)] hover:border-[#c28e34]/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col group cursor-default h-full ${item.gridClass}`}
              >
                {/* Photo Area */}
                <div className={`relative overflow-hidden shrink-0 w-full ${item.imgClass}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#051124]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#c28e34] uppercase border border-[#c28e34]/35">
                    {item.category}
                  </div>
                </div>

                {/* Description Content */}
                <div className={`p-6 md:p-8 flex-1 flex flex-col items-start justify-center text-left ${item.contentClass}`}>
                  {/* Icon & Title row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#0c1c33] border border-[#c28e34]/25 flex items-center justify-center shrink-0 group-hover:bg-[#c28e34] group-hover:border-[#c28e34] group-hover:shadow-[0_0_15px_rgba(194,142,52,0.4)] transition-all duration-500">
                      <Icon className="w-4.5 h-4.5 text-[#c28e34] group-hover:text-[#0c1c33] transition-colors duration-500" />
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
                    className="inline-flex items-center gap-1.5 text-[#c28e34] font-bold text-[10px] hover:text-[#a67526] tracking-wide font-outfit uppercase mt-auto group"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
