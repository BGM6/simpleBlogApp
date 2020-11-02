import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from '../style/style.css';
import MainPage from './MainPage';
import CreatePost from './CreatePost';
import Post from './Post';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/CreatePost">Create Post</a>
        </div>
      </div>
      <Router>
        <Route path="/" />
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/CreatePost" render={(props) => <CreatePost />} />
        <Route path="/post/:postId" render={(props) => <Post />} />
      </Router>
    </>
  );
}

export default Navbar;
