import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Let's Build Your Legacy</h2>
          <p className="text-slate-400">Ready to scale? Get in touch with our team today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-accent/10 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Email Us</p>
                            <p className="text-white font-medium">hello@thepicommunication.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-accent/10 p-3 rounded-lg">
                            <Phone className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Call Us</p>
                            <p className="text-white font-medium">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-brand-accent/10 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Visit Us</p>
                            <p className="text-white font-medium">123 Creative Tower, Tech Hub District,<br/>Mumbai, India</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-accent to-amber-600 p-8 rounded-2xl text-slate-900">
                <h3 className="text-xl font-bold mb-2">Looking for a custom plan?</h3>
                <p className="mb-4 text-slate-900/80">We offer tailored packages for startups and enterprise clients alike.</p>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    Schedule a Consultation
                </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 shadow-xl">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                        <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-brand-accent hover:underline mt-4"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            required
                            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            required
                            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                        <textarea 
                            rows={4}
                            required
                            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-brand-accent hover:bg-amber-400 text-brand-dark font-bold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
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
