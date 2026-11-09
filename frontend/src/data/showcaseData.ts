export type ModalId =
  | 'modal-ecosystem'
  | 'modal-briefing'
  | 'modal-autonomous'
  | 'modal-sales'
  | 'modal-managed-services'
  | 'modal-connect-council'
  | 'modal-orchestrator'
  | 'modal-prioritization-framework'
  | 'modal-digital-lead'
  | null;

export type QuadrantKey = 'hub' | 'transformation' | 'partnership' | 'delivery' | 'future';
export type ViewMode = 'newsletter' | 'hub';
export type PageRoute = 'landing' | 'delivery' | 'partnership' | 'transformation' | 'future';

export const PAGE_PATHS: Record<PageRoute, string> = {
  landing: '/',
  delivery: '/delivery',
  partnership: '/partnership',
  transformation: '/transformation',
  future: '/future',
};

export function resolvePageFromPath(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  switch (clean) {
    case '/transformation':
    case '/pillar-01':
    case '/pillar-transformation':
      return 'transformation';
    case '/future':
    case '/pillar-02':
    case '/pillar-future':
      return 'future';
    case '/partnership':
    case '/pillar-03':
    case '/pillar-partnership':
      return 'partnership';
    case '/delivery':
    case '/pillar-04':
    case '/pillar-delivery':
      return 'delivery';
    default:
      return 'landing';
  }
}

export interface HeroKpiCard {
  id: string;
  icon: string;
  value: string;
  label: string;
  iconBgClass: string;
  iconTextClass: string;
  dotColorClass: string;
}

export interface HeroCtaCard {
  id: string;
  modalId: Exclude<ModalId, null>;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  badge: string;
  icon: string;
  accent: 'secondary' | 'primary' | 'tertiary';
}

export interface PipelineStage {
  id: number;
  stepCode: string;
  shortTitle: string;
  shortDesc: string;
  fullName: string;
  fullDesc: string;
  metric: string;
  icon: string;
  accentClass: string;
}

export interface AutonomyTier {
  id: 1 | 2 | 3;
  tabLabel: string;
  badge: string;
  sla: string;
  desc: string;
  gov: string;
  speed: string;
}

export interface TelemetryMode {
  key: 'agentic' | 'cloud' | 'sdlc';
  label: string;
  title: string;
  desc: string;
  mttr: string;
  gate: string;
  logs: {
    icon: string;
    colorClass: string;
    text: string;
  }[];
}

export interface PrioritizationQuadrantTest {
  key: 'value' | 'feasibility' | 'cross' | 'gtm';
  label: string;
  sublabel: string;
  accentClass: string;
  hoverBorderClass: string;
  title: string;
  status: string;
}

export const HERO_DATA = {
  eyebrowReport: '2025 ALLIANCE REPORT',
  eyebrowTag: 'STRATEGIC ACCELERATION',
  headlinePrefix: 'Accelerating Enterprise Transformation Through',
  headlineGradient: ' AI & Delivery Excellence',
  subtitle:
    'Building sovereign enterprise capabilities, scaling Agentic AI solutions, delivering validated EPP ROI, and shaping the future of autonomous cloud workflows.',
  kpis: [
    {
      id: 'gcp-native',
      icon: 'cloud_done',
      value: '100%',
      label: 'Google Cloud Native',
      iconBgClass: 'bg-google-blue/10',
      iconTextClass: 'text-google-blue',
      dotColorClass: 'bg-google-blue',
    },
    {
      id: 'build-with-gemini',
      icon: 'auto_awesome',
      value: '55K+',
      label: 'Build with Gemini',
      iconBgClass: 'bg-google-green/10',
      iconTextClass: 'text-google-green',
      dotColorClass: 'bg-google-green',
    },
    {
      id: 'epp-roi',
      icon: 'monitoring',
      value: '$10M+',
      label: 'EPP Verified ROI',
      iconBgClass: 'bg-google-yellow/10',
      iconTextClass: 'text-[#B06000]',
      dotColorClass: 'bg-[#B06000]',
    },
    {
      id: 'sre-mttr',
      icon: 'speed',
      value: '<4.2m',
      label: 'SRE MTTR Velocity',
      iconBgClass: 'bg-[#FCE8E6]',
      iconTextClass: 'text-[#D93025]',
      dotColorClass: 'bg-[#EA4335]',
    },
  ] as HeroKpiCard[],
  ctas: [
    {
      id: 'cta-autonomous',
      modalId: 'modal-autonomous',
      title: 'Click here to know about our autonomous POV',
      subtitle: '2027 Cloud Support Vision & AI Roadmap',
      description:
        'Autonomous & AI-Augmented End-to-End Case Lifecycle with self-driving AI resolution (>90% threshold).',
      ctaLabel: 'View Autonomous POV',
      badge: 'Slide 6',
      icon: 'route',
      accent: 'secondary',
    },
    {
      id: 'cta-prioritization',
      modalId: 'modal-prioritization-framework',
      title: 'Want to know more  prioritization framework for AI solutions',
      subtitle: 'GCP Support AI Solution Prioritization Framework',
      description:
        'One weighted, risk-adjusted score decides which AI solutions we fund, risk-adjusted and tiered.',
      ctaLabel: 'View Framework',
      badge: 'Slide 7',
      icon: 'analytics',
      accent: 'primary',
    },
  ] as HeroCtaCard[],
};

