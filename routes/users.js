/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const User = db.user;

const success = { success : true };
const failure = { success : false };

const router = express.Router();

router.route('/')
.get((req, res) => {

  return User.findAll({
    attributes: { exclude: ['password'] },
    order : [[ 'username' ]]
  })
  .then(usersList => {
    return res.json(usersList);
  });
})
.post((req, res) => {
  let username = req.body.username;

  User.create({ username : username })
  .then(response => {
    console.log(`New user ${username} created`);
    return res.json(success);
  })
  .catch(err => {
    // could use something to log this error
    return res.json(failure);
  });
});

router.route('/:username')
.get((req, res) => {
  const username = req.params.username;

  return User.findOne({ 
    where : { username : username },
    attributes: { exclude: ['password'] } 
  })
  .then(userInfo => {
    // console.log('user profile and user messages');
    return res.json(userInfo.dataValues);
  });
});

module.exports = router;