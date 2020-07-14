const express = require('express');
const consign = require('consign');

const db = require('./config/db');

const app = express();

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.db = db;

app.get('/', (req, res) => {
  res.status(200).send('Menu backend');
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Backend Start');
});