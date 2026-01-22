import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  iconKey: string; // Changed from Component to string key for storage
}

export interface ServiceCategory {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  AI_TOOLS = 'ai-tools',
  CONTACT = 'contact',
}

export interface BrandInsightResponse {
  slogans: string[];
  strategyTip: string;
  colorPaletteSuggestion: string[];
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
    checklist: string[];
  };
  services: ServiceCategory[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}
