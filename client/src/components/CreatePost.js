import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios'
import "../style/style.css"

const CreatePost = () => {

  const submitPost = () => {
    axios.post('http://localhost:5000/api/create',
      {
        userName: userName,
        title: title,
        text: text,
      })
  }

  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>UserName</label>
        <input style={{ fontSize: '2rem' }}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }} />

        <label>Title</label>
        <input style={{ fontSize: '2rem' }}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Content</label>
        <TextareaAutosize
          onChange={(e) => {
            setText(e.target.value);
          }}
          rowsMax={4}
          style={{ height: '100px', width: '80%', fontSize: '1.5rem' }}
          aria-label="maximum height"
        />
        <button onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;