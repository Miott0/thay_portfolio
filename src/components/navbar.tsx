'use client'

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Logo } from '@/icons/Logo';
import router from 'next/router';
import Link from 'next/link';

function Navbar() {
  const pathname = usePathname();
  const isPortPage = pathname === '/';
  const isProjectPage = /^\/projects\/\d+$/.test(pathname);
  const isWhoPage = pathname === '/whoami';

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Novo estado para controlar a montagem do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect para montar o menu somente quando isOpen mudar para true
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      // Adiciona um delay antes de desmontar para suavizar a animação
      const timeoutId = setTimeout(() => setIsMounted(false), 300); // tempo suficiente para animação de fechamento
      return () => clearTimeout(timeoutId); // Limpa o timeout para evitar bugs
    }
  }, [isOpen]);

  return (
    <nav className={`px-[2rem] py-7 ${isWhoPage ? 'bg-white' : 'bg-black'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo 
          width={"173px"} height={"60px"} fill={isWhoPage ? '#000000' : '#ffffff'} 
          onClick={() => router.push('/')} 
        />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className={isPortPage || isProjectPage ? 'text-pink-icon' : 'text-black'}>Portfólio</a>
          <a href="/whoami" className={isWhoPage ? 'text-pink-icon' : 'text-white'}>Quem sou</a>
        </div>

        {/* Hamburger Menu */}
        <div className="HAMBURGER-ICON space-y-1 sm:hidden" onClick={toggleMenu}>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
          <span className={`block h-1 w-8 rounded-full ${isWhoPage ? 'bg-black' : 'bg-white'}`}></span>
        </div>
      </div>

      {/* Mobile Menu Expandido */}
      {isMounted && (
        <div className={`md:hidden bg-black fixed inset-x-0 top-0 z-50 h-full w-full p-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {/* CLOSE BUTTON */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div>
              <span className="block absolute h-1 w-6 bg-white rounded-full rotate-45 translate-y-1.5"></span>
              <span className="block absolute h-1 w-6 bg-white rounded-full -rotate-45 translate-y-1.5"></span>
            </div>
          </button>
          <div className="flex flex-col justify-center items-center h-full text-4xl gap-y-16">
            <Link 
              href={'/'}
              className={isPortPage || isProjectPage ? 'text-pink-icon' : 'text-white'}
              onClick={toggleMenu}
            >
              Portfólio
            </Link>
            <Link
              href="/whoami" 
              className={isWhoPage ? 'text-pink-icon' : 'text-white'}
              onClick={toggleMenu}
            >
              Quem sou
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
