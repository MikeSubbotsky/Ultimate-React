import React, { useState, useEffect} from 'react'

import { Link } from "react-router-dom";

function PostCard({ title, body, onDelete }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }

function Home({ logIn }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (logIn) fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Link to="/new_project_24/task">Go to Task</Link>
      {console.log(posts)}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          onDelete={() => handleDelete(post.id)}
        />
      ))}
    </div>
  );
}

export default Home