import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// import { pastefNews } from "../../../data/pastefNews";

import "./PastefNews.css";
import { pastefNews } from "../../types/pastefNews";
import CardNews, { formatDate } from "./card/CardNews";

const categories = [
  "TOUTES",
  "PARTI",
  "POLITIQUE",
  "GOUVERNEMENT",
  "ASSEMBLEE",
  "CONGRES",
  "COMMUNIQUE",
];

export default function PastefNews() {
  const [activeCategory, setActiveCategory] = useState("TOUTES");

  const [search, setSearch] = useState("");

  const articles = useMemo(() => {
    return pastefNews
      .filter((article) => {
        if (activeCategory === "TOUTES") {
          return true;
        }

        return article.category === activeCategory;
      })
      .filter((article) => {
        if (!search.trim()) {
          return true;
        }

        const query = search.toLowerCase();

        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, search]);

  const featuredArticle = pastefNews.find((article) => article.featured);

  const regularArticles = articles.filter(
    (article) => article.id !== featuredArticle?.id,
  );

  return (
    <main className="pastef-news-page">
      {/* HERO */}

      <section className="news-hero">
        <div className="news-hero-content">
          <span className="news-eyebrow">PASTEF · LES PATRIOTES</span>

          <h1>
            Actualité <span>politique</span>
          </h1>

          <p>
            Suivez les principales actualités, communiqués et événements liés à
            la vie politique du parti.
          </p>
        </div>
      </section>

      {/* FILTERS */}

      <section className="news-toolbar">
        <div className="news-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "news-filter active"
                  : "news-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category === "TOUTES" ? "Toutes" : category}
            </button>
          ))}
        </div>

        <div className="news-search">
          <span>⌕</span>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher..."
          />
        </div>
      </section>

      {/* FEATURED */}

      {featuredArticle && (
        <section className="featured-news">
          <Link
            to={`/actualites/${featuredArticle.slug}`}
            className="featured-news-card"
          >
            <div className="featured-image">
              <img
                src={featuredArticle.image.src}
                alt={featuredArticle.image.alt}
              />

              <span className="featured-label">À LA UNE</span>
            </div>

            <div className="featured-content">
              <span className="news-category">{featuredArticle.category}</span>

              <h2>{featuredArticle.title}</h2>

              <p>{featuredArticle.excerpt}</p>

              <div className="news-meta">
                <span>{formatDate(featuredArticle.date)}</span>

                <span>{featuredArticle.readingTime} min</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* GRID */}

      <section className="news-section">
        <div className="section-heading">
          <div>
            <span>ACTUALITÉS</span>

            <h2>Les dernières nouvelles</h2>
          </div>

          <strong>{articles.length} articles</strong>
        </div>

        <div className="news-grid">
          {regularArticles.map((article) => (
            <CardNews key={article.id} article={article} />
          ))}
        </div>

        {regularArticles.length === 0 && (
          <div className="news-empty">
            <span>⌁</span>
            <h3>Aucun article trouvé</h3>
            <p>Essayez une autre catégorie ou une autre recherche.</p>
          </div>
        )}
      </section>
    </main>
  );
}
