export interface IndustryBlueprint {
  id: string;
  name: string;
  description: string;
  keyRegulations: string[];
  commonChallenges: string[];
  solutionHighlights: string[];
  complianceFrameworks: string[];
  typicalApps: string[];
  riskFactors: {
    name: string;
    severity: 'low' | 'medium' | 'high';
    description: string;
  }[];
}

export const industries: IndustryBlueprint[] = [
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Highly regulated industry requiring strict data governance, audit trails, and real-time risk management',
    keyRegulations: [
      'SOX (Sarbanes-Oxley)',
      'PCI DSS',
      'FFIEC Guidelines',
      'Basel III',
      'GDPR/CCPA'
    ],
    commonChallenges: [
      'Real-time fraud detection while maintaining customer experience',
      'AI model explainability for regulatory compliance',
      'Cross-border data sovereignty requirements',
      'Legacy system integration with modern AI tools'
    ],
    solutionHighlights: [
      'Automated compliance monitoring with regulatory change tracking',
      'AI decision audit trails with explainability reports',
      'Real-time risk scoring and anomaly detection',
      'Secure data lineage and encryption management'
    ],
    complianceFrameworks: [
      'SOC 2 Type II',
      'ISO 27001',
      'PCI DSS Level 1',
      'NIST Cybersecurity Framework'
    ],
    typicalApps: [
      'Salesforce Financial Services Cloud',
      'ServiceNow GRC',
      'Palantir Foundry',
      'Tableau for Regulatory Reporting',
      'Custom AI Risk Models'
    ],
    riskFactors: [
      {
        name: 'Regulatory Violation',
        severity: 'high',
        description: 'Non-compliance with financial regulations can result in massive fines and reputational damage'
      },
      {
        name: 'Data Breach',
        severity: 'high',
        description: 'Customer financial data exposure leading to identity theft and regulatory penalties'
      },
      {
        name: 'Model Bias',
        severity: 'medium',
        description: 'AI models showing bias in lending or insurance decisions'
      },
      {
        name: 'System Downtime',
        severity: 'high',
        description: 'Trading or payment system outages causing financial losses'
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient-centric industry requiring HIPAA compliance, clinical accuracy, and safety-first AI governance',
    keyRegulations: [
      'HIPAA',
      'HITECH Act',
      'FDA AI/ML Guidance',
      '21 CFR Part 11',
      'GDPR (for EU operations)'
    ],
    commonChallenges: [
      'Ensuring AI model safety and clinical accuracy',
      'Patient data privacy across multi-vendor ecosystems',
      'Interoperability with existing EMR systems',
      'Managing consent and data subject rights'
    ],
    solutionHighlights: [
      'HIPAA-compliant AI agent monitoring and audit logging',
      'Clinical decision support validation and safety checks',
      'Patient consent management and data lifecycle tracking',
      'PHI de-identification and secure data sharing protocols'
    ],
    complianceFrameworks: [
      'HIPAA Security Rule',
      'HITRUST CSF',
      'ISO 27799',
      'NIST 800-66'
    ],
    typicalApps: [
      'Epic MyChart',
      'Cerner PowerChart',
      'Google Cloud Healthcare API',
      'Microsoft Healthcare Bot',
      'Custom Clinical AI Models'
    ],
    riskFactors: [
      {
        name: 'Patient Safety Risk',
        severity: 'high',
        description: 'AI-driven clinical decisions that could harm patient outcomes'
      },
      {
        name: 'PHI Exposure',
        severity: 'high',
        description: 'Unauthorized access or breach of protected health information'
      },
      {
        name: 'Regulatory Non-Compliance',
        severity: 'high',
        description: 'HIPAA violations resulting in fines and operational restrictions'
      },
      {
        name: 'Clinical Accuracy',
        severity: 'medium',
        description: 'AI models providing inaccurate medical information or recommendations'
      }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Customer-focused industry balancing personalization with privacy, requiring agile AI deployment and brand protection',
    keyRegulations: [
      'CCPA/CPRA',
      'GDPR',
      'PCI DSS',
      'FTC Guidelines',
      'State Privacy Laws'
    ],
    commonChallenges: [
      'Balancing personalization with customer privacy',
      'Managing seasonal traffic spikes and AI model performance',
      'Preventing AI bias in product recommendations',
      'Coordinating AI across multiple customer touchpoints'
    ],
    solutionHighlights: [
      'Customer journey AI governance with privacy-by-design',
      'Dynamic pricing model monitoring and fairness checks',
      'Brand safety controls for AI-generated content',
      'Omnichannel AI experience orchestration'
    ],
    complianceFrameworks: [
      'PCI DSS',
      'ISO 27001',
      'Privacy Shield Framework',
      'NIST Privacy Framework'
    ],
    typicalApps: [
      'Shopify Plus',
      'Adobe Experience Cloud',
      'Salesforce Commerce Cloud',
      'Google Analytics Intelligence',
      'Custom Recommendation Engines'
    ],
    riskFactors: [
      {
        name: 'Brand Reputation Risk',
        severity: 'medium',
        description: 'AI-generated content or recommendations that damage brand image'
      },
      {
        name: 'Customer Privacy Violation',
        severity: 'high',
        description: 'Unauthorized use of customer data leading to regulatory fines'
      },
      {
        name: 'Price Discrimination',
        severity: 'medium',
        description: 'AI pricing models that unfairly discriminate against customer groups'
      },
      {
        name: 'System Overload',
        severity: 'low',
        description: 'AI systems failing during peak traffic periods'
      }
    ]
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    description: 'Government and public services requiring transparency, accountability, and citizen privacy protection',
    keyRegulations: [
      'FedRAMP',
      'FISMA',
      'Privacy Act',
      'FOIA',
      'State/Local Privacy Laws'
    ],
    commonChallenges: [
      'Ensuring AI transparency and explainability for public accountability',
      'Managing citizen data privacy across multiple agencies',
      'Preventing algorithmic bias in public services',
      'Meeting accessibility and inclusion requirements'
    ],
    solutionHighlights: [
      'Transparent AI decision-making with citizen appeal processes',
      'Cross-agency data governance and sharing protocols',
      'Bias detection and fairness monitoring for public AI services',
      'Citizen privacy rights management and FOIA compliance'
    ],
    complianceFrameworks: [
      'FedRAMP Moderate/High',
      'NIST 800-53',
      'CJIS Security Policy',
      'IRS 1075'
    ],
    typicalApps: [
      'Microsoft Government Cloud',
      'AWS GovCloud',
      'Salesforce Government Cloud',
      'Custom Citizen Service Portals',
      'AI-Powered Case Management'
    ],
    riskFactors: [
      {
        name: 'Algorithmic Bias',
        severity: 'high',
        description: 'AI systems that unfairly impact different citizen groups'
      },
      {
        name: 'Privacy Violation',
        severity: 'high',
        description: 'Unauthorized access or misuse of citizen personal information'
      },
      {
        name: 'Transparency Failure',
        severity: 'medium',
        description: 'Inability to explain AI decisions to citizens or oversight bodies'
      },
      {
        name: 'Security Breach',
        severity: 'high',
        description: 'Compromise of sensitive government or citizen data'
      }
    ]
  }
];

export const getIndustryById = (id: string) => 
  industries.find(industry => industry.id === id);

export const getIndustryRisks = (industryId: string) => 
  industries.find(i => i.id === industryId)?.riskFactors || [];

export const getHighRiskIndustries = () => 
  industries.filter(industry => 
    industry.riskFactors.some(risk => risk.severity === 'high')
  );