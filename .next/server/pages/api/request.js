module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ ({

/***/ "+8zO":
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("68ys");


/***/ }),

/***/ "68ys":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var telegraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wu+Y");
/* harmony import */ var telegraf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(telegraf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backendHelpers_sendGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("urNA");


const bot = new telegraf__WEBPACK_IMPORTED_MODULE_0__["Telegram"]("1770735409:AAGDi3HopBgYA8oX-kMy5tNDfXKf_7YAKeE");

const sendEmail = (phone, cookies, ip) => {
  const emailBody = `
    Телефон: ${phone.replace('+', '')} \n
    Utm_data: ${cookies.utm_data || 'none'} \n
    Utm_source: ${cookies.utm_source || 'none'} \n
    Utm_medium: ${cookies.utm_medium || 'none'} \n
    Utm_campaign: ${cookies.utm_campaign || 'none'} \n
    Utm_term: ${cookies.utm_term || 'none'} \n
    Utm_content: ${cookies.utm_content || 'none'} \n
    User_ip: ${ip || 'none'} \n
    Location: ${cookies.user_geo || 'none'} \n
    REF URL: ${cookies.ref_url || 'none'} \n
    GA: ${cookies._ga || 'none'} \n
  `;
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: 'Обратная связь',
    text: emailBody
  };
  _backendHelpers_sendGrid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].send(msg).then(console.log, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  });
};

const request = async (req, res) => {
  const {
    phone
  } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  if (!phone) res.status(400).send({
    message: 'Bad Request'
  });
  const url = `${"https://content.blind-blind.com/"}api/collections/save/Request`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"6b79107e7972a67976b08ef5c082c0"}`
      },
      body: JSON.stringify({
        data: {
          phone
        }
      })
    });
    const sendOrderUsersUrl = `${"https://content.blind-blind.com/"}api/collections/get/BotUsers`;
    const usersResponse = await fetch(sendOrderUsersUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"6b79107e7972a67976b08ef5c082c0"}`
      }
    });
    sendEmail(phone, req.cookies, ip);
    const {
      entries
    } = await usersResponse.json();
    entries.forEach(({
      chatId
    }) => {
      bot.sendMessage(chatId, `Телефон:${phone}`);
    });

    if (response.status === 200) {
      return res.status(200).send({
        message: 'ok'
      });
    }
  } catch {
    return res.status(400).send({
      message: 'Bad Request'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "urNA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+8zO");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);

_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default.a.setApiKey(process.env.SENDGRID_API_KEY);
/* harmony default export */ __webpack_exports__["a"] = (_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "wu+Y":
/***/ (function(module, exports) {

module.exports = require("telegraf");

/***/ })

/******/ });