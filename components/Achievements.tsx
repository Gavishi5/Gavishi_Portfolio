"use client";

import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Trophy, Star, ShieldCheck, Smartphone } from "lucide-react";

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 bg-[#070912] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#101524] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-3 group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Smartphone className="w-5 h-5" /> : idx === 1 ? <ShieldCheck className="w-5 h-5 text-indigo-400" /> : <Star className="w-5 h-5 text-amber-400" />}
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  Verified
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
