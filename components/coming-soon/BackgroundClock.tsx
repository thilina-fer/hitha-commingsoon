"use client";

import { motion } from "framer-motion";

export function BackgroundClock() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none bg-gradient-to-br from-white to-[var(--mint)]/40">
      
      {/* Clock Container */}
      <div className="relative w-[85vw] h-[85vw] sm:w-[60vw] sm:h-[60vw] max-w-[700px] max-h-[700px] opacity-[0.15] sm:opacity-[0.1]">
        
        {/* Base Orbital Rings */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {/* Inner Ring (Hours) */}
          <circle cx="50" cy="50" r="18" fill="none" stroke="var(--navy)" strokeWidth="0.2" opacity="0.4" strokeDasharray="1 2" />
          
          {/* Middle Ring (Minutes) */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="var(--teal)" strokeWidth="0.3" opacity="0.3" />
          
          {/* Outer Ring (Seconds) */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--teal)" strokeWidth="0.1" opacity="0.6" />
          
          {/* Center */}
          <circle cx="50" cy="50" r="2.5" fill="var(--teal)" opacity="0.2" />
          <circle cx="50" cy="50" r="1" fill="var(--navy)" />
        </svg>

        {/* Outer Orbit (Fast - Seconds) */}
        <motion.div
          className="absolute inset-0 origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="4" r="1.5" fill="var(--teal)" />
            {/* Trail */}
            <path d="M50 4 A 46 46 0 0 0 4 50" fill="none" stroke="url(#secGrad)" strokeWidth="0.4" opacity="0.5" />
            <defs>
              <linearGradient id="secGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--teal)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Middle Orbit (Medium - Minutes) */}
        <motion.div
          className="absolute inset-0 origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="18" r="2.2" fill="var(--navy)" opacity="0.8" />
            {/* Trail */}
            <path d="M50 18 A 32 32 0 0 0 18 50" fill="none" stroke="url(#minGrad)" strokeWidth="0.6" opacity="0.4" />
            <defs>
              <linearGradient id="minGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--navy)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--navy)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Inner Orbit (Slow - Hours) */}
        <motion.div
          className="absolute inset-0 origin-center"
          initial={{ rotate: 120 }}
          animate={{ rotate: 480 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="32" r="3" fill="var(--lgreen)" />
          </svg>
        </motion.div>

      </div>
    </div>
  );
}
