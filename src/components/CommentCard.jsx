import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import RemoveComment from "./RemoveComment";

export default function ({ comment, onDelete }) {
  const { user } = useContext(UserContext);
  return (
    <section className="comment-card">
      <div className="comment-body">
        {comment.body}
        <p className="comment-info">
          By <span className="comment-author">{comment.author}</span> |{" "}
          <span className="comment-date">
            {new Date(comment.created_at).toLocaleDateString("en-GB")}
          </span>{" "}
          |<span className="comment-votes"> {comment.votes} votes</span>
        </p>
      </div>
      <div className="user-comment">
        {user.username === comment.author && (
          <div className="delete-comment">
            {
              <RemoveComment
                comment_id={comment.comment_id}
                onDelete={onDelete}
              />
            }
          </div>
        )}
      </div>
    </section>
  );
}
