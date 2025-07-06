"use client";

import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { Heart, Code, Coffee, Sparkles } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();
  
  const bounceVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-6 border-t border-border px-4 py-8 sm:px-6">
      {/* Made by Section - Most Prominent */}
      <motion.div
        className="relative flex items-center justify-center gap-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-xl blur-xl" />
        
        {/* Main Content */}
        <div className="relative flex items-center gap-2 px-6 py-3 bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
          <motion.div variants={sparkleVariants} animate="animate">
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
          
          <span className="text-sm font-mono text-black-600 dark:text-black-300">
            Crafted with
          </span>
          
          <motion.div
            variants={heartVariants}
            animate="animate"
            className="inline-block"
          >
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </motion.div>
          
          <span className="text-sm font-mono text-black-600 dark:text-black-300">
            by
          </span>
          
          <motion.div
            variants={bounceVariants}
            whileHover="hover"
            className="flex items-center gap-1 cursor-pointer"
          >
            <Code className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Punya Mittal
            </span>
          </motion.div>
          
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Coffee className="w-4 h-4 text-amber-600" />
          </motion.div>
        </div>
      </motion.div>

      {/* Existing Footer Content */}
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <motion.p
          className="text-xs text-black-500 dark:text-black-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {year} {config.author}. All rights reserved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SocialMediaButtons />
        </motion.div>
        
        <motion.nav
          className="flex gap-4 sm:gap-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {footer.map((link, index) => {
            const { title, href } = link;

            return (
              <motion.div
                key={`l_${index}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="text-xs underline-offset-4 hover:underline"
                  href={href}
                >
                  <Button variant={"link"}>{title}</Button>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
    </footer>
  );
}

export default Footer;
