
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { addSubscription } from '../services/dataService';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await addSubscription(email);
      setSuccess(true);
      setEmail('');
    } catch (e) {
      alert("Error subscribing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated on Visa News</h3>
                <p className="text-brand-100">Subscribe to our newsletter and get weekly updates on immigration policies.</p>
            </div>
            <div className="md:w-1/2 w-full max-w-md">
                {success ? (
                  <div className="flex items-center text-white bg-white/10 p-4 rounded-xl border border-white/20 animate-fade-in">
                    <CheckCircle className="w-6 h-6 mr-3 text-accent-400" />
                    <span className="font-bold">Successfully Subscribed!</span>
                  </div>
                ) : (
                  <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full px-5 py-3 rounded-xl outline-none text-gray-900" />
                    <button disabled={loading} className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all flex items-center justify-center">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Subscribe <Send className="w-4 h-4 ml-2" /></>}
                    </button>
                  </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
