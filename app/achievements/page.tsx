"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiExternalLink, FiBookOpen, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';
import { achievements } from '../data/achievements';
import { certifications, Certification } from '../data/certifications';
import CertificationModal from '../components/shared/CertificationModal';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState<string>('program');
  const [currentPage, setCurrentPage] = useState(1);
  const achievementsPerPage = 4;
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter achievements based on active category
  const filteredAchievements = achievements.filter(achievement => achievement.category === activeCategory);

  // Calculate pagination
  const indexOfLastAchievement = currentPage * achievementsPerPage;
  const indexOfFirstAchievement = indexOfLastAchievement - achievementsPerPage;
  const currentAchievements = filteredAchievements.slice(indexOfFirstAchievement, indexOfLastAchievement);
  const totalPages = Math.ceil(filteredAchievements.length / achievementsPerPage);

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for individual achievement cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'program':
        return <FiAward size={24} />;
      case 'hackathon':
        return <GiTrophy size={24} />;
      default:
        return <FiStar size={24} />;
    }
  };

  // Pagination functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to top of achievements section
      document.getElementById('achievements-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to top of achievements section
      document.getElementById('achievements-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open certification modal
  const openCertificationModal = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  // Close certification modal
  const closeCertificationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light min-h-screen transition-colors duration-300">
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Certifications
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-secondary-light/70">
            A collection of my professional accomplishments, awards, and certifications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Sidebar / Category Tabs */}
          <motion.div
            className="lg:w-1/4 flex flex-row lg:flex-col gap-2 md:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveCategory('program')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${activeCategory === 'program'
                ? 'bg-accent text-primary font-medium'
                : 'bg-secondary/5 dark:bg-secondary-light/5 hover:bg-secondary/10 dark:hover:bg-secondary-light/10'
                }`}
            >
              <FiAward className={activeCategory === 'program' ? 'text-primary' : 'text-accent'} />
              <span>Special Programs</span>
            </button>

            <button
              onClick={() => setActiveCategory('hackathon')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${activeCategory === 'hackathon'
                ? 'bg-accent text-primary font-medium'
                : 'bg-secondary/5 dark:bg-secondary-light/5 hover:bg-secondary/10 dark:hover:bg-secondary-light/10'
                }`}
            >
              <GiTrophy className={activeCategory === 'hackathon' ? 'text-primary' : 'text-accent'} />
              <span>Hackathons</span>
            </button>

            <button
              onClick={() => setActiveCategory('other')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${activeCategory === 'other'
                ? 'bg-accent text-primary font-medium'
                : 'bg-secondary/5 dark:bg-secondary-light/5 hover:bg-secondary/10 dark:hover:bg-secondary-light/10'
                }`}
            >
              <FiStar className={activeCategory === 'other' ? 'text-primary' : 'text-accent'} />
              <span>Other Achievements</span>
            </button>
          </motion.div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              id="achievements-section"
              className="lg:w-3/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                  {activeCategory === 'program' && (
                    <>
                      <FiAward className="text-accent" />
                      <span>Special Programs</span>
                    </>
                  )}
                  {activeCategory === 'hackathon' && (
                    <>
                      <GiTrophy className="text-accent" />
                      <span>Hackathons</span>
                    </>
                  )}
                  {activeCategory === 'other' && (
                    <>
                      <FiStar className="text-accent" />
                      <span>Other Achievements</span>
                    </>
                  )}
                </h2>
                <p className="text-secondary/70 dark:text-secondary-light/70 mt-2">
                  {activeCategory === 'program' && 'Exclusive programs and communities I was selected to join.'}
                  {activeCategory === 'hackathon' && 'Competitions where I built innovative solutions under time constraints.'}
                  {activeCategory === 'other' && 'Additional accomplishments and recognition from various sources.'}
                </p>
              </motion.div>

              {/* Achievements Grid */}
              <motion.div
                className="grid grid-cols-1 gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentAchievements.map((achievement, index) => (
                  <motion.div
                    key={`${achievement.title}-${index}`}
                    variants={itemVariants}
                    className="rounded-xl border border-secondary/10 dark:border-secondary-light/10 bg-secondary/5 dark:bg-secondary-light/5 hover:bg-secondary/10 dark:hover:bg-secondary-light/10 p-4 md:p-6 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-accent/10 text-accent shadow-md">
                        {getCategoryIcon(achievement.category)}
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-lg md:text-xl font-bold">{achievement.title}</h3>
                          <span className="text-xs md:text-sm font-medium px-3 py-1 rounded-full inline-flex items-center text-accent bg-accent/10 w-fit">
                            {achievement.date}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm font-medium mt-1 text-accent">
                          {achievement.organization}
                        </p>

                        <p className="mt-2 md:mt-3 text-sm md:text-base text-secondary/80 dark:text-secondary-light/80">
                          {achievement.description}
                        </p>

                        {achievement.link && (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 md:mt-4 inline-flex items-center text-xs md:text-sm font-medium text-accent hover:underline"
                          >
                            Learn more
                            <FiExternalLink className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 gap-4">
                  <motion.button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full flex items-center justify-center ${currentPage === 1
                      ? 'text-secondary/30 dark:text-secondary-light/30 cursor-not-allowed'
                      : 'bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20'
                      }`}
                    whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="text-sm md:text-base">
                    Page {currentPage} of {totalPages}
                  </div>

                  <motion.button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full flex items-center justify-center ${currentPage === totalPages
                      ? 'text-secondary/30 dark:text-secondary-light/30 cursor-not-allowed'
                      : 'bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20'
                      }`}
                    whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                    whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16 md:mt-24 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <FiBookOpen className="text-accent text-sm md:text-base" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </div>

          <p className="text-lg md:text-xl mb-8 md:mb-12 text-secondary/70 dark:text-secondary-light/70 max-w-4xl">
            Professional certifications that validate my expertise in various technologies and domains.
          </p>

          {/* Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((certification, index) => (
              <motion.div
                key={`${certification.title}-${index}`}
                variants={itemVariants}
                className="rounded-xl border border-secondary/10 dark:border-secondary-light/10 bg-secondary/5 dark:bg-secondary-light/5 p-4 md:p-6 hover:bg-secondary/10 dark:hover:bg-secondary-light/10 transition-all duration-300 cursor-pointer"
                onClick={() => openCertificationModal(certification)}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-3 md:mb-4">
                    <span className="text-xs md:text-sm font-medium px-3 py-1 rounded-full text-accent bg-accent/10">
                      {certification.date}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{certification.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-accent mb-3 md:mb-4">{certification.organization}</p>
                  <p className="text-sm md:text-base text-secondary/80 dark:text-secondary-light/80 flex-grow line-clamp-3">
                    {certification.description}
                  </p>
                  <div className="mt-3 md:mt-4 inline-flex items-center text-xs md:text-sm font-medium text-accent">
                    View details
                    <FiExternalLink className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={closeCertificationModal}
      />
    </div>
  );
}
