const express = require("express");
const passport = require('passport');
require('../passport/passport-mongo');

const user_controller = require("../controllers/user_controller");

const router = express.Router();

router.get("/registration",user_controller.get_registration);

router.post("/registration",user_controller.post_registration);

router.get('/error',user_controller.error);

router.post('/auth',user_controller.auth);

router.get('/logout',passport.authenticationMiddleware,user_controller.logout)

router.get('/profile',passport.authenticationMiddleware,user_controller.profile);


module.exports = router;
