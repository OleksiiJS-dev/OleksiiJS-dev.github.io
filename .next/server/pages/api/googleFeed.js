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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Nrp":
/***/ (function(module, exports) {

module.exports = require("fs/promises");

/***/ }),

/***/ "6qAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RgCs");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+Nrp");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_getCockpitData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kEpX");
/* harmony import */ var _src_utils_getMoySkladData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XF79");
/* harmony import */ var xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JBIC");
/* harmony import */ var xml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml__WEBPACK_IMPORTED_MODULE_5__);






const priceFormat = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'decimal',
  useGrouping: false
});

const googleFeed = async (_req, res) => {
  const baseUrl = "https://blind-blind.com";
  const servePath = process.cwd() + '/public/xml/';
  const goodsResponse = await Object(_src_utils_getCockpitData__WEBPACK_IMPORTED_MODULE_3__[/* getCockpitCollection */ "a"])('Goods');
  const goods = goodsResponse.entries;

  const delay = ms => new Promise(resolve => Object(timers__WEBPACK_IMPORTED_MODULE_0__["setTimeout"])(resolve, ms));

  if (!Object(fs__WEBPACK_IMPORTED_MODULE_1__["existsSync"])(servePath)) Object(fs__WEBPACK_IMPORTED_MODULE_1__["mkdirSync"])(servePath);
  const goodsData = await Promise.all(goods.map(async ({
    _id,
    title,
    title_en,
    description,
    description_en,
    link,
    previewImage: {
      path: previewImagePath
    },
    secondImage: {
      path: secondImagePath
    },
    collection,
    price,
    stockPrice,
    isExclusive
  }, idx) => {
    var _moyskladData$rows;

    await delay(67 * idx);
    const moyskladData = await Object(_src_utils_getMoySkladData__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(`remap/1.2/entity/variant?filter=code~=${link.replace('/', '')}`);
    const availability = isExclusive ? 'backorder' : !!(moyskladData !== null && moyskladData !== void 0 && (_moyskladData$rows = moyskladData.rows) !== null && _moyskladData$rows !== void 0 && _moyskladData$rows.length) || false ? 'in_stock' : 'out_of_stock';
    const item_ru = [{
      'g:id': _id
    }, {
      'g:title': title
    }, {
      'g:description': description
    }, {
      'g:link': encodeURI(`${baseUrl}/goods${link}`)
    }, {
      'g:image_link': encodeURI(`${"https://content.blind-blind.com/"}${previewImagePath}`)
    }, {
      'g:brand': 'BLIND'
    }, {
      'g:availability': availability
    }, {
      'g:price': `${priceFormat.format(+price)} UAH`
    }];
    const item_en = [{
      'g:title': title_en
    }, {
      'g:description': description_en
    }, {
      'g:link': encodeURI(`${baseUrl}/goods${link}`)
    }, {
      'g:image_link': encodeURI(`${"https://content.blind-blind.com/"}${previewImagePath}`)
    }, {
      'g:brand': 'BLIND'
    }, {
      'g:availability': availability
    }, {
      'g:price': `${priceFormat.format(+price)} UAH`
    }];

    if (secondImagePath !== undefined) {
      item_ru.push({
        'g:additional_image_link': `${"https://content.blind-blind.com/"}${secondImagePath}`
      });
      item_en.push({
        'g:additional_image_link': `${"https://content.blind-blind.com/"}${secondImagePath}`
      });
    }

    if (collection !== undefined && collection.display !== undefined) {
      item_ru.push({
        'g:product_type': `${collection.display}`
      });
      item_en.push({
        'g:product_type': `${collection.display}`
      });
    }

    if (!isNaN(+((stockPrice === null || stockPrice === void 0 ? void 0 : stockPrice.trim()) || NaN))) {
      Object.defineProperty(item_ru, 'g:sale_price', {
        value: `${stockPrice} UAH`
      });
      Object.defineProperty(item_en, 'g:sale_price', {
        value: `${stockPrice} UAH`
      });
    }

    return {
      item_ru,
      item_en
    };
  }));
  const xml_ru = {
    rss: [{
      _attr: {
        'xmlns:g': 'http://base.google.com/ns/1.0',
        version: '2.0'
      }
    }, {
      title: 'BLIND-BLIND'
    }, {
      link: baseUrl
    }, {
      description: 'BLIND-BLIND product feed'
    }, {
      channel: goodsData.map(({
        item_ru
      }) => ({
        item: item_ru
      }))
    }]
  };
  const xml_en = {
    rss: [{
      _attr: {
        'xmlns:g': 'http://base.google.com/ns/1.0',
        version: '2.0'
      }
    }, {
      title: 'BLIND-BLIND'
    }, {
      link: baseUrl
    }, {
      description: 'BLIND-BLIND product feed'
    }, {
      channel: goodsData.map(({
        item_en
      }) => ({
        item: item_en
      }))
    }]
  };
  await Promise.all([Object(fs_promises__WEBPACK_IMPORTED_MODULE_2__["writeFile"])(servePath + 'google_ru.xml', xml__WEBPACK_IMPORTED_MODULE_5___default()(xml_ru)), Object(fs_promises__WEBPACK_IMPORTED_MODULE_2__["writeFile"])(servePath + 'google_en.xml', xml__WEBPACK_IMPORTED_MODULE_5___default()(xml_en))]);
  res.send(200);
};

/* harmony default export */ __webpack_exports__["default"] = (googleFeed);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6qAo");


/***/ }),

/***/ "JBIC":
/***/ (function(module, exports) {

module.exports = require("xml");

/***/ }),

/***/ "RgCs":
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ }),

/***/ "XF79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const url = "https://online.moysklad.ru/api/";
const token = "42e8af8f6295cc74f0f257cbe2bffd6ceaf06dab";

const getMoySkladData = async (query) => {
  const data = await fetch(`${url}${query}`, {
    headers: {
      Authorization: token
    }
  });
  return await data.json();
};

/* harmony default export */ __webpack_exports__["a"] = (getMoySkladData);

/***/ }),

/***/ "kEpX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCockpitCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCockpitCollections; });
const url = "https://content.blind-blind.com/";
const token = "6b79107e7972a67976b08ef5c082c0";
const getCockpitCollection = async (collectionName, params) => {
  const requestResult = await fetch(url + `api/collections/get/${collectionName}?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const cockpitData = await requestResult.json();
  return cockpitData;
};
const getCockpitCollections = async collections => {
  const collectionPromises = collections.map(collection => getCockpitCollection(collection));
  return await Promise.all(collectionPromises);
};

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });