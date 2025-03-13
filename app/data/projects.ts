export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  link?: string;
  github?: string;
  featured: boolean;
  keyFeatures?: string[];
  challenges?: {
    description: string;
    solutions: string[];
  };
}

export const projects: Project[] = [
  {
    id: "fintracker",
    title: "FinTracker: Personal Financial Management App",
    description:
      "An iOS app built during the Swift Student Coding Challenge 2025 for first-time budgeters. It focuses on expense tracking, budgeting, and goal setting with offline support via CoreData. A CRF-based ML model classifies expense names to automate categorization.",
    image: "/assets/projects/fintracker.png",
    technologies: [
      "SwiftUI",
      "CreateML",
      "CoreML",
      "SwiftCharts",
      "Swift Playgrounds",
      "XCode",
      "CoreData"
    ],
    categories: ["App Development", "AI/ML"],
    github: "https://github.com/SawhneySatvik",
    featured: true,
    keyFeatures: [
      "Expense tracking and budgeting",
      "Goal setting and progress monitoring",
      "ML-driven expense categorization",
      "Offline functionality using CoreData"
    ],
    challenges: {
      description:
        "Automating expense categorization using machine learning posed challenges in ensuring accuracy and real-time performance.",
      solutions: [
        "Implemented a CRF model for precise classification",
        "Integrated CoreML with SwiftUI seamlessly",
        "Optimized offline data handling with CoreData"
      ]
    }
  },
  {
    id: "edumate",
    title: "EduMate: Online Assessment App",
    description:
      "An automated assessment platform developed for VOPA — Code For Good 2024 by J.P. Morgan Chase & Co. It conducts FLN tests for grades 1-5 by analyzing voice inputs to assess fluency and basic mathematics proficiency.",
    image: "/assets/projects/edumate.png",
    technologies: [
      "ReactJS",
      "Java",
      "SpringBoot",
      "PostgreSQL",
      "Tailwind CSS",
      "Material UI"
    ],
    categories: ["AI/ML", "Web Development"],
    github: "https://github.com/SawhneySatvik",
    featured: true,
    keyFeatures: [
      "Automated foundational literacy and numeracy tests",
      "Voice analysis for fluency evaluation",
      "Responsive and modern UI design",
      "Robust backend with SpringBoot"
    ],
    challenges: {
      description:
        "Achieving high accuracy in voice analysis for young learners was challenging.",
      solutions: [
        "Implemented dedicated voice analysis algorithms",
        "Optimized backend performance using SpringBoot",
        "Integrated responsive UI components with React"
      ]
    }
  },
  {
    id: "lawyer-up",
    title: "Lawyer Up: Legal ChatBot",
    description:
      "A legal advice chatbot built for the Google Solution Challenge 2024. The web-based platform leverages the Gemini-Pro model trained via Google AI Studio to provide on-demand legal insights.",
    image: "/assets/projects/lawyerup.png",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini-Pro", "Google AI Studio"],
    categories: ["AI/ML", "Web Development"],
    link: "https://sawhneysatvik.github.io/LawyerUp",
    github: "https://github.com/SawhneySatvik/LawyerUp",
    featured: true,
    keyFeatures: [
      "On-demand legal advice",
      "Chatbot integrated within a responsive website",
      "Trained using cutting-edge AI models"
    ],
    challenges: {
      description:
        "Training the chatbot to understand legal contexts and respond accurately was complex.",
      solutions: [
        "Leveraged Google AI Studio for model training",
        "Optimized conversational flows for legal queries",
        "Ensured seamless web integration"
      ]
    }
  },
  {
    id: "ask-your-pdf",
    title: "Ask Your PDF: Generative AI Chat Interface",
    description:
      "A Python web application built with Streamlit that lets users upload PDFs and interact via a chat interface. It integrates OpenAI's Ada-2 for embeddings and uses FAISS for fast similarity search.",
    image: "/assets/projects/askyourpdf.jpg",
    technologies: [
      "Python",
      "Streamlit",
      "OpenAI ChatGPT 3.5",
      "Ada-2",
      "FAISS",
      "Langchain"
    ],
    categories: ["AI/ML", "Web Development"],
    github: "https://github.com/SawhneySatvik/GenAIandLLM",
    featured: true,
    keyFeatures: [
      "Real-time PDF processing",
      "Conversational AI interface",
      "Similarity search using FAISS",
      "Seamless integration of ML models"
    ],
    challenges: {
      description:
        "Ensuring real-time responsiveness when processing large documents was challenging.",
      solutions: [
        "Optimized embedding generation using Ada-2",
        "Implemented FAISS for efficient similarity search",
        "Leveraged Streamlit for rapid prototyping"
      ]
    }
  },
  {
    id: "unibuddy",
    title: "UniBuddy: Student Management System",
    description:
      "A comprehensive student management system developed as part of a college course in Java. The project demonstrates end-to-end development using Java, JDBC, and MySQL for robust data management.",
    image: "/assets/projects/unibuddy.jpg",
    technologies: ["Java", "MySQL"],
    categories: ["Others"],
    github: "https://github.com/SawhneySatvik/UniBuddy-Java",
    featured: true,
    keyFeatures: [
      "Complete student management solution",
      "Robust JDBC integration",
      "End-to-end frontend and backend development"
    ],
    challenges: {
      description:
        "Integrating a seamless frontend with a robust backend posed several challenges.",
      solutions: [
        "Leveraged Java for backend robustness",
        "Implemented JDBC for reliable database connectivity",
        "Ensured user-friendly interface design"
      ]
    }
  },
  {
    id: "bryha-website",
    title: "Bryha Website",
    description:
      "A Next.js-based web application built as a freelancing project. The website features TypeScript, Tailwind CSS, and automatic font optimization, and is deployed on Vercel for seamless performance.",
    image: "/assets/projects/bryhalogistics.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Web Development"],
    link: "https://brhya-client.vercel.app",
    github: "https://github.com/SawhneySatvik/Bryha-Client",
    featured: true,
    keyFeatures: [
      "Modern Next.js features and optimizations",
      "Responsive and clean design",
      "Automatic font optimization",
      "Easy deployment via Vercel"
    ],
    challenges: {
      description:
        "Balancing performance with a rich, modern UI was a key challenge.",
      solutions: [
        "Optimized Next.js configurations",
        "Leveraged Tailwind CSS for rapid styling",
        "Utilized Vercel's deployment pipeline"
      ]
    }
  },
  {
    id: "on-the-move",
    title: "On The Move: Ride-Sharing Platform",
    description:
      "A ride-sharing app enabling users to offer or join rides for cost-effective travel. It includes real-time ride management, user authentication, in-app messaging, and interactive maps.",
    image: "/assets/projects/on-the-move.jpg",
    technologies: [
      "Swift",
      "Python",
      "Flask",
      "SQLite",
      "Xcode",
      "UIKit",
      "MapKit"
    ],
    categories: ["App Development"],
    github: "https://github.com/SawhneySatvik",
    featured: true,
    keyFeatures: [
      "User authentication and profile management",
      "Real-time ride creation and search",
      "In-app chat and notifications",
      "Interactive map integration"
    ],
    challenges: {
      description:
        "Synchronizing real-time ride data and ensuring a smooth user experience was challenging.",
      solutions: [
        "Integrated Flask for backend API",
        "Utilized SQLite for lightweight storage",
        "Implemented MapKit for precise location services"
      ]
    }
  },
  {
    id: "automation-agent",
    title: "Automation Agent: Intelligent Task Parsing",
    description:
      "An automation tool that leverages Generative AI and LLMs to convert natural language tasks into actionable automation steps. Built with FastAPI, Docker, and the OpenAI API.",
    image: "/assets/projects/automation-agent.jpg",
    technologies: ["Python", "FastAPI", "OpenAI API", "Docker"],
    categories: ["AI/ML"],
    github: "https://github.com/SawhneySatvik",
    featured: true,
    keyFeatures: [
      "Intelligent task parsing and execution",
      "Multilingual task handling",
      "Modular task handlers",
      "Dockerized deployment for scalability"
    ],
    challenges: {
      description:
        "Parsing diverse and variably phrased tasks accurately was a significant hurdle.",
      solutions: [
        "Integrated an LLM for contextual understanding",
        "Developed a fallback heuristic parser",
        "Modularized task handlers for easier scalability"
      ]
    }
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description:
      "An interactive quiz application designed to engage users with dynamic questions and real-time feedback. The app features adaptive difficulty and a user-friendly interface.",
    image: "/assets/projects/quiz-master.jpg",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["Web Development"],
    github: "https://github.com/SawhneySatvik",
    featured: false,
    keyFeatures: [
      "Dynamic quiz generation",
      "Real-time scoring and feedback",
      "Responsive and engaging UI"
    ],
    challenges: {
      description:
        "Designing quizzes that are both engaging and balanced required iterative refinement.",
      solutions: [
        "Implemented adaptive difficulty algorithms",
        "Conducted iterative user testing",
        "Designed a clean and intuitive UI"
      ]
    }
  },
  {
    id: "reachify",
    title: "Reachify",
    description:
      "A communication and engagement platform aimed at enhancing connectivity through real-time messaging and notifications. It focuses on boosting user engagement through intuitive design and analytics.",
    image: "/assets/projects/placeholder-project.png",
    technologies: ["React", "Node.js", "Firebase"],
    categories: ["Web Development"],
    github: "https://github.com/SawhneySatvik",
    featured: false,
    keyFeatures: [
      "Real-time messaging system",
      "Robust notification service",
      "User engagement analytics"
    ],
    challenges: {
      description:
        "Scaling the real-time communication system to handle growing user demands was challenging.",
      solutions: [
        "Leveraged WebSocket protocols for efficiency",
        "Optimized backend performance",
        "Integrated analytics for monitoring engagement"
      ]
    }
  },
  {
    id: "finance-app",
    title: "Finance App",
    description:
      "A comprehensive finance management application in development to help users track expenses, set budgets, and achieve financial goals. The app aims to provide actionable insights and intuitive visualizations.",
    image: "/assets/projects/finance-app.jpg",
    technologies: ["React Native", "Node.js", "MongoDB"],
    categories: ["Web Development", "App Development"],
    github: "https://github.com/SawhneySatvik",
    featured: false,
    keyFeatures: [
      "Expense tracking and budgeting",
      "Financial goal setting",
      "Data visualization and analytics"
    ],
    challenges: {
      description:
        "Integrating diverse financial data sources and presenting them in an intuitive manner posed significant challenges.",
      solutions: [
        "Designed robust API endpoints",
        "Implemented user-friendly UI components",
        "Integrated advanced data visualization tools"
      ]
    }
  }
];
