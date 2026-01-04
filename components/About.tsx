import React from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
             <img 
                src="https://picsum.photos/600/400?grayscale" 
                alt="Our Team" 
                className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover"
             />
             <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-xl border border-slate-600 shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-brand-accent">5+</p>
                <p className="text-sm text-slate-300">Years of Excellence</p>
             </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              More Than Just An Agency. <br />
              <span className="text-slate-500">We Are Brand Architects.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              At The PI Communication, we believe every business has a unique story waiting to be told. We don't just sell services; we build identities. From the initial spark of a logo to the widespread reach of a billboard or a viral social campaign, we are with you at every step.
            </p>
            
            <div className="space-y-4">
                {[
                    "End-to-End Brand Management",
                    "Data-Driven Digital Strategies",
                    "High-Impact Offline Presence",
                    "Dedicated Growth Partners"
                ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                        <span className="text-slate-200">{item}</span>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
