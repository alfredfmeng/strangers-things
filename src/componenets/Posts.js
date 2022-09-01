import React from 'react';

const Posts = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts && posts.length ? (
        posts.map((post) => {
          return <h1 key={post._id}>{post.title}</h1>;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Posts;
