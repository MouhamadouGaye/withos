// frontend/src/components/Footer.tsx
import React, { useState } from "react";
import {
  Home,
  BookOpen,
  UserPlus,
  Calendar,
  FileText,
  ShieldCheck,
  Newspaper,
  BarChart3,
  MessageCircle,
  EditIcon,
  // Globe,
  // MessageCircle,
  // Camera,
  // Video,
  // Send,
} from "lucide-react";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import "./Footer.css";
import PastefLogo from "../logo/PastefLogo";
import PdfViewer from "./viewer/PdfViewer";

const Footer: React.FC = () => {
  const [open, setOpen] = useState<boolean>();
  const [chosenFile, setChosenFile] = useState("");
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
    <>
      {/* <div>
        {open && (
          <PdfViewer
            file={chosenFile}
            title="Charte Éthique"
            subtitle="DOCUMENT OFFICIEL"
            onClose={() => setOpen(false)}
          />
        )}
      </div> */}
      {open && (
        <>
          <div style={{ position: "fixed", zIndex: 99999 }}>
            PDF : {chosenFile}
          </div>

          <PdfViewer
            file={chosenFile}
            title="Charte Éthique"
            subtitle="DOCUMENT OFFICIEL"
            onClose={() => setOpen(false)}
          />
        </>
      )}
      <footer className="footer">
        <div className="footer-container">
          {/* Section Logo & Description */}
          <div className="footer-section">
            <div className="footer-logo">
              {/* <img
              src="/assets/sonko2029.png"
              alt="Avec Sonko 2029"
              className="footer-logo-img"
            /> */}
              <PastefLogo to="/" variant="white" />
              {/* <span className="footer-logo-text">Avec Sonko 2029</span> */}

              <p className="footer-description">
                Plateforme citoyenne de soutien et de coordination des
                sympathisants de la vision portée par Ousmane Sonko
              </p>
            </div>

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
                <a href="https://www.avecsonko.org">
                  <Home size={16} />
                  Accueil
                </a>
              </li>

              <li>
                <a
                  href=" https://www.avecsonko.org/commissions/efpb/rapports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen size={16} />
                  Les Rapports
                </a>
              </li>

              <li>
                <a
                  href="https://app.pastef.org/?_gl=1*b6ep01*_ga*MTI5NjU2NjI5MC4xNzgyNTY4MTg5*_ga_7C3WJHKRXC*czE3ODcxNzU4MDMkbzE2JGcxJHQxNzg3MTc4MzE0JGo1NCRsMCRoMA..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UserPlus size={16} />
                  Nous Rejoindre
                </a>
              </li>

              <li>
                <a href="/commissions/actualites">
                  <Calendar size={16} />
                  Événements
                </a>
              </li>

              <li>
                <a
                  href="https://app.avecsonko.org"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <EditIcon size={16} />
                  Editeur Com
                </a>
              </li>
            </ul>
          </div>

          {/* Section Ressources */}

          <div className="footer-section">
            <h3 className="footer-title">Ressources</h3>

            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(true);
                    setChosenFile("/assets/Statuts-PASTEF-LES-PATRIOTES.pdf");
                  }}
                >
                  <FileText size={16} />
                  Statuts du Parti
                </button>
              </li>

              <li>
                <button
                  type="button"
                  // className="footer-pdf-button"
                  onClick={() => {
                    setOpen(true);
                    setChosenFile(
                      "/assets/Reglement-interieur-Pastef-Juillet-2025.pdf",
                    );
                  }}
                >
                  <BookOpen size={16} />
                  <span> Guide du Militant</span>
                </button>
              </li>

              {/* <li>
                <a href="/assets/Statuts-PASTEF-LES-PATRIOTES.pdf">
                  <ShieldCheck size={16} />
                  Charte Éthique
                </a>

              </li> */}
              <li>
                <button
                  type="button"
                  // className="footer-pdf-button"
                  onClick={() => {
                    setOpen(true);
                    setChosenFile("/assets/Statuts-PASTEF-LES-PATRIOTES.pdf");
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>Charte Éthique</span>
                </button>
              </li>

              <li>
                <a href="/commissions/actualites">
                  <Newspaper size={16} />
                  Communiqués de Presse
                </a>
              </li>

              <li>
                <a
                  href="/finances-publiques/repartition-de-la-masse-salariale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BarChart3 size={16} />
                  Finances Publiques
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
    </>
  );
};

export default Footer;
