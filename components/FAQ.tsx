import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "How long does the student visa process take?", answer: "The processing time varies by country. For Canada, it typically takes 4-12 weeks. The UK usually processes within 3 weeks for priority applications." },
  { question: "What is the minimum IELTS score required?", answer: "Generally, an overall score of 6.0 to 6.5 is required for most undergraduate and postgraduate programs. However, some top universities may ask for 7.0." },
  { question: "Do you offer job placement services?", answer: "We provide career counseling and help you with resume building and interview preparation, but we do not guarantee job placements directly." },
  { question: "Is the consultation fee refundable?", answer: "Our initial assessment is free. If you retain our services, any consultation fees paid are usually adjusted against the final service package." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 relative">
             <span className="watermark-text">FAQ</span>
             <h2 className="relative z-10 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-200 bg-white relative z-10">
                    <button 
                        className={`w-full flex justify-between items-center p-6 text-left focus:outline-none ${openIndex === index ? 'bg-gray-50' : 'bg-white'}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                        {openIndex === index ? <Minus className="w-5 h-5 text-brand-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
                    </button>
                    <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gray-50">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;