
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProductsSection from '../components/ProductsSection';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <ProductsSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
