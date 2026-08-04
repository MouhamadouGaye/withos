// // frontend/src/components/Header.tsx
// import React, { useState, useEffect } from "react";
// import "./Header.css";

// const Header: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // const scrollToForm = () => {
//   //   const formElement = document.getElementById("whatsapp-card");
//   //   formElement?.scrollIntoView({ behavior: "smooth" });
//   // };

//   return (
//     <header className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="header-container">
//         <div className="logo">
//           <img
//             src="/assets/sonko2029.png"
//             alt="Avec Sonko 2029"
//             className="logo-image"
//             width="100%"
//             height="100%"
//           />
//         </div>
//         <nav className="nav-menu">
//           <a
//             className="nav-btn"
//             href="https://app.pastef.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Devenir membre de pastef ?
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
// src/components/Header.tsx

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  UserPlus,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [megaOpen, setMegaOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header-2027 ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        <NavLink to="/" className="logo-link">
          <img
            src="/assets/sonko2029.png"
            alt="Avec Sonko"
            className="logo-image"
          />
        </NavLink>

        <nav className="desktop-menu">
          <NavLink to="/">Accueil</NavLink>

          <NavLink to="/actualites">Actualités</NavLink>

          <div
            className="mega-wrapper"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="mega-button">
              Commissions
              <ChevronDown size={18} className={megaOpen ? "rotate" : ""} />
            </button>

            <div className={`mega-menu ${megaOpen ? "show" : ""}`}>
              <div className="mega-left">
                <span className="mega-badge">Commission stratégique</span>

                <h2>Économie, Finances publiques & Budget</h2>

                <p>
                  Retrouvez l'ensemble des travaux, analyses, publications et
                  activités de la commission.
                </p>

                <NavLink to="/commissions" className="discover-link">
                  Découvrir la commission
                  <ArrowRight size={18} />
                </NavLink>
              </div>

              <div className="mega-grid">
                <NavLink
                  to="/commissions/economie/dashboard"
                  className="mega-card"
                >
                  <LayoutDashboard />

                  <div>
                    <h4>Dashboard</h4>

                    <p>Indicateurs économiques</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/commissions/economie/membres"
                  className="mega-card"
                >
                  <Users />

                  <div>
                    <h4>Membres</h4>

                    <p>Composition de la commission</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/commissions/economie/publications"
                  className="mega-card"
                >
                  <BookOpen />

                  <div>
                    <h4>Publications</h4>

                    <p>Notes & analyses</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/commissions/economie/rapports"
                  className="mega-card"
                >
                  <FileText />

                  <div>
                    <h4>Rapports</h4>

                    <p>Documentation officielle</p>
                  </div>
                </NavLink>

                <NavLink
                  to="/commissions/economie/rejoindre"
                  className="mega-card"
                >
                  <UserPlus />

                  <div>
                    <h4>Rejoindre</h4>

                    <p>Déposer une candidature</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            Accueil
          </NavLink>

          <NavLink to="/actualites" onClick={() => setMobileOpen(false)}>
            Actualités
          </NavLink>

          <div className="mobile-title">Commissions</div>

          <NavLink to="/commissions/economie">🏠 Accueil commission</NavLink>

          <NavLink to="/commissions/economie/dashboard">📊 Dashboard</NavLink>

          <NavLink to="/commissions/economie/membres">👥 Membres</NavLink>

          <NavLink to="/commissions/economie/publications">
            📚 Publications
          </NavLink>

          <NavLink to="/commissions/economie/rapports">📄 Rapports</NavLink>

          <NavLink to="/commissions/economie/rejoindre">🤝 Rejoindre</NavLink>
        </div>

        <a
          href="https://app.pastef.org"
          target="_blank"
          rel="noopener noreferrer"
          className="member-button"
        >
          Devenir membre
        </a>
      </div>
    </header>
  );
};

export default Header;
