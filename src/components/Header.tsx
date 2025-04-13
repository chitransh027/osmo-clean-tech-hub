
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Droplet, Sun, Wind } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-osmo-blue">
              OSMO
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#solutions" className="text-gray-700 hover:text-osmo-blue transition-colors">Solutions</a>
          <a href="#benefits" className="text-gray-700 hover:text-osmo-blue transition-colors">Benefits</a>
          <a href="#about" className="text-gray-700 hover:text-osmo-blue transition-colors">About</a>
          <a href="#testimonials" className="text-gray-700 hover:text-osmo-blue transition-colors">Testimonials</a>
          <a href="#contact">
            <Button className="bg-osmo-blue hover:bg-osmo-teal transition-colors">
              Contact Us
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white pt-4 pb-6 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#solutions" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-osmo-blue hover:bg-osmo-teal transition-colors">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
