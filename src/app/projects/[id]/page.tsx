"use client"

import { Jobs } from '@/types/jobs';
import Image from 'next/image';
import { useState } from 'react';

export default function Project({ params }: { params: { id: number } }) {
  // Convert params.id to a number
  const id = Number(params.id);

  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (photo: string) => {
    setSelectedImage(photo);
    setExpanded(true);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const encontrado = Jobs.find(job => job.id === id);

  if (!encontrado) {
    return <div>No job found with the given ID</div>
  }

  if (!encontrado.photoList[0]) {
    return <div className=' flex w-screen'>to vazio</div>
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {encontrado.photoList.slice(0, 4).map((photo, index) => (
        <div key={index} className='cursor-zoom-in'>
          <Image
            src={photo}
            alt={encontrado.name}
            className="w-screen cursor-zoom-in"
            width={1080}
            height={940}
            quality={90}
            onClick={() => handleClick(photo)}
          />
        </div>
      ))}
      <div className='grid grid-cols-2'>
        {encontrado.photoList.slice(4, 8).map((photo, index) => (
          <div key={index + 3} className='cursor-zoom-in'>
            <Image
              src={photo}
              alt={encontrado.name}
              className="w-screen "
              width={1080}
              height={600}
              quality={90}
              onClick={() => handleClick(photo)}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center'>
        {encontrado.photoList.slice(8).map((photo, index) => (
          <div key={index + 8} className='cursor-zoom-in'>
            <Image
              src={photo}
              alt={encontrado.name}
              className="w-screen cursor-zoom-in"
              width={1080}
              height={600}
              quality={90}
              onClick={() => handleClick(photo)}
            />
          </div>
        ))}
      </div>

      {expanded && (
        <div className="fixed inset-0 flex justify-around bg-black bg-opacity-50 z-50">
          <div className="relative  overflow-hidden">
            <button
              onClick={toggleExpanded}
              className="fixed z-10  text-pink-icon text-4xl top-[20%] right-5 overflow-hidden"
            >
              X
            </button>
            <div className='mx-2  overflow-hidden cursor-zoom-in'>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={encontrado.name}
                  className="w-screen cursor-zoom-in"
                  width={1080}
                  height={600}
                  quality={90}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


