import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";
import SortControls from "./SortControls";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    getArticles(sortBy, order)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Whoops, something went wrong.....");
        setLoading(false);
      });
  }, [sortBy, order]);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <section>
      <h2 className="sub-intro">Latest articles</h2>
      <SortControls />
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
    </section>
  );
}
