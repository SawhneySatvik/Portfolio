"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { Button } from '../components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Ignore the specific error but set the error message
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light min-h-screen transition-colors duration-300">
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xl leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* Contact Information */}
            <motion.div 
              className="w-full md:w-2/5 bg-secondary/5 dark:bg-secondary-light/5 p-6 sm:p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-accent/20">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-4 rounded-full mr-5 flex-shrink-0">
                      <FiMail className="text-accent text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <a href="mailto:satvik@example.com" className="text-secondary/70 dark:text-secondary-light/70 hover:text-accent transition-colors">
                        satvik.sawhney2005@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-4 rounded-full mr-5 flex-shrink-0">
                      <FiPhone className="text-accent text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <a href="tel:+918700645229" className="text-secondary/70 dark:text-secondary-light/70 hover:text-accent transition-colors">
                        +91 870-0645229
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-4 rounded-full mr-5 flex-shrink-0">
                      <FiMapPin className="text-accent text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-secondary/70 dark:text-secondary-light/70">
                        New Delhi, Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-accent/20">Connect With Me</h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://linkedin.com/in/SawhneySatvik" 
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
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-secondary/5 dark:bg-secondary-light/5 p-6 sm:p-8 rounded-xl h-full">
                <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-accent/20">Send Me a Message</h2>
                
                {submitSuccess ? (
                  <motion.div 
                    className="bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p>Thank you for your message! I&apos;ll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-200 p-4 rounded-lg">
                        <p>{submitError}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary/10 dark:bg-secondary-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary/10 dark:bg-secondary-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/10 dark:bg-secondary-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Subject of your message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-secondary/10 dark:bg-secondary-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto px-8 py-3 h-auto text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
