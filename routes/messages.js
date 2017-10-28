/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const authenticate = require('../lib/authenticate');

const Message = db.message;
const User = db.user;
const Topic = db.topic;

const router = express.Router();

const success = { success : true };
const failure = { success : false };

router.route('/')
.post(authenticate, (req, res) => {
  return Message.create({
    body : req.body.body,
    author_id : req.user.id,
    topic_id : req.body.topic_id
  })
  .then(response => {
    return res.json(success);
  })
  .catch(err => {
    return res.json(failure);
  });
});

router.route('/latest')
.get((req, res) => {
  return Message.findAll({
    include : [
      { model : User },
      { model : Topic }
    ],
    order : [[ 'createdAt', 'DESC' ]],
    limit : 10
  })
  .then(messagesList => {
    return res.json(messagesList);
  });
});

router.route('/:id')
.delete((req, res) => {
  const id = req.params.id;

  return Message.destroy({
    where : { id : id }
  })
  .then(response => {
    return res.json(success);
  })
  .catch(err => {
    return res.json(failure);
  });
});

router.route('/by-topic/:id')
.get((req, res) => {
  const id = req.params.id;

  return Message.findAll({
    include : [
      { model : User },
      { model : Topic }
    ],
    where : { topic_id : id },
    order : [[ 'createdAt', 'ASC' ]]
  })
  .then(messagesList => {
    return res.json(messagesList);
  });
});

router.route('/by-user/:id')
.get((req, res) => {
  const id = req.params.id;
  return Message.findAll({
    include : [
      { model : User },
      { model : Topic }
    ],
    where : { author_id : id }
  })
  .then(messagesList => {
    return res.json(messagesList);
  });
});

module.exports = router;