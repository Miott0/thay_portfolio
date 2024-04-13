'use client'
import { usePathname } from 'next/navigation';

export function Footer() {
    const pathname = usePathname();

    const isPortPage = pathname === '/';
    const isWhoPage = pathname === '/whoami';
    const isContPage = pathname === '/contact';

    return (
        <footer className={` px-[2rem] py-7 ${isWhoPage ? 'bg-white' : 'bg-black'}`}>
            <h1 className='text-white text-center'>OLA EU SOU O SEU FOOTER</h1>
        </footer>
    )
}