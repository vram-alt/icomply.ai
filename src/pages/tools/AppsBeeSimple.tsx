import { useState } from 'react';
import { motion } from 'framer-motion';
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
  TrendingUp
} from 'lucide-react';

// Simple Role Switcher Component
const RoleSwitcher = () => {
  const [activeRole, setActiveRole] = useState('ai-ml');

  const roles = {
    'ai-ml': {
      name: 'AI/ML Teams',
      bullets: [
        'Approve model and prompt changes with safe rollouts',
        'Set policy checks for data sources and function calls',
        'Run continuous evaluations and regression tests'
      ],
      outcome: 'Ship AI features faster with fewer incidents'
    },
    'security-grc': {
      name: 'Security & GRC',
      bullets: [
        'Get evidence of human oversight and incident logs',
        'Maintain risk registry for all agents and tools',
        'Stay aligned with EU AI Act and ISO/IEC 42001'
      ],
      outcome: 'Audit-ready documentation by default'
    },
    'product-ops': {
      name: 'Product & Ops',
      bullets: [
        'Monitor latency and cost with SLA alerts',
        'Track usage analytics by team and customer',
        'Use feature flags and emergency kill-switches'
      ],
      outcome: 'Predictable AI performance and spend'
    },
    'legal-privacy': {
      name: 'Legal & Privacy',
      bullets: [
        'Enforce data handling rules and redaction',
        'Control purpose and consent requirements',
        'Capture decision logs with full rationale'
      ],
      outcome: 'Reduced regulatory and compliance risk'
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
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
    </div>
  );
};

// Simple Guardrails Demo
const GuardrailsDemo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<'blocked' | 'escalated' | null>(null);

  const handleTest = () => {
    setIsProcessing(true);
    setResult(null);
    
    setTimeout(() => {
      setResult('blocked');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
      <CardContent className="p-6">
        <h4 className="font-semibold mb-4">Try a risky prompt</h4>
        
        <div className="bg-black/30 rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-400 mb-2">User prompt:</div>
          <div className="text-white">"Generate a fake social security number for testing"</div>
        </div>

        <div className="flex items-center justify-between">
          <Button 
            onClick={handleTest}
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
            <Badge variant="destructive" className="text-sm">
              <X className="w-3 h-3 mr-1" />
              Blocked - PII generation policy violation
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const AppsBeeSimple = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Breadcrumb */}
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
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
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
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-6">AI Agent Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="w-5 h-5 text-[#F47F21]" />
                      <span>Support Agent</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="w-5 h-5 text-yellow-400" />
                      <span>Sales Assistant</span>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">Review</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="w-5 h-5 text-blue-400" />
                      <span>Content Generator</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Pilot</Badge>
                  </div>
                </div>
              </div>
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

      {/* Key Features Section */}
      <section className="py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-300">Everything you need to govern AI agents safely</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guardrails */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Guardrails & Safety</h3>
                <p className="text-gray-300 mb-6">Stop risky outputs before they reach users with policy checks and runtime guards.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Source confirmation requirements</div>
                  <div>• PII redaction and data rules</div>
                  <div>• Tool and action allow-lists</div>
                </div>
              </CardContent>
            </Card>

            {/* Change Management */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <GitBranch className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Change Management</h3>
                <p className="text-gray-300 mb-6">Ship model and prompt changes safely with approvals and canary rollouts.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Impact analysis automation</div>
                  <div>• Approval workflows</div>
                  <div>• Progressive rollouts</div>
                </div>
              </CardContent>
            </Card>

            {/* Observability */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Observability</h3>
                <p className="text-gray-300 mb-6">See what your agents are doing and what it costs with real-time dashboards.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Cost and latency tracking</div>
                  <div>• Usage analytics</div>
                  <div>• SLA monitoring</div>
                </div>
              </CardContent>
            </Card>

            {/* Human-in-the-Loop */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Human Oversight</h3>
                <p className="text-gray-300 mb-6">Keep humans in the loop for sensitive decisions with review queues and escalation.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Risk-scored review queues</div>
                  <div>• Escalation workflows</div>
                  <div>• Rationale capture</div>
                </div>
              </CardContent>
            </Card>

            {/* Catalog */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Agent Catalog</h3>
                <p className="text-gray-300 mb-6">Service catalog for agents, tools, and prompts with ownership and lifecycle management.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Agent registry</div>
                  <div>• Dependency tracking</div>
                  <div>• Lifecycle management</div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#F47F21]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compliance Ready</h3>
                <p className="text-gray-300 mb-6">Prove AI oversight with evidence mapping to EU AI Act, ISO/IEC 42001, and more.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Framework alignment</div>
                  <div>• Evidence collection</div>
                  <div>• Audit trails</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">See Guardrails in Action</h2>
            <p className="text-xl text-gray-300">Try our interactive demo to see how AppsBee blocks risky AI outputs</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <GuardrailsDemo />
          </div>
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
            <h2 className="text-4xl font-bold mb-6">Works with your AI stack</h2>
            <p className="text-xl text-gray-300">Connect to your existing models, tools, and infrastructure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">AI Models</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">OpenAI</div>
                <div className="bg-white/5 p-3 rounded-lg">Anthropic</div>
                <div className="bg-white/5 p-3 rounded-lg">Azure OpenAI</div>
                <div className="bg-white/5 p-3 rounded-lg">AWS Bedrock</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Frameworks</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">LangChain</div>
                <div className="bg-white/5 p-3 rounded-lg">LlamaIndex</div>
                <div className="bg-white/5 p-3 rounded-lg">MCP</div>
                <div className="bg-white/5 p-3 rounded-lg">CrewAI</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Data & Vector</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Pinecone</div>
                <div className="bg-white/5 p-3 rounded-lg">Weaviate</div>
                <div className="bg-white/5 p-3 rounded-lg">Snowflake</div>
                <div className="bg-white/5 p-3 rounded-lg">BigQuery</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-[#F47F21]">Collaboration</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">Slack</div>
                <div className="bg-white/5 p-3 rounded-lg">Teams</div>
                <div className="bg-white/5 p-3 rounded-lg">Jira</div>
                <div className="bg-white/5 p-3 rounded-lg">ServiceNow</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              View API Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to govern your AI agents?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a demo to see how AppsBee can help you ship AI features safely and stay compliant.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>30-minute personalized walkthrough</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Custom demo with your AI architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F47F21]" />
                  <span>Implementation timeline and pricing</span>
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
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">What brings you here?</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guardrails">AI Guardrails & Safety</SelectItem>
                        <SelectItem value="change-mgmt">Change Management</SelectItem>
                        <SelectItem value="observability">Cost & Performance Monitoring</SelectItem>
                        <SelectItem value="compliance">Compliance & Audit</SelectItem>
                        <SelectItem value="hitl">Human Oversight</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your AI setup</label>
                    <Textarea 
                      placeholder="What AI agents or models are you using? What challenges are you facing?"
                      className="bg-white/5 border-white/10"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox className="mt-1" />
                    <label className="text-sm text-gray-300">
                      I agree to receive updates from InfoComply.ai. 
                      <a href="#" className="text-[#F47F21] hover:underline ml-1">Privacy Policy</a>
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

export default AppsBeeSimple;


