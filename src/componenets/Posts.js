import React from 'react';

const Posts = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
};

export default Posts;
