export type ProjectStatus = 'completed' | 'ongoing' | 'development';

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

export interface Project {
  title: string;
  thumbnail: string;
  description: string;
  role: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  purchaseUrl?: string;
  features: string[];
  gallery: GalleryItem[];
  challenges: string[];
  teamSize?: number;
  achievements: string[];
}