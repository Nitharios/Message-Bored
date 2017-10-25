/* jshint esversion:6 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8888;

const app = express();

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on ${PORT}`);
});