import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1f40] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 bg-white rounded-xl p-3 inline-block">
               <img 
                 src="./logo.png" 
              alt="CMG Cleaning Solutions" 
              className="h-16 w-15 object-contain"
               />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional cleaning services dedicated to making your space shine.
            </p>
            <div className="flex flex-col gap-2 mb-4 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>172 Bay St S, Hamilton, ON L8P 3H7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@cmgcleaningsolution.ca</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(514) 916-9021</span>
                </div>
            </div>
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
          <p>&copy; {new Date().getFullYear()} CMG Cleaning Solutions. All rights reserved.</p>
          <p>Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;