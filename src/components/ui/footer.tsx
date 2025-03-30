'use client';
import Link from "next/link";
import { navLinks } from "../data";
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname()
    return (
        <footer className="bg-gray-900 text-white text-center py-6">
            <p>&copy; {new Date().getFullYear()} Godfrey Okoye University. All Rights Reserved.</p>
            <nav className="mt-4">
                <ul className="flex justify-center gap-6 text-gray-400">
                    {navLinks.map((navlink) => (
                        <li key={navlink.href}><Link href={navlink.href} className={`hover:text-green-700 ${pathname === navlink.href ? "text-green-700 font-semibold" : ""
                            }`}>{navlink.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}