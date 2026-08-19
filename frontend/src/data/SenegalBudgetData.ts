export interface PayrollSector {
  sector: string;
  amount?: number;
  percentage: number;
}

export interface EmploymentData {
  ministry: string;
  etpt: number;
}

export interface PayrollEvolution {
  year: number;
  amount: number;
}

export interface BudgetExpense {
  category: string;
  amount: number;
}

export interface PersonnelType {
  type: string;
  count: number;
}

/**
 * DONNÉES BUDGÉTAIRES — SÉNÉGAL
 *
 * Montants financiers en milliards FCFA.
 * Effectifs en personnes / ETPT selon le graphique.
 */

export const payrollBySector: PayrollSector[] = [
  {
    sector: "Éducation & Formation",
    amount: 817.5,
    percentage: 58.9,
  },
  {
    sector: "Intérieur & Forces armées",
    percentage: 22.2,
  },
  {
    sector: "Santé & Action sociale",
    percentage: 5.8,
  },
  {
    sector: "Finances & Budget",
    percentage: 3.1,
  },
  {
    sector: "Justice",
    percentage: 2.7,
  },
  {
    sector: "Institutions constitutionnelles",
    percentage: 2.3,
  },
  {
    sector: "Autres",
    percentage: 5.0,
  },
];

/**
 * Plafond d'autorisation des emplois rémunérés par l'État
 * LFI 2026 — ETPT
 */
export const employmentByMinistry: EmploymentData[] = [
  {
    ministry: "Éducation nationale",
    etpt: 99642,
  },
  {
    ministry: "Forces armées",
    etpt: 43780,
  },
  {
    ministry: "Intérieur & Sécurité publique",
    etpt: 21146,
  },
  {
    ministry: "Santé & Hygiène publique",
    etpt: 12601,
  },
  {
    ministry: "Finances & Budget",
    etpt: 6045,
  },
  {
    ministry: "Justice",
    etpt: 5265,
  },
  {
    ministry: "Emploi & Formation",
    etpt: 4814,
  },
  {
    ministry: "Agriculture",
    etpt: 1461,
  },
  {
    ministry: "Affaires étrangères",
    etpt: 1065,
  },
  {
    ministry: "Primature",
    etpt: 877,
  },
];

/**
 * Évolution de la masse salariale /
 * rémunérations exécutées.
 *
 * 2023 : masse salariale Administration publique
 * 2024 : masse salariale exécutée
 * 2025 : rémunération des salariés exécutée
 *
 * Md FCFA
 */
export const payrollEvolution: PayrollEvolution[] = [
  {
    year: 2023,
    amount: 1273.0,
  },
  {
    year: 2024,
    amount: 1402.6,
  },
  {
    year: 2025,
    amount: 1423.0,
  },
];

/**
 * LFR 2025
 *
 * Md FCFA
 */
export const budgetExpenses: BudgetExpense[] = [
  {
    category: "Intérêts de la dette",
    amount: 1057.1,
  },
  {
    category: "Dépenses de personnel",
    amount: 1485.5,
  },
  {
    category: "Biens, services & transferts",
    amount: 1886.1,
  },
  {
    category: "Investissements",
    amount: 1936.1,
  },
];

/**
 * Effectif de l'État à fin décembre 2025
 */
export const personnelStructure: PersonnelType[] = [
  {
    type: "Agents permanents",
    count: 186347,
  },
  {
    type: "Contractuels",
    count: 5160,
  },
];

/**
 * Indicateurs principaux du dashboard
 */
export const dashboardStats = {
  totalAgents2025: 191507,
  permanentAgents2025: 186347,
  contractualAgents2025: 5160,

  payroll2025: 1423.0,

  personnelBudgetLFR2025: 1485.5,

  currentExpensesLFR2025: 4428.7,

  totalBudgetExpensesLFR2025: 6580.2,

  employmentCeiling2026: 206375,

  educationPayrollShare: 58.9,

  educationEmployment2026: 99642,
};
