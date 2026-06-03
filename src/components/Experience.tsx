"use client";

import { motion as fm } from "framer-motion";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

const experienceData: TimelineItem[] = [
  {
    role: "College-Facilitated Development Training – MERN Stack",
    company: "CodeHubNexus (Academic Program)",
    period: "January 2025",
    description: "Participated in a college-facilitated hands-on training and project development internship program focused on constructing full-stack web architectures. Gained practical experience building modular REST APIs, designing databases, and handling state in modern client interfaces.",
    bullets: [
      "Developed and documented RESTful API endpoints for authentication and database routing.",
      "Engineered MongoDB data structures to optimize application state query flows.",
      "Learned session management techniques using JWT tokens and secure cookie exchanges.",
      "Built responsive client views with React components, focusing on proper state hydration."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg"
    >
      {/* Decorative Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <fm.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-3"
          >
            <span className="text-cyber-cyan font-mono">&lt;</span>
            Work History
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </fm.h2>
          <fm.div
            initial={{ width: 0 }}
            whileInView={{ width: "90px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-cyber-border/70 ml-4 md:ml-6 space-y-12 py-4">
          
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Bullet Node */}
              <fm.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-border group-hover:border-cyber-cyan group-hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-gray group-hover:bg-cyber-cyan transition-colors" />
              </fm.div>

              {/* Main Card */}
              <fm.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="p-6 md:p-8 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 group-hover:border-cyber-cyan/35 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.03)] transition-all duration-300 hud-corner"
              >
                <div className="hud-tick" />
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-space text-lg font-bold text-white tracking-wide group-hover:text-cyber-cyan transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-cyber-gray font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-cyber-emerald" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-cyber-cyan w-fit">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Main Desc */}
                <p className="font-inter text-xs text-cyber-gray leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Achievements Bullet List */}
                <ul className="space-y-3.5 border-t border-cyber-border/30 pt-5">
                  {item.bullets.map((bullet, bIdx) => (
                    <fm.li
                      key={bIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: bIdx * 0.1 }}
                      className="flex items-start gap-3 text-xs text-cyber-gray/95 font-inter leading-relaxed"
                    >
                      <CheckSquare className="w-4 h-4 text-cyber-emerald mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </fm.li>
                  ))}
                </ul>

              </fm.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
