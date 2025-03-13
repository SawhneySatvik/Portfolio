export interface Technology {
  name: string;
  icon: string;
  category: string;
}

export const categories = [
  "Frontend",
  "Backend",
  "AI/ML",
  "Databases",
  "DevOps",
  "Other"
];

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    icon: "/assets/skills/reactjs.png",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "/assets/skills/nextjs.png",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: "/assets/skills/typescript.png",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/skills/tailwind.png",
    category: "Frontend"
  },
  {
    name: "HTML",
    icon: "/assets/skills/html.png",
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: "/assets/skills/css.png",
    category: "Frontend"
  },
  
  // Backend
  {
    name: "Node.js",
    icon: "/assets/skills/nodejs.png",
    category: "Backend"
  },
  {
    name: "Express",
    icon: "/assets/skills/expressjs.png",
    category: "Backend"
  },
  {
    name: "Python",
    icon: "/assets/skills/python.png",
    category: "Backend"
  },
  {
    name: "Java",
    icon: "/assets/skills/java.png",
    category: "Backend"
  },
  {
    name: "FastAPI",
    icon: "/assets/skills/fastapi.png",
    category: "Backend"
  },
  
  // AI/ML
  {
    name: "TensorFlow",
    icon: "/assets/skills/tensorflow.png",
    category: "AI/ML"
  },
  {
    name: "PyTorch",
    icon: "/assets/skills/pytorch.png",
    category: "AI/ML"
  },
  {
    name: "Scikit-learn",
    icon: "/assets/skills/scikit.png",
    category: "AI/ML"
  },
  {
    name: "Pandas",
    icon: "/assets/skills/pandas.png",
    category: "AI/ML"
  },
  {
    name: "NumPy",
    icon: "/assets/skills/numpy.png",
    category: "AI/ML"
  },
  
  // Databases
  {
    name: "MongoDB",
    icon: "/assets/skills/mongodb.png",
    category: "Databases"
  },
  {
    name: "PostgreSQL",
    icon: "/assets/skills/postgresql.png",
    category: "Databases"
  },
  {
    name: "MySQL",
    icon: "/assets/skills/mysql.png",
    category: "Databases"
  },
  {
    name: "Redis",
    icon: "/assets/skills/redis.png",
    category: "Databases"
  },
  
  // DevOps
  {
    name: "Docker",
    icon: "/assets/skills/docker.png",
    category: "DevOps"
  },
  {
    name: "Kubernetes",
    icon: "/assets/skills/kubernetes.png",
    category: "DevOps"
  },
  {
    name: "AWS",
    icon: "/assets/skills/aws.png",
    category: "DevOps"
  },
  {
    name: "Git",
    icon: "/assets/skills/git.png",
    category: "DevOps"
  },
  {
    name: "GitHub Actions",
    icon: "/assets/skills/github.png",
    category: "DevOps"
  },
  
  // Other
  {
    name: "GraphQL",
    icon: "/assets/skills/graphql.png",
    category: "Other"
  },
  {
    name: "REST API",
    icon: "/assets/skills/api.png",
    category: "Other"
  },
  {
    name: "Figma",
    icon: "/assets/skills/figma.png",
    category: "Other"
  }
]; 