//Connecting db w/ server
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "docker",
    host: "localhost",
    port: 5432,
    database: "peak_tracker"
});

module.exports = pool;