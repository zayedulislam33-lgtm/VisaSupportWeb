import React from 'react';
import { CheckCircle, Users, Star, ArrowRight, Plane } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Airport Travel" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-800/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent opacity-90"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-glow">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-semibold text-brand-50">#1 Visa Consultancy Firm</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
              Move to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white filter drop-shadow-lg">
                Your Dream Country
              </span>
            </h1>
            
            <p className="text-lg text-gray-200 max-w-xl leading-relaxed font-light">
              We make immigration simple. Join 10,000+ happy clients who started their new lives in Canada, UK, USA, and Australia with GlobalPath.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white rounded-2xl font-bold shadow-neon transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center border border-white/10">
                Start Free Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold transition-all hover:shadow-lg">
                Explore Services
              </button>
            </div>

            {/* Trust Badges 3D */}
            <div className="pt-8 border-t border-white/10 flex gap-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-2xl">98%</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wide">Success Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold text-2xl">10k+</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wide">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: 3D Glass Form */}
          <div className="lg:ml-auto w-full max-w-md perspective-1000">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group transform transition-transform hover:rotate-1 duration-500">
              {/* Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quick Eligibility</h3>
                    <p className="text-brand-100 text-sm">Instant Expert Callback</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                     <Plane className="text-white w-6 h-6" />
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 outline-none text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:bg-black/30" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 outline-none text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:bg-black/30" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 outline-none text-white/90 backdrop-blur-sm appearance-none">
                      <option className="text-gray-900">Destination</option>
                      <option className="text-gray-900">Canada</option>
                      <option className="text-gray-900">Australia</option>
                      <option className="text-gray-900">UK</option>
                    </select>
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 outline-none text-white/90 backdrop-blur-sm appearance-none">
                      <option className="text-gray-900">Visa Type</option>
                      <option className="text-gray-900">Student</option>
                      <option className="text-gray-900">Work</option>
                      <option className="text-gray-900">Tourist</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4 transform hover:-translate-y-1 hover:shadow-brand-500/50">
                    Check My Eligibility Now
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;