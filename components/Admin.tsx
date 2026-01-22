import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { Lock, LogOut, Save, RotateCcw, Trash2, Mail, Layout, Type, Phone } from 'lucide-react';
import { SiteContent } from '../types';

interface AdminProps {
  onLogout: () => void;
}

const Admin: React.FC<AdminProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'enquiries'>('content');
  const { content, updateContent, enquiries, deleteEnquiry, resetToDefault } = useContent();
  
  // Local state for form editing to avoid constant re-renders on context
  const [editForm, setEditForm] = useState<SiteContent>(content);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateContent(editForm);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    if(window.confirm("Are you sure? This will reset all content to default.")) {
        resetToDefault();
        setEditForm(content); // will need reload to reflect perfectly or just use context result
        window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Lock className="text-brand-accent" />
              Admin Panel
            </h1>
            <p className="text-slate-400">Manage website content and enquiries</p>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-red-400"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="flex space-x-4 mb-8 border-b border-slate-700 pb-1">
          <button
            onClick={() => setActiveTab('content')}
            className={`pb-3 px-2 font-medium transition-colors relative ${
              activeTab === 'content' ? 'text-brand-accent' : 'text-slate-400 hover:text-white'
            }`}
          >
            Edit Content
            {activeTab === 'content' && <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-brand-accent"></div>}
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`pb-3 px-2 font-medium transition-colors relative ${
              activeTab === 'enquiries' ? 'text-brand-accent' : 'text-slate-400 hover:text-white'
            }`}
          >
            Enquiries ({enquiries.length})
            {activeTab === 'enquiries' && <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-brand-accent"></div>}
          </button>
        </div>

        {activeTab === 'content' ? (
          <div className="space-y-8 animate-fade-in">
            {/* Toolbar */}
            <div className="sticky top-4 z-10 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl flex justify-between items-center">
                <span className="font-bold text-white">Content Editor</span>
                <div className="flex gap-3">
                    <button 
                        onClick={handleReset}
                        className="px-4 py-2 text-sm bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 flex items-center gap-2"
                    >
                        <RotateCcw size={16} /> Reset
                    </button>
                    <button 
                        onClick={handleSave}
                        className="px-6 py-2 text-sm bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-amber-400 flex items-center gap-2"
                    >
                        <Save size={16} /> 
                        {isSaved ? 'Saved!' : 'Save Changes'}
                    </button>
                </div>
            </div>

            {/* Hero Section Edit */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Layout size={20}/> Hero Section</h3>
                <div className="grid gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Main Title</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.hero.title}
                            onChange={(e) => setEditForm({...editForm, hero: {...editForm.hero, title: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Subtitle</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.hero.subtitle}
                            onChange={(e) => setEditForm({...editForm, hero: {...editForm.hero, subtitle: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Description</label>
                        <textarea 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            rows={3}
                            value={editForm.hero.description}
                            onChange={(e) => setEditForm({...editForm, hero: {...editForm.hero, description: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Hero Image URL</label>
                        <div className="flex gap-2">
                             <input 
                                className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                value={editForm.hero.image}
                                onChange={(e) => setEditForm({...editForm, hero: {...editForm.hero, image: e.target.value}})}
                            />
                            <div className="w-10 h-10 rounded overflow-hidden bg-slate-700 flex-shrink-0">
                                <img src={editForm.hero.image} className="w-full h-full object-cover" alt="preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section Edit */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Type size={20}/> About Section</h3>
                <div className="grid gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Title</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.about.title}
                            onChange={(e) => setEditForm({...editForm, about: {...editForm.about, title: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Description</label>
                        <textarea 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            rows={4}
                            value={editForm.about.description}
                            onChange={(e) => setEditForm({...editForm, about: {...editForm.about, description: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">About Image URL</label>
                         <div className="flex gap-2">
                             <input 
                                className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                value={editForm.about.image}
                                onChange={(e) => setEditForm({...editForm, about: {...editForm.about, image: e.target.value}})}
                            />
                            <div className="w-10 h-10 rounded overflow-hidden bg-slate-700 flex-shrink-0">
                                <img src={editForm.about.image} className="w-full h-full object-cover" alt="preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
             {/* Contact Info Edit */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Mail size={20}/> Contact Info</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Email</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.contact.email}
                            onChange={(e) => setEditForm({...editForm, contact: {...editForm.contact, email: e.target.value}})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Phone</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.contact.phone}
                            onChange={(e) => setEditForm({...editForm, contact: {...editForm.contact, phone: e.target.value}})}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm text-slate-400 mb-1">Address</label>
                        <input 
                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                            value={editForm.contact.address}
                            onChange={(e) => setEditForm({...editForm, contact: {...editForm.contact, address: e.target.value}})}
                        />
                    </div>
                </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
             {enquiries.length === 0 ? (
                <div className="text-center py-20 text-slate-500">
                    <Mail size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No enquiries yet.</p>
                </div>
             ) : (
                 <div className="grid gap-4">
                     {enquiries.map((enquiry) => (
                         <div key={enquiry.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative group">
                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                                 <div>
                                     <h3 className="font-bold text-lg text-white flex items-center gap-2">
                                         {enquiry.name}
                                         <span className="text-xs font-normal bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-full border border-brand-accent/30">
                                            {enquiry.serviceType || 'General'}
                                         </span>
                                     </h3>
                                     <div className="flex items-center gap-4 mt-1">
                                         <a href={`tel:${enquiry.mobile}`} className="text-slate-300 text-sm hover:text-brand-accent flex items-center gap-1">
                                            <Phone size={14} />
                                            {enquiry.mobile}
                                         </a>
                                         <span className="text-slate-500 text-xs">{enquiry.date}</span>
                                     </div>
                                 </div>
                                 <button 
                                    onClick={() => deleteEnquiry(enquiry.id)}
                                    className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-700 rounded-lg transition-colors self-end md:self-auto"
                                    title="Delete"
                                 >
                                     <Trash2 size={18} />
                                 </button>
                             </div>
                             {enquiry.message && (
                                <p className="text-slate-300 bg-slate-900/50 p-4 rounded-lg text-sm leading-relaxed border border-slate-700/50">
                                    <span className="block text-xs text-slate-500 mb-1 font-semibold uppercase">Message</span>
                                    {enquiry.message}
                                </p>
                             )}
                         </div>
                     ))}
                 </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;