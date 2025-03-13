import {FaCode, FaGraduationCap} from 'react-icons/fa';
import {Button} from "../ui/button";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 px-4 sm:px-6 md:px-0">
         
                    <div className="rounded-full items-center mb-4 md:mb-0">
                        <FaGraduationCap size={120} className='text-accent sm:text-[160px]'/>
                    </div>

                    <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
                        <p className="text-base sm:text-lg md:text-xl max-w-xl">
                        I am currently pursuing a B.Tech in Computer Science specialising in AI & ML at SRM Institute of Science and Technology and a BS in Data Science from IIT Madras.
                        </p>
                    </div>
                </div>

                {/* Second Row: Image then Text on small devices, Text then Image on medium and larger devices */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-6 md:px-0">
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
                        <p className="text-base sm:text-lg md:text-xl max-w-xl">
                        As a Full-Stack AI/ML Developer, I enjoy building smart and scalable applications. I work with both frontend and backend technologies, integrating AI to make systems more efficient.
                        </p>
                    </div>

                    <div className="order-1 md:order-2 rounded-full items-center mb-4 md:mb-0">
                        <FaCode size={120} className='text-accent sm:text-[160px]'/>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href='/about'>
                        <Button variant={'outline'} size='lg' className="text-base sm:text-lg">Know More</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
