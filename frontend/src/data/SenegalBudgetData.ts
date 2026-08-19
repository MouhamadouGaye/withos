export interface MinistryEmployment {
  ministry: string;
  etpt: number;
}

export interface Expense {
  category: string;
  amount: number;
}

export interface SectorPayroll {
  sector: string;
  percentage: number;
}

export interface YearData {
  year: number;

  /**
   * Données générales
   *
   * agents :
   * effectifs connus / disponibles
   *
   * payroll :
   * masse salariale ou rémunérations selon
   * le périmètre de la source.
   *
   * budget :
   * dépenses totales de la loi de finances
   *
   * debt :
   * service/intérêts ou autre agrégat selon
   * la donnée disponible.
   */
  stats: {
    agents: number | null;

    payroll: number | null;

    budget: number | null;

    debt: number | null;

    deficit?: number | null;

    deficitPercentGDP?: number | null;

    revenue?: number | null;

    payrollToTaxRevenue?: number | null;

    payrollToGDP?: number | null;

    nominalGDP?: number | null;
  };

  /**
   * Effectifs.
   */
  personnel: {
    permanent: number | null;

    contractual: number | null;

    employmentCeiling?: number | null;
  };

  /**
   * Effectifs par ministère.
   *
   * null = donnée non trouvée / non comparable
   */
  employmentByMinistry: MinistryEmployment[];

  /**
   * Structure des dépenses.
   */
  expenses: Expense[];

  /**
   * Répartition de la masse salariale.
   *
   * À utiliser uniquement lorsque la source
   * donne réellement cette ventilation.
   */
  payrollBySector: SectorPayroll[];

  /**
   * Métadonnées permettant au dashboard
   * d'afficher la qualité de la donnée.
   */
  metadata?: {
    source?: string;

    sourceType?:
      | "LFI"
      | "LFR"
      | "EXECUTION"
      | "COUR_DES_COMPTES"
      | "PROJECTION"
      | "AUTRE";

    note?: string;
  };
}

