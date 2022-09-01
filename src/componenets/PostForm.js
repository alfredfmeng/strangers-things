import React, { useState } from 'react';
import { newPost } from '../api';

const PostForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      window.alert('No token found. Please sign in');
    }
    const post = await newPost(
      { title, description, price, location, willDeliver },
      token
    );
    // console.log(props);
    props.setPosts(post);
    setTitle('');
    setDescription('');
    setPrice('');
    setLocation('');
    setWillDeliver('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        value={price}
        onChange={(evt) => setPrice(evt.target.value)}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(evt) => setLocation(evt.target.value)}
      />

      <label htmlFor="text">Will Deliver (true/false)</label>
      <input
        type="text"
        name="will-deliever"
        value={willDeliver}
        onChange={(evt) => setWillDeliver(evt.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
