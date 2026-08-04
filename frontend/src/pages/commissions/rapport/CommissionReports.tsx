import React, { useState } from "react";
import {
  FaFilePdf,
  FaSearch,
  FaDownload,
  FaCalendarAlt,
  FaBookOpen,
  FaFilter,
} from "react-icons/fa";

import "./CommissionReports.css";

interface Report {
  title: string;

  type: string;

  year: string;

  date: string;

  description: string;

  size: string;

  file?: string;
}

const CommissionReports: React.FC = () => {
  const [search, setSearch] = useState("");

  const [year, setYear] = useState("Tous");

  const reports: Report[] = [
    {
      title: "Rapport annuel économique 2026",

      type: "Rapport stratégique",

      year: "2026",

      date: "Juillet 2026",

      description:
        "Synthèse des analyses économiques, recommandations et perspectives nationales.",

      size: "12 MB",
      file: "/documents/rapport-economique-2026.pdf",
    },

    {
      title: "État des finances publiques",

      type: "Note technique",

      year: "2026",

      date: "Juin 2026",

      description:
        "Analyse des recettes, dépenses publiques et trajectoire budgétaire.",

      size: "8 MB",
      file: "/documents/dossier-20037403.pdf",
    },

    {
      title: "Fiscalité et développement économique",

      type: "Étude",

      year: "2025",

      date: "Décembre 2025",

      description:
        "Étude sur la modernisation fiscale et son impact sur l'économie.",

      size: "15 MB",
      file: "/documents/dossier-20037403.pdf",
    },

    {
      title: "Emploi et croissance inclusive",

      type: "Rapport sectoriel",

      year: "2025",

      date: "Octobre 2025",

      description:
        "Analyse des politiques publiques favorisant la création d'emplois.",

      size: "10 MB",
      file: "/documents/dossier-20037403.pdf",
    },
  ];

  const years = ["Tous", "2026", "2025"];

  const filteredReports = reports.filter((item) => {
    const searchMatch = item.title.toLowerCase().includes(search.toLowerCase());

    const yearMatch = year === "Tous" || item.year === year;

    return searchMatch && yearMatch;
  });

  return (
    <main className="reports-page">
      {/* HERO */}

      <section className="reports-hero">
        <div className="reports-glow"></div>

        <div className="reports-container">
          <span>BIBLIOTHÈQUE ÉCONOMIQUE</span>

          <h1>
            Nos
            <strong>Rapports</strong>
          </h1>

          <p>
            Une bibliothèque de documents, études et analyses produits par la
            Commission Économie, Finances publiques et Budget.
          </p>
        </div>
      </section>

      {/* FILTER */}

      <section className="reports-tools">
        <div className="report-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Rechercher un rapport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="year-filter">
          <FaFilter />

          {years.map((item, index) => (
            <button
              key={index}
              className={year === item ? "active-year" : ""}
              onClick={() => setYear(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* REPORT LIST */}

      <section className="reports-section">
        <div className="reports-grid">
          {filteredReports.map((report, index) => (
            <article className="report-item" key={index}>
              <div className="report-icon">
                <FaFilePdf />
              </div>

              <div className="report-content">
                <span className="report-type">{report.type}</span>

                <h2>{report.title}</h2>

                <div className="report-info">
                  <span>
                    <FaCalendarAlt />

                    {report.date}
                  </span>

                  <span>
                    <FaBookOpen />

                    {report.size}
                  </span>
                </div>

                <p>{report.description}</p>

                <button onClick={() => window.open(report.file, "_blank")}>
                  <FaDownload />
                  Télécharger
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DOCUMENTATION */}

      <section className="documentation-box">
        <h2>Centre documentaire</h2>

        <p>
          Retrouvez l'ensemble des travaux historiques de la commission :
          rapports, notes d'analyse, études sectorielles et documents de
          référence.
        </p>
      </section>
    </main>
  );
};

export default CommissionReports;
