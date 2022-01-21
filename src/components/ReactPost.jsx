import PostLiked from "./PostLiked";

const ReactPost = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((list, i) => (
          <li key={i}>
            <h2>{list.question}</h2>
            <h3 style={{ border: "2px solid black" }}>{list.answer}</h3>
            <PostLiked />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReactPost;
