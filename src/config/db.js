require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 6543),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'postgres',
    ssl: { rejectUnauthorized: false }, 
  },
  pool: { min: 0, max: 7 },
});

module.exports = db;