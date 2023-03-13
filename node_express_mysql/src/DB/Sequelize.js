const { Sequelize } = require("sequelize");
const db = require("./config.js");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  logging: false,
  native: false,

  //aca puedo definir el timestamp
  define: {
    timestamps: false,
  },
});

module.exports = { sequelize };
