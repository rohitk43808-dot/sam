import { ResumeData } from '../types/resume';

export const initialResumeData: ResumeData = {
  fullName: 'ROHIT KUMAR',
  subtitle: 'BCA FINAL-YEAR STUDENT | TECHNICAL & DIGITAL SKILLS',
  address: 'Village Radoh, P.O. Badgaon, Teh. Jhandutta, District Bilaspur (H.P.) 174029',
  phone: '7876955140',
  email: 'rohitk43808@gmail.com',
  linkedin: 'https://linkedin.com/in/rohit-kumar-304853395',
  linkedinDisplay: 'linkedin.com/in/rohit-kumar-304853395',
  photoUrl: '/src/assets/images/rohit_kumar_portrait_1790946531527.jpg',
  photoBorderColor: '#b89552',
  professionalSummary:
    'BCA final-year student with practical knowledge of computer applications, AI tools, workflow automation, video editing and digital content creation. Familiar with MS Office, CapCut, Photoshop, Canva and Premiere Pro, with hands-on experience in AI-assisted projects and creative content production. Seeking an opportunity to apply technical skills, learn professionally and contribute effectively.',
  education: [
    {
      id: 'edu-1',
      degree: 'BCA',
      institution: 'Himachal Pradesh University (HPU)',
      gradeOrDetails: 'S.V.G.C. Ghumarwin | Final Year',
      year: 'Expected 2027',
    },
    {
      id: 'edu-2',
      degree: '12th',
      institution: 'HPBOSE',
      gradeOrDetails: '67.2%',
      year: '2022',
    },
    {
      id: 'edu-3',
      degree: '10th',
      institution: 'HPBOSE',
      gradeOrDetails: '63.7%',
      year: '2020',
    },
  ],
  skills: [
    {
      id: 'skill-1',
      category: 'MS Office',
      skills: 'Word, Excel, PowerPoint',
    },
    {
      id: 'skill-2',
      category: 'Video Editing',
      skills: 'CapCut, Adobe Premiere Pro',
    },
    {
      id: 'skill-3',
      category: 'Design',
      skills: 'Adobe Photoshop, Canva',
    },
    {
      id: 'skill-4',
      category: 'AI Tools',
      skills: 'ChatGPT, Claude, Gemini, Canva',
    },
    {
      id: 'skill-5',
      category: 'Automation',
      skills: 'Make',
    },
    {
      id: 'skill-6',
      category: 'Photography',
      skills: '',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Aethel — AI Prompt Generator',
      subtitle: 'Structured Prompt Engineering Framework',
      descriptionBullets: [
        'Designed a structured prompting framework based on Goals, Tasks, Dependencies, Parallel Paths, Decisions, Merge and Output.',
        'Helps users create clearer and more structured prompts for AI tools.',
        'Developed with AI-assisted tools including ChatGPT and Claude Artifacts.',
      ],
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'NSQF Level 4 — Automobile',
    },
    {
      id: 'cert-2',
      title: 'NCC A Certificate — 2019',
    },
    {
      id: 'cert-3',
      title: 'Rover Ranger Nipun — 2026',
    },
    {
      id: 'cert-4',
      title: '1st Position — College-Level Photography Competition',
    },
  ],
  languages: [
    { id: 'lang-1', name: 'Hindi' },
    { id: 'lang-2', name: 'Punjabi' },
    { id: 'lang-3', name: 'English — Intermediate' },
  ],
  interests: ['Photography', 'Video Editing', 'Poetry'],
  dateOfBirth: '30 May 2004',
  passportAvailability: 'available',
  profileDeclaration:
    'Technical fresher open to suitable opportunities across IT, digital, creative and general technical roles.',
  footerTagline: 'ROHIT KUMAR • TECHNICAL FRESHER',
};

export interface PortfolioWork {
  id: string;
  title: string;
  category: 'Photography' | 'Prompt Framework' | 'Video Editing' | 'Digital Creative';
  image: string;
  awardOrBadge?: string;
  description: string;
  details: string[];
}

export const portfolioWorks: PortfolioWork[] = [
  {
    id: 'work-1',
    title: 'Himalayan Ridge Sunrise',
    category: 'Photography',
    image: '/src/assets/images/himachal_landscape_photo_1790946547373.jpg',
    awardOrBadge: '1st Position — College-Level Photography Competition',
    description: 'Fine art landscape captured in Bilaspur & Ghumarwin highlands during early golden hour.',
    details: [
      'Captured natural atmospheric morning fog cutting through cedar and pine ridges.',
      'Framed at golden hour sunrise with high dynamic range and contrast balance.',
      'Selected for first prize in the annual college photography exhibition.',
    ],
  },
  {
    id: 'work-2',
    title: 'Aethel Prompt Framework',
    category: 'Prompt Framework',
    image: '/src/assets/images/aethel_ai_framework_1790946572916.jpg',
    awardOrBadge: 'Technical Project Highlight',
    description: 'Systematic architectural prompt generator built for high-reasoning LLMs.',
    details: [
      'Deconstructs multi-step requests into Goals, Tasks, Dependencies, Parallel Paths, Decisions, Merge and Output.',
      'Tested with Claude 3.5/3.7, ChatGPT-4o, and Gemini models.',
      'Reduces hallucination rate and produces deterministic task execution instructions.',
    ],
  },
  {
    id: 'work-3',
    title: 'Himachal Rural Portraits',
    category: 'Photography',
    image: '/src/assets/images/editorial_street_photo_1790946559823.jpg',
    awardOrBadge: 'Editorial Portfolio',
    description: 'Candid documentary photography focusing on authentic rural lifestyle and crafts.',
    details: [
      'Captures village life in Jhandutta and Badgaon regions with natural window light.',
      'High micro-contrast documentary style with authentic textures.',
      'Curated for cultural storytelling series.',
    ],
  },
];
