import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getPosts } from './api';
import { Register, Posts, Login, PostForm } from './componenets';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPosts());
    };
    fetchPosts();
  }, [posts]);
  console.log(isLoggedIn);
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <Register currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Login
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      ) : (
        <PostForm setPosts={setPosts} />
      )}

      <Posts posts={posts} />
    </div>
  );
};

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
