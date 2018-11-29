var express = require('express');
var next = require('next')
var dev = process.env.NODE_ENV !== 'production'
//var app = express();
var app = next({ dev });
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var handle = app.getRequestHandler()
var routes = require('./pages/routes/router');
var passport = require('passport');
//connect to MongoDB
mongoose.connect('mongodb://localhost/Crowdfunding');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("connect");

});

// serve static files from template
//app.use(express.static(__dirname + '/templateLogReg'));


app.prepare()
.then(() => {
  const server = express()

  server.post('/index',passport.authenticate('local',{ successRedirect: '/dash',
  failureRedirect: '/index' }));
  
  //use sessions for tracking logins
  server.use(session({
  secret: 'authenticate',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
    })
  }));
  // parse incoming requests
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/', routes);
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  
  

  // catch 404 and forward to error handler
  server.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

// error handler
// define as the last app.use callback
  server.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})