"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full border border-accent bg-transparent flex items-center justify-center text-accent"
        aria-label="Toggle theme"
      >
        <FiSun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-accent bg-transparent flex items-center justify-center text-accent transition-all duration-300 hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-primary-light shadow-sm hover:shadow-md"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        key={resolvedTheme}
      >
        {resolvedTheme === "dark" ? (
          <FiSun className="h-5 w-5" />
        ) : (
          <FiMoon className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
} 