import React from 'react';
import { Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import disLogo from '../assets/dis-logo.png';

const Footer = () => {
  const whatsappUrl = "https://wa.me/918886421212?text=Hello%2C%20I%20am%20interested%20in%20admissions%20at%20Dream%20India%20School%20Tiruvuru%20for%20the%20academic%20year%202026-27.";

  return (
    <footer className="bg-[#051124] text-slate-300 border-t border-[#c28e34]/20 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle radial shine */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(194,142,52,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10 text-left">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src={disLogo} alt="Dream India School Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-outfit font-black text-lg leading-none text-white tracking-tight">
                DREAM INDIA
              </span>
              <span className="text-[10px] text-[#c28e34] tracking-widest uppercase font-bold mt-0.5">
                SCHOOL
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs md:text-sm font-semibold leading-relaxed max-w-xs font-outfit">
            Nurturing secondary and primary excellence through value-based CBSE educational framework and advanced campus facilities.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-outfit font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#c28e34] pl-2.5">Quick Links</h4>
          <ul className="space-y-4 text-xs md:text-sm font-semibold">
            {[
              { name: 'About Our School', href: '#about' },
              { name: 'Academic Infrastructure', href: '#infrastructure' },
              { name: 'CBSE Affiliation Badge', href: '#infrastructure' },
              { name: 'Locate Campus Map', href: '#contact' }
            ].map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="text-white font-outfit font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#c28e34] pl-2.5">Contact Info</h4>
          <ul className="space-y-4 text-xs md:text-sm font-semibold text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#c28e34] shrink-0 mt-0.5" />
              <span>Nuvvula Thota, Tiruvuru, NTR Dist, A.P. - 521235</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#c28e34] shrink-0" />
              <a href="tel:+918886421212" className="hover:text-white transition-colors">+91 88864 21212</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#c28e34] shrink-0" />
              <a href="mailto:admissions@dreamindia.com" className="hover:text-white transition-colors">admissions@dreamindia.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h4 className="text-white font-outfit font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-[#c28e34] pl-2.5">Social Networks</h4>
          <div className="flex items-center gap-4">
            <a 
              href="https://dreamindia.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#0c1c33] border border-[#c28e34]/20 flex items-center justify-center text-slate-300 hover:text-[#c28e34] hover:border-[#c28e34] transition-all duration-200"
              aria-label="Official Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#0c1c33] border border-[#c28e34]/20 flex items-center justify-center text-slate-300 hover:text-[#c28e34] hover:border-[#c28e34] transition-all duration-200"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#c28e34]/20 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-xs text-slate-400 font-semibold font-outfit">
        <p>
          &copy; {new Date().getFullYear()} Dream India School Tiruvuru. All rights reserved. Under Elite CBSE Management.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
