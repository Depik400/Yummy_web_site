const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const passport = require("passport");
const path = require("path");

//const Routers
const HomeRouter = require("./routers/home_router");

//configs
require("./passport/passport-mongo");
const exphbs = require("./passport/handlebars-config");

//Mongoose Schema
const User = require("./models/user");

var app = express();
//Подключение базы данных
mongoose.connect("mongodb://localhost:27017/passport", { useNewUrlParser: true, seUnifiedTopology: true,});
//Подключение боди парсера и хбс
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static("./public"));
//
app.engine(".hbs", exphbs);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

//Установка Routers

app.use("/", HomeRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
