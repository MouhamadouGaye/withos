// frontend/src/components/WhatsAppSection.tsx
import React, { useState, useEffect } from "react";
import { apiService } from "../../services/api";
import "./WhatsApp.css";
import { Users, UserPlus } from "lucide-react";

const WhatsApp: React.FC = () => {
  const [whatsappLink, setWhatsappLink] = useState(
    "https://chat.whatsapp.com/FLHI3GHYtotLVKaqbd6tJU?mode=gi_t",
  );

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const link = await apiService.getWhatsAppLink();
        setWhatsappLink(link);
      } catch (error) {
        console.error("Error fetching WhatsApp link:", error);
      }
    };
    fetchLink();
  }, []);

  const joinWhatsAppGroup = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="whatsapp-section">
      <div className="whatsapp-card">
        {/* <div className="whatsapp-icon">💚</div> */}
        <div
          className="heart-icon"
          style={{
            background: "#00ff5e2c",
            width: "80px",
            height: "80px",
            alignItems: "center",
            borderRadius: "50%",

            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            marginBottom: "10px",
            color: "#00ff5e",
          }}
        >
          <Users size={48} />
          {/* <UserPlus size={48} /> */}
        </div>
        <h2>Rejoignez notre Communauté WhatsApp</h2>
        <p>
          Soyez informé en temps réel des actions et événements du mouvement.
        </p>
        <button className="whatsapp-btn" onClick={joinWhatsAppGroup}>
          Rejoindre le Groupe WhatsApp
        </button>
      </div>
    </section>
  );
};

export default WhatsApp;
