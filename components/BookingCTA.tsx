import React from 'react';
import { CalendarCheck, PhoneCall } from 'lucide-react';

const BookingCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Start Your Journey Today</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our certified consultants are ready to create a personalized roadmap for your global ambitions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <CalendarCheck className="w-6 h-6 mr-3" />
                Book Free Consultation
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-100 hover:border-brand-500 hover:text-brand-600 text-gray-700 font-bold text-lg rounded-xl transition-all">
                <PhoneCall className="w-6 h-6 mr-3" />
                +1 (555) 000-0000
            </button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;