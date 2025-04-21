
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat flex justify-center ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div 
        className={`flex justify-between items-center max-w-5xl w-full mx-auto px-6 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/70 backdrop-blur-md'
        } ${isScrolled ? 'w-auto' : 'w-auto hover:bg-white/90'}`}
      >
        {/* Left Sphere - Water (Home) */}
        <Link to="/" className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHomePage ? 'bg-osmo-blue text-white' : 'bg-gray-100 text-osmo-blue'
          }`}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-osmo-blue rounded-b-full"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-slate-100 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-4">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/#products" className={navigationMenuTriggerStyle()}>
                Product Catalog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#quotation" className={navigationMenuTriggerStyle()}>
                Send Enquiry
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#about" className={navigationMenuTriggerStyle()}>
                About Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Right Sphere - Sun (Solar) */}
        <Link to="/solar" className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            !isHomePage ? 'bg-osmo-teal text-white' : 'bg-amber-50 text-amber-500'
          }`}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-amber-400 rounded-full"></div>
              <div className="absolute inset-2 bg-amber-300 rounded-full"></div>
              {Array.from({length: 8}).map((_, index) => (
                <div key={index} 
                  className="absolute w-1 h-3 bg-amber-500"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${index * 45}deg) translate(-50%, -50%)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </Link>
        
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
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bg-white pt-4 pb-6 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/#products" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product Catalog
            </Link>
            <Link 
              to="/#quotation" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Send Enquiry
            </Link>
            <Link 
              to="/#about" 
              className="text-gray-700 hover:text-osmo-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="flex justify-between pt-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-[48%]">Home</Button>
              </Link>
              <Link to="/solar" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-[48%] bg-osmo-teal">Solar Solutions</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
