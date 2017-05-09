const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

const index = require('./routes/index.js');
app.use('/', index);


const about = require('./routes/about-us');
app.use('/about', about);


// app.get('/about', function(req, res) {
//     res.sendFile('.routes/about'));
// });

// app.get('/', function(req, res) {
//     res.render('pages/index');
// });

// about page
// app.get('/about', function(req, res) {
//     res.render('./routes/about');
// });

// router.get('/about', (req, res, next) => {
//   res.render('./routes/about');
// });
// app.route('/about')
//   .get(function (req, res) {
//     res.send('about')
//   });


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
