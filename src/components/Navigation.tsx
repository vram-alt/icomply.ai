import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isAppsBeeRoute = location.pathname.includes('/tools/appsbee');

  return (
    <nav className="glass fixed left-0 right-0 top-0 z-50 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="h-18 flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="text-gradient flex items-center gap-3 font-display text-2xl font-bold transition-transform hover:scale-105">
            {isAppsBeeRoute && (
              <img 
                src="/abee-logo.png" 
                alt="AppsBee Logo" 
                className="h-10 w-auto object-contain"
              />
            )}
            <span>InfoComply.ai</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-4 md:flex">
            {/* UseCases Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsUseCasesOpen(true)}
                 onMouseLeave={() => setIsUseCasesOpen(false)}>
              <button className="flex items-center rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
                UseCases <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isUseCasesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="glass absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border-2 border-white/20 p-4 shadow-2xl"
                  >
                    <div className="space-y-4">
                      {/* Industries */}
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground"><Link to="/industries/">By Industry</Link></h4>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/industries/finance" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              Finance
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/healthcare" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              Healthcare
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/insurance" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              Insurance
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* By Regulations */}
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground"><Link to="/platforms/">By Platform</Link></h4>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/platforms/salesforce" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              Salesforce
                            </Link>
                          </li>
                          <li>
                            <Link to="/platforms/servicenow" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              ServiceNow
                            </Link>
                          </li>
                          <li>
                            <Link to="/platforms/workday" className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                              Workday
                            </Link>
                          </li>
                        </ul>
                      </div>                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Services Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsServicesOpen(true)}
                 onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="glass absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 p-4 shadow-2xl"
                  >
                    <Link to="/services" className="mb-2 block rounded-lg border-b border-white/10 p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">All Services</div>
                      <div className="text-sm text-muted-foreground">Complete services overview</div>
                    </Link>
                    <Link to="/services/assessment" className="block rounded-lg p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">Assessment</div>
                      <div className="text-sm text-muted-foreground">AI compliance evaluation</div>
                    </Link>
                    <Link to="/services/managed-services" className="block rounded-lg p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">Managed Services</div>
                      <div className="text-sm text-muted-foreground">24/7 monitoring & oversight</div>
                    </Link>
                    <Link to="/services/audit-readiness" className="block rounded-lg p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">Audit Readiness</div>
                      <div className="text-sm text-muted-foreground">Complete audit preparation</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tools Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsProductsOpen(true)}
                 onMouseLeave={() => setIsProductsOpen(false)}>
                <button className="flex items-center rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="glass absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border-2 border-white/20 p-4 shadow-2xl"
                  >
                    <Link to="/tools/appsbee" className="block rounded-lg p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">AppsBee</div>
                      <div className="text-sm text-muted-foreground">Enterprise Apps&AI Governance and management software</div>
                    </Link>
                    <Link to="/tools/icomply" className="block rounded-lg p-3 transition-colors hover:bg-white/5">
                      <div className="font-medium text-foreground">iComply</div>
                      <div className="text-sm text-muted-foreground">Intelligent compliance automation</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/partners" className="rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
              Partners
            </Link>
            {/* Resources - Disabled for now
            <Link to="/resources/state-of-enterprise" className="rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
              Resources
            </Link>
            */}
            <Link to="/contact" className="rounded-lg px-3 py-2 font-medium text-foreground transition-colors hover:bg-white/5 hover:text-brand-2">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 py-4 md:hidden"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">UseCases</div>
                    <div className="space-y-2 pl-4">
                    <div className="text-sm font-medium text-muted-foreground">Industries</div>
                    <Link to="/industries/finance" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      Finance
                    </Link>
                    <Link to="/industries/healthcare" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      Healthcare
                    </Link>
                    <Link to="/industries/insurance" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      Insurance
                    </Link>
                  </div>
                  <div className="space-y-2 pl-4">
                    <div className="text-sm font-medium text-muted-foreground">Platforms</div>
                    <Link to="/platforms/salesforce" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      Salesforce
                    </Link>
                    <Link to="/platforms/servicenow" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      ServiceNow
                    </Link>
                    <Link to="/platforms/workday" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                      Workday
                    </Link>
                  </div>
                  {/* <Link to="/usecases/legal" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Legal
                  </Link>
                  <Link to="/usecases/sales" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Sales
                  </Link>
                  <Link to="/usecases/marketing" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Marketing
                  </Link> */}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Services</div>
                  <Link to="/services" className="block pl-4 font-medium text-foreground transition-colors hover:text-brand-2">
                    All Services
                  </Link>
                  <Link to="/services/assessment" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Assessment
                  </Link>
                  <Link to="/services/managed-services" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Managed Services
                  </Link>
                  <Link to="/services/audit-readiness" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    Audit Readiness
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Tools</div>
                  <Link to="/tools/appsbee" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    AppsBee
                  </Link>
                  <Link to="/tools/icomply" className="block pl-4 text-foreground transition-colors hover:text-brand-2">
                    iComply
                  </Link>
                </div>
                <Link to="/partners" className="block text-foreground transition-colors hover:text-brand-2">
                  Partners
                </Link>
                <Link to="/contact" className="block text-foreground transition-colors hover:text-brand-2">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;