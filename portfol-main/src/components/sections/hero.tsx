import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { RealisticTypewriter } from "../ui/realistic-typewriter";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-lg ml-3",
                      "cursor-default font-display sm:text-2xl md:text-2xl whitespace-nowrap bg-clip-text",
                      isLight ? "text-black" : "text-white"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="ml-1 text-left">
                        <RealisticTypewriter
                          words={[
                            {
                              text: "Punya",
                              className: "font-thin text-5xl text-transparent text-slate-800 cursor-default text-edge-outline font-display sm:text-6xl md:text-8xl",
                            },
                          ]}
                          cursorClassName="bg-blue-500"
                          typeSpeed={150}
                          deleteSpeed={100}
                          delayBetweenWords={3000}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-lg ml-3",
                      "cursor-default font-display sm:text-2xl md:text-2xl bg-clip-text text-center md:text-left",
                      isLight ? "text-black" : "text-white"
                    )}
                  >
                    AI Engineer
                  </p>
                </BlurIn>
                <BlurIn delay={1.4}>
                  <p
                    className={cn(
                      "md:self-start md:mt-2 font-thin text-md ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text text-center md:text-left",
                      isLight ? "text-black" : "text-white"
                    )}
                  >
                    CSE (AI & ML) At VIT Chennai
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Link
                  href={"/assets/first resume.pdf"}
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
