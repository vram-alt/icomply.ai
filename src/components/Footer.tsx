const Footer = () => {
  return (
    <footer className="bg-card/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="mb-3 font-display text-lg font-bold sm:mb-4 sm:text-xl">InfoComply.ai</h3>
            <p className="mb-3 text-sm text-muted-foreground sm:mb-4 sm:text-base">
              Leading AI compliance and governance platform for enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/tools/appsbee" className="transition-colors hover:text-foreground">AppsBee</a></li>
              <li><a href="/tools/icomply" className="transition-colors hover:text-foreground">iComply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/services/assessment" className="transition-colors hover:text-foreground">Assessment</a></li>
              <li><a href="/services/managed-services" className="transition-colors hover:text-foreground">Managed Services</a></li>
              <li><a href="/services/audit-readiness" className="transition-colors hover:text-foreground">Audit Readiness</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/industries/finance" className="transition-colors hover:text-foreground">Finance</a></li>
              <li><a href="/industries/healthcare" className="transition-colors hover:text-foreground">Healthcare</a></li>
              <li><a href="/industries/insurance" className="transition-colors hover:text-foreground">Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Platforms</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/platforms/salesforce" className="transition-colors hover:text-foreground">Salesforce</a></li>
              <li><a href="/platforms/servicenow" className="transition-colors hover:text-foreground">ServiceNow</a></li>
              <li><a href="/platforms/workday" className="transition-colors hover:text-foreground">Workday</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="mb-6 mt-6 grid gap-6 sm:mb-8 sm:mt-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Managed Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/managed-services/guardrail-monitoring" className="transition-colors hover:text-foreground">Guardrail Monitoring</a></li>
              <li><a href="/managed-services/operational-checklist" className="transition-colors hover:text-foreground">Operational Checklist</a></li>
              <li><a href="/managed-services/data-governance" className="transition-colors hover:text-foreground">Data Governance</a></li>
              <li><a href="/managed-services/continuous-monitoring" className="transition-colors hover:text-foreground">Continuous Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-transparent sm:mb-4 sm:text-base">Managed Services Continued</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/managed-services/spend-management" className="transition-colors hover:text-foreground">AI Spend Management</a></li>
              <li><a href="/managed-services/change-management" className="transition-colors hover:text-foreground">AI Change Management</a></li>
              <li><a href="/managed-services/audit-readiness" className="transition-colors hover:text-foreground">AI Audit Readiness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="https://infocomply.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">About</a></li>
              <li><a href="/contact" className="transition-colors hover:text-foreground">Contact</a></li>
              <li><a href="/partners" className="transition-colors hover:text-foreground">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li><a href="/resources/state-of-enterprise" className="transition-colors hover:text-foreground">State of Enterprise</a></li>
              <li><a href="/services" className="transition-colors hover:text-foreground">All Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm text-muted-foreground sm:pt-8 sm:text-base">
          <p>&copy; 2025 InfoComply Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

