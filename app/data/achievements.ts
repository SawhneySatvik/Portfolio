export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
  category: 'hackathon' | 'program' | 'other';
}

export const achievements: Achievement[] = [
  // Hackathons
  {
    title: "Code For Good 2024",
    organization: "J.P. Morgan Chase",
    date: "June 2024",
    description: "Developed an automated assessment platform developed for Vowels of The People Assoociation. It conducts FLN tests for grades 1-5 by analyzing voice inputs to assess fluency and basic mathematics proficiency.",
    // link: "https://example.com/hackathon1",
    category: "hackathon"
  },
  {
    title: "Solution Challenge - 2024",
    organization: "Google",
    date: "March 2024",
    description: "Developed a legal advice chatbot built for the Google Solution Challenge 2024. The web-based platform leverages the Gemini-Pro model trained via Google AI Studio to provide on-demand legal insights.",
    // link: "https://example.com/hackathon2",
    category: "hackathon"
  },
  
  // Special Programs
  {
    title: "Machine Learning Summer School 2024",
    organization: "Amazon",
    date: "July 2024",
    description: "Selected for Amazon ML Summer School 2024, an invite-only program designed for top engineering students across India. The selection process involved clearing an assessment testing foundational knowledge in Machine Learning, Data Science, and related mathematical concepts.",
    // link: "https://example.com/program1",
    category: "program"
  },
  {
    title: "iOS Developer Program",
    organization: "Apple and Infosys",
    date: "August 2024 - Present",
    description: "Recognized for contributions to the AWS community through open-source projects, technical blog posts, and community engagement.",
    // link: "https://example.com/program2",
    category: "program"
  },
  
  // Other Achievements
  {
    title: "Technical Team Lead",
    organization: "Ramanujan Mathematics Club",
    date: "2022 - Present",
    description: "Active contributor to TensorFlow, with multiple accepted pull requests improving documentation and adding new features.",
    // link: "https://example.com/opensource",
    category: "other"
  },
  {
    title: "Technical Team Lead",
    organization: "GDG On Campus, Google",
    date: "July 2023 - present",
    description: "Co-authored a research paper on novel approaches to federated learning in resource-constrained environments.",
    // link: "https://example.com/paper",
    category: "other"
  }
]; 