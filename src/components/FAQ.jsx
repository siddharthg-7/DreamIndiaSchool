import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the curriculum followed at Dream India School?",
      a: "We strictly follow the national CBSE curriculum, seamlessly integrated with modern, future-ready coding paradigms, AI & robotics lab sessions, and analytical conceptual learning models."
    },
    {
      q: "What are the key safety and security measures on campus?",
      a: "Our campus is equipped with 24/7 CCTV smart surveillance coverage, trained security personnel, strict student sign-out policies, sanitization checks, and secure visitor entrance protocols."
    },
    {
      q: "Does the school provide sports mentoring and physical training?",
      a: "Yes! We emphasize holistic development, offering professional outdoor coaching for sports like track & field events, football, basketball, and cricket on our expansive play fields."
    },
    {
      q: "How are smart technologies integrated in classrooms?",
      a: "Every classroom features smart digital audio-visual interactive boards and air-conditioned layouts, ensuring mentors can present visual lessons and kids can grasp complex scientific subjects with ease."
    },
    {
      q: "What is the process and eligibility for admissions?",
      a: "Admissions are open for Classes Nursery to X. Parents can submit an online inquiry, take a campus visit, and secure enrollment based on seat availability and basic cognitive readiness indicators."
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden select-none border-b border-slate-100 scroll-mt-28 md:scroll-mt-32">
      {/* Decorative left blob */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#c28e34] tracking-wider uppercase mb-3 block font-outfit">
            Parent Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-semibold max-w-lg mx-auto leading-relaxed">
            Find immediate answers regarding school timings, admissions criteria, CBSE syllabus structure, and campus guidelines.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? 'border-[#c28e34] bg-[#fdfbf7] shadow-sm' 
                    : 'border-[#c28e34]/15 bg-white hover:border-[#c28e34]/35 hover:shadow-xs'
                }`}
                onClick={() => handleToggle(idx)}
              >
                {/* Accordion Trigger */}
                <div className="p-6 md:p-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-[#c28e34] text-white' : 'bg-[#0c1c33] text-[#c28e34]'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className={`font-outfit font-black text-sm md:text-base transition-colors duration-300 ${
                      isOpen ? 'text-[#051124]' : 'text-[#051124] hover:text-[#c28e34]'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#c28e34] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-[#c28e34]/10">
                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold mt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
