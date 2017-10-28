/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const authenticate = require('../lib/authenticate');
const success = require('../lib/success');

const User = db.user;
const Topic = db.topic;
const router = express.Router();

router.route('/')
.get((req, res) => {
  return Topic.findAll({
    include : [{ 
      model : User,
      attributes: { exclude: ['password'] } 
    }],
    order : [[ 'createdAt', 'DESC' ]]
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
    return res.json(success.win);
  })
  .catch(err => {
    return res.json(success.lose);
  });
});

router.route('/:id')
.get((req, res) => {
  const id = req.params.id;

  return Topic.findById(id, {
    include : [{ 
      model : User,
      attributes: { exclude: ['password'] } 
    }]
  })
  .then(topicInfo => {
    topicInfo.user.dataValues.password = '';
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
    return res.json(success.win);
  })
  .catch(err => {
    return res.json(success.lose);
  });
})
.delete(authenticate, (req, res) => {
  const id = req.params.id;

  return Topic.destroy({
    where : { id : id }
  })
  .then(response => {
    return res.json(success.win);
  })
  .catch(err => {
    return res.json(failure.lose);
  });
});

module.exports = router;