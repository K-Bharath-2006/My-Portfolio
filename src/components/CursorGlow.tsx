"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Mouse coordinates using Framer Motion motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };

    checkTouch();

    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        // Center the glow on the mouse pointer (offset by glow radius, 150px)
        mouseX.set(e.clientX - 150);
        mouseY.set(e.clientY - 150);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        left: glowX,
        top: glowY,
      }}
    >
      <div className="h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] blur-[40px]" />
    </motion.div>
  );
}
