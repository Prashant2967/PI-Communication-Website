import React from 'react';
import { Hexagon, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <Hexagon className="w-8 h-8 text-brand-accent" strokeWidth={2.5} />
                <span className="text-xl font-bold font-serif text-white">
                    The PI <span className="text-brand-accent">Communication</span>
                </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your partner in holistic brand building. From strategy to execution, we bring your vision to life across all mediums.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-brand-accent">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-brand-accent">SEO & Digital Marketing</a></li>
                <li><a href="#" className="hover:text-brand-accent">Social Media Management</a></li>
                <li><a href="#" className="hover:text-brand-accent">Outdoor Advertising</a></li>
                <li><a href="#" className="hover:text-brand-accent">Print & Promotion</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-brand-accent">About Us</button></li>
                <li><a href="#" className="hover:text-brand-accent">Portfolio</a></li>
                <li><a href="#" className="hover:text-brand-accent">Careers</a></li>
                <li><button onClick={() => scrollToSection(SectionId.CONTACT)} className="hover:text-brand-accent">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to get the latest marketing trends.</p>
            <div className="flex">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-slate-900 border-l border-t border-b border-slate-700 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none w-full"
                />
                <button className="bg-brand-accent text-brand-dark px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-amber-400 transition-colors">
                    Join
                </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} The PI Communication. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
