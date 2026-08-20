export interface ProjectItem {
  id: string;
  name: string;
  category: 'Flagship Product' | 'Core Runtime' | 'Security & Protocol' | 'Companion Subsystem';
  tagline: string;
  description: string;
  status: 'Production Ready' | 'Active Development' | 'Experimental' | 'Architectural Reference';
  technologies: string[];
  features: string[];
  docLink?: string;
  isFlagship?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "zee-ai-os",
    name: "Zee AI Personal Operating System",
    category: "Flagship Product",
    tagline: "Autonomous Multi-Agent Personal AI Operating System",
    description: "The flagship personal AI operating platform unifying voice, vision, PC automation, Android companion control, and local/cloud LLMs into an interactive 3D Orb and Dynamic Notch desktop interface.",
    status: "Active Development",
    technologies: ["React", "Node.js", "Express", "SQLite3", "Supabase", "MCP", "Web Audio API"],
    features: [
      "13-Agent Autonomous Multi-Agent Runtime",
      "Dual-Brain LLM Prompt Router",
      "Consent-Gated Guardian Security Framework",
      "3D Interactive Audio-Reactive Orb Visualization"
    ],
    docLink: "/documentation?doc=overview",
    isFlagship: true
  },
  {
    id: "dual-brain-router",
    name: "Dual-Brain AI Routing Engine",
    category: "Core Runtime",
    tagline: "Dynamic Multi-Model Cost, Latency & Capability Scheduler",
    description: "Policy-driven LLM prompt router capable of dynamically selecting local models (Ollama, LM Studio) or cloud providers (Groq Llama 3.3, Pollinations AI, OpenAI, Gemini) based on task intent and network conditions.",
    status: "Production Ready",
    technologies: ["Node.js", "Puter.js", "Groq SDK", "Pollinations API", "Ollama API"],
    features: [
      "Zero-config Pollinations AI fallback brain",
      "Groq Llama-3.3-70b hyper-fast inferencing",
      "Local Ollama model discovery and streaming",
      "Dynamic cost & latency evaluation"
    ],
    docLink: "/documentation?doc=ai-providers"
  },
  {
    id: "guardian-permission-system",
    name: "Guardian Permission & Consent Framework",
    category: "Security & Protocol",
    tagline: "Risk-Scored Action Gateway & Security Auditor",
    description: "Declarative security subsystem that evaluates the risk score of capability calls (file operations, system commands, network posts), gating execution behind user consent dialogs and cryptographic audit logs.",
    status: "Production Ready",
    technologies: ["Node.js", "Crypto Audit Log", "Guardian Middleware", "Supabase RLS"],
    features: [
      "Multi-tier risk assessment per capability call",
      "Consent memory policy caching",
      "Tamper-evident audit log ledger",
      "Sandboxed runtime boundary protection"
    ],
    docLink: "/documentation?doc=security"
  },
  {
    id: "self-evolving-engine",
    name: "Self-Evolving Code Engine",
    category: "Core Runtime",
    tagline: "AST Code Inspection & Safe Refactoring Proposal Suite",
    description: "Automated engine that parses repository Abstract Syntax Trees (AST), flags code smells, computes maintainability scores, and generates reviewable code diff proposals validated against automated regression test suites.",
    status: "Active Development",
    technologies: ["Node AST Parser", "Native Test Runner", "Diff Engine"],
    features: [
      "AST code smell detection",
      "Automated regression test suite execution",
      "Human-in-the-loop diff approval gate",
      "Safe patch application and rollback"
    ],
    docLink: "/documentation?doc=self-evolving-engine"
  },
  {
    id: "mcp-adapter-suite",
    name: "Model Context Protocol (MCP) Adapter Suite",
    category: "Security & Protocol",
    tagline: "Standardized Tool Exposure for External Ecosystems",
    description: "First-class implementation of Model Context Protocol (MCP) tool adapters enabling Zee AI to seamlessly orchestrate GitHub repositories, Cloudflare Workers, Supabase databases, local terminals, and VS Code workspaces.",
    status: "Active Development",
    technologies: ["MCP Spec v1.0", "JSON-RPC", "Node.js", "Supabase API"],
    features: [
      "GitHub & Cloudflare API tool servers",
      "Filesystem & Terminal command adapters",
      "Declarative tool permission schema",
      "Sandboxed execution constraints"
    ],
    docLink: "/documentation?doc=mcp"
  },
  {
    id: "android-companion-bridge",
    name: "Android ADB Companion Bridge",
    category: "Companion Subsystem",
    tagline: "Cross-Device Telemetry & Control Plane",
    description: "Wireless ADB companion connector enabling Zee AI to monitor mobile battery telemetry, relay notifications to desktop dynamic notch, sync clipboards in real-time, and trigger Android mobile apps.",
    status: "Active Development",
    technologies: ["Android ADB", "WebSocket Sync", "Node.js", "Dynamic Notch"],
    features: [
      "Wireless ADB pairing protocol",
      "Notification feed mirroring",
      "Real-time cross-device clipboard sync",
      "Mobile device battery & status telemetry"
    ],
    docLink: "/documentation?doc=android-bridge"
  }
];
