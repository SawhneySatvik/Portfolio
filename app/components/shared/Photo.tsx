"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Photo() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true after component mounts
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return( 
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] xl:w-[480px] xl:h-[480px]"
                >
                    <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse"></div>
                    <div className="absolute inset-4 rounded-full bg-accent/5 animate-pulse [animation-delay:300ms]"></div>
                    <div className="absolute inset-8 rounded-full overflow-hidden">
                        <Image
                            src="/assets/SatvikSawhneyProfilePhoto.png"
                            alt='Satvik Sawhney'
                            fill
                            priority
                            quality={100}
                            className="object-cover"
                            onLoad={() => setIsLoaded(true)}
                        />
                    </div>
                </motion.div>
                
                <motion.svg
                    className="absolute w-[290px] h-[290px] sm:w-[310px] sm:h-[310px] xl:w-[490px] xl:h-[490px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: 'easeIn' }}
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#36affa"
                        strokeWidth="6"
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{ 
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], 
                            rotate: [120, 360] 
                        }}
                        transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            repeatType: "reverse" 
                        }}
                    />
                </motion.svg>
            </div>
        </div>
    )
}