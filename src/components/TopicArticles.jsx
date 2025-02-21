import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicNav from "./TopicNav";

export default function TopicArticles() {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getArticlesByTopic(topic_slug);
        setArticles(data);
      } catch (err) {
        setError("Whoops, something went wrong.....");
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [topic_slug]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <TopicNav />
      <h2 className="sub-intro">Articles on {topic_slug}</h2>

      <section>
        {articles.length === 0 ? (
          <p>No articles available for this topic.</p>
        ) : (
          <div className="articles-container">
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
