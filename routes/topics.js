/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const Topic = db.topic;

const router = express.Router();

router.route('/')
.get((req, res) => {
  return Topic.findAll()
  .then(topicsList => {
    return res.json(topicsList);
  });
})
.post((req, res) => {
  let title = req.body.title;
  let created_by = req.body.created_by;

  Topic.create({ 
    title : title, 
    created_by : created_by
  })
  .then(response => {
    console.log(`New topic ${title} created`);
    return res.json(response);
  })
  .catch(err => {
    return console.log(err);
  });
});

router.route('/:topicId')
.put((req, res) => {
  const topicId = req.params.topicId;

  return; 
});

module.exports = router;