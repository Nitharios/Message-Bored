/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const User = db.user;

const router = express.Router();

router.route('/')
.get((req, res) => {
  console.log('request for usersList');
  return User.findAll()
  .then(usersList => {
    return res.json(usersList);
  });
})
.post((req, res) => {
  User.create({ username : username })
  .then(response => {
    console.log('create and respond with new user', response);
    return res.json(response);
  });
});

router.route('/:id')
.get((req, res) => {
  res.json('user profile and user messages');
});

module.exports = router;