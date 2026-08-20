export interface AgentDetail {
  name: string;
  role: string;
  description: string;
  category: 'Orchestration' | 'Core Memory' | 'Automation' | 'Intelligence' | 'Security';
}

export interface ArchitectureComponent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface ZeeAIProductInfo {
  name: string;
  version: string;
  downloadUrl?: string;
  downloadFilename?: string;
  downloadSize?: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  architectureSummary: string;
  agents: AgentDetail[];
  dualBrain: {
    primaryBrain: string;
    secondaryBrain: string;
    localModels: string[];
    cloudModels: string[];
    routingPolicy: string;
  };
  keySubsystems: {
    vision: ArchitectureComponent;
    selfEvolving: ArchitectureComponent;
    learningEngine: ArchitectureComponent;
    guardianSecurity: ArchitectureComponent;
    mcpMarketplace: ArchitectureComponent;
    voiceSubsystem: ArchitectureComponent;
    pcAndroidAutomation: ArchitectureComponent;
  };
  roadmap: { phase: string; title: string; timeline: string; status: 'Completed' | 'In Progress' | 'Planned'; deliverables: string[] }[];
}

export const zeeAIData: ZeeAIProductInfo = {
  name: "Zee AI",
  version: "0.1.0",
  downloadUrl: "/downloads/Zee AI Operating System.exe",
  downloadFilename: "Zee AI Operating System.exe",
  downloadSize: "224 MB",
  tagline: "The Modular AI Operating System for Autonomous Multi-Agent Automation",
  shortDescription: "A next-generation Personal AI Operating System engineered for desktop, Android, cloud, local models, MCP tools, and multi-agent coordination.",
  fullOverview: "Zee AI is a modular personal AI operating system created by Kartik Domra and engineered by Viron Technologies. Built to operate as a local-first control plane, Zee AI unifies real-time voice, vision understanding, desktop automation, Android companion control, and dynamic multi-agent orchestration into a cohesive futuristic user experience featuring a high-fidelity 3D audio orb and dynamic notch interface.",
  architectureSummary: "Built around a 13-agent autonomous runtime, Zee AI classifies user intent, routes model prompts across local and cloud LLMs via a Dual-Brain router, evaluates permissions through the Guardian Security subsystem, and dispatches actions across native platform adapters.",
  
  dualBrain: {
    primaryBrain: "Pollinations AI (Zero-config URL-based multimodal model access)",
    secondaryBrain: "Groq AI (Llama 3.3 70B Versatile) & Grok AI (xAI Grok Beta)",
    localModels: ["Ollama (Llama 3, Mistral, Qwen)", "LM Studio Local Server"],
    cloudModels: ["Groq (Llama-3.3-70b-versatile)", "Pollinations AI", "OpenAI (GPT-4o)", "Google Gemini"],
    routingPolicy: "Dynamic cost, latency, and capability score evaluation per reasoning step."
  },

  agents: [
    { name: "CEO Agent", role: "Orchestration & Intent Dispatcher", description: "Classifies incoming multi-modal requests, decomposes complex user goals, delegates sub-tasks to specialized worker agents, and synthesizes final responses.", category: "Orchestration" },
    { name: "Memory Agent", role: "Short & Long-Term Memory Ranker", description: "Manages conversation context, writes long-term memories to SQLite vector store, performs semantic rank indexing, and executes scoped decay.", category: "Core Memory" },
    { name: "Planning Agent", role: "Recursive Decomposer & Task Monitor", description: "Breaks large engineering or operational projects into DAG execution trees and tracks step completion state.", category: "Orchestration" },
    { name: "Research Agent", role: "Document & Structural Web Intelligence", description: "Searches web endpoints, scrapes structured markdown, parses documentation trees, and synthesizes references.", category: "Intelligence" },
    { name: "Coding Agent", role: "Repository Auditor & Refactoring Generator", description: "Inspects codebases, detects syntax bugs, generates precise code diffs, executes test suites, and drafts pull requests.", category: "Automation" },
    { name: "Browser Agent", role: "DOM Interactor & Web Automator", description: "Navigates websites, extracts DOM accessibility nodes, fills forms, clicks controls, and handles background downloads.", category: "Automation" },
    { name: "PC Agent", role: "Native Windows Control Plane", description: "Controls desktop keyboard, mouse clicks, clipboard buffer, active windows, volume audio, application execution, and screenshots.", category: "Automation" },
    { name: "Android Agent", role: "Companion Device & ADB Bridge", description: "Connects via wireless ADB, monitors device battery/telemetry, reads notification feeds, syncs clipboards, and launches mobile apps.", category: "Automation" },
    { name: "Vision Agent", role: "OCR & UI Tree Recognizer", description: "Parses active screen regions, performs Optical Character Recognition, generates bounding box coordinates, and validates facial liveness.", category: "Intelligence" },
    { name: "Plugin Agent", role: "MCP Tool Server & Marketplace Runtime", description: "Discovers, verifies, installs, and executes sandboxed Model Context Protocol (MCP) tool extensions.", category: "Intelligence" },
    { name: "Guardian Agent", role: "Consent Evaluator & Security Gatekeeper", description: "Evaluates action risk scores, validates user consent policies, blocks unapproved native calls, and maintains audit logs.", category: "Security" },
    { name: "Learning Agent", role: "Habit & Routine Adaptor", description: "Continuously learns user tool preferences, daily workflow routines, and recurring project patterns.", category: "Core Memory" },
    { name: "Recovery Agent", role: "Fault Tolerance & Self-Healing", description: "Handles agent execution failures, generates degraded-mode execution plans, and executes safe state rollbacks.", category: "Security" }
  ],

  keySubsystems: {
    vision: {
      title: "Multimodal Vision System",
      subtitle: "Screen Understanding, OCR & Biometric Unlock",
      description: "Provides Zee AI with visual sight across active desktop screens, app windows, and camera inputs under strict user consent.",
      features: [
        "Consent-gated face detection & liveness unlock",
        "High-accuracy Optical Character Recognition (OCR)",
        "Accessibility tree & screen element spatial parsing",
        "Bounding box object and window boundary recognition"
      ],
      techStack: ["OpenCV / Vision API", "Node Canvas", "Screen Region Parser"]
    },
    selfEvolving: {
      title: "Self-Evolving Code Engine",
      subtitle: "Autonomous Code Health & Refactoring Proposals",
      description: "Performs continuous AST code inspections, scores maintainability risks, generates safe diff proposals, and runs regression suites before applying updates.",
      features: [
        "Abstract Syntax Tree (AST) code smell inspection",
        "Risk scoring & automated regression test runner",
        "Human-in-the-loop approval gating for code edits",
        "Diff proposal generation with patch verification"
      ],
      techStack: ["Node AST Parser", "Node Test Runner", "Git Patch Engine"]
    },
    learningEngine: {
      title: "Adaptive Learning Engine",
      subtitle: "User Habit Graph & Vector Memory Ranker",
      description: "Synthesizes short-term user interactions into long-term structured knowledge, vector embeddings, and habit graphs.",
      features: [
        "Short-term context ranker & long-term vector storage",
        "User workflow habit & tool preference profiling",
        "Semantic knowledge graph & vector similarity search",
        "Editable & reviewable memory management"
      ],
      techStack: ["SQLite3 Vector Storage", "Cosine Similarity Engine", "Supabase Memory Sync"]
    },
    guardianSecurity: {
      title: "Guardian Security Framework",
      subtitle: "Permission Policy & Risk-Gated Sandbox",
      description: "Protects user device integrity by requiring explicit consent dialogs for high-risk operations like file deletion, system execution, or network posts.",
      features: [
        "Dynamic action risk scoring engine",
        "Interactive consent dialogs with permission memory",
        "Cryptographic plugin verification & trust tiers",
        "Comprehensive immutable security audit logging"
      ],
      techStack: ["Guardian Middleware", "Crypto Audit Log", "Trust Tier Verifier"]
    },
    mcpMarketplace: {
      title: "Model Context Protocol & Marketplace",
      subtitle: "Sandboxed Extension Runtime & Plugin Hub",
      description: "First-class integration with Anthropic's Model Context Protocol (MCP), supporting adapters for cloud tools, local code editors, and custom plugins.",
      features: [
        "Adapters for GitHub, Cloudflare, Supabase, Terminal & VS Code",
        "Sandboxed execution limits (Memory, CPU, Network)",
        "Plugin package discovery, digital signatures & lifecycle management",
        "Declarative tool manifest parser"
      ],
      techStack: ["MCP Standard Protocol", "JSON Schema Verifier", "Sandbox Runtime"]
    },
    voiceSubsystem: {
      title: "Real-Time Voice Pipeline",
      subtitle: "Hands-Free Wake Word & 3D Orb Visualization",
      description: "Low-latency hands-free speech interface featuring wake word detection, interruptible dialogue loops, and audio-reactive 3D visual orb output.",
      features: [
        "Wake-word recognition ('Hey Zee')",
        "Low-latency Speech-to-Text (STT) and Text-to-Speech (TTS)",
        "Audio-reactive WebGL/Canvas 3D Orb visualization",
        "Interruptible speech feedback and noise suppression"
      ],
      techStack: ["Web Speech API", "MediaDevices API", "Canvas Audio Frequency Visualizer"]
    },
    pcAndroidAutomation: {
      title: "Cross-Platform Automation Control Plane",
      subtitle: "Windows Desktop & Android Companion Sync",
      description: "Unified automation boundary spanning desktop keyboard/mouse control, app launching, and mobile device ADB pairing.",
      features: [
        "Native Windows keyboard, mouse, and window management",
        "Wireless ADB Android device pairing & notification mirror",
        "Cross-device real-time clipboard sync protocol",
        "Dynamic Notch desktop & mobile companion UI overlay"
      ],
      techStack: ["Windows Native Bridge", "Android ADB Connector", "Dynamic Notch Overlay"]
    }
  },

  roadmap: [
    {
      phase: "Phase 1",
      title: "Dual-Brain & Multi-Agent Core Foundation",
      timeline: "Q3 2026",
      status: "Completed",
      deliverables: ["13-agent architecture implementation", "Pollinations & Groq dual-brain routing", "SQLite memory database", "Dynamic Notch client boundary"]
    },
    {
      phase: "Phase 2",
      title: "Self-Evolving Engine & Guardian Permission System",
      timeline: "Q3 2026",
      status: "Completed",
      deliverables: ["AST code smell analyzer", "Guardian consent dialogs", "MCP plugin adapters", "Desktop & Android bridge tests"]
    },
    {
      phase: "Phase 3",
      title: "Cloud Sync & Sandboxed Marketplace",
      timeline: "Q4 2026",
      status: "In Progress",
      deliverables: ["Supabase state synchronization", "Verified plugin store distribution", "Multi-modal vision expansion", "Enhanced voice pipeline"]
    },
    {
      phase: "Phase 4",
      title: "Autonomous Edge Deployment",
      timeline: "2027",
      status: "Planned",
      deliverables: ["On-device NPU quantized models", "Autonomous agent swarm execution", "Enterprise Guardian auditing"]
    }
  ]
};