export const PRIORITIZATION_QUADRANTS: PrioritizationQuadrantTest[] = [
  {
    key: 'value',
    label: 'Value Impact',
    sublabel: 'EPP ROI Reduction',
    accentClass: 'text-primary',
    hoverBorderClass: 'hover:border-primary',
    title: 'Score Threshold: > 85',
    status: 'Gate Approved (98.4/100)',
  },
  {
    key: 'feasibility',
    label: 'Feasibility',
    sublabel: 'Gemini API Ready',
    accentClass: 'text-secondary',
    hoverBorderClass: 'hover:border-secondary',
    title: 'Score Threshold: > 80',
    status: 'Gate Approved (91.2/100)',
  },
  {
    key: 'cross',
    label: 'Cross-App',
    sublabel: 'Reusability >80%',
    accentClass: 'text-tertiary',
    hoverBorderClass: 'hover:border-tertiary',
    title: 'Score Threshold: > 75',
    status: 'Gate Approved (89.6/100)',
  },
  {
    key: 'gtm',
    label: 'GTM Potential',
    sublabel: 'Joint Pipeline',
    accentClass: 'text-primary',
    hoverBorderClass: 'hover:border-primary',
    title: 'Score Threshold: > 88',
    status: 'Gate Approved (95.0/100)',
  },
];

