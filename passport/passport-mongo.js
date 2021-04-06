const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const mongoose = require('mongoose');

function GeneratePasswordHash(pass){
  const key = 10;
  const salt = bcrypt.genSalt(key,()=>{
    
  });
  const hashed = bcrypt.hashSync(pass,salt,(err)=>{

  });
  return hashed;
}

passport.use('local.signup', new LocalStrategy
({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true 
},
function(req, username, password, done) {
  User.findOne({ 'username' :  username }, function(err, user) {
      // if there are any errors, return the error 
      if (err)
      { console.log(err);
          return done(err);}
      if (user) {
        console.log(user);
          return done(null, false);
      } else {

          var newUser = new User();
          newUser.username = username;
          newUser.password = GeneratePasswordHash(password);
          newUser.role = 'simple';
          newUser.save(function(err) {
              if (err)
                  throw err;
              return done(null, newUser);
          });
      }
      
}
)
}));

function findUser(username, callback) {
  if (username === user.username) {
    return callback(null, user);
  }
  return callback(null);
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

 passport.use('local',
    new LocalStrategy(
      { usernameField: "name", passwordField: "pass" },
      (username, password, done) => {
        User.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          bcrypt.compare(password, user.password, (err, isValid) => {
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
