"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Server, Layout, Database } from "lucide-react";

export default function About() {
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
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg"
    >
      {/* Decorative Blur */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-emerald/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-3"
          >
            <span className="text-cyber-cyan font-mono">&lt;</span>
            About Me
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto md:mx-0 rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              variants={cardVariants}
              className="text-lg text-white font-medium leading-relaxed font-space"
            >
              I am a passionate Full Stack Developer focused on building modern, scalable, 
              and architecture-driven applications that solve real-world problems.
            </motion.p>

            <motion.p
              variants={cardVariants}
              className="text-base text-cyber-gray leading-relaxed font-inter"
            >
              I enjoy designing efficient backend systems, developing responsive user 
              interfaces, and creating software solutions that combine performance, 
              usability, and clean architecture. My primary interests lie in backend 
              engineering, system design, and building impactful products.
            </motion.p>

            <motion.p
              variants={cardVariants}
              className="text-base text-cyber-gray leading-relaxed font-inter"
            >
              I also have a growing interest in Artificial Intelligence, Machine Learning, 
              and Deep Learning-based systems for real-world applications, exploring 
              innovative integrations between predictive modeling and scalable web servers.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="p-4 rounded-2xl glass-panel bg-cyber-card/30 border-cyber-border/40 hover:border-cyber-cyan/35 transition-all duration-300">
                <Layout className="w-5 h-5 text-cyber-cyan mb-2" />
                <h4 className="font-space text-sm font-bold text-white mb-0.5">Frontend</h4>
                <p className="font-inter text-xs text-cyber-gray">React, React Native, Tailwind CSS</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel bg-cyber-card/30 border-cyber-border/40 hover:border-cyber-emerald/35 transition-all duration-300">
                <Server className="w-5 h-5 text-cyber-emerald mb-2" />
                <h4 className="font-space text-sm font-bold text-white mb-0.5">Backend</h4>
                <p className="font-inter text-xs text-cyber-gray">Spring Boot, Node, Express, FastAPI</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel bg-cyber-card/30 border-cyber-border/40 hover:border-cyber-violet/35 transition-all duration-300">
                <Database className="w-5 h-5 text-cyber-violet mb-2" />
                <h4 className="font-space text-sm font-bold text-white mb-0.5">Databases</h4>
                <p className="font-inter text-xs text-cyber-gray">SQL, PostgreSQL, MongoDB</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel bg-cyber-card/30 border-cyber-border/40 hover:border-white/20 transition-all duration-300">
                <Cpu className="w-5 h-5 text-neutral-400 mb-2" />
                <h4 className="font-space text-sm font-bold text-white mb-0.5">Concepts</h4>
                <p className="font-inter text-xs text-cyber-gray">DSA, System Design, OOPs</p>
              </div>
            </motion.div>
          </div>

          {/* Right Architectural Diagram Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              variants={cardVariants}
              className="relative w-full max-w-[400px] h-[380px] p-6 rounded-3xl glass-panel bg-cyber-card/50 border-cyber-border/80 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden group hud-corner"
            >
              <div className="hud-tick" />
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)]" />

              {/* Title */}
              <div className="flex items-center justify-between border-b border-cyber-border/50 pb-3 z-10">
                <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase font-bold">
                  System Architecture View
                </span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-ping" />
              </div>

              {/* Architecture Node Visualization */}
              <div className="relative flex-1 flex items-center justify-center py-4 z-10">
                
                {/* Connection lines (Animated SVGs) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Lines between Client and Gateway */}
                  <line x1="50%" y1="20%" x2="50%" y2="45%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  
                  {/* Lines between Gateway and Services */}
                  <line x1="50%" y1="45%" x2="25%" y2="70%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="50%" y1="45%" x2="75%" y2="70%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  
                  {/* Animated Pulses */}
                  <motion.circle r="3" fill="#06b6d4"
                    animate={{ cy: ["20%", "45%"], cx: ["50%", "50%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle r="3" fill="#10b981"
                    animate={{ cy: ["45%", "70%"], cx: ["50%", "25%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                  <motion.circle r="3" fill="#8b5cf6"
                    animate={{ cy: ["45%", "70%"], cx: ["50%", "75%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1.2 }}
                  />
                </svg>

                {/* Client Node */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl glass-panel bg-[#0e1628]/90 border-cyber-cyan/30 text-center flex flex-col items-center shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                >
                  <Layout className="w-4 h-4 text-cyber-cyan mb-1" />
                  <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider">Client Layer</span>
                  <span className="font-mono text-[8px] text-cyber-cyan">NextJS / Mobile</span>
                </motion.div>

                {/* API Gateway Node */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-[40%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl glass-panel bg-[#0e1628]/90 border-white/10 text-center flex flex-col items-center"
                >
                  <Cpu className="w-4 h-4 text-white mb-1" />
                  <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider">API Gateway</span>
                  <span className="font-mono text-[8px] text-cyber-gray">Reverse Proxy</span>
                </motion.div>

                {/* Microservice 1 (Spring Boot / Node) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-[10%] px-3 py-2 rounded-xl glass-panel bg-[#0e1628]/90 border-cyber-emerald/30 text-center flex flex-col items-center"
                >
                  <Server className="w-4 h-4 text-cyber-emerald mb-1" />
                  <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider">Spring / Node</span>
                  <span className="font-mono text-[8px] text-cyber-emerald">API Server</span>
                </motion.div>

                {/* Microservice 2 (FastAPI / AI) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 right-[10%] px-3 py-2 rounded-xl glass-panel bg-[#0e1628]/90 border-cyber-violet/30 text-center flex flex-col items-center"
                >
                  <Database className="w-4 h-4 text-cyber-violet mb-1" />
                  <span className="font-space text-[10px] font-bold text-white uppercase tracking-wider">FastAPI / AI</span>
                  <span className="font-mono text-[8px] text-cyber-violet">Microservice</span>
                </motion.div>
              </div>

              {/* Status footer inside visual */}
              <div className="flex items-center justify-between border-t border-cyber-border/50 pt-2 z-10 text-[9px] font-mono text-cyber-gray">
                <span>Latency: 12ms</span>
                <span className="text-cyber-emerald">STATUS: ACTIVE</span>
              </div>

              {/* Glowing gradient borders */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-emerald to-cyber-violet opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
