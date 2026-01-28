"use client";

import { useEffect, useState } from "react";

interface SignatureProps {
  animated?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function Signature({
  animated = true,
  className = "",
  size = "medium",
}: SignatureProps) {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (animated) {
      // Trigger animation on mount
      setIsVisible(true);
    }
  }, [animated]);

  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
    large: "w-32 h-32",
  };

  const svgSizes = {
    small: "48px",
    medium: "80px",
    large: "128px",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} ${
        animated && isVisible ? "animate-fade-in" : ""
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: animated ? "opacity 0.8s ease-out" : "none",
      }}
    >
      {/* Black Letter "C" Signature */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={svgSizes[size]}
        height={svgSizes[size]}
        className="w-full h-full"
      >
        {/* Stylized "C" for Colton */}
        <g>
          {/* Main curved letter C */}
          <path
            d="M 75 20 Q 90 35 90 50 Q 90 65 75 80 Q 60 95 45 95 Q 25 95 15 80 L 25 70 Q 32 80 45 80 Q 60 80 70 70 Q 80 60 80 50 Q 80 40 70 30 Q 60 20 45 20 Q 32 20 25 30 L 15 20 Q 25 5 45 5 Q 60 5 75 20"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
          />
          {/* Small accent dot/mark for personality */}
          <circle cx="35" cy="50" r="2.5" fill="white" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
