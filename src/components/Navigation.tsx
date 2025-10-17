import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isAppsBeeRoute = location.pathname.includes('/tools/appsbee');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-2xl text-gradient hover:scale-105 transition-transform flex items-center gap-3">
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
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setIsServicesOpen(true)}
                 onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center text-foreground hover:text-brand-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass border-2 border-white/20 rounded-xl p-4 shadow-2xl z-50"
                  >
                    <Link to="/services" className="block p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/10 mb-2">
                      <div className="font-medium text-foreground">All Services</div>
                      <div className="text-sm text-muted-foreground">Complete services overview</div>
                    </Link>
                    <Link to="/services/assessment" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-foreground">Assessment</div>
                      <div className="text-sm text-muted-foreground">AI compliance evaluation</div>
                    </Link>
                    <Link to="/services/managed-services" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-foreground">Managed Services</div>
                      <div className="text-sm text-muted-foreground">24/7 monitoring & oversight</div>
                    </Link>
                    <Link to="/services/audit-readiness" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
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
                <button className="flex items-center text-foreground hover:text-brand-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass border-2 border-white/20 rounded-xl p-4 shadow-2xl z-50"
                  >
                    <Link to="/tools/appsbee" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-foreground">AppsBee</div>
                      <div className="text-sm text-muted-foreground">Enterprise Apps&AI Governance and management software</div>
                    </Link>
                    <Link to="/tools/icomply" className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="font-medium text-foreground">iComply</div>
                      <div className="text-sm text-muted-foreground">Intelligent compliance automation</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/partners" className="text-foreground hover:text-brand-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              Partners
            </Link>
            {/* Resources - Disabled for now
            <Link to="/resources/state-of-enterprise" className="text-foreground hover:text-brand-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
              Resources
            </Link>
            */}
            <Link to="/contact" className="text-foreground hover:text-brand-2 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium">
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
              className="md:hidden border-t border-white/10 py-4"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-muted-foreground text-sm font-medium">Services</div>
                  <Link to="/services" className="block pl-4 text-foreground hover:text-brand-2 transition-colors font-medium">
                    All Services
                  </Link>
                  <Link to="/services/assessment" className="block pl-4 text-foreground hover:text-brand-2 transition-colors">
                    Assessment
                  </Link>
                  <Link to="/services/managed-services" className="block pl-4 text-foreground hover:text-brand-2 transition-colors">
                    Managed Services
                  </Link>
                  <Link to="/services/audit-readiness" className="block pl-4 text-foreground hover:text-brand-2 transition-colors">
                    Audit Readiness
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-muted-foreground text-sm font-medium">Tools</div>
                  <Link to="/tools/appsbee" className="block pl-4 text-foreground hover:text-brand-2 transition-colors">
                    AppsBee
                  </Link>
                  <Link to="/tools/icomply" className="block pl-4 text-foreground hover:text-brand-2 transition-colors">
                    iComply
                  </Link>
                </div>
                <Link to="/partners" className="block text-foreground hover:text-brand-2 transition-colors">
                  Partners
                </Link>
                <Link to="/contact" className="block text-foreground hover:text-brand-2 transition-colors">
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