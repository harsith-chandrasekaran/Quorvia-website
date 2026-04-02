"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // Mapping to exactly match the requested nav items while hooking into our sections
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#companies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Team", href: "#team" },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Liquid Glass Container */}
      <nav className="w-full max-w-4xl bg-white/30 backdrop-blur-2xl border border-white/60 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_0_rgba(143,86,225,0.1)] pointer-events-auto ring-1 ring-white/50">
        {/* Logo Section */}
        <Link
          href="#home"
          className="flex items-center gap-3 ml-2 hover:opacity-70 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="Quorvia Logo"
            width={45}
            height={45}
            className="h-8 pt-1 pl-3 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-secondary hover:drop-shadow-sm transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 hover:shadow-[0_0_20px_0_rgba(143,86,225,0.4)]"
        >
          Consultation
        </Link>
      </nav>
    </div>
  );
}
