import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

  }, [id]);

  return (
    
    <div>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h2>{post.title}</h2>

      <p>{post.body}</p>

    </div>
  );
}

export default PostDetails;