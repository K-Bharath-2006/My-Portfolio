"use client";

import { motion, Variants } from "framer-motion";
import { Server, Layout, Code2, Database, BrainCircuit } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Server className="w-4 h-4" />,
    color: "cyan",
    skills: ["Spring Boot", "Node.js", "Express.js", "FastAPI (Python)"],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-4 h-4" />,
    color: "emerald",
    skills: ["React.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-4 h-4" />,
    color: "violet",
    skills: ["C", "C++", "JavaScript", "Java", "Python", "HTML", "CSS"],
  },
  {
    title: "Databases",
    icon: <Database className="w-4 h-4" />,
    color: "amber",
    skills: ["SQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Core Concepts",
    icon: <BrainCircuit className="w-4 h-4" />,
    color: "rose",
    skills: ["DSA", "OOPS", "DBMS", "System Design"],
  },
];

// SVG Logos mapping for all 21 skills
const skillLogos: Record<string, React.ReactNode> = {
  "Spring Boot": (
    <svg className="w-3.5 h-3.5 fill-current text-[#6DB33F]" viewBox="0 0 24 24">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12c6.621 0 12-5.376 12-12S18.621 0 12 0zm5.666 14.887c-.12.441-.365.882-.736 1.32-.435.518-.946.885-1.533 1.1-.588.214-1.229.32-1.92.32-.888 0-1.638-.198-2.25-.59-.612-.395-1.077-.92-1.395-1.579-.317-.655-.477-1.393-.477-2.213 0-.82.163-1.564.489-2.235.326-.67.794-1.203 1.403-1.597.609-.395 1.341-.592 2.196-.592.933 0 1.693.228 2.28.685.588.456.963 1.071 1.125 1.84h-1.977c-.105-.333-.312-.612-.621-.837-.309-.225-.72-.338-1.233-.338-.57 0-1.017.189-1.341.567-.324.378-.486.974-.486 1.789s.162 1.411.486 1.789c.324.378.771.567 1.341.567.489 0 .88-.108 1.173-.324.293-.216.488-.501.585-.855h1.996zM12 8.351V20.25H9.988V13.88c-.378.435-.855.77-1.431 1.005-.576.235-1.2.353-1.872.353-.888 0-1.637-.198-2.247-.594-.609-.396-1.073-.923-1.392-1.581-.318-.658-.477-1.395-.477-2.212 0-.817.162-1.56.486-2.228.324-.668.791-1.2 1.401-1.596.609-.396 1.341-.594 2.196-.594.672 0 1.296.118 1.872.353.576.235 1.053.57 1.431 1.005V8.351H12zm-3.327 5.762c.309-.225.517-.504.624-.837V11.23c-.107-.333-.315-.612-.624-.837-.309-.225-.72-.338-1.233-.338-.57 0-1.017.189-1.341.567-.324.378-.486.975-.486 1.789s.162 1.411.486 1.789c.324.378.771.567 1.341.567.513 0 .924-.113 1.233-.338z" />
    </svg>
  ),
  "Node.js": (
    <svg className="w-3.5 h-3.5 fill-current text-[#339933]" viewBox="0 0 24 24">
      <path d="M12 1.25L3 6.45v10.4l9 5.2 9-5.2v-10.4l-9-5.2zm7.5 14.73l-7.5 4.33-7.5-4.33V7.27l7.5-4.33 7.5 4.33v8.71zM12 6.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5-2.46-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  ),
  "Express.js": (
    <svg className="w-3.5 h-3.5 fill-current text-[#ffffff]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13H9V9h2v6zm4-3.5h-2v1.5h2v2h-4V9h4v2.5z" />
    </svg>
  ),
  "FastAPI (Python)": (
    <svg className="w-3.5 h-3.5 fill-current text-[#059669]" viewBox="0 0 24 24">
      <path d="M12 0L1.5 12h9L8.5 24 22.5 12h-9L12 0z" />
    </svg>
  ),
  "React.js": (
    <svg className="w-3.5 h-3.5 fill-none stroke-[#61DAFB] stroke-2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  "React Native": (
    <svg className="w-3.5 h-3.5 fill-none stroke-[#61DAFB] stroke-2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="w-3.5 h-3.5 fill-current text-[#06B6D4]" viewBox="0 0 24 24">
      <path d="M12 6.002C12.002 6 15 3 20 3c3 0 4 2.5 4 4.5 0 6.5-6.5 10.5-12 10.5s-12-4-12-10.5C0 5.5 1 3 4 3c5 0 7.998 3 8 3.002zM12 18c-3 0-8-1.5-8-5.5 0-3.5 3-5.5 8-5.5s8 2 8 5.5c0 4-5 5.5-8 5.5z" />
    </svg>
  ),
  "C": (
    <svg className="w-3.5 h-3.5 fill-current text-[#A8B9CC]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5c1.48 0 2.78.73 3.56 1.84l-1.63 1.15c-.41-.58-.99-.99-1.93-.99-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.94 0 1.52-.41 1.93-.99l1.63 1.15c-.78 1.11-2.08 1.84-3.56 1.84z" />
    </svg>
  ),
  "C++": (
    <svg className="w-3.5 h-3.5 fill-current text-[#00599C]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 3.56 1.84 3.56 1.84l-1.63 1.15s-.41-.99-1.93-.99-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 1.93-.99 1.93-.99l1.63 1.15s-1.08 1.84-3.56 1.84zm7-3.5h-1.5v1.5h-1v-1.5H16v-1h1.5V9.5h1V11H20v1zm2.5 0H21v1.5h-1v-1.5h-1.5v-1H20V9.5h1V11h1.5v1z" />
    </svg>
  ),
  "JavaScript": (
    <svg className="w-3.5 h-3.5 fill-current text-[#F7DF1E]" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0zm20.3 17.6c-.6-.9-1.7-1.5-2.8-1.5-1.1 0-1.8.5-1.8 1.2 0 1.8 4.4 1.2 4.4 4.7 0 1.9-1.4 3.1-3.6 3.1-2.2 0-3.6-1.1-4.2-2.7l1.9-1.1c.4.9 1 1.5 2.1 1.5 1 0 1.6-.4 1.6-1.1 0-1.9-4.4-1.3-4.4-4.8 0-1.8 1.4-3 3.3-3 1.8 0 3.2.9 3.8 2.3l-1.8 1.4z" />
    </svg>
  ),
  "Java": (
    <svg className="w-3.5 h-3.5 fill-current text-[#ED8B00]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
  ),
  "Python": (
    <svg className="w-3.5 h-3.5 fill-current text-[#3776AB]" viewBox="0 0 24 24">
      <path d="M12.26 2c-4.28 0-4.04 1.85-4.04 1.85l.01 1.93h4.08v.58H6.22S2.05 5.86 2.05 10.1c0 4.25 3.65 4.09 3.65 4.09h2.18v-3.07a3.17 3.17 0 0 1 3.17-3.17h5.81s1.14-.03 1.14-2.8c0-2.77-2.14-3.15-2.14-3.15H12.26zm-.52 1.34a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54zm.52 6.56a3.17 3.17 0 0 1-3.17 3.17H3.28s-1.14.03-1.14 2.8c0 2.77 2.14 3.15 2.14 3.15h3.68c4.28 0 4.04-1.85 4.04-1.85l-.01-1.93H5.85v-.58h6.09s4.17.5 4.17-3.74c0-4.25-3.65-4.09-3.65-4.09H12.26zm5.83 8.87a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54z" />
    </svg>
  ),
  "HTML": (
    <svg className="w-3.5 h-3.5 fill-current text-[#E34F26]" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm15.4 6.7H7.1l.3 3h9.1l-.3 3.5-3.7 1-3.7-1-.2-2.1H6.7l.5 5.2 4.8 1.3 4.8-1.3.6-6.4-.3-3.2z" />
    </svg>
  ),
  "CSS": (
    <svg className="w-3.5 h-3.5 fill-current text-[#1572B6]" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm15.4 6.7H7.1l.3 3h9.1l-.3 3.5-3.7 1-3.7-1-.2-2.1H6.7l.5 5.2 4.8 1.3 4.8-1.3.6-6.4-.3-3.2z" />
    </svg>
  ),
  "SQL": (
    <svg className="w-3.5 h-3.5 fill-current text-[#00758F]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-12-6zm0 10c-4.42 0-8-1.79-8-4s3.58-4 8-4 8 1.79 8 4-3.58 4-8 4zm0 2c-5.52 0-10-1.79-10-4v3c0 2.21 4.48 4 10 4s10-1.79 10-4v-3c0 2.21-4.48 4-10 4z" />
    </svg>
  ),
  "MongoDB": (
    <svg className="w-3.5 h-3.5 fill-current text-[#47A248]" viewBox="0 0 24 24">
      <path d="M12 1.5C9 4.5 9 8 9 10c0 4.5 3 6.5 3 9.5 0-3 3-5 3-9.5 0-2 0-5.5-3-8.5zm0 14c-.83 0-1.5-.67-1.5-1.5S11.17 12.5 12 12.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  ),
  "PostgreSQL": (
    <svg className="w-3.5 h-3.5 fill-current text-[#336791]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
    </svg>
  ),
  "DSA": (
    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="6" cy="14" r="2" />
      <circle cx="18" cy="14" r="2" />
      <path d="M12 7l-4 5M12 7l4 5" />
    </svg>
  ),
  "OOPS": (
    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  ),
  "DBMS": (
    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  "System Design": (
    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="6" height="4" rx="1" />
      <rect x="16" y="3" width="6" height="4" rx="1" />
      <rect x="9" y="15" width="6" height="4" rx="1" />
      <path d="M5 7v4h4M19 7v4h-4M12 15v-4" />
    </svg>
  ),
};

export default function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const getColorStyles = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          icon: "text-cyber-cyan border-cyber-cyan/30 bg-cyan-950/20",
          glow: "group-hover:border-cyber-cyan/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.03)]",
        };
      case "emerald":
        return {
          icon: "text-cyber-emerald border-cyber-emerald/30 bg-emerald-950/20",
          glow: "group-hover:border-cyber-emerald/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.03)]",
        };
      case "violet":
        return {
          icon: "text-cyber-violet border-cyber-violet/30 bg-purple-950/20",
          glow: "group-hover:border-cyber-violet/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.03)]",
        };
      case "amber":
        return {
          icon: "text-amber-400 border-amber-400/30 bg-amber-950/20",
          glow: "group-hover:border-amber-400/30 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.03)]",
        };
      case "rose":
        return {
          icon: "text-rose-500 border-rose-500/30 bg-rose-950/20",
          glow: "group-hover:border-rose-500/30 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.03)]",
        };
      default:
        return {
          icon: "text-white border-white/10 bg-white/5",
          glow: "group-hover:border-white/20",
        };
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg-darker"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

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
            Skills Matrix
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const styles = getColorStyles(category.color);
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`group p-6 rounded-2xl glass-panel bg-cyber-card/45 border-cyber-border/40 transition-all duration-300 hud-corner ${styles.glow}`}
              >
                <div className="hud-tick" />
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-cyber-border/40 pb-4 mb-5">
                  <div className={`p-2 rounded-xl border flex items-center justify-center ${styles.icon}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-space text-sm font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badge Cloud */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.03 }}
                      className="px-3.5 py-2.5 rounded-xl glass-panel bg-[#0e1628]/60 border-cyber-border/60 text-xs font-space font-medium tracking-wide text-white/90 flex items-center gap-2 hover:border-cyber-cyan/35 hover:bg-white/5 transition-all duration-200"
                    >
                      {/* Respective technology SVG logo */}
                      {skillLogos[skill] || <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
