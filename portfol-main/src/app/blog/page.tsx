"use client";

import React from "react";
import { BLOG_POSTS } from "@/data/blogs";
import { BlogCard } from "@/components/ui/blog-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LetterGlitch = dynamic(() => import("@/components/ui/letter-glitch"), {
  ssr: false,
  loading: () => (
    <div className="top-0 z-0 fixed w-full h-screen bg-black" />
  ),
});

function BlogPage() {
  // Define glitch colors - pink, purple, black, white matrix
  const glitchColors = ["#ff69b4", "#9370db", "#000000", "#ffffff", "#ff69b4"];
  

  
  return (
    <>
      <div className="top-0 z-0 fixed w-full h-screen">
        <LetterGlitch
          glitchColors={glitchColors}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="min-h-screen relative z-10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100 md:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Thoughts, tutorials, and insights on programming and technology
            </p>
          </motion.div>

          {BLOG_POSTS.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center h-64"
            >
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  No blog posts yet!
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Check back soon for new content.
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
              {BLOG_POSTS.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
