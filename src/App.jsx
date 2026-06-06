import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedPrograms from './components/FeaturedPrograms';
import CampusTourEventsTestimonials from './components/CampusTourEventsTestimonials';
import About from './components/About';
import Leadership from './components/Leadership';
import Infrastructure from './components/Infrastructure';
import Academics from './components/Academics';
import AnimatedSection from './components/AnimatedSection';
import FeatureStrip from './components/FeatureStrip';
import Gallery from './components/Gallery';
import NoticeBoard from './components/NoticeBoard';
import AdmissionCTA from './components/AdmissionCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import Lenis from 'lenis';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('admission');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95
    });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const openModal = (type = 'admission') => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#051124] font-inter overflow-x-hidden flex flex-col">
      <Navbar openModal={openModal} />
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <AnimatedSection>
          <Hero openModal={openModal} />
        </AnimatedSection>

        {/* Statistics Banner */}
        <AnimatedSection>
          <StatsStrip />
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>

        {/* Featured Programs Section */}
        <AnimatedSection>
          <FeaturedPrograms />
        </AnimatedSection>

        {/* Interactive Tour, Events & Parent Testimonials Grid */}
        <AnimatedSection>
          <CampusTourEventsTestimonials />
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection>
          <About />
        </AnimatedSection>

        {/* Chairman's Leadership Vision */}
        <AnimatedSection>
          <Leadership />
        </AnimatedSection>

        {/* Academics Overview */}
        <AnimatedSection>
          <Academics />
        </AnimatedSection>

        {/* Academic & Facility Showcase */}
        <AnimatedSection>
          <Infrastructure />
        </AnimatedSection>

        {/* Affiliation / Certifications */}
        <AnimatedSection>
          <FeatureStrip />
        </AnimatedSection>

        {/* Campus Gallery - Filterable Bento Grid */}
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>

        {/* Announcements & Admissions Notice Board */}
        <AnimatedSection>
          <NoticeBoard openModal={openModal} />
        </AnimatedSection>

        {/* Admission Call-to-Action Banner */}
        <AnimatedSection>
          <AdmissionCTA />
        </AnimatedSection>

        {/* Frequently Asked Questions */}
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>

        {/* Contact Page Coordinates */}
        <AnimatedSection>
          <Contact openModal={openModal} />
        </AnimatedSection>
      </main>
      <Footer openModal={openModal} />

      {/* Global Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={closeModal}
        initialType={modalType}
      />
    </div>
  );
}

export default App;

