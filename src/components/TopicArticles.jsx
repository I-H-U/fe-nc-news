import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicNav from "./TopicNav";
import SortControls from "./SortControls";

export default function TopicArticles() {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    setError(null);

    getArticlesByTopic(topic_slug, sortBy, order)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          setError(`The topic ${topic_slug} does not exist...`);
        } else {
          setError("Invalid query... Click the NC logo to start again...");
        }
        setLoading(false);
      });
  }, [topic_slug, sortBy, order]);

  if (error) return <p>{error}</p>;

  return (
    <>
      <TopicNav />
      <h2 className="sub-intro">Articles on {topic_slug}</h2>
      <SortControls />
      {articles.length === 0 && <p>No articles available for this topic.</p>}
      {loading ? (
        <p className="loading-message">
          ⏳ First-time loading may take a few seconds as the server starts
          up...
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
    </>
  );
}
