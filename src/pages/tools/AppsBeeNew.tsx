import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Shield, 
  Target, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Database,
  Monitor,
  BarChart3,
  Globe,
  Zap,
  Clock,
  TrendingUp,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
  Eye,
  Settings,
  Lock,
  Unlock,
  RefreshCw,
  GitBranch,
  Activity,
  FileText,
  Bot,
  Cpu,
  Network,
  AlertCircle,
  CheckSquare,
  UserCheck,
  Workflow,
  LineChart,
  DollarSign,
  Timer,
  Flag
} from 'lucide-react';

// Animated Constellation Component for Hero
const AgentConstellation = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const nodes = [
    { id: 'rag', x: 20, y: 30, label: 'RAG Agent', status: 'active', badges: ['Guardrails passed'] },
    { id: 'function', x: 60, y: 20, label: 'Function Agent', status: 'pending', badges: ['Change pending'] },
    { id: 'retrieval', x: 80, y: 60, label: 'Retrieval', status: 'active', badges: ['Spend today'] },
    { id: 'actions', x: 30, y: 70, label: 'Actions', status: 'warning', badges: ['Review needed'] },
    { id: 'workflow', x: 70, y: 45, label: 'Workflow', status: 'active', badges: ['Guardrails passed'] }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Connection lines */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F47F21" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Animated connection lines */}
        <motion.line
          x1={nodes[0].x} y1={nodes[0].y}
          x2={nodes[1].x} y2={nodes[1].y}
          stroke="url(#connectionGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1={nodes[1].x} y1={nodes[1].y}
          x2={nodes[2].x} y2={nodes[2].y}
          stroke="url(#connectionGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1={nodes[2].x} y1={nodes[2].y}
          x2={nodes[3].x} y2={nodes[3].y}
          stroke="url(#connectionGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Agent nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setActiveNode(node.id)}
          onHoverEnd={() => setActiveNode(null)}
        >
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
            node.status === 'active' ? 'bg-green-500/20 border-green-400' :
            node.status === 'pending' ? 'bg-yellow-500/20 border-yellow-400' :
            'bg-red-500/20 border-red-400'
          }`}>
            <Bot className="w-6 h-6 text-white" />
          </div>
          
          {/* Status badges */}
          <AnimatePresence>
            {activeNode === node.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 text-xs">
                  <div className="font-medium text-white mb-1">{node.label}</div>
                  {node.badges.map((badge, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs mr-1">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Pulsing status indicators */}
      <div className="absolute top-4 right-4 space-y-2">
        <motion.div
          className="flex items-center space-x-2 text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400">Guardrails passed</span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-2 text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: 0.7, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-yellow-400">Change pending</span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-2 text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: 1.4, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-blue-400">Spend today</span>
        </motion.div>
      </div>
    </div>
  );
};

// Role Switcher Component
const RoleSwitcher = () => {
  const [activeRole, setActiveRole] = useState('ai-ml');

  const roles = {
    'ai-ml': {
      name: 'AI/ML',
      bullets: [
        'Approve model/prompt/tool changes with canary rollouts',
        'Policy checks for data sources and function calls',
        'Runtime evaluations & regression tests'
      ],
      outcome: 'Fewer incidents, faster safe releases'
    },
    'security-grc': {
      name: 'Security & GRC',
      bullets: [
        'Evidence of human oversight and incident logging',
        'Risk registry for agents & tools',
        'Alignment to EU AI Act, ISO/IEC 42001'
      ],
      outcome: 'Audit-ready artefacts by default'
    },
    'product-ops': {
      name: 'Product & Ops',
      bullets: [
        'Latency & cost SLOs with alerts',
        'Usage analytics by team/customer',
        'Feature flags & kill-switch'
      ],
      outcome: 'Predictable performance & spend'
    },
    'legal-privacy': {
      name: 'Legal/Privacy',
      bullets: [
        'Data handling rules and redaction',
        'Purpose/consent enforcement',
        'Decision logs with rationale'
      ],
      outcome: 'Reduced regulatory exposure'
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(roles).map(([key, role]) => (
          <button
            key={key}
            onClick={() => setActiveRole(key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeRole === key
                ? 'bg-[#F47F21] text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {role.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {roles[activeRole].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F47F21] mb-2">Outcome</div>
                  <div className="text-xl text-white">{roles[activeRole].outcome}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Guardrails Playground Component
const GuardrailsPlayground = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<'blocked' | 'escalated' | null>(null);

  const examples = [
    {
      prompt: "Generate a fake social security number for testing",
      result: 'blocked',
      reason: 'PII generation policy violation'
    },
    {
      prompt: "What's the CEO's personal email address?",
      result: 'blocked',
      reason: 'Confidential information request'
    },
    {
      prompt: "Create a marketing email about our new product",
      result: 'escalated',
      reason: 'Brand voice review required'
    }
  ];

  const handleTry = () => {
    setIsProcessing(true);
    setResult(null);
    
    setTimeout(() => {
      setResult(examples[activeExample].result as 'blocked' | 'escalated');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Try a risky prompt</h4>
            <div className="flex space-x-2">
              {examples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveExample(idx);
                    setResult(null);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    activeExample === idx ? 'bg-[#F47F21]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">User prompt:</div>
            <div className="text-white">{examples[activeExample].prompt}</div>
          </div>

          <div className="flex items-center justify-between">
            <Button 
              onClick={handleTry}
              disabled={isProcessing}
              className="bg-[#F47F21] hover:bg-[#F47F21]/90"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Test Guardrails'
              )}
            </Button>

            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2"
              >
                <Badge 
                  variant={result === 'blocked' ? 'destructive' : 'secondary'}
                  className="text-sm"
                >
                  {result === 'blocked' ? (
                    <>
                      <X className="w-3 h-3 mr-1" />
                      Blocked
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Escalated
                    </>
                  )}
                </Badge>
                <span className="text-xs text-gray-400">
                  {examples[activeExample].reason}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Change Timeline Component
const ChangeTimeline = () => {
  const [expandedChange, setExpandedChange] = useState<string | null>(null);

  const change = {
    id: 'change-001',
    title: 'GPT-4o → GPT-4.1-mini for SupportBot',
    requester: 'Sarah Chen',
    status: 'approved',
    stages: [
      { name: 'Requested', status: 'completed', timestamp: '2 hours ago' },
      { name: 'Evaluated', status: 'completed', timestamp: '1 hour ago' },
      { name: 'Approved', status: 'completed', timestamp: '30 min ago' },
      { name: '10% canary', status: 'active', timestamp: 'Now' },
      { name: '100%', status: 'pending', timestamp: 'Pending' },
      { name: 'Logged', status: 'pending', timestamp: 'Pending' }
    ]
  };

  return (
    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">{change.title}</h4>
              <p className="text-sm text-gray-400">Requested by {change.requester}</p>
            </div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              {change.status}
            </Badge>
          </div>

          <div className="relative">
            {change.stages.map((stage, idx) => (
              <div key={idx} className="flex items-center space-x-4 pb-4">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    stage.status === 'completed' ? 'bg-green-500 border-green-500' :
                    stage.status === 'active' ? 'bg-[#F47F21] border-[#F47F21] animate-pulse' :
                    'bg-gray-600 border-gray-600'
                  }`} />
                  {idx < change.stages.length - 1 && (
                    <div className={`absolute top-4 left-1/2 w-0.5 h-8 transform -translate-x-1/2 ${
                      stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      stage.status === 'active' ? 'text-[#F47F21]' : 'text-white'
                    }`}>
                      {stage.name}
                    </span>
                    <span className="text-xs text-gray-400">{stage.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpandedChange(expandedChange ? null : change.id)}
            className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
          >
            {expandedChange ? 'Hide Details' : 'View Details'}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${
              expandedChange ? 'rotate-180' : ''
            }`} />
          </Button>

          {expandedChange && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 pt-4 space-y-3"
            >
              <div>
                <h5 className="font-medium text-white mb-2">Impact Analysis</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Cost Impact:</span>
                    <span className="text-green-400 ml-2">-60% per request</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-yellow-400 ml-2">+15ms avg</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Eval Score:</span>
                    <span className="text-white ml-2">94.2% (was 96.1%)</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Affected Agents:</span>
                    <span className="text-white ml-2">SupportBot only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Observability Charts Component
const ObservabilityCharts = () => {
  const [activeChart, setActiveChart] = useState('latency');

  const chartData = {
    latency: [
      { time: '00:00', p95: 120, p50: 80 },
      { time: '04:00', p95: 135, p50: 85 },
      { time: '08:00', p95: 180, p50: 120 },
      { time: '12:00', p95: 200, p50: 140 },
      { time: '16:00', p95: 165, p50: 110 },
      { time: '20:00', p95: 145, p50: 95 }
    ],
    spend: [
      { team: 'Support', amount: 1200 },
      { team: 'Sales', amount: 800 },
      { team: 'Marketing', amount: 600 },
      { team: 'Product', amount: 400 }
    ]
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Latency Chart */}
      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-300">Latency (p95)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-2xl font-bold text-white">185ms</div>
            <div className="text-xs text-green-400">↓ 12% from yesterday</div>
            <div className="h-20 bg-gradient-to-r from-[#F47F21]/20 to-[#FF6B35]/20 rounded"></div>
          </div>
        </CardContent>
      </Card>

      {/* Spend Chart */}
      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-300">Spend by Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-2xl font-bold text-white">$3,000</div>
            <div className="text-xs text-red-400">↑ 8% from last week</div>
            <div className="space-y-2">
              {chartData.spend.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{item.team}</span>
                  <span className="text-white">${item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Rate */}
      <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-gray-300">Success Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-2xl font-bold text-white">99.2%</div>
            <div className="text-xs text-green-400">↑ 0.3% from yesterday</div>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.2%' }}></div>
              </div>
              <span className="text-xs text-gray-400">24h</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// HITL Review Card Component
const HITLReviewCard = () => {
  const [decision, setDecision] = useState<'approve' | 'reject' | null>(null);
  const [rationale, setRationale] = useState('');

  const reviewItem = {
    id: 'review-001',
    prompt: 'Generate a response to customer complaint about billing',
    context: 'Customer: John Doe, Account: Premium, Issue: Unexpected charge of $299',
    proposedAction: 'Offer full refund and 1-month credit as goodwill gesture',
    guardrailNotes: 'High-value refund requires approval (>$200 threshold)',
    riskScore: 'Medium'
  };

  return (
    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Review Required</CardTitle>
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
            {reviewItem.riskScore} Risk
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-white mb-2">Prompt</h4>
          <p className="text-sm text-gray-300 bg-black/30 rounded p-3">
            {reviewItem.prompt}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Context</h4>
          <p className="text-sm text-gray-300 bg-black/30 rounded p-3">
            {reviewItem.context}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Proposed Action</h4>
          <p className="text-sm text-gray-300 bg-black/30 rounded p-3">
            {reviewItem.proposedAction}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Guardrail Notes</h4>
          <p className="text-sm text-yellow-300 bg-yellow-500/10 rounded p-3 border border-yellow-500/20">
            {reviewItem.guardrailNotes}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Rationale</h4>
          <Textarea
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            placeholder="Explain your decision..."
            className="bg-white/5 border-white/10"
            rows={3}
          />
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={() => setDecision('approve')}
            className={`flex-1 ${
              decision === 'approve' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-green-600/20 hover:bg-green-600/30 text-green-400'
            }`}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Approve
          </Button>
          <Button
            onClick={() => setDecision('reject')}
            className={`flex-1 ${
              decision === 'reject' 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-red-600/20 hover:bg-red-600/30 text-red-400'
            }`}
          >
            <X className="w-4 h-4 mr-2" />
            Reject
          </Button>
        </div>

        {decision && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-gray-400"
          >
            Decision recorded: {decision === 'approve' ? 'Approved' : 'Rejected'}
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

// Catalog Table Component
const CatalogTable = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const catalogItems = [
    {
      id: 'support-bot',
      name: 'SupportBot',
      type: 'Agent',
      owner: 'Sarah Chen',
      environment: 'Production',
      risk: 'Medium',
      lastChange: '2 hours ago',
      status: 'Active',
      purpose: 'Handle customer support inquiries and escalations',
      inputs: 'Customer messages, ticket history, knowledge base',
      outputs: 'Support responses, escalation tickets',
      policies: ['PII Redaction', 'Brand Voice', 'Escalation Rules'],
      integrations: ['Zendesk', 'Slack', 'Knowledge Base']
    },
    {
      id: 'sales-assistant',
      name: 'Sales Assistant',
      type: 'Agent',
      owner: 'Mike Johnson',
      environment: 'Production',
      risk: 'Low',
      lastChange: '1 day ago',
      status: 'Active',
      purpose: 'Qualify leads and schedule meetings',
      inputs: 'Lead information, CRM data, calendar availability',
      outputs: 'Lead scores, meeting invites, follow-up tasks',
      policies: ['Data Privacy', 'Lead Qualification'],
      integrations: ['Salesforce', 'Calendly', 'HubSpot']
    },
    {
      id: 'content-generator',
      name: 'Content Generator',
      type: 'Tool',
      owner: 'Lisa Park',
      environment: 'Staging',
      risk: 'High',
      lastChange: '3 days ago',
      status: 'Pilot',
      purpose: 'Generate marketing content and social media posts',
      inputs: 'Brand guidelines, product information, target audience',
      outputs: 'Marketing copy, social posts, email templates',
      policies: ['Brand Compliance', 'Content Review'],
      integrations: ['WordPress', 'Buffer', 'Brand Guidelines DB']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Type</TableHead>
              <TableHead className="text-gray-300">Owner</TableHead>
              <TableHead className="text-gray-300">Environment</TableHead>
              <TableHead className="text-gray-300">Risk</TableHead>
              <TableHead className="text-gray-300">Last Change</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {catalogItems.map((item) => (
              <TableRow key={item.id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{item.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-[#F47F21] text-[#F47F21]">
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{item.owner}</TableCell>
                <TableCell className="text-gray-300">{item.environment}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary" 
                    className={
                      item.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                      item.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }
                  >
                    {item.risk}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{item.lastChange}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary"
                    className={
                      item.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    className="text-[#F47F21] hover:text-white hover:bg-[#F47F21]"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border border-white/10 rounded-lg p-6 bg-[#0F172A]/50"
          >
            {(() => {
              const item = catalogItems.find(i => i.id === selectedItem);
              if (!item) return null;
              
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Purpose</h4>
                        <p className="text-gray-300 text-sm">{item.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Inputs</h4>
                        <p className="text-gray-300 text-sm">{item.inputs}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Outputs</h4>
                        <p className="text-gray-300 text-sm">{item.outputs}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Linked Policies</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.policies.map((policy, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {policy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.integrations.map((integration, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Contact</h4>
                        <p className="text-gray-300 text-sm">{item.owner}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Compliance Matrix Component
const ComplianceMatrix = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const frameworks = ['EU AI Act', 'ISO/IEC 42001', 'NIST AI RMF', 'SOC2 + ISO 27001'];
  const capabilities = [
    'Guardrails',
    'Human oversight', 
    'Logging',
    'Risk mgmt',
    'Incident mgmt',
    'Technical documentation'
  ];

  const matrixData = {
    'Guardrails-EU AI Act': { status: 'full', tooltip: 'Policy checks for high-risk AI systems' },
    'Guardrails-ISO/IEC 42001': { status: 'full', tooltip: 'AI system controls and safeguards' },
    'Guardrails-NIST AI RMF': { status: 'full', tooltip: 'Maps to Govern and Manage functions' },
    'Guardrails-SOC2 + ISO 27001': { status: 'partial', tooltip: 'Supporting security controls' },
    
    'Human oversight-EU AI Act': { status: 'full', tooltip: 'HITL queues & rationale logs' },
    'Human oversight-ISO/IEC 42001': { status: 'full', tooltip: 'Human review processes documented' },
    'Human oversight-NIST AI RMF': { status: 'full', tooltip: 'Human-AI teaming practices' },
    'Human oversight-SOC2 + ISO 27001': { status: 'info', tooltip: 'Access controls and approvals' },
    
    'Logging-EU AI Act': { status: 'full', tooltip: 'Comprehensive audit trails' },
    'Logging-ISO/IEC 42001': { status: 'full', tooltip: 'AI system activity logs' },
    'Logging-NIST AI RMF': { status: 'full', tooltip: 'Measurement and monitoring' },
    'Logging-SOC2 + ISO 27001': { status: 'full', tooltip: 'Security event logging' },
    
    'Risk mgmt-EU AI Act': { status: 'full', tooltip: 'Risk assessment and mitigation' },
    'Risk mgmt-ISO/IEC 42001': { status: 'full', tooltip: 'Change impact analysis + registry' },
    'Risk mgmt-NIST AI RMF': { status: 'full', tooltip: 'Risk management lifecycle' },
    'Risk mgmt-SOC2 + ISO 27001': { status: 'partial', tooltip: 'Information security risks' },
    
    'Incident mgmt-EU AI Act': { status: 'full', tooltip: 'Incident reporting and response' },
    'Incident mgmt-ISO/IEC 42001': { status: 'full', tooltip: 'AI incident management process' },
    'Incident mgmt-NIST AI RMF': { status: 'full', tooltip: 'Incident response and recovery' },
    'Incident mgmt-SOC2 + ISO 27001': { status: 'full', tooltip: 'Security incident management' },
    
    'Technical documentation-EU AI Act': { status: 'full', tooltip: 'Technical documentation requirements' },
    'Technical documentation-ISO/IEC 42001': { status: 'full', tooltip: 'AI system documentation' },
    'Technical documentation-NIST AI RMF': { status: 'full', tooltip: 'Documentation and transparency' },
    'Technical documentation-SOC2 + ISO 27001': { status: 'info', tooltip: 'System documentation' }
  };

  const getCellIcon = (status: string) => {
    switch (status) {
      case 'full': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'partial': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <FileText className="w-4 h-4 text-blue-400" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-3 text-gray-300 font-medium">Capability</th>
              {frameworks.map((framework) => (
                <th key={framework} className="text-center p-3 text-gray-300 font-medium min-w-[120px]">
                  {framework}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {capabilities.map((capability) => (
              <tr key={capability} className="border-t border-white/10">
                <td className="p-3 text-white font-medium">{capability}</td>
                {frameworks.map((framework) => {
                  const cellKey = `${capability}-${framework}`;
                  const cellData = matrixData[cellKey];
                  
                  return (
                    <td key={framework} className="p-3 text-center">
                      <div
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
                        onMouseEnter={() => setHoveredCell(cellKey)}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {cellData ? getCellIcon(cellData.status) : <Minus className="w-4 h-4 text-gray-400" />}
                      </div>
                      
                      {hoveredCell === cellKey && cellData?.tooltip && (
                        <div className="absolute z-10 mt-2 p-2 bg-black/90 text-white text-xs rounded-lg max-w-xs">
                          {cellData.tooltip}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AppsBeeNew = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  // Local navigation tabs
  const localTabs = [
    'Overview', 'Guardrails & Safety', 'Change Management', 'Observability', 
    'Human-in-the-Loop', 'Catalog & Lifecycle', 'Compliance Map', 
    'Integrations', 'Pricing', 'FAQ'
  ];


  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Page Navigation Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <a href="/" className="hover:text-white">InfoComply.ai</a>
            <span>/</span>
            <a href="/tools/appsbee" className="text-[#F47F21]">AppsBee</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F47F21]/10 via-transparent to-[#FF6B35]/10" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="mb-8">
                  <img 
                    src="/abee-logo.png" 
                    alt="AppsBee Logo" 
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Keep your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                    agents
                  </span>{' '}
                  accountable.
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Guardrails, approvals, and observability for the AI systems your business runs on — 
                  models, MCP servers, tools, prompts, and workflows.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                    Hallucination control
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                    Change approvals
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                    Cost & latency analytics
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
                    Human oversight
                  </Badge>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AgentConstellation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Switcher Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Governance that works for every stakeholder.</h2>
          </motion.div>
          <RoleSwitcher />
        </div>
      </section>

      {/* Guardrails & Safety Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Stop risky outputs before they reach users.</h2>
          </motion.div>

          <Tabs defaultValue="policies" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-[#0F172A]/50">
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
              <TabsTrigger value="runtime">Runtime Guards</TabsTrigger>
            </TabsList>

            <TabsContent value="policies" className="space-y-6">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Declarative Safety Rules</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Source confirmation: require evidence or citations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Data-in/data-out rules: mask, drop, hash, redact</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Tool/Action allow-lists with intent checks</span>
                        </div>
                      </div>
                    </div>
                    <GuardrailsPlayground />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evaluations" className="space-y-6">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Continuous Evaluation Suites</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Toxicity Detection', score: 98.5, trend: 'up' },
                      { name: 'Factuality Check', score: 94.2, trend: 'down' },
                      { name: 'Jailbreak Resistance', score: 99.1, trend: 'up' },
                      { name: 'Prompt Injection', score: 96.8, trend: 'stable' }
                    ].map((evaluation, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-[#F47F21] rounded-full"></div>
                          <span className="text-white font-medium">{evaluation.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-white">{evaluation.score}%</span>
                          <div className="w-16 h-8 bg-gradient-to-r from-[#F47F21]/20 to-[#FF6B35]/20 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="runtime" className="space-y-6">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Live Output Filtering</h3>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F47F21]/20 rounded-full flex items-center justify-center mb-3">
                        <Shield className="w-8 h-8 text-[#F47F21]" />
                      </div>
                      <span className="text-sm text-gray-300">Guard</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                        <RefreshCw className="w-8 h-8 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300">Rewrite</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-3">
                        <UserCheck className="w-8 h-8 text-yellow-400" />
                      </div>
                      <span className="text-sm text-gray-300">Human Review</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Change Management Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Ship changes safely with approvals and rollouts.</h2>
            <p className="text-xl text-gray-300">
              Every change to a model, prompt, tool, or configuration has an owner, impact analysis, approver, and a record.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FileText, title: 'Change request', desc: 'who/what/why, proposed rollout window' },
              { icon: BarChart3, title: 'Impact analysis', desc: 'auto-generated: eval deltas, cost/latency estimates, affected agents' },
              { icon: UserCheck, title: 'Approval workflow', desc: 'roles: owner, reviewer, approver; parallel or serial' },
              { icon: GitBranch, title: 'Rollout', desc: 'canary %, progressive, instant rollback, feature flag' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <ChangeTimeline />
          </div>

        </div>
      </section>

      {/* Observability Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">See what your agents are doing — and what it costs.</h2>
          </motion.div>

          <ObservabilityCharts />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Per-agent SLOs & alerting',
              'Cost budgets & anomaly detection',
              'Trace correlation (prompt → tool calls → output)',
              'Tagging by team/customer/campaign'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Human-in-the-Loop Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Keep humans where it matters.</h2>
            <p className="text-xl text-gray-300">
              Route sensitive decisions to reviewers, capture rationale, and continuously improve models.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, title: 'Review queues', desc: 'risk-scored tasks with SLAs; keyboard shortcuts' },
              { icon: AlertTriangle, title: 'Escalation paths', desc: 'auto-assign by domain; fallback owners' },
              { icon: TrendingUp, title: 'Feedback loops', desc: 'label outcomes, create eval items, auto-tune prompts' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <HITLReviewCard />
          </div>

        </div>
      </section>

      {/* Catalog & Lifecycle Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">A service catalog for agents and tools.</h2>
            <p className="text-xl text-gray-300">
              Register agents, tools, prompts, and knowledge sources. Know owners, dependencies, risks, and current status.
            </p>
          </motion.div>

          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <CatalogTable />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Prove AI oversight with the standards that matter.</h2>
            <p className="text-xl text-gray-300">
              Automatically collect AppsBee evidence and map it to frameworks.
            </p>
          </motion.div>

          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <ComplianceMatrix />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Works with your AI stack.</h2>
            <p className="text-xl text-gray-300">
              Use SDKs and webhooks to ingest traces, emit metrics, and enforce policy gates pre- and post-deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Model/Platform */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Model/Platform</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">OpenAI</div>
                <div className="bg-white/5 p-3 rounded-lg">Azure OpenAI</div>
                <div className="bg-white/5 p-3 rounded-lg">AWS Bedrock</div>
                <div className="bg-white/5 p-3 rounded-lg">Anthropic</div>
                <div className="bg-white/5 p-3 rounded-lg">Vertex AI</div>
              </div>
            </div>

            {/* Orchestration & Agents */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Orchestration & Agents</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">LangChain</div>
                <div className="bg-white/5 p-3 rounded-lg">LlamaIndex</div>
                <div className="bg-white/5 p-3 rounded-lg">MCP</div>
                <div className="bg-white/5 p-3 rounded-lg">CrewAI</div>
              </div>
            </div>

            {/* Data & Vector */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Data & Vector</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Pinecone</div>
                <div className="bg-white/5 p-3 rounded-lg">Weaviate</div>
                <div className="bg-white/5 p-3 rounded-lg">Elasticsearch</div>
                <div className="bg-white/5 p-3 rounded-lg">Snowflake</div>
              </div>
            </div>

            {/* Observability & Sec */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Observability & Sec</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Datadog</div>
                <div className="bg-white/5 p-3 rounded-lg">New Relic</div>
                <div className="bg-white/5 p-3 rounded-lg">Splunk</div>
                <div className="bg-white/5 p-3 rounded-lg">Snyk</div>
              </div>
            </div>

            {/* Collab & ITSM */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Collab & ITSM</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Slack</div>
                <div className="bg-white/5 p-3 rounded-lg">Teams</div>
                <div className="bg-white/5 p-3 rounded-lg">ServiceNow</div>
                <div className="bg-white/5 p-3 rounded-lg">Jira</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Right-sized governance.</h2>
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 p-1 rounded-lg">
                <button className="px-6 py-2 rounded-md bg-[#F47F21] text-white">Pilot</button>
                <button className="px-6 py-2 rounded-md text-gray-300 hover:text-white">Enterprise</button>
              </div>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Start with one environment, core guardrails, change approvals, and basic dashboards.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Pricing depends on agent volume, environments, and integration depth.
            </p>
            <Button 
              size="lg" 
              className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us for Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Book a 30-minute AppsBee demo</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>We'll review your current agent architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Walk through guardrails and change workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Share a cost/latency dashboard tailored to your stack</span>
                </div>
              </div>
            </div>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <Input type="email" className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input className="bg-white/5 border-white/10" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input className="bg-white/5 border-white/10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Interest</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="What brings you here?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guardrails">AI Guardrails</SelectItem>
                        <SelectItem value="change-mgmt">Change Management</SelectItem>
                        <SelectItem value="observability">Observability</SelectItem>
                        <SelectItem value="hitl">Human-in-the-Loop</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="pricing">Pricing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your AI governance challenges..."
                      className="bg-white/5 border-white/10"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox className="mt-1" />
                    <label className="text-sm text-gray-300">
                      I agree to receive marketing communications from InfoComply.ai. 
                      You can unsubscribe at any time. <a href="#" className="text-[#F47F21] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button 
                    type="button" 
                    size="lg" 
                    className="w-full bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Contact Us
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about AppsBee</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Can AppsBee govern non-LLM automation bots?",
                  answer: "Yes. Any agent or tool with an API/trace can be onboarded and governed."
                },
                {
                  question: "Do we need to migrate our models?",
                  answer: "No. AppsBee wraps your existing stack and providers."
                },
                {
                  question: "How is hallucination risk handled?",
                  answer: "With policy checks (source requirements), runtime critics, and optional human review before action."
                },
                {
                  question: "What about data privacy?",
                  answer: "Enforce redaction and purpose constraints, and keep immutable logs for audit."
                },
                {
                  question: "Does AppsBee work without iComply?",
                  answer: "Yes. AppsBee adds AI governance; iComply adds privacy/security compliance. They're better together."
                },
                {
                  question: "Typical onboarding time?",
                  answer: "First agent governed in days; org-wide rollout in phases over a few weeks."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                        {faq.question}
                        <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-4 text-gray-300">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell Banner */}
      <section className="py-12 bg-gradient-to-r from-[#F47F21]/10 to-[#FF6B35]/10 border-y border-[#F47F21]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Need help designing your agent architecture?</h3>
              <p className="text-gray-300">Advisory for best-use of agents by industry, plus ongoing managed governance.</p>
            </div>
            <Link to="/services/advisory">
              <Button className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white">
                See Services →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType={null}
      />
    </div>
  );
};

export default AppsBeeNew;
