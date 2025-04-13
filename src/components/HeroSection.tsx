
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">Sustainable </span>
              <span className="text-osmo-blue">Water </span>
              <span className="text-gray-800">&</span><br />
              <span className="text-osmo-green">Energy </span>
              <span className="text-gray-800">Solutions</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg">
              OSMO delivers high-quality water purification systems, 
              solar energy solutions, and fluid management 
              technologies tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-osmo-blue hover:bg-osmo-blue/90 text-white px-8 py-6 h-auto text-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}
              >
                Explore Solutions
              </Button>
              
              <Button 
                variant="outline" 
                className="border-osmo-blue text-osmo-blue hover:bg-osmo-blue/10 px-8 py-6 h-auto text-lg"
                onClick={() => document.getElementById('quotation')?.scrollIntoView({behavior: 'smooth'})}
              >
                Contact Us <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-teal-100/30 rounded-full absolute -top-20 -right-20 w-72 h-72 z-0"></div>
            <div className="relative z-10">
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600" 
                  alt="Sustainable water solutions" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-teal-100/50 rounded-full absolute -bottom-12 -left-12 w-48 h-48 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
