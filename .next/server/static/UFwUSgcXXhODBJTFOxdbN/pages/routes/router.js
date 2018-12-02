module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(4); //var bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConf: {
    type: String,
    required: true
  }
}); //authenticate input against database

UserSchema.statics.authenticate = function (email, password, callback) {
  var user = this;
  user.findOne({
    email: email
  }).exec(function (err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    } // bcrypt.compare(password, user.password, function (err, result) {
    //   if (result === true) {
    //     return callback(null, user);
    //   } else {
    //     return callback();
    //   }
    // })

  });
}; //hashing a password before saving it to the database


UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});
var User = mongoose.model('User', UserSchema);
module.exports = User;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(12);

var router = express.Router();

var User = __webpack_require__(3);

var next = __webpack_require__(13);

var dev = "production" !== 'production';
var app = next({
  dev: dev
}); // GET route for reading data
// router.get('/', function (req, res, next) {
//   return res.redirect('/index')
//   //res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
// });

app.prepare().then(function () {
  router.get('/', function (req, res) {
    var loginPage = '/index'; //const queryParams = { title: req.params.id } 

    app.render(req, res, loginPage);
  }); //router.get('/dash', (req, res) => {
  //  const dashPage = '/dash'
  //const queryParams = { title: req.params.id } 
  //  app.render(req, res, dashPage)
  // });
  //POST route for updating data

  router.post('/', function (req, res, next) {
    // confirm that user typed same password twice
    //   if (req.body.password !== req.body.passwordConf) {
    //     var err = new Error('Passwords do not match.');
    //     err.status = 400;
    //     res.send("passwords dont match");
    //     return next(err);
    //   }
    if (req.body.email && //req.body.username &&
    req.body.password //req.body.passwordConf
    ) {
        var userData = {
          email: req.body.email,
          //username: req.body.username,
          password: req.body.password //passwordConf: req.body.passwordConf,

        };
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
  });

  function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  } // GET route after registering


  router.get('/dash', requiresLogin, function (req, res, next) {
    User.findById(req.session.userId).exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Email: </h1>' + user.email + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/dash">Go in</a>');
        }
      }
    });
  }); //router.get('/dash', requiresLogin, function(req, res, next) {
  //...
  //});
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
});
module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next");

/***/ })
/******/ ]);