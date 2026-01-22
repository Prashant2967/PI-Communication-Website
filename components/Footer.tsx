import React from 'react';
import { Hexagon, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (id: SectionId) => void;
    onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, onAdminClick }) => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
            <div>
                <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-brand-accent text-black flex items-center justify-center font-display font-bold text-xl">
                        PI
                    </div>
                </div>
                <p className="max-w-xs text-gray-500 font-medium leading-relaxed">
                    A branding and advertising studio for the brave. Mumbai based, globally minded.
                </p>
            </div>

            <div className="flex gap-16 mt-12 md:mt-0">
                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Studio</h4>
                    <ul className="space-y-4 font-bold text-lg">
                        <li><button onClick={() => scrollToSection(SectionId.SERVICES)} className="hover:text-brand-accent">Work</button></li>
                        <li><button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-brand-accent">About</button></li>
                        <li><button onClick={() => scrollToSection(SectionId.CONTACT)} className="hover:text-brand-accent">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Social</h4>
                    <ul className="space-y-4 font-bold text-lg">
                        <li><a href="#" className="hover:text-brand-accent">Instagram</a></li>
                        <li><a href="#" className="hover:text-brand-accent">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-brand-accent">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-600">
            <p>&copy; {new Date().getFullYear()} PI Communication.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <button onClick={onAdminClick} className="hover:text-white transition-colors">Admin Login</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;