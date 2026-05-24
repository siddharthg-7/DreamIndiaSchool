import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap, Download } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/phoneApi';

const AdmissionCTA = () => {
  const whatsappUrl = getWhatsAppUrl({ text: 'Hello, I am interested in admissions at Dream India School Tiruvuru for the academic year 2026-27. Kindly provide more details.' });

  return (
    <section id="admissions" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background with animated lighting */}
      <div className="absolute inset-0 bg-navy z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-glow/20 via-royal-blue/5 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow mb-8">
            <Zap className="w-4 h-4 animate-bounce" />
            <span className="text-sm font-semibold tracking-wide uppercase">Admissions Open 2026-27</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6 leading-tight">
            Admissions Open for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-white font-extrabold">2026–27 Academic Year</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10">
            Secure your child's future at a premium, technology-driven educational institution. Experience the Dream India difference today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Inquiry
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              Request Brochure <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
