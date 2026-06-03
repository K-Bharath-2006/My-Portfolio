"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, ExternalLink, BookOpen, X, Code } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { projectsData, Project } from "@/data/projectsData";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg"
      >
        {/* Decorative Glow */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-emerald/5 blur-[120px] pointer-events-none" />

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
              Engineering Case Studies
              <span className="text-cyber-cyan font-mono">/&gt;</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
            />
            <p className="mt-4 text-xs font-mono text-cyber-gray max-w-xl mx-auto uppercase tracking-widest">
              Architectural blueprints of modern distributed systems and integration designs.
            </p>
          </div>

          <div className="space-y-8">
            {projectsData.map((project, index) => {
              const isPrimary =
                project.id === "agroshield" ||
                project.id === "smart-civic" ||
                project.id === "smart-voting";

              return (
                <motion.div
                  key={project.id}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden p-6 md:p-10 rounded-3xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] hud-corner"
                >
                  <div className="hud-tick" />
                  
                  {/* Background outlined project number */}
                  <div className="absolute -right-4 -bottom-10 lg:bottom-auto lg:-top-10 text-[9rem] md:text-[12rem] lg:text-[15rem] font-space font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
                    0{index + 1}
                  </div>

                  {/* Left Column: Project Title, Description, and Key highlights (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-5 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[9px] text-cyber-cyan font-bold tracking-widest uppercase">
                        {isPrimary ? "Core System Architecture" : "Application Node"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan/30" />
                      <span className="font-mono text-[8px] text-cyber-gray uppercase tracking-widest">
                        SYS_STATUS: ACTIVE
                      </span>
                    </div>

                    <h3 className="font-space text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter group-hover:text-cyber-cyan transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="font-inter text-xs md:text-sm text-cyber-gray leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="pt-2">
                      <h4 className="font-space text-[9px] font-bold text-white uppercase tracking-wider mb-2.5">
                        System Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features?.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-[10px] md:text-xs text-cyber-gray font-mono"
                          >
                            <span className="w-1 h-1 bg-cyber-emerald rounded-full" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Tech Badges & Dynamic Actions (lg:col-span-5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-cyber-border/40 lg:pl-8 relative z-10">
                    <div>
                      <h4 className="font-space text-[9px] font-bold text-cyber-gray uppercase tracking-wider mb-3">
                        Infrastructure Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-[#080c14]/80 border border-cyber-border/80 text-[8px] font-mono text-cyber-cyan/95 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-4 border-t border-cyber-border/30">
                      {isPrimary ? (
                        /* Primary: Read documentation alone */
                        <button
                          onClick={() => setActiveProject(project)}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-emerald-950/40 border border-cyber-cyan/35 font-space text-[10px] font-bold tracking-wider uppercase text-cyber-cyan hover:from-cyber-cyan hover:to-cyber-emerald hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Read Full Documentation
                        </button>
                      ) : (
                        /* Secondary: Demo & Read Documentation */
                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-3.5 rounded-xl border border-cyber-border bg-[#080c14]/40 font-space text-[10px] font-bold tracking-wider uppercase text-white hover:border-cyber-cyan/50 hover:bg-white/5 flex items-center justify-center gap-1.5 transition-all duration-200"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                          <button
                            onClick={() => setActiveProject(project)}
                            className="py-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-emerald-950/40 border border-cyber-cyan/35 font-space text-[10px] font-bold tracking-wider uppercase text-cyber-cyan hover:from-cyber-cyan hover:to-cyber-emerald hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Readme
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Documentation Modal */}
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl h-[85vh] rounded-3xl glass-panel bg-cyber-card/95 border-cyber-border flex flex-col overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-cyber-border/50 bg-cyber-bg-darker/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyber-cyan/30 text-cyber-cyan flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-space text-base font-bold text-white">
                      {activeProject.title}
                    </h3>
                    <p className="font-mono text-[9px] text-cyber-gray">README.md</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-cyber-border text-cyber-gray hover:text-white hover:border-cyber-cyan/40 transition-colors"
                    title="View Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-xl border border-cyber-border text-cyber-gray hover:text-white hover:border-rose-500/40 hover:bg-rose-950/10 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Markdown Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 no-scrollbar">
                <article className="prose prose-invert max-w-none font-inter text-sm leading-relaxed text-cyber-gray space-y-6">
                  <ReactMarkdown
                    components={{
                      code: ({ className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          <div className="rounded-xl overflow-hidden my-4 border border-cyber-border/40">
                            <SyntaxHighlighter
                              style={atomDark as any}
                              language={match[1]}
                              PreTag="div"
                              customStyle={{
                                margin: 0,
                                background: "#010204",
                                padding: "1.25rem",
                                fontSize: "0.85rem",
                              }}
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code
                            className="px-1.5 py-0.5 rounded bg-white/10 text-cyber-cyan font-mono text-xs"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                      h1: ({ children }: any) => (
                        <h1 className="font-space text-2xl md:text-3xl font-extrabold text-white tracking-tight border-b border-cyber-border/30 pb-3 mb-6">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }: any) => (
                        <h2 className="font-space text-lg md:text-xl font-bold text-white tracking-wide mt-8 mb-4 flex items-center gap-2">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }: any) => (
                        <h3 className="font-space text-sm md:text-base font-bold text-white/90 tracking-wide mt-6 mb-3">
                          {children}
                        </h3>
                      ),
                      p: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
                      ul: ({ children }: any) => (
                        <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>
                      ),
                      ol: ({ children }: any) => (
                        <ol className="list-decimal pl-5 space-y-2 mb-4">{children}</ol>
                      ),
                      li: ({ children }: any) => <li>{children}</li>,
                      hr: () => <hr className="border-cyber-border/30 my-8" />,
                      strong: ({ children }: any) => (
                        <strong className="text-white font-bold">{children}</strong>
                      ),
                      a: ({ href, children }: any) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-cyan hover:underline hover:text-cyan-400"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {activeProject.readmeMarkdown}
                  </ReactMarkdown>
                </article>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-cyber-border/40 bg-cyber-bg-darker/60 flex items-center justify-between text-xs text-cyber-gray font-mono">
                <span>Verification Hash: SHA-256</span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-1.5 rounded-lg border border-cyber-border text-white hover:bg-white/5 hover:border-cyber-cyan/50 transition-all cursor-pointer"
                >
                  Close Doc
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
