"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Cpu, Smartphone, Code, Layers, Globe, Server, Database, Wrench, GitBranch } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Mobile Development":
      return <Smartphone className="w-5 h-5 text-cyan-400" />;
    case "Languages":
      return <Code className="w-5 h-5 text-indigo-400" />;
    case "Frontend":
      return <Globe className="w-5 h-5 text-blue-400" />;
    case "State Management":
      return <Layers className="w-5 h-5 text-purple-400" />;
    case "APIs & Networking":
      return <Server className="w-5 h-5 text-emerald-400" />;
    case "Backend Services":
      return <Database className="w-5 h-5 text-amber-400" />;
    case "Navigation & Storage":
      return <Cpu className="w-5 h-5 text-pink-400" />;
    case "Tools":
      return <Wrench className="w-5 h-5 text-teal-400" />;
    case "Version Control & DevOps":
      return <GitBranch className="w-5 h-5 text-cyan-400" />;
    default:
      return <Cpu className="w-5 h-5 text-cyan-400" />;
  }
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoriesList = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#070a12]/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mobile & Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            A comprehensive overview of mobile frameworks, languages, networking protocols, state management tools, and native APIs I use in production.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/40"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#111625]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1.5 rounded-xl bg-[#171e30] border border-white/5 text-xs font-medium text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/40 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
