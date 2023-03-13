const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
var path = require("path");
dotenv.config();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //ya usa bodyparser por adentro

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//rutas

const user = require("./src/Routes/User");

app.use("/User", user);

app.use(function (req, res, next) {
  // next(createError(404));
  res.send("Pagina no encontrada");
});
module.exports = app;
