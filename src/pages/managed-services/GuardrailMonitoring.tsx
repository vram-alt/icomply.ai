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
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  Clock,
  Zap,
  FileText
} from 'lucide-react';

const GuardrailMonitoring = () => {
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
            <span className="text-[#F47F21]">Guardrail Monitoring</span>
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
              Guardrail{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Monitoring & Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              24/7 monitoring of AI guardrails with expert analysis, actionable fixes, and continuous optimization to keep your AI systems safe and compliant.
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
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#F47F21] text-[#F47F21] hover:bg-[#F47F21] hover:text-white"
                asChild
              >
                <Link to="/services/managed-services">View All Services</Link>
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
            <h2 className="text-3xl font-bold mb-4">What We Provide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guardrail monitoring across your entire AI infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Target className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Project/Resource Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Project-based monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Resource utilization tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Agent performance metrics</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Model-specific analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Built-in Guardrails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Input validation guardrails</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Output safety filters</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> OOB setup or custom rules</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy enforcement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>TripWire Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Exception detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Automated alerting</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Root cause analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fix recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <FileText className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Business Rails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Policy management</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Workflow orchestration</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Approval workflows</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Compliance monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Real-time dashboards</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Trend analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Performance optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fix prioritization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Round-the-clock coverage</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Immediate incident response</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Proactive issue detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Expert escalation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Experts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why This Should Be Managed by Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI guardrail management requires deep expertise, constant vigilance, and rapid response capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Specialized Knowledge</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our experts understand the nuances of AI behavior, common failure patterns, and industry-specific compliance requirements. They can quickly identify issues that automated systems might miss and implement fixes that address root causes rather than symptoms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Continuous Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Expert teams continuously analyze patterns, optimize guardrail configurations, and adapt to evolving AI capabilities. This ongoing refinement ensures your systems stay ahead of emerging risks while maintaining optimal performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Rapid Response Time</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When AI systems generate problematic outputs or violate guardrails, every minute counts. Our 24/7 expert team can respond immediately, implementing fixes and mitigations before issues escalate into business or compliance problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Compliance Assurance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Regulations like EU AI Act, GDPR, and industry-specific standards require documented oversight of AI systems. Expert management provides the audit trails, documentation, and governance evidence needed to demonstrate compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Value Section */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Specific Value for Customers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">85%</div>
                <div className="text-lg font-semibold mb-2">Faster Issue Resolution</div>
                <p className="text-sm text-gray-300">Expert teams identify and resolve guardrail violations 85% faster than in-house teams</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
                <p className="text-sm text-gray-300">24/7 monitoring ensures your AI systems remain compliant and operational</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">60%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-sm text-gray-300">Lower TCO compared to building and maintaining internal expertise</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Reduce Risk Exposure</div>
                        <p className="text-sm text-gray-400">Proactive monitoring prevents AI-related incidents before they impact your business or reputation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Accelerate Innovation</div>
                        <p className="text-sm text-gray-400">Deploy AI faster knowing experts are monitoring safety and compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Maintain Compliance</div>
                        <p className="text-sm text-gray-400">Stay aligned with evolving AI regulations and industry standards</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Improve AI Quality</div>
                        <p className="text-sm text-gray-400">Continuous optimization enhances accuracy and reduces hallucinations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Scale Confidently</div>
                        <p className="text-sm text-gray-400">Expert oversight scales with your AI deployment without adding headcount</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F47F21] mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Access Expertise</div>
                        <p className="text-sm text-gray-400">Tap into specialized AI governance knowledge without long-term hiring commitments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your AI Guardrails?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts monitor and optimize your AI systems so you can focus on innovation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                  onClick={() => setContactModalOpen(true)}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A0F1A]"
                  asChild
                >
                  <Link to="/services/managed-services">View All Managed Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="managed-guardrails"
      />
    </div>
  );
};

export default GuardrailMonitoring;

