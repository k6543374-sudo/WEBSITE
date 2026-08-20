export interface CreatorInfo {
  name: string;
  role: string;
  company: string;
  bio: string;
  education: string;
  philosophy: string;
  keyContributions: string[];
  skills: { name: string; category: string }[];
  featuredProjects: { name: string; role: string; description: string }[];
}

export const creatorData: CreatorInfo = {
  name: "Kartik Domra",
  role: "Founder & Lead Architect",
  company: "Viron Technologies",
  bio: "Kartik Domra is a 10th standard student and self-learning coder with a strong interest in artificial intelligence, automation, and futuristic technology. Through continuous experimentation with AI tools, local language models, and intelligent systems, Kartik aims to build advanced solutions that go beyond traditional software. Zee AI represents his ambition to create powerful AI technology capable of evolving into practical systems for productivity, freelancing, innovation, and future technological development.",
  education: "High School (10th Standard) / Self-Taught Software Architect & Systems Engineer",
  philosophy: "Age is no barrier to technical depth. Powerful software should not merely react to clicks—it should anticipate intent, learn continuously, operate safely under permissioned consent, and unify multi-modal AI into a seamless operating system.",
  keyContributions: [
    "Conceptualized and engineered the 13-agent autonomous architecture for Zee AI",
    "Designed the Dual-Brain AI Router integrating local LLMs (Ollama) with Cloud LLMs (Groq, Pollinations)",
    "Architected the Guardian Security permission model for user consent-gated system execution",
    "Developed the Self-Evolving Code Engine with AST code auditing and refactoring diff generation",
    "Created the dynamic notch UI and interactive 3D audio orb visualization",
    "Engineered cross-device continuity bridging Windows desktop and Android ADB companion boundaries"
  ],
  skills: [
    { name: "Autonomous Agent Orchestration", category: "AI Architecture" },
    { name: "Dual-Brain LLM Routing", category: "AI Architecture" },
    { name: "Node.js & System Scripting", category: "Backend" },
    { name: "React, Vite & Canvas WebGL", category: "Frontend" },
    { name: "Model Context Protocol (MCP)", category: "Protocols" },
    { name: "Windows Native & ADB Automation", category: "Systems" },
    { name: "SQLite Vector & Supabase Sync", category: "Database" },
    { name: "AST Code Analysis & Refactoring", category: "Engineers Tools" }
  ],
  featuredProjects: [
    {
      name: "Zee AI",
      role: "Creator & Chief Architect",
      description: "Modular personal AI operating system for desktop, mobile, local models, MCP tools, and multi-agent automation."
    },
    {
      name: "Dual-Brain AI Router Engine",
      role: "Lead Developer",
      description: "Smart cost/latency/capability evaluation matrix routing prompts dynamically across local and cloud providers."
    },
    {
      name: "Guardian Consent Framework",
      role: "Security Architect",
      description: "Risk-scoring security gateway ensuring dangerous platform capabilities require user consent."
    }
  ]
};
