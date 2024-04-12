'use client'

import React, { useState } from 'react';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedItem, setSelectedItem] = useState<string>('Item 1');

  const handleClick = (item: string) => {
    setSelectedItem(item);
  }


  return (
    <nav className="bg-black p-4 ">

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-lg font-bold">Company Name</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" onClick={() => handleClick('Item 1')} className={selectedItem === 'Item 1' ? 'text-red-500' : 'text-white'}>Portfólio</a>
          <a href="#" onClick={() => handleClick('Item 2')} className={selectedItem === 'Item 2' ? 'text-red-500' : 'text-white'}>Quem sou</a>
          <a href="#" onClick={() => handleClick('Item 3')} className={selectedItem === 'Item 3' ? 'text-red-500' : 'text-white'}>Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className={`menu-icon  mx-8 ${isOpen ? 'open' : ''}`}>
            <span className={`block absolute h-1 w-6 bg-white rounded-full transform transition duration-500 ease-in-out  ${isOpen ? 'rotate-45' : ' -translate-y-1.5'}`}></span>
              <span className={`block absolute h-1 w-6  bg-white rounded-full transform transition duration-500 ease-in-out  ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute h-1 w-6  bg-white rounded-full transform transition duration-500 ease-in-out  ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black fixed inset-x-0 top-0 z-50 h-full w-full p-8">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className=''>
              <span className={`block absolute h-1 w-6 bg-pink-icon  rounded-full transform transition duration-500 ease-in-out  ${isOpen ? 'rotate-45' : 'translate-y-1.5'}`}></span>
              <span className={`block absolute h-1 w-6 bg-pink-icon  rounded-full transform transition duration-500 ease-in-out  ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
          
          <div className="flex flex-col justify-center items-center h-full text-4xl gap-y-16">
            <a href="#" onClick={() => handleClick('Item 1')} className={selectedItem === 'Item 1' ? 'text-red-500' : 'text-white'}>Item 1</a>
            <a href="#" onClick={() => handleClick('Item 2')} className={selectedItem === 'Item 2' ? 'text-red-500' : 'text-white'}>Item 2</a>
            <a href="#" onClick={() => handleClick('Item 3')} className={selectedItem === 'Item 3' ? 'text-red-500' : 'text-white'}>Item 3</a>
          </div>
          {/* <div className="absolute top-1/2 right-[-2rem] transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full p-2">
            <button onClick={toggleMenu} className="text-red-500"> aaaa</button>
          </div> */}
      </div>
      
      )}
    </nav>
  );
};

export default Navbar