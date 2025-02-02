"use client";

import Link from 'next/link';
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation';

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
    console.log(pathname);

    return (
        <header className='py-8 xl:py12 text-white'>
            <div className="px-10 mx-auto flex justify-between">
                <Link href='/'>
                <h1 className='text-4xl font-semibold'>
                    Satvik <span className='hidden sm:inline'>Sawhney</span><span className='text-accent'>.</span>
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


                {/* <div className="hidden xl:flex items-center gap-8 text-xl">
                    <Link href='/about' className='hover:text-accent hover:border-b-2 border-accent'>
                        About
                    </Link>
                    <Link href='/work' className='hover:text-accent hover:border-b-2 border-accent'>
                        Work
                    </Link>
                    <Link href='/projects' className='hover:text-accent hover:border-b-2 border-accent'>
                        Projects
                    </Link>
                    <Link href='/achievements' className='hover:text-accent hover:border-b-2 border-accent'>
                        Achievements
                    </Link> 
                </div> */}

                <div className="hidden xl:flex items-right gap-8">
                    <Link href='/contact'>
                        <Button className='text-xl'>Contact Me</Button>
                    </Link>
                    <Link href='/contact'>
                        <Button className='text-xl'>Resume</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}