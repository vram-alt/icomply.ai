import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ContactFormModal from '@/components/ContactFormModal';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Shield, FileCheck, AlertTriangle, Clock, Zap, Brain } from 'lucide-react';

const iComply = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">iComply</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent compliance automation platform that uses AI to streamline regulatory 
              compliance, automate documentation, and ensure continuous adherence to standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Intelligent <span className="text-gradient">Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered compliance automation that learns, adapts, and scales with your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Documentation",
                description: "AI-generated compliance documentation and reports",
                icon: FileCheck,
                features: ["Auto-generated reports", "Policy templates", "Audit documentation", "Regulatory mapping"]
              },
              {
                title: "Continuous Monitoring",
                description: "24/7 intelligent monitoring of compliance status",
                icon: Shield,
                features: ["Real-time alerts", "Violation detection", "Risk scoring", "Trend analysis"]
              },
              {
                title: "Predictive Compliance",
                description: "AI predicts and prevents compliance issues",
                icon: Brain,
                features: ["Risk prediction", "Proactive alerts", "Pattern recognition", "Anomaly detection"]
              },
              {
                title: "Automated Workflows",
                description: "Streamlined compliance processes and approvals",
                icon: Zap,
                features: ["Workflow automation", "Approval routing", "Task assignment", "Progress tracking"]
              },
              {
                title: "Incident Response",
                description: "Rapid response to compliance violations",
                icon: AlertTriangle,
                features: ["Instant notifications", "Response protocols", "Escalation rules", "Resolution tracking"]
              },
              {
                title: "Regulatory Updates",
                description: "Stay current with changing regulations",
                icon: Clock,
                features: ["Regulation tracking", "Impact analysis", "Update notifications", "Compliance mapping"]
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 mb-4 text-accent" />
                    <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              AI-Powered <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI capabilities that make compliance effortless and intelligent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-display font-bold mb-8">Natural Language Processing</h3>
              <div className="space-y-6">
                {[
                  "Automatically extracts compliance requirements from regulations",
                  "Generates human-readable compliance reports and summaries",
                  "Interprets complex regulatory language into actionable items",
                  "Creates policy documents from regulatory requirements"
                ].map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-display font-bold mb-8">Machine Learning</h3>
              <div className="space-y-6">
                {[
                  "Learns from your compliance patterns and preferences",
                  "Predicts potential compliance issues before they occur",
                  "Adapts to your organization's specific requirements",
                  "Improves accuracy and efficiency over time"
                ].map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Measurable <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizations using iComply see immediate improvements in compliance efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "85%",
                label: "Reduction in Manual Work",
                description: "Automated compliance processes"
              },
              {
                metric: "95%",
                label: "Faster Report Generation",
                description: "AI-powered documentation"
              },
              {
                metric: "70%",
                label: "Fewer Compliance Issues",
                description: "Predictive monitoring"
              },
              {
                metric: "60%",
                label: "Cost Savings",
                description: "Reduced compliance overhead"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="glass border-2 border-white/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                    <h3 className="text-lg font-display font-bold mb-2">{stat.label}</h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Experience <span className="text-gradient">iComply</span> Intelligence
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how AI can transform your compliance operations and reduce manual overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-brand font-medium px-8 py-4 text-lg"
                onClick={() => setContactModalOpen(true)}
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        serviceType={null}
      />
    </div>
  );
};

export default iComply;


