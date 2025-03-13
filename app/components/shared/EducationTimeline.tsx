"use client";

import Timeline, { TimelineItem } from './Timeline';

// Education timeline data
const educationData: TimelineItem[] = [
  {
    logo: "/assets/logos/srm.png",
    heading: "SRM Institute of Science and Technology",
    subheading: "B.Tech in Computer Science (AI & ML)",
    explanation: "Pursuing a Bachelor's degree in Computer Science with specialization in Artificial Intelligence and Machine Learning. Focusing on advanced algorithms, neural networks, and practical AI applications.",
    timeperiod: "2022 - 2026"
  },
  {
    logo: "/assets/logos/iitm.png",
    heading: "Indian Institute of Technology, Madras",
    subheading: "BS in Data Science and Applications",
    explanation: "Enrolled in the prestigious online degree program focusing on data science fundamentals, statistical analysis, and machine learning applications. Gaining hands-on experience with real-world data projects.",
    timeperiod: "2022 - 2026"
  },
  {
    logo: "/assets/logos/school.png",
    heading: "Delhi Public School, R.K. Puram",
    subheading: "High School",
    explanation: "Completed high school education with a focus on Science and Computer Science. Developed strong foundations in mathematics, physics, and programming fundamentals. Scored 95.6% in 12th Board Exams and 96.4% in 10th Board Exams.",
    timeperiod: "2018 - 2022"
  }
];

export default function EducationTimeline() {
  return <Timeline items={educationData} title="Education" />;
} 