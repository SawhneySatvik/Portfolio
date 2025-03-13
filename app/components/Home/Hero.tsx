import Photo from '../shared/Photo'
import {Button} from '../ui/button'
import Link from 'next/link'
import { FiFileText, FiMail } from 'react-icons/fi'

export default function Hero(){
    return(
        <section className="h-full bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
            <div className="pt-4 sm:mt-8 md:mt-12 container mx-auto h-full px-4 sm:px-6">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <p className='mb-2 md:mb-4 text-sm md:text-base'>A Software Developer</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">
                            Hello I&apos;m <br /> <span className='text-accent'>Satvik Sawhney</span>
                        </h1>
                        <p className="max-w-[600px] mb-6 md:mb-8 px-4 sm:px-0 text-sm md:text-base">
                        Full-Stack AI/ML Developer passionate about building intelligent, scalable, and data-driven solutions. Bridging AI with web technologies to create impactful, future-ready applications that solve real-world challenges.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <a 
                                href="https://drive.google.com/file/d/1b1UmRp-aclxS4fYWcRMTRizi2ghGKTNF/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full sm:w-auto"
                            >
                                <Button variant={'outline'} size='lg' className='w-full sm:w-auto uppercase flex items-center justify-center gap-2 text-sm md:text-base px-6 py-3 h-auto'>
                                    View Resume <FiFileText className='text-lg ml-1'/>
                                </Button>
                            </a>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size='lg' className='w-full sm:w-auto uppercase flex items-center justify-center gap-2 text-sm md:text-base px-6 py-3 h-auto'>
                                    Contact Me <FiMail className='text-lg ml-1'/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='order-1 xl:order-none mb-6 md:mb-8 xl:mb-0 scale-90 md:scale-100'>
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    )
}