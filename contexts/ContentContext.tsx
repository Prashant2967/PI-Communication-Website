import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, Enquiry, ServiceCategory } from '../types';

// Default Data with "Offline" moved above "Digital" and relevant images
const defaultContent: SiteContent = {
  hero: {
    title: "IGNORE THE NOISE.",
    subtitle: "We build brands people actually remember.",
    description: "PI Communication is an idea-first studio. We don't just sell services; we architect culture. From the streets to the screens, we make you impossible to ignore.",
    // Indian Street/Market vibe - Busy, chaotic, representing the 'Noise' to cut through
    image: "https://images.unsplash.com/photo-1533000758368-6d8b02221b6e?auto=format&fit=crop&q=80&w=1600" 
  },
  about: {
    title: "Small Team.\nDangerous Ideas.",
    description: "Most agencies are factories. We are a lab. We believe that a single strong idea is worth more than a thousand mediocre ads. We strip away the corporate fluff to find the raw truth of your business, then we amplify it until the world listens.",
    // Authentic Indian creative collaboration
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1600",
    checklist: [
      "No Filler",
      "No Middlemen",
      "Pure Impact"
    ]
  },
  services: [
    {
      title: "The Physical World",
      description: "Tangible, undeniable, and right in their face.",
      items: [
        { title: "OOH & Billboards", description: "Dominating the skyline.", iconKey: "Map" },
        { title: "Transit Media", description: "Moving your message.", iconKey: "Truck" },
        { title: "Print & Guerrilla", description: "Tactile brand experiences.", iconKey: "Printer" },
      ]
    },
    {
      title: "Strategy & Identity",
      description: "The brain before the beauty.",
      items: [
        { title: "Brand Identity", description: "Visual language that speaks.", iconKey: "PenTool" },
        { title: "Positioning", description: "Finding your blue ocean.", iconKey: "Map" },
      ]
    },
    {
      title: "The Digital Space",
      description: "Where conversation happens.",
      items: [
        { title: "Performance", description: "Ads that actually convert.", iconKey: "Megaphone" },
        { title: "Web Experiences", description: "Digital flagships.", iconKey: "Globe" },
        { title: "Social Culture", description: "Building communities.", iconKey: "Layout" },
      ]
    }
  ],
  contact: {
    email: "mayank@picommunication.com",
    phone: "+91 82230 69997",
    address: "Near Anandam world city, kachna, raipur (CG) - 492001"
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
      // Merge saved content with default structure
      const parsed = JSON.parse(savedContent);
      
      const mergedServices = defaultContent.services.map((defService, index) => {
        const savedService = parsed.services?.[index];
        return {
          ...defService,
          ...savedService,
        };
      });
      
      setContent({
        ...defaultContent,
        ...parsed,
        services: mergedServices
      });
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