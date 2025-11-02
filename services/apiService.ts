import { v4 as uuidv4 } from 'uuid';
import type { 
    User, 
    SignUpData, 
    Answers, 
    AssessmentReport, 
    CustomInitiative,
    CustomIntegrationPlan,
    AdminDashboardData,
    Customer360Data,
    Sku,
    SkuType,
    Order,
    Account,
    AssessmentRecord,
    ServiceInstance,
    SloMetric,
    UserPlanDistribution,
    AdminUser,
} from '../types';
import { ASSESSMENT_SECTIONS } from '../assessmentData';


// --- Mock Database (using localStorage for persistence) ---

type MockDatabase = {
    accounts: Account[];
    users: User[];
    assessments: AssessmentReport[];
    initiatives: CustomInitiative[];
    integrationPlans: CustomIntegrationPlan[];
    serviceCatalog: Sku[];
    orders: Order[];
    serviceInstances: ServiceInstance[];
};

const getDb = (): MockDatabase => {
    try {
        const dbJson = localStorage.getItem('eh_mock_db');
        if (dbJson) {
            return JSON.parse(dbJson);
        }
    } catch (e) {
        console.error("Failed to parse DB from localStorage", e);
    }
    // If DB doesn't exist or is invalid, initialize it
    const initialDb = initializeDatabase();
    updateDb(initialDb);
    return initialDb;
};

const updateDb = (db: MockDatabase) => {
    try {
        localStorage.setItem('eh_mock_db', JSON.stringify(db));
    } catch (e) {
        console.error(`Failed to update DB`, e);
    }
};

