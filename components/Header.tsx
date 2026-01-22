import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', id: SectionId.SERVICES },
    { label: 'Philosophy', id: SectionId.ABOUT },
    { label: 'AI Strategy', id: SectionId.AI_TOOLS },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
            onClick={() => handleNavClick(SectionId.HOME)}
            className="flex items-center space-x-3 cursor-pointer group z-50"
        >
          <div className="w-10 h-10 bg-brand-black text-brand-accent flex items-center justify-center font-display font-bold text-xl group-hover:bg-brand-accent group-hover:text-black transition-colors duration-300">
            PI
          </div>
          <span className={`text-xl font-bold font-display tracking-tight transition-colors ${isMobileMenuOpen ? 'text-black' : 'text-black'}`}>
            Communication
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-brand-accent ${
                activeSection === link.id ? 'text-black decoration-brand-accent underline underline-offset-8 decoration-4' : 'text-gray-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-12 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-5xl font-display font-bold text-black hover:text-brand-accent transition-colors"
                >
                {link.label}
                </button>
            ))}
          </div>
      </div>
    </header>
  );
};

export default Header;