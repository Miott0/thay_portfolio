'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface JobProps {
    name: string;
    mainPhoto: string;
    photoList: string[];
}


export function Card(job: JobProps) {
    /* const [expanded, setExpanded] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % job.photoList.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === 0 ? job.photoList.length - 1 : prevIndex - 1
        );
    }; */
    return(
        <div className="relative">
            <div className=" w-[368px] h-[285px] mb-7 relative group">
                
                <Image
                    src={job.mainPhoto}
                    alt={job.name}
                    className="w-full cursor-pointer rounded-md"
                    /* onClick={toggleExpanded} */
                    width={600}
                    height={600}
                />
                            
            
                <div className="px-6 py-4 rounded-md absolute bottom-[0.6rem] left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition duration-300">
                    <div className="text-lg mb-2 text-white">{job.name}</div>
                </div>
            </div>
            

            {/* {expanded && (
                <div className="fixed inset-0 flex justify-around items-center bg-gray-600 bg-opacity-50 z-50">
                    <div className="max-w-lg relative">
                        <button
                            onClick={toggleExpanded}
                            className="absolute top-4 right-4 text-zinc-100 text-2xl"
                        >
                            &times;
                        </button>
                        <Image
                            src={job.photoList[currentPhotoIndex]}
                            alt={job.name}
                            className="object-contain mx-auto "
                            width={600}
                            height={600}
                            priority
                        />
                        <div className="absolute bottom-40 left-0 right-0  flex justify-between">
                            <button
                                onClick={handlePrevPhoto}
                                className="text-xl m-4  hover:bg-white hover:text-black  rounded-full p-2"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={handleNextPhoto}
                                className="text-xl m-4  hover:bg-white hover:text-black  rounded-full p-2"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}