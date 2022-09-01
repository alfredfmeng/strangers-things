import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getPosts } from './api';
import { Register, Posts, Login } from './componenets';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Register currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Posts posts={posts} />
    </div>
  );
};

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
