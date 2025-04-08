
import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white font-montserrat">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">OSMO MNC</span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering sustainable clean technology solutions for water purification, solar energy, and fluid management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Product Catalogue</a></li>
              <li><a href="#quotation" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <address className="text-gray-400 not-italic">
              © 2025 OSMO MNC Health Solutions<br />
              Bicholi Hapsi Road, Bengali Square<br />
              Indore<br /><br />
              <a href="mailto:info@osmohealth.in" className="hover:text-white transition-colors">info@osmohealth.in</a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OSMO MNC. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
