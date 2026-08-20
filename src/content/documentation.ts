export interface DocArticle {
  id: string;
  title: string;
  category: 'System Architecture' | 'Runtime & Agents' | 'Subsystems & Vision' | 'Integrations & Security';
  summary: string;
  contentMarkdown: string;
}

export const documentationData: DocArticle[] = [
  {
    id: "overview",
    title: "System Architecture Overview",
    category: "System Architecture",
    summary: "High-level overview of Zee AI operating system boundaries, request flow, and 13-agent subsystem breakdown.",
    contentMarkdown: `
# Zee AI System Architecture Overview

## Product Boundary
Zee AI is the central operating system architecture developed by Viron Technologies. Built as a local-first control plane, Zee AI unifies desktop, Android companion, cloud infrastructure, and multi-agent coordination into a cohesive, secure platform.

## Key System Components
- **Windows Desktop App**: Primary local control plane, dynamic notch UI, PC automation, screen understanding, local model access, and voice session client.
- **Android Companion App**: Mobile dynamic notch UI, device status, notifications, clipboard sync, ADB pairing, and remote control plane.
- **Cloudflare Workers Backend**: Authentication boundary, REST API, WebSocket routing, AI prompt routing, and sync fanout.
- **Supabase Cloud State**: Durable user data, device state, memory vectors, project tasks, Guardian audit logs, and plugin settings.
- **MCP Ecosystem**: Local and cloud tool servers discovered through plugin manifests and permission policies.
- **13-Agent Runtime**: CEO Agent selects worker agents, Guardian gates actions, Recovery Agent handles execution failures.
- **Voice Subsystem**: Wake-word engine ("Hey Zee"), STT/LLM/TTS audio pipeline, interruptible speech, and 3D visual audio orb.

## Request Flow Protocol
1. User request originates from desktop, Android, voice, browser automation, or API trigger.
2. Session middleware validates user identity, device token, and cryptographic trust state.
3. CEO Agent classifies request intent and decomposes sub-tasks for specialized worker agents.
4. AI Router evaluates latency, cost, and capacity to pick local (Ollama) or cloud (Groq/Pollinations) models.
5. Guardian Security Engine checks risk scores and presents consent dialogs if native operations are required.
6. Worker agents execute through typed adapters (PC, Browser, Android, Vision, Plugin, Coding, Research, Memory).
7. Execution state, memories, and audit logs sync to Supabase and SQLite stores.
8. Dynamic Notch UI updates client visual state (Listening, Thinking, Speaking, Approving, Done, Error).
`
  },
  {
    id: "ai-providers",
    title: "AI Providers & Dual-Brain Router",
    category: "Runtime & Agents",
    summary: "Policy-driven LLM router selecting local (Ollama, LM Studio) or cloud (Groq, Pollinations, OpenAI, Gemini) models dynamically.",
    contentMarkdown: `
# AI Providers & Dual-Brain Routing Architecture

## Overview
Zee AI employs a Dual-Brain architecture that decouples reasoning tasks from specific model vendors. The AI Router selects the optimal model for each step in an agent workflow based on performance targets, cost bounds, and network availability.

## Brain Configurations
- **Primary Brain**: Pollinations AI (Zero-config URL-based reasoning endpoints for instant fallback).
- **Secondary Brain**: Groq AI (Llama 3.3 70B Versatile) for ultra-low latency complex synthesis & Grok AI (xAI Grok Beta).
- **Local Brain**: Ollama (Llama 3, Mistral, Qwen) & LM Studio local servers for 100% private, offline inference.
- **Cloud Adapters**: OpenAI (GPT-4o) & Google Gemini for ultra-large context or specialized vision tasks.

## Dynamic Selection Matrix
1. **Low-Latency Task** (e.g. intent classification) -> Groq Llama 3.3 70B or Local Ollama.
2. **Offline Mode** -> Auto-fallback to local Ollama / LM Studio endpoints.
3. **No-Key Development** -> Default routing to Pollinations AI endpoints.
4. **Multimodal Analysis** -> Vision Agent dispatches to Gemini / GPT-4o or local vision adapters.
`
  },
  {
    id: "self-evolving-engine",
    title: "Self-Evolving Code Engine",
    category: "Runtime & Agents",
    summary: "Automated AST inspection, risk scoring, diff proposals, and human-in-the-loop refactoring audits.",
    contentMarkdown: `
# Self-Evolving Code Engine Specification

## Purpose
The Self-Evolving Engine enables Zee AI to audit its own codebase, detect architectural smells, propose refactoring patches, and run automated regression test suites before seeking human approval.

## Core Capabilities
- **AST / Code Smells Analysis**: Parses JavaScript/TypeScript codebases to measure cyclomatic complexity and duplicate logic.
- **Risk Scoring Engine**: Assigns safety risk scores (Low, Medium, High, Critical) to proposed refactoring patches.
- **Human-In-The-Loop Gate**: Code edits are never committed automatically; they require user confirmation through the UI.
- **Regression Audit Runner**: Executes Node test suites (\`npm test\`) before and after patch application to guarantee zero functionality regressions.
`
  },
  {
    id: "guardian-security",
    title: "Guardian Security System",
    category: "Integrations & Security",
    summary: "Consent-gated capability API permissions, risk evaluation, and tamper-evident audit logging.",
    contentMarkdown: `
# Guardian Security & Permission Framework

## Security Boundary Rules
1. UI clients never execute native system operations directly.
2. Every native system action must pass through Guardian middleware.
3. High-risk operations (file modifications, system command execution, network posts) trigger explicit user consent prompts.
4. All permission decisions and executed actions produce immutable audit logs saved locally and synced to Supabase.
`
  },
  {
    id: "mcp-marketplace",
    title: "Model Context Protocol & Plugin Marketplace",
    category: "Integrations & Security",
    summary: "Sandboxed MCP tool servers, digital signatures, permission policies, and plugin SDK scaffolding.",
    contentMarkdown: `
# MCP & Plugin Marketplace Specification

## Model Context Protocol (MCP) Runtime
Zee AI natively supports Anthropic's Model Context Protocol. MCP adapters allow agents to interact with external tools using standard JSON-RPC interface declarations.

## Pre-Built Adapters
- **GitHub**: Repository search, issue tracking, commit inspection.
- **Cloudflare**: Worker deployment and KV storage management.
- **Supabase**: PostgreSQL database query execution and table inspection.
- **Filesystem & Terminal**: Local directory navigation and sandboxed command execution.
- **VS Code**: Workspace file edits and editor state synchronization.
`
  },
  {
    id: "vision-system",
    title: "Multimodal Vision System",
    category: "Subsystems & Vision",
    summary: "Consent-gated face detection, OCR, screen accessibility tree parsing, and spatial window recognition.",
    contentMarkdown: `
# Multimodal Vision System Guide

## Subsystem Modules
- **Face Unlock & Liveness**: Consent-gated local facial recognition for user lockscreen authentication.
- **OCR Engine**: Screen text parsing and spatial document extraction.
- **Accessibility Tree Parser**: Converts desktop screen regions into structured UI node elements for Browser & PC Agents.
`
  }
];
