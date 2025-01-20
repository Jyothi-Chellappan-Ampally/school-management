const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// Dummy user data (replace this with a database later)
const users = [];

passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username);
    if (!user) return done(null, false);
    
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return done(err);
        return isMatch ? done(null, user) : done(null, false);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    const user = users.find(u => u.username === username);
    done(null, user);
});

module.exports = { users };
