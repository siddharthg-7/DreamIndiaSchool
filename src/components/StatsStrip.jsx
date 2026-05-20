import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, GraduationCap, ShieldAlert, MonitorPlay, Landmark, Star, Trophy, Sparkles } from 'lucide-react';

const StatsStrip = () => {
  const stats = [
    {
      label: "Years of Excellence",
      value: "15+",
      icon: <Star className="w-5 h-5 text-[#c28e34]" />
    },
    {
      label: "Active Students",
      value: "1,200+",
      icon: <Users className="w-5 h-5 text-[#c28e34]" />
    },
    {
      label: "Qualified Faculty",
      value: "45+",
      icon: <GraduationCap className="w-5 h-5 text-[#c28e34]" />
    },
    {
      label: "Awards & Recognition",
      value: "25+",
      icon: <Trophy className="w-5 h-5 text-[#c28e34]" />
    },
    {
      label: "Smart Classrooms",
      value: "100%",
      icon: <Sparkles className="w-5 h-5 text-[#c28e34]" />
    }
  ];

  return (
    <section className="py-8 bg-[#051124] border-y border-[#c28e34]/20 px-6 md:px-12 relative overflow-hidden select-none">
      {/* Decorative glowing lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(194,142,52,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex items-center gap-3.5 px-4 justify-center md:justify-start ${
                i !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              {/* Gold Icon Wrapper */}
              <div className="w-10 h-10 rounded-full bg-[#0c1c33] border border-[#c28e34]/20 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              
              <div className="text-left">
                <span className="block text-xl md:text-2xl font-outfit font-black text-white leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider block font-outfit">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
