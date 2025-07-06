import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. SustainLabs project
    id: "sustainlabs",
    category: "Climate Technology & Renewable Energy",
    title: "SustainLabs - Revolutionizing Renewable Energy Management",
    src: "/assets/sust.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://sustainlabs.netlify.app/",
    github: "https://github.com/Punyamittal/aws",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            SustainLabs transforms fragmented energy systems into unified, efficient, and trustworthy 
            sustainable solutions. The platform tackles critical bottlenecks in renewable energy adoption: 
            fragmentation, inefficiency, lack of trust, reactive maintenance, and disaster vulnerability. 
            Built for Team 1341 during a major hackathon, it unifies renewable energy management with 
            AI-powered insights, blockchain-verified transactions, and predictive maintenance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎯 Problem Statement</TypographyH3>
          <p className="font-mono mb-4">
            The renewable sector suffers from disconnected systems and data silos that increase operational 
            costs by 40%. Nearly 80% of installations operate below optimal efficiency, wasting 12-27% 
            of potential savings without real-time AI insights. Consumer distrust runs high, with 43% 
            skeptical of green energy claims. Reactive maintenance leads to costly downtime—wind turbine 
            failures average $240,000 per incident.
          </p>

          <TypographyH3 className="my-4 mt-8">🛠️ Tech Stack</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>Frontend:</strong> React, TypeScript, Framer Motion, Recharts
            </div>
            <div className="font-mono text-sm">
              <strong>Backend:</strong> Python, Node.js, Express, Socket.IO
            </div>
            <div className="font-mono text-sm">
              <strong>Database:</strong> Supabase, MongoDB, TimescaleDB
            </div>
            <div className="font-mono text-sm">
              <strong>AI:</strong> TensorFlow, Google Generative AI, Python ML Libraries
            </div>
            <div className="font-mono text-sm">
              <strong>Hosting:</strong> AWS, Vercel
            </div>
            <div className="font-mono text-sm">
              <strong>Blockchain:</strong> Multi-chain integration (Groq, Monad, InfinyOn, Base, Stellar)
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">✨ Key Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>🔍 Interactive Energy Dashboard:</strong> Real-time visualization of energy flows and production statistics
            </div>
            <div className="font-mono text-sm">
              <strong>🧠 AI-Powered Recommendations:</strong> Smart optimization suggestions with predictive maintenance alerts
            </div>
            <div className="font-mono text-sm">
              <strong>⛓️ Blockchain Integration:</strong> Decentralized energy trading via smart contracts
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Advanced Monitoring:</strong> Equipment health tracking with real-time alerts
            </div>
            <div className="font-mono text-sm">
              <strong>🌩️ Disaster Response:</strong> Immutable record of disaster events with decentralized alert system
            </div>
            <div className="font-mono text-sm">
              <strong>📚 Learning Platform:</strong> Interactive education for renewable energy skills
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🧠 AI & Predictive Analytics</TypographyH3>
          <p className="font-mono mb-4">
            Integrated Groq&apos;s LPU technology for real-time AI optimization, with predictive maintenance 
            that reduces downtime by 73% and AI recommendations that reduce energy costs by up to 31%. 
            The platform features intelligent energy management assistant with natural language interface.
          </p>

          <TypographyH3 className="my-4 mt-8">⛓️ Multi-Chain Integration</TypographyH3>
          <p className="font-mono mb-4">
            Developed a custom blockchain abstraction layer integrating nine different blockchain 
            technologies: Groq (LPU-accelerated AI), Monad (high-throughput IoT data), InfinyOn 
            (real-time streaming), Base (L2 scaling), Screenpipe (visual processing), and Stellar 
            (cross-border trading).
          </p>

          <TypographyH3 className="my-4 mt-8">👥 Team Collaboration</TypographyH3>
          <p className="font-mono mb-4">
            Led development as part of Team 1341 with Utsav Gautam, Vaibhav Dwivedi, Vaibhav Raj, 
            and Arnav Prabhakar. Overcame data synchronization challenges using edge computing and 
            Merkle tree verification, with breakthrough integration of Groq&apos;s LPU technology.
          </p>
        </div>
      );
    },
  },
  { // 02. VoiceIT Website project
    id: "voiceit",
    category: "Full Stack Web Development",
    title: "VoiceIT - Official RJ Club Platform of VIT Chennai",
    src: "/assets/voiceit.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://voicext.netlify.app/",
    github: "https://github.com/Punyamittal/voiceIT-",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed the complete official website and platform for VoiceIT, the premier RJ Club of VIT Chennai. 
            The platform serves as the central hub for the radio community, featuring live streaming capabilities, 
            event management, team showcase, and member registration. Built with modern web technologies to create 
            an engaging experience for campus radio enthusiasts and storytellers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎙️ Platform Overview</TypographyH3>
          <p className="font-mono mb-4">
            VoiceIT is more than just a radio club – it&apos;s a community of storytellers, creators, and voice artists 
            passionate about audio expression. The platform brings voices alive and helps stories find their rhythm 
            through innovative web technology and engaging user experiences.
          </p>

          <TypographyH3 className="my-4 mt-8">🛠️ Tech Stack</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>Frontend:</strong> TypeScript, Next.js, React, Tailwind CSS, ShadCN UI
            </div>
            <div className="font-mono text-sm">
              <strong>Backend:</strong> Node.js, Express, MongoDB, Firebase
            </div>
            <div className="font-mono text-sm">
              <strong>Deployment:</strong> Vercel, Netlify
            </div>
            <div className="font-mono text-sm">
              <strong>Audio:</strong> Live streaming integration, podcast management
            </div>
            <div className="font-mono text-sm">
              <strong>Styling:</strong> Tailwind CSS, custom animations
            </div>
            <div className="font-mono text-sm">
              <strong>State Management:</strong> React Context, custom hooks
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🎯 Core Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>📻 Live Radio Streaming:</strong> Real-time campus radio with listener count tracking
            </div>
            <div className="font-mono text-sm">
              <strong>📅 Event Management:</strong> Upcoming events, registration, and past event archives
            </div>
            <div className="font-mono text-sm">
              <strong>👥 Team Showcase:</strong> Member profiles and team organization display
            </div>
            <div className="font-mono text-sm">
              <strong>🎧 Podcast Library:</strong> Latest podcasts and audio content management
            </div>
            <div className="font-mono text-sm">
              <strong>📝 Member Registration:</strong> Application forms and community building tools
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Responsive Design:</strong> Seamless experience across all devices
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🎪 Key Sections</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>🏠 Home:</strong> Welcome page with live radio status and quick access
            </div>
            <div className="font-mono text-sm">
              <strong>ℹ️ About:</strong> Club mission, values, and creative expression focus
            </div>
            <div className="font-mono text-sm">
              <strong>📅 Events:</strong> RJ Battle Championship, Open Mic Night, Podcast Workshop
            </div>
            <div className="font-mono text-sm">
              <strong>👥 Team:</strong> Member showcase with profiles and roles
            </div>
            <div className="font-mono text-sm">
              <strong>📻 Live Radio:</strong> Campus Vibes stream with 1.2K+ listeners
            </div>
            <div className="font-mono text-sm">
              <strong>📞 Contact:</strong> Email, location, and social media integration
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🎨 Design & User Experience</TypographyH3>
          <p className="font-mono mb-4">
            Designed with a focus on audio culture and community building, featuring smooth animations, 
            intuitive navigation, and engaging visual elements that reflect the creative spirit of the 
            radio club. The platform emphasizes accessibility and user engagement for campus radio enthusiasts.
          </p>

          <TypographyH3 className="my-4 mt-8">🚀 Technical Implementation</TypographyH3>
          <p className="font-mono mb-4">
            Built with Next.js and TypeScript for optimal performance and SEO, featuring real-time 
            streaming capabilities, event management systems, and responsive design. The platform 
            integrates audio streaming services and provides comprehensive content management for 
            the radio club&apos;s diverse activities.
          </p>
        </div>
      );
    },
  },
  { // 03. Annam AI project
    id: "annamai",
    category: "AI and Agriculture Technology",
    title: "Annam AI - CRISPR-Based Crop Modification Assistant",
    src: "/assets/projects-screenshots/annamai/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://annam-ai.vercel.app/",
    github: "https://github.com/punya-mittal/annam-ai",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built an AI-driven assistant that guides farmers through CRISPR-based crop modification, 
            integrating comprehensive gene data, machine learning feasibility checks, and natural 
            language explanations. The platform democratizes access to advanced agricultural 
            biotechnology, helping farmers make informed decisions about crop improvement.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🧬 AI-Powered Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>🧬 Gene Analysis:</strong> Comprehensive CRISPR target identification and validation
            </div>
            <div className="font-mono text-sm">
              <strong>🤖 ML Feasibility Checks:</strong> AI-powered assessment of modification success probability
            </div>
            <div className="font-mono text-sm">
              <strong>💬 Natural Language Interface:</strong> Conversational AI for complex genetic concepts
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Data Integration:</strong> Real-time access to genetic databases and research papers
            </div>
            <div className="font-mono text-sm">
              <strong>🎯 Risk Assessment:</strong> AI-driven analysis of potential risks and benefits
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Mobile Optimization:</strong> Field-ready interface for on-site decision making
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🔬 Scientific Integration</TypographyH3>
          <p className="font-mono mb-4">
            Integrates with major genetic databases and research repositories, providing farmers 
            with access to the latest scientific findings and CRISPR technology developments. 
            The platform includes comprehensive documentation and educational resources.
          </p>

          <TypographyH3 className="my-4 mt-8">🌾 Agricultural Impact</TypographyH3>
          <p className="font-mono mb-4">
            Designed specifically for agricultural applications, helping farmers understand 
            complex genetic modifications in simple terms. The platform supports various 
            crop types and provides region-specific recommendations based on local conditions.
          </p>
        </div>
      );
    },
  },
  { // 04. HackHub25 project
    id: "hackhub25",
    category: "Event Management & Web Development",
    title: "HackHub 2025 - Innovation Platform & Hackathon Website",
    src: "/assets/a1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://hackhubx.netlify.app/",
    github: "https://github.com/Punyamittal/hackhub02",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed the complete innovation platform and website for HackHub 2025, a 51-hour global 
            hackathon featuring $48K+ prize pool, 6+ partner companies, and 50+ career opportunities. 
            The platform serves as the central hub for registration, event management, sponsor showcase, 
            and real-time hackathon coordination, demonstrating exceptional event management and technical execution.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🏆 Event Success Metrics</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>💰 $48K+ Prize Pool:</strong> Massive prize distribution with up to 70% of participation fees
            </div>
            <div className="font-mono text-sm">
              <strong>🤝 6+ Partner Companies:</strong> Platinum, Gold, and supporting sponsors
            </div>
            <div className="font-mono text-sm">
              <strong>💼 50+ Career Opportunities:</strong> Internship and job placement programs
            </div>
            <div className="font-mono text-sm">
              <strong>🌐 Global Participation:</strong> Fully online event accessible worldwide
            </div>
            <div className="font-mono text-sm">
              <strong>⏰ 51 Hours Duration:</strong> Extended hackathon for comprehensive project development
            </div>
            <div className="font-mono text-sm">
              <strong>👥 2-6 Team Size:</strong> Flexible team formation with individual participation allowed
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🎪 Platform Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>📝 Registration System:</strong> Streamlined participant onboarding with team formation
            </div>
            <div className="font-mono text-sm">
              <strong>📅 Event Timeline:</strong> Detailed 51-hour schedule with real-time updates
            </div>
            <div className="font-mono text-sm">
              <strong>🏆 Prize Showcase:</strong> Comprehensive prize breakdown and sponsor benefits
            </div>
            <div className="font-mono text-sm">
              <strong>👨‍⚖️ Judge Profiles:</strong> Expert panel from leading tech companies
            </div>
            <div className="font-mono text-sm">
              <strong>🤝 Sponsor Integration:</strong> Platinum, Gold, and supporting partner showcase
            </div>
            <div className="font-mono text-sm">
              <strong>📊 Judging Criteria:</strong> Innovation, Technical Excellence, Impact, Presentation
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🏅 Prize Structure</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>🥇 1st Place - Champion:</strong> 20% of total prize pool + certificate + swag
            </div>
            <div className="font-mono text-sm">
              <strong>🥈 2nd Place - Tech Trailblazer:</strong> 15% of total prize pool + certificate
            </div>
            <div className="font-mono text-sm">
              <strong>🥉 3rd Place - Code Innovator:</strong> 10% of total prize pool + certificate
            </div>
            <div className="font-mono text-sm">
              <strong>🌟 Community Choice:</strong> Public recognition + bonus swag
            </div>
            <div className="font-mono text-sm">
              <strong>📜 Certificates:</strong> Digital participation and winner certificates
            </div>
            <div className="font-mono text-sm">
              <strong>💼 Internships:</strong> Partner organization opportunities
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">👨‍⚖️ Expert Judges Panel</TypographyH3>
          <p className="font-mono mb-4">
            Curated an impressive panel of industry leaders including Hitesh Patel (Oracle), Satwik Reddy 
            (Uber), Monish Alur (Black Duck), Apoorwa Joshi (Amazon), Ayush Upadhyay (Nokia), and 
            Preetham Kaukuntla (Glassdoor), providing participants with valuable feedback from top tech professionals.
          </p>

          <TypographyH3 className="my-4 mt-8">🤝 Sponsor Partnerships</TypographyH3>
          <p className="font-mono mb-4">
            Secured partnerships with leading companies including CertifyMe (Platinum), Sync Today (Gold), 
            TechCorp (Gold), InnovateLabs (Silver), CodeFlow (Bronze), and NextGen (Bronze), creating 
            a comprehensive ecosystem of opportunities for participants.
          </p>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Excellence</TypographyH3>
          <p className="font-mono mb-4">
            Built with Next.js and TypeScript for optimal performance and SEO, featuring real-time 
            updates, responsive design, and comprehensive event management systems. The platform 
            handles high concurrent user loads during registration and event coordination.
          </p>

          <TypographyH3 className="my-4 mt-8">🎯 Event Management Impact</TypographyH3>
          <p className="font-mono mb-4">
            The platform significantly streamlined event operations, providing seamless registration, 
            real-time updates, and comprehensive participant engagement. HackHub 2025 established 
            new benchmarks for hackathon organization with its innovative platform and extensive 
            sponsor network.
          </p>
        </div>
      );
    },
  },
  { // 05. Portfolio project
    id: "portfolio",
    category: "Personal Portfolio & Web Design",
    title: "3D Interactive Portfolio - Personal Website",
    src: "/assets/potfolio.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "/",
    github: "https://github.com/punya-mittal/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the most innovative way possible. 
            This 3D interactive portfolio showcases cutting-edge web technologies and demonstrates my passion 
            for creating immersive digital experiences that push the boundaries of what&apos;s possible on the web.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">🎨 Interactive 3D Features</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="font-mono text-sm">
              <strong>⌨️ 3D Keyboard Modal:</strong> Interactive 3D keyboard with skill revelations
            </div>
            <div className="font-mono text-sm">
              <strong>🌌 Space Theme:</strong> Dark background with floating particles and cosmic effects
            </div>
            <div className="font-mono text-sm">
              <strong>🎭 Smooth Animations:</strong> Framer Motion powered transitions and micro-interactions
            </div>
            <div className="font-mono text-sm">
              <strong>🎮 Interactive Elements:</strong> Hover effects and responsive 3D objects
            </div>
            <div className="font-mono text-sm">
              <strong>📱 Responsive Design:</strong> Seamless experience across all devices
            </div>
            <div className="font-mono text-sm">
              <strong>⚡ Performance Optimized:</strong> Fast loading with modern web technologies
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">🛠️ Technical Innovation</TypographyH3>
          <p className="font-mono mb-4">
            Built with Next.js 14 and TypeScript for optimal performance, featuring Three.js for 3D 
            graphics, Framer Motion for animations, and Tailwind CSS for styling. The portfolio 
            demonstrates advanced web development techniques including 3D rendering, real-time 
            interactions, and modern design patterns.
          </p>

          <TypographyH3 className="my-4 mt-8">🎯 Design Philosophy</TypographyH3>
          <p className="font-mono mb-4">
            This portfolio represents my approach to web development - combining technical excellence 
            with creative innovation. Every interaction is carefully crafted to create memorable 
            experiences that showcase both my skills and personality. The 3D keyboard is a perfect 
            example of how I blend functionality with artistic expression.
          </p>

          <TypographyH3 className="my-4 mt-8">🚀 Key Highlights</TypographyH3>
          <p className="font-mono mb-4">
            From the floating particles that create an immersive space environment to the interactive 
            3D keyboard that reveals skills in a playful way, every element is designed to engage 
            and inspire. The portfolio serves as both a showcase of my work and a demonstration of 
            my technical capabilities in modern web development.
          </p>
        </div>
      );
    },
  },
];
export default projects;
