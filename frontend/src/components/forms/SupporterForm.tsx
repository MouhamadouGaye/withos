// frontend/src/components/SupportForm.tsx
import React, { useState } from "react";
import { apiService } from "../../services/api";
import "./SupporterForm.css";

interface SupportFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const SupportForm: React.FC<SupportFormProps> = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    contact_preference: "whatsapp" as const,
    join_whatsapp: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await apiService.createSupporter(formData);
      setSubmitted(true);
      onSuccess();
      setTimeout(() => onClose(), 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" id="support-form">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {!submitted ? (
          <>
            <h2>Rejoignez le Mouvement</h2>
            <p>Soutenez Ousmane Sonko pour un Sénégal meilleur</p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Votre nom complet *"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email (optionnel)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Numéro WhatsApp *"
                  required
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Préférence de contact :</label>
                <select
                  value={formData.contact_preference}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact_preference: e.target.value as any,
                    })
                  }
                >
                  <option value="whatsapp">WhatsApp uniquement</option>
                  <option value="email">Email uniquement</option>
                  <option value="both">WhatsApp et Email</option>
                </select>
              </div>

              <div className="form-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.join_whatsapp}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        join_whatsapp: e.target.checked,
                      })
                    }
                  />
                  Rejoindre le groupe WhatsApp
                </label>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Envoi en cours..." : "Je Soutiens 🇸🇳"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Merci pour votre soutien !</h3>
            <p>Vous faites désormais partie du mouvement.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportForm;
