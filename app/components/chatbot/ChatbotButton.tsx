"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { RiRobot2Fill, RiRobotFill } from "react-icons/ri";
import ChatbotInterface from "@/app/components/chatbot/ChatbotInterface";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  // Update viewport height on resize and detect keyboard
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight;
      // If the new height is significantly smaller than previous, keyboard is likely open
      if (viewportHeight && newHeight < viewportHeight * 0.75) {
        setKeyboardOpen(true);
      } else {
        setKeyboardOpen(false);
      }
      setViewportHeight(newHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewportHeight]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {(!keyboardOpen || !isOpen) && (
          <motion.button
            onClick={toggleChatbot}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-primary flex items-center justify-center shadow-xl hover:shadow-2xl z-50 border-2 border-accent/20"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotate: isOpen ? 0 : [0, -10, 10, -10, 10, 0],
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              rotate: {
                duration: 1.5,
                repeat: isOpen ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 5
              }
            }}
            aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                className="relative"
              >
                {isOpen ? (
                  <FiX size={24} className="sm:text-[28px]" />
                ) : (
                  <>
                    <RiRobot2Fill size={24} className="sm:text-[28px]" />
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-primary text-accent text-xs font-bold rounded-full flex items-center justify-center border border-accent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <RiRobotFill size={8} className="sm:text-[10px]" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && <ChatbotInterface onClose={toggleChatbot} />}
      </AnimatePresence>
    </>
  );
} 