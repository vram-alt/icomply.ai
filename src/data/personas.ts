export interface PersonaBenefit {
  title: string;
  description: string;
  metric?: string;
  impact: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
  primaryConcerns: string[];
  benefits: PersonaBenefit[];
  metrics: {
    [key: string]: string;
  };
}

export const personas: Persona[] = [
  {
    id: 'it-lead',
    name: 'IT Lead',
    role: 'IT Leadership',
    description: 'Responsible for application portfolio management, security, and operational efficiency',
    primaryConcerns: [
      'Application sprawl and shadow IT',
      'Security vulnerabilities and compliance',
      'Cost optimization and budget management',
      'Operational efficiency and uptime'
    ],
    benefits: [
      {
        title: 'Centralized App Governance',
        description: 'Single pane of glass for all AI agents and SaaS applications across the enterprise',
        metric: '87%',
        impact: 'Reduction in discovery time for new applications'
      },
      {
        title: 'Automated Security Monitoring',
        description: 'Real-time detection of security policy violations and compliance gaps',
        metric: '94%',
        impact: 'Faster threat detection and response'
      },
      {
        title: 'Cost Visibility & Control',
        description: 'Granular cost tracking with automated alerts for spending anomalies',
        metric: '32%',
        impact: 'Average reduction in SaaS spend'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamlined change management and release coordination',
        metric: '78%',
        impact: 'Reduction in deployment-related incidents'
      }
    ],
    metrics: {
      'Apps Under Management': '247',
      'Security Incidents Prevented': '156',
      'Cost Savings This Quarter': '$340K',
      'Compliance Score': '94%'
    }
  },
  {
    id: 'cio',
    name: 'CIO',
    role: 'Chief Information Officer',
    description: 'Strategic technology leadership focused on business alignment and digital transformation',
    primaryConcerns: [
      'Strategic alignment of technology investments',
      'Enterprise risk management',
      'Digital transformation ROI',
      'Regulatory compliance and governance'
    ],
    benefits: [
      {
        title: 'Strategic Portfolio Insights',
        description: 'Executive dashboard showing technology investment performance and business impact',
        metric: '89%',
        impact: 'Improvement in investment decision accuracy'
      },
      {
        title: 'Risk Management',
        description: 'Enterprise-wide risk assessment with predictive analytics and mitigation strategies',
        metric: '67%',
        impact: 'Reduction in compliance-related incidents'
      },
      {
        title: 'ROI Optimization',
        description: 'Data-driven insights for technology spend optimization and value realization',
        metric: '43%',
        impact: 'Increase in technology ROI'
      },
      {
        title: 'Governance Framework',
        description: 'Automated policy enforcement and audit trails for regulatory compliance',
        metric: '100%',
        impact: 'Audit readiness score'
      }
    ],
    metrics: {
      'Portfolio Value': '$12.4M',
      'Risk Score': '23/100',
      'Compliance Rating': 'AAA',
      'Digital Maturity': '87%'
    }
  },
  {
    id: 'risk-officer',
    name: 'Risk Officer',
    role: 'Chief Risk Officer',
    description: 'Enterprise risk management with focus on operational, regulatory, and strategic risks',
    primaryConcerns: [
      'Regulatory compliance and audit readiness',
      'Data privacy and protection',
      'Operational risk and business continuity',
      'Third-party risk management'
    ],
    benefits: [
      {
        title: 'Compliance Automation',
        description: 'Automated monitoring and reporting for SOX, GDPR, HIPAA, and industry regulations',
        metric: '96%',
        impact: 'Compliance automation coverage'
      },
      {
        title: 'Risk Quantification',
        description: 'Real-time risk scoring with impact analysis and mitigation recommendations',
        metric: '58%',
        impact: 'Reduction in high-risk incidents'
      },
      {
        title: 'Audit Trail Management',
        description: 'Comprehensive audit logs with automated evidence collection and reporting',
        metric: '100%',
        impact: 'Audit trail completeness'
      },
      {
        title: 'Third-Party Oversight',
        description: 'Continuous monitoring of vendor compliance and security posture',
        metric: '34',
        impact: 'Vendors under continuous monitoring'
      }
    ],
    metrics: {
      'Risk Score': '18/100',
      'Open Violations': '3',
      'Audit Readiness': '98%',
      'Mean Time to Remediation': '4.2 hrs'
    }
  }
];

export const getPersonaById = (id: string) => 
  personas.find(persona => persona.id === id);

export const getPersonaBenefits = (personaId: string) => 
  personas.find(p => p.id === personaId)?.benefits || [];

export const getPersonaMetrics = (personaId: string) => 
  personas.find(p => p.id === personaId)?.metrics || {};