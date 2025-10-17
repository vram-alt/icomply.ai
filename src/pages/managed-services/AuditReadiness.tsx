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
  Users,
  ArrowRight,
  Globe,
  AlertTriangle,
  Target,
  BarChart3,
  Lock,
  Eye,
  ClipboardCheck
} from 'lucide-react';

const AuditReadiness = () => {
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
            <span className="text-[#F47F21]">AI Audit Readiness</span>
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
                Audit Readiness
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert establishment of industry-specific controls, jurisdiction-based regulation monitoring, and comprehensive evidence collection to ensure audit success.
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
            <h2 className="text-3xl font-bold mb-4">Complete Audit Preparation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From control establishment to evidence collection, we ensure you're ready for any audit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Industry Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Healthcare (HIPAA, HITECH)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Financial Services (SOX, PCI-DSS)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Government (FedRAMP, FISMA)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Enterprise (ISO 27001, SOC 2)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Globe className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Jurisdiction Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> EU (GDPR, AI Act)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> US (State privacy laws)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> APAC (Regional regulations)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Emerging requirements tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Evidence Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Automated proof capture</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Control effectiveness testing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Gap remediation tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Audit-ready documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Control Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Control Establishment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement the exact controls required for your industry and regulatory environment
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Healthcare - HIPAA/HITECH Compliance</h3>
                    <p className="text-gray-300 mb-4">
                      Specialized controls for AI systems processing Protected Health Information (PHI)
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Required Controls</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PHI access logging and monitoring</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Minimum necessary principle enforcement</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Business Associate Agreements (BAAs)</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Breach notification procedures</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Evidence We Collect</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access audit trails</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Risk assessment documentation</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Security incident logs</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Training completion records</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Financial Services - SOX/PCI-DSS</h3>
                    <p className="text-gray-300 mb-4">
                      Controls for AI systems handling financial data and payment information
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Required Controls</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Financial data segregation</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Change management documentation</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access control matrices</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cardholder data protection</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Evidence We Collect</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Control testing results</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Penetration test reports</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Quarterly scan results</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Attestation of compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">EU AI Act Compliance</h3>
                    <p className="text-gray-300 mb-4">
                      Comprehensive controls for high-risk AI systems under EU regulations
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Required Controls</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Risk management system</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data quality and governance</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Human oversight mechanisms</li>
                      <li className="flex items-start"><CheckCircle className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Technical documentation</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded">
                    <h4 className="font-semibold mb-2">Evidence We Collect</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Conformity assessment records</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> System design documentation</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Testing and validation logs</li>
                      <li className="flex items-start"><FileText className="w-3 h-3 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Post-market monitoring reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evidence Collection Process */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Continuous Evidence Collection</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just prepare for audits—we maintain audit readiness year-round
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ClipboardCheck className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <h4 className="font-semibold mb-2">Collect</h4>
                    <p className="text-sm text-gray-400">Automated capture of logs, configurations, and system states</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <h4 className="font-semibold mb-2">Validate</h4>
                    <p className="text-sm text-gray-400">Verify evidence completeness and control effectiveness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <h4 className="font-semibold mb-2">Remediate</h4>
                    <p className="text-sm text-gray-400">Identify and fix gaps before auditors find them</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <h4 className="font-semibold mb-2">Document</h4>
                    <p className="text-sm text-gray-400">Maintain audit-ready packages for rapid response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Experts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Expert Audit Preparation is Essential</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Audit success requires deep regulatory knowledge and meticulous preparation
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
                    <h3 className="text-xl font-bold mb-3">Regulatory Expertise</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our team includes former auditors and compliance professionals who know exactly what auditors look for. We implement controls that satisfy requirements the first time, avoiding costly remediation cycles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Continuous Monitoring</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations change, and so do AI systems. We continuously monitor both, ensuring your controls stay aligned with current requirements and your evidence remains fresh and comprehensive.
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
                    <h3 className="text-xl font-bold mb-3">Automated Evidence</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Manual evidence collection is error-prone and time-consuming. Our automated systems capture and organize evidence continuously, ensuring nothing is missed and reducing audit preparation time by 80%.
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
                    <h3 className="text-xl font-bold mb-3">Multi-Framework Alignment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Most organizations must comply with multiple frameworks. We implement controls that satisfy multiple requirements simultaneously, reducing complexity and audit burden.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Audit Success Rate</div>
                <p className="text-sm text-gray-300">All our clients pass their audits</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">80%</div>
                <div className="text-lg font-semibold mb-2">Faster Preparation</div>
                <p className="text-sm text-gray-300">Automated evidence collection saves time</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">Major Findings</div>
                <p className="text-sm text-gray-300">Proactive gap remediation prevents issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Pass Your Next AI Audit with Confidence</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts establish controls and collect evidence so you're always audit-ready
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Get Audit Readiness Assessment
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
        serviceType="managed-audit"
      />
    </div>
  );
};

export default AuditReadiness;

