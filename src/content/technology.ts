export interface TechCategory {
  id: string;
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    status: 'Verified Architecture' | 'Core System';
    badge?: string;
  }[];
}

export const technologyData: TechCategory[] = [
  {
    id: "ai-providers",
    name: "AI & Neural Providers",
    description: "Multi-model reasoning infrastructure dynamically scheduled via the Dual-Brain router.",
    items: [
      { name: "Pollinations AI", description: "Zero-configuration URL-based multimodal reasoning brain.", status: "Verified Architecture", badge: "Primary Brain" },
      { name: "Groq AI (Llama 3.3 70B)", description: "Ultra-high speed inference engine for real-time task execution.", status: "Verified Architecture", badge: "Secondary Brain" },
      { name: "Grok AI (xAI Grok Beta)", description: "Alternative secondary cloud reasoning engine.", status: "Verified Architecture" },
      { name: "Ollama (Local LLMs)", description: "On-device private inference (Llama 3, Mistral, Qwen) for offline operation.", status: "Verified Architecture", badge: "Local Offline" },
      { name: "LM Studio", description: "Local model server integration via OpenAI-compatible endpoints.", status: "Verified Architecture" },
      { name: "OpenAI GPT-4o & Gemini", description: "High-level reasoning adapters for complex multi-modal synthesis.", status: "Verified Architecture" }
    ]
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    description: "13 specialized autonomous agents coordinating complex multi-step workflows.",
    items: [
      { name: "CEO Agent", description: "Intent classification, budget control, subagent routing, and response synthesis.", status: "Verified Architecture", badge: "Orchestrator" },
      { name: "Memory Agent", description: "Short-term context ranker and long-term vector database store.", status: "Verified Architecture" },
      { name: "Planning Agent", description: "DAG execution tree generation and task progress monitoring.", status: "Verified Architecture" },
      { name: "Coding Agent", description: "Repository AST analysis, automated diff generation, and test execution.", status: "Verified Architecture" },
      { name: "Browser Agent", description: "DOM tree interaction, web scraping, page reading, and form automation.", status: "Verified Architecture" },
      { name: "PC & Android Agents", description: "Native Windows control plane and wireless ADB companion automation.", status: "Verified Architecture" }
    ]
  },
  {
    id: "vision-voice",
    name: "Computer Vision & Voice Subsystem",
    description: "Real-time multimodal sensory feedback loops and 3D visual output.",
    items: [
      { name: "Consent-Gated Face Unlock", description: "Biometric authentication with liveness verification.", status: "Verified Architecture", badge: "Security" },
      { name: "OCR & Screen Region Parser", description: "Optical character extraction and spatial UI window understanding.", status: "Verified Architecture" },
      { name: "Wake Word Subsystem", description: "Low-latency hands-free activation trigger ('Hey Zee').", status: "Verified Architecture" },
      { name: "3D Audio Orb Visualizer", description: "Audio-reactive Canvas/WebGL frequency visualizer rendering system state.", status: "Verified Architecture", badge: "UI / UX" }
    ]
  },
  {
    id: "protocols-security",
    name: "Protocols, Security & Infrastructure",
    description: "Local-first data persistence, Model Context Protocol adapters, and permission gateways.",
    items: [
      { name: "Guardian Permission Engine", description: "Risk scoring gateway enforcing explicit user consent dialogs.", status: "Verified Architecture", badge: "Security Gatekeeper" },
      { name: "Model Context Protocol (MCP)", description: "Standardized adapter runtime exposing GitHub, Supabase, Cloudflare & filesystem tools.", status: "Verified Architecture" },
      { name: "SQLite3 & Supabase", description: "Local vector storage coupled with conflict-free cloud state sync.", status: "Verified Architecture" },
      { name: "Cloudflare Workers", description: "Edge REST API, session validation, and WebSocket routing.", status: "Verified Architecture" }
    ]
  }
];
