export interface ChatbotResponse {
  keywords: string[];
  response: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello! I'm Satvik's portfolio assistant. How can I help you today?",
  },
  {
    keywords: ["who", "about", "satvik", "yourself"],
    response: "Satvik Sawhney is a software engineer with expertise in full-stack development, machine learning, and cloud technologies. He's passionate about building innovative solutions that solve real-world problems.",
  },
  {
    keywords: ["experience", "work", "job", "career"],
    response: "Satvik has experience working with various companies and on numerous projects. His professional journey includes roles in software development, data science, and cloud engineering. He's worked on projects ranging from web applications to machine learning models.",
  },
  {
    keywords: ["education", "study", "university", "college", "degree"],
    response: "Satvik has a strong educational background in Computer Science, with a focus on software engineering and artificial intelligence. He's continuously learning and staying updated with the latest technologies and industry trends.",
  },
  {
    keywords: ["skills", "technologies", "tech stack", "programming", "languages"],
    response: "Satvik is proficient in various technologies including JavaScript/TypeScript, React, Next.js, Node.js, Python, and cloud platforms like AWS. He also has experience with machine learning frameworks and database technologies.",
  },
  {
    keywords: ["projects", "portfolio", "work", "applications"],
    response: "Satvik has worked on various projects including web applications, machine learning models, and cloud-based solutions. You can explore his projects in detail on the Projects page of this portfolio.",
  },
  {
    keywords: ["contact", "reach", "email", "message", "connect"],
    response: "You can contact Satvik through the Contact page on this portfolio. He's open to collaboration opportunities, project inquiries, or just connecting with fellow developers.",
  },
  {
    keywords: ["hobbies", "interests", "free time", "passion"],
    response: "Beyond coding, Satvik enjoys exploring new technologies, contributing to open-source projects, and staying active in the developer community. He's passionate about using technology to create positive impact.",
  },
  {
    keywords: ["github", "code", "repository", "source"],
    response: "You can check out Satvik's code and projects on his GitHub profile. The link is available in the social media section of this portfolio.",
  },
  {
    keywords: ["linkedin", "social", "professional", "network"],
    response: "Satvik maintains an active LinkedIn profile where you can connect with him professionally. The link is available in the social media section of this portfolio.",
  },
  {
    keywords: ["resume", "cv", "curriculum"],
    response: "You can view or download Satvik's resume from this portfolio website. It contains detailed information about his skills, experience, and education.",
  },
  {
    keywords: ["thanks", "thank you", "appreciate"],
    response: "You're welcome! If you have any more questions about Satvik or his work, feel free to ask. I'm here to help!",
  },
  {
    keywords: ["bye", "goodbye", "see you", "farewell"],
    response: "Goodbye! Feel free to return if you have more questions about Satvik's portfolio. Have a great day!",
  },
]; 