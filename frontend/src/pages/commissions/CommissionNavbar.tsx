import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaBook,
  FaUserPlus,
  FaHome,
} from "react-icons/fa";

const CommissionNavbar: React.FC = () => {
  return (
    <header className="commission-navbar">
      <div className="commission-logo">
        <span>ECON</span>

        <strong>FINANCES</strong>
      </div>

      <nav>
        <NavLink to="/commissions">
          <FaHome />
          Accueil
        </NavLink>

        <NavLink to="/commissions/dashboard">
          <FaChartLine />
          Dashboard
        </NavLink>

        <NavLink to="/commissions/membres">
          <FaUsers />
          Membres
        </NavLink>

        <NavLink to="/commissions/publications">
          <FaBook />
          Publications
        </NavLink>

        <NavLink to="/commissions/rapports">
          <FaFileAlt />
          Rapports
        </NavLink>

        <NavLink to="/commissions/rejoindre">
          <FaUserPlus />
          Rejoindre
        </NavLink>
      </nav>
    </header>
  );
};

export default CommissionNavbar;
