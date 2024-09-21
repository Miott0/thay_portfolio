'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    const pathname = usePathname();
    const isWhoPage = pathname === '/whoami';

    const socialLinks = [
        { href: 'https://wa.me/552297833527', Icon: FaWhatsapp },
        { href: 'https://www.linkedin.com/in/thaynnaogomes/', Icon: FaLinkedinIn },
        { href: 'https://instagram.com/seu-perfil', Icon: FaInstagram },
    ];

    return (
        <footer className={`flex justify-center items-center px-[2rem] py-7 ${isWhoPage ? 'bg-white' : 'bg-black'}`}>
            <div className="flex justify-between gap-9">
                {socialLinks.map(({ href, Icon }, index) => (
                    <Link
                        key={index}
                        href={href}
                        target="_blank"
                        className="rounded-full w-8 h-8 bg-pink-icon flex items-center justify-center"
                    >
                        <Icon className="text-white" size={15} />
                    </Link>
                ))}
            </div>
        </footer>
    );
}