import React, { useState } from 'react';
import { Bot, Send, Sparkles, Loader2 } from 'lucide-react';
import { askAiAssistant } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    
    const answer = await askAiAssistant(query);
    
    setResponse(answer);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-br from-brand-900 to-brand-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 mr-2 text-accent-500" />
            AI-Powered Immigration Assistant
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Instant Visa Answers
          </h2>
          <p className="text-brand-100 text-lg">
            Not sure where to start? Ask our AI agent about requirements, points calculation, or processes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-200">
            {response ? (
              <div className="prose prose-blue max-w-none">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex-grow">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{response}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                <Bot className="w-12 h-12 mb-3 opacity-20" />
                <p>Ask me anything like "What are the requirements for Canada Student Visa?"</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white">
            <form onSubmit={handleAskAi} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your question here..."
                className="w-full pl-6 pr-14 py-4 rounded-xl border-2 border-gray-100 focus:border-brand-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-400 transition-all bg-gray-50 focus:bg-white"
              />
              <button
                type="submit"
                disabled={loading || !query}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;