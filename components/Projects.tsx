"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { DeviceMockup } from "./DeviceMockup";
import { ExternalLink, ArrowRight, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Mobile Applications</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            High-impact cross-platform mobile apps deployed to Google Play Store and active in enterprise production environments.
          </p>
        </div>

        {/* Projects List Showcase */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project: Project, idx: number) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#0e1322]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Information Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
                      {project.category}
                    </span>
                    {project.playStoreUrl && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                        Google Play Store
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      Engineering Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2 text-xs text-gray-300 bg-white/5 p-2.5 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-xl bg-[#171f33] border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all duration-300"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Google Play Store</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Smartphone Visual Preview Column */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <DeviceMockup
                    title={project.title}
                    subtitle={project.category}
                    themeGradient={project.themeColor}
                    screenshot={project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : undefined}
                  />
                  {!project.screenshots && (
                    <div className="text-center mt-3 text-[11px] font-mono text-gray-500">
                      Image Directory: <code className="text-cyan-400/80">{project.screenshotsPlaceholder}</code>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
