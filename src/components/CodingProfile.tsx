"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

// CountUp Component for animated numbers
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function CodingProfile() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="coding-profile"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg-darker"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-3"
          >
            <span className="text-cyber-cyan font-mono">&lt;</span>
            LeetCode Metrics
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "110px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
          <p className="mt-4 text-xs font-mono text-cyber-gray max-w-xl mx-auto uppercase tracking-widest">
            Algorithmic efficiency and competitive coding stats.
          </p>
        </div>

        {/* Simplified Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
          
          {/* Rating Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between hud-corner"
          >
            <div className="hud-tick" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-space text-[10px] font-bold text-cyber-cyan tracking-widest uppercase">
                  Contest Standing
                </span>
                <Award className="w-5 h-5 text-cyber-cyan" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-space text-5xl sm:text-6xl font-extrabold text-white">
                  <CountUp end={1738} />
                </h3>
                <p className="font-inter text-xs text-cyber-gray leading-relaxed">
                  Peak Rating achieved: <span className="text-white font-mono font-semibold">1676</span>
                </p>
              </div>
            </div>
            
            {/* Badge level indicator */}
            <div className="mt-8 pt-5 border-t border-cyber-border/30 flex justify-between items-center text-xs">
              <span className="text-cyber-gray font-mono text-[10px]">Rank Tier</span>
              <span className="px-3 py-1 rounded bg-cyan-950/50 border border-cyber-cyan/30 text-[9px] font-mono text-cyber-cyan font-bold uppercase tracking-wider">
                Knight Equivalent
              </span>
            </div>
          </motion.div>

          {/* Solved Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-emerald/35 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between hud-corner"
          >
            <div className="hud-tick" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-emerald/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-space text-[10px] font-bold text-cyber-emerald tracking-widest uppercase">
                  Problem Inventory
                </span>
                <CheckCircle2 className="w-5 h-5 text-cyber-emerald" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-space text-5xl sm:text-6xl font-extrabold text-white">
                  <CountUp end={490} suffix="+" />
                </h3>
                <p className="font-inter text-xs text-cyber-gray leading-relaxed">
                  Consistent daily algorithmic updates
                </p>
              </div>
            </div>

            {/* Progress split */}
            <div className="mt-8 space-y-2.5 pt-5 border-t border-cyber-border/30">
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-cyber-gray">Easy (180)</span>
                <span className="text-cyber-emerald">Med (260)</span>
                <span className="text-rose-400">Hard (50)</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                <div className="h-full bg-cyber-emerald" style={{ width: "37%" }} />
                <div className="h-full bg-cyber-cyan" style={{ width: "53%" }} />
                <div className="h-full bg-rose-500" style={{ width: "10%" }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Call for Profiles */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="https://leetcode.com/u/bharath__005/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyber-cyan/50 text-cyber-cyan font-space text-xs font-bold uppercase tracking-wider bg-cyan-950/10 hover:bg-cyber-cyan hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer"
          >
            Visit LeetCode Profile
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
