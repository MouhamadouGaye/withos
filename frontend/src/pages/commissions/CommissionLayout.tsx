import React from "react";
import { Outlet } from "react-router-dom";

import CommissionNavbar from "./CommissionNavbar";

import "./CommissionNavbar.css";

const CommissionLayout: React.FC = () => {
  return (
    <div className="commission-layout">
      <CommissionNavbar />

      <main className="commission-content">
        <Outlet />
      </main>
    </div>
  );
};

export default CommissionLayout;
