import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SplitRevealHero from '@/components/SplitRevealHero';
import Apps360Wheel from '@/components/Apps360Wheel';
import PersonaSwitch from '@/components/PersonaSwitch';
import AutoDashboard from '@/components/AutoDashboard';
import ROIEstimator from '@/components/ROIEstimator';
import KPIBadge from '@/components/KPIBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Shield, DollarSign, Users, Play } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <SplitRevealHero />

      {/* Who Are We Section */}
      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Who <span className="text-gradient">Are We</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              InfoComply.ai is the leading AI compliance and governance platform, helping enterprises 
              navigate the complex landscape of AI regulation and risk management. We provide the tools, 
              expertise, and frameworks needed to ensure your AI initiatives remain compliant, secure, 
              and aligned with business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compliance Experts',
                description: 'Deep expertise in AI regulations, GDPR, SOX, and emerging compliance frameworks',
                icon: Shield
              },
              {
                title: 'Technology Leaders',
                description: 'Cutting-edge platform built for enterprise-scale AI governance and monitoring',
                icon: TrendingUp
              },
              {
                title: 'Trusted Partners',
                description: 'Working with Fortune 500 companies to build responsible AI governance programs',
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-8 text-center">
                    <item.icon className="w-16 h-16 mx-auto mb-6 text-brand-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <h3 className="font-display font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now - Problem Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              The <span className="text-gradient">State of Enterprise</span> AI Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprises are deploying AI at unprecedented scale, but regulatory compliance 
              and risk management are falling behind. The cost of non-compliance is growing exponentially.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Shield, title: 'Regulatory Risk', desc: 'Non-compliance with GDPR, AI Act, and emerging regulations', color: 'text-red-400' },
              { icon: CheckCircle, title: 'Audit Failures', desc: 'Inability to demonstrate AI governance and controls', color: 'text-orange-400' },
              { icon: DollarSign, title: 'Compliance Costs', desc: 'Manual processes and reactive compliance measures', color: 'text-yellow-400' },
              { icon: TrendingUp, title: 'Operational Risk', desc: 'AI systems operating without proper oversight', color: 'text-red-400' }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8 text-center">
                    <problem.icon className={`w-16 h-16 mx-auto mb-6 ${problem.color} drop-shadow-lg`} />
                    <h3 className="font-display font-bold text-xl mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{problem.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-4 glass rounded-2xl p-6 border border-white/10">
              <div className="text-muted-foreground text-sm">The Problem:</div>
              <div className="text-lg font-medium">Discrete Clouds with No Central Governance Platform</div>
              <ArrowRight className="w-5 h-5 text-accent animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section - Governance 360 */}
      <section id="governance-360-tools" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two powerful AI compliance and governance tools designed to meet different 
              organizational needs and use cases.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* AppsBee Tool */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-xl hover:shadow-2xl transition-all group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-display font-bold text-brand-2 mb-4">AppsBee</h3>
                    <p className="text-xl text-muted-foreground">
                      Comprehensive AI governance and compliance platform
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "AI Agent orchestration and management",
                      "Real-time performance monitoring",
                      "Complete governance oversight",
                      "Enterprise-scale deployment"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/tools/appsbee">
                    <Button 
                      className="w-full bg-brand-2 hover:bg-brand-2/90 text-white font-medium py-3 group-hover:scale-105 transition-transform"
                      size="lg"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Explore AppsBee
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* iComply Tool */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-xl hover:shadow-2xl transition-all group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-display font-bold text-accent mb-4">iComply</h3>
                    <p className="text-xl text-muted-foreground">
                      Intelligent compliance automation platform
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "AI-powered compliance automation",
                      "Smart documentation generation",
                      "Predictive risk assessment",
                      "Continuous regulatory monitoring"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/tools/icomply">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-brand font-medium py-3 group-hover:scale-105 transition-transform"
                      size="lg"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Discover iComply
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Pivot Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Services We <span className="text-gradient">Provide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI compliance and governance services designed to meet your organization 
              at every stage of your AI maturity journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-clickable glass border-2 border-white/20 h-full group hover:border-brand-2/50 transition-all duration-300 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-center text-brand-2">Assessment</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Comprehensive evaluation of your current AI compliance posture and risk exposure.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">What You Get:</h4>
                    <ul className="space-y-2">
                      {[
                        'AI inventory and risk assessment',
                        'Compliance gap analysis',
                        'Regulatory readiness evaluation',
                        'Prioritized remediation roadmap'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-brand-2 hover:bg-brand-2/90 text-white font-medium group-hover:scale-105 transition-transform"
                    size="lg"
                  >
                    Start Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Managed Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="card-clickable glass border-2 border-white/20 h-full group hover:border-accent/50 transition-all duration-300 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-center text-accent">Managed Services</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Ongoing monitoring, compliance management, and governance oversight.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">What You Get:</h4>
                    <ul className="space-y-2">
                      {[
                        '24/7 compliance monitoring',
                        'Automated policy enforcement',
                        'Risk incident management',
                        'Regulatory change tracking'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-brand font-medium group-hover:scale-105 transition-transform"
                    size="lg"
                  >
                    Get Managed Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Audit Readiness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="card-clickable glass border-2 border-white/20 h-full group hover:border-green-500/50 transition-all duration-300 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-center text-green-400">Audit Readiness</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Complete audit preparation and documentation for regulatory compliance.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">What You Get:</h4>
                    <ul className="space-y-2">
                      {[
                        'Audit trail documentation',
                        'Compliance evidence collection',
                        'Regulatory reporting automation',
                        'Audit support and representation'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-green-500 hover:bg-green-500/90 text-white font-medium group-hover:scale-105 transition-transform"
                    size="lg"
                  >
                    Prepare for Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
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
              Our <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven, systematic approach to AI compliance and governance that scales 
              with your organization's needs and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Comprehensive AI inventory and risk assessment across your organization",
                color: "text-blue-400"
              },
              {
                step: "02", 
                title: "Assess",
                description: "Gap analysis against regulatory requirements and industry standards",
                color: "text-green-400"
              },
              {
                step: "03",
                title: "Implement",
                description: "Deploy governance frameworks, policies, and monitoring systems",
                color: "text-yellow-400"
              },
              {
                step: "04",
                title: "Monitor",
                description: "Continuous compliance monitoring and automated reporting",
                color: "text-purple-400"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-6xl font-bold ${item.color} mb-4 opacity-80`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Dashboard Section */}
      <section id="demo-dashboard" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <AutoDashboard />
          </motion.div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Benefits for <span className="text-gradient">Every Stakeholder</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From IT leadership to compliance officers, InfoComply.ai delivers value 
              across your entire organization.
            </p>
          </motion.div>

          <PersonaSwitch />
        </div>
      </section>

      {/* Our Advantage Section */}
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
              Our <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why leading enterprises choose InfoComply.ai for their AI governance and compliance needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Regulatory Expertise",
                description: "Our team includes former regulators, compliance officers, and AI ethics experts with decades of combined experience.",
                icon: Shield,
                stats: "50+ Years Combined Experience"
              },
              {
                title: "Enterprise-Scale Technology",
                description: "Built for Fortune 500 companies with enterprise-grade security, scalability, and integration capabilities.",
                icon: TrendingUp,
                stats: "99.9% Uptime SLA"
              },
              {
                title: "Proven Track Record",
                description: "Successfully helped organizations achieve compliance across multiple jurisdictions and regulatory frameworks.",
                icon: CheckCircle,
                stats: "100% Audit Success Rate"
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-8">
                    <advantage.icon className="w-16 h-16 mb-6 text-brand-2 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-display font-bold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{advantage.description}</p>
                    <div className="text-accent font-bold text-lg">{advantage.stats}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Estimator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ROIEstimator />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Trusted by <span className="text-gradient">Forward-Thinking</span> Enterprises
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { metric: '30%', label: 'Average spend reduction' },
              { metric: '94%', label: 'Compliance score improvement' },
              { metric: '100%', label: 'Audit readiness achieved' },
              { metric: '67%', label: 'Risk incidents prevented' }
            ].map((stat, index) => (
              <KPIBadge
                key={stat.label}
                label={stat.label}
                value={stat.metric}
                trend="up"
                className="text-center"
              />
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-40">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-xs text-muted-foreground">Partner {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the latest developments in AI compliance, governance, and regulatory changes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EU AI Act: What Enterprises Need to Know",
                excerpt: "A comprehensive guide to understanding and preparing for the EU AI Act requirements...",
                date: "Dec 15, 2024",
                readTime: "8 min read",
                category: "Regulation"
              },
              {
                title: "Building an AI Governance Framework",
                excerpt: "Step-by-step approach to establishing effective AI governance in your organization...",
                date: "Dec 10, 2024",
                readTime: "12 min read",
                category: "Governance"
              },
              {
                title: "AI Risk Assessment Best Practices",
                excerpt: "Learn how to identify, assess, and mitigate risks in your AI systems effectively...",
                date: "Dec 5, 2024",
                readTime: "10 min read",
                category: "Risk Management"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-brand-2/20 text-brand-2 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-2 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              size="lg" 
              className="border-brand-2 text-brand-2 hover:bg-brand-2 hover:text-white font-medium px-8 py-4 text-lg"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
              AI Agents will define the future.
              <br />
              <span className="text-gradient">Governance will define who survives it.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't let ungoverned AI put your business at risk. Start your governance journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-8 py-4 text-lg"
              >
                Start with Advisory
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-brand px-8 py-4 text-lg"
              >
                Talk to an Expert
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
