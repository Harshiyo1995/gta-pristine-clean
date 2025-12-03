import React from 'react';
import { ChevronRight, Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-[#f0f7ff] via-white to-[#f0f7ff] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full mb-8">
              <span className="flex gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </span>
              <span className="text-[#0F2C59] text-sm font-bold">#1 Rated Cleaning in GTA</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0F2C59] leading-tight mb-6">
              Experience the Joy of a <span className="text-[#84A7D8]">Pristine Home</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Professional residential and commercial cleaning across the GTA. We handle the mess so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center bg-[#0F2C59] hover:bg-[#1a4b8e] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
              >
                Get Your Free Quote
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center bg-white border border-gray-200 hover:bg-gray-50 text-[#0F2C59] font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                View Services
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Vetted Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#84A7D8]/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional cleaner in a kitchen" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4 max-w-xs">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                   <Star fill="currentColor" size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[#0F2C59]">5-Star Service</p>
                   <p className="text-xs text-gray-500">Based on 500+ Reviews</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;