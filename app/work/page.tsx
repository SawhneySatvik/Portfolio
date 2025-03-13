import React from 'react'
import ExperienceTimeline from '../components/shared/ExperienceTimeline'
// import { TestimonialsSection } from '../components/shared/TestimonialsSection'

export default function Work() {
  return (
    <div className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light min-h-screen transition-colors duration-300">
      <div className="container mx-auto pt-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-16">Work Experience</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl leading-relaxed">
            Throughout my professional journey, I&apos;ve had the opportunity to work on diverse projects that have enhanced my skills in AI/ML development, 
            full-stack web development, and collaborative problem-solving. Below is a timeline of my professional experience.
          </p>
        </div>
        
        <ExperienceTimeline />
      </div>
      
      <div className="mt-0">
        {/* <TestimonialsSection /> */}
      </div>
    </div>
  )
}
