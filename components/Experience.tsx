"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Proven track record of engineering cross-platform applications, integrating APIs, developing Kotlin bridge modules, and maintaining live store releases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0b0f19] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#111624]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl space-y-4">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-2.5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges Footer */}
                <div className="pt-4 flex flex-wrap gap-2 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#182033] border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
