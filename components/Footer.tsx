import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1f40] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-[#0F2C59] font-bold">G</div>
              <span className="font-serif text-xl font-bold">GTA Clean</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional cleaning services dedicated to making the Greater Toronto Area shine, one home at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Move In/Out</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4">Business Hours</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} GTA Pristine Clean. All rights reserved.</p>
          <p>Designed for excellence in the GTA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
