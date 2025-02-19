import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card">
        <h3>{article.title}</h3>

        {article.article_img_url && (
          <img
            className="article-image"
            src={article.article_img_url}
            alt={article.title}
          />
        )}
        <br />
        <p className="article-info">
          <span>By {article.author}</span>

          <br />
          <span>
            Posted on {new Date(article.created_at).toLocaleDateString("en-GB")}
          </span>
          <br />
          <span>
            {article.votes} votes | {article.comment_count} comments
          </span>
        </p>
      </div>
    </Link>
  );
}
