import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Student Visa (Canada)",
    content: "GlobalPath made my dream of studying in Toronto a reality. Their team handled everything from university application to the visa interview prep.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Skilled Worker (UK)",
    content: "I was struggling with the points system for the UK. Their AI assessment and expert counselors guided me to the perfect pathway.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Visitor Visa (USA)",
    content: "Very professional and transparent. I got my US tourist visa approved in record time thanks to their meticulous documentation.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-200" />
              <div className="flex items-center mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-brand-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-brand-600">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;