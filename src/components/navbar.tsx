'use client'

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Logo } from '@/icons/Logo';
import router from 'next/router';


function Navbar() {

  const pathname = usePathname();
  const isPortPage = pathname === '/';
  const isProjectPage = /^\/projects\/\d+$/.test(pathname);
  const isWhoPage = pathname === '/whoami';
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className={` px-[2rem] py-7 ${isWhoPage ? 'bg-white' : 'bg-black'}`} >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo width={"173px"} height={"60px"} fill={isWhoPage ? '#000000' : '#ffffff'} onClick={() => router.push('/')}/>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className={isPortPage || isProjectPage? 'text-pink-icon':"text-black"}>Portfólio</a>
          <a href="/whoami" className={isWhoPage ? 'text-pink-icon' : 'text-white'}>Quem sou</a>
        </div>
        {/* HAMBUGER MENU */}
        <div className="HAMBURGER-ICON space-y-1 sm:hidden" onClick={toggleMenu}>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
        </div>
      </div>

      {/* Mobile Menu Expandido */}
      {isOpen&&(
        <div className="md:hidden bg-black fixed inset-x-0 top-0 z-50 h-full w-full p-8">
          {/*CLOSE BUTTON */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className=''>
              <span className={`block absolute h-1 w-6 bg-white  rounded-full rotate-45  translate-y-1.5`}></span>
              <span className={`block absolute h-1 w-6 bg-white  rounded-full -rotate-45 translate-y-1.5`}></span>
            </div>
          </button>
          <div className="flex flex-col justify-center items-center h-full text-4xl gap-y-16">
            <a href="/" className={isPortPage || isProjectPage? 'text-pink-icon':"text-white"}>Portfólio</a>
            <a href="/whoami" className={isWhoPage ? 'text-pink-icon' : 'text-white'}>Quem sou</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar