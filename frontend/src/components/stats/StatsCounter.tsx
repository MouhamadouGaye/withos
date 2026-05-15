// frontend/src/components/StatsCounter.tsx (version avec animation personnalisée)
import React, { useState, useEffect } from "react";

import "./StatsCounter.css";
import type { CampaignStats } from "../../types";

interface StatsCounterProps {
  stats: CampaignStats;
}

const AnimatedNumber: React.FC<{
  end: number;
  duration: number;
  suffix: string;
}> = ({ end, duration, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const statItems = [
    {
      label: "Soutiens Total",
      value: stats.total_supporters,
      suffix: "+",
      color: "#ff6b35",
    },
    {
      label: "Membres WhatsApp",
      value: stats.whatsapp_members,
      suffix: "+",
      color: "#25D366",
    },
    {
      label: "Abonnés Email",
      value: stats.email_subscribers,
      suffix: "+",
      color: "#667eea",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statItems.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number" style={{ color: item.color }}>
              <AnimatedNumber
                end={item.value}
                duration={2.5}
                suffix={item.suffix}
              />
            </div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
