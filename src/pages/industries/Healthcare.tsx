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
  Heart,
  Lock,
  Eye,
  Activity,
  Users,
  FileCheck,
  Database
} from 'lucide-react';

const Healthcare = () => {
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
            <span className="text-[#F47F21]">Healthcare</span>
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
              Healthcare & Life Sciences
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              HIPAA-Compliant{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                AI Governance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Deploy AI in healthcare while protecting PHI and meeting HIPAA, HITECH, and FDA requirements. Expert managed services for safe, compliant healthcare AI.
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
            <h2 className="text-3xl font-bold mb-4">Unique AI Challenges in Healthcare</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Healthcare organizations face critical compliance and safety requirements when deploying AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>PHI Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Protected Health Information (PHI) must be safeguarded in AI systems with strict access controls and encryption.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PHI in AI prompts and responses</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Business Associate Agreements</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Minimum necessary principle</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Heart className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Patient Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  AI errors in healthcare can have life-threatening consequences. Rigorous validation and monitoring are essential.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Clinical decision support accuracy</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Drug interaction hallucinations</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Diagnostic AI reliability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Regulatory Complexity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Multiple overlapping regulations including HIPAA, HITECH, FDA guidelines, and state-specific privacy laws.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> HIPAA Privacy & Security Rules</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> FDA AI/ML medical device rules</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> State breach notification laws</li>
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
            <h2 className="text-3xl font-bold mb-4">Healthcare Compliance Frameworks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your AI systems meet all healthcare regulatory requirements
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-[#F47F21] mr-2" />
                      US Healthcare Regulations
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>HIPAA Privacy Rule</strong>
                          <p className="text-sm text-gray-400">PHI protection and patient consent requirements</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>HIPAA Security Rule</strong>
                          <p className="text-sm text-gray-400">Technical safeguards for electronic PHI</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>HITECH Act</strong>
                          <p className="text-sm text-gray-400">Breach notification and penalties</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>FDA Regulations</strong>
                          <p className="text-sm text-gray-400">AI/ML as medical device guidelines</p>
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
                          <p className="text-sm text-gray-400">High-risk medical AI requirements</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>GDPR</strong>
                          <p className="text-sm text-gray-400">EU patient data protection</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>ISO 27001/27701</strong>
                          <p className="text-sm text-gray-400">Information security and privacy management</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>ISO 42001</strong>
                          <p className="text-sm text-gray-400">AI management systems for healthcare</p>
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
            <h2 className="text-3xl font-bold mb-4">Managed Services for Healthcare</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI governance for healthcare organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PHI Protection */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>PHI Guardrails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Automated detection and protection of PHI in AI systems with real-time monitoring and masking.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PHI detection in prompts</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data masking and anonymization</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access logging and audit trails</li>
                </ul>
              </CardContent>
            </Card>

            {/* Clinical Safety */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Activity className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Clinical Safety Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Continuous monitoring of clinical AI systems for accuracy, bias, and potential patient safety risks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Clinical decision validation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Drug interaction checking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Alert fatigue prevention</li>
                </ul>
              </CardContent>
            </Card>

            {/* HIPAA Compliance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>HIPAA Compliance Ops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  End-to-end HIPAA compliance management for AI systems including risk assessments and controls.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Security risk assessments</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Business Associate management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Breach response planning</li>
                </ul>
              </CardContent>
            </Card>

            {/* Consent Management */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Patient Consent & Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Manage patient consent for AI use, data access rights, and opt-out requests systematically.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consent capture and tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Patient access requests</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Opt-out management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Audit Readiness */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Healthcare Audit Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Maintain audit-ready evidence for HIPAA, HHS audits, and JointCommission reviews.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> HIPAA control testing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Security documentation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Continuous evidence collection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Governance */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Healthcare Data Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive data governance for clinical data in AI systems with lifecycle management.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Data retention policies</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> De-identification validation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Third-party data sharing</li>
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
                <div className="text-lg font-semibold mb-2">HIPAA Compliant</div>
                <p className="text-sm text-gray-300">Full regulatory adherence</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">Zero</div>
                <div className="text-lg font-semibold mb-2">PHI Breaches</div>
                <p className="text-sm text-gray-300">Proactive protection</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">80%</div>
                <div className="text-lg font-semibold mb-2">Faster Deployment</div>
                <p className="text-sm text-gray-300">Accelerated compliance</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime</div>
                <p className="text-sm text-gray-300">Critical care reliability</p>
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
              <h2 className="text-3xl font-bold mb-4">Deploy AI Safely in Your Healthcare Organization</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Protect PHI, ensure patient safety, and maintain HIPAA compliance. Schedule a consultation to discuss your healthcare AI needs.
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
        serviceType="healthcare-industry"
      />
    </div>
  );
};

export default Healthcare;

