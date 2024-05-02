'use client'


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    const pathname = usePathname();
    const isWhoPage = pathname === '/whoami';
    return (
        <footer className={` flex justify-center items-center px-[2rem] py-7 ${isWhoPage ? 'bg-white' : 'bg-black'}`}>
            <div className='flex justify-between gap-9'>
                <Link href={'https://wa.me/552297833527'} target="_blank" className='rounded-full w-8 h-8  bg-pink-icon flex items-center justify-center'  >
                    <FaWhatsapp width="15px" height="15px" fill='#ffffff'/>
                </Link>

                <Link href={'https://wa.me/552297833527'} target="_blank" className='rounded-full w-8 h-8  bg-pink-icon flex items-center justify-center' >
                    <FaLinkedinIn width="15px" height="15px" fill='#ffffff'/>
                </Link>

                <Link  href={'https://wa.me/552297833527'} target="_blank" className='rounded-full w-8 h-8  bg-pink-icon flex items-center justify-center'>
                    <FaInstagram width="15px" height="15px" fill='#ffffff'/>
                </Link>
            </div>
        </footer>
    )
}