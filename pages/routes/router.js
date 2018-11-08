var express = require('express');
var router = express.Router();
var User = require('../models/user');
var next = require('next')
var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev });

// GET route for reading data
// router.get('/', function (req, res, next) {
//   return res.redirect('/index')
//   //res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
// });
app.prepare()
.then (() => {
  router.get('/', (req, res) => {
    const loginPage = '/index'
    //const queryParams = { title: req.params.id } 
    app.render(req, res, loginPage)
  });
  router.get('/dash', (req, res) => {
    const dashPage = '/dash'
    //const queryParams = { title: req.params.id } 
    app.render(req, res, dashPage)
   });
//POST route for updating data
   router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
//   if (req.body.password !== req.body.passwordConf) {
//     var err = new Error('Passwords do not match.');
//     err.status = 400;
//     res.send("passwords dont match");
//     return next(err);
//   }

  if (req.body.email &&
    //req.body.username &&
    req.body.password 
    //req.body.passwordConf
    ) {

    var userData = {
      email: req.body.email,
      //username: req.body.username,
      password: req.body.password,
      //passwordConf: req.body.passwordConf,
    }

    User.authenticate(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/dash');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/dash');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route after registering
router.get('/dash', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Email: </h1>' + user.email + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/dash">Go in</a>')
        }
      }
    });
});

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }
router.get('/dash', requiresLogin, function(req, res, next) {
    //...
});
// GET for logout logout
// router.get('/logout', function (req, res, next) {
//   if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.redirect('/index');
//       }
//     });
//   }
// });
})
module.exports = router;