const express = require('express');
const home_controller = require('../controllers/home_controller');

const HomeRouter = express.Router();

HomeRouter.get('/',);

HomeRouter.get('/registration');


module.exports = HomeRouter;