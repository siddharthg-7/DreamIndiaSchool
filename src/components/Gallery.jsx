import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'classrooms', label: 'Smart Classrooms' },
    { id: 'labs', label: 'STEM & Tech Labs' },
    { id: 'sports', label: 'Sports Excellence' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Advanced Robotics & AI Hub",
      category: "labs",
      image: "/images/dis-banner-5.png",
      span: "col-span-12 md:col-span-8 lg:col-span-8 aspect-[16/9]"
    },
    {
      id: 2,
      title: "Outcome-based CBSE Syllabus Curriculum",
      category: "classrooms",
      image: "/images/dis-banner-1.png",
      span: "col-span-12 md:col-span-4 lg:col-span-4 aspect-[4/3]"
    },
    {
      id: 3,
      title: "Vigilant Outdoor Track & Field Training",
      category: "sports",
      image: "/images/dis-banner-2.png",
      span: "col-span-12 md:col-span-4 lg:col-span-4 aspect-[4/3]"
    },
    {
      id: 4,
      title: "Air-conditioned Smart Classrooms",
      category: "classrooms",
      image: "/images/dis-banner-3.png",
      span: "col-span-12 md:col-span-4 lg:col-span-4 aspect-[4/3]"
    },
    {
      id: 5,
      title: "Dedicated Creative Workspaces",
      category: "campus",
      image: "/images/dis-banner-4.png",
      span: "col-span-12 md:col-span-4 lg:col-span-4 aspect-[4/3]"
    },
    {
      id: 6,
      title: "Physics & Chemistry STEM Labs",
      category: "labs",
      image: "/images/dis-banner-3.png",
      span: "col-span-12 md:col-span-4 lg:col-span-4 aspect-[4/3]"
    },
    {
      id: 7,
      title: "Interactive Student Exhibitions",
      category: "labs",
      image: "/images/dis-banner-5.png",
      span: "col-span-12 md:col-span-8 lg:col-span-8 aspect-[16/9]"
    }
  ];

  const filteredItems = galleryItems.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <section id="gallery" className="py-20 md:py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100 relative overflow-hidden select-none scroll-mt-28 md:scroll-mt-32">
      {/* Decorative gradient blob */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#c28e34] tracking-wider uppercase mb-3 block font-outfit">
            Visual Tour
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mb-4">
            Our Campus Gallery
          </h2>
          <div className="w-14 h-1 bg-[#c28e34] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Take a visual walk through our premium facilities, creative learning spaces, and energetic play fields.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-[#0c1c33]/5 p-1.5 rounded-2xl w-fit mx-auto border border-[#c28e34]/15">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative px-4 py-2.5 rounded-xl text-xs font-bold font-outfit uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                filter === cat.id ? 'text-white' : 'text-slate-600 hover:text-[#051124]'
              }`}
            >
              {filter === cat.id && (
                <motion.span
                  layoutId="active-gallery-tab"
                  className="absolute inset-0 bg-[#c28e34] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden border border-[#c28e34]/15 bg-white shadow-xs group cursor-pointer hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ${item.span}`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image and Zoom Overlay */}
                <div className="w-full h-full relative overflow-hidden flex items-stretch">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-[#051124]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left z-20">
                    <div className="w-10 h-10 rounded-full bg-[#c28e34] text-white flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-extrabold text-[#c28e34] uppercase tracking-widest block font-outfit mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-white font-outfit font-black text-sm md:text-base leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  {/* Category Badge (shown on non-hover mobile) */}
                  <div className="absolute top-4 left-4 bg-[#051124]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-extrabold tracking-widest text-[#c28e34] uppercase border border-[#c28e34]/30 z-10 group-hover:opacity-0 transition-opacity">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#051124]/95 backdrop-blur-md flex flex-col justify-center items-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#c28e34] text-slate-300 hover:text-white transition-all cursor-pointer z-50 focus:outline-none"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative bg-[#0c1c33] border border-[#c28e34]/25 max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo View */}
                <div className="w-full md:w-8/12 bg-black flex items-center justify-center relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[55vh]">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover md:object-contain max-h-[50vh] md:max-h-full"
                  />
                </div>

                {/* Details side */}
                <div className="w-full md:w-4/12 p-6 md:p-8 flex flex-col justify-between items-start text-left bg-[#0c1c33]">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#c28e34]/10 border border-[#c28e34]/20 text-[#c28e34] text-[9px] font-extrabold uppercase tracking-wider font-outfit mb-4 inline-block">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-outfit font-black text-white leading-tight mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-semibold leading-relaxed">
                      This represents Dream India School's ongoing dedication to providing modern, air-conditioned infrastructure, safety monitoring, and outcome-oriented environments.
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full mt-8 py-3 bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-xs font-outfit uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
