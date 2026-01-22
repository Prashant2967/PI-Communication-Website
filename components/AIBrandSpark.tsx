import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
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
    <section id={SectionId.AI_TOOLS} className="py-32 bg-gray-50 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
             <div className="inline-flex items-center gap-2 mb-6 text-brand-black font-bold uppercase tracking-widest text-xs">
                <Sparkles size={14} />
                <span>AI Strategy Lab</span>
             </div>
             <h2 className="text-5xl font-display font-bold mb-6">INSTANT<br/>SPARK.</h2>
             <p className="text-gray-500 font-medium">
                Test our thinking. Give us a name and an industry, and our AI model will generate a starter strategy pack.
             </p>
          </div>

          <div className="md:w-2/3">
             <div className="bg-white border border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <form onSubmit={handleAnalyze} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Brand Name</label>
                            <input
                                type="text"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="w-full bg-gray-50 border border-black/10 p-4 font-bold focus:border-black focus:outline-none transition-colors"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Industry</label>
                            <input
                                type="text"
                                value={businessType}
                                onChange={(e) => setBusinessType(e.target.value)}
                                className="w-full bg-gray-50 border border-black/10 p-4 font-bold focus:border-black focus:outline-none transition-colors"
                                placeholder="Industry"
                            />
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-brand-black text-white py-4 px-8 font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : 'Generate Strategy'}
                    </button>
                </form>

                {result && (
                    <div className="mt-12 pt-12 border-t border-black/10 animate-fade-in space-y-8">
                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-400">Slogans</h3>
                            <div className="space-y-2">
                                {result.slogans.map((s, i) => (
                                    <p key={i} className="text-2xl font-display font-bold text-black">"{s}"</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-400">Strategy</h3>
                                <p className="text-lg font-medium leading-relaxed">{result.strategyTip}</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-400">Palette</h3>
                                <div className="flex gap-4">
                                    {result.colorPaletteSuggestion.map((c, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="w-16 h-16 border border-black/10" style={{ backgroundColor: c }}></div>
                                            <p className="text-xs font-mono">{c}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIBrandSpark;