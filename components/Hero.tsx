import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { SectionId } from '../types';
import { useContent } from '../contexts/ContentContext';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { content } = useContent();
  const { hero } = content;

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-white">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 border-r border-l border-black/5 mx-6 md:mx-12 pointer-events-none"></div>
      <div className="absolute top-1/3 w-full border-t border-black/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col">
          
          <div className="mb-12 animate-fade-in-up">
            <span className="inline-block bg-brand-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-black mb-6">
              Est. 2024
            </span>
            <h1 className="text-[12vw] leading-[0.85] font-display font-bold text-brand-black tracking-tighter uppercase break-words">
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className="block hover:text-stroke transition-all duration-500 cursor-default">{word}</span>
              ))}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="md:w-1/2">
                <p className="text-xl md:text-2xl text-black/80 font-medium leading-tight max-w-lg border-l-4 border-brand-accent pl-6">
                    {hero.subtitle}
                </p>
                <p className="mt-6 text-gray-500 max-w-md">
                    {hero.description}
                </p>
            </div>

            <div className="md:w-auto">
                <button 
                    onClick={() => scrollToSection(SectionId.CONTACT)}
                    className="group relative overflow-hidden bg-brand-black text-white px-10 py-6 rounded-none transition-all hover:bg-brand-accent hover:text-black"
                >
                    <span className="relative z-10 flex items-center gap-4 text-lg font-bold uppercase tracking-wider">
                        Start Project
                        <ArrowDownRight className="transition-transform group-hover:rotate-45" />
                    </span>
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;