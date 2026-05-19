import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, User, ArrowRight } from 'lucide-react';
import disLogo from '../assets/dis-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const applyLink = "https://wa.me/918886421212?text=Hello%2C%20I%20am%20interested%20in%20admissions%20at%20Dream%20India%20School%20Tiruvuru%20for%20the%20academic%20year%202026-27.";
  const erpLink = "https://wa.me/918886421212?text=Hello%2C%20I%20need%20assistance%20with%20the%20DIS%20ERP%20portal%20login.";

  return (
    <>
      {/* Top Bar - Hides when scrolled */}
      <div className={`w-full bg-[#0f172a] text-slate-300 text-xs py-3 px-6 md:px-12 border-b border-slate-800 transition-all duration-300 ${
        scrolled ? 'h-0 py-0 overflow-hidden border-none' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Top Bar Left */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="mailto:admissions@dreamindia.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>admissions@dreamindia.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Nuvvula Thota, Tiruvuru</span>
            </div>
          </div>
          {/* Top Bar Right */}
          <div className="flex items-center gap-4">
            <a href={erpLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              <User className="w-3.5 h-3.5 text-blue-500" />
              <span>Parent Portal</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
          scrolled
            ? 'fixed top-0 bg-white border-b border-slate-200 shadow-sm py-3'
            : 'relative bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={disLogo} alt="Dream India School Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col text-left">
              <span className="font-outfit font-black text-lg leading-none text-[#0f172a] tracking-tight">
                DREAM INDIA
              </span>
              <span className="text-[10px] text-blue-600 tracking-widest uppercase font-bold mt-0.5">
                SCHOOL
              </span>
            </div>
          </div>

          {/* Center Links - Eduker styled navigation links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-bold text-[#0f172a] hover:text-blue-600 transition-colors duration-200 py-2 flex items-center gap-1 font-outfit"
              >
                {link.name}
                {['About', 'Academics'].includes(link.name) && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 mt-0.5" />
                )}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={erpLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-bold text-[#334155] hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            >
              ERP Login
            </a>
            <a 
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all duration-200 flex items-center gap-1"
            >
              Apply Now <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#334155] hover:text-blue-600 p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-[60] bg-white w-full max-w-sm border-l border-slate-100 shadow-2xl flex flex-col h-full"
          >
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img src={disLogo} alt="Dream India School Logo" className="w-9 h-9 object-contain" />
                <span className="font-outfit font-extrabold text-base text-[#0f172a]">Dream India School</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col py-6 px-6 gap-4 overflow-y-auto text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-extrabold text-[#0f172a] hover:text-blue-600 transition-colors py-2.5 border-b border-slate-50 font-outfit"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3">
              <a 
                href={erpLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full border border-slate-200 bg-white text-[#334155] font-bold text-center hover:bg-slate-100 transition-colors text-sm"
              >
                ERP Login
              </a>
              <a 
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center transition-colors text-sm flex items-center justify-center gap-1.5 shadow-sm"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
