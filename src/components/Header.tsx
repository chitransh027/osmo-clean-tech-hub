
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleSphereClick = (path: string) => {
    if (location.pathname === path) return;
    
    setIsAnimating(true);
    
    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsAnimating(false);
      }, 800); // Animation completion time
    }, 500); // Wait for half of the animation before navigating
  };

  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSphereClick(path);
    }
  };

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
        <div 
          onClick={() => handleSphereClick('/')}
          onKeyDown={(e) => handleKeyDown(e, '/')}
          tabIndex={0}
          role="button"
          aria-label="Home View"
          className={cn(
            "flex-shrink-0 cursor-pointer transition-all duration-500 transform-gpu",
            isAnimating && "animate-sphere-toggle",
            isHomePage ? "sphere-active" : ""
          )}
        >
          <div className={`
            water-sphere 
            w-12 h-12 
            rounded-full 
            flex items-center justify-center 
            transition-all duration-300 
            transform-gpu
            hover:translate-z-4
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-osmo-blue
            ${isHomePage ? 'bg-osmo-blue text-white' : 'bg-gray-100 text-osmo-blue'}
          `}>
            <div className="water-sphere-inner relative w-10 h-10 rounded-full overflow-hidden transform-style-3d">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="water-fill absolute bottom-0 left-0 right-0 h-1/2 bg-osmo-blue rounded-b-full"></div>
              <div className="water-line absolute top-1/2 left-1/2 w-8 h-[1px] bg-slate-100 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            </div>
          </div>
        </div>
        
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
        <div 
          onClick={() => handleSphereClick('/solar')}
          onKeyDown={(e) => handleKeyDown(e, '/solar')}
          tabIndex={0}
          role="button"
          aria-label="Solar View"
          className={cn(
            "flex-shrink-0 cursor-pointer transition-all duration-500 transform-gpu",
            isAnimating && "animate-sphere-toggle",
            !isHomePage ? "sphere-active" : ""
          )}
        >
          <div className={`
            sun-sphere 
            w-12 h-12 
            rounded-full 
            flex items-center justify-center 
            transition-all duration-300
            transform-gpu
            hover:translate-z-4
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-osmo-teal
            ${!isHomePage ? 'bg-osmo-teal text-white' : 'bg-amber-50 text-amber-500'}
          `}>
            <div className="sun-sphere-inner relative w-10 h-10 rounded-full overflow-hidden animate-spin-slow transform-style-3d">
              <div className="absolute inset-0 bg-amber-400 rounded-full sun-gradient"></div>
              <div className="absolute inset-2 bg-amber-300 rounded-full sun-core"></div>
              {Array.from({length: 8}).map((_, index) => (
                <div key={index} 
                  className="absolute w-1 h-3 bg-amber-500 sun-ray"
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
        </div>
        
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
              <Button 
                variant="outline" 
                className={`w-[48%] ${isHomePage ? 'bg-osmo-blue text-white border-osmo-blue' : ''}`}
                onClick={() => handleSphereClick('/')}
              >
                Home
              </Button>
              <Button 
                className={`w-[48%] ${!isHomePage ? 'bg-osmo-teal' : 'bg-amber-400 text-amber-900'}`}
                onClick={() => handleSphereClick('/solar')}
              >
                Solar Solutions
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
