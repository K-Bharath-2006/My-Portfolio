"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Download, Mail } from "lucide-react";

const roles = [
  "Backend Developer",
  "System Design Enthusiast",
  "MERN Stack Developer",
  "AI & ML Explorer",
  "Modern Application Architect",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    const tick = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        setTypedText((prev) => currentFullText.slice(0, prev.length + 1));
      }

      let speed = isDeleting ? 30 : 80;

      if (!isDeleting && typedText === currentFullText) {
        speed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        speed = 500;
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Particle Canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cyber-bg-darker pt-20"
    >
      {/* Background Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyber-cyan/10 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyber-emerald/10 blur-[130px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      {/* Floating Blueprint Code Snippets (Left & Right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-[14%] top-[20%] p-4 rounded-xl border border-white/[0.03] bg-white/[0.005] font-mono text-[9px] text-cyber-cyan/30 hidden xl:block pointer-events-none select-none z-10"
      >
        <pre>{`const express = require('express');
const app = express();
app.use(jwtAuth);
app.get('/api/v1/status', (req, res) => {
  res.json({ core: "online" });
});`}</pre>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute right-[14%] top-[55%] p-4 rounded-xl border border-white/[0.03] bg-white/[0.005] font-mono text-[9px] text-cyber-emerald/30 hidden xl:block pointer-events-none select-none z-10"
      >
        <pre>{`@RestController
public class Router {
  @Autowired
  private CacheManager redis;
  @GetMapping("/v2/route")
  public Response dispatch() {
    return ok();
  }
}`}</pre>
      </motion.div>

      <div className="relative z-10 max-w-5xl px-6 py-12 text-center flex flex-col items-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-cyan/35 bg-cyan-950/20 text-cyber-cyan font-mono text-xs tracking-wider"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
          </span>
          SYSTEM ARCHITECTURE & FULL STACK
        </motion.div>

        {/* Hello Text */}
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-lg md:text-xl font-medium text-cyber-gray tracking-widest uppercase mb-3"
        >
          Hi, I am
        </motion.h4>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Bharath K
          </span>
        </motion.h1>

        {/* Animated Subtitle Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 sm:h-12 md:h-14 mb-8 flex items-center justify-center font-space text-xl sm:text-2xl md:text-3xl text-cyber-cyan font-semibold"
        >
          <span>{typedText}</span>
          <span className="w-[3px] h-[22px] sm:h-[28px] md:h-[34px] ml-1 bg-cyber-emerald animate-pulse" />
        </motion.div>

        {/* Short Bio description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-cyber-gray mb-10 leading-relaxed font-inter"
        >
          Enthusiastic Full Stack Developer specializing in building high-performance 
          web architectures, modular microservices, and AI-powered automation platforms.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-space font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-cyber-cyan to-cyber-emerald text-black shadow-[0_4px_30px_rgba(6,182,212,0.35)] hover:shadow-[0_4px_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="/Bharath_K.pdf"
            download="Bharath_K.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-space font-bold text-sm tracking-wider uppercase border border-cyber-border text-white bg-cyber-card/40 hover:bg-white/5 hover:border-cyber-cyan/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Download Resume
            <Download className="w-4 h-4 text-cyber-emerald" />
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-space font-bold text-sm tracking-wider uppercase text-cyber-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/K-Bharath-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyber-border bg-cyber-card/40 text-cyber-gray hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/bharath-k-a05b2b350"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyber-border bg-cyber-card/40 text-cyber-gray hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://leetcode.com/u/bharath__005/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyber-border bg-cyber-card/40 text-cyber-gray hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300"
            title="LeetCode Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-7.72 7.72a1.374 1.374 0 0 0 0 1.943l4.673 4.673a1.374 1.374 0 0 0 1.943 0l7.72-7.72a1.374 1.374 0 0 0 0-1.943L14.464.414A1.374 1.374 0 0 0 13.483 0zm-6.19 8.68a.862.862 0 0 1 1.218 0l3.896 3.895a.862.862 0 0 1 0 1.218l-3.896 3.896a.862.862 0 0 1-1.218 0l-3.896-3.896a.862.862 0 0 1 0-1.218zm13.12 2.656a.862.862 0 0 1 1.217 0l1.948 1.948a.862.862 0 0 1 0 1.218l-3.896 3.896a.862.862 0 0 1-1.217 0l-1.949-1.948a.862.862 0 0 1 0-1.218zm-4.708 4.707a.862.862 0 0 1 1.218 0l1.948 1.948a.862.862 0 0 1 0 1.218l-1.948 1.948a.862.862 0 0 1-1.218 0l-1.948-1.948a.862.862 0 0 1 0-1.218z" />
            </svg>
          </a>

          <a
            href="https://x.com/Mr__Black05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyber-border bg-cyber-card/40 text-cyber-gray hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300"
            title="X (Twitter) Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Slide down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[10px] tracking-widest text-cyber-cyan uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyber-cyan to-transparent"
        />
      </div>
    </section>
  );
}
