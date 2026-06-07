import { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Cpu, Beaker, Code, Dumbbell, Globe } from 'lucide-react';
import { getSanityPrograms } from '../lib/sanity';

const iconMap = {
  cpu: <Cpu className="w-4 h-4 text-[#c28e34]" />,
  beaker: <Beaker className="w-4 h-4 text-[#c28e34]" />,
  code: <Code className="w-4 h-4 text-[#c28e34]" />,
  dumbbell: <Dumbbell className="w-4 h-4 text-[#c28e34]" />,
  globe: <Globe className="w-4 h-4 text-[#c28e34]" />
};

const staticPrograms = [
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

// Spotlight hover card wrapper for premium 21st dev aesthetic
const SpotlightProgramCard = ({ children, className, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className={`relative bg-white rounded-2xl border border-[#c28e34]/15 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-default overflow-hidden ${className}`}
    >
      {/* Spotlight Hover Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(194, 142, 52, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Dynamic border highlighting */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#c28e34]/30 transition-colors duration-500 rounded-2xl pointer-events-none z-10"></div>

      <div className="relative z-10 flex flex-col lg:flex-row h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

const FeaturedPrograms = () => {
  const [programs, setPrograms] = useState(staticPrograms);

  useEffect(() => {
    let active = true;
    getSanityPrograms().then(data => {
      if (active && data) {
        const mapped = data.map(item => ({
          ...item,
          icon: iconMap[item.iconName?.toLowerCase()] || <Cpu className="w-4 h-4 text-[#c28e34]" />
        }));
        setPrograms(mapped);
      }
    });
    return () => { active = false; };
  }, []);

  return (
    <section id="programs" className="py-20 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100 relative overflow-hidden select-none scroll-mt-28 md:scroll-mt-32">
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

        {/* Bento Grid layout: 2 wide items on top, 3 items on bottom */}
        <div className="grid grid-cols-6 gap-6">
          {programs.map((prog, i) => {
            const isTopRow = i < 2;
            
            // Grid sizing rules:
            // Top row cards span 6 columns on mobile, 3 columns on large screens (50% width)
            // Bottom row cards span 6 columns on mobile, 3 columns on tablet (50%), and 2 columns on large screens (33.3%)
            // The 5th card spans 6 columns on tablet as well to stay beautifully balanced
            let gridSpanClass = "col-span-6 lg:col-span-3";
            if (!isTopRow) {
              if (i === 4) {
                gridSpanClass = "col-span-6 md:col-span-6 lg:col-span-2";
              } else {
                gridSpanClass = "col-span-6 md:col-span-3 lg:col-span-2";
              }
            }

            return (
              <SpotlightProgramCard 
                key={i} 
                index={i} 
                className={gridSpanClass}
              >
                {/* Image Container */}
                <div 
                  className={`relative bg-slate-100 overflow-hidden shrink-0 ${
                    isTopRow 
                      ? "w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto lg:self-stretch lg:min-h-full" 
                      : "w-full aspect-[16/10]"
                  }`}
                >
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#051124]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-extrabold tracking-widest text-[#c28e34] uppercase border border-[#c28e34]/30">
                    {prog.category}
                  </div>
                </div>

                {/* Content description area */}
                <div 
                  className={`flex flex-col justify-between items-start text-left flex-1 ${
                    isTopRow ? "p-6 md:p-8" : "p-6"
                  }`}
                >
                  <div>
                    {/* Icon + Title */}
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0c1c33] flex items-center justify-center shrink-0">
                        {prog.icon}
                      </div>
                      <h3 className="text-base font-outfit font-black text-[#051124] group-hover:text-[#c28e34] transition-colors leading-tight">
                        {prog.title}
                      </h3>
                    </div>

                    <p className={`text-slate-500 leading-relaxed font-semibold mb-6 ${
                      isTopRow ? "text-xs" : "text-[11px]"
                    }`}>
                      {prog.desc}
                    </p>
                  </div>

                  {/* Explore button */}
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[#c28e34] hover:text-[#a67526] font-bold text-xs tracking-wide font-outfit uppercase mt-auto group"
                  >
                    Explore Program <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </SpotlightProgramCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPrograms;
