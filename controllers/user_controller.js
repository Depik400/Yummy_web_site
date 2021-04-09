const passport = require("passport");
require("../passport/passport-mongo");
const user = require("../models/user");
const multerUploader = require('../passport/multer-config');

exports.get_registration = function (req, res) {
  res.render("index", {
    search: false,
    cases: "registraton",
  });
};

exports.post_registration = passport.authenticate("local.signup", {
  successRedirect: "/",
  failureRedirect: "/user/error",
});

exports.auth = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/user/error",
});

exports.error = function (req, res) {
  res.send("error");
};

exports.logout = function (req, res) {
  req.logout();
  req.session.destroy((err) => {
    res.redirect("/");
  });
};

exports.profile = (req, res) => {
  console.log(req.user.role);
  if (req.user.role == "administrator") {
    res.redirect("/user/admin");
  } else res.send("successful login");
};

exports.profile_admin = function (req, res) {
  if (req.user != undefined) {
    if (req.user.role == "administrator") {
      console.log(req.user.role);
      user
        .find({})
        .lean()
        .exec((err, user) => {
          var json = JSON.stringify(user);
          // console.log(json);
          res.render("index", {
            cases: "administrator",
            username: req.user.username,
            NotLogin: false,
            users: user,
          });
        });
    }
  }
};

exports.upload_title_config = function(req,res,next) {
  console.log(req.body);
  console.log(req.file);
}
