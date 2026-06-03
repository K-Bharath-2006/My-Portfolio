import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodingProfile from "@/components/CodingProfile";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-bg text-cyber-text relative">
      {/* Architectural Grid Lines */}
      <div className="fixed left-6 lg:left-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none z-20 hidden md:block" />
      <div className="fixed right-6 lg:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none z-20 hidden md:block" />

      {/* Blueprint Coordinates / Tech HUD Labels (Left margin) */}
      <div 
        className="fixed left-1.5 lg:left-3 top-1/3 z-20 hidden lg:flex flex-col gap-24 text-[8px] font-mono text-cyber-gray/30 select-none pointer-events-none"
        style={{ writingMode: "vertical-rl" }}
      >
        <span>[SYS_CORE // BHARATH_K_ORCHESTRATOR]</span>
        <span>[NODE_STATUS // ONLINE]</span>
        <span>[SYS_INIT_HASH // 0x7FFA8]</span>
      </div>

      {/* Blueprint Coordinates / Tech HUD Labels (Right margin) */}
      <div 
        className="fixed right-1.5 lg:right-3 top-1/3 z-20 hidden lg:flex flex-col gap-24 text-[8px] font-mono text-cyber-gray/30 select-none pointer-events-none"
        style={{ writingMode: "vertical-rl" }}
      >
        <span>[LATENCY // 12MS]</span>
        <span>[SYSTEM_ARCH // REVISION_1.4]</span>
        <span>[DEPLOY_NODE // SEA_SERVER_0]</span>
      </div>

      {/* Navigation bar */}
      <Navbar />

      {/* Main viewport flow - Padded horizontally on desktop to align with grid lines */}
      <main className="flex-grow md:px-6 lg:px-12">
        {/* Landing / Hero Section */}
        <Hero />

        {/* Biography & Stack Overview */}
        <About />

        {/* Detailed Skills Categories Matrix */}
        <Skills />

        {/* Project Showcases & Markdown documentation modal */}
        <Projects />

        {/* LeetCode competitive dashboard */}
        <CodingProfile />

        {/* Professional internship timeline */}
        <Experience />

        {/* Hackathon highlights */}
        <Hackathons />

        {/* Certification badges & certificate preview modal */}
        <Certifications />

        {/* Get in touch form & copy mail button */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
