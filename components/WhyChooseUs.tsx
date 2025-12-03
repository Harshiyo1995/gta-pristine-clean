import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#84A7D8]/20 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0F2C59]/10 rounded-full blur-3xl"></div>
             
             <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
               <img 
                 src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop" 
                 alt="Detailed cleaning service" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                 <p className="text-white font-medium italic">"The team was incredibly professional and thorough. My house has never looked this good!"</p>
                 <p className="text-white/80 text-sm mt-2">- Emily R., Toronto</p>
               </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#0F2C59] text-sm font-bold tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">We Don't Just Clean, We Care</h3>
            
            <div className="space-y-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#84A7D8]/20 flex items-center justify-center text-[#0F2C59]">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;