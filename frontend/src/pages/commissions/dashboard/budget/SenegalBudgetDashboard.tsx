import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";

import {
  payrollBySector,
  employmentByMinistry,
  payrollEvolution,
  budgetExpenses,
  personnelStructure,
  dashboardStats,
} from "../../../../data/SenegalBudgetData";

import "./SenegalBudgetDashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
);

const green = "#3ddc97";
const greenLight = "#65f5b6";
const greenDark = "#1f8f63";

const chartGrid = "rgba(255,255,255,0.06)";

const commonPlugins = {
  legend: {
    labels: {
      color: "rgba(255,255,255,0.82)",
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
    titleColor: "#65f5b6",
    bodyColor: "#ffffff",
    padding: 14,
  },
};

/* ========================================================= */
/* 1 — MASSE SALARIALE PAR SECTEUR */
/* ========================================================= */

const payrollSectorChart = {
  labels: payrollBySector.map((item) => item.sector),

  datasets: [
    {
      label: "Part de la masse salariale",

      data: payrollBySector.map((item) => item.percentage),

      backgroundColor: [
        "#3ddc97",
        "#2fb77e",
        "#239566",
        "#65f5b6",
        "#1f8f63",
        "#14734e",
        "rgba(61,220,151,0.20)",
      ],

      borderColor: "#071a12",
      borderWidth: 3,

      hoverOffset: 12,
    },
  ],
};

/* ========================================================= */
/* 2 — EMPLOIS PAR MINISTÈRE */
/* ========================================================= */

const employmentChart = {
  labels: employmentByMinistry.map((item) => item.ministry),

  datasets: [
    {
      label: "ETPT 2026",

      data: employmentByMinistry.map((item) => item.etpt),

      backgroundColor: "rgba(61,220,151,0.72)",

      borderColor: green,

      borderWidth: 1,

      borderRadius: 8,

      hoverBackgroundColor: greenLight,
    },
  ],
};

/* ========================================================= */
/* 3 — ÉVOLUTION MASSE SALARIALE */
/* ========================================================= */

const payrollEvolutionChart = {
  labels: payrollEvolution.map((item) => item.year.toString()),

  datasets: [
    {
      label: "Masse salariale / rémunérations",

      data: payrollEvolution.map((item) => item.amount),

      borderColor: green,

      backgroundColor: "rgba(61,220,151,0.12)",

      pointBackgroundColor: greenLight,

      pointBorderColor: "#071a12",

      pointBorderWidth: 3,

      pointRadius: 6,

      pointHoverRadius: 9,

      borderWidth: 3,

      tension: 0.4,

      fill: true,
    },
  ],
};

/* ========================================================= */
/* 4 — STRUCTURE DES DÉPENSES */
/* ========================================================= */

const budgetExpenseChart = {
  labels: budgetExpenses.map((item) => item.category),

  datasets: [
    {
      label: "Milliards FCFA",

      data: budgetExpenses.map((item) => item.amount),

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

/* ========================================================= */
/* 5 — STRUCTURE DES AGENTS */
/* ========================================================= */

const personnelStructureChart = {
  labels: personnelStructure.map((item) => item.type),

  datasets: [
    {
      label: "Agents",

      data: personnelStructure.map((item) => item.count),

      backgroundColor: [green, greenDark],

      borderColor: "#071a12",

      borderWidth: 4,

      hoverOffset: 12,
    },
  ],
};

/* ========================================================= */
/* 6 — POLAR AREA : POIDS DES SECTEURS */
/* ========================================================= */

const sectorPolarChart = {
  labels: payrollBySector.map((item) => item.sector),

  datasets: [
    {
      label: "Part (%)",

      data: payrollBySector.map((item) => item.percentage),

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

/* ========================================================= */
/* OPTIONS */
/* ========================================================= */

const doughnutOptions = {
  responsive: true,

  maintainAspectRatio: false,

  cutout: "64%",

  plugins: commonPlugins,
};

const horizontalBarOptions = {
  responsive: true,

  maintainAspectRatio: false,

  indexAxis: "y" as const,

  plugins: commonPlugins,

  scales: {
    x: {
      beginAtZero: true,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
      },
    },

    y: {
      grid: {
        display: false,
      },

      ticks: {
        color: "rgba(255,255,255,0.82)",
        font: {
          family: "Space Grotesk",
        },
      },
    },
  },
};

const lineOptions = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: commonPlugins,

  scales: {
    x: {
      grid: {
        color: chartGrid,
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
      },
    },

    y: {
      beginAtZero: false,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
      },
    },
  },
};

const barOptions = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: commonPlugins,

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
      },
    },

    y: {
      beginAtZero: true,

      grid: {
        color: chartGrid,
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
      },
    },
  },
};

