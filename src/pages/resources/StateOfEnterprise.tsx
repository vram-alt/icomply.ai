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
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Shield,
  Target,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  Download
} from 'lucide-react';

const StateOfEnterprise = () => {
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
            <Link to="/resources" className="hover:text-white">Resources</Link>
            <span>/</span>
            <span className="text-[#F47F21]">State of Enterprise AI</span>
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
              2025 Report
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              The State of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Enterprise AI Governance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive insights into how enterprises are deploying, governing, and managing AI systems in 2025. Based on data from 500+ organizations across industries.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Download Full Report
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Findings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most critical insights from our 2025 research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#F47F21] mb-2">87%</div>
                <div className="text-lg font-semibold mb-2">AI Adoption</div>
                <p className="text-sm text-gray-300">of enterprises now using AI in production</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#F47F21] mb-2">73%</div>
                <div className="text-lg font-semibold mb-2">Governance Gap</div>
                <p className="text-sm text-gray-300">lack formal AI governance framework</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#F47F21] mb-2">62%</div>
                <div className="text-lg font-semibold mb-2">Security Concerns</div>
                <p className="text-sm text-gray-300">cite data privacy as top AI risk</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-[#F47F21] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#F47F21] mb-2">$2.4M</div>
                <div className="text-lg font-semibold mb-2">Average Cost</div>
                <p className="text-sm text-gray-300">of AI governance gaps per year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adoption Trends */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Enterprise AI Adoption Trends</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How organizations are deploying AI across functions and industries
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-[#F47F21] mr-3" />
                  Top AI Use Cases in 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Customer Service & Support</span>
                      <span className="text-[#F47F21] font-semibold">68%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Sales & Marketing</span>
                      <span className="text-[#F47F21] font-semibold">54%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '54%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Process Automation</span>
                      <span className="text-[#F47F21] font-semibold">47%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Data Analysis & Insights</span>
                      <span className="text-[#F47F21] font-semibold">43%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '43%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Code Generation & Development</span>
                      <span className="text-[#F47F21] font-semibold">38%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-[#F47F21] h-2 rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Challenges */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Top AI Governance Challenges</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What's keeping enterprises up at night
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Data Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">62% of organizations cite this as their #1 concern</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• PII/PHI exposure in prompts</li>
                  <li>• Third-party AI provider risks</li>
                  <li>• Data residency requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Hallucinations & Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">58% struggle with AI reliability</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Incorrect information generation</li>
                  <li>• Lack of confidence scoring</li>
                  <li>• Difficulty detecting errors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">51% uncertain about compliance requirements</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Evolving AI regulations (EU AI Act)</li>
                  <li>• Industry-specific requirements</li>
                  <li>• Audit readiness gaps</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Bias & Fairness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">47% concerned about algorithmic bias</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Discriminatory outcomes</li>
                  <li>• Lack of testing frameworks</li>
                  <li>• Reputation risk</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Cost & ROI Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">44% lack visibility into AI spending</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Unpredictable costs</li>
                  <li>• Difficult ROI measurement</li>
                  <li>• Budget overruns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#F47F21]" />
                </div>
                <CardTitle>Skill Gaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">41% lack AI governance expertise</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Shortage of skilled staff</li>
                  <li>• Complex tool landscape</li>
                  <li>• Training requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What High Performers Do Differently</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights from the top 10% of AI-mature organizations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Establish Governance Early</h3>
                    <p className="text-gray-300">
                      High performers implement governance frameworks before scaling AI, not after. 92% have formal governance policies in place.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Automate Compliance Monitoring</h3>
                    <p className="text-gray-300">
                      They use automated tools for continuous monitoring, reducing manual effort by 80% while improving coverage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Invest in Training</h3>
                    <p className="text-gray-300">
                      Provide comprehensive AI governance training to teams across the organization, not just technical staff.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#F47F21] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Partner with Experts</h3>
                    <p className="text-gray-300">
                      78% of high performers leverage managed services for specialized expertise and 24/7 monitoring capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI Adoption by Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maturity and challenges vary significantly across sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Financial Services</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Highest Maturity</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">91%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Leading in model risk management and regulatory compliance due to strict oversight.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: Balancing innovation with SOX/PCI compliance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Healthcare</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Rapid Growth</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">76%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Growing fast but concerned about PHI protection and clinical accuracy.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: HIPAA compliance and patient safety
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Insurance</CardTitle>
                <Badge variant="secondary" className="bg-[#F47F21]/10 text-[#F47F21] w-fit">Emerging Focus</Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#F47F21]">69%</div>
                  <p className="text-sm text-gray-400">AI adoption rate</p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Focus on algorithmic fairness in underwriting and claims processing.
                </p>
                <p className="text-xs text-gray-500">
                  Top challenge: Bias testing and state regulations
                </p>
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
              <h2 className="text-3xl font-bold mb-4">Get the Full 2025 Report</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Download our comprehensive 50-page report with detailed findings, methodology, and actionable recommendations for your organization.
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Download Full Report
                <Download className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                Includes executive summary, industry breakdowns, and governance framework templates
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType="state-of-enterprise"
      />
    </div>
  );
};

export default StateOfEnterprise;
