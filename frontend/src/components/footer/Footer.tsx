// frontend/src/components/Footer.tsx
import React from "react";
import {
  Home,
  BookOpen,
  UserPlus,
  Calendar,
  Mail,
  FileText,
  ShieldCheck,
  Newspaper,
  BarChart3,
  MessageCircle,
  // Globe,
  // MessageCircle,
  // Camera,
  // Video,
  // Send,
} from "lucide-react";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
            Plateforme citoyenne de soutien et de coordination des sympathisants
            de la vision portée par Ousmane Sonko
          </p>
          {/* <div className="social-links">
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
          </div> */}
        </div>

        {/* Section Liens Rapides */}

        <div className="footer-section">
          <h3 className="footer-title">Liens Rapides</h3>

          <ul className="footer-links">
            <li>
              <a href="#">
                <Home size={16} />
                Accueil
              </a>
            </li>

            <li>
              <a href="#">
                <BookOpen size={16} />
                Le Programme
              </a>
            </li>

            <li>
              <a href="#">
                <UserPlus size={16} />
                Nous Rejoindre
              </a>
            </li>

            <li>
              <a href="#">
                <Calendar size={16} />
                Événements
              </a>
            </li>

            <li>
              <a href="#">
                <Mail size={16} />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section Ressources */}

        <div className="footer-section">
          <h3 className="footer-title">Ressources</h3>

          <ul className="footer-links">
            <li>
              <a
                href="/assets/Status-PASTEF-LES-PATRIOTES.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                Statuts du Parti
              </a>
            </li>

            <li>
              <a
                href="/assets/Reglement-interieur-Pastef-Juillet-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen size={16} />
                Guide du Militant
              </a>
            </li>

            <li>
              <a href="#">
                <ShieldCheck size={16} />
                Charte Éthique
              </a>
            </li>

            <li>
              <a href="#">
                <Newspaper size={16} />
                Communiqués de Presse
              </a>
            </li>

            <li>
              <a href="#">
                <BarChart3 size={16} />
                Rapports d'Activités
              </a>
            </li>
          </ul>
        </div>

        {/* Section Contact & Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="newsletter-text">
            Restez informé des actualités du mouvement
          </p>
          <form
            className="newsletter-form"
            id="newsletter-form"
            onSubmit={handleSubmit}
          >
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
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61588928924666"
              className="social-link"
            >
              <FaFacebook size={18} />
            </a>

            <a href="#" className="social-link">
              <FaTwitter size={18} />
            </a>

            <a href="#" className="social-link">
              <FaInstagram size={18} />
            </a>

            <a href="#" className="social-link">
              <MessageCircle size={18} />
            </a>

            <a href="#" className="social-link">
              <FaYoutube size={18} />
            </a>
          </div>
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
