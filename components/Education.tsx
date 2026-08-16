"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#090d18] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Qualifications & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Formal computer science academic background coupled with Meta engineering credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#111625] border border-white/10 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                  CGPA: {EDUCATION.cgpa} / 10
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Degree</span>
                <h3 className="text-xl font-bold text-white mt-1">{EDUCATION.degree}</h3>
                <div className="text-sm font-semibold text-cyan-400 mt-1">{EDUCATION.institution}</div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono pt-2">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Duration: {EDUCATION.period}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300">
              Rigorous coursework in Computer Architecture, Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Software Engineering.
            </div>
          </motion.div>

          {/* Certifications List Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#111625] border border-white/10 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
                  <p className="text-xs text-gray-400">Verified credentials & internships</p>
                </div>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#171f33] border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      <div className="text-xs text-cyan-400 font-medium">{cert.issuer}</div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
