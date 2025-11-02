import type { Section } from './types';

export const ASSESSMENT_SECTIONS: Section[] = [
  {
    title: "Infrastructure & Connectivity",
    questions: [
      { id: "q1", text: "How many distinct data centers or cloud regions are active?", type: "multiple-choice", options: ["1-2", "3-5", "6-10", "10+"] },
      { id: "q2", text: "What percentage of your workloads are containerized?", type: "percentage" },
      { id: "q3", text: "Do you utilize multi-cloud orchestration?", type: "multiple-choice", options: ["Yes, fully automated", "Yes, partially", "No, single cloud", "No, on-premise only"] },
      { id: "q10", text: "What is your primary cloud service model?", type: "multiple-choice", options: ["IaaS", "PaaS", "SaaS", "Hybrid"] },
      { id: "q11", text: "What percentage of your network is software-defined (SDN)?", type: "percentage" },
      { id: "q12", text: "How would you describe your edge computing strategy?", type: "multiple-choice", options: ["Mature & Deployed", "Pilot Stage", "Planning/Strategy Phase", "No Strategy"] },
      { id: "q13", text: "Is your organization utilizing a service mesh architecture (e.g., Istio, Linkerd)?", type: "multiple-choice", options: ["Yes, extensively", "Yes, for specific applications", "In evaluation", "No"] },
      { id: "q14", text: "What is your average network latency for critical cross-region services?", type: "multiple-choice", options: ["<10ms", "10-50ms", "50-100ms", ">100ms"] },
      { id: "q15", text: "How are your data sovereignty and residency requirements managed?", type: "multiple-choice", options: ["Automated policy enforcement", "Manual processes", "Ad-hoc", "Not applicable"] },
      { id: "q16", text: "What percentage of your infrastructure is managed via Infrastructure as Code (IaC)?", type: "percentage" },
      { id: "q17", text: "What is the level of adoption for serverless computing?", type: "multiple-choice", options: ["Primary architecture for new apps", "Used for specific functions", "In pilot", "No adoption"] },
      { id: "q18", text: "Do you have a dedicated FinOps practice for cloud cost management?", type: "multiple-choice", options: ["Yes, with mature processes", "Yes, newly established", "Informal efforts only", "No"] },
      { id: "q97", text: "What is your organization's strategy for Green IT and sustainable computing?", type: "multiple-choice", options: ["Mature, with clear metrics and reporting", "In implementation", "In planning phase", "No formal strategy"] },
    ],
  },
  {
    title: "Data Intelligence & Analytics",
    questions: [
      { id: "q4", text: "Is data lineage traceable across all critical systems?", type: "multiple-choice", options: ["Yes, fully automated", "Yes, with manual steps", "Partially", "No"] },
      { id: "q5", text: "Are anomaly detection models currently in production?", type: "multiple-choice", options: ["Yes, across multiple domains", "Yes, in a few key areas", "In pilot/testing phase", "No"] },
      { id: "q19", text: "What is the maturity of your MLOps practices?", type: "multiple-choice", options: ["Fully automated CI/CD/CT for models", "Semi-automated", "Ad-hoc processes", "No formal MLOps"] },
      { id: "q20", text: "What percentage of your critical data is processed in real-time or near real-time streams?", type: "percentage" },
      { id: "q21", text: "How is data quality managed across the enterprise?", type: "multiple-choice", options: ["Automated monitoring & remediation", "Defined rules with manual checks", "Department-specific efforts", "No enterprise-wide strategy"] },
      { id: "q22", text: "Do you have a centralized feature store for machine learning?", type: "multiple-choice", options: ["Yes, used by all teams", "Yes, used by some teams", "In development", "No"] },
      { id: "q23", text: "What is the primary mode of business intelligence (BI) consumption?", type: "multiple-choice", options: ["Self-service interactive dashboards", "Static scheduled reports", "Analyst-driven ad-hoc queries", "Embedded analytics in apps"] },
      { id: "q24", text: "Is a unified data catalog or data mesh architecture in place?", type: "multiple-choice", options: ["Yes, fully implemented data mesh", "Centralized data catalog exists", "Multiple siloed catalogs", "No catalog"] },
      { id: "q25", text: "What is the adoption level of synthetic data generation for testing and training?", type: "multiple-choice", options: ["Routinely used", "Used in pilot projects", "In research", "Not used"] },
      { id: "q26", text: "What percentage of your analytics workloads leverage graph databases or graph analytics?", type: "percentage" },
      { id: "q27", text: "Does your organization employ causal inference models to understand business drivers?", type: "multiple-choice", options: ["Yes, in production", "Yes, in experimental phase", "In consideration", "No"] },
      { id: "q28", text: "How is unstructured data (text, images, video) being leveraged?", type: "multiple-choice", options: ["Integrated into core analytics", "Used for specific projects", "Stored but not analyzed", "Largely ignored"] },
      { id: "q98", text: "How mature is the adoption of Explainable AI (XAI) techniques for your production models?", type: "multiple-choice", options: ["Standard practice for all critical models", "Used for some models", "In research/pilot phase", "Not implemented"] },
    ],
  },
  {
    title: "Automation & Process Orchestration",
    questions: [
        { id: "q29", text: "What is the scale of your Robotic Process Automation (RPA) deployment?", type: "multiple-choice", options: ["Enterprise-wide scaled deployment", "Department-level deployments", "Small-scale pilots", "No RPA"] },
        { id: "q30", text: "Do you utilize process mining tools to discover and optimize business processes?", type: "multiple-choice", options: ["Yes, continuously", "Yes, on a project basis", "In evaluation", "No"] },
        { id: "q31", text: "What percentage of your IT service management (ITSM) incidents are resolved via automation (AIOps)?", type: "percentage" },
        { id: "q32", text: "Is a central Business Process Management (BPM) or orchestration engine in use?", type: "multiple-choice", options: ["Yes, for all critical processes", "Yes, for some processes", "Multiple disparate systems", "No central engine"] },
        { id: "q33", text: "How are decisions within automated workflows managed?", type: "multiple-choice", options: ["DMN-based decision engines", "Hard-coded business rules", "AI/ML models", "Manual approval steps"] },
        { id: "q34", text: "What is the level of automation in your software development lifecycle (CI/CD)?", type: "multiple-choice", options: ["Fully automated from commit to production", "Automated build and test", "Basic build automation", "Manual processes"] },
        { id: "q35", text: "Are you using AI for intelligent document processing (IDP)?", type: "multiple-choice", options: ["Yes, at scale for various document types", "Yes, for a specific use case", "In pilot", "No"] },
        { id: "q36", text: "What percentage of your supply chain and logistics operations are automated?", type: "percentage" },
        { id: "q37", text: "How do you manage the \"human-in-the-loop\" for complex automation?", type: "multiple-choice", options: ["Integrated exception handling queues", "Email/manual escalation", "AI-driven task routing", "Ad-hoc processes"] },
        { id: "q38", text: "Is your organization exploring Autonomous Agents for complex task execution?", type: "multiple-choice", options: ["Yes, in advanced pilots", "In research/PoC phase", "Under consideration", "No"] },
        { id: "q39", text: "What is the level of automation in your financial closing and reporting process?", type: "multiple-choice", options: ["Fully automated \"no-touch\" close", "Highly automated with manual review", "Partially automated", "Largely manual"] },
        { id: "q40", text: "Are you using digital twins to simulate and optimize physical assets or processes?", type: "multiple-choice", options: ["Yes, for critical systems in production", "Yes, in pilot projects", "In research phase", "No"] },
    ]
  },
  {
    title: "Security Posture & Cyber Resilience",
    questions: [
      { id: "q6", text: "Are your primary encryption methods PQC (Post-Quantum Cryptography) compliant?", type: "multiple-choice", options: ["Yes, fully compliant", "Partially compliant", "Actively migrating", "No, planning to"] },
      { id: "q7", text: "Is your access governance and identity management blockchain-anchored?", type: "multiple-choice", options: ["Yes, for all critical assets", "Yes, for some assets", "In pilot/consideration", "No"] },
      { id: "q41", text: "What is the maturity of your Zero Trust Architecture implementation?", type: "multiple-choice", options: ["Fully implemented across all pillars", "Implemented for identity & network", "In strategic planning", "No formal strategy"] },
      { id: "q42", text: "Do you use an automated Security Orchestration, Automation, and Response (SOAR) platform?", type: "multiple-choice", options: ["Yes, with extensive playbooks", "Yes, with basic playbooks", "In implementation", "No"] },
      { id: "q43", text: "What percentage of your security alerts are automatically triaged by AI?", type: "percentage" },
      { id: "q44", text: "How is software supply chain security (e.g., SBOM) managed?", type: "multiple-choice", options: ["Automated generation and monitoring", "Manual generation on request", "In planning", "No process"] },
      { id: "q45", text: "Is a managed Extended Detection and Response (XDR) service in use?", type: "multiple-choice", options: ["Yes, fully managed 24/7", "Co-managed with internal team", "Using native EDR/NDR tools", "Basic antivirus only"] },
      { id: "q46", text: "How frequently are automated red team exercises or breach and attack simulations conducted?", type: "multiple-choice", options: ["Continuously", "Quarterly", "Annually", "Ad-hoc or never"] },
      { id: "q47", text: "What is your approach to data privacy and compliance with regulations like GDPR/CCPA?", type: "multiple-choice", options: ["Automated data discovery and rights fulfillment", "Policy-driven with manual processes", "Ad-hoc response", "Not applicable"] },
      { id: "q48", text: "What percentage of application code is scanned for vulnerabilities using SAST/DAST tools within the CI/CD pipeline?", type: "percentage" },
      { id: "q49", text: "Is confidential computing (e.g., using secure enclaves) used for processing sensitive data?", type: "multiple-choice", options: ["Yes, in production workloads", "Yes, in pilot projects", "In evaluation", "No"] },
      { id: "q50", text: "How do you secure AI/ML models against adversarial attacks?", type: "multiple-choice", options: ["Proactive model hardening and monitoring", "Basic input validation", "Dependent on platform security", "No specific measures"] },
      { id: "q99", text: "What is your approach to securing the API ecosystem?", type: "multiple-choice", options: ["Dedicated API gateway with advanced threat protection", "Standard WAF and rate limiting", "Managed by individual development teams", "No centralized strategy"] },
    ],
  },
  {
    title: "Workforce & Organizational Culture",
    questions: [
        { id: "q51", text: "What percentage of the workforce has completed advanced data literacy or AI training?", type: "percentage" },
        { id: "q52", text: "How is cross-functional collaboration on digital projects structured?", type: "multiple-choice", options: ["Persistent agile product teams", "Project-based matrixed teams", "Traditional departmental silos", "Ad-hoc committees"] },
        { id: "q53", text: "Is there a formal program for reskilling/upskilling employees impacted by automation?", type: "multiple-choice", options: ["Yes, enterprise-wide and proactive", "Yes, department-level initiatives", "Informal resources available", "No formal program"] },
        { id: "q54", text: "How would you describe the organization's risk appetite for innovation?", type: "multiple-choice", options: ["High, embraces \"fail-fast\" culture", "Moderate, prefers proven technologies", "Low, highly risk-averse", "Varies greatly by department"] },
        { id: "q55", text: "Is there a \"citizen developer\" program to empower business users to build simple applications/automations?", type: "multiple-choice", options: ["Yes, with strong governance", "Yes, with informal support", "Being considered", "No"] },
        { id: "q56", text: "How is knowledge from AI/automation projects shared across the organization?", type: "multiple-choice", options: ["Centralized knowledge base & CoE", "Regular showcases and demos", "Informal sharing", "Little to no sharing"] },
        { id: "q57", text: "What percentage of your technical teams' time is allocated for innovation and experimentation?", type: "percentage" },
        { id: "q58", text: "How are performance metrics and incentives aligned with digital transformation goals?", type: "multiple-choice", options: ["Directly tied to individual/team objectives", "Included in executive scorecards", "Indirectly considered", "Not aligned"] },
        { id: "q59", text: "What is the primary development methodology used?", type: "multiple-choice", options: ["Agile/Scrum/Kanban enterprise-wide", "Hybrid Agile-Waterfall", "Primarily Waterfall", "No standard methodology"] },
        { id: "q60", text: "How is employee sentiment towards AI and automation measured?", type: "multiple-choice", options: ["Regular, targeted surveys", "Included in annual engagement surveys", "Anecdotal feedback only", "Not measured"] },
        { id: "q61", text: "Does the organization have a Chief AI or Chief Data Officer (or equivalent)?", type: "multiple-choice", options: ["Yes, with C-suite influence", "Yes, in a mid-level role", "Role is distributed", "No such role"] },
        { id: "q62", text: "What is the level of executive sponsorship for digital transformation initiatives?", type: "multiple-choice", options: ["Actively led by the CEO/Board", "Sponsored by individual business units", "IT-led initiatives", "Limited executive focus"] },
        { id: "q100", text: "How would you describe your internal collaboration toolset?", type: "multiple-choice", options: ["Fully integrated, AI-enhanced digital workplace", "Suite of standard cloud-based tools (e.g., M365, Google Workspace)", "Mix of disparate, department-specific tools", "Primarily email and file shares"] },
    ]
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    questions: [
        { id: "q63", text: "Is there a formal AI ethics board or review process?", type: "multiple-choice", options: ["Yes, with veto power on projects", "Yes, in an advisory capacity", "Informal guidelines exist", "No formal process"] },
        { id: "q64", text: "How is model risk management (MRM) for AI/ML models handled?", type: "multiple-choice", options: ["Centralized, automated MRM platform", "Document-based manual process", "Handled by individual teams", "No formal MRM"] },
        { id: "q65", text: "What percentage of your compliance controls are continuously monitored and audited through automation?", type: "percentage" },
        { id: "q66", text: "Is there a single, integrated GRC platform?", type: "multiple-choice", options: ["Yes, enterprise-wide", "Multiple specialized GRC tools", "Spreadsheets and documents", "No formal system"] },
        { id: "q67", text: "How is regulatory change managed?", type: "multiple-choice", options: ["Automated horizon scanning and impact analysis", "Manual tracking by legal/compliance teams", "Rely on external counsel", "Reactive approach"] },
        { id: "q68", text: "How is data classification and handling policy enforced?", type: "multiple-choice", options: ["Automated tagging and access control", "User-driven classification", "Basic network-level controls", "No enforcement"] },
        { id: "q69", text: "What is the process for approving new AI use cases?", type: "multiple-choice", options: ["Formal review including business, legal, and risk", "Informal business unit approval", "IT approval only", "No formal process"] },
        { id: "q70", text: "What percentage of your third-party vendors are subject to automated cybersecurity risk assessments?", type: "percentage" },
        { id: "q71", text: "Is algorithmic bias regularly tested for in your AI models?", type: "multiple-choice", options: ["Yes, using automated tools pre- and post-deployment", "Yes, via manual audits pre-deployment", "On an ad-hoc basis", "No"] },
        { id: "q72", text: "How is the \"right to explanation\" for AI decisions handled for customers/regulators?", type: "multiple-choice", options: ["Automated generation of explainability reports (XAI)", "Manual explanation by data scientists", "Case-by-case basis", "Not addressed"] },
        { id: "q73", text: "Is there a formal data retention and disposal policy that is automatically enforced?", type: "multiple-choice", options: ["Yes, fully automated", "Yes, with manual execution", "Policy exists but not enforced", "No formal policy"] },
        { id: "q74", text: "How is intellectual property created by generative AI managed?", type: "multiple-choice", options: ["Clear policy and tracking mechanisms", "Case-by-case legal review", "Currently under review", "No policy"] },
        { id: "q161", text: "How are AI ethics principles operationalized in the development lifecycle?", type: "multiple-choice", options: ["Integrated into MLOps with automated checks and gates", "Mandatory ethics review checklist for all projects", "Training and awareness programs for developers", "Principles exist but implementation is ad-hoc"] },
        { id: "q162", text: "What is the scope of your Model Risk Management (MRM) framework?", type: "multiple-choice", options: ["Covers all models, including non-AI/ML statistical models", "Covers all production AI/ML models", "Covers only high-risk or customer-facing models", "No formal framework, risk is managed informally"] },
        { id: "q163", text: "How is evidence for compliance audits (e.g., for SOX, HIPAA, PCI-DSS) collected?", type: "multiple-choice", options: ["Automatically collected from systems into a GRC platform", "Scripted collection with manual collation", "Manual collection via screenshots and interviews", "Varies by control and audit"] },
    ]
  },
  {
    title: "Customer & Product Experience",
    questions: [
        { id: "q75", text: "What is the primary channel for customer support?", type: "multiple-choice", options: ["AI-powered virtual agents with human escalation", "Human agents with AI assistance", "Traditional call center/email", "Self-service knowledge base"] },
        { id: "q76", text: "What percentage of customer interactions are personalized using real-time data?", type: "percentage" },
        { id: "q77", text: "Do you use a Customer Data Platform (CDP) to create a unified customer profile?", type: "multiple-choice", options: ["Yes, fully integrated and activated", "Yes, data aggregation only", "Multiple siloed systems", "No CDP"] },
        { id: "q78", text: "Is AI used for predictive customer churn analysis?", type: "multiple-choice", options: ["Yes, with automated retention campaigns", "Yes, for reporting and manual action", "In pilot", "No"] },
        { id: "q79", text: "How is product/service pricing optimized?", type: "multiple-choice", options: ["Dynamic pricing using AI models", "Segment-based pricing", "Cost-plus or competitor-based", "Static pricing"] },
        { id: "q80", text: "Do you leverage digital twins for your products to offer predictive maintenance or enhanced services?", type: "multiple-choice", options: ["Yes, for key product lines", "Yes, in a pilot program", "In research", "No"] },
        { id: "q81", text: "What percentage of your marketing budget allocation is optimized by AI?", type: "percentage" },
        { id: "q82", text: "How is customer feedback (e.g., reviews, surveys, social media) analyzed?", type: "multiple-choice", options: ["Automated sentiment and topic analysis at scale", "Manual analysis of samples", "Basic keyword tracking", "Largely unanalyzed"] },
        { id: "q83", text: "Is Augmented Reality (AR) or Virtual Reality (VR) used to enhance the customer experience?", type: "multiple-choice", options: ["Integrated into the core product/service", "Used for marketing campaigns", "In pilot/testing", "No"] },
        { id: "q84", text: "How are new product features prioritized?", type: "multiple-choice", options: ["Data-driven based on usage analytics and A/B testing", "Customer feedback and feature requests", "Executive/product manager intuition", "Competitor-driven"] },
        { id: "q85", text: "Do you offer hyper-personalized product recommendations?", type: "multiple-choice", options: ["Yes, in real-time across all channels", "Yes, in specific channels (e.g., email)", "Basic segmentation-based offers", "No"] },
        { id: "q86", text: "What is the level of self-service capability offered to customers?", type: "multiple-choice", options: ["Fully autonomous for most tasks (onboarding, changes, etc.)", "Self-service for simple tasks", "Primarily informational", "Requires human agent for all tasks"] },
    ]
  },
  {
    title: "Quantum & AGI Integration",
    questions: [
      { id: "q8", text: "Have pilot programs been initiated for quantum-secure networking?", type: "multiple-choice", options: ["Yes, in production", "Yes, in pilot stage", "In research phase", "No current plans"] },
      { id: "q9", text: "What is the level of AI/AGI integration in your core business logic?", type: "multiple-choice", options: ["Fully autonomous decision-making", "AI-assisted human workflows", "Basic automation and chatbots", "Minimal to none"] },
      { id: "q87", text: "Is your organization actively developing or testing quantum algorithms for specific business problems (e.g., optimization, simulation)?", type: "multiple-choice", options: ["Yes, with in-house or partnered quantum specialists", "Yes, through cloud quantum computing platforms", "In research/exploratory phase", "No"] },
      { id: "q88", text: "What percentage of your R&D budget is allocated to quantum computing or AGI research?", type: "percentage" },
      { id: "q89", text: "Is there a formal strategy for transitioning to post-quantum cryptography (PQC)?", type: "multiple-choice", options: ["Yes, with a detailed roadmap and inventory", "Yes, in early planning stages", "Awaiting industry standards", "No"] },
      { id: "q90", text: "How does your organization access quantum computing resources?", type: "multiple-choice", options: ["Own on-premise hardware", "Dedicated access via cloud provider", "Pay-as-you-go cloud access", "No access"] },
      { id: "q91", text: "Is there a team dedicated to monitoring advancements in AGI?", type: "multiple-choice", options: ["Yes, a dedicated research team", "Part of an existing innovation team", "Informal monitoring by individuals", "No"] },
      { id: "q92", text: "Have you identified business processes that would be fundamentally transformed by AGI?", type: "multiple-choice", options: ["Yes, with detailed simulation/modeling", "Yes, high-level identification", "In discussion", "No"] },
      { id: "q93", text: "What is your organization's stance on the ethical development and deployment of AGI?", type: "multiple-choice", options: ["Active participation in industry ethics bodies", "Formal internal ethical framework", "Informal discussions", "No formal stance"] },
      { id: "q94", text: "What percentage of your data scientists and engineers are trained in quantum machine learning (QML) concepts?", type: "percentage" },
      { id: "q95", text: "Are you exploring the use of quantum sensors for new data acquisition capabilities?", type: "multiple-choice", options: ["Yes, in pilot projects", "In research phase", "Under consideration", "No"] },
      { id: "q96", text: "How is your long-term data archival strategy being adapted for the threat of future quantum decryption?", type: "multiple-choice", options: ["Migrating archives to PQC", "Hybrid approach with cryptographic agility", "Risk accepted", "Not considered"] },
    ],
  },
  {
    title: "Storage Architecture & Management",
    questions: [
        { id: "q101", text: "What is your primary enterprise storage architecture?", type: "multiple-choice", options: ["SAN (Storage Area Network)", "NAS (Network Attached Storage)", "Object Storage", "Hyper-Converged (HCI)", "Software-Defined (SDS)"] },
        { id: "q102", text: "What percentage of your primary storage is all-flash?", type: "percentage" },
        { id: "q103", text: "How do you manage data tiering (hot, warm, cold)?", type: "multiple-choice", options: ["Automated based on policy", "Manual/scripted processes", "Cloud provider lifecycle policies", "No formal tiering"] },
        { id: "q104", text: "What is your strategy for unstructured data storage?", type: "multiple-choice", options: ["Centralized data lake", "Distributed object storage (on-prem/cloud)", "Traditional file servers (NAS)", "Cloud-native services (e.g., S3/Blob)"] },
        { id: "q105", text: "What is your primary SAN protocol, if used?", type: "multiple-choice", options: ["Fibre Channel", "iSCSI", "FCoE (Fibre Channel over Ethernet)", "Not using SAN"] },
    ]
  },
  {
    title: "Network Architecture & Performance",
    questions: [
        { id: "q106", text: "Which best describes your core data center network architecture?", type: "multiple-choice", options: ["Traditional 3-tier (core/distribution/access)", "Spine-and-leaf fabric", "Flat/single-tier network", "Fully cloud-native (VPCs/VNETs)"] },
        { id: "q107", text: "How do you implement load balancing for critical applications?", type: "multiple-choice", options: ["Hardware appliance-based (e.g., F5)", "Software-based (e.g., NGINX, HAProxy)", "Cloud-native load balancers (ALB/NLB)", "Integrated within a service mesh"] },
        { id: "q108", text: "What is your primary Wide Area Network (WAN) technology?", type: "multiple-choice", options: ["SD-WAN", "MPLS", "VPN over public internet", "Hybrid WAN"] },
        { id: "q109", text: "Do you employ a Network Performance Monitoring (NPM) and diagnostics solution?", type: "multiple-choice", options: ["Yes, with AI-driven insights", "Yes, traditional SNMP/flow-based tools", "Ad-hoc monitoring as needed", "No comprehensive solution"] },
        { id: "q110", text: "What is your approach to DNS management and security?", type: "multiple-choice", options: ["Managed DNS provider with advanced security (DNSSEC, DDoS protection)", "On-premise DNS servers (e.g., BIND)", "Basic DNS from domain registrar", "No specific security focus"] },
    ]
  },
  {
    title: "Business Continuity & Disaster Recovery",
    questions: [
        { id: "q111", text: "What is your stated Recovery Time Objective (RTO) for mission-critical applications?", type: "multiple-choice", options: ["Seconds to minutes (High Availability)", "Under 1 hour", "1-4 hours", "4-24 hours"] },
        { id: "q112", text: "What is your stated Recovery Point Objective (RPO) for critical data?", type: "multiple-choice", options: ["Zero/near-zero data loss (synchronous replication)", "Minutes", "1-4 hours", "24 hours (daily backups)"] },
        { id: "q113", text: "How is your disaster recovery (DR) site implemented?", type: "multiple-choice", options: ["Active-active multi-region/multi-site", "Active-passive (hot/warm site)", "Cloud-based Disaster Recovery as a Service (DRaaS)", "Cold site / Tape backups"] },
        { id: "q114", text: "How frequently do you conduct full, end-to-end DR tests?", type: "multiple-choice", options: ["Quarterly or more frequently", "Annually", "Every 2-3 years", "Rarely or never"] },
        { id: "q115", text: "What percentage of your backup and recovery failover process is automated?", type: "percentage" },
    ]
  },
  {
    title: "API Economy & Integration Strategy",
    questions: [
        { id: "q116", text: "How mature is your organization's adoption of an 'API-first' development approach?", type: "multiple-choice", options: ["Standard for all new development", "Encouraged but not enforced", "Used for specific strategic projects", "Not a formal approach"] },
        { id: "q117", text: "Do you use a central API Gateway or Management platform?", type: "multiple-choice", options: ["Yes, with full lifecycle management and developer portal", "Yes, for basic proxying and security", "Multiple disparate gateways per department", "No central gateway"] },
        { id: "q118", text: "Which best describes your primary application integration pattern?", type: "multiple-choice", options: ["Event-driven architecture (e.g., Kafka, Pub/Sub)", "REST APIs and microservices", "Traditional Enterprise Service Bus (ESB)", "Point-to-point file transfers/integrations"] },
        { id: "q119", text: "How are external developers or partners onboarded to use your APIs?", type: "multiple-choice", options: ["Fully self-service developer portal", "Manual onboarding process by an integration team", "APIs are for internal use only", "No external APIs"] },
        { id: "q120", text: "What is your strategy for API versioning and managing breaking changes?", type: "multiple-choice", options: ["Formal, communicated process (e.g., URI versioning, headers)", "Informal, as-needed with communication", "New endpoint for every change", "No formal strategy"] },
    ]
  },
  {
    title: "Cloud Native & DevOps Maturity",
    questions: [
        { id: "q121", text: "What is the primary platform for your containerized applications?", type: "multiple-choice", options: ["Managed Kubernetes (GKE, EKS, AKS)", "Self-managed Kubernetes on-prem/cloud", "Serverless Containers (e.g., Cloud Run, Fargate)", "PaaS (e.g., Heroku, Cloud Foundry)"] },
        { id: "q122", text: "How is observability implemented for cloud-native applications?", type: "multiple-choice", options: ["Integrated platform with OpenTelemetry (logs, metrics, traces)", "Separate best-of-breed tools for each pillar", "Basic logging and metrics from cloud provider", "Ad-hoc troubleshooting"] },
        { id: "q123", text: "What is your approach to GitOps for managing infrastructure and application configuration?", type: "multiple-choice", options: ["Widely adopted as the standard practice", "Used by specific teams or for new projects", "In pilot or evaluation", "Not used"] },
        { id: "q124", text: "How would you describe your continuous delivery lead time for changes?", type: "multiple-choice", options: ["Multiple deployments per day (elite)", "Deployments per week (high)", "Deployments per month (medium)", "Quarterly or less (low)"] },
        { id: "q125", text: "What is the level of developer self-service for infrastructure?", type: "multiple-choice", options: ["High, via a dedicated Internal Developer Platform (IDP)", "Moderate, via standardized IaC modules", "Low, requires filing tickets with an Ops team", "No self-service"] },
    ]
  },
  {
    title: "Supply Chain & Logistics Tech",
    questions: [
        { id: "q126", text: "What system do you use for end-to-end supply chain visibility?", type: "multiple-choice", options: ["Real-time visibility platform with predictive analytics", "EDI-based tracking and milestone updates", "Manual tracking via carrier portals and email", "Limited to no visibility beyond shipment"] },
        { id: "q127", text: "Are you using IoT devices for asset tracking and condition monitoring (e.g., temperature, shock)?", type: "multiple-choice", options: ["Yes, extensively for high-value goods", "Yes, in pilot programs", "Under consideration", "No"] },
        { id: "q128", text: "How is demand forecasting performed?", type: "multiple-choice", options: ["AI/ML-driven predictive models", "Advanced statistical modeling (e.g., ARIMA)", "Based on historical sales data", "Manual input from sales teams"] },
        { id: "q129", text: "What is the level of automation in your warehouse or fulfillment centers?", type: "multiple-choice", options: ["Highly automated (robotics, ASRS)", "Partially automated (conveyors, sorters)", "Manual processes supported by a WMS", "Largely manual processes"] },
        { id: "q130", text: "Are you involved in any blockchain-based supply chain networks for traceability?", type: "multiple-choice", options: ["Yes, in production", "In a pilot with a consortium", "Actively exploring/researching", "No"] },
    ]
  },
  {
    title: "Digital Marketing & MarTech Stack",
    questions: [
        { id: "q131", text: "How integrated is your marketing technology (MarTech) stack?", type: "multiple-choice", options: ["Fully integrated via a central Customer Data Platform (CDP)", "Point solutions with some API integrations", "Largely disparate, siloed tools", "Very few MarTech tools are used"] },
        { id: "q132", text: "How do you measure marketing campaign ROI and attribution?", type: "multiple-choice", options: ["Data-driven multi-touch attribution models", "Single-touch attribution (first or last)", "Basic channel performance metrics (clicks, leads)", "Manual analysis and estimations"] },
        { id: "q133", text: "Are you using AI for marketing content generation or personalization at scale?", type: "multiple-choice", options: ["Yes, for both content and personalization", "Yes, for personalization only (e.g., recommendations)", "Experimenting with generative AI tools", "No"] },
        { id: "q134", text: "What is your approach to A/B or multivariate testing for web and marketing campaigns?", type: "multiple-choice", options: ["Continuous, structured experimentation program", "Ad-hoc, campaign-based testing", "Rarely or never perform tests", "Not applicable"] },
        { id: "q135", text: "How do you manage customer consent and data privacy preferences?", type: "multiple-choice", options: ["Centralized Consent Management Platform (CMP)", "Manual processes and spreadsheets", "Rely on individual tools' native settings", "Not formally managed"] },
    ]
  },
  {
    title: "Financial Technologies & FinOps",
    questions: [
        { id: "q136", text: "How mature is your cloud FinOps practice in managing cloud spend?", type: "multiple-choice", options: ["Mature: automated cost optimization & showback", "Maturing: visibility and some optimization", "Nascent: basic cost monitoring", "No formal practice"] },
        { id: "q137", text: "What percentage of your accounts payable/receivable processes are automated (e.g., invoice processing)?", type: "percentage" },
        { id: "q138", text: "Are you using AI/ML for real-time fraud detection or financial risk modeling?", type: "multiple-choice", options: ["Yes, in real-time production systems", "Yes, for offline analysis and reporting", "In evaluation/pilot phase", "No"] },
        { id: "q139", text: "How are financial budgets and forecasts generated?", type: "multiple-choice", options: ["AI-driven predictive forecasting", "Driver-based modeling platforms", "Traditional spreadsheet-based processes", "Static annual budget with little variance"] },
        { id: "q140", text: "What is your strategy for accepting and processing digital payments?", type: "multiple-choice", options: ["Modern payment orchestration platform", "Direct integration with multiple payment gateways", "Single payment provider", "Traditional invoicing and bank transfers"] },
    ]
  },
  {
    title: "Human Resources & Future of Work",
    questions: [
        { id: "q141", text: "What system do you use for talent acquisition and recruiting?", type: "multiple-choice", options: ["AI-powered platform for sourcing, screening, and matching", "Standard Applicant Tracking System (ATS)", "Email and spreadsheets", "Fully outsourced"] },
        { id: "q142", text: "How do you analyze employee engagement and sentiment?", type: "multiple-choice", options: ["Continuous listening via AI-powered natural language processing", "Annual or bi-annual employee surveys", "Informal manager feedback", "Not formally measured"] },
        { id: "q143", text: "Is there a system for internal talent mobility and personalized career pathing?", type: "multiple-choice", options: ["Yes, an AI-powered talent marketplace", "Yes, a static internal job board", "Managed manually by HR and managers", "No formal system"] },
        { id: "q144", text: "What percentage of routine employee and HR queries are handled by chatbots or a self-service portal?", type: "percentage" },
        { id: "q145", text: "How does your organization's technology support hybrid and remote work?", type: "multiple-choice", options: ["Integrated digital employee experience (DEX) platform", "Standard suite of cloud-based collaboration tools", "Ad-hoc tools chosen by individual teams", "Primarily focused on on-site technology"] },
    ]
  },
  {
    title: "Ethical AI & Responsible Innovation",
    questions: [
        { id: "q146", text: "Is there a publicly available policy on your organization's AI ethics principles?", type: "multiple-choice", options: ["Yes, detailed and regularly updated", "Yes, high-level principles are published", "Internal policies exist but are not public", "No formal public statement"] },
        { id: "q147", text: "How do you systematically test for and mitigate bias in your AI models?", type: "multiple-choice", options: ["Automated pre- and post-deployment bias testing is standard", "Manual audits are conducted by a dedicated ethics team", "Peer review by data scientists", "Rely on vendor assurances or platform features"] },
        { id: "q148", text: "What is your process for ensuring data privacy is integral to AI projects?", type: "multiple-choice", options: ["Privacy-by-design, using techniques like differential privacy", "Standard data anonymization and access controls", "A final legal/compliance review of projects", "Ad-hoc measures"] },
        { id: "q149", text: "How do you ensure the transparency and explainability of your critical AI models?", type: "multiple-choice", options: ["Use of XAI frameworks (e.g., SHAP, LIME) is standard practice", "Explanations can be generated on request for audits", "Most models are treated as 'black boxes'", "Not applicable"] },
        { id: "q150", text: "Is there a formal, accessible process for individuals to appeal an AI-driven decision?", type: "multiple-choice", options: ["Yes, a clearly defined 'human-in-the-loop' appeal process", "Yes, but it is handled on a case-by-case email basis", "No formal process exists", "Not applicable"] },
    ]
  },
  {
    title: "Decentralized Systems & Blockchain",
    questions: [
        { id: "q151", text: "What is your organization's involvement with blockchain/DLT for non-currency use cases?", type: "multiple-choice", options: ["Production use case (e.g., supply chain, identity)", "Active pilot or Proof of Concept", "Internal research and education only", "No involvement"] },
        { id: "q152", text: "Does your organization participate in any industry-specific blockchain consortia?", type: "multiple-choice", options: ["Yes, as a founding or governing member", "Yes, as a general member", "No, but considering joining one", "No"] },
        { id: "q153", text: "Are you exploring decentralized identity (Self-Sovereign Identity - SSI) solutions for customers or employees?", type: "multiple-choice", options: ["Yes, in an active pilot program", "In research and development", "Monitoring the standards and ecosystem", "No"] },
        { id: "q154", text: "How does your organization view the use of smart contracts for automating business logic?", type: "multiple-choice", options: ["Actively developing or deploying for specific processes", "In evaluation for potential use cases", "Considered too immature or complex", "No significant knowledge or strategy"] },
        { id: "q155", text: "Are you exploring the tokenization of physical or digital assets to create new markets or products?", type: "multiple-choice", options: ["Yes, have an active project or PoC", "In strategic discussion and planning", "Monitoring market trends", "No"] },
    ]
  },
  {
    title: "IoT & Edge Computing Deep Dive",
    questions: [
        { id: "q156", text: "How do you manage the lifecycle of your IoT devices (provisioning, OTA updates, decommissioning)?", type: "multiple-choice", options: ["Centralized IoT device management platform", "Custom scripts and manual processes", "Rely on device manufacturers' tools", "Ad-hoc, device-by-device management"] },
        { id: "q157", text: "Where does data processing for time-sensitive IoT workloads primarily occur?", type: "multiple-choice", options: ["At the intelligent edge (on-device or local gateways)", "In the central cloud", "A hybrid model based on use case", "Not applicable"] },
        { id: "q158", text: "What is your strategy for securing the IoT and edge device ecosystem?", type: "multiple-choice", options: ["Zero-trust architecture with device identity and micro-segmentation", "Traditional network perimeter security (VPN, firewalls)", "Physical security of the devices", "No specific IoT security strategy"] },
        { id: "q159", text: "How do you handle data and application orchestration at the edge?", type: "multiple-choice", options: ["A dedicated edge computing platform (e.g., KubeEdge, Azure IoT Edge)", "Extending cloud provider IoT services to the edge", "Custom-built solution", "No orchestration, static deployments"] },
        { id: "q160", text: "What is your primary connectivity strategy for distributed IoT devices?", type: "multiple-choice", options: ["Private 5G/LTE cellular networks", "Wi-Fi, LoRaWAN, or other unlicensed spectrum", "Wired connections (Ethernet)", "Mixed/opportunistic based on location"] },
    ]
  },
];
