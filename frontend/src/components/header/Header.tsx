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

//   const scrollToForm = () => {
//     const formElement = document.getElementById("support-form");
//     formElement?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="header-container">
//         <div className="logo">

//           <img src="/avecsonko2029-nexus.svg" alt="Logo Sonko 2024" />
//         </div>
//         <nav className="nav-menu">
//           <button className="nav-btn" onClick={scrollToForm}>
//             Soutenir
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// frontend/src/components/Header.tsx
import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("whatsapp-card");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <img
            src="/assets/sonko2029.png"
            alt="Avec Sonko 2029"
            className="logo-image"
            width="100%"
            height="100%"
          />
        </div>
        <nav className="nav-menu">
          <button className="nav-btn" onClick={scrollToForm}>
            Restons en contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
