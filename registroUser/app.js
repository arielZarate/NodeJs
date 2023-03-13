var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const { secured } = require("./middleware/middleware-perfil");
var indexRouter = require("./routes/index");
const usuarios = require("./routes/usuarios");
const personas = require("./routes/personas");
const registro = require("./routes/registro");
const productos = require("./routes/productos");
const auth = require("./routes/auth");
const perfil = require("./routes/perfil");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuarios", usuarios);
app.use("/personas", personas);
app.use("/registro", registro);
app.use("/productos", productos);
app.use("/auth", auth);
app.use("/perfil", secured, perfil);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    //next(createError(404));

    res.json("pagino no encontrada");
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;