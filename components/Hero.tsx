import React from 'react';
import { ChevronRight, Star, CheckCircle, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Existing large static/pulse blobs */}
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl opacity-60"></div>
        
        {/* New animated moving blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm px-4 py-1.5 rounded-full mb-8 transform hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="flex gap-0.5 text-amber-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </span>
              <span className="text-[#0F2C59] text-xs font-bold uppercase tracking-wide">GTA's Top Rated</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#0F2C59] leading-[1.1] mb-6 tracking-tight">
              A cleaner home, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84A7D8] to-[#0F2C59]">
                a clearer mind.
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Premium residential and commercial cleaning in Toronto. We don't just clean; we curate a pristine environment for you to thrive in.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center bg-[#0F2C59] hover:bg-[#1a4b8e] text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"
              >
                Book Now
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center bg-white border border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-[#0F2C59] font-semibold text-lg px-8 py-4 rounded-full transition-all"
              >
                View Services
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200/60">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0F2C59]">
                   <Shield size={20} />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-bold text-gray-900 text-sm">Insured</span>
                   <span className="text-xs text-gray-500">100% Covered</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0F2C59]">
                   <CheckCircle size={20} />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-bold text-gray-900 text-sm">Vetted</span>
                   <span className="text-xs text-gray-500">Trusted Staff</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Pristine modern living room" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glassmorphism Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
                 <div>
                   <p className="text-[#0F2C59] font-bold text-sm">Satisfaction Guaranteed</p>
                   <p className="text-xs text-gray-500">Or we re-clean for free</p>
                 </div>
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                   <CheckCircle size={20} />
                 </div>
              </div>
            </div>
            
            {/* Decorative Elements behind image */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-[#84A7D8] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;