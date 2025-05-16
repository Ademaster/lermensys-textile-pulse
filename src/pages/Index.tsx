
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import Modules from '@/components/Modules';
import Testimonials from '@/components/Testimonials';
import Integrations from '@/components/Integrations';
import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Lermensys - Sistema de Gestão Especializado para Indústria Têxtil";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Modules />
        <Testimonials />
        <Integrations />
        <AboutUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
