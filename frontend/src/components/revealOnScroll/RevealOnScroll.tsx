// frontend/src/components/RevealOnScroll.tsx
import React, { useEffect, useRef } from "react";
import "./RevealOnScroll.css";

const RevealOnScroll: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className="reveal-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
