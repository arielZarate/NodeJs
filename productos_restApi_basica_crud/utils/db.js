const knex = require("knex")({
    client: "mysql2",
    connection: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    pool: { min: 0, max: 10 },
});

module.exports = knex;