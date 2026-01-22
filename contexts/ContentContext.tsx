import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, Enquiry, ServiceCategory } from '../types';

// Default Data with "Offline" moved above "Digital" and relevant images
const defaultContent: SiteContent = {
  hero: {
    title: "We Build Brands That Last.",
    subtitle: "Scaling brands from Zero to One",
    description: "PI Communication is a full-service agency dedicated to crafting compelling identities and executing precision marketing strategies. From offline roots to digital heights, we handle it all.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  about: {
    title: "More Than Just An Agency. We Are Brand Architects.",
    description: "At PI Communication, we believe every business has a unique story waiting to be told. We don't just sell services; we build identities. From the initial spark of a logo to the widespread reach of a billboard or a viral social campaign, we are with you at every step.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    checklist: [
      "End-to-End Brand Management",
      "Data-Driven Digital Strategies",
      "High-Impact Offline Presence",
      "Dedicated Growth Partners"
    ]
  },
  services: [
    {
      title: "Brand Strategy & Identity",
      description: "We define your voice and visualize your values to create a lasting impression.",
      items: [
        { title: "Brand Identity", description: "Logo, Typography, Color Palette", iconKey: "PenTool" },
        { title: "Strategy Creation", description: "Market Research, Positioning, Voice", iconKey: "Map" },
      ]
    },
    {
      title: "Offline / On-Ground",
      description: "Tangible marketing that reaches people where they are.",
      items: [
        { title: "Road Advertisements", description: "Billboards & Hoardings", iconKey: "Map" },
        { title: "Transit Media", description: "Auto Rickshaw & Railway Ads", iconKey: "Truck" },
        { title: "Print Promotions", description: "Pamphlets & Flyers", iconKey: "Printer" },
      ]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to dominate the digital landscape.",
      items: [
        { title: "SEO", description: "Ranking high on search engines", iconKey: "TrendingUp" },
        { title: "Website Building", description: "High-performance, responsive sites", iconKey: "Globe" },
        { title: "Social Media", description: "Community management & growth", iconKey: "Layout" },
        { title: "Performance Marketing", description: "Paid ads that convert", iconKey: "Megaphone" },
      ]
    }
  ],
  contact: {
    email: "hello@picommunication.com",
    phone: "+91 98765 43210",
    address: "123 Creative Tower, Tech Hub District, Mumbai, India"
  }
};

interface ContentContextType {
  content: SiteContent;
  enquiries: Enquiry[];
  updateContent: (newContent: SiteContent) => void;
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'date'>) => void;
  deleteEnquiry: (id: string) => void;
  resetToDefault: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  // Load from Local Storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    const savedEnquiries = localStorage.getItem('siteEnquiries');

    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    if (savedEnquiries) {
      setEnquiries(JSON.parse(savedEnquiries));
    }
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  const addEnquiry = (data: Omit<Enquiry, 'id' | 'date'>) => {
    const newEnquiry: Enquiry = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    };
    const updatedEnquiries = [newEnquiry, ...enquiries];
    setEnquiries(updatedEnquiries);
    localStorage.setItem('siteEnquiries', JSON.stringify(updatedEnquiries));
  };

  const deleteEnquiry = (id: string) => {
    const updated = enquiries.filter(e => e.id !== id);
    setEnquiries(updated);
    localStorage.setItem('siteEnquiries', JSON.stringify(updated));
  };

  const resetToDefault = () => {
    setContent(defaultContent);
    localStorage.setItem('siteContent', JSON.stringify(defaultContent));
  }

  return (
    <ContentContext.Provider value={{ content, enquiries, updateContent, addEnquiry, deleteEnquiry, resetToDefault }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};