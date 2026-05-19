import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "/images/dis-banner-1.png",
      tagline: "DREAM INDIA SCHOOL",
      title: "Together We'll Explore New Things",
      description: "We believe everyone should have the opportunity to create progress through high-quality premium CBSE education."
    },
    {
      image: "/images/dis-banner-3.png",
      tagline: "SECURE CAMPUS & CBSE CURRICULUM",
      title: "Empowering Students to Learn, Lead & Succeed",
      description: "An academic environment focused on conceptual depth, discipline, structured sports, and technology integration."
    },
    {
      image: "/images/dis-banner-5.png",
      tagline: "MODERN STEM INFRASTRUCTURE",
      title: "Unlocking Practical Thinking & Innovation",
      description: "Advanced experiment stations and digital computing laboratories designed to build computational logic."
    }
  ];

  const applyLink = "https://wa.me/918886421212?text=Hello%2C%20I%20am%20interested%20in%20admissions%20at%20Dream%20India%20School%20Tiruvuru%20for%20the%20academic%20year%202026-27.";

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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

  const textVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 overflow-hidden select-none flex items-center">
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
        
        {/* Soft, natural dark overlay matching Eduker - no heavy colors */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>
      </div>

      {/* Edge Arrow Navigation - Low opacity borders, rounded-full circle links */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-10 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/10 hover:bg-blue-600 hover:border-blue-600 text-white transition-all duration-200 flex items-center justify-center focus:outline-none cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-10 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/10 hover:bg-blue-600 hover:border-blue-600 text-white transition-all duration-200 flex items-center justify-center focus:outline-none cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-start items-center">
        <div className="max-w-2xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-5"
            >
              {/* Category Subtitle */}
              <span className="text-[12px] md:text-sm font-extrabold text-blue-400 tracking-widest uppercase block font-outfit">
                {slides[currentSlide].tagline}
              </span>

              {/* Huge Bold Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                {slides[currentSlide].title}
              </h1>

              {/* Subheading */}
              <p className="text-slate-100 text-sm md:text-base font-semibold max-w-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* Professional Rectangular solid/outline CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a 
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Find Courses <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#infrastructure"
                  className="w-full sm:w-auto px-7 py-3 rounded-md border border-white/35 bg-white/5 hover:bg-white hover:text-slate-900 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Campus
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Indicators at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              stopTimer();
              setCurrentSlide(idx);
              startTimer();
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
