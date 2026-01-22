import React from 'react';
import { SectionId } from '../types';
import { useContent } from '../contexts/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();
  const { about } = content;

  return (
    <section id={SectionId.ABOUT} className="py-32 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
             <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 whitespace-pre-line leading-none tracking-tight">
              {about.title}
            </h2>
            <div className="h-1 w-20 bg-brand-accent mb-12"></div>
            <p className="text-2xl text-gray-300 font-light leading-relaxed mb-12">
              {about.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
                {about.checklist.map((item, index) => (
                    <span key={index} className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all cursor-default">
                        {item}
                    </span>
                ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute top-4 -right-4 w-full h-full border-2 border-brand-accent z-0"></div>
             <img 
                src={about.image}
                alt="Philosophy" 
                className="relative z-10 w-full h-[600px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;