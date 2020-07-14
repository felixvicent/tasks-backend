require('dotenv').config();

module.exports = {
  client: 'mysql',
  connection: {
    database: process.env.CONNECTION_DATABASE,
    user: process.env.CONNECTION_USER,
    password: process.env.CONNECTION_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
