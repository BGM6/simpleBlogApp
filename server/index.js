const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// This gets the post from the server and displays thim on main page
app.get('/api/get', (req, res) => {
  db.query("SELECT * FROM posts",
    (err, result) => {
      if (err) throw err;
      else {
        res.send(result);
      }
    });
})

// gets ID so user can click post to view post on its own page
app.get('/api/getFromId/:id', (req, res) => {

  const id = req.params.id;

  db.query("SELECT * FROM posts WHERE id = ?", id,
    (err, result) => {
      if (err) throw err;
      else {
        res.send(result);
      }
    });
})

// This post the created post to mySQL
app.post('/api/create', (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query("INSERT INTO posts (title, post_text, user_name) VALUES(?,?,?)", [title, text, username],
    (err, result) => {
      if (err) throw err;
      else {
        console.log(result);
      }
    });
});



app.listen((PORT), () => {
  console.log(`Server is listening on PORT ${PORT}`);
});