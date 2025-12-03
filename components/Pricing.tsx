import React from 'react';
import { PRICING } from '../constants';
import { Check, Sparkles } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0F2C59] relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#84A7D8] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#84A7D8] font-semibold tracking-wider uppercase text-sm">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">Simple, Honest Rates</h2>
          <p className="text-gray-300 text-lg">Choose the perfect package for your home. No hidden fees, just sparkling results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-white text-gray-900 shadow-2xl scale-105 z-10' 
                  : 'bg-[#1a3b6d]/50 text-white border border-blue-400/20 backdrop-blur-sm hover:bg-[#1a3b6d]/70'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide flex items-center gap-1 shadow-lg">
                  <Sparkles size={14} />
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h4 className={`text-xl font-bold mb-2 ${plan.recommended ? 'text-[#0F2C59]' : 'text-white'}`}>{plan.title}</h4>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${plan.recommended ? 'text-gray-900' : 'text-white'}`}>{plan.price}</span>
                  <span className={`ml-2 text-sm ${plan.recommended ? 'text-gray-500' : 'text-gray-300'}`}>/ visit</span>
                </div>
              </div>
              
              <div className={`h-px w-full mb-6 ${plan.recommended ? 'bg-gray-100' : 'bg-blue-400/20'}`}></div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.recommended ? 'bg-green-100 text-green-600' : 'bg-blue-500/20 text-blue-200'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.recommended ? 'text-gray-600' : 'text-gray-300'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-[#0F2C59] text-white hover:bg-[#1a4b8e] shadow-xl hover:shadow-2xl' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {plan.title}
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-blue-200/60 text-sm">
          * Prices may vary based on property square footage and specific requirements.
        </div>
      </div>
    </section>
  );
};

export default Pricing;