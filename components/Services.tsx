import React from 'react';
import { 
  Megaphone, 
  Globe, 
  PenTool, 
  TrendingUp, 
  Map, 
  Truck, 
  Printer, 
  Layout,
  LucideIcon
} from 'lucide-react';
import { SectionId } from '../types';
import { useContent } from '../contexts/ContentContext';

const iconMap: Record<string, LucideIcon> = {
  Megaphone, Globe, PenTool, TrendingUp, Map, Truck, Printer, Layout
};

const Services: React.FC = () => {
  const { content } = useContent();
  const { services } = content;

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Comprehensive solutions tailored to scale your business from local presence to global dominance.
            </p>
        </div>

        <div className="space-y-16">
            {services.map((category, catIndex) => (
                <div key={catIndex} className="bg-slate-800/20 rounded-3xl p-8 md:p-12 border border-slate-700/50 hover:border-brand-accent/30 transition-colors duration-500">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-brand-accent mb-2 drop-shadow-sm">{category.title}</h3>
                        <p className="text-slate-400">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.items.map((item, index) => {
                            const Icon = iconMap[item.iconKey] || Layout;
                            return (
                                <div key={index} className="group p-6 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-brand-accent group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner border border-slate-800">
                                        <Icon size={24} className="drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;