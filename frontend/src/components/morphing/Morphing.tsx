// frontend/src/components/MorphingSection.tsx
import React, { useEffect, useRef } from "react";
import "./Morphing.css";

const Morphing: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const progress = entry.intersectionRatio;
            (entry.target as HTMLElement).style.setProperty(
              "--morph-progress",
              progress.toString(),
            );
          }
        });
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    );

    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return (
    <section ref={sectionRef} className="morphing-section">
      <div className="morphing-content">{children}</div>
      <div className="morphing-overlay"></div>
    </section>
  );
};

export default Morphing;
