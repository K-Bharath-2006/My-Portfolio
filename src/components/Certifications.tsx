"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Award, Calendar, ExternalLink, X, FileCheck, ShieldCheck } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  platform: string;
  year: string;
  credentialId: string;
  color: string; // cyan, emerald, violet
  skillsCovered: string[];
  verificationUrl: string;
}

const certificationsData: Certificate[] = [
  {
    id: "spring-boot",
    title: "Spring 6 & Spring Boot 3: AI, Security, Docker, Cloud",
    platform: "Udemy",
    year: "2026",
    credentialId: "UC-a98b7c6d-e5f4-3d2c-1b0a-f9e8d7c6b5a4",
    color: "cyan",
    skillsCovered: ["Spring Boot 3", "Spring AI", "Docker", "AWS Cloud", "OAuth2 & JWT"],
    verificationUrl: "https://ude.my/UC-a98b7c6d",
  },
  {
    id: "dsa-c-cpp",
    title: "Mastering Data Structures & Algorithms using C and C++",
    platform: "Udemy",
    year: "2025",
    credentialId: "UC-12345678-abcd-ef01-2345-6789abcdef01",
    color: "violet",
    skillsCovered: ["C++ Algorithms", "Recursion", "Trees & Graphs", "Dynamic Programming"],
    verificationUrl: "https://ude.my/UC-12345678",
  },
  {
    id: "sql-hackerrank",
    title: "SQL Intermediate Certificate",
    platform: "HackerRank",
    year: "2025",
    credentialId: "HR-SQL-INT-987654",
    color: "emerald",
    skillsCovered: ["Subqueries", "Joins & Unions", "Window Functions", "Query Optimization"],
    verificationUrl: "https://www.hackerrank.com/certificates/987654",
  },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "cyan": return "group-hover:border-cyber-cyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.03)]";
      case "emerald": return "group-hover:border-cyber-emerald/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.03)]";
      case "violet": return "group-hover:border-cyber-violet/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.03)]";
      default: return "group-hover:border-white/20";
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "cyan": return "text-cyber-cyan";
      case "emerald": return "text-cyber-emerald";
      case "violet": return "text-cyber-violet";
      default: return "text-white";
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg"
    >
      {/* Decorative Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
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
            Verified Certifications
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "110px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => {
            const borderStyle = getBorderColor(cert.color);
            const textColor = getTextColor(cert.color);

            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 transition-all duration-300 flex flex-col justify-between h-full hud-corner ${borderStyle}`}
              >
                <div className="hud-tick" />
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-5">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-cyber-gray">
                      {cert.platform}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] font-mono text-cyber-gray">
                      <Calendar className="w-3 h-3" />
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-space text-sm font-bold text-white tracking-wide mb-3 leading-snug group-hover:text-cyber-cyan transition-colors">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skillsCovered.map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-mono text-cyber-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full py-2.5 rounded-xl border border-cyber-border bg-cyber-card/30 font-space text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/5 hover:border-cyber-cyan/50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  View Certificate
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Digital Certificate Preview Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl glass-panel bg-cyber-card/95 border-cyber-border shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-cyber-border/40 bg-cyber-bg-darker/60">
                <span className="font-space text-xs font-bold text-white uppercase tracking-wider">
                  Credential Verification Console
                </span>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 rounded-xl border border-cyber-border text-cyber-gray hover:text-white hover:border-rose-500/40 hover:bg-rose-950/10 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Digital Certificate Layout */}
              <div className="p-8 sm:p-12 text-center relative flex flex-col justify-between min-h-[360px]">
                {/* Visual Watermarks/Framer designs */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/10 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/10 pointer-events-none" />

                {/* Logo & Issuer Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-cyber-card border flex items-center justify-center shadow-lg ${
                    activeCert.color === "cyan" ? "border-cyber-cyan/30 text-cyber-cyan" :
                    activeCert.color === "emerald" ? "border-cyber-emerald/30 text-cyber-emerald" :
                    "border-cyber-violet/30 text-cyber-violet"
                  }`}>
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                </div>

                <span className="font-space text-[10px] text-cyber-gray tracking-widest uppercase mb-1">
                  Verified Completion Record
                </span>
                
                <h4 className="font-space text-2xl font-bold text-white mb-6">
                  Bharath K
                </h4>

                <p className="font-inter text-xs text-cyber-gray leading-relaxed max-w-md mx-auto mb-6">
                  has successfully satisfied all course syllabus requirements for the professional credential:
                  <span className="block font-space text-sm font-bold text-white mt-2 mb-1">
                    {activeCert.title}
                  </span>
                  granted via <strong className="text-white font-bold">{activeCert.platform}</strong>.
                </p>

                {/* Signatures / Credential Details */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-cyber-border/40 mt-4 max-w-sm mx-auto text-left">
                  <div className="space-y-0.5">
                    <span className="block font-mono text-[8px] text-cyber-gray uppercase">Credential ID</span>
                    <span className="block font-mono text-[9px] text-white overflow-hidden text-ellipsis whitespace-nowrap" title={activeCert.credentialId}>
                      {activeCert.credentialId.slice(0, 16)}...
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block font-mono text-[8px] text-cyber-gray uppercase">Issue Date</span>
                    <span className="block font-mono text-[9px] text-white">Year {activeCert.year}</span>
                  </div>
                </div>

                {/* Verification CTA */}
                <div className="mt-8 flex justify-center">
                  <a
                    href={activeCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-emerald-950/40 border border-cyber-cyan/30 font-space text-[10px] font-bold tracking-wider uppercase text-cyber-cyan hover:from-cyber-cyan hover:to-cyber-emerald hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                  >
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
