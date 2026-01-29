"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react").then(mod => mod.default), {
  ssr: false,
  loading: () => null,
});

export default function HeroNew() {
  const [animations, setAnimations] = useState<{
    ampersand: any;
    connector: any;
    floaters: any;
  }>({
    ampersand: null,
    connector: null,
    floaters: null,
  });

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [amp, conn, floaters] = await Promise.all([
          fetch("/animations/ampersand-rotating.json").then(r => r.json()).catch(() => null),
          fetch("/animations/connector-wave.json").then(r => r.json()).catch(() => null),
          fetch("/animations/background-floaters.json").then(r => r.json()).catch(() => null),
        ]);

        setAnimations({
          ampersand: amp,
          connector: conn,
          floaters: floaters,
        });
      } catch (err) {
        console.log("Animation load note:", err);
      }
    };

    loadAnimations();
  }, []);

  return (
    <section className="hero-premium relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 z-0" />

      {/* Background floaters animation */}
      {Lottie && animations.floaters && (
        <div className="absolute inset-0 z-5 opacity-40 pointer-events-none overflow-hidden">
          <Lottie
            animationData={animations.floaters}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* Animated decorative orbs */}
      <div className="absolute top-20 right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl z-10" />

      {/* Main content container */}
      <div className="relative z-30 container max-w-6xl px-6 md:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Animated frame border accent */}
            <div className="mb-12 h-20 flex items-center opacity-0 animate-[fadeInDown_1s_ease-out_0.3s_forwards]">
              <div className="w-32 h-1 bg-gradient-to-r from-white via-white to-transparent" />
            </div>

            {/* Main headline */}
            <div className="mb-8 space-y-4">
              <p className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] text-white/40 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0">
                Premium Motion Graphics
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
                Motion Graphics
              </h1>

              {/* Animated connector between text */}
              <div className="flex items-center gap-4 my-4 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
                {Lottie && animations.connector ? (
                  <div className="h-16 w-48 flex-shrink-0">
                    <Lottie
                      animationData={animations.connector}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ) : (
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white/60">
                    &
                  </span>
                )}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white/80 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
                Designer
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-md mt-8 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] opacity-0">
                Premium video production & motion design for brands that demand excellence. Working with Fortune 500 companies and forward-thinking agencies.
              </p>

              {/* Meta */}
              <div className="space-y-2 mt-6 text-xs font-mono uppercase tracking-widest text-zinc-500 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
                <p>📍 NYC Based · Available Globally</p>
                <p>⚡ Video Production · Motion Design · Editing</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards] opacity-0">
                <Link
                  href="/#portfolio"
                  className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Hero visual with animated ampersand */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end relative h-96 md:h-full md:min-h-96">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[fadeInScale_1s_ease-out_0.2s_forwards] opacity-0">
              {/* Outer glow ring */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse" />

              {/* Animated ampersand - Lottie or SVG fallback */}
              <div className="w-full h-full flex items-center justify-center relative">
                {Lottie && animations.ampersand ? (
                  <div className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Lottie
                      animationData={animations.ampersand}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ) : (
                  <svg
                    className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-[glow-pulse_3s_ease-in-out_infinite]"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                    <text
                      x="200"
                      y="240"
                      fontSize="160"
                      fontWeight="900"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="system-ui"
                    >
                      &
                    </text>
                  </svg>
                )}
              </div>

              {/* Inner glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeInUp_0.8s_ease-out_1s_forwards] opacity-0">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-600">Scroll to explore</p>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
