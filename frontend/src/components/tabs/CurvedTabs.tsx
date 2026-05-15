import { useState } from "react";
import "./CurvedTabs.css";

type AccordionItem = {
  number: string;
  title: string;
  description: string;
};

type Tab = {
  title: string;
  content: string;
  image: string;

  items?: AccordionItem[];

  /* support des sous éléments */
  sections?: {
    title: string;
    items: AccordionItem[];
  }[];
};

const tabs: Tab[] = [
  {
    title: "Digitalisation des services publics",

    content:
      "La transformation digitale des services publics améliore l’efficacité administrative et simplifie l’accès aux services.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",

    items: [
      {
        number: "01",
        title: "Nouvelle gouvernance du numérique",
        description: "Mettre en place un cadre stratégique moderne et agile.",
      },
      {
        number: "02",
        title: "Ressources humaines",
        description:
          "Développer les compétences digitales dans l’administration.",
      },
      {
        number: "03",
        title: "Processus intelligents",
        description: "Automatiser les démarches administratives essentielles.",
      },
    ],
  },

  {
    title: "Économie numérique",

    content:
      "Le numérique constitue un moteur de croissance économique et d’innovation.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",

    sections: [
      {
        title: "Infrastructure",

        items: [
          {
            number: "01",
            title: "Datacenter national",
            description:
              "Création de centres de données sécurisés et performants.",
          },
          {
            number: "02",
            title: "Cloud souverain",
            description: "Déploiement d’un cloud national sécurisé.",
          },
        ],
      },

      {
        title: "Innovation",

        items: [
          {
            number: "03",
            title: "Incubateurs startups",
            description: "Accompagner les jeunes entreprises technologiques.",
          },
        ],
      },
    ],
  },

  {
    title: "Cybersécurité nationale",

    content:
      "Renforcer la résilience numérique et protéger les infrastructures critiques.",

    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop",

    items: [
      {
        number: "01",
        title: "Protection des données",
        description: "Sécuriser les données sensibles et stratégiques.",
      },
      {
        number: "02",
        title: "SOC national",
        description: "Mettre en place un centre opérationnel de cybersécurité.",
      },
      {
        number: "03",
        title: "Sensibilisation",
        description: "Former les citoyens aux bonnes pratiques numériques.",
      },
    ],
  },

  {
    title: "Innovation & IA",

    content:
      "L’intelligence artificielle accélère la transformation numérique des organisations.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",

    sections: [
      {
        title: "Recherche",

        items: [
          {
            number: "01",
            title: "Laboratoires IA",
            description: "Développer des centres de recherche spécialisés.",
          },
        ],
      },

      {
        title: "Applications",

        items: [
          {
            number: "02",
            title: "Smart cities",
            description:
              "Optimiser les villes grâce aux données intelligentes.",
          },
          {
            number: "03",
            title: "Santé numérique",
            description:
              "Améliorer les soins grâce à l’intelligence artificielle.",
          },
        ],
      },
    ],
  },
];

function CurvedTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const [openItems, setOpenItems] = useState<string[]>([]);

  const currentTab = tabs[activeTab];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="wrapper">
      <div className="tabs-shell">
        {/* NAVIGATION */}
        <div className="tabs-nav">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => {
                setActiveTab(index);
                setOpenItems([]);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* PANEL */}
        <div className="panel">
          {/* LEFT */}
          <div className="panel-content">
            <h2>{currentTab.title}</h2>

            <p>{currentTab.content}</p>

            <div className="accordion">
              {/* ITEMS DIRECTS */}
              {currentTab.items?.map((item) => {
                const id = item.number;
                const isOpen = openItems.includes(id);

                return (
                  <AccordionCard
                    key={id}
                    item={item}
                    isOpen={isOpen}
                    onToggle={() => toggleItem(id)}
                  />
                );
              })}

              {/* SECTIONS */}
              {currentTab.sections?.map((section) => (
                <div className="section" key={section.title}>
                  <h4 className="section-title">{section.title}</h4>

                  {section.items.map((item) => {
                    const id = `${section.title}-${item.number}`;

                    const isOpen = openItems.includes(id);

                    return (
                      <AccordionCard
                        key={id}
                        item={item}
                        isOpen={isOpen}
                        onToggle={() => toggleItem(id)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="image-box">
            <img src={currentTab.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* CARD */
type CardProps = {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionCard({ item, isOpen, onToggle }: CardProps) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={onToggle}>
        <div className="left">
          <span>{item.number}</span>

          <h3>{item.title}</h3>
        </div>

        <div className="icon">{isOpen ? "−" : "+"}</div>
      </button>

      <div className="accordion-content">
        <div className="accordion-inner">{item.description}</div>
      </div>
    </div>
  );
}

export default CurvedTabs;
