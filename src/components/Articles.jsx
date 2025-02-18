import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-k8ee.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="sub-intro">Latest articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
}
