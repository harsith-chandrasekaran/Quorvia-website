"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(href);
      }
      setIsMenuOpen(false);
    }
  };

  // Mapping to exactly match the requested nav items while hooking into our sections
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#companies" },
    { name: "Pricing", href: "#pricing" },
    { name: "Team", href: "#team" },
  ];

  return (
    <>
      <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Liquid Glass Container */}
      <nav className="w-full max-w-4xl bg-white/30 backdrop-blur-2xl border border-white/60 sm:rounded-full rounded-[2rem] px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_0_rgba(143,86,225,0.1)] pointer-events-auto ring-1 ring-white/50 relative">
        {/* Logo Section */}
        <Link
          href="#"
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
              onClick={(e) => handleNavClick(e, link.href)}
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
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 hover:shadow-[0_0_20px_0_rgba(143,86,225,0.4)]"
          >
            Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2.5 rounded-full hover:bg-white/50 text-slate-700 transition mr-1"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

      </nav>
    </div>

    {/* Mobile Slide Side Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 pointer-events-auto"
          />
          
          {/* Slide-in Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-dvh w-[80vw] max-w-[400px] bg-white border-l border-black/5 shadow-2xl flex flex-col pt-24 px-8 pb-8 gap-8 md:hidden z-50 pointer-events-auto overflow-y-auto"
          >
            {/* Close Button Inside Menu */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-8 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold text-slate-800 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-black/5">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white px-6 py-4 rounded-xl text-lg font-bold transition-all active:scale-95 shadow-lg w-full"
              >
                Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
