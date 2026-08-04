import React from "react";
import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaUsers,
  FaFileAlt,
  FaCoins,
  FaUniversity,
  FaCalendarAlt,
  FaDownload,
} from "react-icons/fa";

import "./CommissionDashboard.css";

const CommissionDashboard: React.FC = () => {
  const indicators = [
    {
      icon: <FaChartLine />,
      value: "5,2%",
      label: "Croissance économique",
      variation: "+0,8%",
      positive: true,
    },

    {
      icon: <FaCoins />,
      value: "3,1%",
      label: "Inflation",
      variation: "-0,4%",
      positive: true,
    },

    {
      icon: <FaUniversity />,
      value: "72%",
      label: "Dette publique / PIB",
      variation: "+2,1%",
      positive: false,
    },

    {
      icon: <FaFileAlt />,
      value: "38",
      label: "Publications",
      variation: "+6",
      positive: true,
    },
  ];

  const reports = [
    {
      title: "Analyse des finances publiques 2026",

      category: "Budget",

      date: "Juin 2026",
    },

    {
      title: "Perspectives économiques nationales",

      category: "Croissance",

      date: "Mai 2026",
    },

    {
      title: "Réforme fiscale et compétitivité",

      category: "Fiscalité",

      date: "Avril 2026",
    },
  ];

  return (
    <main className="dashboard-page">
      {/* ======================
          HERO DASHBOARD
      ======================= */}

      <section className="dashboard-hero">
        <div className="dashboard-glow"></div>

        <div className="dashboard-container">
          <span className="dashboard-tag">OBSERVATOIRE ÉCONOMIQUE</span>

          <h1>
            Tableau de bord
            <br />
            <span>Économie & Finances publiques</span>
          </h1>

          <p>
            Une vision synthétique des principaux indicateurs économiques, des
            analyses produites et des travaux de la commission.
          </p>
        </div>
      </section>

      {/* ======================
          INDICATEURS
      ======================= */}

      <section className="indicator-section">
        <div className="indicator-grid">
          {indicators.map((item, index) => (
            <article className="indicator-card" key={index}>
              <div className="indicator-icon">{item.icon}</div>

              <h2>{item.value}</h2>

              <p>{item.label}</p>

              <span
                className={
                  item.positive ? "variation positive" : "variation negative"
                }
              >
                {item.positive ? <FaArrowUp /> : <FaArrowDown />}

                {item.variation}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ======================
          PUBLICATIONS
      ======================= */}

      {/* ======================
          AGENDA
      ======================= */}

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Agenda de la commission</h2>
        </div>

        <div className="agenda-grid">
          <article className="agenda-card">
            <FaCalendarAlt />

            <div>
              <strong>15 Septembre 2026</strong>

              <p>Réunion mensuelle de la commission</p>
            </div>
          </article>

          <article className="agenda-card">
            <FaCalendarAlt />

            <div>
              <strong>02 Octobre 2026</strong>

              <p>Publication du rapport économique</p>
            </div>
          </article>

          <article className="agenda-card">
            <FaCalendarAlt />

            <div>
              <strong>20 Novembre 2026</strong>

              <p>Conférence sur les finances publiques</p>
            </div>
          </article>
        </div>
      </section>

      {/* ======================
          ÉQUIPE
      ======================= */}

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Équipe de la commission</h2>
        </div>

        <div className="team-grid">
          <article className="team-card">
            <div className="avatar">RS</div>

            <h3>Responsable</h3>

            <p>Direction de la commission</p>
          </article>

          <article className="team-card">
            <div className="avatar">RA</div>

            <h3>Responsable adjoint</h3>

            <p>Coordination des travaux</p>
          </article>

          <article className="team-card">
            <div className="avatar">RG</div>

            <h3>Rapporteur général</h3>

            <p>Publications et analyses</p>
          </article>
        </div>
      </section>

      {/* ======================
          ACTIVITÉS
      ======================= */}

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Activités récentes</h2>
        </div>

        <div className="activity-box">
          <p>✓ Nouvelle note économique publiée</p>

          <p>✓ Groupe fiscalité mis à jour</p>

          <p>✓ Analyse budgétaire terminée</p>

          <p>✓ Réunion stratégique programmée</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Derniers rapports</h2>

          <p>Travaux récents de la commission</p>
        </div>

        <div className="reports-grid">
          {reports.map((report, index) => (
            <article className="report-card" key={index}>
              <span className="report-category">{report.category}</span>

              <h3>{report.title}</h3>

              <p>Publication : {report.date}</p>

              <button>
                <FaDownload />
                Télécharger
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CommissionDashboard;
