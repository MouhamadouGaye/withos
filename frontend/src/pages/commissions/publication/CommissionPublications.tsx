import React, { useState } from "react";
import {
  FaSearch,
  FaFilePdf,
  FaCalendarAlt,
  FaDownload,
  FaChartBar,
  FaFilter,
} from "react-icons/fa";

import "./CommissionPublications.css";

interface Publication {
  title: string;

  category: string;

  date: string;

  description: string;

  pages: number;
}

const CommissionPublications: React.FC = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Tous");

  const publications: Publication[] = [
    {
      title: "Analyse des finances publiques 2026",

      category: "Budget",

      date: "Juin 2026",

      description:
        "Analyse détaillée de l'évolution des dépenses publiques, des recettes fiscales et des priorités budgétaires.",

      pages: 48,
    },

    {
      title: "Perspectives économiques nationales",

      category: "Croissance",

      date: "Mai 2026",

      description:
        "Étude sur les perspectives de croissance, les investissements et les secteurs stratégiques.",

      pages: 62,
    },

    {
      title: "Réforme fiscale et compétitivité",

      category: "Fiscalité",

      date: "Avril 2026",

      description:
        "Propositions pour une fiscalité plus efficace, équitable et favorable aux entreprises.",

      pages: 35,
    },

    {
      title: "Emploi et transformation économique",

      category: "Emploi",

      date: "Mars 2026",

      description:
        "Analyse des politiques d'emploi et des leviers de création de valeur.",

      pages: 54,
    },
  ];

  const categories = ["Tous", "Budget", "Fiscalité", "Croissance", "Emploi"];

  const filteredPublications = publications.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "Tous" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main className="publications-page">
      {/* HERO */}

      <section className="publications-hero">
        <div className="publication-glow"></div>

        <div className="publication-container">
          <span>CENTRE DE RESSOURCES</span>

          <h1>
            Nos
            <strong>Publications</strong>
          </h1>

          <p>
            Retrouvez les analyses, notes économiques, rapports et études
            produits par la Commission Économie, Finances publiques et Budget.
          </p>
        </div>
      </section>

      {/* SEARCH FILTER */}

      <section className="publication-tools">
        <div className="publication-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Rechercher une publication..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <FaFilter />

          {categories.map((item, index) => (
            <button
              key={index}
              className={category === item ? "active-filter" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}

      <section className="publication-list-section">
        <div className="publication-grid">
          {filteredPublications.map((item, index) => (
            <article className="publication-card" key={index}>
              <div className="publication-top">
                <div className="pdf-icon">
                  <FaFilePdf />
                </div>

                <span>{item.category}</span>
              </div>

              <h2>{item.title}</h2>

              <div className="publication-meta">
                <span>
                  <FaCalendarAlt />

                  {item.date}
                </span>

                <span>
                  <FaChartBar />
                  {item.pages} pages
                </span>
              </div>

              <p>{item.description}</p>

              <button className="download-btn">
                <FaDownload />
                Télécharger PDF
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* STATISTICS */}

      <section className="publication-stats">
        <div>
          <strong>38</strong>

          <span>Publications</span>
        </div>

        <div>
          <strong>12</strong>

          <span>Rapports</span>
        </div>

        <div>
          <strong>420+</strong>

          <span>Pages produites</span>
        </div>
      </section>
    </main>
  );
};

export default CommissionPublications;
