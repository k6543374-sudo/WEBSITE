export interface CompanyInfo {
  name: string;
  tagline: string;
  heroSubtitle: string;
  aboutText: string;
  vision: string;
  mission: string;
  foundingYear: number;
  founder: string;
  coreValues: { title: string; description: string; icon: string }[];
  socialLinks: {
    github?: string;
    instagram?: string;
    twitter?: string;
    email?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Viron Technologies",
  tagline: "Building Intelligent Technology for the Next Generation",
  heroSubtitle: "Engineered at the intersection of autonomous multi-agent orchestration, dynamic dual-brain AI, and native client integration.",
  aboutText: "Viron Technologies is an advanced technology engineering company dedicated to designing and building next-generation intelligent systems, personal AI operating platforms, and context-aware software architectures. Founded by Kartik Domra, Viron Technologies develops technologies that unify cloud intelligence with native desktop and mobile boundaries.",
  vision: "To create truly adaptive, autonomous personal intelligence systems that seamlessly bridge human intent with computer execution across desktop, mobile, and edge environments.",
  mission: "To research, engineer, and deploy secure, privacy-first, and self-evolving AI architectures that put total computational power and operational consent in the hands of users.",
  foundingYear: 2026,
  founder: "Kartik Domra",
  coreValues: [
    {
      title: "Consent-Gated Intelligence",
      description: "AI capability must operate within audited, user-permissioned boundaries with zero undisclosed background actions.",
      icon: "ShieldCheck"
    },
    {
      title: "Architectural Modularity",
      description: "Decoupled dual-brain runtime engines, standard MCP integrations, and agnostic model routing.",
      icon: "Layers"
    },
    {
      title: "Self-Evolving Codebases",
      description: "Automated code quality auditing, AST inspection, and human-in-the-loop refactoring proposals.",
      icon: "Cpu"
    },
    {
      title: "Cross-Device Continuity",
      description: "Conflict-free state synchronization linking desktop workspaces, mobile companion devices, and local state.",
      icon: "Smartphone"
    }
  ],
  socialLinks: {
    github: "https://github.com",
    email: "viron.technologies.inquiry@gmail.com"
  }
};
