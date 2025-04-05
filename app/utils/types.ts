interface Skills {
  technical: string[];
  softSkills: string[];
}
interface WorkExperience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}
interface Education {
  degreeName: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  cgpa: number;
}
interface Project {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  demoLink: string;
}
interface Certificate {
  name: string;
  link: string;
}
interface achievement {
  title: string;
  description: string;
}
interface Position {
  position: string;
  organization: string;
  duration: string;
  contributions: string;
}
interface publication {
  title: string;
  conference: string;
  authors: string;
  date: string;
  link: string;
}
interface ResumeData {
  name: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
  portfolio: string;
  location: string;
  summary: string;
  skills: Skills;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  certifications: Certificate[];
  achievements: achievement[];
  positionOfResponsibility: Position[];
  publications: publication[];
}

export default ResumeData;
