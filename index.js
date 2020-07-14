const express = require('express');
const consign = require('consign');

const db = require('./config/db');

const app = express();

consign()
  .then('./config/middlewares.js')
  .into(app);

app.db = db;

app.get('/', (req, res) => {
  res.status(200).send('Menu backend');
})

app.listen(3000, () => {
  console.log('Backend Start');
});