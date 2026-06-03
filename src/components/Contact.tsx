"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emailAddress = "gl.bharath2006@gmail.com"; // Mock email for copy action

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setSending(true);
    // Simulate API email dispatch
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 w-full overflow-hidden bg-cyber-bg-darker"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

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
            Initiate Contact
            <span className="text-cyber-cyan font-mono">/&gt;</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "110px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-emerald mt-3 mx-auto rounded-full"
          />
          <p className="mt-4 text-sm text-cyber-gray font-inter max-w-xl mx-auto">
            Have an open requirement, project collaboration, or architectural discussion? 
            Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Left Block: Connection Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="space-y-6">
              {/* Copy Email Card */}
              <motion.div
                whileHover={{ y: -2 }}
                onClick={handleCopyEmail}
                className="p-5 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 cursor-pointer transition-all duration-300 flex items-center justify-between group hud-corner"
              >
                <div className="hud-tick" />
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl border border-cyber-cyan/30 bg-cyan-950/20 text-cyber-cyan flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider">Email Address</h4>
                    <p className="font-mono text-xs text-cyber-gray mt-0.5 group-hover:text-white transition-colors">
                      {emailAddress}
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-lg border border-cyber-border text-cyber-gray hover:text-white group-hover:border-cyber-cyan/45 transition-colors">
                  {copied ? <Check className="w-3.5 h-3.5 text-cyber-emerald animate-pulse" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.a
                href="https://www.linkedin.com/in/bharath-k-a05b2b350"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-5 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 flex items-center gap-4 transition-all duration-300 group hud-corner"
              >
                <div className="hud-tick" />
                <div className="p-3 rounded-xl border border-cyber-cyan/30 bg-cyan-950/20 text-cyber-cyan flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider">LinkedIn</h4>
                  <p className="font-inter text-xs text-cyber-gray mt-0.5">linkedin.com/in/bharath-k-a05b2b350</p>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href="https://github.com/K-Bharath-2006"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-5 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 flex items-center gap-4 transition-all duration-300 group hud-corner"
              >
                <div className="hud-tick" />
                <div className="p-3 rounded-xl border border-cyber-cyan/30 bg-cyan-950/20 text-cyber-cyan flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider">GitHub</h4>
                  <p className="font-mono text-xs text-cyber-gray mt-0.5">github.com/K-Bharath-2006</p>
                </div>
              </motion.a>

              {/* X (Twitter) Card */}
              <motion.a
                href="https://x.com/Mr__Black05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-5 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 flex items-center gap-4 transition-all duration-300 group hud-corner"
              >
                <div className="hud-tick" />
                <div className="p-3 rounded-xl border border-cyber-cyan/30 bg-cyan-950/20 text-cyber-cyan flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider">X (Twitter)</h4>
                  <p className="font-mono text-xs text-cyber-gray mt-0.5">x.com/Mr__Black05</p>
                </div>
              </motion.a>

              {/* WhatsApp & Call Card */}
              <motion.a
                href="https://wa.me/919659444436"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-5 rounded-2xl glass-panel bg-cyber-card/40 border-cyber-border/40 hover:border-cyber-cyan/35 flex items-center gap-4 transition-all duration-300 group hud-corner"
              >
                <div className="hud-tick" />
                <div className="p-3 rounded-xl border border-cyber-cyan/30 bg-cyan-950/20 text-cyber-cyan flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.63 2.022 14.16 1 11.53 1c-5.441 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.312 4.869L1.933 20.3l4.713-1.146zm11.373-7.259c-.299-.149-1.767-.869-2.04-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.646.074-.299-.149-1.262-.465-2.403-1.481-.888-.79-1.488-1.766-1.662-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.719 2.015-1.412.247-.693.247-1.288.173-1.411-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-space text-xs font-bold text-white uppercase tracking-wider">Phone & WhatsApp</h4>
                  <p className="font-mono text-xs text-cyber-gray mt-0.5">+91 9659444436</p>
                </div>
              </motion.a>
            </div>

            {/* Resume Callout Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl glass-panel bg-cyber-card/30 border-cyber-border/30 relative overflow-hidden group mt-6 lg:mt-0 hud-corner"
            >
              <div className="hud-tick" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-emerald/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="font-space text-sm font-bold text-white mb-2">Looking for my credentials?</h4>
              <p className="font-inter text-xs text-cyber-gray mb-4 leading-relaxed">
                Click below to download my verified academic & technical portfolio summary.
              </p>
              <a
                href="/Bharath_K.pdf"
                download="Bharath_K.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-emerald text-black font-space font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer"
              >
                Download Resume PDF
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Block: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 md:p-8 rounded-3xl glass-panel bg-cyber-card/45 border-cyber-border/40 hover:border-cyber-cyan/25 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group hud-corner"
          >
            <div className="hud-tick" />
            <h3 className="font-space text-base font-bold text-white tracking-wide mb-6 uppercase border-b border-cyber-border/30 pb-3">
              Transmit Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-space text-[10px] font-bold text-cyber-gray uppercase tracking-wider">
                    Sender Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080d1a]/50 border border-cyber-border text-white text-xs font-inter focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all"
                    placeholder="Enter name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-space text-[10px] font-bold text-cyber-gray uppercase tracking-wider">
                    Return Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080d1a]/50 border border-cyber-border text-white text-xs font-inter focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-space text-[10px] font-bold text-cyber-gray uppercase tracking-wider">
                  Details / Body
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080d1a]/50 border border-cyber-border text-white text-xs font-inter focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all resize-none"
                  placeholder="Enter message details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending || sent}
                className="w-full py-4.5 rounded-xl font-space font-bold uppercase tracking-wider text-xs border border-cyber-cyan/50 text-cyber-cyan bg-cyan-950/20 hover:bg-cyber-cyan hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {sending ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 h-4 border-2 border-t-transparent border-cyber-cyan rounded-full animate-spin" />
                      Transmitting...
                    </motion.div>
                  ) : sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-cyber-emerald"
                    >
                      <Check className="w-4 h-4" />
                      Transmission Received
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