const initializeDatabase = (): MockDatabase => {
    // This list is duplicated from constants.ts to prevent a circular dependency with React.
    // In a real app, this data would come from a single source of truth (the backend database).
    const ALL_PILOT_TITLES = [
      "Starnet Halo Vortex Deployment", "NovaCore Hyperion Integration", "OrbitAI NovaSynapse Activation",
      "QuantumLink Graph Nexus Build", "Event Horizon Synoptic Setup", "Quantum Inference Engine Testbed",
      "Temporal Dynamics Analyzer Proof-of-Concept", "Contextual Relevance Framework Mapping",
      "Adaptive Learning System Bootstrap", "Insight Delivery Orchestrator Configuration",
      "AIOps for Incident Remediation", "GenAI for Code Review", "AI-Driven Demand Forecasting",
      "Personalized Marketing Content", "Employee Sentiment Analysis", "Process Mining for Order-to-Cash",
      "Generative AI for Customer Support", "AI for Contract Analysis", "Quantum-Secure VPN",
      "Automated Red Teaming", "QRNG for Security", "Software Supply Chain Security (SBOM)",
      "Passwordless Authentication", "Automated Threat Hunting", "Predictive Customer Churn",
      "FinOps Anomaly Detection", "Graph Analytics for Fraud", "Ethical AI & Bias Detection",
      "Causal Inference for Marketing Mix", "Synthetic Data Generation", "Knowledge Graph for R&D",
      "Blockchain for Supply Chain", "Digital Twin of Factory Floor", "Decentralized Identity (SSI)",
      "Quantum Financial Modeling", "IoT Predictive Maintenance", "AR for Remote Assistance",
      "Confidential Computing for Data Sharing", "5G-Enabled Edge Computing",
      "Service Mesh for Microservices", "Green IT & Sustainable Computing"
    ];

    const first1Account: Account = { id: 'acc-first1', name: 'First One Industries', billingEmail: 'billing@first1.com' };
    const test1Account: Account = { id: 'acc-test1', name: 'Test Account 1', billingEmail: 'billing@test1.com' };
    
    const initialUsers: User[] = [
        { id: uuidv4(), username: 'First One', email: 'first1@example.com', passwordHash: 'hashed-password', recoveryPhraseHash: 'hashed-phrase', registeredAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), accountName: first1Account.name, plan: 'Sovereign Subscription' },
        { id: uuidv4(), username: 'Test-1', email: 'test-1@example.com', passwordHash: 'hashed-password', recoveryPhraseHash: 'hashed-phrase', registeredAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), accountName: test1Account.name, plan: 'Strategic Pilot' },
    ];

    const initialAssessments: AssessmentReport[] = [
        { id: uuidv4(), userEmail: 'first1@example.com', createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(), siiScore: 68, executiveSummary: 'Initial assessment shows strong infrastructure but opportunities in AI governance.', keyStrengths: ["Cloud Native Architecture"], recommendations: [{title: 'Implement MLOps', content: 'Focus on MLOps'}], domainAnalyses: ASSESSMENT_SECTIONS.slice(0, 5).map(s => ({ domain: s.title, score: 60 + Math.floor(Math.random() * 10), analysis: `Foundational capabilities exist for ${s.title}.` })), completedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString() },
        { id: uuidv4(), userEmail: 'test-1@example.com', createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), siiScore: 75, executiveSummary: 'Test-1 shows advanced capabilities in automation and is ready for pilot programs.', keyStrengths: ["Mature DevOps practices"], recommendations: [{title: 'Explore QKD', content: 'Pilot QKD'}], domainAnalyses: ASSESSMENT_SECTIONS.slice(0, 5).map(s => ({ domain: s.title, score: 70 + Math.floor(Math.random() * 10), analysis: `Advanced processes observed for ${s.title}.` })), completedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() },
    ];
    
    const serviceCatalog: Sku[] = [
        ...ALL_PILOT_TITLES.map(title => ({ id: `pilot-${title.replace(/\s/g, '')}`, name: title, type: 'PILOT' as const, active: true })),
        {id: 'sol-silver', name: 'Solution Tier: Silver', type: 'SOLUTION' as const, active: true},
        {id: 'sol-gold', name: 'Solution Tier: Gold', type: 'SOLUTION' as const, active: true},
        {id: 'sol-plat', name: 'Solution Tier: Platinum', type: 'SOLUTION' as const, active: true},
    ];

    const orders: Order[] = [
        { id: 'ord-123', accountName: 'Test Account 1', project: 'Strategic Pilot', state: 'LIVE', created_at: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString()},
    ];

    const generateSloData = (base: number, range: number): { time: string; value: number }[] => Array.from({ length: 30 }, (_, i) => ({ time: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toISOString(), value: base + (Math.random() - 0.5) * range }));
    
    const serviceInstances: ServiceInstance[] = [
        { id: 'svc-test1-qkd', accountName: 'Test Account 1', skuName: 'Quantum-Secure VPN', state: 'LIVE', createdAt: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString(),
          sloMetrics: [
              { name: 'Latency (ms)', slo: 50, data: generateSloData(45, 10) },
              { name: 'Availability (%)', slo: 99.95, data: generateSloData(99.98, 0.05) },
              { name: 'SKR (kb/s)', slo: 500, data: generateSloData(520, 40) },
              { name: 'QBER (%)', slo: 3.0, data: generateSloData(2.5, 1) },
          ]
        }
    ];

    return {
        accounts: [first1Account, test1Account],
        users: initialUsers,
        assessments: initialAssessments,
        initiatives: [{ id: uuidv4(), userEmail: 'first1@example.com', createdAt: new Date().toISOString(), name: 'Initial Security Rollout', pilots: ['Quantum-Secure VPN', 'Automated Red Teaming'] }],
        integrationPlans: [{ id: uuidv4(), userEmail: 'first1@example.com', createdAt: new Date().toISOString(), name: 'Core Data Sync', integrations: ['Salesforce', 'ServiceNow'] }],
        serviceCatalog,
        orders,
        serviceInstances,
    };
};


// --- API Simulation ---
const fakeApiCall = <T,>(data: T, delay = 300): Promise<T> => new Promise(resolve => setTimeout(() => resolve(data), delay));
const fakeApiFail = (message: string, delay = 300): Promise<any> => new Promise((_, reject) => setTimeout(() => reject(new Error(message)), delay));

