import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import StatsStrip from './components/StatsStrip';
import FeatureStrip from './components/FeatureStrip';
import Infrastructure from './components/Infrastructure';
import NoticeBoard from './components/NoticeBoard';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-inter selection:bg-blue-600 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <WhyChooseUs />
        <About />
        <StatsStrip />
        <FeatureStrip />
        <Infrastructure />
        <NoticeBoard />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
