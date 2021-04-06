const express = require('express');
const home_controller = require('../controllers/home_controller');

const HomeRouter = express.Router();

HomeRouter.get('/',home_controller.index);




module.exports = HomeRouter;