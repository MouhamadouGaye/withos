// // import { useState } from "react";
// // import "./BumpTabs.css";

// // const items = [
// //   {
// //     id: 1,
// //     title: "Introduction",
// //     description:
// //       "Voici la description du premier élément affichée après le clic.",
// //   },
// //   {
// //     id: 2,
// //     title: "Architecture",
// //     description: "Cette section décrit l’architecture du composant.",
// //   },
// //   {
// //     id: 3,
// //     title: "Animations",
// //     description: "Les transitions sont gérées uniquement avec du CSS.",
// //   },
// //   {
// //     id: 4,
// //     title: "Conclusion",
// //     description: "Dernière section avec un rendu propre et moderne.",
// //   },
// // ];

// // function BumpTabs() {
// //   const [active, setActive] = useState(0);

// //   return (
// //     <div className="container">
// //       <div className="card">
// //         {/* HEADER */}
// //         <div className="tabs">
// //           {items.map((item, index) => (
// //             <button
// //               key={item.id}
// //               className={`tab ${active === index ? "active" : ""}`}
// //               onClick={() => setActive(index)}
// //             >
// //               {item.title}
// //             </button>
// //           ))}
// //         </div>

// //         {/* CONTENT */}
// //         <div className="content">
// //           <h2>{items[active].title}</h2>
// //           <p>{items[active].description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default BumpTabs;

// import { useState } from "react";
// import "./BubbleTabs.css";

// const tabs = [
//   {
//     title: "Accueil",
//     content: "Contenu de l’accueil affiché lorsque le titre est sélectionné.",
//   },
//   {
//     title: "Services",
//     content: "Voici la description des services proposés.",
//   },
//   {
//     title: "Portfolio",
//     content: "Quelques projets et réalisations importantes.",
//   },
//   {
//     title: "Contact",
//     content: "Informations et formulaire de contact.",
//   },
// ];

// function BubbleTabs() {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="wrapper">
//       <div className="bubble-card">
//         {/* TABS */}
//         <div className="tabs-container">
//           {/* BOSSE MOBILE */}
//           <div
//             className="bubble"
//             style={{
//               transform: `translateX(${active * 170}px)`,
//             }}
//           />

//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               className={`tab ${active === index ? "active" : ""}`}
//               onClick={() => setActive(index)}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT */}
//         <div className="content">
//           <h2>{tabs[active].title}</h2>
//           <p>{tabs[active].content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default BubbleTabs;
import { useState } from "react";
// import "./CurvedTabs.css";
import "./BumpTabs.css";

const tabs = [
  {
    title: "Souveraineté numérique",
    content: "Contenu lié à la souveraineté numérique.",
  },
  {
    title: "Digitalisation des services publics",
    content:
      "La transformation digitale des services publics est un levier stratégique.",
  },
  {
    title: "Développement de l’économie numérique",
    content: "Développement des infrastructures et de l’écosystème numérique.",
  },
  {
    title: "Leadership Africain dans le Numérique",
    content: "Créer un leadership numérique fort à l’échelle africaine.",
  },
];

function BumpTabs() {
  const [active, setActive] = useState(1);

  return (
    <div className="wrapper">
      <div className="tabs-shell">
        {/* NAVIGATION */}
        <div className="tabs-nav">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* PANEL */}
        <div className="panel">
          <div className="panel-content">
            <h2>{tabs[active].title}</h2>

            <p>{tabs[active].content}</p>

            <div className="list">
              <div className="item">
                <span>01</span>
                <h3>Nouvelle gouvernance du numérique</h3>
              </div>

              <div className="item">
                <span>02</span>
                <h3>Ressources humaines</h3>
              </div>

              <div className="item">
                <span>03</span>
                <h3>Processus et technologie</h3>
              </div>

              <div className="item">
                <span>04</span>
                <h3>Administration digitale</h3>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BumpTabs;
