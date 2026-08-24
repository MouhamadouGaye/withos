import type { PastefNewsArticle } from "../types/politicalNews";

export const pastefNews: PastefNewsArticle[] = [
  {
    id: "pastef-congres-2026",

    slug: "congres-historique-pastef-2026",

    title: "Congrès historique du parti PASTEF-Les Patriotes",

    excerpt:
      "PASTEF a tenu son premier congrès ordinaire depuis sa création, dans un contexte de profonde reconfiguration de la scène politique sénégalaise.",

    date: "2026-06-20",

    category: "CONGRES",

    source: {
      name: "PASTEF – Les Patriotes",
      type: "OFFICIAL",
      url: "https://pastef.org/categorie/actualites/",
    },

    image: {
      src: "/images/pastef/congres-2026.jpeg",
      alt: "Congrès national du PASTEF à Dakar",
      credit: "PASTEF – Les Patriotes",
    },

    featured: true,

    tags: ["PASTEF", "Congrès", "Ousmane Sonko", "Politique"],

    people: [
      {
        name: "Ousmane Sonko",
        role: "Président de PASTEF",
      },
    ],

    location: "Dakar, Sénégal",

    readingTime: 5,
  },

  {
    id: "sonko-president-pastef-2026",

    slug: "ousmane-sonko-reelu-president-pastef-2026",

    title: "Ousmane Sonko réélu à la présidence de PASTEF",

    excerpt:
      "À l'occasion du premier congrès ordinaire du parti, Ousmane Sonko a été reconduit à la tête de PASTEF pour un nouveau mandat.",

    date: "2026-06-06",

    category: "PARTI",

    source: {
      name: "Africanews / sources publiques",
      type: "PRESS",
      url: "https://fr.africanews.com/",
    },

    image: {
      src: "/images/pastef/ousmane-sonko-congres.jpeg",
      alt: "Ousmane Sonko lors du congrès de PASTEF",
      credit: "Presse",
    },

    featured: true,

    tags: ["Ousmane Sonko", "PASTEF", "Congrès", "Leadership"],

    people: [
      {
        name: "Ousmane Sonko",
        role: "Président de PASTEF",
      },
    ],

    location: "Diamniadio, Sénégal",

    readingTime: 4,
  },

  {
    id: "pastef-nouveau-gouvernement-2026",

    slug: "pastef-nouveau-gouvernement-2026",

    title: "PASTEF et la nouvelle configuration gouvernementale",

    excerpt:
      "La formation d'un nouveau gouvernement en juin 2026 a marqué une nouvelle étape dans les rapports entre le parti et l'exécutif.",

    date: "2026-06-02",

    category: "GOUVERNEMENT",

    source: {
      name: "Reuters / AFP via Al Jazeera",
      type: "PRESS",
      url: "https://www.aljazeera.com/",
    },

    image: {
      src: "/images/pastef/gouvernement-2026.jpeg",
      alt: "Actualité politique sénégalaise en juin 2026",
      credit: "Reuters / AFP",
    },

    tags: ["PASTEF", "Gouvernement", "Ousmane Sonko", "Bassirou Diomaye Faye"],

    people: [
      {
        name: "Ousmane Sonko",
        role: "Président de PASTEF",
      },
      {
        name: "Bassirou Diomaye Faye",
        role: "Président de la République",
      },
    ],

    location: "Dakar, Sénégal",

    readingTime: 6,
  },

  {
    id: "sonko-assemblee-nationale-2026",

    slug: "ousmane-sonko-president-assemblee-nationale-2026",

    title: "Ousmane Sonko élu président de l'Assemblée nationale",

    excerpt:
      "Après son départ de la Primature, Ousmane Sonko a été élu à la présidence de l'Assemblée nationale.",

    date: "2026-05-26",

    category: "ASSEMBLEE",

    source: {
      name: "Presse internationale",
      type: "PRESS",
      url: "https://www.aljazeera.com/",
    },

    image: {
      src: "/images/pastef/assemblee-nationale-sonko.jpeg",
      alt: "Ousmane Sonko à l'Assemblée nationale",
      credit: "Reuters",
    },

    tags: ["Ousmane Sonko", "Assemblée nationale", "PASTEF", "Politique"],

    people: [
      {
        name: "Ousmane Sonko",
        role: "Président de l'Assemblée nationale",
      },
    ],

    location: "Dakar, Sénégal",

    readingTime: 5,
  },

  {
    id: "pastef-cartes-membres-2026",

    slug: "pastef-lancement-cartes-membres-2026",

    title: "PASTEF lance officiellement ses cartes de membre",

    excerpt:
      "Le parti a lancé une plateforme permettant l'adhésion et l'activation des cartes de membre en ligne.",

    date: "2026-07-04",

    category: "PARTI",

    source: {
      name: "PASTEF – Les Patriotes",
      type: "OFFICIAL",
      url: "https://pastef.org/",
    },

    image: {
      src: "/images/pastef/cartes-membres.jpeg",
      alt: "Carte de membre PASTEF",
      credit: "PASTEF",
    },

    tags: ["PASTEF", "Adhésion", "Militants", "Organisation"],

    readingTime: 3,
  },

  {
    id: "pastef-appel-diaspora-2026",

    slug: "pastef-appel-candidatures-responsables-diaspora-2026",

    title:
      "PASTEF lance un appel à candidatures pour ses responsables de zone de la diaspora",

    excerpt:
      "Le parti poursuit la structuration de ses organisations à l'extérieur du Sénégal.",

    date: "2026-07-08",

    category: "PARTI",

    source: {
      name: "PASTEF – Les Patriotes",
      type: "OFFICIAL",
      url: "https://pastef.org/",
    },

    image: {
      src: "/images/pastef/diaspora.jpeg",
      alt: "Organisation de PASTEF auprès de la diaspora",
      credit: "PASTEF",
    },

    tags: ["PASTEF", "Diaspora", "Organisation", "Militants"],

    readingTime: 3,
  },
];

export const sourceType: "OFFICIAL" | "PRESS" = "OFFICIAL";
