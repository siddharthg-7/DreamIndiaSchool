import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { getTelUrl } from '../lib/phoneApi';

const Contact = () => {
  const contactData = [
    {
      title: "Our Campus Address",
      desc: "Nuvvula Thota, Near Abhaya Lakshmi Temple, Tiruvuru, NTR Dist., A.P. - 521235",
      icon: <MapPin className="w-5 h-5 text-[#c28e34]" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/25"
    },
    {
      title: "Call Administration",
      desc: "+91 88864 21212 / +91 88865 21212",
      icon: <Phone className="w-5 h-5 text-[#c28e34]" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/25",
      href: getTelUrl()
    },
    {
      title: "Support E-Mail",
      desc: "admissions@dreamindia.com",
      icon: <Mail className="w-5 h-5 text-[#c28e34]" />,
      bg: "bg-[#fdfbf7]",
      border: "border-[#c28e34]/25",
      href: "mailto:admissions@dreamindia.com"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100 select-none scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Contact Details */}
        <div className="flex flex-col justify-center text-left">
          <span className="text-[#c28e34] font-bold tracking-wider uppercase text-xs mb-3 block font-outfit">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mb-4 leading-tight">
            Connect With Our Campus
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mt-4 mb-8"></div>
          <p className="text-slate-500 text-xs md:text-sm lg:text-base font-semibold mb-10 max-w-lg leading-relaxed">
            Our school administration is happy to assist you with any questions regarding admissions schedules, CBSE curricula, or campus tours.
          </p>

          <div className="space-y-6">
            {contactData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-outfit font-black text-[#051124] text-sm md:text-base mb-0.5">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a href={item.href} className="text-slate-500 text-xs md:text-sm font-semibold hover:text-[#c28e34] transition-colors">
                      {item.desc}
                    </a>
                  ) : (
                    <p className="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Google Maps Live Embed */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-full min-h-[350px] lg:min-h-[450px] aspect-[4/3] rounded-2xl border border-[#c28e34]/25 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 relative bg-slate-50 flex"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.2227181048877!2d80.61067661166721!3d17.125461083796593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34337dd9c725f7%3A0xcfc6ec64ae19c603!2sDream%20India%20School%20Tiruvuru!5e0!3m2!1sen!2sin!4v1716100000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '350px', height: '100%', width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dream India School Tiruvuru Campus Map"
            className="w-full h-full"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
