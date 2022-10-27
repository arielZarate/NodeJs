const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());

//rutas

const users = require("./routes/users");

const posts = require("./routes/posts");

app.use("/users", users);
app.use("/posts", posts);

module.exports = app;
