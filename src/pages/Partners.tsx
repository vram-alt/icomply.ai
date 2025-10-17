import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Zap } from 'lucide-react';

const Partners = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Partner <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a comprehensive AI compliance ecosystem through strategic partnerships 
              and integrations with leading technology providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who - Partner Types */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Who</span> We Partner With
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic alliances with industry leaders to provide comprehensive AI governance solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cloud Providers",
                description: "AWS, Azure, GCP integrations for seamless deployment",
                icon: Shield,
                partners: ["AWS", "Microsoft Azure", "Google Cloud"]
              },
              {
                title: "AI Platforms",
                description: "Direct integrations with major AI and ML platforms",
                icon: Zap,
                partners: ["OpenAI", "Anthropic", "Hugging Face"]
              },
              {
                title: "Compliance Tools",
                description: "Integration with existing GRC and compliance systems",
                icon: CheckCircle,
                partners: ["ServiceNow", "Archer", "MetricStream"]
              },
              {
                title: "System Integrators",
                description: "Implementation and consulting partners worldwide",
                icon: Users,
                partners: ["Deloitte", "PwC", "KPMG"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <category.icon className="w-16 h-16 mx-auto mb-4 text-brand-2" />
                    <h3 className="text-xl font-display font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                    <div className="space-y-1">
                      {category.partners.map((partner) => (
                        <div key={partner} className="text-xs text-accent">{partner}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Partnership <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mutual value creation through strategic partnerships and collaborative innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-display font-bold mb-8">For Partners</h3>
              <div className="space-y-6">
                {[
                  "Access to cutting-edge AI compliance technology",
                  "Joint go-to-market opportunities",
                  "Technical integration and API access",
                  "Co-marketing and thought leadership",
                  "Revenue sharing and referral programs"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
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
              <h3 className="text-3xl font-display font-bold mb-8">For Customers</h3>
              <div className="space-y-6">
                {[
                  "Seamless integration with existing systems",
                  "Best-in-class implementation support",
                  "Comprehensive solution coverage",
                  "Reduced time to compliance",
                  "Lower total cost of ownership"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing ecosystem of partners and help shape the future of AI compliance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us at: <a href="mailto:hello@infocomply.com" className="text-brand-2 hover:underline font-medium">hello@infocomply.com</a>
            </p>
            <a href="mailto:hello@infocomply.com">
              <Button 
                size="lg" 
                className="bg-brand-2 hover:bg-brand-2/90 text-white font-medium px-8 py-4 text-lg"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partners;