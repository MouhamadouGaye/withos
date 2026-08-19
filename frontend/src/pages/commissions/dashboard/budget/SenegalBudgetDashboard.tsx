import { useMemo, useState } from "react";

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

import "./SenegalBudgetDashboard.css";
import { senegalBudgetData } from "../../../../data/SenegalBudgetData";

/* ========================================================= */
/* CHART.JS REGISTER */
/* ========================================================= */

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

/* ========================================================= */
/* COLORS */
/* ========================================================= */

const green = "#3ddc97";
const greenLight = "#65f5b6";
const greenDark = "#1f8f63";
const greenDeep = "#14734e";

const chartGrid = "rgba(255,255,255,0.06)";
const textSoft = "rgba(255,255,255,0.82)";

/* ========================================================= */
/* YEARS */
/* ========================================================= */

const years = Object.keys(senegalBudgetData)
  .map(Number)
  .sort((a, b) => b - a);

/* ========================================================= */
/* COMMON PLUGINS */
/* ========================================================= */

const commonPlugins = {
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
/* CHART OPTIONS */
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

const lineOptions = {
  responsive: true,

  maintainAspectRatio: false,

  interaction: {
    mode: "index" as const,

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

        callback: (value: string | number) => `${value} Md`,
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
        color: textSoft,

        backdropColor: "transparent",
      },
    },
  },
};

/* ========================================================= */
/* COMPONENT */
/* ========================================================= */

