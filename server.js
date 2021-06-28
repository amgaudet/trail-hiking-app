const path = require('path');
const express = require('express');
require('dotenv').config();
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const { existsSync, mkdirSync } = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Some big elaborate secret',
  resave: false,
  saveUninitialized: false,
}

app.use(session(sess));

const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {console.log(`Now listening at http://localhost:${PORT}`);
  const dir = path.join(__dirname, 'tmp/');
  if (!existsSync(dir)) mkdirSync(dir, 0744)
});
});