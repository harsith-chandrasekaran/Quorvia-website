"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mapping to exactly match the requested nav items while hooking into our sections
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#companies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Team", href: "#team" },
  ];

  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Liquid Glass Container */}
      <nav className="w-full max-w-4xl bg-white/30 backdrop-blur-2xl border border-white/60 sm:rounded-full rounded-[2rem] px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_0_rgba(143,86,225,0.1)] pointer-events-auto ring-1 ring-white/50 relative">
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
            className="h-8 pt-1 pl-2 md:pl-3 w-auto object-contain"
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

        <div className="flex items-center gap-2 pr-1 md:pr-0">
          {/* Call to Action Button */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 hover:shadow-[0_0_20px_0_rgba(143,86,225,0.4)]"
          >
            Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2.5 rounded-full hover:bg-white/50 text-slate-700 transition mr-1"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-3 right-0 w-64 md:w-72 bg-white/95 backdrop-blur-3xl border border-black/5 rounded-[1.5rem] shadow-2xl flex flex-col p-6 gap-5 md:hidden origin-top-right overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-slate-600 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-black/5 mt-2 mb-2"></div>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="sm:hidden flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white px-5 py-3.5 rounded-xl text-base font-bold transition-all active:scale-95 shadow-md w-full"
              >
                Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
