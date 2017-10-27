/* jshint esversion:6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const redis = require('connect-redis')(session); 

const authenticatePassport = require('./lib/passport');
const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 8888;

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(session({
  store: new redis(),
  secret: "keyboard cat",
  resave: false,
  saveInitialized: false
}));
// serving up files from public on /
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

/* ROUTES */
app.use('/api', routes);

/* RENDER */
app.get('*', (req, res) => {
  res.sendFile('index.html', { root : path.join(__dirname, '/public') });
});

/* LISTENER */
app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on ${PORT}`);
});