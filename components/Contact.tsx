import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, Briefcase, CheckCircle2 } from 'lucide-react';
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
    
    // Save to context/local storage
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
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-slate-800 rounded-full mb-4 border border-slate-700">
            <MessageSquare className="w-6 h-6 text-brand-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Let's Build Your Legacy</h2>
          <p className="text-slate-400">Ready to scale? Tell us about your project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-brand-accent/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                    <div className="flex items-center space-x-5 group">
                        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all">
                            <Mail className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email Us</p>
                            <p className="text-white text-lg font-medium">{contact.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5 group">
                         <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all">
                            <Phone className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Call Us</p>
                            <p className="text-white text-lg font-medium">{contact.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5 group">
                         <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all">
                            <MapPin className="w-6 h-6 text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Visit Us</p>
                            <p className="text-white text-lg font-medium">{contact.address}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-accent to-yellow-600 p-8 rounded-3xl text-slate-900 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-2 relative z-10">Custom Enterprise Plan?</h3>
                <p className="mb-6 text-slate-900/80 font-medium relative z-10">We offer tailored packages for startups and enterprise clients alike.</p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors shadow-xl relative z-10 flex items-center gap-2">
                    Schedule a Meeting <Briefcase size={18} />
                </button>
            </div>
          </div>

          {/* Attractive Form */}
          <div className="relative">
            {/* Glow Effect behind form */}
            <div className="absolute inset-0 bg-brand-accent/5 rounded-3xl blur-2xl"></div>
            
            <div className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl relative">
                {submitted ? (
                    <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 ring-4 ring-green-500/10">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out. Our team will contact you on your mobile number shortly.</p>
                        </div>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="text-brand-accent font-bold hover:underline mt-4 flex items-center gap-2"
                        >
                            Send another enquiry <Send size={16} />
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                                <input 
                                    type="text" 
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl pl-12 pr-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-slate-600"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-400 ml-1">Mobile Number</label>
                            <div className="relative">
                                <Smartphone className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                                <input 
                                    type="tel" 
                                    required
                                    placeholder="+91 98765 43210"
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl pl-12 pr-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-slate-600"
                                    value={formState.mobile}
                                    onChange={(e) => setFormState({...formState, mobile: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-400 ml-1">I'm interested in...</label>
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                                <select 
                                    required
                                    className="w-full bg-slate-900 border border-slate-600 rounded-xl pl-12 pr-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all appearance-none cursor-pointer"
                                    value={formState.serviceType}
                                    onChange={(e) => setFormState({...formState, serviceType: e.target.value})}
                                >
                                    <option value="" disabled className="text-slate-500">Select a Service</option>
                                    {serviceOptions.map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-400 ml-1">Message (Optional)</label>
                            <textarea 
                                rows={4}
                                placeholder="Tell us a bit about your business goals..."
                                className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder-slate-600 resize-none"
                                value={formState.message}
                                onChange={(e) => setFormState({...formState, message: e.target.value})}
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-brand-accent hover:bg-yellow-300 text-brand-dark font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 flex items-center justify-center space-x-2"
                        >
                            <span>Send Enquiry</span>
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;