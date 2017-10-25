/* jshint esversion:6 */
const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.json('Hello from Topics!');
})
.post((req, res) => {
  res.json('create and respond with a new topic');
});

router.route('/:id')
.put((req, res) => {
  const topicId = req.params.id;
  res.json('update and respond with the updated topic');
});

module.exports = router;