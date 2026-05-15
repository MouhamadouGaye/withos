// frontend/src/components/TiltCard.tsx
import React, { useRef, useState } from "react";
import "./TiltCard.css";

const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue = ((x - centerX) / centerX) * 20;
    const rotateXValue = ((centerY - y) / centerY) * 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div className="tilt-card-inner">{children}</div>
      <div
        className="tilt-card-shine"
        style={{
          background: `radial-gradient(circle at ${rotateY * 5 + 50}% ${rotateX * 5 + 50}%, rgba(255,255,255,0.3), transparent)`,
        }}
      />
    </div>
  );
};

export default TiltCard;
