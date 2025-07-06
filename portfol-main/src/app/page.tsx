"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AchievementsSection from "@/components/sections/achievements";
import ExperienceSection from "@/components/sections/experience";
import { useTheme } from "next-themes";

const LetterGlitch = dynamic(() => import("@/components/ui/letter-glitch"), {
  ssr: false,
  loading: () => (
    <div className="top-0 z-0 fixed w-full h-screen bg-black" />
  ),
});

function MainPage() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Define glitch colors for each theme - pink, purple, black, white matrix
  const glitchColors = isLight
    ? ["#ff69b4", "#9370db", "#000000", "#ffffff", "#ff69b4"] // pink/purple/black/white for light theme
    : ["#ff69b4", "#9370db", "#000000", "#ffffff", "#ff69b4"]; // pink/purple/black/white for dark theme

  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <LetterGlitch
              glitchColors={glitchColors}
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
          </div>
          <div className="top-0 z-15 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <div className="relative z-10">
            <HeroSection />
            <SkillsSection />
          </div>
          <div className="relative z-20">
            <AchievementsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
