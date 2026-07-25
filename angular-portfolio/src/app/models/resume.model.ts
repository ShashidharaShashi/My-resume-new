export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  experienceYears: number;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  impact: string;
  techStack: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  projectsInvolved: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  year: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
