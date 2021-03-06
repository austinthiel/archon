// const expressStaticGzip = require('express-static-gzip');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Rollbar = require('rollbar');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contact');
const mailingListRouter = require('./routes/mailingList');

const app = express();

const rollbar = new Rollbar({
  accessToken: '397a1ed7376549459c9f6dc8732e7c86',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.use(rollbar.errorHandler());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO this breaks / route
// app.use(
//   '/',
//   expressStaticGzip(path.join(__dirname), {
//     enableBrotli: true,
//     orderPreference: ['br'],
//   })
// );

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/mailingList', mailingListRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
