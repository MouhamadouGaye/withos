import React from "react";
import {
  FaChartLine,
  FaCoins,
  FaUniversity,
  FaFileInvoiceDollar,
  FaArrowRight,
  FaUsers,
  FaBookOpen,
  FaGlobeAfrica,
} from "react-icons/fa";
import "./CommissionEconomy.css";

const CommissionEconomy: React.FC = () => {
  const missions = [
    {
      icon: <FaChartLine />,
      title: "Analyse économique",
      description:
        "Étudier les tendances macroéconomiques nationales et internationales afin d'éclairer les décisions du mouvement.",
    },
    {
      icon: <FaCoins />,
      title: "Fiscalité",
      description:
        "Proposer des réformes fiscales équitables favorisant l'investissement, l'emploi et la justice sociale.",
    },
    {
      icon: <FaUniversity />,
      title: "Finances publiques",
      description:
        "Évaluer les politiques budgétaires, la dette publique et la soutenabilité financière.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Budget",
      description:
        "Analyser les lois de finances et formuler des recommandations réalistes.",
    },
  ];

  return (
    <main className="economy-page">
      {/* HERO */}

      <section className="economy-hero">
        <div className="economy-overlay"></div>

        <div className="economy-container">
          <span className="economy-tag">COMMISSION ÉCONOMIE</span>

          <h1>
            Comprendre.
            <br />
            <span>Analyser.</span>
            <br />
            Proposer.
          </h1>

          <p>
            Notre mission est d'apporter une expertise indépendante et des
            propositions concrètes sur les politiques économiques, les finances
            publiques et le budget afin d'accompagner le projet du mouvement.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Nos Publications</button>

            <button className="secondary-btn">Rejoindre la Commission</button>
          </div>
        </div>
      </section>

      {/* STATISTIQUES */}

      <section className="economy-stats">
        <div className="stat-box">
          <h2>25</h2>
          <p>Membres</p>
        </div>

        <div className="stat-box">
          <h2>38</h2>
          <p>Notes publiées</p>
        </div>

        <div className="stat-box">
          <h2>12</h2>
          <p>Rapports</p>
        </div>

        <div className="stat-box">
          <h2>7</h2>
          <p>Études en cours</p>
        </div>
      </section>

      {/* MISSIONS */}

      <section className="economy-section">
        <div className="section-title">
          <h2>Nos missions</h2>
          <p>
            Une expertise au service d'une vision économique responsable et
            durable.
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((item, index) => (
            <div className="mission-card" key={index}>
              <div className="mission-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINES */}

      <section className="economy-section">
        <div className="section-title">
          <h2>Domaines d'intervention</h2>
        </div>

        <div className="domain-grid">
          <div className="domain-card">
            <FaCoins />
            <span>Fiscalité</span>
          </div>

          <div className="domain-card">
            <FaChartLine />
            <span>Croissance</span>
          </div>

          <div className="domain-card">
            <FaUniversity />
            <span>Budget</span>
          </div>

          <div className="domain-card">
            <FaUsers />
            <span>Emploi</span>
          </div>

          <div className="domain-card">
            <FaBookOpen />
            <span>Recherche</span>
          </div>

          <div className="domain-card">
            <FaGlobeAfrica />
            <span>Développement</span>
          </div>
        </div>
      </section>

      {/* PUBLICATION */}

      <section className="economy-section">
        <div className="section-title">
          <h2>Dernière publication</h2>
        </div>

        <div className="publication-card">
          <span className="publication-date">Juin 2026</span>

          <h3>Analyse des perspectives économiques nationales</h3>

          <p>
            Une étude portant sur les finances publiques, les investissements,
            la croissance et les réformes prioritaires pour renforcer la
            résilience économique.
          </p>

          <button className="read-btn">
            Lire le rapport
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default CommissionEconomy;
