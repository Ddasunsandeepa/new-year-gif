"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  left: string;
  top: string;
  duration: number;
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [fireworks] = useState(() =>
    Array.from({ length: 6 }).map(() => ({
      left: `${10 + Math.random() * 80}vw`,
      top: `${10 + Math.random() * 40}vh`,
      size: 60 + Math.random() * 80,
      delay: Math.random() * 4,
    }))
  );

  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: 2 + Math.random() * 3,
    }))
  );

  const [snowflakes] = useState(() =>
    Array.from({ length: 35 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      size: 1 + Math.random() * 3,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }))
  );

  if (!mounted) return null;

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#0b1026] to-[#1a1f4a]">
      {/* ⭐ Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ❄️ Snowfall */}
      {snowflakes.map((flake, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bg-white rounded-full opacity-80"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
          }}
          animate={{ y: "110vh" }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 🎆 Fireworks */}
      {fireworks.map((fw, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-yellow-300"
          style={{
            left: fw.left,
            top: fw.top,
            width: fw.size,
            height: fw.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.2], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: fw.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* 🌙 Glowing Moon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-yellow-200 shadow-[0_0_80px_30px_rgba(255,255,200,0.6)]"
      />

      {/* 🎉 New Year Text */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
        transition={{
          delay: 2,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
      >
        <h1 className="text-white font-extrabold text-5xl md:text-7xl drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">
          Happy New Year
        </h1>
        <span className="mt-2 text-yellow-300 font-extrabold text-6xl md:text-8xl drop-shadow-[0_0_30px_rgba(255,215,0,0.9)]">
          2026
        </span>
      </motion.div>
      {/* 🏙️ Ground / Silhouette */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent" />
      <div className="absolute bottom-0 w-full h-20 bg-[#020617]" />
    </main>
  );
}
