import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#84A7D8] font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2C59] mt-3 mb-6">Cleaning Solutions</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From cozy condos to sprawling offices, we bring professional grade equipment and eco-friendly products to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-slate-50 rounded-[2rem] p-8 hover:bg-white transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100%] -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 text-[#0F2C59] group-hover:text-blue-600">
                  <service.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0F2C59] transition-colors">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">{service.description}</p>
                
                <div className="flex items-center text-[#0F2C59] font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;