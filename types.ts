import React from 'react';

export interface Specialty {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProjectDetails {
  role: string;
  duration: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  scrollEffect?: boolean;
  details?: ProjectDetails;
}