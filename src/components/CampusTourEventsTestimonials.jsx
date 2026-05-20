import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Play, Quote, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Magnetic from './Magnetic';

// SpotlightCard Sub-component for 21st Dev Custom Spotlight Hover Glow
const SpotlightCard = ({ children, className, initial, whileInView, viewport, transition, borderHoverColor = "group-hover:border-[#c28e34]/40" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl border transition-all duration-500 flex flex-col justify-between group cursor-default overflow-hidden ${className}`}
    >
      {/* Spotlight Hover Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(194, 142, 52, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Highlight borders on hover */}
      <div className={`absolute inset-0 border border-transparent ${borderHoverColor} transition-colors duration-500 rounded-2xl pointer-events-none z-10`}></div>

      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

const CampusTourEventsTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visitLink = "https://wa.me/918886421212?text=Hello%2C%20I%20would%20like%20to%20book%20a%20campus%20visit%20to%20Dream%20India%20School%20Tiruvuru.";

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Parent of Grade V Student",
      comment: "Dream India School has been a perfect blend of academics and overall growth for my child.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Srinivas Rao",
      role: "Parent of Grade VIII Student",
      comment: "The individual attention my child receives is remarkable. The teacher-student ratio is well-optimized, and we've seen immense conceptual growth in Mathematics and Science.",
      rating: 5,
      avatar: "SR"
    },
    {
      name: "Lakshmi Prasanna",
      role: "Parent of Grade IV Student",
      comment: "Dream India School has successfully integrated smart board tech without losing focus on primary values. The digital labs and physical playgrounds provide a perfectly balanced daily cycle.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "Ramesh Kumar",
      role: "Parent of Grade IX Student",
      comment: "Safety is our number one priority, and DIS excels here. 24/7 CCTV surveillance, vigilant security guards, and excellent CBSE syllabus mentors give us peace of mind.",
      rating: 5,
      avatar: "RK"
    }
  ];

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0
    })
  };

  const events = [
    {
      title: "Annual Science Exhibition",
      date: "20 May 2026",
      desc: "Student innovation project showcases & science laboratory models demonstration."
    },
    {
      title: "Inter-School Sports Meet",
      date: "05 Jun 2026",
      desc: "District level track & field games, athletic meets, and outdoor sports tournaments."
    },
    {
      title: "Music & Dance Fest",
      date: "18 Jun 2026",
      desc: "Creative cultural programs showcasing students' artistic expressions & musical skills."
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-b border-slate-100 relative overflow-hidden select-none">
      {/* Decorative layout elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Column 1: Virtual Campus Tour */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative rounded-2xl overflow-hidden border border-[#c28e34]/20 shadow-sm flex flex-col justify-between p-6 md:p-7 h-full min-h-[360px] lg:min-h-[320px] group"
          >
            {/* Background Image with Zoom */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/dis-banner-2.png" 
                alt="Dream India School Campus Corridor" 
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              {/* Semi-transparent dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-[#051124]/65 to-transparent z-10"></div>
            </div>

            {/* Centered Glowing Play Button with Ripples */}
            <div className="relative z-20 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center mx-auto my-auto group-hover:scale-110 group-hover:bg-[#c28e34] group-hover:border-[#c28e34] group-hover:shadow-[0_0_30px_rgba(194,142,52,0.6)] transition-all duration-500 shadow-lg cursor-pointer">
              {/* Outer ripple rings */}
              <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-70 group-hover:bg-[#c28e34]/30 pointer-events-none"></div>
              <div className="absolute -inset-2 rounded-full bg-white/5 animate-pulse opacity-40 group-hover:bg-[#c28e34]/20 pointer-events-none"></div>
              <Play className="w-5 h-5 text-white fill-white translate-x-0.5 relative z-10" />
            </div>

            {/* Content info */}
            <div className="relative z-20 text-left mt-auto pt-6">
              <span className="text-[#c28e34] font-extrabold tracking-widest uppercase text-[10px] block mb-2 font-outfit">
                Interactive Experience
              </span>
              <h3 className="text-xl md:text-2xl font-outfit font-black text-white mb-2 leading-tight">
                Virtual Campus Tour
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-semibold leading-relaxed mb-6 max-w-xs">
                Explore our campus, smart classrooms, and laboratory hubs from the comfort of your home.
              </p>
              <Magnetic className="w-full">
                <a 
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-center text-xs font-outfit uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 cursor-pointer block"
                >
                  Take Virtual Tour
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Column 2: Upcoming Events */}
          <SpotlightCard
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#fdfbf7] p-6 md:p-7 border-[#c28e34]/20 shadow-xs text-left h-full min-h-[360px] lg:min-h-[320px]"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[#c28e34] font-extrabold tracking-widest uppercase text-[10px] block mb-2 font-outfit">
                  Campus Calendar
                </span>
                <h3 className="text-xl md:text-2xl font-outfit font-black text-[#051124] mb-3">
                  Upcoming Events
                </h3>
                <div className="w-12 h-1 bg-[#c28e34] rounded-full mb-6"></div>

                {/* Events vertical list with hover micro-interactions */}
                <div className="space-y-4">
                  {events.map((evt, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col gap-0.5 pb-3 text-left group/row transition-all duration-300 hover:pl-2 ${
                        idx !== events.length - 1 ? 'border-b border-[#c28e34]/10' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-outfit font-black text-[#051124] group-hover/row:text-[#c28e34] transition-colors leading-tight cursor-default">
                          {evt.title}
                        </h4>
                        <span className="text-[10px] font-extrabold text-[#c28e34] uppercase tracking-widest shrink-0 font-outfit ml-3">
                          {evt.date}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed mt-1">
                        {evt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#c28e34] hover:text-[#a67526] font-bold text-xs tracking-wider font-outfit uppercase mt-6 group/btn w-fit"
              >
                View All Events <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </SpotlightCard>

          {/* Column 3: What Parents Say */}
          <SpotlightCard
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#051124] p-6 md:p-7 border-[#c28e34]/25 shadow-lg text-left h-full min-h-[360px] lg:min-h-[320px]"
            borderHoverColor="group-hover:border-[#c28e34]/50"
          >
            {/* Glowing quote highlights */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-900/50 pointer-events-none -z-10 group-hover:scale-110 group-hover:rotate-6 group-hover:text-slate-900/70 transition-all duration-700" />

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#c28e34] mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
                
                <span className="text-[#c28e34] font-extrabold tracking-widest uppercase text-[10px] block mb-3 font-outfit">
                  Guardian Feedback
                </span>

                {/* Slider viewport - Optimized height constraints */}
                <div className="relative flex items-center min-h-[110px] md:min-h-[100px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <p className="text-slate-200 text-sm italic leading-relaxed font-semibold mb-6">
                        "{reviews[index].comment}"
                      </p>
                      <div>
                        <h4 className="font-outfit font-black text-white text-sm">
                          {reviews[index].name}
                        </h4>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mt-0.5">
                          {reviews[index].role}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider navigation & pagination indicators */}
              <div className="flex items-center justify-between mt-8 border-t border-[#c28e34]/15 pt-6">
                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === index ? 'w-6 bg-[#c28e34]' : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-[#c28e34]/20 hover:border-[#c28e34] bg-[#0c1c33] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-[#c28e34]/20 hover:border-[#c28e34] bg-[#0c1c33] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default CampusTourEventsTestimonials;
