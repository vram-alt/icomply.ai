import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactFormModal from '@/components/ContactFormModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckSquare, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  Users,
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Eye,
  UserCheck
} from 'lucide-react';

const OperationalChecklist = () => {
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
            <span className="text-[#F47F21]">Operational Checklist Management</span>
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
              Operational{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Checklist Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Systematic daily, weekly, and monthly AI operational checks with expert human-in-the-loop review, feedback loops, and red team testing to prevent hallucinations and ensure quality.
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

      {/* What We Provide - Tabbed View */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Operational Checklists</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured checks at different frequencies to catch issues before they impact your business
            </p>
          </motion.div>

          <Tabs defaultValue="daily" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-[#0F172A]/50">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="mt-8">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 text-[#F47F21] mr-2" />
                    Daily Operational Checks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Hallucination Detection & Mitigation</h4>
                      <p className="text-gray-300 mb-4">
                        AI-generated incorrect or fabricated information is one of the biggest operational risks. Our daily checks include:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Automated Spot Checks</div>
                              <p className="text-sm text-gray-400">Random sampling of AI outputs with validation against trusted sources</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Factuality Verification</div>
                              <p className="text-sm text-gray-400">Cross-reference claims with knowledge bases and reliable sources</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Confidence Scoring</div>
                              <p className="text-sm text-gray-400">Flag low-confidence responses for human review</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Pattern Detection</div>
                              <p className="text-sm text-gray-400">Identify recurring hallucination patterns for systemic fixes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Performance Metrics Review</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Response time monitoring and anomaly detection</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Error rate tracking across all AI workflows</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> User satisfaction score analysis</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Cost per request optimization opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="mt-8">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-6 h-6 text-[#F47F21] mr-2" />
                    Weekly Operational Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Human-in-the-Loop Review</h4>
                      <p className="text-gray-300 mb-4">
                        Weekly comprehensive review sessions with domain experts to validate AI quality and catch edge cases.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-black/20 p-4 rounded-lg text-center">
                          <UserCheck className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                          <div className="font-medium mb-1">Sample Review</div>
                          <p className="text-sm text-gray-400">Expert review of 500+ interactions</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg text-center">
                          <Target className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                          <div className="font-medium mb-1">Quality Scoring</div>
                          <p className="text-sm text-gray-400">Accuracy, relevance, safety metrics</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg text-center">
                          <TrendingUp className="w-8 h-8 text-[#F47F21] mx-auto mb-2" />
                          <div className="font-medium mb-1">Trend Analysis</div>
                          <p className="text-sm text-gray-400">Week-over-week improvements</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Feedback Loop Implementation</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Aggregate user feedback and implement improvements</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Update guardrails based on new failure modes</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Fine-tune prompt templates for better outputs</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Document lessons learned and update runbooks</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Compliance Verification</h4>
                      <p className="text-gray-300">
                        Verify adherence to internal policies, industry standards, and regulatory requirements through systematic checks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="mt-8">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-6 h-6 text-[#F47F21] mr-2" />
                    Monthly Strategic Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Red Team Testing</h4>
                      <p className="text-gray-300 mb-4">
                        Adversarial testing to identify vulnerabilities, bypass attempts, and edge cases that could be exploited.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Jailbreak Attempts</div>
                              <p className="text-sm text-gray-400">Test prompt injection and system manipulation resistance</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Bias Testing</div>
                              <p className="text-sm text-gray-400">Systematic testing for demographic and content biases</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Edge Case Discovery</div>
                              <p className="text-sm text-gray-400">Identify unusual inputs that cause unexpected behavior</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Shield className="w-5 h-5 text-[#F47F21] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium mb-1">Vulnerability Assessment</div>
                              <p className="text-sm text-gray-400">Security and safety vulnerability scanning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Hallucination Rate Analysis</h4>
                      <p className="text-gray-300 mb-3">
                        Comprehensive monthly analysis of hallucination patterns across all workflows with corrective action plans.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Trend analysis: Are hallucinations increasing or decreasing?</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Root cause identification for recurring issues</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Model performance comparison and recommendations</li>
                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-1 flex-shrink-0" /> Updated guardrail configurations to prevent future occurrences</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Strategic Planning</h4>
                      <p className="text-gray-300">
                        Review overall AI governance posture, plan improvements, and align with business objectives for the coming month.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
            <h2 className="text-3xl font-bold mb-4">Why Expert Management is Critical</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Operational checklists require disciplined execution, deep AI expertise, and the ability to identify subtle issues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Eye className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Trained Eye for Quality</h3>
                <p className="text-gray-300 text-sm">
                  Experts can spot subtle quality degradation, emerging patterns, and nuanced issues that automated systems miss. Years of experience enable them to distinguish between acceptable variation and concerning trends.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Systematic Approach</h3>
                <p className="text-gray-300 text-sm">
                  Professional teams follow proven methodologies, ensuring consistent execution of checklists without fatigue or oversight. They know what to look for and how to document findings properly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Cross-Industry Knowledge</h3>
                <p className="text-gray-300 text-sm">
                  Our experts bring insights from multiple industries and use cases, applying best practices and lessons learned from hundreds of AI deployments to your specific context.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Time & Resource Efficiency</h3>
                <p className="text-gray-300 text-sm">
                  Building internal capability requires hiring, training, and ongoing management. Managed services provide instant access to expertise without overhead, allowing your team to focus on core business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Adversarial Testing Expertise</h3>
                <p className="text-gray-300 text-sm">
                  Red team testing requires specialized skills in adversarial thinking and attack methodologies. Our security experts know how to break systems to make them stronger.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-[#F47F21] mb-4" />
                <h3 className="text-lg font-bold mb-2">Continuous Improvement</h3>
                <p className="text-gray-300 text-sm">
                  Expert teams not only execute checklists but continuously refine them based on findings, emerging threats, and evolving best practices, ensuring your processes stay current.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">95%</div>
                <div className="text-sm text-gray-300">Issues caught before production impact</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">70%</div>
                <div className="text-sm text-gray-300">Reduction in hallucination rates</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-sm text-gray-300">Checklist completion rate</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F47F21] mb-2">40hrs</div>
                <div className="text-sm text-gray-300">Saved per month vs internal management</div>
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
              <h2 className="text-3xl font-bold mb-4">Ensure Consistent AI Quality</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts handle your operational checklists so your AI systems stay reliable
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
        serviceType="managed-operations"
      />
    </div>
  );
};

export default OperationalChecklist;

