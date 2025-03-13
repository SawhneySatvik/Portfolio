"use client";

import Link from 'next/link';
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { ThemeToggle } from '../ui/theme-toggle';
import { useEffect, useState } from 'react';

const links = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Achievements',
        path: '/achievements'
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Add scroll event listener to detect when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className={`py-3 md:py-4 xl:py-6 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'shadow-md' : ''
        }`}>
            <div className="px-4 sm:px-10 mx-auto flex justify-between items-center">
                <Link href='/'>
                <h1 className='text-xl sm:text-2xl xl:text-3xl font-semibold'>
                    Satvik<span className='text-accent sm:hidden'>.</span> <span className='hidden sm:inline'>Sawhney</span><span className='text-accent hidden sm:inline'>.</span>
                </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8 text-xl">
                    <nav className='hidden xl:flex items-center gap-8 text-xl'>
                        {links.map((link)=>{
                            return (
                                <Link href={link.path} 
                                      key={link.name}
                                      className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                                        {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="hidden xl:flex items-center gap-4">
                    <ThemeToggle />
                    <Link href='/contact'>
                        <Button className='text-xl'>Resume</Button>
                    </Link>
                    <Link href='/contact'>
                        <Button className='text-xl'>Contact Me</Button>
                    </Link>
                </div>

                <div className="xl:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger className="flex justify-center items-center">
                            <CiMenuFries className='text-[24px] sm:text-[28px] text-accent' />
                        </SheetTrigger>
                        <SheetContent className='flex flex-col bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light'>
                            {/* logo */}
                            <div className="mt-16 mb-12 font-bold text-2xl">
                                <h1 className='text-2xl text-center'>
                                    <Link href="/" onClick={() => setIsOpen(false)}>
                                    Satvik <span className='text-accent'>Sawhney</span>
                                    </Link>
                                </h1>
                            </div>
                            
                            {/* Theme toggle in mobile menu */}
                            <div className="flex justify-center mb-8">
                                <ThemeToggle />
                            </div>
                            
                            {/* links */}
                            <nav className='flex flex-col justify-center items-center gap-6'>
                                {links.map((link, index)=>{
                                    return (
                                        <Link 
                                            href={link.path} 
                                            key={index} 
                                            onClick={() => setIsOpen(false)}
                                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium text-xl hover:text-accent transition-all`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                            
                            {/* Buttons */}
                            <div className="flex flex-col items-center gap-4 mt-8">
                                <Link href='/contact' className="w-full max-w-[200px]" onClick={() => setIsOpen(false)}>
                                    <Button className='text-lg w-full'>Resume</Button>
                                </Link>
                                <Link href='/contact' className="w-full max-w-[200px]" onClick={() => setIsOpen(false)}>
                                    <Button className='text-lg w-full'>Contact Me</Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}