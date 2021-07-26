//Connecting db w/ server
const Pool = require("pg").Pool;
require("dotenv").config();

// const pool = new Pool({
//     user: "postgres",
//     password: "docker",
//     host: "localhost",
//     port: 5432,
//     database: "peak_tracker"
// });

const pool = new Pool({connnectionString: process.env.DATABASE_URL, sslmode: isProduction=require});

module.exports = pool;
