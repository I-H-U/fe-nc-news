export default function ({ comment }) {
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
    </section>
  );
}
