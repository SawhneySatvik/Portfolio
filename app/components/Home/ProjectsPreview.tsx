"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "../../data/projects";
import ProjectDetailModal from "../shared/ProjectDetailModal";

export const ProjectsPreview = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);

    // Preload all project images
    featuredProjects.forEach(project => {
      const img = new window.Image();
      img.src = project.image;
    });
  }, [featuredProjects]);

  const handleNext = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <section className="py-16 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-secondary/70 dark:text-secondary-light/70 mt-4 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {isLoaded && (
            <div className="relative h-auto min-h-[400px] md:h-[400px] overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="wait"
                onExitComplete={handleAnimationComplete}
              >
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="w-full absolute top-0 left-0"
                >
                  <div
                    className="bg-secondary/5 dark:bg-secondary-light/5 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => openProjectModal(currentProject)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative bg-accent/10">
                        <div className="absolute inset-0 bg-accent/20 z-10"></div>
                        <Image
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                          {currentProject.categories.map((category, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-accent/80 text-white">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{currentProject.title}</h3>
                          <p className="text-sm sm:text-base text-secondary/80 dark:text-secondary-light/80 mb-4 sm:mb-6">
                            {currentProject.description}
                          </p>

                          <div className="mb-4 sm:mb-6">
                            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {currentProject.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary/10 dark:bg-secondary-light/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {currentProject.link && (
                            <a
                              href={currentProject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 font-medium text-xs sm:text-sm flex items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Live</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}

                          {currentProject.github && (
                            <a
                              href={currentProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary/70 dark:text-secondary-light/70 hover:text-secondary dark:hover:text-secondary-light font-medium text-xs sm:text-sm flex items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Code</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={handlePrev}
              className={`p-2 rounded-full bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20 transition-colors ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: isAnimating ? 1 : 1.1 }}
              whileTap={{ scale: isAnimating ? 1 : 0.9 }}
              aria-label="Previous project"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating || index === currentIndex) return;
                    setIsAnimating(true);
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                    ? "bg-accent"
                    : "bg-secondary/20 dark:bg-secondary-light/20 hover:bg-secondary/40 dark:hover:bg-secondary-light/40"
                    } ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label={`Go to project ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className={`p-2 rounded-full bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20 transition-colors ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: isAnimating ? 1 : 1.1 }}
              whileTap={{ scale: isAnimating ? 1 : 0.9 }}
              aria-label="Next project"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <motion.button
              className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}; 