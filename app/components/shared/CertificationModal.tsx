"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { Certification } from '@/app/data/certifications';

interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationModal({ certification, isOpen, onClose }: CertificationModalProps) {
  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && certification && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light rounded-xl overflow-hidden shadow-2xl w-full max-w-md relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-secondary/10 dark:bg-secondary-light/10 p-2 rounded-full hover:bg-secondary/20 dark:hover:bg-secondary-light/20 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="text-secondary dark:text-secondary-light" />
            </button>

            {/* Certificate image if available */}
            {certification.image && (
              <div className="relative w-full h-48 bg-accent/10">
                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}

            {/* Certificate details */}
            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full text-accent bg-accent/10">
                  {certification.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{certification.title}</h3>
              <p className="text-sm font-medium text-accent mb-4">{certification.organization}</p>
              
              <p className="text-sm text-secondary/80 dark:text-secondary-light/80 mb-6">
                {certification.description}
              </p>
              
              {certification.link && (
                <a 
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View credential
                  <FiExternalLink className="ml-1" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 