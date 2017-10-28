/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const authenticate = require('../lib/authenticate');
const success = require('../lib/success');

const User = db.user;
const Topic = db.topic;
const Message = db.message;

const router = express.Router();

router.route('/')
.post(authenticate, (req, res) => {
  return Message.create({
    body : req.body.body,
    author_id : req.user.id,
    topic_id : req.body.topic_id
  })
  .then(response => {
    return res.json(success.win);
  })
  .catch(err => {
    return res.json(success.lose);
  });
});

router.route('/latest')
.get((req, res) => {
  return Message.findAll({
    include : [
      { model : Topic },
      { model : User,
        attributes: { exclude: ['password'] }
      }
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
    return res.json(success.win);
  })
  .catch(err => {
    return res.json(success.lose);
  });
});

router.route('/by-topic/:id')
.get((req, res) => {
  const id = req.params.id;

  return Message.findAll({
    include : [
      { model : Topic },
      { model : User,
        attributes: { exclude: ['password'] } 
      }
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
      { model : Topic },
      { model : User, 
        attributes: { exclude: ['password'] }
      }
    ],
    where : { author_id : id },
    order : [[ 'createdAt', 'ASC' ]]
  })
  .then(messagesList => {
    return res.json(messagesList);
  });
});

module.exports = router;