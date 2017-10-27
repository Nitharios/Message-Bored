/* jshint esversion:6 */
const express = require('express');
const users = require('./users');
const messages = require('./messages');
const topics = require('./topics');
const dash = require('./dash');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("You're not crazy!");
  res.json('Hello from root!');
});

router.use('/dash', dash);
router.use('/users', users);
router.use('/messages', messages);
router.use('/topics', topics);

module.exports = router;