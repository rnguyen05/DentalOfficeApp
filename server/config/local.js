const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = function(passport) {
  passport.use(
    "local",
    new LocalStrategy(
      // Our user will sign in using an email, rather than a "username"
      {
        email: "email",
        password: "password"
      },
      function(email, password, done) {
        User.findOne({ email: email }, function(err, user) {
          // if there are any errors, return the error before anything else
          if (err) return done(err);

          // if no user is found, return the message
          if (!user) return done(null, false); // req.flash is the way to set flashdata using connect-flash

          // if the user is found but the password is wrong
          if (!user.validPassword(password)) return done(null, false); // create the loginMessage and save it to session as flashdata

          // all is well, return successful user
          return done(null, user);
        });
      }
    )
  );
};
