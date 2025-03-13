export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Developer at TechCorp",
    content: "Satvik is an exceptional developer with a keen eye for detail. His ability to solve complex problems while maintaining clean, efficient code is remarkable. Working with him on our AI project was a pleasure, and his contributions significantly improved our product.",
    avatar: "/assets/testimonials/avatar1.png"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Product Manager at DataViz",
    content: "I had the opportunity to work with Satvik on a challenging data visualization project. His technical expertise combined with his understanding of user experience made him an invaluable team member. He consistently delivered high-quality work ahead of schedule.",
    avatar: "/assets/testimonials/avatar2.png"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO at AI Innovations",
    content: "Satvik's knowledge of machine learning algorithms and their practical applications is impressive. He quickly grasped our business requirements and implemented solutions that exceeded our expectations. His passion for technology and continuous learning sets him apart.",
    avatar: "/assets/testimonials/avatar3.png"
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Lead Engineer at WebSolutions",
    content: "Collaborating with Satvik was a fantastic experience. His full-stack skills allowed him to contribute meaningfully to both frontend and backend aspects of our project. He's not just technically proficient but also a great communicator and team player.",
    avatar: "/assets/testimonials/avatar4.png"
  },
  {
    id: 5,
    name: "Raj Patel",
    role: "Data Science Director at AnalyticsPro",
    content: "Satvik's approach to problem-solving is methodical and innovative. During our project, he developed a custom algorithm that improved our data processing efficiency by 40%. His ability to translate complex technical concepts into accessible explanations was particularly valuable.",
    avatar: "/assets/testimonials/avatar5.png"
  }
]; 