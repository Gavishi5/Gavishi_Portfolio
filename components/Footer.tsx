import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Smartphone, Mail, Globe, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070d] border-t border-white/10 py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
              <div className="w-full h-full bg-[#0b0f19] rounded-[6px] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-gray-500 font-mono">React Native & Mobile Application Engineer</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right font-mono text-gray-500 text-[11px]">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, Tailwind CSS & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};
