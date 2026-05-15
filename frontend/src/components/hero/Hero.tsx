// // frontend/src/components/HeroSection.tsx
// import React from "react";
// import "./Hero.css";

// interface HeroSectionProps {
//   onJoinClick: () => void;
// }

// const Hero: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Soutenons <span className="highlight">Ousmane Sonko</span>
//           <br />
//           Pour un Sénégal Meilleur
//         </h1>
//         <p className="hero-subtitle">
//           Rejoignez le mouvement pour le changement. Ensemble, construisons
//           l'avenir que nous voulons.
//         </p>
//         <div className="hero-buttons">
//           <button className="btn-primary" onClick={onJoinClick}>
//             Je Soutiens Maintenant******
//           </button>
//         </div>
//       </div>
//       <div className="hero-wave">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// frontend/src/components/HeroSection.tsx
import React from "react";
import "./Hero.css";

interface HeroSectionProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="pastef-badge">
          <span className="pastef-icon">🇸🇳</span>
          <span className="pastef-text">PASTEF</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">Avec</span>
          <span className="highlight-gradient">Ousmane Sonko 2029</span>
          <span className="title-line">pour le Sénégal</span>
        </h1>
        <p className="hero-subtitle">
          Rejoignez la mabilisation des Patriotes Africains du Sénégal pour le
          Travail, l'Éthique et la Fraternité. Ensemble, construisons un Sénégal
          souverain et prospère.
        </p>
        <div className="hero-buttons">
          <button className="btn-pastef" onClick={onJoinClick}>
            <span className="btn-content">Je Soutiens le PASTEF</span>
            <span className="btn-icon">→</span>
          </button>
          <button className="btn-outline">Découvrir le Projet</button>
        </div>
        <div className="pastef-values">
          <div className="value-item">
            <span className="value-dot travail"></span>
            <span>Travail</span>
          </div>
          <div className="value-item">
            <span className="value-dot ethique"></span>
            <span>Éthique</span>
          </div>
          <div className="value-item">
            <span className="value-dot fraternite"></span>
            <span>Fraternité</span>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg> */}
      </div>
    </section>
  );
};

export default Hero;
