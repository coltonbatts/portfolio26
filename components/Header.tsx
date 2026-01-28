"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="header-nav">
        {/* Logo - Minimal Colton Logo */}
        <Link href="/" className="header-logo">
          CB
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <Link href="/" className="group">
            Home
            <span />
          </Link>
          <Link href="/#portfolio" className="group">
            Work
            <span />
          </Link>
          <Link href="/about" className="group">
            About
            <span />
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b-2 border-[#2a2a2a]">
          <div className="container px-6 py-8 space-y-6">
            <Link
              href="/"
              className="block text-xs font-bold uppercase tracking-widest text-[#999] hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#portfolio"
              className="block text-xs font-bold uppercase tracking-widest text-[#999] hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="block text-xs font-bold uppercase tracking-widest text-[#999] hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary w-full text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
