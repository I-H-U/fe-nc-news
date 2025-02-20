import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

export default function ArticleVote({ initialVotes, article_id }) {
  const [votes, setVotes] = useState(initialVotes || 0);
  const [userVote, setUserVote] = useState(0);

  const handleVote = async (change) => {
    if (userVote === change) {
      setVotes((prevVotes) => prevVotes - change);
      setUserVote(0);

      try {
        await patchArticleVotes(article_id, -change);
      } catch (error) {
        setVotes((prevVotes) => prevVotes + change);
        setUserVote(change);
      }
    } else {
      setVotes((prevVotes) => prevVotes + change - userVote);
      setUserVote(change);

      try {
        await patchArticleVotes(article_id, change - userVote);
      } catch (error) {
        setVotes((prevVotes) => prevVotes - (change - userVote));
        setUserVote(userVote);
        alert("Failed to update vote, please try again!");
      }
    }
  };
  console.log(initialVotes);

  return (
    <>
      <img
        onClick={() => handleVote(1)}
        className="upvote-article"
        src="/like.png"
        title="Upvote this article"
      />
      <img
        onClick={() => handleVote(-1)}
        className="downvote-article"
        src="/thumbs-down.png"
        title="Downvote this article"
      />
      <span className="votes">{votes} votes </span>
    </>
  );
}
