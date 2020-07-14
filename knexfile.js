require('dotenv').config();

module.exports = {
  client: process.env.CONNECTION_CLIENT || 'mysql',
  connection: {
    database: process.env.CONNECTION_DATABASE,
    user: process.env.CONNECTION_USER,
    password: process.env.CONNECTION_PASSWORD,
    host: 'ec2-54-234-28-165.compute-1.amazonaws.com',
    port: 5432
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
