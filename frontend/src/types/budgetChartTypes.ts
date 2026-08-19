export type BudgetChartSlug =
  | "masse-salariale-secteur"
  | "effectifs-ministere"
  | "evolution-masse-salariale"
  | "structure-depenses"
  | "structure-agents"
  | "poids-secteurs";

export const budgetCharts = {
  "masse-salariale-secteur": {
    title: "Masse salariale par secteur",
    description:
      "Répartition de la masse salariale de l'État entre les principaux secteurs.",
    type: "doughnut",
  },

  "effectifs-ministere": {
    title: "Effectifs par ministère",
    description:
      "Répartition des effectifs de l'administration publique par ministère.",
    type: "bar",
  },

  "evolution-masse-salariale": {
    title: "Évolution de la masse salariale",
    description:
      "Évolution de la masse salariale de l'État sur la période disponible.",
    type: "line",
  },

  "structure-depenses": {
    title: "Structure des dépenses",
    description:
      "Répartition des principales catégories de dépenses publiques.",
    type: "bar",
  },

  "structure-agents": {
    title: "Structure des agents",
    description:
      "Répartition des agents entre personnels permanents et contractuels.",
    type: "doughnut",
  },

  "poids-secteurs": {
    title: "Poids relatif des secteurs",
    description:
      "Poids relatif des différents secteurs dans la masse salariale.",
    type: "polar",
  },
} as const;
