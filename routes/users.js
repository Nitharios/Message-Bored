/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const User = db.user;

const router = express.Router();

router.route('/')
.get((req, res) => {
  console.log('request');
  return User.findAll()
  .then(usersList => {
    return res.json(usersList);
  });
})
.post((req, res) => {
  res.json('create and respond with new user');
});

router.route('/:id')
.get((req, res) => {
  res.json('user profile and user messages');
});

module.exports = router;