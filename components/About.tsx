"use client";

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_SUMMARY } from "@/data/portfolioData";
import { CheckCircle2, ShieldCheck, Zap, Code2, Smartphone } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Gavishi Raj</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Specialized React Native & Mobile Application Engineer with 3+ years of experience shipping production-grade apps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#111624] border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
                <Code2 className="w-4 h-4" />
                <span>MOBILE DEVELOPER SPECS</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {ABOUT_SUMMARY.paragraph1}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {ABOUT_SUMMARY.paragraph2}
              </p>
            </div>

            {/* Quick Experience Highlights Pills */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10 mt-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-gray-400">Core Stack</div>
                <div className="text-sm font-bold text-white mt-0.5">React Native + Kotlin</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-gray-400">Live Apps</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">3 Apps on Google Play</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights List Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141a2a] to-[#0c101c] border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Core Competencies</span>
              </h3>
              <ul className="space-y-3">
                {ABOUT_SUMMARY.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-300 mt-6 flex items-center space-x-3">
              <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Dedicated to building robust mobile architectures with low battery overhead and fluid 60FPS UI transitions.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
