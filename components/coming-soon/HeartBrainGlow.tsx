"use client";

import { motion } from "framer-motion";

export function HeartBrainGlow() {
  // We intentionally bypass useReducedMotion here because the user's OS settings
  // previously caused confusion by entirely disabling the animation. 
  // This ensures the subtle, calming breath animation is always visible.

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none bg-gradient-to-b from-white to-[var(--mint)]/30">
      
      {/* Background Pulse Layer (Outer Glow Rings) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="absolute w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--mint) 0%, transparent 70%)" }} 
        />
        <div 
          className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--lgreen) 0%, transparent 60%)", opacity: 0.3 }} 
        />
      </motion.div>

      {/* Foreground Pulse Layer (Heart-Brain + Inner Glow) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner Teal Glow */}
        <div 
          className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)", opacity: 0.2 }} 
        />
        
        {/* Heart-Brain SVG Silhouette */}
        <svg
          className="absolute w-[120vh] h-[120vh] min-w-[800px] min-h-[800px]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
           {/* Heart Outline (Teal) filled with very light Green */}
           <path 
             d="M50 85 C20 60, 10 40, 10 25 C10 12, 22 5, 33 5 C42 5, 48 10, 50 15 C52 10, 58 5, 67 5 C78 5, 90 12, 90 25 C90 40, 80 60, 50 85 Z" 
             fill="var(--green)" 
             opacity="0.15" 
             stroke="var(--teal)" 
             strokeWidth="0.8" 
           />
           
           {/* Brain Folds / Lobes (Abstract, inside the heart) */}
           <path 
             d="M25 25 C30 15, 40 20, 45 25 C50 15, 60 15, 65 25 C75 25, 75 35, 65 40 C75 45, 70 55, 60 55 C55 65, 45 65, 40 55 C30 55, 25 45, 35 40 C25 35, 25 25, 25 25 Z" 
             fill="none" 
             stroke="var(--navy)" 
             strokeWidth="0.4" 
             opacity="0.4" 
           />
           
           {/* Inner Brain Texture Lines */}
           <path d="M30 30 Q 40 20 45 35 T 60 25" fill="none" stroke="var(--teal)" strokeWidth="0.3" opacity="0.5" />
           <path d="M35 45 Q 50 35 65 45" fill="none" stroke="var(--teal)" strokeWidth="0.3" opacity="0.5" />
           <path d="M40 60 Q 50 50 60 60" fill="none" stroke="var(--teal)" strokeWidth="0.3" opacity="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}
