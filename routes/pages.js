const express = require('express');
const router = express.Router();

// About page
router.get('/about', (req, res) => {
    res.render('about', { user: req.user });
});

// Admissions page
router.get('/admissions', (req, res) => {
    res.render('admissions', { user: req.user });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('contact', { user: req.user });
});

// Gallery page
router.get('/gallery', (req, res) => {
    res.render('gallery', { user: req.user });
});
module.exports = router;
