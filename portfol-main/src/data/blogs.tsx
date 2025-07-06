export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "easiest-fibonacci-code",
    title: "Easiest Fibonacci Code",
    description: "Learn the simplest and most efficient ways to implement the Fibonacci sequence in different programming languages.",
    url: "https://arcanine.hashnode.dev/easiest-fibonacci-code",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Programming", "Algorithms", "Fibonacci", "Code Examples"]
  },
  {
    id: "best-way-to-learn-coding",
    title: "The Best Way to Learn Coding: A Structured Approach",
    description: "A comprehensive guide to learning programming with a structured, step-by-step approach for beginners and intermediate developers.",
    url: "https://arcanine.hashnode.dev/the-best-way-to-learn-coding-a-structured-approach",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Learning", "Programming", "Education", "Career Development"]
  }
]; 