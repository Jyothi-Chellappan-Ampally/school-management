const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
require('./config/passport-setup');
const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/pages', pageRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
