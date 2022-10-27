var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const doten = require("dotenv");

doten.config();
//const config = require("./config");

//variables
const index = require("./routes/index");
const lenguajes = require("./routes/lenguajes");

var app = express();

// view engine setup
const hbs = require("hbs"); //importando

hbs.registerPartials(__dirname + "/views/partials", function(err) {}); //usando parciales

app.set("views", path.join(__dirname, "views")); //ESTO ES PARA UNIR LAS RUTAS
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/lenguajes", lenguajes);
app.use("/index", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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