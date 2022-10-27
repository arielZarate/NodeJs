var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//DOTENV para usar variables de entorno
const dotenv = require("dotenv");
dotenv.config(); //asi queda configurado

//declaraciones
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const personas = require("./routes/personas");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//con esta endpoint ejecuto esta ruta
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/personas", personas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    //next(createError(404));
    res.status(404).json({ message: "Pagina no encontrada" });
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