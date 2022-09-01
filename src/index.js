import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getPosts } from './api';
import { Register, Posts } from './componenets';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Register />
      <Posts posts={posts} />
    </div>
  );
};

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
