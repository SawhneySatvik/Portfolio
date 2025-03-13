"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';
import Link from 'next/link';
import { Button } from '../ui/button';
import { achievements } from '@/app/data/achievements';

export default function AchievementsPreview() {
  // Get the first 3 achievements (preferably from special programs)
  const previewAchievements = achievements
    .filter(a => a.category === 'program')
    .slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-10 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notable Achievements</h2>
          <p className="text-lg text-secondary/70 dark:text-secondary-light/70 max-w-2xl mx-auto">
            A glimpse of my recognitions and special programs I&apos;ve been part of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewAchievements.map((achievement, index) => (
            <motion.div
              key={`achievement-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-secondary/5 dark:bg-secondary-light/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30"
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  {achievement.category === 'program' ? (
                    <FiAward className="text-accent text-xl" />
                  ) : (
                    <GiTrophy className="text-accent text-xl" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              
              <p className="text-secondary/70 dark:text-secondary-light/70 mb-4 line-clamp-3">
                {achievement.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-accent font-medium">
                  {achievement.date}
                </span>
                {achievement.link && (
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 flex items-center gap-1 text-sm"
                  >
                    View <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <Link href="/achievements">
            <Button className="text-lg">
              View All Achievements
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 