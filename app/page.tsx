import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickStats } from "@/components/QuickStats";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070912] text-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickStats />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
