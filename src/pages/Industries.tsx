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
  Building2,
  Heart,
  Shield,
  TrendingUp,
  Scale,
  Target
} from 'lucide-react';

const Industries = () => {
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
            <span className="text-[#F47F21]">Industries</span>
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
              Industry Solutions
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI Governance for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
                Every Industry
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Industry-specific AI governance solutions tailored to your regulatory requirements, compliance frameworks, and unique operational challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep expertise in the most regulated and AI-intensive industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Finance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/industries/finance">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Financial Services</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Navigate complex financial regulations while deploying AI for trading, underwriting, and customer service.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Challenges</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Model risk management (SR 11-7)</li>
                          <li>• Fair lending compliance</li>
                          <li>• SOX, PCI-DSS, SEC regulations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">SOX</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">PCI-DSS</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">SEC</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Basel III</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/industries/healthcare">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Healthcare</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Deploy AI in clinical settings while protecting PHI and ensuring patient safety under HIPAA and FDA guidelines.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Challenges</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• PHI protection and consent</li>
                          <li>• Clinical decision accuracy</li>
                          <li>• FDA medical device rules</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">HIPAA</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">HITECH</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">FDA</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">ISO 27001</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/industries/insurance">
                <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10 h-full hover:border-[#F47F21]/50 hover:scale-105 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#F47F21]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-[#F47F21]" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Insurance</span>
                      <ArrowRight className="w-5 h-5 text-[#F47F21] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Ensure fair, accurate AI in underwriting and claims while meeting state insurance regulations and avoiding bias.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Key Challenges</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Algorithmic fairness testing</li>
                          <li>• State-by-state compliance</li>
                          <li>• Claims accuracy monitoring</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F47F21] mb-2">Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-white/5 text-xs">NAIC</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">FCRA</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">State Laws</Badge>
                          <Badge variant="secondary" className="bg-white/5 text-xs">Solvency II</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Industry-Specific Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generic AI governance doesn't work in regulated industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Unique Regulations</h3>
                <p className="text-gray-300">
                  Each industry has specific regulations, frameworks, and compliance requirements that demand specialized expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Domain Knowledge</h3>
                <p className="text-gray-300">
                  Understanding industry workflows, risks, and terminology is critical for effective AI governance and monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-[#F47F21] mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-gray-300">
                  Our team includes former regulators, auditors, and industry practitioners with deep expertise in your sector.
                </p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Industry Needs?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our industry experts to explore how InfoComply can help you deploy AI safely and compliantly.
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
        serviceType="industries"
      />
    </div>
  );
};

export default Industries;

