import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedPrograms from './components/FeaturedPrograms';
import CampusTourEventsTestimonials from './components/CampusTourEventsTestimonials';
import About from './components/About';
import Leadership from './components/Leadership';
import Infrastructure from './components/Infrastructure';
import FeatureStrip from './components/FeatureStrip';
import Gallery from './components/Gallery';
import NoticeBoard from './components/NoticeBoard';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('admission');

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
        <Hero openModal={openModal} />

        {/* Statistics Banner */}
        <StatsStrip />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Programs Section */}
        <FeaturedPrograms />

        {/* Interactive Tour, Events & Parent Testimonials Grid */}
        <CampusTourEventsTestimonials />

        {/* About Section */}
        <About />

        {/* Chairman's Leadership Vision */}
        <Leadership />

        {/* Academic & Facility Showcase */}
        <Infrastructure />

        {/* Affiliation / Certifications */}
        <FeatureStrip />

        {/* Campus Gallery - Filterable Bento Grid */}
        <Gallery />

        {/* Announcements & Admissions Notice Board */}
        <NoticeBoard openModal={openModal} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Page Coordinates */}
        <Contact openModal={openModal} />
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

