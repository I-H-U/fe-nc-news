import { UserContext } from "../contexts/UserContext";
import { useState, useContext } from "react";
import { postCommentByArticleId } from "../utils/api";

export default function AddComment({ article_id, addNewComment }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError("Please enter a valid comment!");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const newComment = await postCommentByArticleId(article_id, {
        username: user.username,
        body: comment,
      });
      addNewComment(newComment);
      setComment("");
      setSuccessMessage("Comment sucessfully posted!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      setError("Failed to post comment, please try again...");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="add-comment">
      <h4>Post a comment</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Post comment"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}
