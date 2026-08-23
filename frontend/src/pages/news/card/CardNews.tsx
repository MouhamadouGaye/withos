import { Link } from "react-router-dom";
import type { PastefNewsArticle } from "../../../types/politicalNews";
import "./CardNews.css";

interface NewsCardProps {
  article: PastefNewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link to={`/actualites/${article.slug}`} className="news-card">
      <div className="news-card-image">
        <img src={article.image.src} alt={article.image.alt} loading="lazy" />

        <span className="news-card-category">{article.category}</span>
      </div>

      <div className="news-card-content">
        <div className="news-card-top">
          <span>{formatDate(article.date)}</span>

          {article.readingTime && <span>{article.readingTime} min</span>}
        </div>

        {/* <h3>{article.title}</h3> */}
        <div className="news-title-wrapper">
          <h3>{article.title}</h3>
        </div>

        <p>{article.excerpt}</p>

        <div className="news-card-footer">
          <span>{article.source.name}</span>

          <span className="news-arrow">↗</span>
        </div>
      </div>
    </Link>
  );
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
