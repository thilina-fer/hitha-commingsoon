"use client";

import { motion } from "framer-motion";

export function AnimatedWaves() {
  // Unique fluid paths for each layer to make it realistic
  const wavePath1 = "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
  const wavePath2 = "M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,208C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
  const wavePath3 = "M0,128L40,138.7C80,149,160,171,240,176C320,181,400,171,480,160C560,149,640,139,720,154.7C800,171,880,213,960,224C1040,235,1120,213,1200,186.7C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[var(--mint)]/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--mint)]/50" />

      {/* Wave 1 (Back, Slow, Light Green) */}
      <motion.div
        className="absolute bottom-0 left-0 flex"
        style={{ width: "200vw", height: "25vh" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <WaveSVG path={wavePath1} fill="var(--lgreen)" opacity={0.3} height="25vh" />
        <WaveSVG path={wavePath1} fill="var(--lgreen)" opacity={0.3} height="25vh" />
      </motion.div>

      {/* Wave 2 (Middle, Medium, Teal) */}
      <motion.div
        className="absolute bottom-0 left-0 flex"
        style={{ width: "200vw", height: "20vh" }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <WaveSVG path={wavePath2} fill="var(--teal)" opacity={0.4} height="20vh" />
        <WaveSVG path={wavePath2} fill="var(--teal)" opacity={0.4} height="20vh" />
      </motion.div>

      {/* Wave 3 (Front, Fast, Navy) */}
      <motion.div
        className="absolute bottom-0 left-0 flex"
        style={{ width: "200vw", height: "15vh" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <WaveSVG path={wavePath3} fill="var(--navy)" opacity={0.2} height="15vh" />
        <WaveSVG path={wavePath3} fill="var(--navy)" opacity={0.2} height="15vh" />
      </motion.div>
    </div>
  );
}

// A seamless, repeating fluid path
function WaveSVG({ path, fill, opacity, height }: { path: string, fill: string, opacity: number, height: string }) {
  return (
    <svg
      style={{ fill, opacity, width: "100vw", height, display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path d={path}></path>
    </svg>
  );
}
