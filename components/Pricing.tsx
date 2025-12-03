import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0F2C59] text-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#84A7D8] text-sm font-bold tracking-widest uppercase mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Simple, Honest Rates</h3>
          <p className="text-gray-300 text-lg">Choose the package that fits your needs. No hidden fees, ever.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-2xl p-8 text-slate-800 ${plan.recommended ? 'transform md:-translate-y-4 shadow-2xl ring-4 ring-[#84A7D8]' : 'shadow-lg'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#84A7D8] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <h4 className="text-xl font-bold text-[#0F2C59] mb-2">{plan.title}</h4>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-2 text-sm">/ visit</span>
              </div>
              
              <hr className="border-gray-100 mb-6" />
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                  plan.recommended 
                    ? 'bg-[#0F2C59] text-white hover:bg-[#1a4b8e]' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Choose {plan.title}
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-400 text-sm">
          * Prices may vary based on property size and condition. Contact us for a precise quote.
        </div>
      </div>
    </section>
  );
};

export default Pricing;