import React from 'react';
import { MessageCircle, MessageSquare } from 'lucide-react';

const FloatingWidgets: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Track App Button - Mini */}
      <a href="#track" className="bg-white text-brand-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110 border border-gray-100 group relative">
        <div className="absolute right-12 top-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Track Status</div>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Live Chat Button */}
      <button className="bg-brand-600 text-white p-4 rounded-full shadow-lg hover:shadow-brand-500/50 hover:bg-brand-700 transition-transform hover:scale-110 flex items-center justify-center relative">
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingWidgets;