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
  Cloud,
  Server,
  Users,
  Zap,
  Shield,
  Database
} from 'lucide-react';

const Platforms = () => {
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
            <span className="text-[#F47F21]">Platforms</span>
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
              Platform Integrations
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Leading Enterprise Platforms
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Native integrations with Salesforce, ServiceNow, and Workday. Extend your platform's AI capabilities with comprehensive governance, compliance, and monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore Platform Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep integrations with the enterprise platforms you already use
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Salesforce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/platforms/salesforce">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#00A1E0]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Cloud className="w-8 h-8 text-[#00A1E0]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Salesforce</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Enhance Einstein Trust Layer and Agentforce with advanced governance, custom guardrails, and comprehensive monitoring.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Agentforce action approval gates</li>
                          <li>• Data Cloud governance</li>
                          <li>• Trust Layer enhancement</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">Sales AI</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Service Agents</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Einstein</Badge>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-gray-500">
                          <strong>Integration:</strong> Native AppExchange app
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* ServiceNow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/platforms/servicenow">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#62D84E]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Server className="w-8 h-8 text-[#62D84E]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>ServiceNow</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Govern Now Assist, Virtual Agent, and AI Search with ITSM-specific guardrails and comprehensive quality monitoring.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• ITSM AI guardrails</li>
                          <li>• CMDB access controls</li>
                          <li>• Incident response validation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">Now Assist</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Virtual Agent</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">AI Search</Badge>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-gray-500">
                          <strong>Integration:</strong> ServiceNow App Store
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Workday */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/platforms/workday">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#EB7C00]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-[#EB7C00]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Workday</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Ensure fair, compliant AI in HCM and Financial Management with bias detection, data protection, and EEOC compliance.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Features</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• HR AI fairness testing</li>
                          <li>• Employee data protection</li>
                          <li>• Financial AI monitoring</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">Recruiting</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Performance</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Finance</Badge>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-gray-500">
                          <strong>Integration:</strong> Workday Marketplace
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Platform-Native */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Platform-Native Integration Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep integration means better governance and faster time to value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Zero Data Movement</h3>
                <p className="text-gray-300">
                  All governance happens within your platform. No data leaves your environment, ensuring maximum security and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-gray-300">
                  Native integration enables real-time guardrails and monitoring, preventing issues before they impact users or compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Platform-Aware</h3>
                <p className="text-gray-300">
                  Understand platform-specific AI features, data models, and workflows to provide governance that actually works.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                      <span className="text-[#F47F21] font-bold">1</span>
                    </div>
                    Quick Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Install from your platform's marketplace and configure in minutes. No complex infrastructure or data migration required.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                      <span className="text-[#F47F21] font-bold">2</span>
                    </div>
                    Seamless Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Governance controls appear natively in your platform UI. Users don't need to learn a new system or leave their workflow.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                      <span className="text-[#F47F21] font-bold">3</span>
                    </div>
                    Complete Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Monitor all AI activity across your platform from a single dashboard. Track compliance, performance, and usage in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-[#F47F21]/20 rounded flex items-center justify-center mr-3">
                      <span className="text-[#F47F21] font-bold">4</span>
                    </div>
                    Expert Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our team includes platform-certified experts who understand your specific implementation and can optimize governance for your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-[#F47F21]/10 to-[#FF6B35]/10 border-[#F47F21]/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Govern Your Platform's AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see InfoComply in action on your platform. Quick setup, immediate value.
              </p>
              <Button 
                size="lg" 
                className="bg-[#F47F21] hover:bg-[#F47F21]/90 text-white"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule Platform Demo
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
        serviceType="platforms"
      />
    </div>
  );
};

export default Platforms;

