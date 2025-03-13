"use client";

import Timeline, { TimelineItem } from './Timeline';

// Experience timeline data
const experienceData: TimelineItem[] = [
  {
    logo: "/assets/logos/barclays.png",
    heading: "Barclays",
    subheading: "Technology Summer Intern",
    explanation: "",
    timeperiod: "June 2025 - August 2025"
  },
  {
    logo: "/assets/logos/infosys.png",
    heading: "Infosys",
    subheading: "SDE Intern",
    explanation: "",
    timeperiod: "April 2024 - May 2024"
  },
  {
    logo: "/assets/logos/company3.png",
    heading: "Bryha Logistics",
    subheading: "Software Developer",
    explanation: "Developed a web application for a logistics company using React, Node.js, and MongoDB. Implemented responsive designs and integrated third-party APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    timeperiod: "August 2024 - December 2024"
  }
];

export default function ExperienceTimeline() {
  return <Timeline items={experienceData} title="Experience" />;
} 