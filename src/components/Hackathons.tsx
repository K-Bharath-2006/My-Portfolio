"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, Award, Target, Users } from "lucide-react";

interface HackathonItem {
  title: string;
  role: string;
  period: string;
  highlight: string;
  description: string;
  isWinner: boolean;
  tags: string[];
}

const hackathonsData: HackathonItem[] = [
  {
    title: "Hack With GDG",
    role: "36-Hour Hackathon Finalist",
    period: "2025",
    highlight: "Top Finalist Team",
    description: "Developed and pitched a scalable software prototype under a continuous 36-hour development cycle, addressing real-world civic tracking issues using real-time geolocation.",
    isWinner: true,
    tags: ["React Native", "Spring Boot", "GPS Tracking"],
  },
  {
    title: "TechNova'26 Hackathon",
    role: "Hackathon Participant",
    period: "2026",
    highlight: "Innovative Prototype Badge",
    description: "Competed with developer teams to engineer a functional microservices backend pipeline under tight time constraints, emphasizing modular REST APIs and caching.",
    isWinner: false,
    tags: ["Node.js", "Redis", "FastAPI"],
  },
];

export default function Hackathons() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hackathons"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg-darker"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-emerald/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
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
            Hackathons & Achievements
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "130px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
        </div>

        {/* Hackathon Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {hackathonsData.map((hack) => (
            <motion.div
              key={hack.title}
              variants={cardVariants}
              className={`group p-6 md:p-8 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hud-corner ${
                hack.isWinner ? "neon-glow-cyan" : "neon-glow-emerald"
              }`}
            >
              <div className="hud-tick" />
              {/* Glow effects inside card */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 pointer-events-none ${
                hack.isWinner ? "bg-cyber-cyan" : "bg-cyber-emerald"
              }`} />

              <div>
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className={`p-3 rounded-xl border flex items-center justify-center ${
                      hack.isWinner
                        ? "text-cyber-cyan border-cyber-cyan/35 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        : "text-cyber-emerald border-cyber-emerald/35 bg-emerald-950/20"
                    }`}>
                      {hack.isWinner ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-space text-base font-bold text-white tracking-wide">
                        {hack.title}
                      </h3>
                      <p className={`font-mono text-[9px] uppercase tracking-wider ${
                        hack.isWinner ? "text-cyber-cyan" : "text-cyber-emerald"
                      }`}>
                        {hack.role}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono text-cyber-gray">
                    {hack.period}
                  </span>
                </div>

                {/* Description */}
                <p className="font-inter text-xs text-cyber-gray leading-relaxed mb-6">
                  {hack.description}
                </p>
              </div>

              {/* Card Footer Details */}
              <div className="border-t border-cyber-border/30 pt-5 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-mono text-cyber-gray">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-cyber-cyan" />
                    {hack.highlight}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyber-emerald" />
                    Team Project
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {hack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
