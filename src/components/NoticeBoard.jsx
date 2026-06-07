import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Download, Calendar, CheckCircle2, BookOpen, Award, Trophy } from 'lucide-react';
import Magnetic from './Magnetic';
import { getWhatsAppUrl } from '../lib/phoneApi';
import { getSanityNotices } from '../lib/sanity';

const iconMap = {
  book: <BookOpen className="w-3.5 h-3.5" />,
  download: <Download className="w-3.5 h-3.5" />,
  calendar: <Calendar className="w-3.5 h-3.5" />,
  award: <Award className="w-3.5 h-3.5" />,
  trophy: <Trophy className="w-3.5 h-3.5" />,
  bell: <Bell className="w-3.5 h-3.5" />
};

const staticNotices = [
  {
    date: "March 20, 2026",
    category: "academics",
    title: "CBSE Curriculum Update - Grade IX & X",
    desc: "Revised guidelines and syllabus textbooks list issued by board for academic session 2026-27.",
    linkText: "View Syllabus",
    icon: <BookOpen className="w-3.5 h-3.5" />
  },
  {
    date: "March 18, 2026",
    category: "sports",
    title: "Annual Sports Day 2026 Registration",
    desc: "Registration for track and field events is now open for students from Class V to X.",
    linkText: "Download Circular",
    icon: <Download className="w-3.5 h-3.5" />
  },
  {
    date: "March 15, 2026",
    category: "academics",
    title: "Parent-Teacher Conference (Primary Wing)",
    desc: "The bi-annual meet to discuss child progress will be held this Saturday from 9:00 AM.",
    linkText: "View Schedule",
    icon: <Calendar className="w-3.5 h-3.5" />
  },
  {
    date: "March 12, 2026",
    category: "exams",
    title: "Class X Board Pre-Board Schedule",
    desc: "Pre-board preparatory examinations schedule and model test paper downloads are now live.",
    linkText: "Download Date Sheet",
    icon: <Download className="w-3.5 h-3.5" />
  },
  {
    date: "March 08, 2026",
    category: "exams",
    title: "Quarterly Evaluation Reports Released",
    desc: "Report cards for nursery and primary wing are active on the digital student profile portal.",
    linkText: "Student Portal",
    icon: <Award className="w-3.5 h-3.5" />
  },
  {
    date: "March 05, 2026",
    category: "sports",
    title: "Inter-School Chess Championship Wins",
    desc: "Congratulations to our junior chess team for securing first place in the NTR district games.",
    linkText: "View Gallery",
    icon: <Trophy className="w-3.5 h-3.5" />
  }
];

const NoticeBoard = ({ openModal }) => {
  const applyLink = getWhatsAppUrl({ text: 'Hello, I am interested in admissions at Dream India School Tiruvuru for the academic year 2026-27.' });
  const [activeTab, setActiveTab] = useState('all');
  const [notices, setNotices] = useState(staticNotices);

  const tabs = [
    { id: 'all', label: 'All Updates' },
    { id: 'academics', label: 'Academics' },
    { id: 'exams', label: 'Examinations' },
    { id: 'sports', label: 'Sports & Events' }
  ];

  useEffect(() => {
    let active = true;
    getSanityNotices().then(data => {
      if (active && data) {
        const mapped = data.map(item => ({
          ...item,
          icon: iconMap[item.iconName?.toLowerCase()] || <Bell className="w-3.5 h-3.5" />
        }));
        setNotices(mapped);
      }
    });
    return () => { active = false; };
  }, []);

  const filteredNotices = notices.filter(
    notice => activeTab === 'all' || notice.category === activeTab
  );

  return (
    <section id="announcements" className="py-20 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden select-none scroll-mt-28 md:scroll-mt-32">
      <div id="portal" className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 scroll-mt-28 md:scroll-mt-32">
        
        {/* Left Column: Announcements list */}
        <div className="w-full lg:w-7/12 flex flex-col justify-start">
          <div className="flex items-center gap-3 mb-8 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#fdfbf7] flex items-center justify-center shrink-0 border border-[#c28e34]/25">
              <Bell className="w-5 h-5 text-[#c28e34]" />
            </div>
            <div>
              <span className="text-[#c28e34] font-bold tracking-wider uppercase text-[10px] block font-outfit">Official Bulletin</span>
              <h2 className="text-2xl md:text-3xl font-outfit font-black text-[#051124]">
                Latest Announcements
              </h2>
            </div>
          </div>

          {/* Category Tabs Widget */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#0c1c33]/5 p-1.5 rounded-2xl w-fit border border-[#c28e34]/15">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold font-outfit uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.id ? 'text-white' : 'text-slate-600 hover:text-[#051124]'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="active-notice-tab"
                    className="absolute inset-0 bg-[#c28e34] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Notices content with transition */}
          <motion.div layout className="space-y-4 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filteredNotices.map((notice) => (
                <motion.div 
                  key={notice.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 md:p-8 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md hover:border-[#c28e34]/30 transition-all duration-300 text-left group"
                >
                  <div className="space-y-2 flex-1">
                    <span className="text-[10px] font-extrabold text-[#c28e34] uppercase tracking-widest block font-outfit">{notice.date}</span>
                    <h4 className="text-base md:text-lg font-outfit font-black text-[#051124] group-hover:text-[#c28e34] transition-colors">{notice.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">{notice.desc}</p>
                  </div>
                  <a 
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-[#334155] hover:border-[#c28e34] hover:text-[#c28e34] shadow-xs shrink-0 flex items-center gap-2 transition-all duration-200 font-outfit"
                  >
                    {notice.linkText} {notice.icon}
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredNotices.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center text-slate-400 font-medium text-sm w-full"
              >
                No updates in this category. Check back soon!
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Right Column: Clean admissions open card */}
        <div className="w-full lg:w-5/12 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl bg-[#051124] p-8 md:p-10 border border-[#c28e34]/25 shadow-lg relative overflow-hidden text-left flex flex-col justify-between"
          >
            {/* Glowing effect inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c28e34]/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div>
              <span className="inline-flex px-3 py-1 rounded-full bg-[#c28e34]/10 border border-[#c28e34]/20 text-[#c28e34] text-[10px] font-bold uppercase tracking-wider font-outfit mb-4">
                Admissions Session 2026 - 2027
              </span>
              
              <h3 className="text-2xl md:text-3xl font-outfit font-black text-white mb-3">
                Admissions Open 2026-27
              </h3>
              
              <p className="text-slate-400 text-xs md:text-sm font-semibold leading-relaxed mb-8">
                Establish your child's academic legacy at Tiruvuru's most trusted CBSE school wing. Secure enrollment seats now.
              </p>

              {/* Bullet checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Classes Nursery to X Enrollment",
                  "Limited Entry Intake Slots Available",
                  "Performance-based Scholastic Merit"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c28e34]/10 border border-[#c28e34]/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c28e34]" />
                    </div>
                    <span className="text-slate-200 text-xs md:text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Magnetic className="w-full">
              <button 
                onClick={() => openModal && openModal('admission')}
                className="w-full py-3.5 rounded-md bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-center text-xs font-outfit uppercase tracking-widest shadow-md transition-all duration-300 cursor-pointer block border-0"
              >
                Start Enrollment
              </button>
            </Magnetic>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default NoticeBoard;
