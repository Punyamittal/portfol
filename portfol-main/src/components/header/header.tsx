"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import IntroPopup from "../ui/intro-popup";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isIntroOpen, setIsIntroOpen] = useState<boolean>(false);

  const handleNameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsIntroOpen(true);
  };

  return (
    <>
      <motion.header
        className={cn(
          styles.header,
          "transition-colors delay-100 duration-500 ease-in"
        )}
        style={{
          background: isActive ? "hsl(var(--background) / .8)" : "transparent",
          // backgroundImage:
          //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
        }}
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
          duration: 0.8,
        }}
      >
        {/* <div
          className="absolute inset-0 "
          style={{
            mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
          }}
        >
        </div> */}
        <div className={cn(styles.bar, "flex items-center justify-between")}>
          <Button 
            variant={"link"} 
            className="text-md hover:text-blue-400 transition-colors cursor-pointer"
            onClick={handleNameClick}
          >
            {config.author}
          </Button>

          <div className="flex items-center gap-4">
            <OnlineUsers />
            <FunnyThemeToggle className="w-6 h-6" />
            <Button
              variant={"ghost"}
              onClick={() => setIsActive(!isActive)}
              className={cn(
                styles.el,
                "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
              )}
            >
              <div className="relative flex items-center">
                <motion.p
                  variants={opacity}
                  animate={!isActive ? "open" : "closed"}
                >
                  Menu
                </motion.p>
                <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                  Close
                </motion.p>
              </div>
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </Button>
          </div>
        </div>
        <motion.div
          variants={background}
          initial="initial"
          animate={isActive ? "open" : "closed"}
          className={styles.background}
        ></motion.div>
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.header>

      <IntroPopup isOpen={isIntroOpen} onClose={() => setIsIntroOpen(false)} />
    </>
  );
};

export default Header;
