import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "/images/dis-banner-1.png",
      tagline: "WELCOME TO DREAM INDIA SCHOOL",
      title: "Empowering Students to Learn, Lead, & Succeed",
      description: "Future-ready education focused on academic excellence, discipline, leadership, and innovation in the heart of Tiruvuru."
    },
    {
      image: "/images/dis-banner-3.png",
      tagline: "MODERN EDUCATIONAL STANDARDS",
      title: "Together We'll Explore New Things",
      description: "Integrated smart classrooms with audio-visual equipment and digital course guides to amplify student comprehension."
    },
    {
      image: "/images/dis-banner-5.png",
      tagline: "FUTURE-READY STEM CURRICULUM",
      title: "Unlocking Creative & Technical Talents",
      description: "Advanced experiment stations for physics, chemistry, biology, and computational sciences to build practical innovation."
    }
  ];

  const applyLink = "https://wa.me/918886421212?text=Hello%2C%20I%20am%20interested%20in%20admissions%20at%20Dream%20India%20School%20Tiruvuru%20for%20the%20academic%20year%202026-27.";

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  // Text Animation Variants matching professional slider fade-up
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section className="relative w-full h-[650px] md:h-[750px] bg-slate-950 overflow-hidden select-none flex items-center">
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Dream India Campus Slide" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Soft Dark Vignette Gradients precisely matching Eduker template */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/30 to-black/40 z-10"></div>
      </div>

      {/* Grid Pattern overlay for crisp contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-15"></div>

      {/* Left/Right Edge Arrow Navigation - Identical to Eduker screenshot */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-10 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-10 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-start items-center">
        <div className="max-w-3xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              {/* Tagline */}
              <span className="text-[12px] md:text-sm font-bold text-blue-400 tracking-widest uppercase block font-outfit">
                {slides[currentSlide].tagline}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                {slides[currentSlide].title}
              </h1>

              {/* Subheading */}
              <p className="text-slate-200 text-base md:text-lg font-medium max-w-xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Action Buttons - Clean Poppins / Outfit Style */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a 
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Apply for Admission <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#infrastructure"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/35 bg-white/5 hover:bg-white hover:text-[#0f172a] text-white font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Explore Campus
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Progress Indicator Dots at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopTimer();
              setCurrentSlide(index);
              startTimer();
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
