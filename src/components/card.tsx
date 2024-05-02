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
    
    return (
        /* CARD */
        <div className="relative">
            <div className="relative group" onClick={() => router.push(`/projects/${job.id}`)}>
                <div className="w-[368px] h-[285px]">
                    <Image
                        src={job.mainPhoto}
                        alt={job.name}
                        className="w-full cursor-pointer rounded-md"
                        width={368}
                        height={285}
                        quality={100}
                    />
                </div>

                <div className=" px-2 pt-8 pb-2 rounded-md absolute bottom-[0.5rem] left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition duration-300">
                    <div className="text-lg  text-white">{job.name}</div>
                </div>
            </div>
        </div>
    )
} 