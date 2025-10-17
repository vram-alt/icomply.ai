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
  Target,
  Lock,
  Eye,
  TrendingUp,
  Users,
  Scale,
  FileCheck
} from 'lucide-react';

const Insurance = () => {
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
            <span className="text-[#F47F21]">Insurance</span>
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
              Insurance Industry
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Insurance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Deploy AI in insurance while ensuring fair underwriting, claims accuracy, and regulatory compliance. Expert managed services for safe, unbiased insurance AI.
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
            <h2 className="text-3xl font-bold mb-4">Unique AI Challenges in Insurance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insurance companies face critical fairness and accuracy requirements when deploying AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Scale className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Algorithmic Fairness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  AI systems must avoid discriminatory outcomes in underwriting, pricing, and claims processing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Protected class discrimination</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Proxy variable detection</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Adverse action notices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Target className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Claims Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  AI hallucinations in claims processing can lead to wrongful denials or fraudulent approvals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Claim validity verification</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Fraud detection accuracy</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Payment calculation errors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Regulatory Scrutiny</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  State insurance departments and federal regulators are increasingly focused on AI in insurance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> State-by-state requirements</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model documentation demands</li>
                  <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Explainability requirements</li>
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
            <h2 className="text-3xl font-bold mb-4">Insurance Compliance Frameworks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your AI systems meet all insurance regulatory requirements
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-[#F47F21] mr-2" />
                      US Insurance Regulations
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>NAIC Model Laws</strong>
                          <p className="text-sm text-gray-400">State insurance regulatory frameworks</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Fair Credit Reporting Act</strong>
                          <p className="text-sm text-gray-400">Consumer credit information in underwriting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>State Privacy Laws</strong>
                          <p className="text-sm text-gray-400">CCPA, CPRA, and emerging state regulations</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>SOX (for public insurers)</strong>
                          <p className="text-sm text-gray-400">Financial reporting and controls</p>
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
                          <p className="text-sm text-gray-400">High-risk AI for insurance underwriting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>GDPR</strong>
                          <p className="text-sm text-gray-400">EU customer data protection</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Solvency II (EU)</strong>
                          <p className="text-sm text-gray-400">Risk management and reporting</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#F47F21] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>ISO 42001</strong>
                          <p className="text-sm text-gray-400">AI management systems</p>
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
            <h2 className="text-3xl font-bold mb-4">Managed Services for Insurance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI governance for insurance carriers and brokers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fair Underwriting */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Scale className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Fair Underwriting AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Continuous bias monitoring and fairness testing for AI-driven underwriting systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Disparate impact analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Protected attribute monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Adverse action documentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Claims Processing */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Claims AI Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Quality assurance for AI in claims processing, fraud detection, and payment calculations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Decision validation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Fraud model monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Human oversight workflows</li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Explainability */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Eye className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>AI Explainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Generate clear explanations for AI decisions to meet regulatory and consumer disclosure requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Decision reason codes</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Consumer-friendly explanations</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Regulatory documentation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Customer Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Secure handling of sensitive customer data in AI systems with privacy-preserving techniques.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> PII masking and encryption</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Access controls and logging</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Third-party risk management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Audit */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>State Exam Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Maintain audit-ready documentation for state insurance department examinations and market conduct reviews.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model governance documentation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Fairness testing evidence</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Continuous compliance tracking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Risk */}
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 hover:border-[#F47F21]/50 transition-all">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Insurance Model Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive model risk management for actuarial and pricing AI systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model validation and testing</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Change management controls</li>
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
                <div className="text-lg font-semibold mb-2">Fair Outcomes</div>
                <p className="text-sm text-gray-300">Zero discrimination findings</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Claims Accuracy</div>
                <p className="text-sm text-gray-300">Reduced processing errors</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Faster Audits</div>
                <p className="text-sm text-gray-300">Streamlined state exams</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">60%</div>
                <div className="text-lg font-semibold mb-2">Cost Savings</div>
                <p className="text-sm text-gray-300">Lower compliance overhead</p>
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
              <h2 className="text-3xl font-bold mb-4">Deploy Fair, Compliant AI in Your Insurance Business</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ensure fairness, accuracy, and regulatory compliance. Schedule a consultation to discuss your insurance AI needs.
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
        serviceType="insurance-industry"
      />
    </div>
  );
};

export default Insurance;

