"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function ContactPreview() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-secondary/70 dark:text-secondary-light/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-secondary/5 dark:bg-secondary-light/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <FiMail className="text-accent text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:satvik@example.com" 
                className="text-secondary/70 dark:text-secondary-light/70 hover:text-accent transition-colors"
              >
                satvik.sawhney2005@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-secondary/5 dark:bg-secondary-light/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <FiPhone className="text-accent text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-secondary/70 dark:text-secondary-light/70 hover:text-accent transition-colors"
              >
                +91 870-0645229
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-secondary/5 dark:bg-secondary-light/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <FiMapPin className="text-accent text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-secondary/70 dark:text-secondary-light/70">
                New Delhi, Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/sawhneysatvik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/10 dark:bg-secondary-light/10 p-4 rounded-full hover:bg-accent/20 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-2xl text-accent" />
            </a>
            <a 
              href="https://github.com/SawhneySatvik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/10 dark:bg-secondary-light/10 p-4 rounded-full hover:bg-accent/20 transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl text-accent" />
            </a>
            <a 
              href="https://x.com/SawhneySatvik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/10 dark:bg-secondary-light/10 p-4 rounded-full hover:bg-accent/20 transition-colors flex items-center justify-center"
              aria-label="Twitter"
            >
              <FiTwitter className="text-2xl text-accent" />
            </a>
          </div>
          
          <Link href="/contact">
            <Button className="text-lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 