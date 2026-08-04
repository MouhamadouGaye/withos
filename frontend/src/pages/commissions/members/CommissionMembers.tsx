import React, { useState } from "react";
import {
  FaUserTie,
  FaSearch,
  FaChartLine,
  FaLandmark,
  FaBalanceScale,
  FaBriefcase,
} from "react-icons/fa";

import "./CommissionMembers.css";

interface Member {
  name: string;
  role: string;
  expertise: string;
  icon: React.ReactNode;
}

const CommissionMembers: React.FC = () => {
  const [search, setSearch] = useState("");

  const members: Member[] = [
    {
      name: "Responsable de la commission",
      role: "Direction générale",
      expertise: "Stratégie économique et politiques publiques",
      icon: <FaUserTie />,
    },

    {
      name: "Responsable adjoint",
      role: "Coordination",
      expertise: "Finances publiques et gestion budgétaire",
      icon: <FaLandmark />,
    },

    {
      name: "Rapporteur général",
      role: "Production des analyses",
      expertise: "Recherche économique et statistiques",
      icon: <FaChartLine />,
    },

    {
      name: "Expert Fiscalité",
      role: "Pôle fiscal",
      expertise: "Réformes fiscales et compétitivité",
      icon: <FaBalanceScale />,
    },

    {
      name: "Expert Développement",
      role: "Pôle croissance",
      expertise: "Investissements et entrepreneuriat",
      icon: <FaBriefcase />,
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.expertise.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="members-page">
      {/* HERO */}

      <section className="members-hero">
        <div className="members-glow"></div>

        <div className="members-content">
          <span>ORGANISATION</span>

          <h1>
            Notre équipe
            <br />
            <strong>Économie & Finances publiques</strong>
          </h1>

          <p>
            Une équipe pluridisciplinaire composée d'experts, d'analystes et de
            contributeurs engagés dans la réflexion économique.
          </p>
        </div>
      </section>

      {/* SEARCH */}

      <section className="members-search">
        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Rechercher un membre ou une expertise..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* MEMBERS */}

      <section className="members-section">
        <div className="members-grid">
          {filteredMembers.map((member, index) => (
            <article className="member-card" key={index}>
              <div className="member-icon">{member.icon}</div>

              <h2>{member.name}</h2>

              <h3>{member.role}</h3>

              <p>{member.expertise}</p>

              <button>Voir le profil</button>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}

      <section className="expertise-section">
        <h2>Nos domaines d'expertise</h2>

        <div className="expertise-grid">
          <div>Macroéconomie</div>

          <div>Budget public</div>

          <div>Fiscalité</div>

          <div>Financement du développement</div>

          <div>PME et entrepreneuriat</div>

          <div>Analyse des politiques publiques</div>
        </div>
      </section>
    </main>
  );
};

export default CommissionMembers;
