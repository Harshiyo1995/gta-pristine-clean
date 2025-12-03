import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormState({ name: '', email: '', phone: '', service: 'residential', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative scroll-mt-24">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F2C59] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          
          {/* Decorative background for the whole card */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          {/* Left Info Panel */}
          <div className="w-full lg:w-2/5 p-10 lg:p-16 text-white relative z-10 bg-[#0b2246]">
            <span className="text-[#84A7D8] font-bold tracking-widest uppercase text-xs mb-2 block">Contact Us</span>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Get in Touch</h3>
            <p className="text-blue-100 mb-12 leading-relaxed">
              Ready to experience a new level of clean? Fill out the form or give us a call. We're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A7D8] group-hover:text-[#0F2C59] transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-blue-100">(514) 916-9021</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A7D8] group-hover:text-[#0F2C59] transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-blue-100">contact@cmgcleaningsolution.ca</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A7D8] group-hover:text-[#0F2C59] transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-blue-100">172 Bay St S<br/>Hamilton, ON L8P 3H7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#84A7D8] group-hover:text-[#0F2C59] transition-all duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hours</h4>
                  <p className="text-blue-100">Mon-Fri: 8am - 8pm</p>
                  <p className="text-blue-200/60 text-sm">Sat: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="w-full lg:w-3/5 p-10 lg:p-16 bg-white">
            <h4 className="text-2xl font-bold text-[#0F2C59] mb-8">Free Quote Request</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent outline-none transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Type</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move In/Out</option>
                    <option value="airbnb">Airbnb / Short Term</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message / Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your home (sq ft, bedrooms, etc.)"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F2C59] text-white font-bold py-4 rounded-xl hover:bg-[#1a4b8e] hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Request
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;