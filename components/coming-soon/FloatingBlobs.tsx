"use client";

import { motion } from "framer-motion";

export function FloatingBlobs() {
  // 1. Top left (large) - teal to green
  const blob1Animation = {
    x: [0, 150, -100, 0],
    y: [0, -120, 80, 0],
    scale: [1, 1.15, 0.9, 1],
  };

  // 2. Bottom right (medium) - navy to teal
  const blob2Animation = {
    x: [0, -120, 90, 0],
    y: [0, 140, -100, 0],
    scale: [1, 0.9, 1.15, 1],
  };

  // 3. Center right (small) - lgreen to mint
  const blob3Animation = {
    x: [0, 100, -80, 0],
    y: [0, -90, 120, 0],
    scale: [1, 1.2, 0.85, 1],
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[var(--mint)]/30">
      <div className="absolute inset-0 w-full h-full">
        {/* Blob 1 (Large, Top-Left) */}
        <motion.div
          className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, var(--teal) 0%, var(--green) 50%, transparent 80%)",
          }}
          animate={blob1Animation}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob 2 (Medium, Bottom-Right) */}
        <motion.div
          className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, var(--navy) 0%, var(--teal) 50%, transparent 80%)",
          }}
          animate={blob2Animation}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob 3 (Small, Center-Right) */}
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, var(--lgreen) 0%, var(--mint) 50%, transparent 80%)",
          }}
          animate={blob3Animation}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