export const senegalBudgetData: Record<number, YearData> = {
  2012: {
    year: 2012,

    stats: {
      agents: 95779,
      payroll: 457.819,
      budget: null,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 457.819,
      },
    ],

    payrollBySector: [],

    metadata: {
      source:
        "Projet de loi de finances 2017 – Ministère de l'Économie, des Finances et du Plan",

      sourceType: "AUTRE",

      note: "Effectifs et masse salariale historiques. La ventilation par ministère n'est pas renseignée ici.",
    },
  },
  2013: {
    year: 2013,

    stats: {
      agents: 100797,
      payroll: 464.068,
      budget: null,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 464.068,
      },
    ],

    payrollBySector: [],

    metadata: {
      source:
        "Projet de loi de finances 2017 – Ministère de l'Économie, des Finances et du Plan",

      sourceType: "AUTRE",
    },
  },
  2014: {
    year: 2014,

    stats: {
      agents: 103360,
      payroll: 484.915,
      budget: null,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 484.915,
      },
    ],

    payrollBySector: [],

    metadata: {
      source:
        "Projet de loi de finances 2017 – Ministère de l'Économie, des Finances et du Plan",

      sourceType: "AUTRE",
    },
  },
  2015: {
    year: 2015,

    stats: {
      agents: null,
      payroll: 522.74,
      budget: null,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 522.74,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Cour des comptes – Rapport définitif n°005/2021",

      sourceType: "COUR_DES_COMPTES",

      note: "La Cour des comptes donne 90 230 agents dans son périmètre retraité. Ce chiffre n'est pas directement comparable à la série administrative globale.",
    },
  },
  2016: {
    year: 2016,

    stats: {
      agents: 121065,
      payroll: 564,
      budget: 2925,
      debt: 784,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 564,
      },
      {
        category: "Dette publique",
        amount: 784,
      },
      {
        category: "Autres dépenses courantes",
        amount: 822,
      },
      {
        category: "Dépenses en capital",
        amount: 694,
      },
    ],

    payrollBySector: [],

    metadata: {
      source:
        "FMI – Senegal in IMF Staff Country Reports / données LFI, RTEB et RELF 2016",

      sourceType: "EXECUTION",

      note: "564 Md correspond à l'exécution de la masse salariale en 2016 ; 538 Md correspondait à la LFI.",
    },
  },
  2017: {
    year: 2017,

    stats: {
      agents: null,
      payroll: 586,
      budget: 3360,
      debt: 680,

      deficit: null,
      deficitPercentGDP: null,
      revenue: 2084.1,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 586,
      },
      {
        category: "Dette publique",
        amount: 680,
      },
      {
        category: "Autres dépenses courantes",
        amount: 756.9,
      },
      {
        category: "Investissements",
        amount: 1225.2,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Loi de finances 2017",

      sourceType: "LFI",
    },
  },
  2018: {
    year: 2018,

    stats: {
      agents: null,
      payroll: 683,
      budget: 3709.1,
      debt: 839.8,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 683,
      },
      {
        category: "Dette publique",
        amount: 839.8,
      },
      {
        category: "Fonctionnement",
        amount: 314.319,
      },
      {
        category: "Transferts courants",
        amount: 471.181,
      },
      {
        category: "Investissements",
        amount: 1339.5,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "LFR 2018 – République du Sénégal",

      sourceType: "LFR",

      note: "La LFI 2018 prévoyait 633 Md ; la LFR 2018 porte la masse salariale à 683 Md.",
    },
  },
  2019: {
    year: 2019,

    stats: {
      agents: null,
      payroll: 744.96,
      budget: 3495.74,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 744.96,
      },
      {
        category: "Biens & services",
        amount: 384.83,
      },
      {
        category: "Transferts courants",
        amount: 705.41,
      },
      {
        category: "Investissements internes",
        amount: 626.03,
      },
      {
        category: "Investissements externes",
        amount: 762.31,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Cour des comptes – Situation des finances publiques 2019-2024",

      sourceType: "EXECUTION",
    },
  },
  2020: {
    year: 2020,

    stats: {
      agents: null,
      payroll: 831.29,
      budget: 3841.23,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 831.29,
      },
      {
        category: "Biens & services",
        amount: 339.02,
      },
      {
        category: "Transferts courants",
        amount: 955.93,
      },
      {
        category: "Investissements internes",
        amount: 774.27,
      },
      {
        category: "Investissements externes",
        amount: 652.44,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Cour des comptes – Situation des finances publiques 2019-2024",

      sourceType: "EXECUTION",
    },
  },
  2021: {
    year: 2021,

    stats: {
      agents: null,
      payroll: 915.58,
      budget: 3880.61,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 915.58,
      },
      {
        category: "Biens & services",
        amount: 426.07,
      },
      {
        category: "Transferts courants",
        amount: 857.34,
      },
      {
        category: "Investissements internes",
        amount: 809.39,
      },
      {
        category: "Investissements externes",
        amount: 565.88,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Cour des comptes – Situation des finances publiques 2019-2024",

      sourceType: "EXECUTION",
    },
  },

  2022: {
    year: 2022,

    stats: {
      agents: null,
      payroll: 1131.5,
      budget: 4884.56,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 1131.5,
      },
      {
        category: "Biens & services",
        amount: 388.68,
      },
      {
        category: "Transferts courants",
        amount: 1362.49,
      },
      {
        category: "Investissements internes",
        amount: 1050.39,
      },
      {
        category: "Investissements externes",
        amount: 570.03,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Cour des comptes – Situation des finances publiques 2019-2024",

      sourceType: "EXECUTION",

      note: "Le Rapport d'activités 2022 du MFB indique également 1 114,6 Md selon un périmètre différent.",
    },
  },

  2023: {
    year: 2023,

    stats: {
      agents: 171634,
      payroll: 1273,
      budget: 4904.98,
      debt: null,

      deficit: null,
      deficitPercentGDP: null,
      revenue: null,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 1273,
      },
      {
        category: "Biens & services",
        amount: 426.67,
      },
      {
        category: "Transferts courants",
        amount: 1147.67,
      },
      {
        category: "Investissements internes",
        amount: 855.62,
      },
      {
        category: "Investissements externes",
        amount: 603.6,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Loi de finances 2024 – Ministère des Finances et du Budget",

      sourceType: "LFI",

      note: "171 634 agents et 1 273 Md FCFA de masse salariale. La Cour des comptes donne 1 303,5 Md sur un périmètre d'exécution différent.",
    },
  },
  2024: {
    year: 2024,

    stats: {
      agents: 182554,
      payroll: 1402.6,
      budget: 6000,
      debt: 900,

      deficit: null,
      deficitPercentGDP: null,
      revenue: 4915.2,
      payrollToTaxRevenue: null,
      payrollToGDP: null,
      nominalGDP: null,
    },

    personnel: {
      permanent: null,
      contractual: null,
      employmentCeiling: null,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 1442.5,
      },
      {
        category: "Dette – intérêts",
        amount: 578.3,
      },
      {
        category: "Biens & services / transferts",
        amount: 1676.9,
      },
      {
        category: "Investissements",
        amount: 1836.3,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "LFI 2024 / LFR 2024 – Direction générale du Budget",

      sourceType: "LFR",
    },
  },
  2025: {
    year: 2025,

    stats: {
      agents: 191507,

      payroll: 1485.5,

      budget: 6580.2,

      debt: 1057.1,

      deficit: 1695.9,

      deficitPercentGDP: 7.82,

      revenue: 4884.3,

      payrollToTaxRevenue: null,

      payrollToGDP: null,

      nominalGDP: 21690.5,
    },

    personnel: {
      permanent: null,

      contractual: null,

      employmentCeiling: null,
    },

    // employmentByMinistry: [
    //   {
    //     ministry: "Éducation nationale",
    //     etpt: 99642,
    //   },

    //   {
    //     ministry: "Forces armées",
    //     etpt: 43780,
    //   },

    //   {
    //     ministry: "Intérieur",
    //     etpt: 21146,
    //   },

    //   {
    //     ministry: "Santé",
    //     etpt: 12601,
    //   },
    // ],
    employmentByMinistry: [
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
        ministry: "Emploi & Formation professionnelle",
        etpt: 4814,
      },
      {
        ministry: "Environnement & Transition écologique",
        etpt: 2218,
      },
      {
        ministry: "Agriculture & Élevage",
        etpt: 1461,
      },
      {
        ministry: "Affaires étrangères",
        etpt: 1065,
      },
      {
        ministry: "Urbanisme & Collectivités territoriales",
        etpt: 611,
      },
      {
        ministry: "Industrie & Commerce",
        etpt: 540,
      },
      {
        ministry: "Famille & Action sociale",
        etpt: 514,
      },
      {
        ministry: "Pêches & Économie maritime",
        etpt: 504,
      },
      {
        ministry: "Fonction publique",
        etpt: 422,
      },
      {
        ministry: "Travail & Relations avec les institutions",
        etpt: 326,
      },
      {
        ministry: "Économie, Plan & Coopération",
        etpt: 332,
      },
      {
        ministry: "Énergie, Pétrole & Mines",
        etpt: 274,
      },
      {
        ministry: "Hydraulique & Assainissement",
        etpt: 194,
      },
      {
        ministry: "Transports terrestres & aériens",
        etpt: 175,
      },
      {
        ministry: "Culture, Artisanat & Tourisme",
        etpt: 168,
      },
      {
        ministry: "Enseignement supérieur & Recherche",
        etpt: 126,
      },
      {
        ministry: "Communication, Télécommunications & Numérique",
        etpt: 112,
      },
      {
        ministry: "Infrastructures",
        etpt: 80,
      },
      {
        ministry: "Microfinance & Économie sociale",
        etpt: 87,
      },
      {
        ministry: "Jeunesse, Sports & Culture",
        etpt: 688,
      },
      {
        ministry: "Famille, Action sociale & Solidarités",
        etpt: 514,
      },
      {
        ministry: "Primature",
        etpt: 877,
      },
      {
        ministry: "Présidence de la République",
        etpt: 1962,
      },
      {
        ministry: "Cour des comptes",
        etpt: 230,
      },
      {
        ministry: "Cour suprême",
        etpt: 75,
      },
      {
        ministry: "Conseil constitutionnel",
        etpt: 17,
      },
      {
        ministry: "OFNAC",
        etpt: 16,
      },
    ],

    expenses: [
      {
        category: "Personnel",
        amount: 1485.5,
      },

      {
        category: "Dette – intérêts",
        amount: 1057.1,
      },

      {
        category: "Biens & services / transferts",
        amount: 1886.1,
      },

      {
        category: "Investissements",
        amount: 1936.1,
      },
    ],

    payrollBySector: [
      {
        sector: "Éducation",
        percentage: 58.9,
      },

      {
        sector: "Intérieur & Défense",
        percentage: 22.2,
      },

      {
        sector: "Santé",
        percentage: 5.8,
      },

      {
        sector: "Finances",
        percentage: 3.1,
      },

      {
        sector: "Justice",
        percentage: 2.7,
      },

      {
        sector: "Autres",
        percentage: 7.3,
      },
    ],

    metadata: {
      source: "LFR 2025 – Direction générale du Budget",

      sourceType: "LFR",

      note: "Les dépenses de personnel restent à 1 485,5 Md dans la LFR 2025. Le budget total révisé est de 6 580,2 Md.",
    },
  },
  2026: {
    year: 2026,

    stats: {
      agents: null,

      payroll: 1532.8,

      budget: 6905.3,

      debt: 1190.55,

      deficit: null,

      deficitPercentGDP: 5.37,

      revenue: null,

      payrollToTaxRevenue: 27.81,

      payrollToGDP: 6.46,

      nominalGDP: 23170,
    },

    personnel: {
      permanent: null,

      contractual: null,

      employmentCeiling: 206375,
    },

    employmentByMinistry: [],

    expenses: [
      {
        category: "Personnel",
        amount: 1532.8,
      },

      {
        category: "Dette – charges financières",
        amount: 1190.55,
      },

      {
        category: "Fonctionnement",
        amount: 1650,
      },

      {
        category: "Investissements",
        amount: 2803.9,
      },
    ],

    payrollBySector: [],

    metadata: {
      source: "Projet/Loi de finances 2026 – Direction générale du Budget",

      sourceType: "PROJECTION",

      note: "2026 est traité comme une donnée budgétaire prévisionnelle/plafond et non comme une exécution.",
    },
  },
};
