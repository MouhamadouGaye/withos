// frontend/src/App.tsx (version futuriste)
import React, { useState, useEffect } from "react";
import SupporterForm from "./components/forms/SupporterForm";

import { apiService } from "./services/api";
import "./App.css";
import type { CampaignStats } from "./types";
// import QuantumBackground from "./components/quantum/QuantumBackground";
import Header from "./components/header/Header";
// import Morphing from "./components/morphing/Morphing";
import TiltCard from "./components/tiltCard/TiltCard";
import RevealOnScroll from "./components/revealOnScroll/RevealOnScroll";
import WhatsApp from "./components/whatsapp/WhatsApp";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Router } from "lucide-react";
import BumpTabs from "./components/tabs/BumpTabs";
import CurvedTabs from "./components/tabs/CurvedTabs";

const App: React.FC = () => {
  const [stats, setStats] = useState<CampaignStats>({
    total_supporters: 2345,
    whatsapp_members: 1022,
    email_subscribers: 1509,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const newStats = await apiService.getStats();
      setStats(newStats);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              {/* <QuantumBackground /> */}
              <Header />

              {/* <Morphing>
        <div className="hero-content-2027">
          <h1 className="neon-title-2027">
            Ousmane Sonko
            <span className="gradient-text">2029</span>
          </h1>
          <p className="floating-text">Le changement commence maintenant</p>
          <button className="cyber-button" onClick={() => setShowForm(true)}>
            <span className="button-content">Rejoindre le mouvement</span>
            <span className="button-glitch"></span>
          </button>
        </div>
      </Morphing> */}

              <Hero onJoinClick={() => setShowForm(true)} />

              <div>
                <div className="stats-grid-2027">
                  <TiltCard>
                    <div className="stat-card-2027">
                      <div className="stat-value">
                        {stats.total_supporters.toLocaleString()}+
                      </div>
                      <div className="stat-label">Soutiens</div>
                      <div className="stat-glow"></div>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="stat-card-2027">
                      <div className="stat-value">
                        {stats.whatsapp_members.toLocaleString()}+
                      </div>
                      <div className="stat-label">WhatsApp</div>
                      <div className="stat-glow"></div>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="stat-card-2027">
                      <div className="stat-value">
                        {stats.email_subscribers.toLocaleString()}+
                      </div>
                      <div className="stat-label">Email</div>
                      <div className="stat-glow"></div>
                    </div>
                  </TiltCard>
                </div>
              </div>

              <RevealOnScroll delay={200}>
                <WhatsApp />
              </RevealOnScroll>

              {showForm && (
                <SupporterForm
                  onClose={() => setShowForm(false)}
                  onSuccess={fetchStats}
                />
              )}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/other" element={<BumpTabs />} />
        <Route path="/curved" element={<CurvedTabs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
