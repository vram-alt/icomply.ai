import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactForm from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Shield, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Monitor,
  BarChart3,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown,
  X,
  Eye,
  RefreshCw,
  GitBranch,
  FileText,
  Bot,
  UserCheck,
  TrendingUp,
  DollarSign,
  Clock,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Activity,
  AlertCircle,
  Calendar,
  Target,
  Award,
  Briefcase,
  Settings,
  Database,
  Lock,
  Globe,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';

// TypeScript interfaces
interface AssessmentScope {
  industry: string;
  regions: number;
  frameworks: string[];
  agents: number;
  dataSensitivity: 'Low' | 'Medium' | 'High';
}

interface AssessmentPlan {
  weeks: number;
  team: { consultant: number; sme: number; pm: number };
  backlog: string[];
  pilotSuggestion: string;
}

interface ManagedInput {
  regions: number;
  coverage: '8x5' | '16x5' | '24x7';
  sla: {
    triage: '4h' | '8h' | 'NBD';
    change: '24h' | '48h' | 'custom';
    dsar: '1d' | '3d' | '5d';
    reporting: 'weekly' | 'monthly' | 'quarterly';
  };
}

interface ManagedPlan {
  roster: { hitl: number; grc: number; sse: number; pm: number };
  monthlyEffort: 'Low' | 'Medium' | 'High';
  escalationTree: string[];
  scoreTarget: number;
}

interface ScopeConfig extends AssessmentScope, ManagedInput {
  integrations: string[];
  deadline?: string;
}

interface Estimate {
  timeline: { phase: string; start: string; end: string }[];
  team: { role: string; fte: number }[];
  priceBand: 'Low' | 'Medium' | 'High';
  assumptions: string[];
  nextSteps: string[];
}

