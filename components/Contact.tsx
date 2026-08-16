"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, FileText, Send, ArrowUpRight, Globe, Code2 } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#070912] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Great Mobile Apps</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Open for Senior React Native & Mobile Application Engineering roles, contract consultations, and high-impact project opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#0f1422] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-xs text-gray-400">Feel free to reach out via email or connect on social platforms.</p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 font-mono">
              Timezone: IST (UTC+05:30) • Remote & On-site
            </div>
          </motion.div>

          {/* Connection Actions Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#121829] to-[#0a0d17] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Connect & Collaborate</h3>
              <p className="text-xs text-gray-400">Access code repositories, professional networks, or download my full resume.</p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white text-sm font-semibold transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white text-sm font-semibold transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Gavishi_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white text-sm font-semibold transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Download Resume PDF</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-300 text-center">
              Quick Response Time • Typically replies within 24 hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
