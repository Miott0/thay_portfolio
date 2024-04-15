'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

interface JobProps {
    id: number
    name: string;
    mainPhoto: string;
    photoList: string[];
}


export function Card(job: JobProps) {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        if (expanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Limpeza na desmontagem
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [expanded]);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (

        /* CARD */
        <div className="relative">
            <div className='relative group ' /* onClick={toggleExpanded} */ onClick={() => router.push(`/projects/${job.id}`)}>
                <div className=" w-[368px] h-[285px] mb-7 relative">

                    <Image
                        src={job.mainPhoto}
                        alt={job.name}
                        className="w-full cursor-pointer rounded-md"
                        width={600}
                        height={600}
                    />
                </div>

                <div className="px-6 py-4 rounded-md absolute bottom-[0.5rem] left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition duration-300">
                    <div className="text-lg mb-2 text-white">{job.name}</div>
                </div>
            </div>

            {/* PROJETO EXPANDIDO */}
            {expanded && (
                <div className="fixed inset-0 flex justify-around  bg-black bg-opacity-50 z-50 ">
                    <div className="max-w-lg relative mt-28 overflow-y-auto">
                        <button
                            onClick={toggleExpanded}
                            className="fixed z-10  text-pink-icon text-4xl top-[20%] right-5"
                        >
                            X
                        </button>
                        {job.photoList.map((photo, index) => (
                            <div key={index} className={`mx-2 ${index === job.photoList.length - 1 ? 'mb-4' : ''}`}>
                                <Image
                                    src={photo}
                                    alt={job.name}
                                    className="object-contain"
                                    width={600}
                                    height={600}
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
} 