/* jshint esversion:6 */
const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.json('Hello World from Messages!');
});

module.exports = router;