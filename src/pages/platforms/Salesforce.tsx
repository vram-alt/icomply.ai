import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  FileText,
  ArrowRight,
  Cloud,
  Lock,
  Eye,
  Zap,
  Users,
  Database,
  GitBranch,
  Activity
} from 'lucide-react';

const Salesforce = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white">InfoComply.ai</Link>
            <span>/</span>
            <Link to="/platforms" className="hover:text-white">Platforms</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Salesforce</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F47F21]/5 via-transparent to-[#FF6B35]/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] border-[#F47F21]/20">
              Salesforce Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Salesforce AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Enhance Salesforce Einstein and Agentforce with comprehensive AI governance. InfoComply extends the Einstein Trust Layer with advanced monitoring, compliance, and control capabilities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Salesforce Provides vs What We Add */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Extending Salesforce AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Salesforce provides the foundation. InfoComply adds comprehensive governance and compliance.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Cloud className="w-12 h-12 text-[#00A1E0] mb-4" />
                <CardTitle>What Salesforce Provides</CardTitle>
                <p className="text-sm text-gray-400">Built-in Einstein Trust Layer capabilities</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Data Masking</strong>
                      <p className="text-sm text-gray-400">PII/PCI field masking before LLM calls</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Grounding</strong>
                      <p className="text-sm text-gray-400">Responses grounded in Salesforce data</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Safety Filters</strong>
                      <p className="text-sm text-gray-400">Basic toxicity and bias filters</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00A1E0] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Activity Logging</strong>
                      <p className="text-sm text-gray-400">Basic audit logs of prompts/responses</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>What InfoComply Adds</CardTitle>
                <p className="text-sm text-gray-400">Advanced governance and compliance layer</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Advanced Guardrails</strong>
                      <p className="text-sm text-gray-400">Custom business and compliance rules beyond basic filters</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Continuous Monitoring</strong>
                      <p className="text-sm text-gray-400">24/7 hallucination detection and quality metrics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Compliance Automation</strong>
                      <p className="text-sm text-gray-400">Industry-specific compliance workflows and evidence collection</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Managed Services</strong>
                      <p className="text-sm text-gray-400">Expert team managing governance 24/7</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform-Specific Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">InfoComply for Salesforce</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Native integration with Salesforce Einstein, Agentforce, and Data Cloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agentforce Governance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Agentforce Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive governance for Salesforce AI agents with action monitoring and approval workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Agent action approval gates</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> High-risk action detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Agent behavior monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Cloud Integration */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Data Cloud Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Control what data from Data Cloud is accessible to AI with field-level permissions and usage tracking.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data access controls</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage monitoring and alerts</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent enforcement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Einstein Trust Layer Extension */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Trust Layer Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Extend Einstein Trust Layer with custom compliance rules, advanced bias detection, and industry frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Custom guardrails</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Industry compliance templates</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Advanced bias testing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prompt Management */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Prompt Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Version control, testing, and approval workflows for Salesforce AI prompt templates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Prompt versioning</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> A/B testing capabilities</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Change approval workflows</li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Monitoring */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Activity className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Einstein Model Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Real-time monitoring of Einstein model performance, accuracy, and compliance across all use cases.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality metrics dashboard</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Hallucination detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance degradation alerts</li>
                </ul>
              </CardContent>
            </Card>

            {/* Audit & Compliance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Salesforce AI Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive audit trails and compliance reporting for Salesforce AI usage across your organization.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Enhanced audit logging</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Compliance score tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated evidence collection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Salesforce AI Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common Salesforce AI scenarios enhanced by InfoComply
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-[#F47F21] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sales AI Agents</h3>
                    <p className="text-gray-300 mb-4">
                      Agentforce SDRs generating emails, updating opportunities, and making recommendations. InfoComply ensures brand consistency, prevents data leakage, and monitors for inappropriate content.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">Challenges</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Inaccurate customer data in emails</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Off-brand messaging</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Unauthorized discounting</li>
                        </ul>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">InfoComply Solution</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Content validation before send</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Brand guideline enforcement</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Pricing approval workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-[#F47F21] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Service AI Agents</h3>
                    <p className="text-gray-300 mb-4">
                      Einstein Service Agents resolving cases, accessing customer data, and escalating issues. InfoComply ensures PHI/PII protection, accurate responses, and compliance with SLAs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">Challenges</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Hallucinated troubleshooting steps</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Sensitive data exposure</li>
                          <li className="flex items-start"><Eye className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" /> Incorrect policy citations</li>
                        </ul>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-[#F47F21]">InfoComply Solution</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Response accuracy validation</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> PHI/PII masking</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy compliance checking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto bg-[#0F172A]/50 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GitBranch className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Native Integration</h4>
                  <p className="text-sm text-gray-400">Salesforce-native app installed from AppExchange</p>
                </div>
                <div>
                  <Lock className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Zero Data Copy</h4>
                  <p className="text-sm text-gray-400">All data stays within your Salesforce org</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">5 Minute Setup</h4>
                  <p className="text-sm text-gray-400">Quick deployment with guided configuration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Govern Your Salesforce AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how InfoComply enhances Salesforce Einstein and Agentforce with comprehensive AI governance.
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="salesforce-platform"
      />
    </div>
  );
};

export default Salesforce;

