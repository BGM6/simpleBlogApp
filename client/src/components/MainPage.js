import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const MainPage = () => {

  const [postList, setPostList] = useState([])
  let history = useHistory()

  useEffect(() => {
    axios.get("http://localhost:5000/api/get").then((res) => {
      setPostList(res.data)
    })
  }, []);

  return (
    <div className="MainPage">
      <div className="PostContainer">

        {postList.map((val, key) => {
          return (
            <div className="Post" key={key} onClick={() => { history.push(`/post/${val.id}`) }}>
              <h2>{val.title}</h2>
              <p>{val.post_text.length > 500 ? val.post_text.substring(0, 350) + ' ...' : val.post_text}</p>
              <h4>{`Author: ${val.user_name}`}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default MainPage;