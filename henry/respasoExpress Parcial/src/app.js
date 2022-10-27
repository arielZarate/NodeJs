const express = require("express");
const morgan = require("morgan");

//variable con todo el power de express
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

//rutas

const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users);
app.use("/posts", posts);

//exportacion del module
module.exports = app;
