import { useState } from "react";
const PostLiked = () => {
  const [showLike, setShowLike] = useState(true);
  const toggleInfo = () => {
    setShowLike(!showLike);
  };
  return (
    <div>
      {showLike ? (
        <button style={{ fontSize: "20px" }} onClick={toggleInfo}>
          Like
        </button>
      ) : (
        <h2> you have liked this post!</h2>
      )}
    </div>
  );
};
export default PostLiked;
