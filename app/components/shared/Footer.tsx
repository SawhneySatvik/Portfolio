import React from 'react'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="py-12 bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Satvik Sawhney</h2>
            <p className="text-sm">Full-Stack AI/ML Developer</p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <Socials 
              containerStyles='flex gap-5' 
              iconStyles='h-8 w-8 justify-center border border-accent rounded-full flex items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' 
              textStyles={'hidden'}
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} Satvik Sawhney. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
