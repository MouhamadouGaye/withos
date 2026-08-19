// src/utils/SenegalBudgetCharts.ts

import type { ChartData, ChartOptions } from "chart.js";

import { senegalBudgetData, type YearData } from "../data/SenegalBudgetData";

/* ========================================================= */
/* COLORS */
/* ========================================================= */

export const green = "#3ddc97";
export const greenLight = "#65f5b6";
export const greenDark = "#1f8f63";
export const greenDeep = "#14734e";

export const textSoft = "rgba(255,255,255,0.82)";
export const chartGrid = "rgba(255,255,255,0.06)";

/* ========================================================= */
/* FORMAT NUMBER */
/* ========================================================= */

export function formatNumber(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return "—";
  }

  return new Intl.NumberFormat("fr-FR").format(value);
}

/* ========================================================= */
/* COMMON PLUGINS */
/* ========================================================= */

export const commonPlugins = {
  legend: {
    labels: {
      color: textSoft,

      font: {
        family: "Space Grotesk",
      },

      padding: 20,
    },
  },

  tooltip: {
    backgroundColor: "#071a12",

    borderColor: "rgba(61,220,151,0.35)",

    borderWidth: 1,

    titleColor: greenLight,

    bodyColor: "#ffffff",

    padding: 14,
  },
};

/* ========================================================= */
/* OPTIONS */
/* ========================================================= */

export const doughnutOptions: ChartOptions<"doughnut"> = {
  responsive: true,

  maintainAspectRatio: false,

  cutout: "64%",

  plugins: commonPlugins,
};

export const horizontalBarOptions: ChartOptions<"bar"> = {
  responsive: true,

  maintainAspectRatio: false,

  indexAxis: "y",

  plugins: commonPlugins,

  scales: {
    x: {
      beginAtZero: true,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: textSoft,
      },
    },

    y: {
      grid: {
        display: false,
      },

      ticks: {
        color: textSoft,

        font: {
          family: "Space Grotesk",
        },
      },
    },
  },
};

export const lineOptions: ChartOptions<"line"> = {
  responsive: true,

  maintainAspectRatio: false,

  interaction: {
    mode: "index",

    intersect: false,
  },

  plugins: commonPlugins,

  scales: {
    x: {
      grid: {
        color: chartGrid,
      },

      ticks: {
        color: textSoft,
      },
    },

    y: {
      beginAtZero: false,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: textSoft,

        callback: (value) => `${value} Md`,
      },
    },
  },
};

export const barOptions: ChartOptions<"bar"> = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: commonPlugins,

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: textSoft,
      },
    },

    y: {
      beginAtZero: true,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: textSoft,
      },
    },
  },
};

export const polarOptions: ChartOptions<"polarArea"> = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: commonPlugins,

  scales: {
    r: {
      grid: {
        color: "rgba(61,220,151,0.12)",
      },

      ticks: {
        color: textSoft,

        backdropColor: "transparent",
      },
    },
  },
};

/* ========================================================= */
/* 1 — MASSE SALARIALE PAR SECTEUR */
/* ========================================================= */

export function buildPayrollSectorChart(data: YearData) {
  return {
    labels: data.payrollBySector.map((item) => item.sector),

    datasets: [
      {
        label: `Part de la masse salariale · ${data.year}`,

        data: data.payrollBySector.map((item) => item.percentage),

        backgroundColor: [
          green,
          "#2fb77e",
          "#239566",
          greenLight,
          greenDark,
          greenDeep,
          "rgba(61,220,151,0.20)",
        ],

        borderColor: "#071a12",

        borderWidth: 3,

        hoverOffset: 12,
      },
    ],
  };
}

/* ========================================================= */
/* 2 — EMPLOIS PAR MINISTÈRE */
/* ========================================================= */

export function buildEmploymentChart(data: YearData) {
  return {
    labels: data.employmentByMinistry.map((item) => item.ministry),

    datasets: [
      {
        label: `Effectifs · ${data.year}`,

        data: data.employmentByMinistry.map((item) => item.etpt),

        backgroundColor: "rgba(61,220,151,0.72)",

        borderColor: green,

        borderWidth: 1,

        borderRadius: 8,

        hoverBackgroundColor: greenLight,
      },
    ],
  };
}

/* ========================================================= */
/* 3 — ÉVOLUTION MASSE SALARIALE */
/* ========================================================= */

export function buildPayrollEvolutionChart() {
  const historicalYears = Object.keys(senegalBudgetData)
    .map(Number)
    .sort((a, b) => a - b);

  return {
    labels: historicalYears.map(String),

    datasets: [
      {
        label: "Masse salariale / rémunérations",

        data: historicalYears.map(
          (year) => senegalBudgetData[year]?.stats.payroll ?? null,
        ),

        borderColor: green,

        backgroundColor: "rgba(61,220,151,0.12)",

        pointBackgroundColor: greenLight,

        pointBorderColor: "#071a12",

        pointBorderWidth: 3,

        pointRadius: 5,

        pointHoverRadius: 9,

        borderWidth: 3,

        tension: 0.4,

        fill: true,
      },
    ],
  };
}

/* ========================================================= */
/* 4 — STRUCTURE DES DÉPENSES */
/* ========================================================= */

export function buildExpenseChart(data: YearData) {
  return {
    labels: data.expenses.map((item) => item.category),

    datasets: [
      {
        label: `Milliards FCFA · ${data.year}`,

        data: data.expenses.map((item) => item.amount),

        backgroundColor: [
          "rgba(61,220,151,0.45)",
          "rgba(61,220,151,0.65)",
          "rgba(61,220,151,0.85)",
          green,
        ],

        borderColor: green,

        borderWidth: 1,

        borderRadius: 10,
      },
    ],
  };
}

/* ========================================================= */
/* 5 — STRUCTURE DES AGENTS */
/* ========================================================= */

export function buildPersonnelChart(data: YearData) {
  return {
    labels: ["Agents permanents", "Agents contractuels"],

    datasets: [
      {
        label: `Agents · ${data.year}`,

        data: [data.personnel.permanent ?? 0, data.personnel.contractual ?? 0],

        backgroundColor: [green, greenDark],

        borderColor: "#071a12",

        borderWidth: 4,

        hoverOffset: 12,
      },
    ],
  };
}

/* ========================================================= */
/* 6 — POIDS SECTEURS */
/* ========================================================= */

export function buildSectorPolarChart(data: YearData) {
  return {
    labels: data.payrollBySector.map((item) => item.sector),

    datasets: [
      {
        label: `Part (%) · ${data.year}`,

        data: data.payrollBySector.map((item) => item.percentage),

        backgroundColor: [
          "rgba(61,220,151,0.85)",
          "rgba(61,220,151,0.70)",
          "rgba(61,220,151,0.60)",
          "rgba(61,220,151,0.50)",
          "rgba(61,220,151,0.40)",
          "rgba(61,220,151,0.30)",
          "rgba(61,220,151,0.18)",
        ],

        borderColor: "#071a12",

        borderWidth: 2,
      },
    ],
  };
}
