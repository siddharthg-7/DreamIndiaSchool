import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
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
    },
    {
      name: "K. Anuradha",
      role: "Parent of Grade II Student",
      comment: "The sports coaching here is structured and disciplined. Our child has become more active, cooperative, and eager to participate in team sports and campus games.",
      rating: 5,
      avatar: "KA"
    }
  ];

  // Auto-play cycling interval
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

  // Slider animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block font-outfit">
            Guardian & Parent Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-[#0f172a] mb-4">
            What Our Parents Say
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-semibold max-w-lg mx-auto leading-relaxed">
            Real feedback from local parents detailing student achievements and campus developmental success.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative text-left flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              {/* Giant floating visual quote icon */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100/80 -z-10 pointer-events-none" />

              {/* Avatar placeholder with modern gradient outline */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-outfit font-black text-xl shadow-md shrink-0">
                {reviews[index].avatar}
              </div>

              {/* Message block */}
              <div className="flex-1 space-y-4">
                {/* 5-Star Rating Indicator */}
                <div className="flex items-center gap-1">
                  {[...Array(reviews[index].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed font-semibold">
                  "{reviews[index].comment}"
                </p>

                <div>
                  <h4 className="font-outfit font-extrabold text-[#0f172a] text-base">
                    {reviews[index].name}
                  </h4>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mt-0.5">
                    {reviews[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Actions & Indicators */}
        <div className="flex items-center justify-between mt-10">
          
          {/* Action indicator dots */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Left/Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center shadow-xs transition-colors duration-200 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center shadow-xs transition-colors duration-200 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