export default function SenegalBudgetDashboard() {
  /* ======================================================= */
  /* ANNÉE SÉLECTIONNÉE */
  /* ======================================================= */

  const [selectedYear, setSelectedYear] = useState<number>(years[23] ?? 2025);

  /* ======================================================= */
  /* DONNÉES ANNÉE COURANTE */
  /* ======================================================= */

  const data = senegalBudgetData[selectedYear];

  /* ======================================================= */
  /* HISTORIQUE DES ANNÉES */
  /* ======================================================= */

  const historicalYears = useMemo(() => {
    return Object.keys(senegalBudgetData)
      .map(Number)
      .sort((a, b) => a - b);
  }, []);

  /* ======================================================= */
  /* 1 — MASSE SALARIALE PAR SECTEUR */
  /* ======================================================= */

  const payrollSectorChart = useMemo(() => {
    if (!data || data.payrollBySector.length === 0) {
      return null;
    }

    return {
      labels: data.payrollBySector.map((item) => item.sector),

      datasets: [
        {
          label: `Part de la masse salariale · ${selectedYear}`,

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
  }, [data, selectedYear]);

  /* ======================================================= */
  /* 2 — EMPLOIS PAR MINISTÈRE */
  /* ======================================================= */

  const employmentChart = useMemo(() => {
    if (!data || data.employmentByMinistry.length === 0) {
      return null;
    }

    return {
      labels: data.employmentByMinistry.map((item) => item.ministry),

      datasets: [
        {
          label: `Effectifs · ${selectedYear}`,

          data: data.employmentByMinistry.map((item) => item.etpt),

          backgroundColor: "rgba(61,220,151,0.72)",

          borderColor: green,

          borderWidth: 1,

          borderRadius: 8,

          hoverBackgroundColor: greenLight,
        },
      ],
    };
  }, [data, selectedYear]);

  /* ======================================================= */
  /* 3 — ÉVOLUTION DE LA MASSE SALARIALE */
  /* ======================================================= */

  const payrollEvolutionChart = useMemo(() => {
    return {
      labels: historicalYears.map(String),

      datasets: [
        {
          label: "Masse salariale",

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

          spanGaps: true,
        },
      ],
    };
  }, [historicalYears]);

  /* ======================================================= */
  /* 4 — STRUCTURE DES DÉPENSES */
  /* ======================================================= */

  const budgetExpenseChart = useMemo(() => {
    if (!data || data.expenses.length === 0) {
      return null;
    }

    return {
      labels: data.expenses.map((item) => item.category),

      datasets: [
        {
          label: `Dépenses · ${selectedYear}`,

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
  }, [data, selectedYear]);

  /* ======================================================= */
  /* 5 — STRUCTURE DES AGENTS */
  /* ======================================================= */

  const personnelStructureChart = useMemo(() => {
    if (!data) {
      return null;
    }

    return {
      labels: ["Agents permanents", "Agents contractuels"],

      datasets: [
        {
          label: `Agents · ${selectedYear}`,

          data: [data.personnel.permanent, data.personnel.contractual],

          backgroundColor: [green, greenDark],

          borderColor: "#071a12",

          borderWidth: 4,

          hoverOffset: 12,
        },
      ],
    };
  }, [data, selectedYear]);

  /* ======================================================= */
  /* 6 — POIDS RELATIF DES SECTEURS */
  /* ======================================================= */

  const sectorPolarChart = useMemo(() => {
    if (!data || data.payrollBySector.length === 0) {
      return null;
    }

    return {
      labels: data.payrollBySector.map((item) => item.sector),

      datasets: [
        {
          label: `Part · ${selectedYear}`,

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
  }, [data, selectedYear]);

  /* ======================================================= */
  /* SÉCURITÉ */
  /* ======================================================= */

  if (!data) {
    return (
      <main className="senegal-dashboard">
        <div className="dashboard-error">
          <h2>Données indisponibles</h2>

          <p>Aucune donnée disponible pour l'année {selectedYear}.</p>
        </div>
      </main>
    );
  }

  /* ======================================================= */
  /* RENDER */
  /* ======================================================= */

  return (
    <main className="senegal-dashboard">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

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

        <div className="hero-badge">DONNÉES {selectedYear}</div>

        {/* ================================================= */}
        {/* SELECTEUR ANNÉE */}
        {/* ================================================= */}

        <div className="year-selector">
          <span className="year-label">ANNÉE DES DONNÉES</span>

          <div className="year-list">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                className={
                  selectedYear === year ? "year-button active" : "year-button"
                }
                onClick={() => setSelectedYear(year)}
                aria-pressed={selectedYear === year}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* KPI */}
      {/* ================================================= */}

      <section className="stats-grid-2027">
        <StatCard
          value={formatNumber(data.stats.agents ?? 0)}
          label={`Agents de l'État · ${selectedYear}`}
        />

        <StatCard
          value={`${formatNumber(data.stats.payroll ?? 0)} Md`}
          label={`Masse salariale · ${selectedYear}`}
        />

        <StatCard
          value={`${formatNumber(data.stats.budget ?? 0)} Md`}
          label={`Budget · ${selectedYear}`}
        />

        <StatCard
          value={`${formatNumber(data.stats.debt ?? 0)} Md`}
          label={`Dette · ${selectedYear}`}
        />
      </section>

      {/* ================================================= */}
      {/* GRAPHIQUES */}
      {/* ================================================= */}

      <section className="charts-grid">
        {/* ================================================= */}
        {/* 1 — MASSE SALARIALE PAR SECTEUR */}
        {/* ================================================= */}

        {/* <ChartCard
          title="Masse salariale par secteur"
          subtitle={`Répartition sectorielle · ${selectedYear}`}
          className="large-card"
        >
          {payrollSectorChart ? (
            <Doughnut data={payrollSectorChart} options={doughnutOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard> */}
        <ChartCard
          title="Masse salariale par secteur"
          subtitle={`Répartition sectorielle · ${selectedYear}`}
          className="large-card"
          chartSlug="masse-salariale-secteur"
        >
          {payrollSectorChart ? (
            <Doughnut data={payrollSectorChart} options={doughnutOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard>

        {/* ================================================= */}
        {/* 2 — EMPLOIS PAR MINISTÈRE */}
        {/* ================================================= */}

        {/* <ChartCard
          title="Effectifs par ministère"
          subtitle={`ETPT / agents · ${selectedYear}`}
          className="large-card"
        >
          {employmentChart ? (
            <Bar data={employmentChart} options={horizontalBarOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard> */}
        <ChartCard
          title="Effectifs par ministère"
          subtitle={`ETPT / agents · ${selectedYear}`}
          className="large-card"
          chartSlug="effectifs-ministere"
        >
          {employmentChart ? (
            <Bar data={employmentChart} options={horizontalBarOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard>

        {/* ================================================= */}
        {/* 3 — ÉVOLUTION */}
        {/* ================================================= */}
        {/* 
        <ChartCard
          title="Évolution de la masse salariale"
          subtitle={
            historicalYears.length > 0
              ? `Historique · ${historicalYears[0]}–${historicalYears[historicalYears.length - 1]}`
              : "Historique"
          }
        >
          <Line data={payrollEvolutionChart} options={lineOptions} />
        </ChartCard> */}
        <ChartCard
          title="Évolution de la masse salariale"
          subtitle={
            historicalYears.length > 0
              ? `Historique · ${historicalYears[0]}–${historicalYears[historicalYears.length - 1]}`
              : "Historique"
          }
          chartSlug="evolution-masse-salariale"
        >
          <Line data={payrollEvolutionChart} options={lineOptions} />
        </ChartCard>

        {/* ================================================= */}
        {/* 4 — DÉPENSES */}
        {/* ================================================= */}

        {/* <ChartCard
          title="Structure des dépenses"
          subtitle={`Milliards FCFA · ${selectedYear}`}
        >
          {budgetExpenseChart ? (
            <Bar data={budgetExpenseChart} options={barOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard> */}
        <ChartCard
          title="Structure des dépenses"
          subtitle={`Milliards FCFA · ${selectedYear}`}
          chartSlug="structure-depenses"
        >
          {budgetExpenseChart ? (
            <Bar data={budgetExpenseChart} options={barOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard>

        {/* ================================================= */}
        {/* 5 — PERSONNEL */}
        {/* ================================================= */}

        {/* <ChartCard
          title="Structure des agents"
          subtitle={`Permanents / contractuels · ${selectedYear}`}
        >
          {personnelStructureChart ? (
            <Doughnut
              data={personnelStructureChart}
              options={doughnutOptions}
            />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard> */}
        <ChartCard
          title="Structure des agents"
          subtitle={`Permanents / contractuels · ${selectedYear}`}
          chartSlug="structure-agents"
        >
          {personnelStructureChart ? (
            <Doughnut
              data={personnelStructureChart}
              options={doughnutOptions}
            />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard>

        {/* ================================================= */}
        {/* 6 — POLAR */}
        {/* ================================================= */}

        {/* <ChartCard
          title="Poids relatif des secteurs"
          subtitle={`Part de la masse salariale · ${selectedYear}`}
        >
          {sectorPolarChart ? (
            <PolarArea data={sectorPolarChart} options={polarOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard> */}
        <ChartCard
          title="Poids relatif des secteurs"
          subtitle={`Part de la masse salariale · ${selectedYear}`}
          chartSlug="poids-secteurs"
        >
          {sectorPolarChart ? (
            <PolarArea data={sectorPolarChart} options={polarOptions} />
          ) : (
            <EmptyChart year={selectedYear} />
          )}
        </ChartCard>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="dashboard-footer">
        <div>
          <strong>Source</strong>

          <span>Ministère des Finances et du Budget · Sénégal</span>
        </div>

        <div>
          <strong>Année sélectionnée</strong>

          <span>{selectedYear}</span>
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

// interface ChartCardProps {
//   title: string;
//   subtitle: string;
//   children: React.ReactNode;
//   className?: string;
// }

// function ChartCard({
//   title,
//   subtitle,
//   children,
//   className = "",
// }: ChartCardProps) {
//   return (
//     <article className={`chart-card ${className}`}>
//       <div className="chart-card-header">
//         <div>
//           <h2>{title}</h2>

//           <p>{subtitle}</p>
//         </div>

//         <span className="chart-dot" />
//       </div>

//       <div className="chart-container">{children}</div>
//     </article>
//   );
// }

import { useNavigate } from "react-router-dom";
import type { BudgetChartSlug } from "../../../../types/budgetChartTypes";

interface ChartCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  chartSlug?: BudgetChartSlug;
}

function ChartCard({
  title,
  subtitle,
  children,
  className = "",
  chartSlug,
}: ChartCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!chartSlug) return;

    navigate(`/finances-publiques/graphique/${chartSlug}`);
  };

  return (
    <article
      className={`chart-card ${className} ${
        chartSlug ? "chart-card-clickable" : ""
      }`}
      onClick={handleClick}
      role={chartSlug ? "button" : undefined}
      tabIndex={chartSlug ? 0 : undefined}
      onKeyDown={(event) => {
        if (!chartSlug) return;

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="chart-card-header">
        <div>
          <h2>{title}</h2>

          <p>{subtitle}</p>
        </div>

        {chartSlug && <span className="chart-expand">↗</span>}
      </div>

      <div className="chart-container">{children}</div>

      {chartSlug && (
        <div className="chart-card-footer">
          <span>Voir les données détaillées</span>

          <span>→</span>
        </div>
      )}
    </article>
  );
}

/* ========================================================= */
/* EMPTY CHART */
/* ========================================================= */

function EmptyChart({ year }: { year: number }) {
  return (
    <div className="empty-chart">
      <div className="empty-chart-icon">—</div>

      <p>Données détaillées non disponibles</p>

      <span>{year}</span>
    </div>
  );
}

/* ========================================================= */
/* FORMAT NUMBER */
/* ========================================================= */

function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}
