const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const saltRounds = 10;
const myPlaintextPassword = "pass";
const salt = bcrypt.genSaltSync(saltRounds);
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt);
console.log(passwordHash);

const user = {
  username: "depik400",
  passwordHash,
  id: 1
};



function findUser(username, callback) {
  if (username === user.username) {
    return callback(null, user);
  }
  return callback(null);
}

passport.serializeUser(function (user, cb) {
  cb(null, user.username);
});

passport.deserializeUser(function (username, cb) {
  findUser(username, cb);
});

  passport.use(
    new LocalStrategy(
      { usernameField: "name", passwordField: "pass" },
      (username, password, done) => {
        console.log('Login: ' + username + '  Password:' + password);
        findUser(username, (err, user) => {
          if (err) {
            return done(err);
          }

          // User not found
          if (!user) {
            console.log("User not found");
            return done(null, false);
          }

          // Always use hashed passwords and fixed time comparison
          bcrypt.compare(password, user.passwordHash, (err, isValid) => {
            if (err) {
              console.log(err);
              return done(err);
            }
            if (!isValid) {
              console.log(isValid);
              return done(null, false);
            }
            return done(null, user);
          });
        });
      }
    )
  );


const authenticationMiddleware = (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

passport.authenticationMiddleware = authenticationMiddleware;
  
