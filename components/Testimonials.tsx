import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0F2C59] text-sm font-bold tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className="flex-grow mb-6">
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </blockquote>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-[#0F2C59] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={12} />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
