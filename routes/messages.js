/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const Message = db.message;
const User = db.user;
const Topic = db.topic;

const router = express.Router();

router.route('/')
.post((req, res) => {
  let body = req.body.body;
  let author_id = req.body.author_id;
  let topic_id = req.body.topic_id;

  return Message.create({
    body : body,
    author_id : author_id,
    topic_id : topic_id
  })
  .then(response => {
    console.log('New message created');
    return res.json(response);
  });
  // res.json('create and respond with the new message');
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
  // res.json('respond with the latest 10 messages including the name of the topic including the author\'s names');
});

router.route('/by-topic/:id')
.get((req, res) => {
  const id = req.params.id;

  return Message.findAll({
    include : [
      { model : User },
      { model : Topic }
    ],
    where : { author_id : id },
    order : [[ 'createdAt', 'ASC' ]]
  })
  .then(messagesList => {
    return res.json(messagesList);
  });
  // res.json('respond with all messages that belong to the topic by :topic_id including the author\'s name, including the topic\'s name, ordered by createdAt ascending');
});

module.exports = router;