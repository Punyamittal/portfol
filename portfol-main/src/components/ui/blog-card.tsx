"use client";

import { cn } from "@/lib/utils";
import { BlogPost } from "@/data/blogs";
import { ExternalLink, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  blog: BlogPost;
  index: number;
}

export const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {blog.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {blog.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}; 