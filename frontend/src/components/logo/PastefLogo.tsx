import { NavLink } from "react-router-dom";
import "./PastefLogo.css";

const PastefLogo = ({
  to = "/",
  variant = "color",
  className = "",
  compact = false,
}) => {
  const logoClass = [
    "pastef-logo",
    `pastef-logo-${variant}`,
    compact ? "pastef-logo-compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <NavLink to={to} className={logoClass} aria-label="Pastef France">
      {/* <div className="pastef-logo-mark">
        <div className="pastef-logo-shape">
          <span className="pastef-logo-star">★</span>
        </div>

        <div className="pastef-logo-swoosh" />
      </div> */}

      <div className="pastef-logo-text">
        <div className="pastef-logo-name">Pastef</div>

        <div className="pastef-logo-country">
          <span className="pastef-logo-line" />
          <span className="pastef-logo-france">FRANCE</span>
          <span className="pastef-logo-line" />
        </div>
      </div>
    </NavLink>
  );
};

export default PastefLogo;
