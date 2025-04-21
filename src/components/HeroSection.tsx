
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 md:py-32 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-osmo-blue/5 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-osmo-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-12">
            <div className="transform-style-3d hover:translate-z-4 transition duration-500">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-800 block transform hover:translate-z-4 transition duration-300">
                  Sustainable
                </span>
                <span className="text-osmo-blue block transform hover:translate-z-4 transition duration-300">
                  Water
                </span>
                <span className="text-osmo-green block transform hover:translate-z-4 transition duration-300">
                  Energy
                </span>
                <span className="text-gray-800 block transform hover:translate-z-4 transition duration-300">
                  Solutions
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl mb-4 max-w-lg transform hover:translate-z-4 transition duration-300">
                Pure Water. Smart Energy. Clean Living. Reliable Tech.
              </p>
              
              <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg transform hover:translate-z-4 transition duration-300">
                OSMO delivers high-quality water purification systems, 
                solar energy solutions, and fluid management 
                technologies tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-osmo-blue hover:bg-osmo-blue/90 text-white px-8 py-6 h-auto text-lg transform hover:translate-z-4 transition duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Explore Solutions
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-osmo-blue text-osmo-blue hover:bg-osmo-blue/10 px-8 py-6 h-auto text-lg transform hover:translate-z-4 transition duration-300 shadow-md hover:shadow-lg"
                  onClick={() => document.getElementById('quotation')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Contact Us <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Image with 3D Effects */}
          <div className="w-full md:w-1/2 relative transform-style-3d">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-100/30 rounded-full transform rotate-12 hover:rotate-45 transition-transform duration-500"></div>
            <div className="relative z-10 transform hover:translate-z-8 transition duration-500">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600" 
                  alt="Sustainable water solutions" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-100/50 rounded-full transform -rotate-12 hover:rotate-45 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
