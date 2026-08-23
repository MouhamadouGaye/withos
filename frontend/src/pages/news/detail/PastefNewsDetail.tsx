import { useParams, Link } from "react-router-dom";
import { pastefNews } from "../../../types/pastefNews";
import { formatDate } from "../card/CardNews";

export default function PastefNewsDetail() {
  const { slug } = useParams();

  const article = pastefNews.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main>
        <h1>Article introuvable</h1>

        <Link to="/actualites">Retour aux actualités</Link>
      </main>
    );
  }

  return (
    <main className="news-detail">
      <Link to="/actualites" className="news-detail-back">
        ← Toutes les actualités
      </Link>

      <article>
        <header>
          <span className="news-category">{article.category}</span>

          <h1>{article.title}</h1>

          <p>{article.excerpt}</p>

          <div>
            {formatDate(article.date)}
            {" · "}
            {article.source.name}
          </div>
        </header>

        <img src={article.image.src} alt={article.image.alt} />

        <div className="news-detail-content">
          {article.content ? (
            article.content
          ) : (
            <p>
              Consultez la source originale pour le contenu complet de cette
              publication.
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
