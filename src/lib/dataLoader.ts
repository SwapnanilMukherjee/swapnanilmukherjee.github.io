import yaml from 'js-yaml';

// Type definitions for our data structures
export interface Publication {
  title: string;
  authors: Array<{
    name: string;
    isYou?: boolean;
  }>;
  venue: string;
  year: number;
  description: string;
  links: {
    abstract?: string;
    pdf?: string;
    code?: string;
    bibtex?: string;
  };
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface BlogPost {
  date: string;
  category: string;
  title: string;
  slug: string;
  excerpt: string;
}

export interface TeachingPosition {
  title: string;
  institution: string;
  instructor: string;
  semester: string;
  responsibilities: string;
}

export interface ServiceItem {
  title: string;
  organization: string;
  description?: string;
  year: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export interface GalleryPhoto {
  title: string;
  filename: string;
  description: string;
}

export interface AcademicTravelEvent {
  title: string;
  photos: Array<{
    filename: string;
    description: string;
  }>;
}

// Data loading functions
export const loadPublications = async (): Promise<Record<string, Publication[]>> => {
  try {
    const response = await fetch('/src/data/publications.yaml');
    if (!response.ok) {
      throw new Error(`Failed to fetch publications: ${response.status}`);
    }
    const text = await response.text();
    console.log('Publications YAML text:', text);
    const data = yaml.load(text) as { publications: Record<string, Publication[]> };
    console.log('Parsed publications data:', data);
    console.log('Publications result:', data.publications);
    return data.publications || {};
  } catch (error) {
    console.error('Error loading publications:', error);
    return {};
  }
};

export const loadNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch('/src/data/news.yaml');
    const text = await response.text();
    console.log('News YAML text:', text);
    const data = yaml.load(text) as { news: NewsItem[] };
    console.log('Parsed news data:', data);
    console.log('News result:', data.news);
    return data.news || [];
  } catch (error) {
    console.error('Error loading news:', error);
    return [];
  }
};

export const loadBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('/src/data/blog.yaml');
    const text = await response.text();
    const data = yaml.load(text) as { posts: BlogPost[] };
    return data.posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

export const loadTeaching = async (): Promise<TeachingPosition[]> => {
  try {
    const response = await fetch('/src/data/teaching.yaml');
    const text = await response.text();
    const data = yaml.load(text) as { teaching: TeachingPosition[] };
    return data.teaching;
  } catch (error) {
    console.error('Error loading teaching data:', error);
    return [];
  }
};

export const loadService = async (): Promise<ServiceItem[]> => {
  try {
    const response = await fetch('/src/data/service.yaml');
    const text = await response.text();
    const data = yaml.load(text) as { service: ServiceItem[] };
    return data.service;
  } catch (error) {
    console.error('Error loading service data:', error);
    return [];
  }
};

export const loadAwards = async (): Promise<Award[]> => {
  try {
    const response = await fetch('/src/data/awards.yaml');
    const text = await response.text();
    const data = yaml.load(text) as { awards: Award[] };
    return data.awards;
  } catch (error) {
    console.error('Error loading awards data:', error);
    return [];
  }
};

export const loadGallery = async (): Promise<{
  photography: GalleryPhoto[];
  academic_travel: AcademicTravelEvent[];
  creative_work: GalleryPhoto[];
}> => {
  try {
    const response = await fetch('/src/data/gallery.yaml');
    const text = await response.text();
    const data = yaml.load(text) as {
      photography: GalleryPhoto[];
      academic_travel: AcademicTravelEvent[];
      creative_work: GalleryPhoto[];
    };
    return data;
  } catch (error) {
    console.error('Error loading gallery data:', error);
    return {
      photography: [],
      academic_travel: [],
      creative_work: []
    };
  }
};