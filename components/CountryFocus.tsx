import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const countries = [
  { name: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80", features: ["Express Entry", "PNP Programs", "Study Permit"] },
  { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-01e6f283a251?auto=format&fit=crop&w=600&q=80", features: ["Subclass 189/190", "Work Visa", "Student Visa"] },
  { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80", features: ["Tier 2 Work", "Student Route", "Innovator Visa"] },
  { name: "USA", image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=600&q=80", features: ["H1-B Visa", "Green Card", "Study F1"] },
];

const CountryFocus: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="relative">
             <span className="watermark-text left-0 translate-x-0 text-left origin-left scale-75 md:scale-100">DESTINATIONS</span>
            <h2 className="relative z-10 text-sm font-bold text-accent-600 uppercase tracking-widest mb-2">Destinations</h2>
            <h3 className="relative z-10 text-4xl font-extrabold text-gray-900">Choose Your Dream Country</h3>
          </div>
          <a href="#" className="hidden md:flex items-center px-6 py-3 bg-white text-brand-600 font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100 relative z-10">
            View All Countries <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden h-[520px] cursor-pointer transform hover:-translate-y-3 transition-all duration-500 perspective-1000 bg-gray-900 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-200/20">
              
              {/* Image with Parallax-like Zoom */}
              <div className="absolute inset-0 bg-gray-900">
                  <img src={country.image} alt={country.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              </div>
              
              {/* Dynamic Gradient Overlay - Perfectly measured for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/50 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Hover Highlight Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none"></div>

              {/* Content Card - Slide Up Effect */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent-500" />
                        <span className="text-accent-400 font-bold tracking-widest uppercase text-[10px]">Top Destination</span>
                    </div>
                    <h4 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg">{country.name}</h4>
                    
                    <div className="space-y-2.5 max-h-0 overflow-hidden group-hover:max-h-80 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      {country.features.map((f, i) => (
                        <div key={i} className="flex items-center text-sm font-medium text-gray-100 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-lg border border-white/10 hover:bg-white/20 transition-colors">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                          {f}
                        </div>
                      ))}
                      
                      <button className="mt-5 w-full py-3 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center text-sm">
                        View Programs <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
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

export default CountryFocus;