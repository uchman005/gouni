"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-700">Godfrey Okoye University</h1>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-700 text-2xl transition-transform duration-300 "
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="transform rotate-90" /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-green-700 ${
                    pathname === link.href ? "text-green-700 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg hover:text-green-700 ${
                    pathname === link.href ? "text-green-700 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
