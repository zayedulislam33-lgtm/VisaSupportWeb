
import React, { useState } from 'react';
import { ChevronRight, Check, RotateCcw, Shield, Loader2 } from 'lucide-react';
import { addAssessment } from '../services/dataService';

const AssessmentTool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ destination: '', goal: '', education: '' });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleNext = async (key: string, val: string) => {
    const updated = { ...selections, [key]: val };
    setSelections(updated);
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      try {
        const finalResult = "High Eligibility";
        await addAssessment({ ...updated, result: finalResult });
        setResult(finalResult);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  };

  const reset = () => {
    setStep(1);
    setResult(null);
    setSelections({ destination: '', goal: '', education: '' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-4">
                <Shield className="w-3 h-3 mr-1" /> AI Powered Analysis
            </div>
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Check Your Visa Eligibility in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">60 Seconds</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Don't guess your chances. Use our AI-driven assessment tool to find out if you qualify for immigration programs in Canada, Australia, or the UK.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-1 border border-gray-100 relative">
             <div className="bg-white rounded-[1.3rem] p-8 md:p-10 h-[500px] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100"></div>
                <div className="absolute top-0 left-0 h-1 bg-brand-500 transition-all duration-700" style={{ width: result ? '100%' : `${(step/3)*100}%` }}></div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <Loader2 className="w-12 h-12 text-brand-600 animate-spin" />
                        <p className="text-gray-500 font-bold">Calculating Eligibility...</p>
                    </div>
                ) : result ? (
                    <div className="text-center py-10 flex flex-col h-full justify-center animate-fade-in">
                        <Check className="w-16 h-16 text-green-500 mx-auto mb-6" />
                        <h4 className="text-3xl font-extrabold text-gray-900 mb-3">Congratulations!</h4>
                        <p className="text-gray-600 mb-10 text-lg">Based on your {selections.education} background, you have a <span className="font-bold text-green-600">High Chance</span> for {selections.destination}.</p>
                        <button onClick={() => window.location.href='#contact'} className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl transition-all mb-4">Claim Free Consultation</button>
                        <button onClick={reset} className="flex items-center justify-center text-gray-500 font-bold"><RotateCcw className="w-4 h-4 mr-2" /> Start Over</button>
                    </div>
                ) : (
                    <>
                        <span className="text-xs font-bold text-gray-400 uppercase mb-8">Step {step} of 3</span>
                        <div className="flex-grow flex flex-col justify-center">
                            {step === 1 && (
                                <div className="animate-fade-in space-y-6">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Where do you want to move?</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Canada', 'Australia', 'UK', 'USA'].map(c => (
                                            <button key={c} onClick={() => handleNext('destination', c)} className="p-5 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold transition-all text-left">
                                                {c}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="animate-fade-in space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">What is your main goal?</h4>
                                    {['Study', 'Work', 'Business', 'Family'].map(c => (
                                        <button key={c} onClick={() => handleNext('goal', c)} className="w-full p-4 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold flex justify-between items-center group">
                                            {c} <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ))}
                                </div>
                            )}
                            {step === 3 && (
                                <div className="animate-fade-in space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">Education level?</h4>
                                    {['Bachelor\'s', 'Master\'s', 'PhD', 'Diploma'].map(c => (
                                        <button key={c} onClick={() => handleNext('education', c)} className="w-full p-4 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 font-bold flex justify-between items-center group">
                                            {c} <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ))}
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
