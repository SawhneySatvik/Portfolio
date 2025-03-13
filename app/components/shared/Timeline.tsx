"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// Types for the timeline items
export interface TimelineItem {
  logo: string;
  heading: string;
  subheading?: string;
  explanation: string;
  timeperiod: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true on component mount
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <section className="py-8 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <div className="relative" ref={containerRef}>
          {/* Timeline center line - hidden on mobile, visible on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 hidden md:block">
            {isClient && (
              <motion.div 
                className="h-full w-full bg-accent origin-top" 
                style={{ scaleY: lineHeight }}
              />
            )}
          </div>
          
          {/* Mobile timeline line - visible only on mobile */}
          <div className="absolute left-8 h-full w-1 bg-accent/30 md:hidden">
            {isClient && (
              <motion.div 
                className="h-full w-full bg-accent origin-top" 
                style={{ scaleY: lineHeight }}
              />
            )}
          </div>
          
          {/* Timeline items */}
          {items.map((item, index) => (
            <div key={index} className="mb-16 md:mb-24 relative">
              {/* Timeline dot - centered on md+ screens, left-aligned on mobile */}
              <motion.div 
                className="absolute md:left-1/2 left-8 top-0 md:top-auto transform md:-translate-x-1/2 md:translate-y-0 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              />
              
              {/* Content card - alternating left and right on md+, always right on mobile */}
              <div className={`flex ${index % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'}`}>
                <motion.div 
                  className={`md:w-5/12 w-[calc(100%-5rem)] ml-20 md:ml-0 bg-primary-light/5 dark:bg-primary/5 p-4 sm:p-6 rounded-lg shadow-lg border border-accent/20 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  initial={{ 
                    x: index % 2 === 0 ? 50 : -50, 
                    opacity: 0 
                  }}
                  animate={{ 
                    x: 0, 
                    opacity: 1 
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 * index
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(54, 175, 250, 0.5)"
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-accent/30">
                      <Image 
                        src={item.logo} 
                        alt={item.heading} 
                        width={48}
                        height={48}
                        className="object-contain"
                        priority={index < 2} // Prioritize loading for first two items
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-accent">{item.heading}</h3>
                      {item.subheading && (
                        <h4 className="text-base sm:text-lg font-medium">{item.subheading}</h4>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-medium bg-accent/10 text-accent px-2 sm:px-3 py-1 sm:py-1.5 rounded-full self-start sm:self-auto mt-1 sm:mt-0">
                      {item.timeperiod}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-secondary/80 dark:text-secondary-light/80 leading-relaxed">
                    {item.explanation}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 