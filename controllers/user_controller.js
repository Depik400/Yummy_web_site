const passport = require('passport');
require('../passport/passport-mongo');


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

exports.error = function(req,res){
    res.send('error');
}

exports.logout = function(req,res){
    req.logout();
    req.session.destroy((err) => {
        res.redirect('/');
    })
}

exports.profile = (req,res) =>{
    res.send('successful login');
}

exports.profile_admin = function(req,res) {

}