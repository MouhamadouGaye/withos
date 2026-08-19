// import { useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";

// import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";

// import { senegalBudgetData } from "../../../../../data/SenegalBudgetData";

// import { budgetCharts } from "../../../../../types/budgetChartTypes";

// import "./SenegalBudgetChartDetail.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend,
//   Filler,
// );

// const green = "#3ddc97";
// const greenLight = "#65f5b6";
// const greenDark = "#1f8f63";

// const textSoft = "rgba(255,255,255,0.82)";
// const chartGrid = "rgba(255,255,255,0.06)";

// export default function SenegalBudgetChartDetail() {
//   const { chartSlug } = useParams();

//   const [selectedYear, setSelectedYear] = useState(2025);

//   const years = useMemo(() => {
//     return Object.keys(senegalBudgetData)
//       .map(Number)
//       .sort((a, b) => b - a);
//   }, []);

//   const config = budgetCharts[chartSlug as keyof typeof budgetCharts];

//   if (!config) {
//     return (
//       <main className="chart-detail-page">
//         <h1>Graphique introuvable</h1>

//         <Link to="/finances-publiques">Retour au tableau de bord</Link>
//       </main>
//     );
//   }

//   const data = senegalBudgetData[selectedYear];

//   return (
//     <main className="chart-detail-page">
//       {/* HEADER */}

//       <header className="chart-detail-header">
//         <Link to="/finances-publiques" className="back-button">
//           ← Retour aux finances publiques
//         </Link>

//         <span className="dashboard-eyebrow">
//           RÉPUBLIQUE DU SÉNÉGAL · FINANCES PUBLIQUES
//         </span>

//         <h1>
//           <span className="gradient-text">{config.title}</span>
//         </h1>

//         <p>{config.description}</p>
//       </header>

//       {/* ANNÉES */}

//       <section className="detail-year-selector">
//         <span>ANNÉE</span>

//         <div>
//           {years.map((year) => (
//             <button
//               key={year}
//               type="button"
//               className={
//                 selectedYear === year ? "year-button active" : "year-button"
//               }
//               onClick={() => setSelectedYear(year)}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* KPI */}

//       <section className="detail-kpis">
//         <DetailKpi label="Agents" value={formatNumber(data.stats.agents)} />

//         <DetailKpi
//           label="Masse salariale"
//           value={`${formatNumber(data.stats.payroll)} Md`}
//         />

//         <DetailKpi
//           label="Budget"
//           value={`${formatNumber(data.stats.budget)} Md`}
//         />

//         <DetailKpi
//           label="Dette"
//           value={`${formatNumber(data.stats.debt)} Md`}
//         />
//       </section>

//       {/* GRAND GRAPHIQUE */}

//       <section className="detail-chart-card">
//         <div className="detail-chart-header">
//           <div>
//             <span className="chart-detail-year">DONNÉES {selectedYear}</span>

//             <h2>{config.title}</h2>

//             <p>{config.description}</p>
//           </div>

//           <span className="chart-dot" />
//         </div>

//         <div className="detail-chart-container">
//           {chartSlug === "masse-salariale-secteur" && (
//             <Doughnut
//               data={buildPayrollSectorChart(data)}
//               options={doughnutOptions}
//             />
//           )}

//           {chartSlug === "effectifs-ministere" && (
//             <Bar
//               data={buildEmploymentChart(data)}
//               options={horizontalBarOptions}
//             />
//           )}

//           {chartSlug === "evolution-masse-salariale" && (
//             <Line data={buildPayrollEvolutionChart()} options={lineOptions} />
//           )}

//           {chartSlug === "structure-depenses" && (
//             <Bar data={buildExpenseChart(data)} options={barOptions} />
//           )}

//           {chartSlug === "structure-agents" && (
//             <Doughnut
//               data={buildPersonnelChart(data)}
//               options={doughnutOptions}
//             />
//           )}

//           {chartSlug === "poids-secteurs" && (
//             <PolarArea
//               data={buildSectorPolarChart(data)}
//               options={polarOptions}
//             />
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

import { senegalBudgetData } from "../../../../../data/SenegalBudgetData";

import { budgetCharts } from "../../../../../types/budgetChartTypes";

import {
  buildPayrollSectorChart,
  buildEmploymentChart,
  buildPayrollEvolutionChart,
  buildExpenseChart,
  buildPersonnelChart,
  buildSectorPolarChart,
  doughnutOptions,
  horizontalBarOptions,
  lineOptions,
  barOptions,
  polarOptions,
  formatNumber,
} from "../../../../../data/SenegalBudgetCharts";

import "./SenegalBudgetChartDetails.css";
import Footer from "../../../../../components/footer/Footer";

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
/* COMPONENT */
/* ========================================================= */

