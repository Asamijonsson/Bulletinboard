import { useState } from "react";

const ReactPost = ({ question, answer }) => {
  const [showLike, setShowLike] = useState(true);
  const toggleInfo = () => {
    setShowLike(!showLike);
  };
  return (
    <div>
      <li>
        <h2>{question}</h2>
        <h3 style={{ border: "2px solid black" }}>{answer}</h3>
        {showLike ? (
          <button style={{ fontSize: "20px" }} onClick={toggleInfo}>
            Like
          </button>
        ) : (
          <h2> you have liked this post!</h2>
        )}
      </li>
    </div>
  );
};
export default ReactPost;
