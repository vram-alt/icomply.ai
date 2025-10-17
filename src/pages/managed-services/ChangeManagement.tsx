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
  GitBranch, 
  CheckCircle, 
  TrendingUp,
  Users,
  ArrowRight,
  Target,
  AlertTriangle,
  FileText,
  RefreshCw,
  Shield,
  BarChart3,
  Zap
} from 'lucide-react';

const ChangeManagement = () => {
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
            <Link to="/services/managed-services" className="hover:text-white">Managed Services</Link>
            <span>/</span>
            <span className="text-[#F47F21]">AI Change Management</span>
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
              Managed Service
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Change Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert management of model changes, new features, and bug fixes with comprehensive impact analysis, validation, and controlled release processes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Manage */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Complete Change Lifecycle Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From planning through deployment, we manage every aspect of AI system changes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <RefreshCw className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Model Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model version upgrades</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Provider switches (OpenAI → Anthropic)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Fine-tuned model deployment</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Parameter optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Feature Releases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> New AI capabilities</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Prompt template updates</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Integration additions</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Workflow modifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Bug Fixes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality issue resolution</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance corrections</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Safety guardrail updates</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Emergency patches</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Change Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Structured Change Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that minimizes risk while maximizing agility
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Impact Analysis</h3>
                    <p className="text-gray-300 mb-4">
                      Before any change, we conduct comprehensive impact analysis to understand potential effects on quality, performance, cost, and compliance.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/20 p-4 rounded">
                        <BarChart3 className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Performance Impact</div>
                        <p className="text-xs text-gray-400">Latency, throughput, reliability effects</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <Target className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Quality Impact</div>
                        <p className="text-xs text-gray-400">Accuracy, relevance, safety changes</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <TrendingUp className="w-6 h-6 text-[#F47F21] mb-2" />
                        <div className="font-semibold mb-1">Cost Impact</div>
                        <p className="text-xs text-gray-400">Budget implications and ROI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Validation & Testing</h3>
                    <p className="text-gray-300 mb-4">
                      Rigorous testing in staging environments using real-world scenarios, edge cases, and automated test suites.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Automated regression testing against baseline quality metrics</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Human expert review of sample outputs</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>A/B testing to compare new vs. old performance</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Load testing to ensure performance under stress</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">3</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Controlled Release</h3>
                    <p className="text-gray-300 mb-4">
                      Gradual rollout with monitoring at each stage, ready to rollback if issues arise.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">10%</div>
                          <span>Canary deployment to limited users</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">24-48hrs</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">50%</div>
                          <span>Expanded rollout with active monitoring</span>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">2-3 days</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center text-sm font-bold">100%</div>
                          <span>Full deployment to all users</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">After validation</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl font-bold text-[#F47F21]">4</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Post-Release Monitoring</h3>
                    <p className="text-gray-300 mb-4">
                      Intensive monitoring after deployment to catch any unexpected issues and verify improvement goals are met.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold mb-2 text-[#F47F21]">What We Monitor</div>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Error rates & anomalies</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quality metrics vs. baseline</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> User feedback & satisfaction</li>
                          <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance & cost metrics</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold mb-2 text-[#F47F21]">Rollback Triggers</div>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> {'>'}5% error rate increase</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> {'>'}10% quality degradation</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Critical safety violations</li>
                          <li className="flex items-start"><AlertTriangle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Stakeholder escalation</li>
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

      {/* Why Experts */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Expert Change Management is Critical</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI changes carry unique risks that require specialized knowledge and disciplined processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Unpredictable AI Behavior</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Unlike traditional software, AI systems can behave unpredictably after changes. Experts know how to test for edge cases, validate quality comprehensively, and detect subtle degradation that automated tests miss.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Compliance Documentation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations increasingly require documentation of AI system changes, including rationale, testing, and approval. Our process generates audit-ready records automatically, ensuring you're always prepared for compliance reviews.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GitBranch className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Gradual rollouts, monitoring, and instant rollback capabilities minimize the blast radius of issues. Our experts have managed thousands of AI changes and know how to balance speed with safety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Cross-Functional Coordination</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Changes often affect multiple teams. We coordinate across engineering, product, compliance, and business stakeholders, ensuring everyone is informed and aligned throughout the process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">98%</div>
                <div className="text-sm text-gray-300">Change success rate without rollbacks</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">50%</div>
                <div className="text-sm text-gray-300">Faster time to production</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">&lt;15min</div>
                <div className="text-sm text-gray-300">Average rollback time if needed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-sm text-gray-300">Audit-ready documentation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Deploy AI Changes with Confidence</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts manage your AI changes so you can innovate faster with less risk
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Consultation
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
        serviceType="managed-change"
      />
    </div>
  );
};

export default ChangeManagement;

