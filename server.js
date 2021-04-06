const express = require('express');
const session = require('express-session');     
const FileStore = require('session-file-store')(session);
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const passport = require('passport');
const exphbs = require('express-handlebars');
//const Routers
const HomeRouter = require('./routers/home_router');
//Mongoose Schema
const User = require('./models/user');


var app = express();

mongoose.connect('mongodb://localhost:27017/passport', {useNewUrlParser: true,seUnifiedTopology: true}).then((result) => {
    console.log('Database is active\n');
}).catch((err) => {
    console.log('Error' + err);
});