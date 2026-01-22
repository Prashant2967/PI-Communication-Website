import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { SectionId } from '../types';
import { useContent } from '../contexts/ContentContext';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { content } = useContent();
  const { hero } = content;

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-1 border border-slate-700 hover:border-brand-accent/50 transition-colors cursor-default">
            <TrendingUp className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-slate-300">{hero.subtitle}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white whitespace-pre-line drop-shadow-lg">
            {hero.title}
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-yellow-300 transition-all flex items-center justify-center space-x-2 group shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:-translate-y-1"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={() => scrollToSection(SectionId.SERVICES)}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-brand-accent hover:text-brand-accent hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all hover:-translate-y-1"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Visual - Right Side */}
        <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96 group">
            <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-brand-accent/40 transition-colors"></div>
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img 
                    src={hero.image}
                    alt="Agency" 
                    className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-slate-800/50 group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;