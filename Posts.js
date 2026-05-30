import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Posts</h1>

      <input
        type="text"
        placeholder="Search Post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><div className="post-container">
  {posts.map((item) => (
    <div className="post-card" key={item.id}>
      <h3>{item.title}</h3>

      <a href="/">Read More</a>
    </div>
  ))}
</div>
      
  
    </div>
  );
}

export default Posts;