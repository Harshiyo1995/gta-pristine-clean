import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={scrollToTop}>
            <img 
              src="./logo.png" 
              alt="CMG Cleaning Solutions" 
              className="h-16 w-15 object-contain"
            />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0F2C59] transition-colors group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#84A7D8] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
            <div className="pl-4">
              <a 
                href="#contact"
                className="bg-[#0F2C59] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a4b8e] hover:shadow-lg hover:shadow-blue-900/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone size={16} />
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#0F2C59] focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#0F2C59] hover:bg-blue-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-6 bg-gradient-to-r from-[#0F2C59] to-[#1a4b8e] text-white px-5 py-3 rounded-xl font-bold shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;