import React, { useState } from 'react';
import { SectionId } from '../types';
import { Send, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Contact: React.FC = () => {
  const { content, addEnquiry } = useContent();
  const { contact } = content;
  
  const [formState, setFormState] = useState({ 
    name: '', 
    mobile: '', 
    serviceType: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
        name: formState.name,
        mobile: formState.mobile,
        serviceType: formState.serviceType,
        message: formState.message
    });
    setSubmitted(true);
    setFormState({ name: '', mobile: '', serviceType: '', message: '' });
  };

  const serviceOptions = [
    "OOH / Road / Train Branding",
    "Digital Marketing (SEO/Social)",
    "Brand Audit & Strategy",
    "Complete 360 Branding",
    "Other"
  ];

  return (
    <section id={SectionId.CONTACT} className="py-32 bg-brand-accent text-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col justify-between">
            <div>
                <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
                    LET'S<br/>TALK.
                </h2>
                <p className="text-xl font-medium border-l-4 border-black pl-6 max-w-sm">
                    Ready to stop being ignored? Fill out the form or just call us.
                </p>
            </div>
            
            <div className="mt-16 space-y-4">
                <div className="text-lg font-bold">
                    <span className="block text-sm uppercase tracking-widest opacity-60 mb-1">Email</span>
                    <a href={`mailto:${contact.email}`} className="hover:underline decoration-2">{contact.email}</a>
                </div>
                <div className="text-lg font-bold">
                    <span className="block text-sm uppercase tracking-widest opacity-60 mb-1">Phone</span>
                    {contact.phone}
                </div>
                <div className="text-lg font-bold">
                    <span className="block text-sm uppercase tracking-widest opacity-60 mb-1">Studio</span>
                    {contact.address}
                </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 md:p-12">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <h3 className="text-4xl font-display font-bold">RECEIVED.</h3>
                    <p className="text-gray-400">We'll be in touch shortly.</p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-brand-accent font-bold hover:underline"
                    >
                        Send another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="border-b border-white/20 pb-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                        <input 
                            type="text" 
                            required
                            className="w-full bg-transparent text-2xl font-bold placeholder-white/20 focus:outline-none focus:placeholder-transparent"
                            placeholder="YOUR NAME"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                    </div>

                    <div className="border-b border-white/20 pb-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mobile</label>
                        <input 
                            type="tel" 
                            required
                            className="w-full bg-transparent text-2xl font-bold placeholder-white/20 focus:outline-none focus:placeholder-transparent"
                            placeholder="+91 ..."
                            value={formState.mobile}
                            onChange={(e) => setFormState({...formState, mobile: e.target.value})}
                        />
                    </div>

                    <div className="border-b border-white/20 pb-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interested In</label>
                        <select 
                            required
                            className="w-full bg-transparent text-xl font-bold text-white focus:outline-none cursor-pointer appearance-none"
                            value={formState.serviceType}
                            onChange={(e) => setFormState({...formState, serviceType: e.target.value})}
                        >
                            <option value="" disabled className="text-gray-500">SELECT A SERVICE</option>
                            {serviceOptions.map((opt, i) => (
                                <option key={i} value={opt} className="bg-black text-white">{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div className="border-b border-white/20 pb-2">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Details</label>
                        <textarea 
                            rows={2}
                            className="w-full bg-transparent text-xl font-bold placeholder-white/20 focus:outline-none focus:placeholder-transparent resize-none"
                            placeholder="TELL US ABOUT IT"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-white text-black font-bold py-6 text-lg hover:bg-gray-200 transition-colors flex items-center justify-between px-8 mt-8 group"
                    >
                        <span>SEND ENQUIRY</span>
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;