import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {

  let { postId } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/getFromId/${postId}`).then((res) => {
      setPost({
        title: res.data[0].title,
        postText: res.data[0].post_text,
        userName: res.data[0].user_name,
      });
    });
  }, [])
  return (
    <div>
      <div className="Post">
        <h2>{post.title}</h2>
        <p>{post.postText}</p>
        <h4>{`Author: ${post.userName}`}</h4>
      </div>
    </div>
  );
}

export default Post;