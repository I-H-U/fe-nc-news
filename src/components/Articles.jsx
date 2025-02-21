import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Whoops, something went wrong.....");
        setLoading(false);
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="sub-intro">Latest articles</h2>
      {loading ? (
        <p className="loading-message">
          Loading articles, please wait...
          <br />
          <img src="/loading.gif" width="200px" />
        </p>
      ) : (
        <div className="articles-container">
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
