/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const authenticate = require('../lib/authenticate');

const Topic = db.topic;
const User = db.user;
const success = { success : true };
const failure = { success : false };

const router = express.Router();

router.route('/')
.get((req, res) => {
  return Topic.findAll({
    include : [
    { model : User }
    ]
  })
  .then(topicsList => {
    return res.json(topicsList);
  });
})
.post(authenticate, (req, res) => {
  return Topic.create({ 
    title : req.body.title, 
    created_by : req.user.id
  })
  .then(response => {
    console.log(`New topic ${req.body.title} created`);
    return res.json(success);
  })
  .catch(err => {
    console.log(err);
    return res.json(failure);
  });
});

router.route('/:id')
.get((req, res) => {
  const id = req.params.id;

  return Topic.findById(id, { raw : true }, {
    include : [{ 
      model : User
    }, {
      model : Topic
    }]
  })
  .then(topicInfo => {
    return res.json(topicInfo);
  });
})
.put(authenticate, (req, res) => {
  const id = req.params.id;

  return Topic.update(
    { title : req.body.title },
    { where : { id : id } 
  })
  .then(response => {
    return res.json(success);
  })
  .catch(err => {
    return res.json(failure);
  });
})
.delete(authenticate, (req, res) => {
  const id = req.params.id;

  return Topic.destroy({
    where : { id : id }
  })
  .then(response => {
    console.log(response);
    return res.json(success);
  })
  .catch(err => {
    return res.json(failure);
  });
});

module.exports = router;