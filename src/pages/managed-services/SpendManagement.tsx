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
  DollarSign, 
  TrendingDown, 
  CheckCircle, 
  BarChart3,
  Users,
  ArrowRight,
  Target,
  Zap,
  Bot,
  Settings,
  AlertTriangle,
  PieChart
} from 'lucide-react';

const SpendManagement = () => {
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
            <span className="text-[#F47F21]">AI Spend Management</span>
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
                Spend Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert management of AI costs across departments, agents, and the entire GenAI landscape with model optimization and intelligent budget controls.
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
            <h2 className="text-3xl font-bold mb-4">Comprehensive Cost Control</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track, analyze, and optimize AI spending across every dimension of your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Users className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Department-Based Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cost allocation by department</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Budget limits and alerts</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Usage trend analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Chargeback reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Bot className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Agent-Based Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Per-agent cost tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> ROI measurement</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Performance vs. cost ratio</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Optimization recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <PieChart className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>GenAI Landscape View</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cross-platform spend visibility</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Provider comparison</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Total AI investment tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Strategic planning insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                <CardTitle>Model Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Model selection guidance</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Cost-performance tuning</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Token usage optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> Caching strategy implementation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Optimization Strategies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Proven Cost Optimization Strategies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple approaches to reduce spend while maintaining or improving AI quality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Right-Sizing Models</h3>
                    <p className="text-gray-300 mb-4">
                      Many workloads don't need the most expensive models. We analyze your use cases and recommend optimal model choices that balance cost and quality.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">60%</div>
                        <div className="text-xs text-gray-400">Average savings from model optimization</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">Same</div>
                        <div className="text-xs text-gray-400">Quality maintained or improved</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded text-center">
                        <div className="text-2xl font-bold text-[#F47F21]">Faster</div>
                        <div className="text-xs text-gray-400">Often improved response times</div>
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
                    <Settings className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Prompt Engineering</h3>
                    <p className="text-gray-300 mb-4">
                      Well-crafted prompts reduce token usage, improve response quality, and require fewer retries—directly impacting costs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Optimize prompt length while maintaining effectiveness</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Implement dynamic context inclusion based on need</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Reduce retry rates through better instruction clarity</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Smart Caching</h3>
                    <p className="text-gray-300 mb-4">
                      Cache frequently used responses, context, and intermediate results to dramatically reduce API calls and associated costs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/20 p-4 rounded">
                        <div className="font-semibold mb-2">Response Caching</div>
                        <p className="text-sm text-gray-400">Store common queries and responses for instant, zero-cost retrieval</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded">
                        <div className="font-semibold mb-2">Context Caching</div>
                        <p className="text-sm text-gray-400">Reuse expensive context across multiple interactions</p>
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
                    <AlertTriangle className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Budget Controls & Alerts</h3>
                    <p className="text-gray-300 mb-4">
                      Prevent budget overruns with proactive monitoring, alerts, and automatic throttling when limits are approached.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Department and project-level budget caps</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Multi-threshold alerting (75%, 90%, 100%)</span></li>
                      <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#F47F21] mr-2 mt-0.5 flex-shrink-0" /> <span>Automatic rate limiting to prevent overspend</span></li>
                    </ul>
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
            <h2 className="text-3xl font-bold mb-4">Why Expert Management Saves Money</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI cost optimization requires deep technical knowledge and continuous attention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our experts analyze spending patterns across hundreds of deployments, identifying optimization opportunities that internal teams miss. We know what works and can implement proven cost-saving strategies immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Proactive Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Rather than reacting to high bills, we continuously monitor and optimize spend. Model prices change, new efficient models launch, and usage patterns shift—we stay ahead of these changes to keep costs down.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Vendor Neutrality</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We have no allegiance to specific AI providers. Our recommendations are purely based on what's best for your use case and budget, ensuring you get optimal value regardless of vendor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F47F21]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#F47F21]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">ROI Focus</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We track not just spend, but value delivered. Our reporting shows which AI investments are paying off and which need optimization or elimination, ensuring every dollar contributes to business outcomes.
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">40-60%</div>
                <div className="text-lg font-semibold mb-2">Cost Reduction</div>
                <p className="text-sm text-gray-300">Average savings achieved through optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Visibility</div>
                <p className="text-sm text-gray-300">Complete transparency into all AI spending</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F47F21]/20 to-[#FF6B35]/20 border-[#F47F21]/50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#F47F21] mb-2">3-6mo</div>
                <div className="text-lg font-semibold mb-2">ROI Timeline</div>
                <p className="text-sm text-gray-300">Service pays for itself through savings</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Typical Cost Breakdown & Savings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Model API Costs</div>
                      <div className="text-sm text-gray-400">OpenAI, Anthropic, Azure, etc.</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">Before: 70%</div>
                      <div className="text-lg font-bold text-green-400">After: 35%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Infrastructure</div>
                      <div className="text-sm text-gray-400">Hosting, vector DBs, caching</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">Before: 20%</div>
                      <div className="text-lg font-bold text-green-400">After: 15%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Wasted Spend</div>
                      <div className="text-sm text-gray-400">Failed requests, inefficient prompts</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">Before: 10%</div>
                      <div className="text-lg font-bold text-green-400">After: 2%</div>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold mb-4">Reduce Your AI Spend by 40-60%</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts optimize your AI costs while maintaining or improving quality
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Get Free Cost Analysis
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
        serviceType="managed-spend"
      />
    </div>
  );
};

export default SpendManagement;

