"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full py-12 bg-cyber-bg border-t border-cyber-border/40 overflow-hidden">
      {/* Decorative background mesh */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyber-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand logo */}
        <div className="flex items-center gap-1.5 font-space text-lg font-bold text-white tracking-tight">
          <span className="text-cyber-cyan font-mono">&lt;</span>
          Bharath K
          <span className="text-cyber-cyan font-mono">/&gt;</span>
        </div>

        {/* Copyright info */}
        <div className="text-center text-xs font-mono text-cyber-gray">
          &copy; {new Date().getFullYear()} Bharath K. Engineered for Clean Architecture.
        </div>

        {/* Right Actions: Socials & Back-to-Top */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/K-Bharath-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-gray hover:text-cyber-cyan transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-k-a05b2b350"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-gray hover:text-cyber-cyan transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://x.com/Mr__Black05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-gray hover:text-cyber-cyan transition-colors"
              title="X (Twitter) Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-cyber-border bg-cyber-card/60 text-cyber-gray hover:text-cyber-cyan hover:border-cyber-cyan/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
