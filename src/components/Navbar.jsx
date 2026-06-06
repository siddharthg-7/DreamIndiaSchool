import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, Calendar, Award, GraduationCap, ShieldCheck, Cpu, Code, Dumbbell, Globe, BookOpen, BookCheck, ClipboardList, Clock, FileText, Landmark, UserCheck } from 'lucide-react';
import disLogo from '../assets/dis-logo.png';
import Magnetic from './Magnetic';
import { getTelUrl } from '../lib/phoneApi';

const Navbar = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setExpandedMobileDropdown(expandedMobileDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open and handle Escape to close
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics', dropdown: 'academics' },
    { name: 'Programs', href: '#programs', dropdown: 'programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#infrastructure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Portal', href: '#portal', dropdown: 'portal' },
    { name: 'Contact', href: '#contact' },
  ];

  const dropdownData = {
    academics: (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 p-5 lg:p-8 bg-transparent">
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Pre Primary</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 opacity-60" /> Overview</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookCheck className="w-3.5 h-3.5 opacity-60" /> Curriculum</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 opacity-60" /> Activities</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Primary School</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 opacity-60" /> Overview</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookCheck className="w-3.5 h-3.5 opacity-60" /> Curriculum</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 opacity-60" /> Subjects</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 opacity-60" /> Activities</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Middle School</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 opacity-60" /> Overview</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookCheck className="w-3.5 h-3.5 opacity-60" /> Curriculum</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 opacity-60" /> Subjects</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 opacity-60" /> Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Senior Secondary</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 opacity-60" /> Overview</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5 opacity-60" /> Streams</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5 opacity-60" /> Subjects</a></li>
            <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 opacity-60" /> Guidance</a></li>
          </ul>
        </div>
        <div className="bg-[#122a45]/60 p-5 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <h4 className="font-outfit font-extrabold text-white text-xs uppercase tracking-widest mb-3">Academic Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#announcements" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#c28e34]" /> Calendar</a></li>
              <li><a href="#announcements" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#c28e34]" /> Exams</a></li>
              <li><a href="#academics" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#c28e34]" /> Digital Learning</a></li>
              <li><a href="#about" className="hover:text-[#c28e34] transition-colors flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#c28e34]" /> Achievements</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    programs: (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 p-5 lg:p-8 bg-transparent">
        {[
          { title: "AI & Robotics", icon: <Cpu className="w-5 h-5 text-[#c28e34]" />, desc: "Hands-on machine learning, smart electronics, and future technology lab sessions." },
          { title: "STEM Education", icon: <GraduationCap className="w-5 h-5 text-[#c28e34]" />, desc: "Integrated science, math, and engineering concepts with experiential learning." },
          { title: "Coding for Kids", icon: <Code className="w-5 h-5 text-[#c28e34]" />, desc: "Computational thinking, blocks, and language coding classes from early grades." },
          { title: "Sports Excellence", icon: <Dumbbell className="w-5 h-5 text-[#c28e34]" />, desc: "State-wide recognized sports coaching, athletic tracking, and play fields." },
          { title: "Language Programs", icon: <Globe className="w-5 h-5 text-[#c28e34]" />, desc: "Focusing on vocabulary development, public speaking, and English command." }
        ].map((prog, idx) => (
          <div key={idx} className="p-4 rounded-xl hover:bg-[#122a45]/50 border border-transparent hover:border-[#c28e34]/15 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-[#122a45] flex items-center justify-center mb-3">
              {prog.icon}
            </div>
            <h4 className="font-outfit font-extrabold text-white text-sm mb-1.5">{prog.title}</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{prog.desc}</p>
          </div>
        ))}
      </div>
    ),
    portal: (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-5 lg:p-8 bg-transparent">
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Student Portal</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-60" /> Attendance Tracking</li>
            <li className="flex items-center gap-2"><ClipboardList className="w-3.5 h-3.5 opacity-60" /> Assignments & Submissions</li>
            <li className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 opacity-60" /> Timetable Schedules</li>
            <li className="flex items-center gap-2"><Award className="w-3.5 h-3.5 opacity-60" /> Examination Results</li>
            <li className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5 opacity-60" /> Digital Study Materials</li>
          </ul>
        </div>
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Parent Portal</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li className="flex items-center gap-2"><Landmark className="w-3.5 h-3.5 opacity-60" /> Fee Payment System</li>
            <li className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 opacity-60" /> Student Progress Reports</li>
            <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-60" /> Daily Attendance Logs</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 opacity-60" /> Notification Bulletins</li>
            <li className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 opacity-60" /> PTM Scheduling</li>
          </ul>
        </div>
        <div>
          <h4 className="font-outfit font-extrabold text-[#c28e34] text-sm uppercase tracking-wider mb-4 border-b border-[#c28e34]/20 pb-2">Staff Portal</h4>
          <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
            <li className="flex items-center gap-2"><UserCheck className="w-3.5 h-3.5 opacity-60" /> LMS Dashboard Login</li>
            <li className="flex items-center gap-2"><ClipboardList className="w-3.5 h-3.5 opacity-60" /> Internal Administrative Tools</li>
            <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-60" /> Biometric Attendance</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 opacity-60" /> Circulars & Notices</li>
            <li className="flex items-center gap-2"><Landmark className="w-3.5 h-3.5 opacity-60" /> Staff Profiles & Salaries</li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Bar - Premium Dark Navy */}
      <div className={`w-full bg-[#051124] text-slate-300 text-xs py-2 px-6 md:px-12 border-b border-white/5 transition-all duration-300 relative z-30 ${
        scrolled ? 'h-0 py-0 overflow-hidden border-none' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Top Bar Left - Contact details */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="mailto:admissions@dreamindia.com" className="flex items-center gap-2 hover:text-[#c28e34] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c28e34]" />
              <span className="font-medium">admissions@dreamindia.com</span>
            </a>
            <a href={getTelUrl()} className="flex items-center gap-2 hover:text-[#c28e34] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c28e34]" />
              <span className="font-medium">+91 88864 21212</span>
            </a>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c28e34]" />
              <span className="font-medium">Nuvvula Thota, Tiruvuru</span>
            </div>
          </div>

          {/* Top Bar Right - Admissions CTA */}
          <div className="flex items-center gap-3">
            <Magnetic>
              <button 
                onClick={() => openModal('admission')}
                className="bg-[#c28e34] hover:bg-[#a67526] text-white px-4 py-1.5 rounded-md text-[10px] font-extrabold font-outfit uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1 cursor-pointer"
              >
                Apply Now <ArrowRight className="w-3 h-3" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Main sticky navigation - Rich Dark Navy background to match Bright Future */}
      <nav
        className={`left-0 right-0 z-40 transition-all duration-300 px-6 md:px-12 border-b ${
          scrolled
            ? 'fixed top-0 bg-[#051124]/95 backdrop-blur-md border-white/5 shadow-lg py-3'
            : 'relative bg-[#0c1c33] border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Logo Section */}
          <button
            aria-label="Scroll to top"
            className="flex items-center gap-3.5 cursor-pointer select-none bg-transparent border-0 p-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#c28e34] rounded-full blur-md opacity-20"></div>
              <img src={disLogo} alt="Dream India School Logo" className="w-11 h-11 object-contain relative z-10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-outfit font-black text-lg leading-none text-white tracking-tight">
                DREAM INDIA
              </span>
              <span className="text-[10px] text-[#c28e34] tracking-widest uppercase font-bold mt-1 font-outfit">
                SCHOOL • TIRUVURU
              </span>
            </div>
          </button>

          {/* Navigation Links - Dark Navy style */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.dropdown)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-sm font-bold text-slate-100 hover:text-[#c28e34] transition-colors duration-200 py-3 flex items-center gap-1 font-outfit uppercase tracking-wider"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeDropdown === link.dropdown ? 'rotate-180 text-[#c28e34]' : ''}`} />
                  )}
                </a>

                {/* Mega Menu / Dropdown container with Framer Motion */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-[#0c1c33] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 ${
                          link.dropdown === 'academics' ? 'w-[850px]' : link.dropdown === 'programs' ? 'w-[800px]' : 'w-[650px]'
                        }`}
                      >
                        <div className="relative">
                          {/* Inner glowing top-border */}
                          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#c28e34] to-transparent"></div>
                          {dropdownData[link.dropdown]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              className="text-white hover:text-[#c28e34] p-2 bg-[#122a45] rounded-lg transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation with Accordions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[100]"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-[110] bg-[#051124] w-full max-w-[360px] sm:max-w-[420px] border-l border-white/10 shadow-2xl flex flex-col h-full text-slate-100"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b border-white/5 bg-[#0c1c33]">
                <div className="flex items-center gap-2.5">
                  <img src={disLogo} alt="Dream India Logo" className="w-8 h-8 object-contain" />
                  <span className="font-outfit font-black text-sm tracking-tight text-white">DREAM INDIA</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 bg-[#122a45] rounded-full text-slate-300 hover:text-white transition-colors focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Body links */}
              <div 
                onClick={(e) => {
                  if (e.target.closest('a')) {
                    setMobileMenuOpen(false);
                  }
                }}
                className="flex-1 flex flex-col py-6 px-6 gap-2 overflow-y-auto text-left"
              >
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        className="text-sm font-bold text-slate-200 hover:text-[#c28e34] py-3 flex-1 font-outfit uppercase tracking-wider text-left"
                      >
                        {link.name}
                      </a>
                      {link.dropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMobileDropdown(link.dropdown);
                          }}
                          className="p-3 text-slate-400 hover:text-[#c28e34] focus:outline-none bg-transparent border-0 cursor-pointer"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileDropdown === link.dropdown ? 'rotate-180 text-[#c28e34]' : ''}`} />
                        </button>
                      )}
                    </div>
                    {link.dropdown && expandedMobileDropdown === link.dropdown && (
                      <div className="pl-4 pb-4 bg-slate-950/40 rounded-xl mt-1 mb-2 border border-white/5 overflow-hidden">
                        {dropdownData[link.dropdown]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA Group */}
              <div className="p-6 border-t border-white/5 bg-[#0c1c33] flex flex-col gap-3 text-left">
                <button 
                  onClick={() => { setMobileMenuOpen(false); openModal('admission'); }}
                  className="w-full py-2.5 rounded-md bg-[#c28e34] hover:bg-[#a67526] text-white font-bold text-center transition-colors text-xs font-outfit uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
