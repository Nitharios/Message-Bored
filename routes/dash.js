/* jshint esversion:6 */
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const db = require('../models');
const success = require('../lib/success');

const router = express.Router();

const User = db.user;
const saltRounds = 12;

router.route('/login')
.post(passport.authenticate('local'), (req, res) => {
  return res.json({
    id : req.user.dataValues.id, 
    username : req.user.dataValues.username,
    success : true
  });
});

router.route('/logout')
.get((req, res) => {
  req.logout();
  res.status(200).json(success.win);
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
        return res.json(success.win);
      })
      .catch(err => { 
        return res.json(success.lose);
      });
    });
  });
});

module.exports = router;