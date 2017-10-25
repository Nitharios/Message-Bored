/* jshint esversion:6 */
const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.json('respond with the latest 10 messages including the name of the topic including the author\'s names');
})
.post((req, res) => {
  res.json('create and respond with the new message');
});

router.route('/by-topic/:topic_id', (req, res) => {
  res.json('respond with all messages that belong to the topic by :topic_id including the author\'s name, including the topic\'s name, ordered by createdAt ascending');
});

module.exports = router;