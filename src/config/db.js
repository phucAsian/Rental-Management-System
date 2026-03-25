require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'aws-1-ap-southeast-1.pooler.supabase.com',
    port: 6543,
    user: 'postgres.unhplfhhhcnggsjgpgjy',
    password: 'quanlinhatro',
    database: 'postgres',
    ssl: { rejectUnauthorized: false }, 
  },
  pool: { min: 0, max: 7 },
});

module.exports = db;