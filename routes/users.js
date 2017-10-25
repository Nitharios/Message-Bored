/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const User = db.user;

const router = express.Router();

router.route('/')
.get((req, res) => {

  return User.findAll()
  .then(usersList => {
    return res.json(usersList);
  });
})
.post((req, res) => {
  let username = req.body.username;

  User.create({ username : username })
  .then(response => {
    return res.json(response);
  })
  .catch(err => {
    return console.log(err);
  });
});

router.route('/:id')
.get((req, res) => {
  res.json('user profile and user messages');
});

module.exports = router;