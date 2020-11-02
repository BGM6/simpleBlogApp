DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE posts 
(

  id INT AUTO_INCREMENT NOT NULL,
  title TEXT(600) NOT NULL,
  post_text LONGTEXT NOT NULL,
  user_name VARCHAR(45) NOT NULL,
  date_posted DATETIME default current_timestamp,


  PRIMARY KEY (id)
);