import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Award, Smartphone, FileText, CheckCircle } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, initialType = 'admission' }) => {
  const [inquiryType, setInquiryType] = useState(initialType);
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('Grade I');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInquiryType(initialType);
      setSubmitted(false);
      // Reset inputs
      setParentName('');
      setStudentName('');
      setGrade('Grade I');
      setPhone('');
      setMessage('');
    }
  }, [isOpen, initialType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!parentName || !studentName || !phone) {
      alert("Please fill in all the required fields.");
      return;
    }

    const baseText = `Hello, I would like to make an inquiry for Dream India School Tiruvuru.
    
Inquiry Type: ${inquiryType === 'visit' ? 'Campus Visit Booking' : 'Admission Inquiry'}
Parent Name: ${parentName}
Student Name: ${studentName}
Grade of Interest: ${grade}
Parent Contact: ${phone}
${message ? `Additional Message: ${message}` : ''}`;

    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/918886421212?text=${encodedText}`;
    
    setSubmitted(true);
    
    // Slight delay before redirecting to WhatsApp to let the user see the success animation
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#051124]/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative bg-white border border-[#c28e34]/25 max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Inner top glow border */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c28e34] to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#051124] transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto text-left">
              
              {submitted ? (
                // Success State View
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-xs">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-outfit font-black text-[#051124]">Inquiry Form Prepared</h3>
                  <p className="text-slate-500 text-sm font-semibold max-w-xs leading-relaxed">
                    Opening WhatsApp to complete your application message securely. Thank you!
                  </p>
                </motion.div>
              ) : (
                // Form State View
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-extrabold text-[#c28e34] uppercase tracking-widest block font-outfit mb-1">
                      Dream India School Tiruvuru
                    </span>
                    <h3 className="text-2xl font-outfit font-black text-[#051124] leading-none">
                      {inquiryType === 'visit' ? 'Book a Campus Visit' : 'Start Enrollment Inquiry'}
                    </h3>
                  </div>

                  {/* Toggle Inquiry Type */}
                  <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-50 border border-slate-200/60 p-1.5 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setInquiryType('admission')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        inquiryType === 'admission' 
                          ? 'bg-[#0c1c33] text-white shadow-xs' 
                          : 'text-slate-600 hover:text-[#051124]'
                      }`}
                    >
                      Admissions
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('visit')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        inquiryType === 'visit' 
                          ? 'bg-[#0c1c33] text-white shadow-xs' 
                          : 'text-slate-600 hover:text-[#051124]'
                      }`}
                    >
                      Campus Visit
                    </button>
                  </div>

                  {/* Inquiry Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#c28e34]" /> Parent's Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Srikanth Rao" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#c28e34] focus:ring-1 focus:ring-[#c28e34] outline-none text-sm text-[#051124] font-semibold bg-slate-50 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#c28e34]" /> Student's Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Rohan Rao" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#c28e34] focus:ring-1 focus:ring-[#c28e34] outline-none text-sm text-[#051124] font-semibold bg-slate-50 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Grade & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Grade of Interest */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#c28e34]" /> Grade <span className="text-rose-500">*</span>
                        </label>
                        <select 
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#c28e34] focus:ring-1 focus:ring-[#c28e34] outline-none text-sm text-[#051124] font-semibold bg-slate-50 focus:bg-white transition-all cursor-pointer"
                        >
                          {["Nursery", "LKG", "UKG", "Grade I", "Grade II", "Grade III", "Grade IV", "Grade V", "Grade VI", "Grade VII", "Grade VIII", "Grade IX", "Grade X"].map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Phone Contact */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-[#c28e34]" /> Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#c28e34] focus:ring-1 focus:ring-[#c28e34] outline-none text-sm text-[#051124] font-semibold bg-slate-50 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                      </div>

                    </div>

                    {/* Additional Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-outfit flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#c28e34]" /> Additional Message (Optional)
                      </label>
                      <textarea 
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Any specific questions about transport, curriculum, fees or facilities?" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#c28e34] focus:ring-1 focus:ring-[#c28e34] outline-none text-sm text-[#051124] font-semibold bg-slate-50 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-4 py-3.5 bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-xs font-outfit uppercase tracking-widest rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      Submit & Open WhatsApp <Send className="w-3.5 h-3.5" />
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 font-semibold leading-normal">
                      Submitting will launch WhatsApp with a prefilled message. Our desk coordinates will reply to your request soon.
                    </p>

                  </form>
                </>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
