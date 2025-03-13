"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/lib/testimonials";
import { Button } from "@/app/components/ui/button";
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  // Reset autoplay timer when manually changing slides
  const handleManualChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    setAutoplay(false);

    // Resume autoplay after 10 seconds of inactivity
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);

      return () => clearInterval(interval);
    }

    return () => {};
  }, [autoplay]);

  useEffect(() => {
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-0 pb-16 md:py-16 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <p className="text-secondary/70 dark:text-secondary-light/70 mt-4 max-w-2xl mx-auto">
            Feedback from colleagues, clients, and collaborators
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop view */}
          <div className="hidden md:block relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                  variants={itemVariants}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <FiMessageSquare className="h-10 w-10 text-accent/20 mb-4" />
                      <p className="text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/10">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-secondary/70 dark:text-secondary-light/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <FiMessageSquare className="h-8 w-8 text-accent/20 mb-3" />
                        <p className="text-base mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-accent/10">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-secondary/70 dark:text-secondary-light/70">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <motion.div 
            className="flex items-center justify-between mt-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial} 
                className="rounded-full"
              >
                <FiChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </motion.div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-accent" : "bg-secondary/30 dark:bg-secondary-light/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial} 
                className="rounded-full"
              >
                <FiChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 