import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

export default function TopicNav() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const topicsData = await getTopics();

        setTopics(topicsData);
      } catch (err) {
        setError("There was a problem loading topics, please try again...");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTopics();
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="topics-container">
      <h2>Topics</h2>
      <ul className="topics-list">
        {topics.map((topic) => {
          return (
            <Link
              to={`/topics/${topic.slug}`}
              className="topic-link"
              key={topic.slug}
            >
              <li className="topic-item">{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
