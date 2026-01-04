import React from 'react';
import { 
  Megaphone, 
  Globe, 
  PenTool, 
  TrendingUp, 
  Map, 
  Truck, 
  Printer, 
  Layout 
} from 'lucide-react';
import { SectionId, ServiceCategory } from '../types';

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Brand Strategy & Identity",
      description: "We define your voice and visualize your values to create a lasting impression.",
      items: [
        { title: "Brand Identity", description: "Logo, Typography, Color Palette", icon: PenTool },
        { title: "Strategy Creation", description: "Market Research, Positioning, Voice", icon: Map },
      ]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to dominate the digital landscape.",
      items: [
        { title: "SEO", description: "Ranking high on search engines", icon: TrendingUp },
        { title: "Website Building", description: "High-performance, responsive sites", icon: Globe },
        { title: "Social Media", description: "Community management & growth", icon: Layout },
        { title: "Performance Marketing", description: "Paid ads that convert", icon: Megaphone },
      ]
    },
    {
      title: "Offline / On-Ground",
      description: "Tangible marketing that reaches people where they are.",
      items: [
        { title: "Road Advertisements", description: "Billboards & Hoardings", icon: Map },
        { title: "Transit Media", description: "Auto Rickshaw & Railway Ads", icon: Truck },
        { title: "Print Promotions", description: "Pamphlets & Flyers", icon: Printer },
      ]
    }
  ];

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
            {serviceCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-slate-800/20 rounded-3xl p-8 md:p-12 border border-slate-700/50">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-brand-accent mb-2">{category.title}</h3>
                        <p className="text-slate-400">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.items.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="group p-6 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-slate-600">
                                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-brand-accent group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
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
