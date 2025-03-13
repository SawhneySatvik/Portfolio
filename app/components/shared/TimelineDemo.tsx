"use client";

import EducationTimeline from './EducationTimeline';
import ExperienceTimeline from './ExperienceTimeline';

export default function TimelineDemo() {
  return (
    <div className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light min-h-screen transition-colors duration-300">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-16">My Journey</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl leading-relaxed text-center">
            Below is a timeline of my educational background and professional experience.
            The timeline showcases my journey in the field of technology and software development.
          </p>
        </div>
        
        <EducationTimeline />
        <div className="my-16"></div>
        <ExperienceTimeline />
      </div>
    </div>
  );
} 