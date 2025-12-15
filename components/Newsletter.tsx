import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated on Visa News</h3>
                <p className="text-brand-100">Subscribe to our newsletter and get weekly updates on immigration policies, draw results, and scholarship opportunities.</p>
            </div>
            <div className="md:w-1/2 w-full max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="Enter your email address" className="w-full px-5 py-3 rounded-xl border-0 focus:ring-2 focus:ring-accent-400 outline-none text-gray-900" />
                    <button className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center">
                        Subscribe <Send className="w-4 h-4 ml-2" />
                    </button>
                </form>
                <p className="text-xs text-brand-200 mt-3 text-center sm:text-left">We respect your privacy. No spam, ever.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;