import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#f8fafc] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Creative Layout */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-60 z-0"></div>
             
             <div className="relative z-10 grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop" 
                 alt="Detail cleaning" 
                 className="w-full h-64 object-cover rounded-3xl shadow-lg transform translate-y-8 hover:translate-y-6 transition-transform duration-500"
               />
               <img 
                 src="https://www.wilburncompany.com/wp-content/uploads/2020/04/iStock-1205555348-1024x683.jpg" 
                 alt="Happy cleaners" 
                 className="w-full h-64 object-cover rounded-3xl shadow-lg transform -translate-y-8 hover:-translate-y-6 transition-transform duration-500"
               />
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="text-[#84A7D8] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2C59] mt-3 mb-10">We Don't Just Clean,<br/>We Care.</h2>
            
            <div className="space-y-10">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-colors duration-300">
                      <feature.icon size={26} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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