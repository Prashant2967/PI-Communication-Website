import React from 'react';
import { Hexagon, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (id: SectionId) => void;
    onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, onAdminClick }) => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6 group cursor-default">
                <Hexagon className="w-8 h-8 text-brand-accent group-hover:rotate-180 transition-transform duration-700" strokeWidth={2.5} />
                <span className="text-xl font-bold font-serif text-white">
                    PI <span className="text-brand-accent">Communication</span>
                </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your partner in holistic brand building. From strategy to execution, we bring your vision to life across all mediums.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-brand-accent hover:scale-110 transition-all"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent hover:scale-110 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent hover:scale-110 transition-all"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent hover:scale-110 transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">SEO & Digital Marketing</a></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Social Media Management</a></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Outdoor Advertising</a></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Print & Promotion</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-brand-accent hover:pl-1 transition-all">About Us</button></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Portfolio</a></li>
                <li><a href="#" className="hover:text-brand-accent hover:pl-1 transition-all">Careers</a></li>
                <li><button onClick={() => scrollToSection(SectionId.CONTACT)} className="hover:text-brand-accent hover:pl-1 transition-all">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to get the latest marketing trends.</p>
            <div className="flex group">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-slate-900 border-l border-t border-b border-slate-700 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent w-full transition-colors"
                />
                <button className="bg-brand-accent text-brand-dark px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-yellow-300 transition-colors group-hover:shadow-[0_0_10px_rgba(250,204,21,0.4)]">
                    Join
                </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} PI Communication. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
                <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400">Terms of Service</a>
                <button onClick={onAdminClick} className="hover:text-brand-accent opacity-50 hover:opacity-100 transition-opacity">Admin</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;