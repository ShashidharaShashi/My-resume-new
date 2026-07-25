export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  summary: string;
  bulletPoints: string[];
  techStack: string[];
  keyMetrics?: { label: string; value: string; detail: string }[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    featured?: boolean;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  impactMetric: string;
  companyName: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  badgeType: 'sparkler' | 'achiever' | 'hackathon';
  projectsInvolved: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  experienceYears: number;
}
