import React from 'react';
import { SERVICE_AREAS } from '../constants';
import { MapPin } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#0F2C59] text-sm font-bold tracking-widest uppercase mb-3">Where We Work</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Serving the Entire GTA</h3>
            <p className="text-gray-600 mb-8">
              We are proud to bring professional cleaning services to homes and businesses across the Greater Toronto Area. From the lakeshore to the suburbs, our team is in your neighborhood.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-[#84A7D8]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
            {/* Real Toronto Skyline */}
            <img 
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop" 
              alt="Toronto skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0F2C59]/40 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-md px-8 py-6 rounded-2xl shadow-xl text-center">
                <p className="text-[#0F2C59] font-bold text-xl">Greater Toronto Area</p>
                <p className="text-gray-500 text-sm">Fully Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;