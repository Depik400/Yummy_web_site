const passport = require("passport");
require("../passport/passport-mongo");
const user = require("../models/user");
const multerUploader = require("../passport/multer-config");
const Video = require("../models/video");
const path = require("path");

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

exports.upload_title_config = function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  Video.findOne({ title: req.body.title }, (err, videos) => {
    if (videos || err) {
      console.log(videos);
    } else {
      var v = new Video();
      v.title = req.body.title;
      v.review = 0;
      v.count_of_review = 0;
      v.rating = req.body.rating;
      v.studio = req.body.studio;
      v.type = req.body.type;
      v.series = req.body.series;
      v.image_path =
        "../title_img/" + req.body.title + path.extname(req.file.originalname);
      v.save();
    }
  });
};
