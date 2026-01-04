import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
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