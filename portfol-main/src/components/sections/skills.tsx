import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen md:min-h-[150dvh] relative">
      {/* Top section with title */}
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
      </div>
      
      {/* Middle section for keyboard interaction */}
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      </div>
      
      {/* Bottom section to ensure proper scroll trigger */}
      <div className="absolute bottom-0 left-0 right-0 h-96 flex items-center justify-center">
      </div>
    </section>
  );
};

export default SkillsSection;
