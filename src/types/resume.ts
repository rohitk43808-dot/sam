export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  gradeOrDetails: string;
  year: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  descriptionBullets: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  yearOrLevel?: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  level?: string;
}

export interface ResumeData {
  fullName: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  photoUrl: string;
  photoBorderColor: string;
  professionalSummary: string;
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  interests: string[];
  dateOfBirth: string;
  passportAvailability: string;
  profileDeclaration: string;
  footerTagline: string;
}

export type ViewTab = 'document' | 'showcase' | 'editor' | 'ats';
