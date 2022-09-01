import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getPosts } from './api';
import { Register } from './componenets';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, []);
  return (
    // <div>
    //   {posts.map((post) => {
    //     return <h1 key={post.id}>{post.title}</h1>;
    //   })}
    // </div>
    <Register />
  );
};

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
