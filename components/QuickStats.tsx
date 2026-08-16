"use client";

import React from "react";
import { motion } from "framer-motion";
import { QUICK_STATS } from "@/data/portfolioData";
import { Award, Smartphone, Cpu, GraduationCap } from "lucide-react";

const getStatIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Cpu className="w-5 h-5 text-cyan-400" />;
    case 1:
      return <Smartphone className="w-5 h-5 text-indigo-400" />;
    case 2:
      return <Award className="w-5 h-5 text-purple-400" />;
    case 3:
      return <GraduationCap className="w-5 h-5 text-emerald-400" />;
    default:
      return <Cpu className="w-5 h-5 text-cyan-400" />;
  }
};

export const QuickStats: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-[#0b0f19]/60 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#121724]/70 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getStatIcon(idx)}
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  {stat.badge}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
