const Footer = () => {
  return (
    <footer className="bg-card/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4">InfoComply.ai</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Leading AI compliance and governance platform for enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/tools/appsbee" className="hover:text-foreground transition-colors">AppsBee</a></li>
              <li><a href="/tools/icomply" className="hover:text-foreground transition-colors">iComply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/services/assessment" className="hover:text-foreground transition-colors">Assessment</a></li>
              <li><a href="/services/managed-services" className="hover:text-foreground transition-colors">Managed Services</a></li>
              <li><a href="/services/audit-readiness" className="hover:text-foreground transition-colors">Audit Readiness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Industries</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/industries/finance" className="hover:text-foreground transition-colors">Finance</a></li>
              <li><a href="/industries/healthcare" className="hover:text-foreground transition-colors">Healthcare</a></li>
              <li><a href="/industries/insurance" className="hover:text-foreground transition-colors">Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/platforms/salesforce" className="hover:text-foreground transition-colors">Salesforce</a></li>
              <li><a href="/platforms/servicenow" className="hover:text-foreground transition-colors">ServiceNow</a></li>
              <li><a href="/platforms/workday" className="hover:text-foreground transition-colors">Workday</a></li>
            </ul>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 mt-6 sm:mt-8">
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Managed Services</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/managed-services/guardrail-monitoring" className="hover:text-foreground transition-colors">Guardrail Monitoring</a></li>
              <li><a href="/managed-services/operational-checklist" className="hover:text-foreground transition-colors">Operational Checklist</a></li>
              <li><a href="/managed-services/data-governance" className="hover:text-foreground transition-colors">Data Governance</a></li>
              <li><a href="/managed-services/continuous-monitoring" className="hover:text-foreground transition-colors">Continuous Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-transparent">Managed Services Continued</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/managed-services/spend-management" className="hover:text-foreground transition-colors">AI Spend Management</a></li>
              <li><a href="/managed-services/change-management" className="hover:text-foreground transition-colors">AI Change Management</a></li>
              <li><a href="/managed-services/audit-readiness" className="hover:text-foreground transition-colors">AI Audit Readiness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="https://infocomply.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/partners" className="hover:text-foreground transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li><a href="/resources/state-of-enterprise" className="hover:text-foreground transition-colors">State of Enterprise</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors">All Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; 2025 InfoComply Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