// Assessment Planner Component
const AssessmentPlanner = () => {
  const [scope, setScope] = useState<AssessmentScope>({
    industry: '',
    regions: 1,
    frameworks: [],
    agents: 5,
    dataSensitivity: 'Medium'
  });
  const [plan, setPlan] = useState<AssessmentPlan | null>(null);

  const industries = [
    'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 
    'Retail', 'Government', 'Education', 'Energy', 'Other'
  ];

  const frameworks = [
    'GDPR', 'CCPA', 'LGPD', 'EU AI Act', 'ISO/IEC 42001', 
    'ISO 27001', 'NIST', 'SOC 2', 'HIPAA'
  ];

  const generatePlan = () => {
    const baseWeeks = 4;
    const complexityMultiplier = 
      (scope.frameworks.length > 3 ? 1.5 : 1) *
      (scope.regions > 2 ? 1.3 : 1) *
      (scope.dataSensitivity === 'High' ? 1.2 : 1) *
      (scope.agents > 20 ? 1.4 : 1);

    const weeks = Math.ceil(baseWeeks * complexityMultiplier);
    
    const team = {
      consultant: Math.ceil(weeks * 0.6),
      sme: Math.ceil(weeks * 0.4),
      pm: Math.ceil(weeks * 0.3)
    };

    const backlog = [
      'Current state discovery & inventory',
      'Gap analysis vs selected frameworks',
      'Risk assessment & prioritization',
      'Target operating model design',
      'Quick-start workflow templates',
      'Pilot implementation planning'
    ];

    const pilotSuggestion = scope.dataSensitivity === 'High' 
      ? 'Start with high-risk AI agents in controlled environment'
      : 'Begin with customer-facing agents for immediate impact';

    setPlan({ weeks, team, backlog, pilotSuggestion });
  };

  const exportBrief = () => {
    const briefContent = `
ASSESSMENT BRIEF

Industry: ${scope.industry}
Regions: ${scope.regions}
Frameworks: ${scope.frameworks.join(', ')}
AI Agents/Apps: ${scope.agents}
Data Sensitivity: ${scope.dataSensitivity}

ESTIMATED PLAN:
Duration: ${plan?.weeks} weeks
Team: ${plan?.team.consultant} consultant days, ${plan?.team.sme} SME days, ${plan?.team.pm} PM days

PILOT SUGGESTION:
${plan?.pilotSuggestion}

DELIVERABLES:
${plan?.backlog.map(item => `• ${item}`).join('\n')}
    `;

    const blob = new Blob([briefContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'assessment-brief.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Assessment Planner</h3>
        <p className="text-gray-300">Configure your assessment scope and get an instant timeline and team estimate.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Panel */}
        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Scope Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Industry</label>
              <Select value={scope.industry} onValueChange={(value) => setScope({...scope, industry: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Regions: {scope.regions}
              </label>
              <Slider
                value={[scope.regions]}
                onValueChange={([value]) => setScope({...scope, regions: value})}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Frameworks</label>
              <div className="grid grid-cols-2 gap-2">
                {frameworks.map(framework => (
                  <div key={framework} className="flex items-center space-x-2">
                    <Checkbox
                      checked={scope.frameworks.includes(framework)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setScope({...scope, frameworks: [...scope.frameworks, framework]});
                        } else {
                          setScope({...scope, frameworks: scope.frameworks.filter(f => f !== framework)});
                        }
                      }}
                    />
                    <label className="text-sm">{framework}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                AI Agents/Apps: {scope.agents}
              </label>
              <Slider
                value={[scope.agents]}
                onValueChange={([value]) => setScope({...scope, agents: value})}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Data Sensitivity</label>
              <Select value={scope.dataSensitivity} onValueChange={(value: 'Low' | 'Medium' | 'High') => setScope({...scope, dataSensitivity: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={generatePlan}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
              disabled={!scope.industry || scope.frameworks.length === 0}
            >
              Generate Assessment Plan
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        {plan && (
          <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Assessment Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                  <div className="text-2xl font-bold text-[#F47F21]">{plan.weeks}</div>
                  <div className="text-sm text-gray-300">Weeks</div>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {plan.team.consultant + plan.team.sme + plan.team.pm}
                  </div>
                  <div className="text-sm text-gray-300">Total Days</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Team Composition</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Consultant</span>
                    <span>{plan.team.consultant} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SME</span>
                    <span>{plan.team.sme} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PM</span>
                    <span>{plan.team.pm} days</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Key Deliverables</h4>
                <ul className="space-y-1">
                  {plan.backlog.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-blue-500/10 p-4">
                <h4 className="mb-2 font-semibold">Pilot Suggestion</h4>
                <p className="text-sm text-gray-300">{plan.pilotSuggestion}</p>
              </div>

              <Button onClick={exportBrief} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Brief
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// Managed Service Level Composer
const ManagedComposer = () => {
  const [input, setInput] = useState<ManagedInput>({
    regions: 1,
    coverage: '8x5',
    sla: {
      triage: '8h',
      change: '24h',
      dsar: '3d',
      reporting: 'monthly'
    }
  });
  const [plan, setPlan] = useState<ManagedPlan | null>(null);

  const generatePlan = () => {
    const baseRoster = { hitl: 1, grc: 1, sse: 0.5, pm: 0.5 };
    
    const coverageMultiplier = {
      '8x5': 1,
      '16x5': 1.5,
      '24x7': 2.5
    }[input.coverage];

    const slaMultiplier = 
      (input.sla.triage === '4h' ? 1.3 : 1) *
      (input.sla.change === '24h' ? 1.2 : 1) *
      (input.sla.dsar === '1d' ? 1.4 : 1);

    const regionMultiplier = Math.max(1, input.regions * 0.7);

    const roster = {
      hitl: Math.ceil(baseRoster.hitl * coverageMultiplier * regionMultiplier),
      grc: Math.ceil(baseRoster.grc * slaMultiplier * regionMultiplier),
      sse: Math.ceil(baseRoster.sse * coverageMultiplier),
      pm: Math.ceil(baseRoster.pm * regionMultiplier)
    };

    const totalEffort = roster.hitl + roster.grc + roster.sse + roster.pm;
    const monthlyEffort: 'Low' | 'Medium' | 'High' = 
      totalEffort < 3 ? 'Low' : totalEffort < 6 ? 'Medium' : 'High';

    const escalationTree = [
      'L1: HITL Operator',
      'L2: GRC Specialist',
      'L3: Senior Security Engineer',
      'L4: Program Manager',
      'L5: Client Success Director'
    ];

    const scoreTarget = input.sla.triage === '4h' && input.sla.dsar === '1d' ? 95 : 90;

    setPlan({ roster, monthlyEffort, escalationTree, scoreTarget });
  };

  const exportRunbook = () => {
    const runbookContent = `
# MANAGED GOVERNANCE RUNBOOK

## Service Configuration
- Regions: ${input.regions}
- Coverage: ${input.coverage}
- SLA Triage: ${input.sla.triage}
- Change Window: ${input.sla.change}
- DSAR Response: ${input.sla.dsar}
- Reporting: ${input.sla.reporting}

## Team Roster
- HITL Operators: ${plan?.roster.hitl} FTE
- GRC Specialists: ${plan?.roster.grc} FTE
- Security Engineers: ${plan?.roster.sse} FTE
- Program Managers: ${plan?.roster.pm} FTE

## Escalation Tree
${plan?.escalationTree.map((level, i) => `${i + 1}. ${level}`).join('\n')}

## Target Compliance Score: ${plan?.scoreTarget}%

## Standard Operating Procedures
1. Incident Response
2. Change Management
3. DSAR Processing
4. Evidence Collection
5. Reporting & Analytics
    `;

    const blob = new Blob([runbookContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'managed-governance-runbook.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Service Level Composer</h3>
        <p className="text-gray-300">Design your managed governance service with custom SLAs and coverage.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Configuration Panel */}
        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Service Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Regions: {input.regions}
              </label>
              <Slider
                value={[input.regions]}
                onValueChange={([value]) => setInput({...input, regions: value})}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Coverage Hours</label>
              <Select value={input.coverage} onValueChange={(value: '8x5' | '16x5' | '24x7') => setInput({...input, coverage: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8x5">8×5 (Business Hours)</SelectItem>
                  <SelectItem value="16x5">16×5 (Extended Hours)</SelectItem>
                  <SelectItem value="24x7">24×7 (Always On)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Service Level Agreements</h4>
              
              <div>
                <label className="mb-2 block text-sm font-medium">Incident Triage</label>
                <Select value={input.sla.triage} onValueChange={(value: '4h' | '8h' | 'NBD') => setInput({...input, sla: {...input.sla, triage: value}})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4h">4 hours</SelectItem>
                    <SelectItem value="8h">8 hours</SelectItem>
                    <SelectItem value="NBD">Next business day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Change Approval</label>
                <Select value={input.sla.change} onValueChange={(value: '24h' | '48h' | 'custom') => setInput({...input, sla: {...input.sla, change: value}})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">24 hours</SelectItem>
                    <SelectItem value="48h">48 hours</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">DSAR Response</label>
                <Select value={input.sla.dsar} onValueChange={(value: '1d' | '3d' | '5d') => setInput({...input, sla: {...input.sla, dsar: value}})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1d">1 day</SelectItem>
                    <SelectItem value="3d">3 days</SelectItem>
                    <SelectItem value="5d">5 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Reporting Cadence</label>
                <Select value={input.sla.reporting} onValueChange={(value: 'weekly' | 'monthly' | 'quarterly') => setInput({...input, sla: {...input.sla, reporting: value}})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={generatePlan}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
            >
              Generate Service Plan
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        {plan && (
          <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Service Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                  <div className="text-2xl font-bold text-[#F47F21]">{plan.scoreTarget}%</div>
                  <div className="text-sm text-gray-300">Target Score</div>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{plan.monthlyEffort}</div>
                  <div className="text-sm text-gray-300">Monthly Effort</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Team Roster (FTE)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>HITL Operators</span>
                    <span>{plan.roster.hitl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GRC Specialists</span>
                    <span>{plan.roster.grc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Engineers</span>
                    <span>{plan.roster.sse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Program Managers</span>
                    <span>{plan.roster.pm}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Escalation Tree</h4>
                <ul className="space-y-1">
                  {plan.escalationTree.map((level, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F47F21]/20 text-xs">
                        {index + 1}
                      </div>
                      <span className="text-sm">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={exportRunbook} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Generate Runbook Excerpt
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// Evidence Pack Builder
const EvidencePackBuilder = () => {
  const [selectedFramework, setSelectedFramework] = useState('');
  const [selectedControls, setSelectedControls] = useState<string[]>([]);
  const [packManifest, setPackManifest] = useState<any>(null);

  const frameworks = {
    'GDPR': {
      name: 'General Data Protection Regulation',
      controls: [
        'Article 5 - Data Processing Principles',
        'Article 6 - Lawful Basis',
        'Article 7 - Consent',
        'Article 12-14 - Information & Transparency',
        'Article 15-22 - Data Subject Rights',
        'Article 25 - Data Protection by Design',
        'Article 30 - Records of Processing',
        'Article 32 - Security of Processing',
        'Article 33-34 - Breach Notification',
        'Article 35 - DPIA'
      ]
    },
    'ISO 27001': {
      name: 'Information Security Management',
      controls: [
        'A.5 - Information Security Policies',
        'A.6 - Organization of Information Security',
        'A.7 - Human Resource Security',
        'A.8 - Asset Management',
        'A.9 - Access Control',
        'A.10 - Cryptography',
        'A.11 - Physical Security',
        'A.12 - Operations Security',
        'A.13 - Communications Security',
        'A.14 - System Development Security'
      ]
    },
    'SOC 2': {
      name: 'Service Organization Control 2',
      controls: [
        'CC1 - Control Environment',
        'CC2 - Communication & Information',
        'CC3 - Risk Assessment',
        'CC4 - Monitoring Activities',
        'CC5 - Control Activities',
        'CC6 - Logical Access',
        'CC7 - System Operations',
        'CC8 - Change Management',
        'CC9 - Risk Mitigation'
      ]
    },
    'EU AI Act': {
      name: 'European Union AI Act',
      controls: [
        'Article 9 - Risk Management System',
        'Article 10 - Data Governance',
        'Article 11 - Technical Documentation',
        'Article 12 - Record Keeping',
        'Article 13 - Transparency',
        'Article 14 - Human Oversight',
        'Article 15 - Accuracy & Robustness',
        'Article 16 - Cybersecurity',
        'Article 17 - Quality Management'
      ]
    }
  };

  const generateManifest = () => {
    if (!selectedFramework || selectedControls.length === 0) return;

    const manifest = {
      framework: selectedFramework,
      controls: selectedControls.map(control => ({
        id: control,
        evidence: [
          'Policy document',
          'Implementation guide',
          'Control testing results',
          'Remediation plan (if applicable)',
          'Management attestation'
        ],
        status: Math.random() > 0.3 ? 'Complete' : 'In Progress',
        lastUpdated: new Date().toISOString().split('T')[0]
      })),
      summary: {
        totalControls: selectedControls.length,
        completeControls: selectedControls.filter(() => Math.random() > 0.3).length,
        inProgressControls: selectedControls.filter(() => Math.random() <= 0.3).length
      }
    };

    setPackManifest(manifest);
  };

  const createZipMock = () => {
    if (!packManifest) return;

    const zipContent = `
EVIDENCE PACK - ${packManifest.framework}
Generated: ${new Date().toISOString()}

SUMMARY:
- Total Controls: ${packManifest.summary.totalControls}
- Complete: ${packManifest.summary.completeControls}
- In Progress: ${packManifest.summary.inProgressControls}

CONTROL MANIFEST:
${packManifest.controls.map((control: any) => `
${control.id}
Status: ${control.status}
Evidence Files:
${control.evidence.map((e: string) => `  - ${e}`).join('\n')}
`).join('\n')}

NOTE: This is a demo manifest. Actual evidence pack would contain the referenced documents and artifacts.
    `;

    const blob = new Blob([zipContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evidence-pack-${selectedFramework.toLowerCase().replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Evidence Pack Builder</h3>
        <p className="text-gray-300">Select framework and controls to generate an audit evidence pack manifest.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Configuration Panel */}
        <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Framework & Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Framework</label>
              <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                <SelectTrigger>
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(frameworks).map(([key, framework]) => (
                    <SelectItem key={key} value={key}>{framework.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedFramework && (
              <div>
                <label className="mb-2 block text-sm font-medium">Controls</label>
                <div className="max-h-64 space-y-2 overflow-y-auto">
                  {frameworks[selectedFramework as keyof typeof frameworks].controls.map(control => (
                    <div key={control} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedControls.includes(control)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedControls([...selectedControls, control]);
                          } else {
                            setSelectedControls(selectedControls.filter(c => c !== control));
                          }
                        }}
                      />
                      <label className="text-sm">{control}</label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedControls(frameworks[selectedFramework as keyof typeof frameworks].controls)}
                  >
                    Select All
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedControls([])}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            )}

            <Button 
              onClick={generateManifest}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
              disabled={!selectedFramework || selectedControls.length === 0}
            >
              Generate Pack Manifest
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        {packManifest && (
          <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Evidence Pack Manifest</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-blue-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-blue-400">{packManifest.summary.totalControls}</div>
                  <div className="text-xs text-gray-300">Total</div>
                </div>
                <div className="rounded-lg bg-green-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-green-400">{packManifest.summary.completeControls}</div>
                  <div className="text-xs text-gray-300">Complete</div>
                </div>
                <div className="rounded-lg bg-yellow-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-yellow-400">{packManifest.summary.inProgressControls}</div>
                  <div className="text-xs text-gray-300">In Progress</div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Control Status</h4>
                <div className="max-h-48 space-y-2 overflow-y-auto">
                  {packManifest.controls.map((control: any, index: number) => (
                    <div key={index} className="flex items-center justify-between rounded bg-white/5 p-2">
                      <span className="text-sm">{control.id}</span>
                      <Badge variant={control.status === 'Complete' ? 'default' : 'secondary'}>
                        {control.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-blue-500/10 p-4">
                <h4 className="mb-2 font-semibold">Standard Evidence Types</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Policy documents & procedures</li>
                  <li>• Implementation guides & runbooks</li>
                  <li>• Control testing results & screenshots</li>
                  <li>• Remediation plans & timelines</li>
                  <li>• Management attestations & sign-offs</li>
                </ul>
              </div>

              <Button onClick={createZipMock} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Create ZIP Mock
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// Scoping & Pricing Configurator
const ScopingConfigurator = ({ onContactClick }: { onContactClick?: () => void }) => {
  const [activeTab, setActiveTab] = useState('scope');
  const [config, setConfig] = useState<ScopeConfig>({
    industry: '',
    regions: 1,
    frameworks: [],
    agents: 5,
    dataSensitivity: 'Medium',
    coverage: '8x5',
    sla: {
      triage: '8h',
      change: '24h',
      dsar: '3d',
      reporting: 'monthly'
    },
    integrations: [],
    deadline: ''
  });
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const integrations = [
    'Slack', 'Microsoft Teams', 'Jira', 'ServiceNow', 'Salesforce',
    'AWS', 'Azure', 'GCP', 'Okta', 'Active Directory'
  ];

  const generateEstimate = () => {
    const baseWeeks = 8;
    const complexity = 
      (config.frameworks.length > 3 ? 1.4 : 1) *
      (config.regions > 2 ? 1.3 : 1) *
      (config.dataSensitivity === 'High' ? 1.2 : 1) *
      (config.agents > 20 ? 1.3 : 1) *
      (config.integrations.length > 5 ? 1.2 : 1);

    const totalWeeks = Math.ceil(baseWeeks * complexity);

    const timeline = [
      { phase: 'Discovery & Planning', start: 'Week 1', end: 'Week 2' },
      { phase: 'Implementation', start: 'Week 3', end: `Week ${Math.ceil(totalWeeks * 0.7)}` },
      { phase: 'Testing & Validation', start: `Week ${Math.ceil(totalWeeks * 0.7) + 1}`, end: `Week ${totalWeeks - 1}` },
      { phase: 'Go-Live & Handover', start: `Week ${totalWeeks}`, end: `Week ${totalWeeks}` }
    ];

    const team = [
      { role: 'Lead Consultant', fte: 0.8 },
      { role: 'GRC Specialist', fte: 0.6 },
      { role: 'Security Engineer', fte: 0.4 },
      { role: 'Program Manager', fte: 0.3 }
    ];

    const priceBand: 'Low' | 'Medium' | 'High' = 
      complexity < 1.2 ? 'Low' : complexity < 1.6 ? 'Medium' : 'High';

    const assumptions = [
      'Client provides timely access to systems and stakeholders',
      'Existing infrastructure supports integration requirements',
      'Key personnel available for workshops and reviews',
      'Change management process in place for policy updates'
    ];

    const nextSteps = [
      'Schedule discovery workshop',
      'Finalize scope and timeline',
      'Execute statement of work',
      'Begin stakeholder interviews'
    ];

    setEstimate({ timeline, team, priceBand, assumptions, nextSteps });
  };

  const exportSOW = () => {
    if (!estimate) return;

    const sowContent = `
STATEMENT OF WORK - DRAFT

PROJECT SCOPE:
Industry: ${config.industry}
Regions: ${config.regions}
Frameworks: ${config.frameworks.join(', ')}
AI Agents/Apps: ${config.agents}
Data Sensitivity: ${config.dataSensitivity}
Integrations: ${config.integrations.join(', ')}

TIMELINE:
${estimate.timeline.map(phase => `${phase.phase}: ${phase.start} - ${phase.end}`).join('\n')}

TEAM COMPOSITION:
${estimate.team.map(member => `${member.role}: ${member.fte} FTE`).join('\n')}

PRICE BAND: ${estimate.priceBand}

ASSUMPTIONS:
${estimate.assumptions.map(assumption => `• ${assumption}`).join('\n')}

NEXT STEPS:
${estimate.nextSteps.map(step => `• ${step}`).join('\n')}

NOTE: This is a preliminary estimate. Final scope and pricing subject to discovery workshop.
    `;

    const blob = new Blob([sowContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'draft-sow.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Scoping & Pricing</h3>
        <p className="text-gray-300">Estimate timeline, team, and price band in minutes — then book a workshop.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Configuration Panel */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scope">Scope</TabsTrigger>
              <TabsTrigger value="operating">Operating Model</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="scope" className="space-y-6">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>Project Scope</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Industry</label>
                      <Select value={config.industry} onValueChange={(value) => setConfig({...config, industry: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Financial Services">Financial Services</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Data Sensitivity</label>
                      <Select value={config.dataSensitivity} onValueChange={(value: 'Low' | 'Medium' | 'High') => setConfig({...config, dataSensitivity: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Regions: {config.regions}
                    </label>
                    <Slider
                      value={[config.regions]}
                      onValueChange={([value]) => setConfig({...config, regions: value})}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      AI Agents/Apps: {config.agents}
                    </label>
                    <Slider
                      value={[config.agents]}
                      onValueChange={([value]) => setConfig({...config, agents: value})}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Frameworks</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['GDPR', 'CCPA', 'EU AI Act', 'ISO 27001', 'SOC 2', 'NIST'].map(framework => (
                        <div key={framework} className="flex items-center space-x-2">
                          <Checkbox
                            checked={config.frameworks.includes(framework)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setConfig({...config, frameworks: [...config.frameworks, framework]});
                              } else {
                                setConfig({...config, frameworks: config.frameworks.filter(f => f !== framework)});
                              }
                            }}
                          />
                          <label className="text-sm">{framework}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Integrations</label>
                    <div className="grid grid-cols-2 gap-2">
                      {integrations.slice(0, 6).map(integration => (
                        <div key={integration} className="flex items-center space-x-2">
                          <Checkbox
                            checked={config.integrations.includes(integration)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setConfig({...config, integrations: [...config.integrations, integration]});
                              } else {
                                setConfig({...config, integrations: config.integrations.filter(i => i !== integration)});
                              }
                            }}
                          />
                          <label className="text-sm">{integration}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="operating" className="space-y-6">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>Operating Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Coverage Hours</label>
                    <Select value={config.coverage} onValueChange={(value: '8x5' | '16x5' | '24x7') => setConfig({...config, coverage: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8x5">8×5 (Business Hours)</SelectItem>
                        <SelectItem value="16x5">16×5 (Extended Hours)</SelectItem>
                        <SelectItem value="24x7">24×7 (Always On)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Incident Triage</label>
                      <Select value={config.sla.triage} onValueChange={(value: '4h' | '8h' | 'NBD') => setConfig({...config, sla: {...config.sla, triage: value}})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4h">4 hours</SelectItem>
                          <SelectItem value="8h">8 hours</SelectItem>
                          <SelectItem value="NBD">Next business day</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">DSAR Response</label>
                      <Select value={config.sla.dsar} onValueChange={(value: '1d' | '3d' | '5d') => setConfig({...config, sla: {...config.sla, dsar: value}})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1d">1 day</SelectItem>
                          <SelectItem value="3d">3 days</SelectItem>
                          <SelectItem value="5d">5 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Reporting Cadence</label>
                    <Select value={config.sla.reporting} onValueChange={(value: 'weekly' | 'monthly' | 'quarterly') => setConfig({...config, sla: {...config.sla, reporting: value}})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>Timeline & Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Target Start Date</label>
                    <Input
                      type="date"
                      value={config.deadline || ''}
                      onChange={(e) => setConfig({...config, deadline: e.target.value})}
                    />
                  </div>

                  <div className="rounded-lg bg-blue-500/10 p-4">
                    <h4 className="mb-2 font-semibold">Typical Project Phases</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Discovery & Planning (2 weeks)</li>
                      <li>• Implementation (4-8 weeks)</li>
                      <li>• Testing & Validation (1-2 weeks)</li>
                      <li>• Go-Live & Handover (1 week)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button 
              onClick={generateEstimate}
              className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
              disabled={!config.industry || config.frameworks.length === 0}
            >
              Generate Estimate
            </Button>
          </div>
        </div>

        {/* Results Panel */}
        <div>
          {estimate && (
            <Card className="sticky top-6 border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle>Project Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                  <div className="text-2xl font-bold text-[#F47F21]">{estimate.priceBand}</div>
                  <div className="text-sm text-gray-300">Price Band</div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Timeline</h4>
                  <div className="space-y-2">
                    {estimate.timeline.map((phase, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{phase.phase}</span>
                        <span className="text-gray-400">{phase.start} - {phase.end}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Team & Hours</h4>
                  <div className="space-y-2">
                    {estimate.team.map((member, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{member.role}</span>
                        <span>{member.fte} FTE</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Key Assumptions</h4>
                  <ul className="space-y-1 text-sm">
                    {estimate.assumptions.slice(0, 3).map((assumption, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                        <span>{assumption}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={onContactClick}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us for Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Services Component
const Services = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    serviceInterest: [] as string[]
  });

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'managed', label: 'Managed Governance' },
    { id: 'audit', label: 'Audit Readiness' },
    { id: 'scoping', label: 'Scoping & Pricing' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Local Navigation */}
      <div className="sticky top-0 z-40 border-b border-white/5 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-[#F47F21] border-b-2 border-[#F47F21]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="relative overflow-hidden pb-16 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
        <div className="container relative mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                Expert hands for your{' '}
                <span className="bg-gradient-to-r from-[#F47F21] to-[#FF6B35] bg-clip-text text-transparent">
                  AI, privacy & security
                </span>{' '}
                programs.
              </h1>
              
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                From first assessment to continuous governance, our team brings frameworks, workflows, 
                and humans-in-the-loop to keep you compliant and confident.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                  Advisory & Architecture
                </Badge>
                <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                  Managed Governance
                </Badge>
                <Badge variant="secondary" className="border-[#F47F21]/20 bg-[#F47F21]/10 text-[#F47F21]">
                  Audit Readiness
                </Badge>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#F47F21] px-8 py-4 text-lg font-semibold text-white hover:bg-[#F47F21]/90"
                onClick={() => setShowContactForm(true)}
              >
                Talk to an expert
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#F47F21] px-8 py-4 text-lg font-semibold text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
                onClick={() => setActiveSection('scoping')}
              >
                Scope my project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-[#0F172A]/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <Zap className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Speed</h3>
              <p className="text-gray-300">Weeks to first results, not months.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <Shield className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Assurance</h3>
              <p className="text-gray-300">Evidence, SLAs, and audit-ready artifacts.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                <RefreshCw className="h-8 w-8 text-[#F47F21]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Continuity</h3>
              <p className="text-gray-300">Operating model + change control that sticks.</p>
            </motion.div>
          </div>

          {/* Stats Strip */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">&gt;95%</div>
                <div className="text-sm text-gray-400">DSAR SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">&gt;90%</div>
                <div className="text-sm text-gray-400">Control Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#F47F21]">Weeks</div>
                <div className="text-sm text-gray-400">First Audit Pack</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Service */}
      <section id="assessment" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Assessment (Advisory & Architecture)</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              A structured, 4–6 week engagement to map your current state, gaps, and an executable roadmap.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Who:</strong> Privacy/GRC leaders, AI/Platform owners, Legal, Data/IT.
            </p>
          </motion.div>

          {/* Deliverables */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Current-state inventory (agents/apps/dataflows/vendors)',
              'Gap analysis vs chosen frameworks (GDPR/CCPA/LGPD, EU AI Act, ISO/IEC 42001, ISO 27001/NIST)',
              'Risk register + prioritized remediation plan',
              'Target operating model (roles, RACI, cadence)',
              'Quick-start workflows (assessments, DSAR, breaches, change control)'
            ].map((deliverable, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <CheckCircle className="mb-3 h-6 w-6 text-green-400" />
                  <p className="text-sm">{deliverable}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-2xl font-bold">Typical Timeline</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { phase: 'Week 1', activity: 'Discover' },
                { phase: 'Week 2-3', activity: 'Assess' },
                { phase: 'Week 4', activity: 'Plan' },
                { phase: 'Week 5-6', activity: 'Pilot' }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="rounded-lg bg-[#F47F21]/10 p-4 text-center">
                    <div className="font-bold text-[#F47F21]">{item.phase}</div>
                    <div className="text-sm text-gray-300">{item.activity}</div>
                  </div>
                  {index < 3 && <ArrowRight className="mx-2 h-6 w-6 text-gray-400" />}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Assessment Planner */}
          <AssessmentPlanner />
        </div>
      </section>

      {/* Managed Governance Service */}
      <section id="managed" className="bg-[#0F172A]/30 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Managed Governance</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              A joint team (automations + humans) operating your AI & compliance controls 24/7.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Who:</strong> Organizations scaling agents/systems across units or regions.
            </p>
          </motion.div>

          {/* What We Run */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: 'Policies & Guardrails', desc: 'AppsBee with HITL queues' },
              { icon: GitBranch, title: 'Change Management', desc: 'Models/prompts/tools with approvals & canaries' },
              { icon: Monitor, title: 'Observability', desc: 'Latency/cost/usage + cost controls' },
              { icon: FileText, title: 'Privacy Ops', desc: 'DSAR, consent, RoPA & breach workflows (iComply)' },
              { icon: Award, title: 'Evidence Capture', desc: 'Monthly compliance score and audit packs' }
            ].map((item, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <item.icon className="mb-3 h-8 w-8 text-[#F47F21]" />
                  <h4 className="mb-2 font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Service Level Composer */}
          <ManagedComposer />
        </div>
      </section>

      {/* Audit Readiness Service */}
      <section id="audit" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Audit Readiness</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Prepare, package, and pass audits with confidence.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Who:</strong> Teams facing regulator reviews, customer security questionnaires, or cert audits.
            </p>
          </motion.div>

          {/* Deliverables */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Evidence collection & gap closure plan',
              'Control testing snapshots',
              'Auditor/assessor coordination',
              'Reporting: executive pack + detailed workpapers',
              'Trust center publishing (optional)'
            ].map((deliverable, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <Award className="mb-3 h-6 w-6 text-[#F47F21]" />
                  <p className="text-sm">{deliverable}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Evidence Pack Builder */}
          <EvidencePackBuilder />
        </div>
      </section>

      {/* Cross-Product Value */}
      <section className="bg-[#0F172A]/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold">Complete Governance Loop</h3>
            <div className="mb-6 flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47F21]/10">
                  <Bot className="h-8 w-8 text-[#F47F21]" />
                </div>
                <div className="font-bold">AppsBee</div>
                <div className="text-sm text-gray-400">Enforces</div>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <div className="font-bold">iComply</div>
                <div className="text-sm text-gray-400">Proves</div>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <Database className="h-8 w-8 text-green-400" />
                </div>
                <div className="font-bold">Your Stack</div>
                <div className="text-sm text-gray-400">Integrates</div>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              AppsBee enforces guardrails and change control; iComply proves it with assessments, records, and reports. 
              Adopt either — or both for a closed loop.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="outline" className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white">
                Explore AppsBee
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Explore iComply
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scoping & Pricing */}
      <section id="scoping" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ScopingConfigurator onContactClick={() => setContactModalOpen(true)} />
        </div>
      </section>

      {/* Proof & Results */}
      <section className="bg-[#0F172A]/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="mb-12 text-center text-3xl font-bold">Results you can take to the board.</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: 'Days', desc: 'Audit prep in days, not weeks.' },
              { metric: '>95%', desc: 'On-time DSAR SLA' },
              { metric: 'Lower Risk', desc: 'Change risk with canary & approvals' },
              { metric: 'One Pane', desc: 'Privacy, Legal, Security & Business' }
            ].map((item, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 text-center backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="mb-2 text-2xl font-bold text-[#F47F21]">{item.metric}</div>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              See a sample report
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h3>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: 'Do you operate on our tenant?',
                a: 'Yes, with least-privilege access & change control.'
              },
              {
                q: 'Can we start with a pilot?',
                a: 'Yes; most start with one domain/region.'
              },
              {
                q: 'What if we already have GRC tools?',
                a: 'We integrate and focus on execution & evidence.'
              },
              {
                q: 'Where do you offer coverage?',
                a: 'AMER/EMEA/APAC; 8×5 to 24×7.'
              },
              {
                q: 'How is data handled?',
                a: 'Data-minimized engagement; evidence stays in your systems unless agreed.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
                <CardContent className="p-6">
                  <h4 className="mb-2 font-bold">{faq.q}</h4>
                  <p className="text-gray-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Block */}
      <section className="bg-[#0F172A]/30 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold">Talk to an expert</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Personalized agenda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Readiness review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Timeline & next steps</span>
                </li>
              </ul>
            </div>
            <ContactForm/>

            {/* <Card className="border-white/10 bg-[#0F172A]/50 backdrop-blur-md">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Role"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium">Service Interest</label>
                    <div className="space-y-2">
                      {['Assessment', 'Managed Governance', 'Audit Readiness'].map(service => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            checked={formData.serviceInterest.includes(service)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({...formData, serviceInterest: [...formData.serviceInterest, service]});
                              } else {
                                setFormData({...formData, serviceInterest: formData.serviceInterest.filter(s => s !== service)});
                              }
                            }}
                          />
                          <label className="text-sm">{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    placeholder="Tell us about your current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />

                  <Button 
                    type="button" 
                    className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Contact Us
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="border-white/10 bg-[#0F172A]">
          <DialogHeader>
            <DialogTitle>Talk to an Expert</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                required
              />
              <Input
                placeholder="Role"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                required
              />
            </div>
            <Textarea
              placeholder="Tell us about your current challenges..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={3}
            />
            <Button type="submit" className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90">
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="advisory"
      />
    </div>
  );
};

export default Services;
