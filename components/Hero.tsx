import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
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
        <div className="md:w-3/5 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-1 border border-slate-700">
            <TrendingUp className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-slate-300">Scaling brands from Zero to One</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white">
            We Build Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">
              That Last.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            The PI Communication is a full-service agency dedicated to crafting compelling identities and executing precision marketing strategies. From offline roots to digital heights, we handle it all.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-amber-400 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={() => scrollToSection(SectionId.SERVICES)}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Abstract Visual - Right Side */}
        <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img 
                    src="https://picsum.photos/400/400?grayscale&blur=2" 
                    alt="Creative Agency" 
                    className="w-64 h-64 object-cover rounded-full shadow-2xl opacity-80"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
