export interface Project {
  name: string;
  technologies: string;
  description: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  skills: Array<{
    name: string;
    link: string;
  }>;
}

export interface PersonalInfo {
  name: string;
  telegram: string;
  email: string;
  github: string;
  desiredSalary: string;
}
