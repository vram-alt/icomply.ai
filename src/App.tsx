import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/NewIndex";
import Original from "./pages/Original";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import AppsBee from "./pages/tools/AppsBeeInteractive";
import IComply from "./pages/tools/iComplyNew";
import AdvisoryArchitecture from "./pages/services/AdvisoryArchitecture";
import ManagedServices from "./pages/services/ManagedServices";
import Assessment from "./pages/services/Assessment";
import AuditReadiness from "./pages/services/AuditReadiness";
import Partners from "./pages/Partners";
import StateOfEnterprise from "./pages/resources/StateOfEnterprise";
import Contact from "./pages/Contact";
import VideoPresentation from "./pages/VideoPresentation"; // Demo only - not pushed to git
// Managed Services Use Cases
import GuardrailMonitoring from "./pages/managed-services/GuardrailMonitoring";
import OperationalChecklist from "./pages/managed-services/OperationalChecklist";
import DataGovernance from "./pages/managed-services/DataGovernance";
import ContinuousMonitoring from "./pages/managed-services/ContinuousMonitoring";
import SpendManagement from "./pages/managed-services/SpendManagement";
import ChangeManagement from "./pages/managed-services/ChangeManagement";
import ManagedAuditReadiness from "./pages/managed-services/AuditReadiness";
// Industry Pages
import Industries from "./pages/Industries";
import Finance from "./pages/industries/Finance";
import Healthcare from "./pages/industries/Healthcare";
import Insurance from "./pages/industries/Insurance";
// Platform Pages
import Platforms from "./pages/Platforms";
import Salesforce from "./pages/platforms/Salesforce";
import ServiceNow from "./pages/platforms/ServiceNow";
import Workday from "./pages/platforms/Workday";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Original />} />
          <Route path="/new-index" element={<Index />} />
          <Route path="/video-presentation" element={<VideoPresentation />} /> {/* Demo only - not pushed to git */}
          <Route path="/services" element={<Services />} />
          <Route path="/tools/appsbee" element={<AppsBee />} />
            <Route path="/tools/icomply" element={<IComply />} />
          <Route path="/services/advisory-architecture" element={<AdvisoryArchitecture />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/assessment" element={<Assessment />} />
          <Route path="/services/audit-readiness" element={<AuditReadiness />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources/state-of-enterprise" element={<StateOfEnterprise />} />
          <Route path="/contact" element={<Contact />} />
          {/* Managed Services Use Cases */}
          <Route path="/managed-services/guardrail-monitoring" element={<GuardrailMonitoring />} />
          <Route path="/managed-services/operational-checklist" element={<OperationalChecklist />} />
          <Route path="/managed-services/data-governance" element={<DataGovernance />} />
          <Route path="/managed-services/continuous-monitoring" element={<ContinuousMonitoring />} />
          <Route path="/managed-services/spend-management" element={<SpendManagement />} />
          <Route path="/managed-services/change-management" element={<ChangeManagement />} />
          <Route path="/managed-services/audit-readiness" element={<ManagedAuditReadiness />} />
          {/* Industry Pages */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          {/* Platform Pages */}
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/platforms/salesforce" element={<Salesforce />} />
          <Route path="/platforms/servicenow" element={<ServiceNow />} />
          <Route path="/platforms/workday" element={<Workday />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
