// frontend/src/components/Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    // sending email via mailto link
    e.preventDefault();

    const email = (
      document.querySelector(".newsletter-input") as HTMLInputElement
    ).value;

    window.location.href = `mailto:pastef.online@gmail.com?subject=Newsletter&body=Bonjour, je souhaite rejoindre la newsletter avec cet email : ${email}`;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section Logo & Description */}
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="/assets/sonko2029.png"
              alt="Avec Sonko 2029"
              className="footer-logo-img"
            />
            {/* <span className="footer-logo-text">Avec Sonko 2029</span> */}
          </div>
          <p className="footer-description">
            Un mouvement citoyen et politique de soutien et de mobilisation basé
            sur des valeurs souverainistes et éthiques
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              📘
            </a>
            <a href="#" className="social-link">
              🐦
            </a>
            <a href="#" className="social-link">
              📸
            </a>
            <a href="#" className="social-link">
              💬
            </a>
            <a href="#" className="social-link">
              ▶️
            </a>
          </div>
        </div>

        {/* Section Liens Rapides */}
        <div className="footer-section">
          <h3 className="footer-title">Liens Rapides</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Le Programme</a>
            </li>
            <li>
              <a href="#">Nous Rejoindre</a>
            </li>
            <li>
              <a href="#">Événements</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Section Ressources */}
        <div className="footer-section">
          <h3 className="footer-title">Ressources</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Télécharger le Manifeste</a>
            </li>
            <li>
              <a href="#">Guide du Militant</a>
            </li>
            <li>
              <a href="#">Charte Éthique</a>
            </li>
            <li>
              <a href="#">Communiqués de Presse</a>
            </li>
            <li>
              <a href="#">Rapports d'Activités</a>
            </li>
          </ul>
        </div>

        {/* Section Contact & Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="newsletter-text">
            Restez informé des actualités du mouvement
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Votre email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              →
            </button>
          </form>
          <div className="footer-contact">
            <p>pastef.online@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <div className="footer-divider"></div> */}

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Avec Sonko 2029 - Tous droits réservés</p>
          <div className="footer-bottom-links">
            <a href="#">Mentions Légales</a>
            <a href="#">Politique de Confidentialité</a>
            <a href="#">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
