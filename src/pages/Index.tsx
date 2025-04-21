
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
  // Set the color theme for the Home page
  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary', '222.2 47.4% 11.2%');
    document.documentElement.style.setProperty('--osmo-main', '#0F4C81');
    document.body.classList.add('home-theme');
    document.body.classList.remove('solar-theme');

    return () => {
      document.body.classList.remove('home-theme');
    };
  }, []);

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