export default function SenegalBudgetChartDetail() {
  const { chartSlug } = useParams<{
    chartSlug: string;
  }>();

  const years = useMemo(() => {
    return Object.keys(senegalBudgetData)
      .map(Number)
      .sort((a, b) => b - a);
  }, []);

  const [selectedYear, setSelectedYear] = useState<number>(years[0] ?? 2025);

  const config = budgetCharts[chartSlug as keyof typeof budgetCharts];

  /* ======================================================= */
  /* GRAPHIQUE INCONNU */
  /* ======================================================= */

  if (!config) {
    return (
      <main className="chart-detail-page">
        <h1>Graphique introuvable</h1>

        <Link to="/finances-publiques">← Retour au tableau de bord</Link>
      </main>
    );
  }

  const data = senegalBudgetData[selectedYear];

  if (!data) {
    return (
      <main className="chart-detail-page">
        <h1>Données indisponibles</h1>

        <Link to="/finances-publiques">← Retour au tableau de bord</Link>
      </main>
    );
  }

  /* ======================================================= */
  /* RENDER */
  /* ======================================================= */

  return (
    <div>
      <main className="chart-detail-page">
        {/* HEADER */}

        <header className="chart-detail-header">
          <Link to="/finances-publiques" className="back-button">
            ← Retour aux finances publiques
          </Link>

          <span className="dashboard-eyebrow">
            RÉPUBLIQUE DU SÉNÉGAL · FINANCES PUBLIQUES
          </span>

          <h1>
            <span className="gradient-text">{config.title}</span>
          </h1>

          <p>{config.description}</p>
        </header>

        {/* ================================================= */}
        {/* ANNÉES */}
        {/* ================================================= */}

        <section className="detail-year-selector">
          <span>ANNÉE</span>

          <div>
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
        </section>

        {/* ================================================= */}
        {/* KPI */}
        {/* ================================================= */}

        <section className="detail-kpis">
          <DetailKpi label="Agents" value={formatNumber(data.stats.agents)} />

          <DetailKpi
            label="Masse salariale"
            value={`${formatNumber(data.stats.payroll)} Md`}
          />

          <DetailKpi
            label="Budget"
            value={`${formatNumber(data.stats.budget)} Md`}
          />

          <DetailKpi
            label="Dette"
            value={`${formatNumber(data.stats.debt)} Md`}
          />
        </section>

        {/* ================================================= */}
        {/* GRAND GRAPHIQUE */}
        {/* ================================================= */}

        <section className="detail-chart-card">
          <div className="detail-chart-header">
            <div>
              <span className="chart-detail-year">DONNÉES {selectedYear}</span>

              <h2>{config.title}</h2>

              <p>{config.description}</p>
            </div>

            <span className="chart-dot" />
          </div>

          <div className="detail-chart-container">
            {chartSlug === "masse-salariale-secteur" &&
              (data.payrollBySector.length > 0 ? (
                <Doughnut
                  data={buildPayrollSectorChart(data)}
                  options={doughnutOptions}
                />
              ) : (
                <EmptyChart year={selectedYear} />
              ))}

            {chartSlug === "effectifs-ministere" &&
              (data.employmentByMinistry.length > 0 ? (
                <Bar
                  data={buildEmploymentChart(data)}
                  options={horizontalBarOptions}
                />
              ) : (
                <EmptyChart year={selectedYear} />
              ))}

            {chartSlug === "evolution-masse-salariale" && (
              <Line data={buildPayrollEvolutionChart()} options={lineOptions} />
            )}

            {chartSlug === "structure-depenses" &&
              (data.expenses.length > 0 ? (
                <Bar data={buildExpenseChart(data)} options={barOptions} />
              ) : (
                <EmptyChart year={selectedYear} />
              ))}

            {chartSlug === "structure-agents" && (
              <Doughnut
                data={buildPersonnelChart(data)}
                options={doughnutOptions}
              />
            )}

            {chartSlug === "poids-secteurs" &&
              (data.payrollBySector.length > 0 ? (
                <PolarArea
                  data={buildSectorPolarChart(data)}
                  options={polarOptions}
                />
              ) : (
                <EmptyChart year={selectedYear} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
interface DetailKpiProps {
  label: string;
  value: string;
}

function DetailKpi({ label, value }: DetailKpiProps) {
  return (
    <article className="detail-kpi">
      <span className="detail-kpi-label">{label}</span>

      <strong className="detail-kpi-value">{value}</strong>
    </article>
  );
}

function EmptyChart({ year }: { year: number }) {
  return (
    <div className="empty-chart">
      <div className="empty-chart-icon">—</div>

      <p>Données non disponibles</p>

      <span>{year}</span>
    </div>
  );
}
