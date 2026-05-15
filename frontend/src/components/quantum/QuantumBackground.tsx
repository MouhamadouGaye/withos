// // frontend/src/components/QuantumBackground.tsx
// import React, { useEffect, useRef } from "react";
// import "./QuantumBackground.css";

// const QuantumBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles: Array<{
//       x: number;
//       y: number;
//       radius: number;
//       speedX: number;
//       speedY: number;
//       color: string;
//       alpha: number;
//     }> = [];

//     for (let i = 0; i < 100; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 3 + 1,
//         speedX: (Math.random() - 0.5) * 0.5,
//         speedY: (Math.random() - 0.5) * 0.5,
//         color: `hsl(${Math.random() * 60 + 15}, 100%, 60%)`,
//         alpha: Math.random() * 0.5 + 0.2,
//       });
//     }

//     let mouseX = 0;
//     let mouseY = 0;

//     canvas.addEventListener("mousemove", (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     });

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         if (particle.x < 0) particle.x = canvas.width;
//         if (particle.x > canvas.width) particle.x = 0;
//         if (particle.y < 0) particle.y = canvas.height;
//         if (particle.y > canvas.height) particle.y = 0;

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = particle.color;
//         ctx.globalAlpha = particle.alpha;
//         ctx.fill();

//         // Connect particles
//         particles.forEach((particle2) => {
//           const dx = particle.x - particle2.x;
//           const dy = particle.y - particle2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particle.x, particle.y);
//             ctx.lineTo(particle2.x, particle2.y);
//             ctx.strokeStyle = `rgba(255, 107, 53, ${0.2 * (1 - distance / 100)})`;
//             ctx.stroke();
//           }
//         });

//         // Mouse attraction
//         const dx = mouseX - particle.x;
//         const dy = mouseY - particle.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < 150) {
//           particle.speedX += dx * 0.002;
//           particle.speedY += dy * 0.002;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <canvas ref={canvasRef} className="quantum-bg" />;
// };

// export default QuantumBackground;

// frontend/src/components/QuantumBackground.tsx
import React, { useEffect, useRef } from "react";
import "./QuantumBackground.css";

const QuantumBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 60 + 15}, 100%, 60%)`,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Vérifier à nouveau que canvas et ctx existent à chaque frame
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();

        // Connect particles
        particles.forEach((particle2) => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(255, 107, 53, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });

        // Mouse attraction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          particle.speedX += dx * 0.002;
          particle.speedY += dy * 0.002;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="quantum-bg" />;
};

export default QuantumBackground;
