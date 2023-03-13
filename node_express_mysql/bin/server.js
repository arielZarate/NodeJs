const server = require("../app");
const { sequelize } = require("../src/DB/Sequelize.js");
const port = process.env.PORT || 3001;
const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    //importante esta configuracion
    sequelize.sync({ force: false });
    console.log("Connection has been established successfully 🚀🚀🚀🚀");
    server.listen(port, () =>
      console.log(`listening on http://localhost:${port}`)
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

iniciarServidor();
