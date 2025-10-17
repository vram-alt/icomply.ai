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
  Database, 
  Shield, 
  CheckCircle, 
  Users,
  ArrowRight,
  Lock,
  Eye,
  FileText,
  Server,
  UserCheck,
  Settings
} from 'lucide-react';

const DataGovernance = () => {
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
            <span className="text-[#F47F21]">Data Governance</span>
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
                Data Governance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert management of user controls, MCP server access, data retention, and consent to ensure your AI systems handle data responsibly and compliantly.
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

      {/* What We Provide */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Data Governance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end management of data flows, access controls, and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>User Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Role-based access control (RBAC) implementation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> User permission management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access audit logging</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Self-service data controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Server className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>MCP Server Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model Context Protocol security</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> API access governance</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Integration point monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Server credential management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Retention policy enforcement</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated data lifecycle management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Secure data archiving</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Right to deletion compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Consent Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent capture and tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Purpose limitation enforcement</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent withdrawal processing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Audit-ready documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-7 h-7 text-[#F47F21] mr-3" />
                  User Controls & Access Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Granular control over who can access what data, how AI systems use personal information, and user-initiated data management actions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fine-Grained Permissions</h4>
                    <p className="text-sm text-gray-400">Define exactly what data each user, role, and AI agent can access</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Self-Service Preferences</h4>
                    <p className="text-sm text-gray-400">Enable users to manage their own data sharing preferences</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Access Reviews</h4>
                    <p className="text-sm text-gray-400">Regular audits of who has access to sensitive data</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Revocation</h4>
                    <p className="text-sm text-gray-400">Instant access removal in case of security incidents</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-7 h-7 text-[#F47F21] mr-3" />
                  MCP Server Access Governance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Secure management of Model Context Protocol servers, ensuring AI systems only access authorized data sources with proper authentication and monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Credential rotation and management for all MCP connections</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Whitelist management for approved data sources and APIs</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Real-time monitoring of data access patterns and anomalies</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Integration security assessments for third-party services</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="w-7 h-7 text-[#F47F21] mr-3" />
                  Data Retention & Lifecycle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Automated management of data throughout its lifecycle, from collection through retention to deletion, ensuring compliance with regulatory requirements.
                </p>
                <div className="bg-black/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Retention Policy Framework</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Training Data</span>
                      <Badge variant="secondary">Configurable Retention</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">User Interactions</span>
                      <Badge variant="secondary">30-90 Days Default</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Audit Logs</span>
                      <Badge variant="secondary">7 Years (Compliance)</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">PII Data</span>
                      <Badge variant="secondary">Purpose-Limited</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-7 h-7 text-[#F47F21] mr-3" />
                  Consent & Purpose Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Track and enforce data usage based on user consent and stated purposes, with full audit trails for regulatory compliance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <Settings className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Consent Capture</div>
                    <p className="text-xs text-gray-400">Collect and document user permissions</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Purpose Enforcement</div>
                    <p className="text-xs text-gray-400">Ensure data used only for stated purposes</p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg text-center">
                    <FileText className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                    <div className="font-semibold mb-1">Audit Documentation</div>
                    <p className="text-xs text-gray-400">Complete records for compliance proof</p>
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
            <h2 className="text-3xl font-bold mb-4">Why Expert Management is Essential</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data governance for AI requires specialized knowledge of regulations, technical implementation, and organizational change management
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
                    <h3 className="text-xl font-bold mb-3">Regulatory Complexity</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Data governance must navigate GDPR, CCPA, HIPAA, and emerging AI regulations like the EU AI Act. Experts understand these requirements and implement controls that satisfy multiple frameworks simultaneously, reducing compliance risk.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technical Implementation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Implementing effective data governance requires deep technical knowledge of AI systems, data flows, and security controls. Our experts configure systems correctly the first time, avoiding costly mistakes and security gaps.
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
                      Data governance touches legal, security, IT, and business teams. Expert management provides neutral facilitation and clear frameworks that get all stakeholders aligned and moving forward.
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
                    <h3 className="text-xl font-bold mb-3">Continuous Compliance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations evolve, AI systems change, and data flows shift. Managed services ensure your governance keeps pace, with regular reviews, updates, and proactive adaptation to new requirements.
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Regulatory Compliance</div>
                <p className="text-sm text-gray-300">Meet GDPR, CCPA, and industry-specific requirements</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">75%</div>
                <div className="text-lg font-semibold mb-2">Faster Implementation</div>
                <p className="text-sm text-gray-300">Deploy data governance faster than building in-house</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Data Breaches</div>
                <p className="text-sm text-gray-300">Proactive governance prevents unauthorized access</p>
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
              <h2 className="text-3xl font-bold mb-4">Secure Your AI Data Governance</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts implement and manage comprehensive data governance for your AI systems
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
        serviceType="managed-data-governance"
      />
    </div>
  );
};

export default DataGovernance;

