const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { users } = require('../config/passport-setup');
const router = express.Router();

// Login routes
router.get('/login', (req, res) => {
    res.render('login', { error: req.flash('error') });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Registration routes
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        users.push({ username, password: hash });
        res.redirect('/auth/login');
    });
});
module.exports = router;
