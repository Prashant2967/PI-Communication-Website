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
    <section id={SectionId.SERVICES} className="py-32 bg-brand-white border-t border-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-brand-black tracking-tighter">
                THE<br/>WORK
            </h2>
            <p className="mt-8 md:mt-0 max-w-md text-xl text-gray-600 font-medium">
                We believe in media-neutral ideas. We don't start with a format; we start with a problem and solve it wherever the audience lives.
            </p>
        </div>

        <div className="space-y-0">
            {services.map((category, catIndex) => (
                <div key={catIndex} className="group border-t border-black/10 py-16 hover:bg-gray-50 transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Number */}
                        <div className="col-span-1 lg:col-span-1 text-sm font-bold text-gray-400 font-mono pt-2">
                            0{catIndex + 1}
                        </div>
                        
                        {/* Content */}
                        <div className="col-span-1 lg:col-span-11 grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h3 className="text-4xl font-display font-bold text-black mb-4">{category.title}</h3>
                                <p className="text-gray-500 text-lg">{category.description}</p>
                            </div>

                            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                                {category.items.map((item, index) => {
                                    const Icon = iconMap[item.iconKey] || Layout;
                                    return (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="mt-1 text-brand-accent shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-black">{item.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="border-t border-black/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;