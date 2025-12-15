import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between">
            
            <div className="flex items-center gap-6 mb-6 md:mb-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-12 h-12" />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Excellent</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-gray-600 font-medium">4.9/5 based on 850+ reviews</span>
                    </div>
                </div>
            </div>

            <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-white object-cover" src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                    +800
                </div>
            </div>
            
            <a href="#" className="mt-6 md:mt-0 px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Read All Reviews
            </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;