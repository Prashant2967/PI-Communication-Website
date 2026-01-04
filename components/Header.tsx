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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'AI Strategy', id: SectionId.AI_TOOLS },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            onClick={() => handleNavClick(SectionId.HOME)}
            className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="relative">
            <Hexagon className="w-8 h-8 text-brand-accent group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
            <span className="absolute inset-0 flex items-center justify-center font-bold text-xs text-brand-dark">PI</span>
          </div>
          <span className="text-xl font-bold tracking-tight font-serif text-white">
            The PI <span className="text-brand-accent">Communication</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-brand-accent ${
                activeSection === link.id ? 'text-brand-accent' : 'text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-t border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-lg font-medium ${
                activeSection === link.id ? 'text-brand-accent' : 'text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
