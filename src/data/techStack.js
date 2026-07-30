import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiN8N,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiPostman,
} from "react-icons/si";

/**
 * Categorized tech stack with real-world usage descriptions.
 * Used on both the homepage (preview) and the full /technologies page.
 */
const techStack = [
  {
    category: "Frontend",
    items: [
      {
        title: "React.js",
        icon: FaReact,
        usage: "Build component-driven UIs for dashboards, chatbot interfaces, and client portals.",
        projects: ["Portfolio", "AI Chatbot Dashboard"],
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
        usage: "Server-rendered apps with API routes, used for SEO-critical landing pages and full-stack projects.",
        projects: ["Agency Site", "AI Tool Landing Page"],
      },
      {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        usage: "Rapid prototyping and production styling with utility classes for consistent, responsive designs.",
        projects: [],
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "Node.js",
        icon: FaNodeJs,
        usage: "Runtime for REST APIs, WebSocket servers, and automation scripts powering all my backend services.",
        projects: ["Contact API", "Voice Agent Server"],
      },
      {
        title: "Express.js",
        icon: SiExpress,
        usage: "Lightweight API framework for building middleware pipelines, auth flows, and webhook handlers.",
        projects: ["Portfolio Backend", "n8n Webhook Relay"],
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
        usage: "NoSQL database for flexible document storage — chat logs, user data, and automation run histories.",
        projects: ["Chatbot DB", "Contact Form Storage"],
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        title: "n8n",
        icon: SiN8N,
        usage: "Visual workflow automation — connecting APIs, triggering chatbot flows, and scheduling data pipelines.",
        projects: ["Lead Gen Automation", "Email Workflow"],
      },
      {
        title: "OpenAI API",
        icon: SiOpenai,
        usage: "GPT-powered chatbots and voice agents with custom prompts, function calling, and RAG pipelines.",
        projects: ["AI Chatbot", "Voice Agent"],
      },
      {
        title: "Python AI Tools",
        icon: FaPython,
        usage: "LangChain, Flask APIs, and scripting for data processing, embeddings, and automation backends.",
        projects: ["RAG Pipeline", "Data Scraper"],
      },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      {
        title: "Docker",
        icon: SiDocker,
        usage: "Containerized deployments for consistent dev/prod environments across all services.",
        projects: [],
      },
      {
        title: "GitHub Actions",
        icon: SiGithubactions,
        usage: "CI/CD pipelines for automated testing, building, and deploying to Vercel and cloud VMs.",
        projects: [],
      },
      {
        title: "Vercel",
        icon: SiVercel,
        usage: "Zero-config deployments for Next.js and React apps with edge functions and analytics.",
        projects: ["Portfolio", "AI Tool Landing Page"],
      },
    ],
  },
];

export default techStack;
