module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var dash =
/*#__PURE__*/
function (_Component) {
  _inherits(dash, _Component);

  function dash() {
    _classCallCheck(this, dash);

    return _possibleConstructorReturn(this, _getPrototypeOf(dash).apply(this, arguments));
  }

  _createClass(dash, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Crowdfunding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "tc "
      }, "Kick-starter project")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tc "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Log out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/createProj"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "mr5 fr",
        src: "./static/plus.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "f6 lh-copy fr "
      }, " Icons made by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.flaticon.com/authors/smashicons",
        title: "Smashicons"
      }, "Smashicons"), " from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.flaticon.com/",
        title: "Flaticon"
      }, "www.flaticon.com"), " is licensed by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://creativecommons.org/licenses/by/3.0/",
        title: "Creative Commons BY 3.0",
        target: "_blank"
      }, "CC 3.0 BY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dt dt--fixed pl3 pr3 pt3 pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: " pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/ursus-1.jpg",
        width: "243",
        height: "180",
        className: " db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " h-100 w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h-25"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, " SilverTech 2.0 - The World\u2019s Most Advanced Underwear")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h-25 tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h-50 f6 lh-copy measure mt2 mid-gray"
      }, "Hate laundry day? This is for you - the future of underwear is breathable, comfortable, sustainable and affordable. Best of all? It\u2019s odor-killing so you can do more and wash less - meaning fewer laundry days! Grab your SilverTech 2.0 underwear, socks and tees at up to 50% off before the early bird discount runs out.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Link to website : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://kck.st/2rGURlg"
      }, "Click here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/ursus_2.gif",
        width: "243",
        height: "180",
        className: "h-50 db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h-100 w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "h-25"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Tropic: The Ultimate Travel Shoe \u200B- Also Cross promo on IGG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " h-25 tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "h-50 f6 lh-copy measure mt2 mid-gray"
      }, "Our friends from Tropic and their sneaker with 4-in-1 versatility: that provides the benefits of aqua shoes, the comfort of sport shoes, the technical outsole materials of hiking shoes, and the styling of your favorite daily pieces\u2026 Are killing it on Kickstarter, with an overfunding of 6.500% and +10.000 backers. Join now the #carrylesstravelmore movement, check it out HERE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Link to website : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.kickstarter.com/projects/1466745684/tropic-the-ultimate-travel-shoe?ref=bl11zu"
      }, "Click here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: " pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/ursus_3.jpeg",
        width: "243",
        height: "180",
        className: " db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Xenxo S-Ring - The World's Smartest Smart Wearable")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "Reimagine what a wearable can do. Bluetooth call, File storage, Music Control, NFC payment and much more, all in one smart, compact ring! CLICK HERE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Link to website : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://fnd.to/2bc/xenxo"
      }, "Click here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dt dt--fixed pl3 pr3 pt3 pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/ursus_4.jpg",
        width: "243",
        height: "180",
        className: " db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "REDEFINED - The Perfected Wallet Series. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "From the edge of expression. We have blended style, functionality and quality into an outstanding smart wallet collection.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Link to website : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.kickstarter.com/projects/serkanelbasan/redefined-wallets?ref=5a8byi"
      }, "Click here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/ursus_5.gif",
        width: "243",
        height: "180",
        className: " db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Max Pump 2, Best outdoor tool. Enjoy your leisure time!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "Amazingly small yet powerful, Max Pump 2 is a super portable air pump that can quickly inflate/deflate air mattresses, pool floats, rubber rafts, air beds, and any kind of inflatable. Check it out HERE.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Link to website : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.kickstarter.com/projects/203753556/max-pump-2-pump-up-your-air-products-in-a-snap?ref=4p3nmq"
      }, "Click here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/img_1.png",
        width: "243",
        height: "180",
        className: "db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Campaign 6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "by name of campaign owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dt dt--fixed pl3 pr3 pt3 pb3 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/img_1.png",
        width: "243",
        height: "180",
        className: "db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Campaign 7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "by name of campaign owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/img_1.png",
        width: "243",
        height: "180",
        className: "db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Campaign 8")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "by name of campaign owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "./static/img_1.png",
        width: "243",
        height: "180",
        className: "db w-100 br2 br--top",
        alt: "Photo of a kitten looking menacing."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pa2 ph3-ns pb3-ns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " w-100 mt1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "f5 f4-ns mv0"
      }, "Campaign 9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dtc tr"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "f5 mv0"
      }, "$1,000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "f6 lh-copy measure mt2 mid-gray"
      }, "by name of campaign owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Number of backers "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Amount pledged "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "% Funded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: ""
      }, "Day to go / IGG  InDemand "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "h3 b--solid fl w-100 bg-green"
      }, "Ask for Cross-Promo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))));
    }
  }]);

  return dash;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })
/******/ ]);