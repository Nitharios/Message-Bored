/* jshint esversion:6 */
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');

const db = require('../models');

const User = db.user;
const router = express.Router();
const success = { success : true };
const failure = { success : false };
const saltRounds = 12;

router.route('/login')
.post(passport.authenticate('local', (req, res) => {
  return res.json({ 
    username : req.body.username,
    success : true
  });
}));

router.route('/logout')
.get((req, res) => {
  req.logout();
  return res.status(200).json(success);
});

router.route('/register')
.post((req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let username = req.body.username;
      
      User.create({
        username : username,
        password : hash
      })
      .then(user => {
        return res.json(success);
      })
      .catch(err => { 
        return res.json(failure);
      });
    });
  });
});

module.exports = router;