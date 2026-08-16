import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DeviceMockup } from "@/components/DeviceMockup";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, Smartphone } from "lucide-react";

import Image from "next/image";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Mobile Case Study — Gavishi Raj`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070912] text-gray-100 overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to Projects Showcase</span>
          </Link>
        </div>

        {/* Hero Banner Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111728] to-[#0a0e19] border border-white/10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
                  {project.category}
                </span>
                {project.playStoreUrl && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                    Google Play Store Verified
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#182136] border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.playStoreUrl && (
                <div className="pt-4">
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on Google Play Store</span>
                  </a>
                </div>
              )}
            </div>

            {/* Smartphone Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <DeviceMockup
                title={project.title}
                subtitle={project.category}
                themeGradient={project.themeColor}
              />
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#0e1322] border border-white/10 space-y-6 mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Application Screens & UI Gallery</h2>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                {project.screenshots.length} Screenshots
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {project.screenshots.map((imgSrc, imgIdx) => (
                <div
                  key={imgIdx}
                  className="group relative rounded-3xl bg-[#080b12] p-2 border border-white/10 shadow-2xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[9/19] rounded-2xl overflow-hidden bg-black">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} Screenshot ${imgIdx + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5 z-10">
                      <span className="text-[11px] font-semibold text-white">Screen #{imgIdx + 1}</span>
                      <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30">
                        HD Preview
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Deep Dive Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Key Features & Engineering Highlights */}
          <div className="lg:col-span-7 space-y-8">
            {/* Features Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1322] border border-white/10 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-3">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Application Features & Workflows</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors space-y-1"
                  >
                    <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature.title}</span>
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots Placeholder Architecture Notice (Shown if screenshots missing) */}
            {!project.screenshots && (
              <div className="p-6 rounded-3xl bg-[#111726] border border-cyan-500/30 space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono">
                  <Smartphone className="w-4 h-4" />
                  <span>SCREENSHOT ARCHITECTURE READY</span>
                </div>
                <h3 className="text-base font-bold text-white">App Screenshot Directory Configuration</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  App screenshots for <strong className="text-cyan-400">{project.title}</strong> will be stored in:
                </p>
                <code className="block p-3 rounded-xl bg-black/60 text-cyan-300 text-xs font-mono border border-white/10">
                  /public{project.screenshotsPlaceholder}
                </code>
                <p className="text-[11px] text-gray-400">
                  You can easily add your image files directly to this folder, and they will seamlessly populate the case study showcase.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Technical Challenges & Solutions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1322] border border-white/10 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-3">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Technical Challenges & Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.technicalChallenges.map((item, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <div className="flex items-start space-x-2 text-xs font-semibold text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Challenge: {item.challenge}</span>
                    </div>
                    <div className="text-xs text-gray-300 pl-6 border-l border-cyan-500/30 pt-1">
                      <span className="text-cyan-400 font-semibold block mb-0.5">Engineered Solution:</span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Projects</span>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
