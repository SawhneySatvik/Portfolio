"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    }
}

const reverseIndex = (index:number) => {
    const totalSteps = 6;
    return totalSteps - index;
}

export default function StairTransition(){
    const pathName = usePathname();
    console.log(pathName);
 
    return (
        <AnimatePresence mode='wait'>
            <div key={pathName}>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                {[...Array(6)].map((_, index) => (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.2, ease: 'easeInOut', delay: reverseIndex(index)*0.1}}
                        className={`h-full w-full bg-accent-dark relative  `}
                    />
                ))}
                </div>
            </div>
        </AnimatePresence>
    )
}