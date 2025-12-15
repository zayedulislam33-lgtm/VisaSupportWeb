import React from 'react';
import { FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

const DocumentChecklist: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-[2.5rem] p-8 md:p-14 relative shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between group">
            {/* Background 3D Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-gradient-to-br from-brand-600 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 md:w-1/2 text-white mb-12 md:mb-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg">
                    <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                    Free Resource
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Get Your Ultimate <br/> <span className="text-accent-400">Visa Checklist</span></h2>
                <p className="text-brand-100 mb-10 text-lg leading-relaxed max-w-lg">
                    Don't risk rejection due to missing paperwork. Download our comprehensive, officer-approved guide tailored for Student, Work, and PR visas.
                </p>
                
                <div className="space-y-4 mb-10">
                    {['Updated for 2024 Policies', 'Includes Financial Requirements', 'Document Translation Guide'].map((item, i) => (
                        <div key={i} className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4 shadow-lg shadow-green-500/30">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-lg">{item}</span>
                        </div>
                    ))}
                </div>

                <button className="flex items-center px-10 py-5 bg-white text-brand-900 font-bold text-lg rounded-2xl hover:bg-brand-50 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
                    <Download className="w-6 h-6 mr-3 text-brand-600" /> Download PDF Now
                </button>
            </div>

            <div className="relative z-10 md:w-5/12 flex justify-center perspective-1000">
                <div className="relative transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/50 blur-xl rounded-[50%]"></div>
                    
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl w-72 h-[420px] flex flex-col items-center border border-gray-100 transform rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                         {/* Badge */}
                         <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-4 border-brand-900 rotate-12">
                             FREE
                         </div>

                        <div className="w-24 h-24 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 mt-4 shadow-inner">
                            <FileText className="w-12 h-12 text-brand-600" />
                        </div>
                        <h3 className="text-brand-900 font-extrabold text-2xl text-center leading-tight mb-2">Visa Doc <br/> Checklist</h3>
                        <p className="text-gray-400 font-medium text-sm mb-6">2024 Official Edition</p>
                        
                        <div className="w-full space-y-3 mt-auto">
                            <div className="h-3 bg-gray-100 rounded-full w-full overflow-hidden">
                                <div className="h-full bg-brand-200 w-2/3"></div>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100 w-full flex justify-between items-center">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                            </div>
                            <span className="text-xs font-bold text-gray-400">1k+ Downloads</span>
                        </div>
                    </div>
                    
                    {/* Layer behind for stack effect */}
                    <div className="absolute top-4 left-4 w-72 h-[420px] bg-gray-100 rounded-3xl border border-gray-200 -z-10 transform rotate-3"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentChecklist;