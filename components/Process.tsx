import React from 'react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Free Assessment",
    description: "We evaluate your profile against eligibility criteria for various countries and visa types."
  },
  {
    number: "02",
    title: "Documentation",
    description: "Our experts assist you in gathering and verifying all necessary documents to avoid rejection."
  },
  {
    number: "03",
    title: "Application Filing",
    description: "We submit your application with a legal representation letter to maximize success chances."
  },
  {
    number: "04",
    title: "Visa Approval",
    description: "Receive your visa and get pre-departure briefing for a smooth transition to your new life."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 relative">
          <span className="watermark-text">PROCESS</span>
          <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-gray-900">How We Work</h2>
          <p className="relative z-10 mt-4 text-xl text-gray-500">A transparent, step-by-step approach to your visa success.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) with Animated Gradient */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-3 bg-gray-100 rounded-full z-0 overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent w-[50%] animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                {/* 3D Floating Sphere */}
                <div className="relative w-28 h-28 mx-auto mb-8 transform transition-transform duration-500 group-hover:-translate-y-4">
                  {/* Glow under sphere */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-brand-500/30 blur-xl rounded-[100%] transition-all duration-500 group-hover:w-16 group-hover:bg-brand-500/50"></div>
                  
                  {/* Sphere Body */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-400 via-brand-600 to-brand-800 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-inner border-4 border-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent"></div>
                    <span className="relative z-10 drop-shadow-md">{step.number}</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-200 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;