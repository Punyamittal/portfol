import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Users, Code, FileText, Brain } from "lucide-react";
import { BlurIn, BoxReveal } from "../reveal-animations";

const achievements = [
  {
    id: 1,
    title: "HackHub 2025 Organizer & Judge",
    description: "Organized and judged HackHub 2025 with 580+ participants, leading one of the largest student hackathons in the region",
    year: "2025",
    icon: Users,
    category: "Leadership"
  },
  {
    id: 2,
    title: "Hackathon Finalist",
    description: "Finalist at Hackronyx (Top 35) and Top 20 at HackHazards, demonstrating strong competitive programming skills",
    year: "2024-2025",
    icon: Trophy,
    category: "Competition"
  },
  {
    id: 3,
    title: "NeuroScript Project",
    description: "Built NeuroScript as Technical Lead at VoiceIT Club, developing innovative AI-powered solutions",
    year: "2025",
    icon: Brain,
    category: "Innovation"
  },
  {
    id: 4,
    title: "AI Workshops & Research",
    description: "Attended AI workshops at IIT Madras & NIT Trichy, actively contributing to research papers and filed a patent",
    year: "2024-2025",
    icon: FileText,
    category: "Research"
  },
  {
    id: 5,
    title: "Patent Filed",
    description: "Successfully filed a patent for innovative technology solution, contributing to intellectual property development",
    year: "2025",
    icon: Award,
    category: "Innovation"
  },
  {
    id: 6,
    title: "Research Papers",
    description: "Worked on multiple research papers in AI/ML domain, contributing to academic knowledge and technological advancement",
    year: "2024-2025",
    icon: Code,
    category: "Research"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BlurIn delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Achievements
            </h2>
          </BlurIn>
          <BlurIn delay={0.4}>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Milestones and recognitions that mark my journey in technology and innovation
            </p>
          </BlurIn>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <BoxReveal delay={0.6 + index * 0.1} width="100%">
                <div className={cn(
                  "backdrop-blur-md rounded-xl p-6 transition-all duration-300 border shadow-lg",
                  "bg-white/60 border-zinc-200 text-zinc-800",
                  "dark:bg-white/5 dark:border-white/10 dark:text-white",
                  "hover:bg-white/80 dark:hover:bg-white/10"
                )}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center",
                        "bg-gradient-to-br from-blue-400 to-pink-300",
                        "dark:from-blue-500 dark:to-purple-600"
                      )}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={cn(
                          "text-xl font-semibold",
                          "text-zinc-800 dark:text-white"
                        )}>
                          {achievement.title}
                        </h3>
                        <span className={cn(
                          "text-sm px-2 py-1 rounded-full",
                          "text-zinc-500 bg-zinc-100",
                          "dark:text-zinc-400 dark:bg-zinc-800"
                        )}>
                          {achievement.year}
                        </span>
                      </div>
                      <p className={cn(
                        "mb-3",
                        "text-zinc-700 dark:text-zinc-300"
                      )}>
                        {achievement.description}
                      </p>
                      <span className={cn(
                        "inline-block text-xs px-3 py-1 rounded-full",
                        "text-blue-600 bg-blue-100",
                        "dark:text-blue-400 dark:bg-blue-400/10"
                      )}>
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              </BoxReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 