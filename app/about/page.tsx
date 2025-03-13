import React from 'react'
import EducationTimeline from '../components/shared/EducationTimeline'
import { SkillsSection } from '../components/shared/SkillsSection'

export default function AboutMe() {
  return (
    <div className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light min-h-screen transition-colors duration-300">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-16">About Me</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl leading-relaxed mb-6">
            I&apos;m Satvik Sawhney, a passionate Full-Stack AI/ML Developer with a strong foundation in both frontend and backend technologies. 
            My journey in technology began with a curiosity about how computers work and evolved into a deep interest in artificial intelligence and machine learning.
          </p>
          <p className="text-xl leading-relaxed">
            I enjoy solving complex problems and building intelligent applications that make a positive impact. 
            My goal is to bridge the gap between cutting-edge AI research and practical, user-friendly applications.
          </p>
        </div>
        
        <EducationTimeline />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
    </div>
  )
}
