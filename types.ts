import type { ReactNode } from 'react';

// General & User
export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string; // Not sent to client
  recoveryPhraseHash: string; // Not sent to client
  registeredAt: string;
  accountName: string;
  plan: 'Discovery Lite' | 'Strategic Pilot' | 'Sovereign Subscription';
}

export interface AdminUser {
    email: string;
    name: string;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
  recoveryPhrase: string;
}

// Assessment
export type QuestionType = 'multiple-choice' | 'percentage';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
}

export interface Section {
  title: string;
  questions: Question[];
}

export type Answers = Record<string, string>;

export interface DomainAnalysis {
  domain: string;
  score: number;
  analysis: string;
}

export interface Recommendation {
    title: string;
    content: string;
}

export interface AssessmentReport {
  id: string;
  userEmail: string;
  createdAt: string;
  siiScore: number;
  executiveSummary: string;
  keyStrengths: string[];
  recommendations: Recommendation[];
  domainAnalyses: DomainAnalysis[];
  completedAt?: string;
}

// Pilots & Integrations
export type PilotStatus = 'Conceptual' | 'Active' | 'Planned' | 'Completed';

export interface Pilot {
  title: string;
  description: string;
  status: PilotStatus;
  icon: ReactNode;
}

export interface PilotSection {
    title: string;
    pilots: Pilot[];
}

export interface Integration {
  title: string;
  description: string;
  category: string;
  icon: ReactNode;
}

export interface CustomInitiative {
  id: string;
  userEmail: string;
  name: string;
  createdAt: string;
  pilots: string[];
}

export interface CustomIntegrationPlan {
  id: string;
  userEmail: string;
  name: string;
  createdAt: string;
  integrations: string[];
}


// Solutions & Pricing
export interface SolutionTier {
    name: string;
    subtitle: string;
    description: string;
    features: string[];
    ctaText: string;
    isFeatured?: boolean;
}

// Admin Types
export type AdminPage = 'dashboard' | 'users' | 'customer360' | 'assessments' | 'catalog' | 'orders' | 'slo';

export interface TrendData {
    name: string;
    value: number;
}

export interface UserPlanDistribution {
    name: 'Silver' | 'Gold' | 'Platinum';
    value: number;
    color: string;
}

export interface AdminDashboardData {
    totalUsers: number;
    assessmentsCompleted: number;
    averageSiiScore: number;
    userGrowth: { name: string; 'New Users': number }[];
    assessmentGrowth: { name: string; 'Assessments': number }[];
    usersByPlan: UserPlanDistribution[];
    recentSignups: User[];
    siiScoreDistribution: { name: string; value: number }[];
}

export interface AssessmentRecord {
    report: AssessmentReport;
    user: User;
}


// Customer 360 & Service Management
export interface Account {
    id: string;
    name: string;
    billingEmail: string;
}

export interface BillingInfo {
    plan: 'Strategic Pilot' | 'Sovereign Subscription' | 'Discovery Lite';
    status: 'Active' | 'Past Due' | 'Canceled';
    renewalDate: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: 'Owner' | 'Admin' | 'Member';
}

export interface ActivityLog {
    id: string;
    timestamp: string;
    activity: string;
}

export interface SlaDataPoint {
    timestamp: number;
    value: number;
}

export interface Customer360Data {
    user: User;
    account: Account;
    billing: BillingInfo;
    team: TeamMember[];
    activity: ActivityLog[];
    sla: {
        apiUptime: SlaDataPoint[];
        reportLatency: SlaDataPoint[];
    };
    lastAssessment: AssessmentReport | null;
    subscribedSolutions: string[];
    initiatives: CustomInitiative[];
    integrationPlans: CustomIntegrationPlan[];
}


// Admin Catalog & Orders
export type SkuType = 'SOLUTION' | 'ADD_ON' | 'PILOT';

export interface Sku {
    id: string;
    name: string;
    type: SkuType;
    active: boolean;
}

export type OrderState = 'DRAFT' | 'QUOTE' | 'CONTRACTED' | 'PLAN' | 'PROVISION' | 'VERIFY' | 'LIVE' | 'CHANGE' | 'SUSPEND' | 'TERMINATE';

export interface Order {
    id: string;
    accountName: string;
    project: string;
    state: OrderState;
    created_at: string;
}

export type ServiceState = 'PROVISIONING' | 'VERIFY' | 'LIVE' | 'SUSPENDED' | 'TERMINATING' | 'TERMINATED' | 'FAILED';

export interface SloMetric {
    name: 'Latency (ms)' | 'Availability (%)' | 'SKR (kb/s)' | 'QBER (%)';
    slo: number;
    data: { time: string; value: number }[];
}

export interface ServiceInstance {
    id: string;
    accountName: string;
    skuName: string;
    state: ServiceState;
    createdAt: string;
    sloMetrics: SloMetric[];
}