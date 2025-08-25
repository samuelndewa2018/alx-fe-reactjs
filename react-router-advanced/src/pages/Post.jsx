import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>This is a dynamic route displaying post {postId}.</p>
    </div>
  );
}
