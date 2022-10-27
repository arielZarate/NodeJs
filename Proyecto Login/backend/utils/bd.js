//coneccion a bd

try {
    const knex = require("knex")({
        client: "mysql2",

        connection: {
            //VARIABLES DECLARADAS EN UN ARCHIVO .ENV
            port: process.env.DB_PORT,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },

        pool: { min: 0, max: 10 },
    });

    console.log("DB conected");
    module.exports = knex;
} catch (error) {
    console.error("Error" + error);
}