// --- Auth ---
export const loginUser = async (email: string, password: string): Promise<User> => {
    const db = getDb();
    const user = db.users.find(u => u.email === email);
    if (user && password) return fakeApiCall(user);
    return fakeApiFail('Invalid email or password.');
};
export const signUpUser = async (data: SignUpData): Promise<User> => {
    const db = getDb();
    if (db.users.some(u => u.email === data.email)) return fakeApiFail('An account with this email already exists.');
    const newAccount: Account = { id: uuidv4(), name: `${data.username}'s Company`, billingEmail: data.email };
    const newUser: User = { id: uuidv4(), username: data.username, email: data.email, passwordHash: `hashed-${data.password}`, recoveryPhraseHash: `hashed-${data.recoveryPhrase}`, registeredAt: new Date().toISOString(), accountName: newAccount.name, plan: 'Discovery Lite' };
    db.accounts.push(newAccount);
    db.users.push(newUser);
    updateDb(db);
    return fakeApiCall(newUser);
};
export const forgotPassword = async (email: string, recoveryPhrase: string, newPass: string): Promise<void> => {
    const db = getDb();
    const user = db.users.find(u => u.email === email);
    if (user && recoveryPhrase) {
        user.passwordHash = `hashed-${newPass}`;
        updateDb(db);
        return fakeApiCall(undefined);
    }
    return fakeApiFail('Invalid email or recovery phrase.');
};

export const adminLogin = async (email: string, password: string): Promise<AdminUser> => {
    if (email === 'admin@enterprisehorizon.io' && password === 'password') {
        return fakeApiCall({ name: 'Admin User', email: 'admin@enterprisehorizon.io' });
    }
    return fakeApiFail('Invalid admin credentials.');
};

// --- Assessment ---
export const analyzeAssessment = async (userEmail: string, answers: Answers): Promise<AssessmentReport> => {
    let score = 0;
    Object.values(answers).forEach(val => score += (Math.random() * 5));
    const siiScore = Math.min(98, Math.floor(50 + score));
    const report: AssessmentReport = { id: uuidv4(), userEmail, createdAt: new Date().toISOString(), siiScore, executiveSummary: `This AI-generated summary for your SII score of ${siiScore} indicates a growing maturity...`, keyStrengths: ["Strong cloud foundation"], recommendations: [{title: "Focus on PQC", content: "Begin inventorying cryptographic assets."}], domainAnalyses: ASSESSMENT_SECTIONS.map(s => ({ domain: s.title, score: Math.floor(50 + Math.random() * 40), analysis: `Initial capabilities for ${s.title} are in place.`})), completedAt: new Date().toISOString() };
    const db = getDb();
    db.assessments.push(report);
    updateDb(db);
    return fakeApiCall(report, 2000);
};
export const getLastAssessmentReport = async (userEmail: string): Promise<AssessmentReport> => {
    const db = getDb();
    const userAssessments = db.assessments.filter(a => a.userEmail === userEmail).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (userAssessments.length > 0) return fakeApiCall(userAssessments[0]);
    return fakeApiFail('No assessment report found for this user.');
};

// --- Search ---
export const searchPlatform = async (query: string): Promise<string> => fakeApiCall(`# Search Results for "${query}"...`, 1000);

// --- Plans & Initiatives ---
export const saveCustomInitiative = async (userEmail: string, name: string, pilots: string[]): Promise<void> => {
    const db = getDb();
    db.initiatives.push({ id: uuidv4(), userEmail, name, pilots, createdAt: new Date().toISOString() });
    updateDb(db);
    return fakeApiCall(undefined);
};
export const getCustomInitiatives = async (userEmail: string): Promise<CustomInitiative[]> => {
    const db = getDb();
    return fakeApiCall(db.initiatives.filter(i => i.userEmail === userEmail));
};
export const deleteCustomInitiative = async (userEmail: string, id: string): Promise<void> => {
    const db = getDb();
    db.initiatives = db.initiatives.filter(i => !(i.userEmail === userEmail && i.id === id));
    updateDb(db);
    return fakeApiCall(undefined);
};
export const saveIntegrationPlan = async (userEmail: string, name: string, integrations: string[]): Promise<void> => {
    const db = getDb();
    db.integrationPlans.push({ id: uuidv4(), userEmail, name, integrations, createdAt: new Date().toISOString() });
    updateDb(db);
    return fakeApiCall(undefined);
};
export const getIntegrationPlans = async (userEmail: string): Promise<CustomIntegrationPlan[]> => {
    const db = getDb();
    return fakeApiCall(db.integrationPlans.filter(p => p.userEmail === userEmail));
};
export const deleteIntegrationPlan = async (userEmail: string, id: string): Promise<void> => {
    const db = getDb();
    db.integrationPlans = db.integrationPlans.filter(p => !(p.userEmail === userEmail && p.id === id));
    updateDb(db);
    return fakeApiCall(undefined);
};

