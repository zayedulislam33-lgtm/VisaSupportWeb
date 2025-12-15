import React, { useState } from 'react';
import { ChevronRight, Check, RotateCcw, Shield } from 'lucide-react';

const AssessmentTool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<string | null>(null);

  const handleNext = (val: string) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Mock simple logic
      setResult("High Eligibility");
    }
  };

  const reset = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-4">
                <Shield className="w-3 h-3 mr-1" />
                AI Powered Analysis
            </div>
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Check Your Visa Eligibility in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">60 Seconds</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Don't guess your chances. Use our AI-driven assessment tool to find out if you qualify for immigration programs in Canada, Australia, or the UK.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <ul className="space-y-4">
                    {[
                        "Instant Score Calculation",
                        "Personalized Recommendations",
                        "No Hidden Fees"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-800 font-bold">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-sm">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-1 border border-gray-100 relative">
             <div className="bg-white rounded-[1.3rem] p-8 md:p-10 h-[500px] flex flex-col relative overflow-hidden">
                {/* Progress Bar background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100"></div>
                <div className="absolute top-0 left-0 h-1 bg-brand-500 transition-all duration-700 ease-out" style={{ width: result ? '100%' : `${(step/3)*100}%` }}></div>

                {result ? (
                    <div className="text-center py-10 flex flex-col h-full justify-center animate-fade-in">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-50/50 shadow-lg">
                            <Check className="w-12 h-12 text-green-500" />
                        </div>
                        <h4 className="text-3xl font-extrabold text-gray-900 mb-3">Congratulations!</h4>
                        <p className="text-gray-600 mb-10 text-lg">Based on your answers, you have a <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">High Chance</span> of approval.</p>
                        <button onClick={() => window.location.href='#contact'} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mb-4 transform hover:-translate-y-1">
                            Claim Your Free Consultation
                        </button>
                        <button onClick={reset} className="flex items-center justify-center w-full text-gray-500 hover:text-brand-600 font-bold transition-colors">
                            <RotateCcw className="w-4 h-4 mr-2" /> Start Over
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-10">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step} of 3</span>
                        </div>

                        <div className="flex-grow flex flex-col justify-center">
                            {step === 1 && (
                                <div className="animate-fade-in space-y-6">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-8">Where do you want to move?</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Canada', 'Australia', 'UK', 'USA'].map(c => (
                                            <button key={c} onClick={() => handleNext(c)} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold text-gray-800 transition-all text-left shadow-sm hover:shadow-md">
                                                {c}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="animate-fade-in space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6">What is your main goal?</h4>
                                    <div className="space-y-3">
                                        {['Study at a University', 'Work as a Professional', 'Start a Business', 'Join Family'].map(c => (
                                            <button key={c} onClick={() => handleNext(c)} className="w-full p-5 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold text-gray-800 transition-all text-left flex justify-between items-center group shadow-sm hover:shadow-md">
                                                {c}
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                                    <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                             {step === 3 && (
                                <div className="animate-fade-in space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Highest education level?</h4>
                                    <div className="space-y-3">
                                        {['High School', 'Bachelor\'s Degree', 'Master\'s / PhD', 'Vocational Training'].map(c => (
                                            <button key={c} onClick={() => handleNext(c)} className="w-full p-5 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold text-gray-800 transition-all text-left flex justify-between items-center group shadow-sm hover:shadow-md">
                                                {c}
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                                    <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentTool;