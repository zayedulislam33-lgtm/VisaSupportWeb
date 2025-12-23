
import React, { useEffect, useState } from 'react';
import { CheckCircle, Users, Star, ArrowRight, Plane, Loader2 } from 'lucide-react';
import { addLead } from '../services/dataService';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', destination: 'Destination', visaType: 'Visa Type' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    try {
      await addLead(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', destination: 'Destination', visaType: 'Visa Type' });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="home" className="relative mt-24 min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden py-10 lg:py-0">
      <div className="absolute inset-0 z-0 will-change-transform" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Airport Travel" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-brand-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center h-full">
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1 pt-6 lg:pt-0">
            <div className="hidden lg:inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-glow animate-float">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-semibold text-brand-50">#1 Visa Consultancy Firm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
              Move to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white filter drop-shadow-lg">Your Dream Country</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed font-light">
              We make immigration simple. Join 10,000+ happy clients who started their new lives in Canada, UK, USA, and Australia.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-2xl font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center group">
                 Start Free Assessment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:ml-auto w-full max-w-md perspective-1000 order-1 lg:order-2 mb-10 lg:mb-0" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 lg:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quick Eligibility</h3>
                    <p className="text-brand-100 text-sm">Instant Expert Callback</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                     <Plane className="text-white w-6 h-6" />
                  </div>
                </div>
                
                {submitted ? (
                  <div className="text-center py-10 bg-white/5 rounded-2xl border border-white/10 animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-accent-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white">Thank You!</h4>
                    <p className="text-brand-100 text-sm mt-2 px-4">Our expert will contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-accent-400 text-xs font-bold underline">Submit Another Inquiry</button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none text-white transition-all focus:bg-black/30" />
                    <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none text-white transition-all focus:bg-black/30" />
                    <div className="grid grid-cols-2 gap-3">
                      <select value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none cursor-pointer">
                        <option className="text-gray-900">Destination</option>
                        <option className="text-gray-900">Canada</option>
                        <option className="text-gray-900">Australia</option>
                        <option className="text-gray-900">UK</option>
                        <option className="text-gray-900">USA</option>
                      </select>
                      <select value={formData.visaType} onChange={(e) => setFormData({...formData, visaType: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none cursor-pointer">
                        <option className="text-gray-900">Visa Type</option>
                        <option className="text-gray-900">Student</option>
                        <option className="text-gray-900">Work</option>
                        <option className="text-gray-900">Tourist</option>
                      </select>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center">
                      {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Check My Eligibility Now"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
