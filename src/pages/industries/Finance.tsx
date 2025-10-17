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
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Lock,
  Eye,
  DollarSign,
  BarChart3,
  Users,
  Scale
} from 'lucide-react';

const Finance = () => {
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
            <Link to="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-[#F47F21]">Financial Services</span>
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
              Financial Services
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Financial Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Navigate complex regulatory requirements while safely deploying AI. Expert managed services for SOX, PCI-DSS, SEC regulations, and emerging AI compliance frameworks.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Unique AI Challenges in Finance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Financial institutions face unprecedented complexity deploying AI while maintaining regulatory compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Scale className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Regulatory Scrutiny</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Multiple overlapping regulations: SOX, PCI-DSS, SEC, FINRA, plus emerging AI-specific rules from regulators.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model risk management requirements</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Algorithmic bias in lending/trading</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Explainability for auditors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Data Sensitivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Financial data requires the highest security and privacy protections with strict access controls and audit trails.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII and financial data in prompts</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Third-party AI provider risks</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cross-border data transfer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Model Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  AI hallucinations and errors can result in financial losses, market manipulation, or regulatory penalties.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Incorrect financial advice</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Trading algorithm errors</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Compliance calculation mistakes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Relevant Compliance Frameworks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your AI systems meet all financial services regulatory requirements
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-[#F47F21] mr-2" />
                      US Regulations
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>SOX (Sarbanes-Oxley)</strong>
                          <p className="text-sm text-gray-400">Financial reporting controls and data integrity</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>PCI-DSS</strong>
                          <p className="text-sm text-gray-400">Payment card data security standards</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>SEC Regulations</strong>
                          <p className="text-sm text-gray-400">Securities trading and disclosure requirements</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>FINRA Guidelines</strong>
                          <p className="text-sm text-gray-400">Broker-dealer compliance and supervision</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FileText className="w-6 h-6 text-[#F47F21] mr-2" />
                      International Standards
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>EU AI Act</strong>
                          <p className="text-sm text-gray-400">High-risk AI system requirements for finance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>ISO 42001</strong>
                          <p className="text-sm text-gray-400">AI management system standards</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>GDPR</strong>
                          <p className="text-sm text-gray-400">Data protection for EU customers</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Basel III/IV</strong>
                          <p className="text-sm text-gray-400">Operational risk and model governance</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tailored Use Cases */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Managed Services for Financial Institutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-specific implementations of our AI governance platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Model Risk Management */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Model Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive AI model validation, ongoing monitoring, and governance aligned with SR 11-7 and OCC guidelines.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model inventory and classification</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Ongoing performance monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Validation documentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Financial Data Governance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Financial Data Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Secure handling of sensitive financial data in AI systems with encryption, access controls, and audit trails.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII/PCI data masking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Transaction data protection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Third-party risk management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance Monitoring */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Real-Time Compliance Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Continuous monitoring for regulatory violations, bias, and errors in AI-driven financial processes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Fair lending compliance</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Trading algorithm oversight</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated alerts and remediation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Audit Readiness */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Financial Services Audit Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Maintain audit-ready evidence for SOX, SEC, and regulatory examinations with automated documentation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> SOX controls testing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Regulatory exam support</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Continuous evidence collection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Change Management */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Model Change Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Rigorous change management for AI model updates with validation, testing, and approval workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Impact analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Staged rollouts</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Instant rollback capabilities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cost Optimization */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>AI Spend Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Track and optimize AI costs across business units, ensuring ROI while maintaining compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Department-level tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Budget controls and alerts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Audit Success</div>
                <p className="text-sm text-gray-300">Pass SOX & SEC audits</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">75%</div>
                <div className="text-lg font-semibold mb-2">Faster Compliance</div>
                <p className="text-sm text-gray-300">Reduce time to market</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">50%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-sm text-gray-300">Lower AI operational costs</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Violations</div>
                <p className="text-sm text-gray-300">Proactive risk mitigation</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI Safely in Your Financial Institution?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts handle compliance while you innovate. Schedule a consultation to discuss your specific regulatory requirements.
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
        onClose={() => setContactModalOpen(true)}
        serviceType="finance-industry"
      />
    </div>
  );
};

export default Finance;

