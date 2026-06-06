import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const premiumEase = CustomEase.create('premiumEase', 'M0,0 C0.22,1 0.36,1 1,1');

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
    title: 'Advanced Robotics & AI Hub',
    category: 'labs',
    image: '/images/dis-banner-5-3840.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-7 lg:row-span-2 min-h-[520px]'
  },
  {
    id: 2,
    title: 'Outcome-based CBSE Syllabus Curriculum',
    category: 'classrooms',
    image: '/images/dis-banner-1-1920.jpg',
    span: 'col-span-12 md:col-span-3 lg:col-span-5 min-h-[360px]'
  },
  {
    id: 3,
    title: 'Vigilant Outdoor Track & Field Training',
    category: 'sports',
    image: '/images/dis-banner-2.png',
    span: 'col-span-12 md:col-span-3 lg:col-span-4 min-h-[320px]'
  },
  {
    id: 4,
    title: 'Air-conditioned Smart Classrooms',
    category: 'classrooms',
    image: '/images/dis-banner-3-1920.jpg',
    span: 'col-span-12 md:col-span-3 lg:col-span-4 min-h-[420px]'
  },
  {
    id: 5,
    title: 'Dedicated Creative Workspaces',
    category: 'campus',
    image: '/images/dis-banner-4.png',
    span: 'col-span-12 md:col-span-3 lg:col-span-4 min-h-[420px]'
  },
  {
    id: 6,
    title: 'Physics & Chemistry STEM Labs',
    category: 'labs',
    image: '/images/dis-banner-3-1280.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-8 min-h-[380px]'
  },
  {
    id: 7,
    title: 'Interactive Student Exhibitions',
    category: 'labs',
    image: '/images/dis-banner-5-1920.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[380px]'
  }
];

const GalleryCard = ({ item, onSelect, onMeasure }) => {
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      onMeasure?.(cardRef.current, item.id);
    }
  }, [item.id, onMeasure]);

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;
    event.currentTarget.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
  };

  const resetMove = (event) => {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      ref={cardRef}
      data-gallery-card
      initial={{ opacity: 1, y: 0, scale: 1, filter: 'none', clipPath: 'inset(0 0 0 0)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'none', clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="gallery-card h-full"
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      onClick={() => onSelect(item)}
      style={{ animationDelay: `${item.id * 1.25}s` }}
    >
      <div className="gallery-card-inner">
        <div className={`gallery-media ${loaded ? 'is-loaded' : ''}`}>
          <div className="gallery-skeleton" aria-hidden="true" />
          <img
            src={item.image}
            alt={item.title}
            loading="eager"
            fetchPriority={item.id === 1 ? 'high' : 'auto'}
            onLoad={() => setLoaded(true)}
            className="gallery-image"
          />
          <div className="gallery-grain" aria-hidden="true" />
          <div className="gallery-overlay">
            <div className="gallery-overlay-top">
              <span className="gallery-category">{item.category}</span>
              <div className="gallery-icon-shell">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
            <h4 className="gallery-title">{item.title}</h4>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => filter === 'all' || item.category === filter),
    [filter]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerParts = headerRef.current?.querySelectorAll('[data-header-part]');
      if (headerParts?.length) {
        gsap.fromTo(
          headerParts,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1, ease: premiumEase, stagger: 0.08 }
        );
      }

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, ease: premiumEase, stagger: 0.05, delay: 0.15 }
        );
      }

      const cards = gsap.utils.toArray('[data-gallery-card]');
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index === 0 ? -22 : index % 3 === 0 ? -14 : -8,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="gallery" ref={rootRef} className="gallery-root scroll-mt-28 md:scroll-mt-32">
      <div className="gallery-noise" aria-hidden="true" />
      <div className="gallery-glow gallery-glow-left" aria-hidden="true" />
      <div className="gallery-glow gallery-glow-right" aria-hidden="true" />

      <div className="gallery-shell max-w-7xl mx-auto w-full relative z-10">
        <header ref={headerRef} className="gallery-header text-center">
          <span data-header-part className="gallery-kicker">Visual Tour</span>
          <h2 data-header-part className="gallery-heading">Our Campus Gallery</h2>
          <p data-header-part className="gallery-copy">
            A cinematic visual story of premium classrooms, advanced labs, and vibrant student life.
          </p>
        </header>

        <div ref={tabsRef} className="gallery-tabs" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`gallery-tab ${filter === cat.id ? 'is-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div ref={gridRef} layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
                <motion.div
                key={item.id}
                layout
                className={item.span}
                  initial={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <GalleryCard item={item} onSelect={setSelectedItem} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-lightbox"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="gallery-lightbox-card"
                onClick={(e) => e.stopPropagation()}
              >
                <button type="button" className="gallery-close" onClick={() => setSelectedItem(null)}>
                  <X className="w-5 h-5" />
                </button>

                <div className="gallery-lightbox-media">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                </div>

                <div className="gallery-lightbox-copy">
                  <span className="gallery-lightbox-tag">{selectedItem.category}</span>
                  <h3>{selectedItem.title}</h3>
                  <p>
                    Dream India School’s campus photography is presented as a premium editorial experience with crisp framing,
                    balanced composition, and a deliberately restrained visual language.
                  </p>
                  <button type="button" className="gallery-close-cta" onClick={() => setSelectedItem(null)}>
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
