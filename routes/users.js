/* jshint esversion:6 */
const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.json('Hello World from Users!');
})
.post((req, res) => {
  res.json('create and respond with new user');
});

router.route('/:id')
.get((req, res) => {
  res.json('user profile and user messages');
});

module.exports = router;