// --- Admin APIs ---
export const getAdminDashboardData = async (): Promise<AdminDashboardData> => {
    const db = getDb();
    const avgScore = db.assessments.length > 0 ? db.assessments.reduce((sum, a) => sum + a.siiScore, 0) / db.assessments.length : 0;
    
    const userGrowth = Array.from({ length: 6 }, (_, i) => ({ name: `M-${6-i}`, 'New Users': db.users.filter(u => new Date(u.registeredAt) < new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000) && new Date(u.registeredAt) > new Date(Date.now() - (i+1) * 30 * 24 * 60 * 60 * 1000)).length }));
    const assessmentGrowth = Array.from({ length: 6 }, (_, i) => ({ name: `M-${6-i}`, 'Assessments': db.assessments.filter(a => a.completedAt && new Date(a.completedAt) < new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000) && new Date(a.completedAt) > new Date(Date.now() - (i+1) * 30 * 24 * 60 * 60 * 1000)).length }));

    const usersByPlan: UserPlanDistribution[] = [
        { name: 'Silver', value: db.users.filter(u => u.plan === 'Discovery Lite').length, color: '#3B82F6' },
        { name: 'Gold', value: db.users.filter(u => u.plan === 'Strategic Pilot').length, color: '#8B5CF6' },
        { name: 'Platinum', value: db.users.filter(u => u.plan === 'Sovereign Subscription').length, color: '#10B981' },
    ];
    
    const siiScoreDistribution = Array.from({length: 10}, (_, i) => ({ name: `${i*10}-${i*10+9}`, value: db.assessments.filter(a => a.siiScore >= i*10 && a.siiScore < (i+1)*10).length }));

    return fakeApiCall({
        totalUsers: db.users.length,
        assessmentsCompleted: db.assessments.length,
        averageSiiScore: avgScore,
        userGrowth,
        assessmentGrowth,
        usersByPlan,
        recentSignups: [...db.users].sort((a,b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime()).slice(0, 5),
        siiScoreDistribution,
    });
};

export const getAllUsers = async (): Promise<User[]> => fakeApiCall(getDb().users);
export const getAllAssessments = async (): Promise<AssessmentReport[]> => fakeApiCall(getDb().assessments);

export const getAssessmentRecords = async (): Promise<AssessmentRecord[]> => {
    const db = getDb();
    const records = db.assessments.map(report => {
        const user = db.users.find(u => u.email === report.userEmail);
        return user ? { report, user } : null;
    }).filter((r): r is AssessmentRecord => r !== null);
    return fakeApiCall(records);
};

export const getCustomer360Data = async (userEmail: string): Promise<Customer360Data> => {
    const db = getDb();
    const user = db.users.find(u => u.email === userEmail);
    if (!user) return fakeApiFail("User not found");
    const account = db.accounts.find(a => a.name === user.accountName);
    if (!account) return fakeApiFail("Account not found");

    const generateSlaData = (base: number, range: number) => Array.from({ length: 24 }, (_, i) => ({ timestamp: Date.now() - (24 - i) * 60 * 60 * 1000, value: base + (Math.random() - 0.5) * range }));
    
    return fakeApiCall({
        user,
        account,
        billing: { plan: user.plan, status: 'Active', renewalDate: '2025-01-01T00:00:00Z' },
        team: [{ id: uuidv4(), name: user.username, role: 'Owner' }],
        activity: Array.from({ length: 5 }, (_, i) => ({ id: uuidv4(), timestamp: new Date(Date.now() - i * 10 * 60 * 1000).toISOString(), activity: i % 2 === 0 ? 'Logged In' : 'Viewed Dashboard' })),
        sla: { apiUptime: generateSlaData(99.95, 0.05), reportLatency: generateSlaData(350, 100) },
        lastAssessment: db.assessments.filter(a => a.userEmail === userEmail).pop() || null,
        subscribedSolutions: ['Event Horizon Synoptic'],
        initiatives: db.initiatives.filter(i => i.userEmail === userEmail),
        integrationPlans: db.integrationPlans.filter(p => p.userEmail === userEmail),
    });
};

export const getServiceCatalog = async (): Promise<Sku[]> => fakeApiCall(getDb().serviceCatalog);
export const getOrders = async (): Promise<Order[]> => fakeApiCall(getDb().orders);
export const getServiceInstancesWithSlo = async (): Promise<ServiceInstance[]> => fakeApiCall(getDb().serviceInstances);