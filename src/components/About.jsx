import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const points = [
    { title: "Student Centric Approach", desc: "Prioritizing personalized attention and child-centric growth frameworks." },
    { title: "Experienced Faculty", desc: "Highly skilled, trained CBSE subject mentors driving developmental success." },
    { title: "Best Practices", desc: "Standard academic schedules integrated with multi-sport coaching and tech learning." }
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Side: Campus Student Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[1.3] rounded-2xl overflow-hidden border border-slate-100 shadow-lg bg-slate-50 group">
            <img 
              src="/images/dis-banner-4.png" 
              alt="Dream India School Student Activities" 
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            {/* Absolute badge overlay for credential authority */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold font-outfit uppercase px-3 py-1.5 rounded-lg shadow-sm">
              Established 15+ Years
            </div>
          </div>
        </div>

        {/* Right Side: Professional Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block font-outfit">
              About Dream India School (DIS)
            </span>
            
            <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-[#0f172a] leading-tight">
              Nurturing Future Leaders <br />
              <span className="text-slate-500 font-bold text-xl md:text-2xl">With Deep Values and Smart Technology</span>
            </h2>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
              Dream India School Tiruvuru is a premier educational institution committed to nurturing the leaders of tomorrow. Our balanced curriculum goes beyond textbooks, fostering analytical skill, creative expression, and strong ethical values.
            </p>

            {/* Bullet Points Checklist */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-extrabold text-[#0f172a] text-sm md:text-base">
                      {pt.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-semibold">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More button redirecting cleanly */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-all duration-200 cursor-pointer"
              >
                Learn More
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
