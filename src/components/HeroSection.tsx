
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&h=800",
      alt: "Water purification system"
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=800",
      alt: "Solar energy installation"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&h=800",
      alt: "Clean water technology"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative h-screen">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 font-montserrat">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Pure Water. Smart Energy. Clean Living. Reliable Tech.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted by thousands for water purification, heating, and solar energy systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-osmo-blue hover:bg-osmo-teal text-white px-6 py-6 text-lg"
              onClick={() => document.getElementById('quotation')?.scrollIntoView({behavior: 'smooth'})}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-osmo-blue px-6 py-6 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}
            >
              Explore Products <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
