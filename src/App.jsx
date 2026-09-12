import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import About from './components/About';
import TechStack from './components/TechStack';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div id="top" className="min-h-screen min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#0B0B0D] font-body text-[#F2F0EA] antialiased">
      {/* Left Scroll Percentage Bar */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <SelectedWork />
        <Services />
        <About />
        <TechStack />
        <Process />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
