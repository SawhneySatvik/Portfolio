"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { technologies, Technology } from "../../data/skills";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

export const SkillsPreview = () => {
  // Get a random selection of skills from different categories
  const getRandomSkills = (): Technology[] => {
    const selectedSkills: Technology[] = [];
    const categories = ["Frontend", "Backend", "AI/ML", "Databases", "DevOps"];
    
    categories.forEach(category => {
      const categorySkills = technologies.filter(tech => tech.category === category);
      if (categorySkills.length > 0) {
        const randomIndex = Math.floor(Math.random() * categorySkills.length);
        selectedSkills.push(categorySkills[randomIndex]);
      }
    });
    
    return selectedSkills;
  };
  
  const previewSkills = getRandomSkills();

  // Skill item with error handling for images
  const SkillItem = ({ skill }: { skill: Technology }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <motion.div
        className="flex flex-col items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/5 dark:bg-secondary-light/5 rounded-full flex items-center justify-center p-3 mb-3">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-secondary/10 dark:bg-secondary-light/10 rounded-full">
              <span className="text-lg font-medium">{skill.name.charAt(0)}</span>
            </div>
          ) : (
            <Image 
              src={skill.icon} 
              alt={skill.name} 
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
              width={40}
              height={40}
            />
          )}
        </div>
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-secondary/60 dark:text-secondary-light/60">{skill.category}</span>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-secondary/70 dark:text-secondary-light/70 mt-4 max-w-2xl mx-auto">
            A glimpse of my technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {previewSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </motion.div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            
            <Link href="/about#skills">
              <motion.button
                className="px-6 py-3 border border-accent text-accent rounded-full font-medium hover:bg-accent/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Skills
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 