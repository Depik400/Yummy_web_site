const express = require("express");
const passport = require("passport");
const path = require("path");
const user_controller = require("../controllers/user_controller");
require("../passport/passport-mongo");

const router = express.Router();
const multerUploader = require("../passport/multer-config");

router.post(
  "/upload/title",
  multerUploader.uploadFile,
  user_controller.upload_title_config
);

router.get("/registration", user_controller.get_registration);

router.post("/registration", user_controller.post_registration);

router.get("/error", user_controller.error);

router.post("/auth", user_controller.auth);

router.get(
  "/logout",
  passport.authenticationMiddleware,
  user_controller.logout
);

router.get(
  "/profile",
  passport.authenticationMiddleware,
  user_controller.profile
);

router.get(
  "/admin",
  passport.authenticationMiddleware,
  user_controller.profile_admin
);

module.exports = router;
