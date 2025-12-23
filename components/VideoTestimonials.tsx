import React from 'react';
import { Play, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Student Visa - Canada",
    content: "I got my visa in just 2 months! The team at GlobalPath was incredible.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    videoUrl: "#"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "PR - Australia",
    content: "They helped me navigate the complex points system. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    videoUrl: "#"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Work Permit - UK",
    content: "Professional, transparent, and very supportive throughout the process.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    videoUrl: "#"
  }
];

const VideoTestimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#020617] text-white relative overflow-hidden">
      {/* Background Animated Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
            <span className="watermark-text opacity-20 !text-white/10" style={{WebkitTextStroke: '2px rgba(255,255,255,0.1)'}}>TESTIMONIALS</span>
            <h2 className="relative z-10 text-accent-500 font-bold tracking-[0.2em] uppercase text-sm mb-3">Client Stories</h2>
            <h3 className="relative z-10 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">See What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="group relative rounded-3xl bg-gray-900 border border-gray-800 transition-all duration-500 transform hover:-translate-y-3">
              {/* Neon Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative rounded-3xl bg-gray-900 overflow-hidden h-full flex flex-col">
                {/* Thumbnail Area */}
                <div className="relative h-64 overflow-hidden cursor-pointer">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    
                    {/* Play Button with Ripple */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent-500 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute inset-0 bg-accent-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <div className="relative w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-400 transition-all duration-300 shadow-2xl scale-100 group-hover:scale-110">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="p-8 relative flex-grow">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-800 group-hover:text-brand-900/50 transition-colors transform rotate-180" />
                    
                    <div className="flex items-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-accent-500 rounded-full blur-sm opacity-50"></div>
                            <img src={t.image} className="relative w-14 h-14 rounded-full border-2 border-gray-900 object-cover z-10" alt={t.name} />
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold text-xl text-white group-hover:text-accent-400 transition-colors">{t.name}</h4>
                            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{t.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed italic border-l-2 border-brand-500 pl-4">"{t.content}"</p>
                    
                    <div className="flex gap-1 mt-6">
                        {[1,2,3,4,5].map(i => (
                            // Explicitly typed component will now accept 'key' correctly
                            <StarIcon key={i} filled={true} />
                        ))}
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

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default VideoTestimonials;