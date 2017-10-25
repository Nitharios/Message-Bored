/* jshint esversion:6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 8888;

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
// serving up files from public on /
app.use(express.static('public'));

/* ROUTES */
app.use('/api', routes);

/* RENDER */
app.get('*', (req, res) => {
  res.sendFile('index.html', { root : path.join(__dirname, '/public') });
});

/* LISTENER */
app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on ${PORT}`);
});