import { useState } from "react";
import { deleteCommentById } from "../utils/api";

export default function RemoveComment({ comment_id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setIsDeleting(true);
      try {
        await deleteCommentById(comment_id);
        onDelete(comment_id);
      } catch (error) {
        alert("Failed to remove comment, please try again...");
        setIsDeleting(false);
      }
    }
  };

  return (
    <img
      onClick={handleDelete}
      src="/bin.png"
      className="bin"
      title="Delete comment"
      alt="delete comment"
    />
  );
}