const polarOptions = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: commonPlugins,

  scales: {
    r: {
      grid: {
        color: "rgba(61,220,151,0.12)",
      },

      ticks: {
        color: "rgba(255,255,255,0.65)",
        backdropColor: "transparent",
      },
    },
  },
};

/* ========================================================= */
/* COMPONENT */
/* ========================================================= */

export default function SenegalBudgetDashboard() {
  return (
    <main className="senegal-dashboard">
      {/* HERO */}

      <section className="hero-content-2027">
        <span className="dashboard-eyebrow">
          RÉPUBLIQUE DU SÉNÉGAL · DONNÉES BUDGÉTAIRES
        </span>

        <h1 className="neon-title-2027">
          <span className="gradient-text">Finances publiques</span>
        </h1>

        <p className="floating-text">
          Masse salariale, effectifs de l'État et structure des dépenses
          publiques
        </p>

        <div className="hero-badge">DONNÉES 2025 · PROJECTIONS 2026</div>
      </section>

      {/* KPI */}

      <section className="stats-grid-2027">
        <StatCard
          value={formatNumber(dashboardStats.totalAgents2025)}
          label="Agents de l'État · fin 2025"
        />

        <StatCard
          value={`${formatNumber(dashboardStats.payroll2025)} Md`}
          label="Rémunérations exécutées · 2025"
        />

        <StatCard
          value={`${formatNumber(dashboardStats.employmentCeiling2026)}`}
          label="Plafond d'emplois · 2026 ETPT"
        />

        <StatCard
          value={`${dashboardStats.educationPayrollShare}%`}
          label="Masse salariale Éducation & Formation"
        />
      </section>

      {/* GRAPHS */}

      <section className="charts-grid">
        {/* 1 */}

        <ChartCard
          title="Masse salariale par secteur"
          subtitle="Répartition sectorielle · 2025"
          className="large-card"
        >
          <Doughnut data={payrollSectorChart} options={doughnutOptions} />
        </ChartCard>

        {/* 2 */}

        <ChartCard
          title="Plafond d'emplois par ministère"
          subtitle="ETPT autorisés · LFI 2026"
          className="large-card"
        >
          <Bar data={employmentChart} options={horizontalBarOptions} />
        </ChartCard>

        {/* 3 */}

        <ChartCard
          title="Évolution de la masse salariale"
          subtitle="Milliards FCFA · 2023–2025"
        >
          <Line data={payrollEvolutionChart} options={lineOptions} />
        </ChartCard>

        {/* 4 */}

        <ChartCard
          title="Structure des dépenses"
          subtitle="LFR 2025 · milliards FCFA"
        >
          <Bar data={budgetExpenseChart} options={barOptions} />
        </ChartCard>

        {/* 5 */}

        <ChartCard
          title="Structure des agents"
          subtitle="Effectifs à fin décembre 2025"
        >
          <Doughnut data={personnelStructureChart} options={doughnutOptions} />
        </ChartCard>

        {/* 6 */}

        <ChartCard
          title="Poids relatif des secteurs"
          subtitle="Part de la masse salariale · 2025"
        >
          <PolarArea data={sectorPolarChart} options={polarOptions} />
        </ChartCard>
      </section>

      {/* FOOTER */}

      <footer className="dashboard-footer">
        <div>
          <strong>Source</strong>
          <span>Ministère des Finances et du Budget · Sénégal</span>
        </div>

        <div>
          <strong>Unités</strong>
          <span>Md FCFA · ETPT · %</span>
        </div>
      </footer>
    </main>
  );
}

/* ========================================================= */
/* STAT CARD */
/* ========================================================= */

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="stat-card-2027">
      <div className="stat-glow" />

      <div className="stat-value">{value}</div>

      <div className="stat-label">{label}</div>
    </article>
  );
}

/* ========================================================= */
/* CHART CARD */
/* ========================================================= */

interface ChartCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

function ChartCard({
  title,
  subtitle,
  children,
  className = "",
}: ChartCardProps) {
  return (
    <article className={`chart-card ${className}`}>
      <div className="chart-card-header">
        <div>
          <h2>{title}</h2>

          <p>{subtitle}</p>
        </div>

        <span className="chart-dot" />
      </div>

      <div className="chart-container">{children}</div>
    </article>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}
