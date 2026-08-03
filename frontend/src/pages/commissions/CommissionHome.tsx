import React from "react";
import "./CommissionHome.css";

const CommissionHome: React.FC = () => {
  return (
    <main className="commission-home">
      <section className="commission-hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <span className="hero-badge">COMMISSION STRATÉGIQUE</span>

          <h1>
            ÉCONOMIE
            <br />
            <span className="gradient-text">FINANCES PUBLIQUES</span>
            <br />& BUDGET
          </h1>

          <p>
            Une cellule de réflexion dédiée à l'analyse économique, à la
            compréhension des finances publiques et à la formulation de
            propositions concrètes pour le développement national.
          </p>

          <div className="hero-actions">
            <button className="cyber-button">
              <span className="button-glitch"></span>
              Découvrir la commission
            </button>

            <button className="outline-button">Nos publications</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommissionHome;
