"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { DeviceMockup } from "./DeviceMockup";
import { ArrowRight, Download, Mail, Smartphone, Layers, Globe, Code2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Dynamic Background Glow & Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for React Native Mobile Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Subtitle Copy */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
              3+ years of experience building production-ready cross-platform mobile applications across HRMS, CRM, POS, Tax Management, and AI-enabled Smart Society platforms.
            </p>

            {/* Technical Expertise Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {PERSONAL_INFO.heroBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#141926] border border-white/10 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Gavishi_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Email Gavishi Raj"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Mobile Device Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Floating Orbiting Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-30 hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-xl backdrop-blur-md"
              >
                <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Cross-Platform</div>
                  <div className="text-[9px] text-gray-400">React Native Engine</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 z-30 hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-xl backdrop-blur-md"
              >
                <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Kotlin Modules</div>
                  <div className="text-[9px] text-gray-400">Android System Bridge</div>
                </div>
              </motion.div>

              {/* Main Device Showcase */}
              <DeviceMockup
                title="LeadChain Mobile Suite"
                subtitle="Taxlin • HRMTree • Teampage"
                themeGradient="from-cyan-600 via-indigo-600 to-purple-600"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
