import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsByArticleId } from "./utils/api";
import CommentCard from "./components/CommentCard";
import ArticleVote from "./components/ArticleVote";
import AddComment from "./components/AddComment";

export default function SingleArticle() {
  const { article_id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const [articleData, commentsData] = await Promise.all([
          getArticleById(article_id),
          getCommentsByArticleId(article_id),
        ]);

        if (!articleData || Object.keys(articleData).length === 0) {
          throw new Error("Article not found");
        }

        setArticle(articleData);
        setComments(commentsData);
      } catch (error) {
        setError("The requested article does not exist.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [article_id]);

  const addNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleDeleteComment = (deletedCommentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );
  };

  if (loading)
    return (
      <p className="loading-message">
        ⏳ First-time loading may take a few seconds as the server starts up...
        <br />
        <img src="/loading.gif" width="200px" />
      </p>
    );

  if (error) {
    return (
      <section className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => navigate("/")}>Return to Home</button>
      </section>
    );
  }
  return (
    <section className="single-article-container">
      {article && (
        <section className="single-article">
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
          </p>
          <img
            className="article-image"
            src={article.article_img_url}
            alt={article.title}
          />
          <section className="article-vote-container">
            {
              <ArticleVote
                initialVotes={article.votes}
                article_id={article_id}
              />
            }
          </section>
          <p className="article-body">{article.body}</p>
        </section>
      )}
      <section className="article-comments">
        <h3>Comments</h3>
        <AddComment article_id={article_id} addNewComment={addNewComment} />
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              onDelete={handleDeleteComment}
            />
          ))
        ) : (
          <p>Be the first to comment...</p>
        )}
      </section>
    </section>
  );
}
