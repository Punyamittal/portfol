import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Users, Code, Lightbulb } from "lucide-react";
import { BlurIn, BoxReveal } from "../reveal-animations";

const experiences = [
  {
    id: 1,
    title: "AI Developer Intern",
    company: "IIT Ropar",
    location: "Ropar, India",
    duration: "June 2025 - Present",
    description: "Working on AI/ML models in real-world applications with focus on data-driven solutions. Contributing to model development, optimization, and deployment in a research environment.",
    technologies: ["Python", "Machine Learning", "AI/ML", "Data Science", "Research"],
    type: "Internship",
    icon: Code
  },
  {
    id: 2,
    title: "Co-founder & CEO",
    company: "HackFinity (Under Development)",
    location: "Chennai, India",
    duration: "July 2025 - Present",
    description: "Building an innovation-focused hackathon platform to support student builders (eg. HackHub'25). Leading product design, outreach, and core tech development. Developing various apps Like RaaHi and Evol.",
    technologies: ["Product Development", "Leadership", "Innovation", "Platform Development", "Startup"],
    type: "Founder",
    icon: Lightbulb
  },
  {
    id: 3,
    title: "Technical Lead",
    company: "Voice-IT Club",
    location: "Chennai, Tamil Nadu, India",
    duration: "Apr 2025 - Present • 4 mos",
    description: "Leading technical initiatives and projects within the Voice-IT Club. Managing team coordination and technical development for club activities.",
    technologies: ["Leadership", "Team Management", "Technical Development", "Project Management"],
    type: "Leadership",
    icon: Users
  },
  {
    id: 4,
    title: "Creativity Department Member",
    company: "Fraternity of Young Innovators",
    location: "Chennai, Tamil Nadu, India",
    duration: "Mar 2025 - Present • 5 mos",
    description: "Contributing to creative initiatives and innovation projects. Part of the trainee program focused on fostering creativity and innovation.",
    technologies: ["Creativity", "Innovation", "Design Thinking", "Collaboration"],
    type: "Trainee",
    icon: Lightbulb
  },
  {
    id: 5,
    title: "Marketing Team Member",
    company: "Anime Club VIT Chennai",
    location: "Chennai, Tamil Nadu, India",
    duration: "Sep 2024 - Present • 11 mos",
    description: "Full-time member of the marketing team, responsible for promoting club activities and events. Contributing to brand awareness and community engagement.",
    technologies: ["Marketing", "Social Media", "Event Management", "Community Building"],
    type: "Full-time",
    icon: Users
  },
  {
    id: 6,
    title: "Freelance Web Developer",
    company: "Chandan Trading Company",
    location: "Remote",
    duration: "Dec 2024 - Present",
    description: "Developed and maintained modern, responsive websites for trading companies. Created custom e-commerce solutions with payment integration and inventory management systems. Delivered high-quality, user-friendly interfaces that improved client business operations.",
    technologies: ["React", "Next.js", "TypeScript", "E-commerce", "Payment Integration", "UI/UX Design"],
    type: "Freelance",
    icon: Briefcase
  },
  {
    id: 7,
    title: "Simulation Intern",
    company: "Forage",
    location: "Remote",
    duration: "Jun 2024 - Jul 2024 • 2 mos",
    description: "Completed simulation internship focusing on real-world project scenarios. Gained hands-on experience in professional development environments.",
    technologies: ["Simulation", "Remote Work", "Professional Development", "Project Management"],
    type: "Trainee",
    icon: Briefcase
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BlurIn delay={0.2}>
            <h2 className={cn(
              "text-4xl md:text-6xl font-bold mb-4",
              "text-zinc-800 dark:text-white"
            )}>
              Experience
            </h2>
          </BlurIn>
          <BlurIn delay={0.4}>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              "text-zinc-600 dark:text-zinc-300"
            )}>
              My professional journey from internships to leadership roles
            </p>
          </BlurIn>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 hidden md:block" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12"
            >
              <BoxReveal delay={0.6 + index * 0.1} width="100%">
                <div className={cn(
                  "relative",
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:flex-row-reverse"
                )}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-black transform -translate-x-1/2 z-10 shadow-lg" />
                  
                  {/* Content card */}
                  <div className={cn(
                    "backdrop-blur-md rounded-xl p-6 transition-all duration-300 border shadow-lg",
                    "bg-white/60 border-zinc-200 text-zinc-800",
                    "dark:bg-white/5 dark:border-white/10 dark:text-white",
                    "hover:bg-white/80 dark:hover:bg-white/10",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  )}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center",
                          "bg-gradient-to-br from-green-400 to-blue-500",
                          "dark:from-green-500 dark:to-blue-600"
                        )}>
                          <experience.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className={cn(
                              "text-xl font-semibold mb-1",
                              "text-zinc-800 dark:text-white"
                            )}>
                              {experience.title}
                            </h3>
                            <p className={cn(
                              "text-lg font-medium",
                              "text-blue-600 dark:text-blue-400"
                            )}>
                              {experience.company}
                            </p>
                          </div>
                          <span className={cn(
                            "text-sm px-3 py-1 rounded-full",
                            "text-zinc-600 bg-zinc-100",
                            "dark:text-zinc-400 dark:bg-zinc-800"
                          )}>
                            {experience.type}
                          </span>
                        </div>
                        
                        <div className={cn(
                          "flex items-center gap-4 mb-3 text-sm",
                          "text-zinc-600 dark:text-zinc-400"
                        )}>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        
                        <p className={cn(
                          "mb-4 leading-relaxed",
                          "text-zinc-700 dark:text-zinc-300"
                        )}>
                          {experience.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={cn(
                                "text-xs px-2 py-1 rounded-full",
                                "text-green-600 bg-green-100",
                                "dark:text-green-400 dark:bg-green-400/10"
                              )}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default ExperienceSection; 