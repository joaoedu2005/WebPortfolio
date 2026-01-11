export interface Specialty {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  scrollEffect?: boolean;
}