"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { categories, technologies } from "../../data/skills";
import { fadeIn } from "../../utils/motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import BallCanvas with no SSR
const DynamicBallCanvas = dynamic(() => import("../canvas/BallCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-secondary-light/10 animate-pulse"></div>
    </div>
  ),
});

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const [activeTech, setActiveTech] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeCategory
  );

  // Fallback component for non-3D view
  const FallbackSkillItem = ({ technology }: { technology: typeof technologies[0] }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <motion.div
        className="flex flex-col items-center p-3 rounded-lg bg-secondary/5 dark:bg-secondary-light/5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {imageError ? (
          <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 dark:bg-secondary-light/10 rounded-full mb-2">
            <span className="text-xs">{technology.name.charAt(0)}</span>
          </div>
        ) : (
          <Image 
            src={technology.icon} 
            alt={technology.name} 
            className="w-10 h-10 object-contain mb-2"
            onError={() => setImageError(true)}
            width={40}
            height={40}
          />
        )}
        <span className="text-xs text-center">{technology.name}</span>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
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
            Explore my technical expertise across various domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-secondary/10 dark:bg-secondary-light/10 hover:bg-secondary/20 dark:hover:bg-secondary-light/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* 3D Balls Grid - Only shown on client side */}
        {isClient && (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="hidden md:flex flex-wrap justify-center gap-10 mb-8"
          >
            {filteredTechnologies.map((technology) => (
              <motion.div
                key={technology.name}
                className="w-24 h-24 md:w-28 md:h-28 relative group"
                whileHover={{ scale: 1.05 }}
              >
                <DynamicBallCanvas 
                  icon={technology.icon} 
                  name={technology.name}
                  setActiveTech={setActiveTech}
                />
                
                {/* Technology name tooltip */}
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-accent text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-300 ${
                  activeTech === technology.name ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  {technology.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Mobile-friendly alternative view - Always shown on mobile, fallback on desktop */}
        <div className={`${isClient ? 'md:hidden' : ''} mt-12`}>
          <h3 className="text-xl font-semibold mb-4 text-center">{activeCategory} Skills</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {filteredTechnologies.map((tech) => (
              <FallbackSkillItem key={tech.name} technology={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 