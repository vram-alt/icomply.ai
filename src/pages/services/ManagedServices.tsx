import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Shield, Monitor, GitBranch, FileText, Award, Clock, Users, Zap, Database, DollarSign, Target, Globe } from 'lucide-react';

const ManagedServices = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-1/10 to-brand-2/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Managed <span className="text-gradient">Governance Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              A joint team (automations + humans) operating your AI & compliance controls 24/7
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>Who:</strong> Organizations scaling agents/systems across units or regions
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Run Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What We Run</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive governance operations for your entire AI ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Policies & Guardrails', desc: 'AppsBee with HITL queues' },
              { icon: GitBranch, title: 'Change Management', desc: 'Models/prompts/tools with approvals & canaries' },
              { icon: Monitor, title: 'Observability', desc: 'Latency/cost/usage + cost controls' },
              { icon: FileText, title: 'Privacy Ops', desc: 'DSAR, consent, RoPA & breach workflows (iComply)' },
              { icon: Award, title: 'Evidence Capture', desc: 'Monthly compliance score and audit packs' },
              { icon: Users, title: '24/7 Support', desc: 'Dedicated team for monitoring and response' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 transition-all">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-[#F47F21] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Use Cases Section */}
      <section className="py-20 bg-[#0A0F1A]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Explore Our <span className="text-gradient">Use Cases</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into each managed service and discover how our experts can help your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guardrail Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/managed-services/guardrail-monitoring">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      Guardrail Monitoring
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      24/7 monitoring of AI guardrails with actionable fixes. Track project, resource, agent, and model-based violations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Input/Output Rails</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">TripWires</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Compliance</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Operational Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/managed-services/operational-checklist">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <Clock className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      Operational Checklist
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Daily, weekly, and monthly AI operations management. Hallucination detection, human-in-the-loop review, and red team testing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Daily Checks</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">HITL Review</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Red Team</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Data Governance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/managed-services/data-governance">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <Database className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      Data Governance
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Comprehensive data governance for AI systems. User controls, MCP server access, data retention, and consent management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">RBAC</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Retention</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Consent</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Continuous Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/managed-services/continuous-monitoring">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <Monitor className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      Continuous Monitoring
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Real-time AI performance and safety monitoring. Track hallucination rates, quality metrics, and compliance across workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Real-time</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Validation</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Alerts</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Spend Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/managed-services/spend-management">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <DollarSign className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      AI Spend Management
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Optimize AI costs across departments and agents. Department-based tracking, model optimization, and budget controls.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Cost Tracking</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Optimization</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Budget Alerts</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Change Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/managed-services/change-management">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <GitBranch className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      AI Change Management
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Safe AI model and feature rollouts. Impact analysis, validation, canary releases, and instant rollback capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Validation</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Canary Deploy</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Rollback</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Audit Readiness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/managed-services/audit-readiness">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <Award className="w-12 h-12 text-[#F47F21] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="flex items-center justify-between">
                      AI Audit Readiness
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Industry-specific control establishment and evidence collection. HIPAA, SOX, GDPR, AI Act compliance and more.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Controls</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Evidence</Badge>
                      <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] text-xs">Multi-Framework</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-brand-1/20 to-brand-2/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Elevate Your <span className="text-gradient">AI Governance</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Let our experts handle the complexity while you focus on building and deploying AI innovations.
            </p>
            
            <Button 
              size="lg" 
              className="bg-brand-2 hover:bg-brand-2/90 text-white px-8 py-4 text-lg"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="managed"
      />
    </div>
  );
};

export default ManagedServices;
