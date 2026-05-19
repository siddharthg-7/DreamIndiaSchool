import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Landmark } from 'lucide-react';

const StatsStrip = () => {
  const stats = [
    {
      label: "Active Students",
      value: "1,200+",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      label: "Experienced Mentors",
      value: "45+",
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      label: "CBSE Performance",
      value: "100%",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      label: "Campus Facilities",
      value: "15+",
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs flex items-center gap-4 text-left hover:border-slate-300 transition-colors"
            >
              {/* Soft Icon Wrapper */}
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center shrink-0`}>
                {stat.icon}
              </div>
              
              <div>
                <span className="block text-2xl md:text-3xl font-outfit font-black text-[#0f172a] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wider block">
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
