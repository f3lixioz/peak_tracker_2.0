//Connecting db w/ server
const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "docker",
//     host: "localhost",
//     port: 5432,
//     database: "peak_tracker"
// });

const pool = new Pool({connnectionString: process.env.DATABASE_URL});

module.exports = pool;