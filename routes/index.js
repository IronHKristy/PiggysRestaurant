const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about.ejs');
});

router.get('/breakfast', (req, res, next) => {
  res.render('breakfast.ejs');
});

router.get('/lunch', (req, res, next) => {
  res.render('lunch.ejs');
});

router.get('/ice-cream', (req, res, next) => {
  res.render('ice-cream.ejs');
});

router.get('/giftshop', (req, res, next) => {
  res.render('giftshop.ejs');
});

router.get('/directions', (req, res, next) => {
  res.render('directions.ejs');
});

router.get('/feedback', (req, res, next) => {
  res.render('feedback.ejs');
});

module.exports = router;
