import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedPrograms from './components/FeaturedPrograms';
import About from './components/About';
import Infrastructure from './components/Infrastructure';
import FeatureStrip from './components/FeatureStrip';
import NoticeBoard from './components/NoticeBoard';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#051124] font-inter overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <Hero />
        
        {/* Statistics Banner */}
        <StatsStrip />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Featured Programs Section */}
        <FeaturedPrograms />
        
        {/* About Section */}
        <About />
        
        {/* Academic & Facility Showcase */}
        <Infrastructure />
        
        {/* Affiliation / Certifications */}
        <FeatureStrip />
        
        {/* Announcements & Admissions Notice Board */}
        <NoticeBoard />
        
        {/* Parent Testimonials */}
        <Testimonials />
        
        {/* Contact Page Coordinates */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
