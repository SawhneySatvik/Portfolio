"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/app/data/projects';
import { X } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Preload the project image when the modal is about to open
  useEffect(() => {
    if (isOpen && project) {
      const img = new window.Image();
      img.src = project.image;
    }
  }, [isOpen, project]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-secondary/10 dark:bg-secondary-light/10 p-2 rounded-full hover:bg-secondary/20 dark:hover:bg-secondary-light/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Project image */}
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 bg-accent/20 z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
              <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                {project.categories.map((category, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-accent/80 text-white">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Project content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-secondary/10 dark:bg-secondary-light/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Description</h3>
                <p className="text-secondary/80 dark:text-secondary-light/80">
                  {project.description}
                </p>
              </div>
              
              {project.keyFeatures && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-secondary/80 dark:text-secondary-light/80">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.challenges && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Challenges & Solutions</h3>
                  <p className="text-secondary/80 dark:text-secondary-light/80 mb-4">
                    {project.challenges.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-secondary/80 dark:text-secondary-light/80">
                    {project.challenges.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors inline-flex items-center"
                  >
                    <span>View Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-accent text-accent rounded-full font-medium hover:bg-accent/10 transition-colors inline-flex items-center"
                  >
                    <span>View Source Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal; 