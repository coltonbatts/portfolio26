"use client";

import Link from "next/link";
import Signature from "./Signature";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero relative overflow-hidden">
      {/* Animated Signature - Top Left Corner */}
      <div className="absolute top-24 left-6 md:left-12 z-20">
        <Signature size="small" animated={true} />
      </div>

      {/* Video Background - Optional Hero Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback: If no video provided, CSS gradients and decorative elements handle the background */}
      </video>

      <div className="hero-content">
        {/* Main Headline - Bold, Asymmetric */}
        <h1 className="hero-title">
          Motion
          <br />
          <span className="accent">Graphics</span>
          <br />
          Designer
        </h1>

        {/* Subtitle - Editorial Tone */}
        <p className="hero-subtitle">
          Premium video production & motion design for brands that demand excellence. 
          Working with Fortune 500 companies, creative agencies, and bold visions 
          that actually move the needle.
        </p>

        {/* Meta Info - Minimal but Present */}
        <div className="hero-meta">
          <p>NYC Based · Available Globally</p>
          <p>Video Production · Editing · Motion Design</p>
        </div>

        {/* CTA Group - Intentional Spacing */}
        <div className="hero-cta-group">
          <Link href="/#portfolio" className="btn btn-primary">
            View Work
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
