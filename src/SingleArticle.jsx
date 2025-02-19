import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "./utils/api";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading)
    return <p className="loading-message">Loading articles, please wait...</p>;

  if (!article) return <p className="error-message">Article not found</p>;
  return (
    <div className="single-article-container">
      <div className="single-article">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-info">
          By <span className="author">{article.author}</span> |{" "}
          <span className="date">
            {new Date(article.created_at).toLocaleDateString("en-GB")}{" "}
          </span>
          | Topic: <span className="topic">{article.topic} </span>|{" "}
          <span className="comment-count">
            {article.comment_count} comments{" "}
          </span>{" "}
          | <span className="votes">{article.votes} votes </span>|
        </p>
        <img
          className="article-image"
          src={article.article_img_url}
          alt={article.title}
        />
        <p className="article-body">{article.body}</p>
      </div>
    </div>
  );
}
