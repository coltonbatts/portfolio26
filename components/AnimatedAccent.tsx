"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Simple animated blob animation data
const blobAnimation = {
  v: "5.7.0",
  meta: { g: "LottieFiles Generated" },
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Animated Blob",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Blob",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360], i: { x: [0.667], y: [0] }, o: { x: [0.333], y: [1] } }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100], e: [110, 110, 100] }, { t: 60, s: [110, 110, 100], e: [100, 100, 100] }] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [150, 150] },
              p: { a: 0, k: [0, 0] },
              nm: "Ellipse 1",
              mn: "ADBE Vector Shape - Ellipse",
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 30 },
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
            },
          ],
          nm: "Blob Group",
          mn: "ADBE Vector Group",
        },
      ],
    },
  ],
};

interface AnimatedAccentProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export default function AnimatedAccent({
  className = "",
  size = 100,
  opacity = 0.3,
}: AnimatedAccentProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: "blur(40px)",
      }}
    >
      <Lottie
        animationData={blobAnimation}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
