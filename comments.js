// Create web server 
// 1. Create web server
// 2. Create a route
// 3. Create a handler
// 4. Return the response
// 5. Listen on a port

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();

// Middleware
app.use(bodyParser.json());

// Store comments
const commentsByPostId = {};

// Get comments for a post
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create a comment for a post
app.post('/posts/:id/comments', (req, res) => {
  // Generate a random id for the comment
  const commentId = randomBytes(4).toString('hex');
  // Get the comment text from the request body
  const { content } = req.body;
  // Get the post id from the request params
  const postId = req.params.id;
  // Get the comments for the post
  const comments = commentsByPostId[postId] || [];
  // Add the new comment to the comments
  comments.push({ id: commentId, content });
  // Set the updated comments for the post
  commentsByPostId[postId] = comments;
  // Send the new comment
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});

console.log('Comments service');