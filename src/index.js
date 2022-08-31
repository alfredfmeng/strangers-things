import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getPosts } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
};

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
