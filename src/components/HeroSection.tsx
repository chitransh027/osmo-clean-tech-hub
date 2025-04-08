
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Sustainable <span className="text-osmo-blue">Water</span> & <span className="text-osmo-green">Energy</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              OSMO delivers high-quality water purification systems, solar energy solutions, and fluid management technologies tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-osmo-blue hover:bg-osmo-teal transition-colors text-white px-6 py-6"
                size="lg"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore Solutions
              </Button>
              <Button 
                variant="outline" 
                className="border-osmo-blue text-osmo-blue hover:bg-osmo-blue hover:text-white"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-osmo-teal/20 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-osmo-green/10 rounded-full"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=600" 
                  alt="Clean water and renewable energy" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
