export interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    title: "Python for Data Science",
    organization: "NPTEL",
    date: "Sep 2023",
    description: "Successfully completed a course focused on Python programming for data science applications. This course provided me with hands-on experience in data analytics and visualization using Python. Earned silver medal with a score of 78% in final exam.",
    link: "https://drive.google.com/file/d/1c6OtaQImmml4EoojygdzXDzYWTZ9h0-p/view",
    // image: "/images/certifications/aws-cert.png"
  },
  {
    title: "Programming and DSA in Python",
    organization: "NPTEL",
    date: "Feb 2024",
    description: "Completed an 8-week course covering Python programming, data structures, and algorithms. This course strengthened my problem-solving and algorithmic thinking skills, crucial for software development.",
    link: "https://drive.google.com/file/d/10eLG5H9P0PMLynqY-JJt_fri2k57-JKn/view",
    // image: ""
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    organization: "IBM",
    date: "2024",
    description: "Learnt the basics of web development with HTML, CSS, and JavaScript. Developed a basic portfolio website to showcase my skills and projects.",
    link: "https://coursera.org/share/2e0d0e88538ba5ea610edfc9c5cd09b2",
  },
  {
    title: "Getting Started with Git and GitHub",
    organization: "IBM",
    date: "2024",
    description: "",
    link: "https://coursera.org/share/4f8d0f96ceeee1291e9c60d15f154930",
    // image: "/images/certifications/azure-cert.png"
  },
  {
    title: "Introduction to Database Systems",
    organization: "NPTEL",
    date: "April 2024",
    description: "",
    link: "https://drive.google.com/file/d/1yfyhQcDfBcVNLgyg8qDIH2nwT-zLH3qi/view"
  },
  // {
  //   title: "React Developer Certification",
  //   organization: "Meta",
  //   date: "2020",
  //   description: "Certified expertise in building applications with React and related technologies in the React ecosystem.",
  //   link: "https://example.com/react-cert"
  // }
]; 