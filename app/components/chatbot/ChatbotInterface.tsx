"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser, FiMinimize2, FiMaximize2, FiX } from "react-icons/fi";
import { RiRobot2Fill } from "react-icons/ri";
import { chatbotResponses } from "../../data/chatbot-responses";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  onClose: () => void;
}

export default function ChatbotInterface({ onClose }: ChatbotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Satvik's portfolio assistant. Ask me anything about Satvik's experience, projects, or skills!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Suggested questions
  const suggestedQuestions = [
    "Tell me about Satvik",
    "What are his skills?",
    "Projects he's worked on?",
    "How can I contact him?",
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Update viewport height on resize and keyboard open/close
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

  // Focus input when chat opens
  useEffect(() => {
    if (!isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isMinimized]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    // Focus the input after setting the question
    inputRef.current?.focus();
  };

  const generateResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();
    
    // Check for matches in our predefined responses
    for (const response of chatbotResponses) {
      for (const keyword of response.keywords) {
        if (normalizedQuery.includes(keyword)) {
          return response.response;
        }
      }
    }
    
    // Default response if no match found
    return "I don't have specific information about that. Feel free to ask about Satvik's experience, education, skills, or projects!";
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <motion.div
      ref={chatContainerRef}
      className={`fixed ${
        keyboardOpen 
          ? 'bottom-0 right-0 w-full max-w-full rounded-none border-0' 
          : 'bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-8 lg:right-10 w-[95vw] sm:w-[90vw] max-w-[420px] md:max-w-[450px] lg:max-w-[500px] rounded-2xl border border-accent/20'
      } bg-primary/95 dark:bg-primary-light/95 backdrop-blur-md shadow-2xl overflow-hidden z-50 flex flex-col`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        height: isMinimized 
          ? "80px" 
          : keyboardOpen 
            ? "100vh" 
            : `min(${Math.min(viewportHeight * 0.7, 600)}px, 80vh)`
      }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {/* Header - Made sticky */}
      <div className="bg-accent text-primary p-3 sm:p-4 font-semibold flex items-center justify-between sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shadow-inner">
            <RiRobot2Fill className="text-accent text-base sm:text-lg" />
          </div>
          <span className="text-base sm:text-lg">Portfolio Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button 
            onClick={toggleMinimize}
            className="text-primary hover:text-primary-dark transition-colors p-1 rounded-full hover:bg-accent/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMinimized ? "Maximize chatbot" : "Minimize chatbot"}
          >
            {isMinimized ? <FiMaximize2 size={18} /> : <FiMinimize2 size={18} />}
          </motion.button>
          <motion.button 
            onClick={onClose}
            className="text-primary hover:text-primary-dark transition-colors p-1 rounded-full hover:bg-accent/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close chatbot"
          >
            <FiX size={18} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {!isMinimized && (
          <>
            {/* Messages container */}
            <motion.div 
              className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                maxHeight: keyboardOpen ? `calc(${viewportHeight}px - 130px)` : undefined
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } items-end gap-2`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                      <RiRobot2Fill className="text-accent" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-3 ${
                      message.sender === "user"
                        ? "bg-accent text-primary rounded-2xl rounded-tr-none shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-tl-none shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium ${
                        message.sender === "user" 
                          ? "text-primary/80" 
                          : "text-gray-600 dark:text-gray-300"
                      }`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className={`text-sm md:text-base font-medium ${
                      message.sender === "user" 
                        ? "text-primary" 
                        : "text-gray-800 dark:text-gray-100"
                    }`}>
                      {message.text}
                    </p>
                  </div>
                  
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 flex-shrink-0 flex items-center justify-center">
                      <FiUser className="text-primary-dark dark:text-primary-light" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start items-end gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                    <RiRobot2Fill className="text-accent" />
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-3 rounded-2xl rounded-tl-none shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "300ms" }}></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: "600ms" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </motion.div>

            {/* Suggested questions - Hide when keyboard is open on small screens */}
            {(!keyboardOpen || viewportHeight > 500) && (
              <motion.div 
                className="px-3 sm:px-4 py-2 flex flex-wrap gap-2 bg-primary/50 dark:bg-primary-light/50 border-t border-gray-200/30 dark:border-gray-700/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs md:text-sm bg-accent/10 hover:bg-accent/20 text-accent font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors whitespace-nowrap shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Input area */}
            <motion.form 
              onSubmit={handleSendMessage} 
              className="p-3 sm:p-4 border-t border-gray-200/30 dark:border-gray-700/30 bg-primary/80 dark:bg-primary-light/80 sticky bottom-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 rounded-full p-1 pl-3 sm:pl-4 shadow-inner">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none text-sm md:text-base"
                  onFocus={() => {
                    // On mobile, scroll to the bottom when input is focused
                    if (window.innerWidth < 768) {
                      setTimeout(() => {
                        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }
                  }}
                />
                <motion.button
                  type="submit"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-accent/90 transition-colors shadow-md"
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send message"
                >
                  <FiSend />
                </motion.button>
              </div>
            </motion.form>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 