import React, { useState } from 'react';
import { Sparkles, Loader2, Lightbulb, Palette, MessageSquare } from 'lucide-react';
import { generateBrandInsights } from '../services/geminiService';
import { SectionId, BrandInsightResponse } from '../types';

const AIBrandSpark: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BrandInsightResponse | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType) return;

    setLoading(true);
    setResult(null);
    try {
      const data = await generateBrandInsights(businessName, businessType);
      setResult(data);
    } catch (error) {
      console.error("Failed to generate insights", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_TOOLS} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-brand-accent to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-accent/10 px-4 py-1.5 rounded-full mb-4 border border-brand-accent/20">
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Powered by Gemini AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Instant Brand Spark
            </h2>
            <p className="text-slate-400 mb-8">
              Not sure where to start? Let our AI analyze your concept and provide instant strategic direction, slogan ideas, and aesthetic suggestions.
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <form onSubmit={handleAnalyze} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <input
                type="text"
                placeholder="Your Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Industry (e.g. Coffee Shop, Tech Startup)"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-brand-accent to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-lg px-6 py-3 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Ignite Brand</span>
                  </>
                )}
              </button>
            </form>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                {/* Slogans */}
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-brand-accent/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <MessageSquare className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="font-bold text-white">Slogan Ideas</h3>
                    </div>
                    <ul className="space-y-3">
                        {result.slogans.map((slogan, i) => (
                            <li key={i} className="text-sm text-slate-300 italic">"{slogan}"</li>
                        ))}
                    </ul>
                </div>

                {/* Strategy */}
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-brand-accent/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <Lightbulb className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="font-bold text-white">Strategy Tip</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        {result.strategyTip}
                    </p>
                </div>

                {/* Colors */}
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-brand-accent/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Palette className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="font-bold text-white">Color Palette</h3>
                    </div>
                    <div className="flex space-x-4">
                        {result.colorPaletteSuggestion.map((color, i) => (
                            <div key={i} className="flex flex-col items-center space-y-2">
                                <div 
                                    className="w-12 h-12 rounded-full shadow-lg ring-2 ring-white/10"
                                    style={{ backgroundColor: color }}
                                ></div>
                                <span className="text-xs text-slate-500 font-mono">{color}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBrandSpark;
