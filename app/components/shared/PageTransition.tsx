"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathName}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    delay: 1,
                    duration: 0.2,
                    ease: "easeInOut"
                }}
                className='h-screen w-screen fixed bg-primary pointer-events-none'
            />
            {children}
        </AnimatePresence>
    )
}