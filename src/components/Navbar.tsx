"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Coding Profile", id: "coding-profile" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollActive = () => {
      // Offset matches navbar height + threshold padding
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          // Check if scroll position falls inside this section's vertical range
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollActive);
    // Call once on mount to synchronize
    handleScrollActive();
    
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header height
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-cyber-bg-darker/80 border-cyber-border/40 backdrop-blur-md py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1.5 cursor-pointer font-space text-lg font-bold tracking-tight text-white group"
          >
            <span className="text-cyber-cyan font-mono transition-transform group-hover:-translate-x-0.5">&lt;</span>
            <span className="bg-gradient-to-r from-cyber-cyan via-white to-cyber-emerald bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Bharath K
            </span>
            <span className="text-cyber-emerald font-mono transition-transform group-hover:translate-x-0.5">/&gt;</span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs font-semibold font-space tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id ? "text-cyber-cyan" : "text-cyber-gray hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-emerald shadow-[0_1px_8px_rgba(6,182,212,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider font-space border border-cyber-cyan/40 text-cyber-cyan bg-cyan-950/10 hover:bg-cyber-cyan hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer group"
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex lg:hidden items-center justify-center p-2 rounded-lg border border-cyber-border bg-cyber-card/40 text-white hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[65px] z-40 mx-4 p-5 rounded-2xl glass-panel bg-cyber-card/95 border-cyber-border shadow-[0_15px_40px_rgba(0,0,0,0.85)] flex flex-col gap-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-space text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-cyan-950/20 text-cyber-cyan border-l-2 border-cyber-cyan"
                      : "text-cyber-gray hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="w-1 h-1 rounded-full bg-cyber-cyan animate-pulse" />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="border-t border-cyber-border/40 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-emerald text-black font-space font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(6,182,212,0.25)] hover:scale-[1.01] transition-all"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
