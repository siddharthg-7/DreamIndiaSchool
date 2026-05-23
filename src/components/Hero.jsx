import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const SLIDE_COUNT = 3;

const Hero = ({ openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "/images/dis-banner-1.png",
      tagline: "DREAM INDIA SCHOOL TIRUVURU",
      title: "Nurturing Minds. Shaping Futures.",
      description: "A future-ready CBSE education combining technology, sports excellence, and analytical thinking with deep ethical values.",
      focus: 'center center'
    },
    {
      image: "/images/dis-banner-3.png",
      tagline: "SECURE CAMPUS & EXPERT FACULTY",
      title: "Empowering Students to Learn and Lead.",
      description: "Optimized student-teacher ratios, personalized attention, and modern smart classrooms for deep conceptual understanding.",
      focus: '70% center'
    },
    {
      image: "/images/dis-banner-5.png",
      tagline: "FUTURE-READY INNOVATION",
      title: "Unlocking Practical Logic and Science.",
      description: "State-of-the-art AI & Robotics hubs, coding labs, and experiential STEM training centers to prepare kids for tomorrow.",
      focus: '72% center'
    }
  ];

  const getSrcBase = (imgPath) => imgPath.replace(/\.(png|jpe?g|webp)$/i, '');



  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
    }, 6000);
  }, [stopTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const handlePrev = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev === 0 ? SLIDE_COUNT - 1 : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
    startTimer();
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section className="relative w-full bg-[#051124] overflow-hidden select-none">
      <div className="relative mx-auto w-full max-w-[1640px] h-[550px] md:h-[624px] lg:h-[624px] flex items-center">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              {/* Responsive picture sources: WebP primary with JPEG fallback */}
              {(() => {
                const base = getSrcBase(slides[currentSlide].image);
                return (
                  <picture className="absolute inset-0 block w-full h-full">
                    <source
                      type="image/webp"
                      srcSet={`${base}-480.webp 480w, ${base}-768.webp 768w, ${base}-1280.webp 1280w, ${base}-1640.webp 1640w, ${base}-1920.webp 1920w, ${base}-3840.webp 3840w`}
                      sizes="(min-width:1640px) 1640px, 100vw"
                    />
                    <source
                      type="image/jpeg"
                      srcSet={`${base}-480.jpg 480w, ${base}-768.jpg 768w, ${base}-1280.jpg 1280w, ${base}-1640.jpg 1640w, ${base}-1920.jpg 1920w, ${base}-3840.jpg 3840w`}
                      sizes="(min-width:1640px) 1640px, 100vw"
                    />
                    <img
                      src={`${base}-1640.webp`}
                      alt="Dream India Campus Slide"
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: slides[currentSlide].focus }}
                      loading={currentSlide === 0 ? 'eager' : 'lazy'}
                      fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
                    />
                  </picture>
                );
              })()}

              {/* Custom Navy gradient overlay matching Bright Future's color scheme */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#051124]/95 via-[#051124]/80 to-[#051124]/30"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#051124] to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Edge Slide Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-30 w-11 h-11 rounded-full border border-white/10 bg-[#0c1c33]/40 hover:bg-[#c28e34] hover:border-[#c28e34] text-white transition-all duration-300 flex items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-30 w-11 h-11 rounded-full border border-white/10 bg-[#0c1c33]/40 hover:bg-[#c28e34] hover:border-[#c28e34] text-white transition-all duration-300 flex items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Content Area */}
        <div className="relative z-20 max-w-[1640px] mx-auto w-full px-6 md:px-12 flex justify-start items-center">
          <div className="max-w-2xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
              {/* Slogan Tag */}
              <span className="text-[10px] md:text-xs font-bold text-[#c28e34] tracking-widest uppercase block font-outfit border-l-2 border-[#c28e34] pl-3">
                {slides[currentSlide].tagline}
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white tracking-tight leading-[1.12]">
                {slides[currentSlide].title}
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-300 text-sm md:text-base lg:text-lg font-medium max-w-xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Magnetic>
                  <button
                    onClick={() => openModal('admission')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-xs font-outfit uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Magnetic>
                <Magnetic>
                  <button
                    onClick={() => openModal('visit')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-white/20 hover:border-[#c28e34] hover:text-[#c28e34] text-white font-extrabold text-xs font-outfit uppercase tracking-widest bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Book a Visit
                  </button>
                </Magnetic>
              </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators Strip */}
        <div className="absolute bottom-8 left-6 md:left-12 z-20 flex gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                stopTimer();
                setCurrentSlide(idx);
                startTimer();
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'bg-[#c28e34] w-10' : 'bg-white/30 w-5 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