export const TELEMETRY_MODES: Record<'agentic' | 'cloud' | 'sdlc', TelemetryMode> = {
  agentic: {
    key: 'agentic',
    label: 'Agentic',
    title: 'AI-Powered Enterprise Solutions Execution',
    desc: 'High-velocity pipeline orchestrating multiple Gemini 1.5 Flash and Pro instances to automate document parsing, governance policy validation, and synthesis.',
    mttr: 'MTTR: < 4.2 Minutes (Auto-Healed)',
    gate: 'Zero-Defect QA Gate Active',
    logs: [
      {
        icon: 'smart_toy',
        colorClass: 'text-secondary',
        text: '[AGENT_INTAKE] 14,290 enterprise records processed • batch latency: 124ms',
      },
      {
        icon: 'psychology',
        colorClass: 'text-primary',
        text: '[GEMINI_REASONING] Multi-model consensus reached (confidence: 99.82%)',
      },
      {
        icon: 'task_alt',
        colorClass: 'text-tertiary',
        text: '[AUTO_EXECUTE] Cloud SQL sovereign ledger committed with zero manual touch',
      },
    ],
  },
  cloud: {
    key: 'cloud',
    label: 'Cloud Scale',
    title: 'Multi-Region GKE Autopilot & BigQuery Mesh',
    desc: 'High-concurrency cluster telemetry auto-scaling across Google Cloud europe-west1 and us-central1 with zero queue contention and 42PB throughput.',
    mttr: 'Availability Index: 99.995%',
    gate: 'Multi-Region Active Sync',
    logs: [
      {
        icon: 'cloud_sync',
        colorClass: 'text-secondary',
        text: '[GKE_AUTOSCALE] Horizontal Pod Autoscaler triggered: scaled 48 -> 112 replicas.',
      },
      {
        icon: 'dataset',
        colorClass: 'text-primary',
        text: '[BIGQUERY_MESH] Partition replication synchronized across europe-west1 & us-central1.',
      },
      {
        icon: 'speed',
        colorClass: 'text-tertiary',
        text: '[IOPS_CHECK] Distributed cluster operating at 1.8M IOPS with zero drop.',
      },
    ],
  },
  sdlc: {
    key: 'sdlc',
    label: 'SDLC Rigor',
    title: 'Cognizant Neuro™ CI/CD Autonomous Verification',
    desc: 'Automated synthetic QA agent suites run 250,000+ deterministic scenario tests prior to production deployments, eliminating regression defects.',
    mttr: 'Defect Escape Rate: 0.00%',
    gate: 'Q1 Excellence Stamp Certified',
    logs: [
      {
        icon: 'terminal',
        colorClass: 'text-tertiary',
        text: '[SYNTHETIC_QA] Cognizant Neuro™ spawned 4,200 adversarial test fixtures.',
      },
      {
        icon: 'security',
        colorClass: 'text-secondary',
        text: '[REGRESSION_ZERO] Zero regression vectors detected. Security policy score: 100%.',
      },
      {
        icon: 'verified',
        colorClass: 'text-primary',
        text: '[AUTO_DEPLOY] Blue-Green cutover complete across 12 high-velocity pods.',
      },
    ],
  },
};

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    stepCode: '01 / INTAKE',
    shortTitle: 'Input Intake',
    shortDesc: 'Multimodal ingestion of telemetry & tickets.',
    fullName: 'Stage 01: Input Intake (Streaming Mesh)',
    fullDesc:
      'Multimodal Ingestion of live incident telemetry, syslog streams, and customer helpdesk tickets into BigQuery vectors.',
    metric: '< 85ms Streaming',
    icon: 'input',
    accentClass: 'text-google-blue',
  },
  {
    id: 2,
    stepCode: '02 / COGNITION',
    shortTitle: 'AI Reasoning',
    shortDesc: 'Gemini 1.5 Pro deep context analysis.',
    fullName: 'Stage 02: AI Reasoning (Cognition)',
    fullDesc:
      'Gemini 1.5 Pro performs contextual root-cause extraction, policy cross-checks, and severity classification with 99.8% precision.',
    metric: 'Self-Reflective CoT',
    icon: 'psychology',
    accentClass: 'text-secondary',
  },
  {
    id: 3,
    stepCode: '03 / ROUTING',
    shortTitle: 'Orchestration',
    shortDesc: 'Dynamic agent task allocation.',
    fullName: 'Stage 03: Orchestration (Task Mesh)',
    fullDesc:
      'Digital Lead Mesh handoff assigns atomic task units to specialized domain micro-agents across Cognizant Neuro™ pipelines.',
    metric: '64 Parallel Workers',
    icon: 'hub',
    accentClass: 'text-primary',
  },
  {
    id: 4,
    stepCode: '04 / DISPATCH',
    shortTitle: 'Execution',
    shortDesc: 'Safe tool execution with policy guardrails.',
    fullName: 'Stage 04: Execution (Safe Sandbox)',
    fullDesc:
      'Safe sandbox runtime dry-run, canary rollout validation, and automated rollback triggers for infrastructure configurations.',
    metric: 'gVisor Isolated',
    icon: 'terminal',
    accentClass: 'text-tertiary',
  },
  {
    id: 5,
    stepCode: '05 / VERIFY',
    shortTitle: 'Resolution',
    shortDesc: 'Closed-loop verification & audit telemetry.',
    fullName: 'Stage 05: Resolution (Audit Verified)',
    fullDesc:
      'Immutable audit logging to Cloud Logging, synthesized client notification dispatch, and automated closure ticket reconciliation.',
    metric: 'Signed Cryptographic',
    icon: 'verified',
    accentClass: 'text-google-green',
  },
];

export const AUTONOMY_TIERS: Record<1 | 2 | 3, AutonomyTier> = {
  1: {
    id: 1,
    tabLabel: 'Tier 1: Assisted',
    badge: 'Tier 1: Assisted (Human-in-the-Loop Operations)',
    sla: 'Requires Manual Operator Approval',
    desc: 'AI drafts recommendations, summarizes syslogs, and suggests probable root causes with interactive prompt checklists for L2 analysts.',
    gov: 'Human Approval Gate Required',
    speed: '~15m Processing Window',
  },
  2: {
    id: 2,
    tabLabel: 'Tier 2: Semi-Autonomous',
    badge: 'Tier 2: Semi-Autonomous (Policy-Gated Flow)',
    sla: '1-Click Human Approval for Live Mutation',
    desc: 'Fine-tuned Gemini models match incidents against approved runbooks with confidence scoring, dry-run canary staging, and request 1-click token validation.',
    gov: 'Dynamic Token Guard Active',
    speed: '< 2.4s Automated Hook',
  },
  3: {
    id: 3,
    tabLabel: 'Tier 3: Autonomous',
    badge: 'Tier 3: Closed-Loop Self-Healing Agent Mesh',
    sla: 'Zero Human Delay SLA Active',
    desc: 'Autonomous multi-agent meshes proactively ingest telemetry, cross-check policies via Gemini 1.5 Pro, dry-run remediation in isolated sandboxes, and commit live self-healing operations without triage drag.',
    gov: 'Deterministic Cloud Guardrails',
    speed: '< 14 Seconds',
  },
};
