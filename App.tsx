import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIBrandSpark from './components/AIBrandSpark';
import Admin from './components/Admin';
import { SectionId } from './types';
import { ContentProvider } from './contexts/ContentContext';
import { Lock } from 'lucide-react';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);
  const [view, setView] = useState<'home' | 'login' | 'admin'>('home');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const scrollToSection = (id: SectionId) => {
    // If not on home view, go to home first
    if (view !== 'home') {
        setView('home');
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    if (view !== 'home') return;

    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      if (password === '267144') {
          setView('admin');
          setLoginError(false);
          setPassword('');
      } else {
          setLoginError(true);
      }
  };

  if (view === 'login') {
      return (
          <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full max-w-md shadow-2xl">
                  <div className="flex justify-center mb-6">
                      <div className="bg-slate-700 p-4 rounded-full">
                          <Lock className="w-8 h-8 text-brand-accent" />
                      </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center text-white mb-6">Admin Access</h2>
                  <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                          <label className="block text-sm text-slate-400 mb-1">Password</label>
                          <input 
                              type="password" 
                              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none"
                              placeholder="Enter admin password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                      </div>
                      {loginError && <p className="text-red-400 text-sm">Incorrect password.</p>}
                      <button 
                        type="submit"
                        className="w-full bg-brand-accent hover:bg-yellow-300 text-brand-dark font-bold py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                      >
                          Login
                      </button>
                      <button 
                        type="button"
                        onClick={() => setView('home')}
                        className="w-full text-slate-400 hover:text-white text-sm"
                      >
                          Back to Website
                      </button>
                  </form>
              </div>
          </div>
      );
  }

  if (view === 'admin') {
      return <Admin onLogout={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <AIBrandSpark />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} onAdminClick={() => setView('login')} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;