require('dotenv').config();
const Pool = require("pg").Pool;

const pool = new Pool({
 user: "postgres",
 host: "localhost",
 database: `${process.env.database}`,
 password: `${process.env.password}`,
 port: 5433,
});

module.exports = pool;
