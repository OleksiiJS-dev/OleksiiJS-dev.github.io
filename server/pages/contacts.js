module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QIQ9");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "QIQ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/constants/languages.ts
var languages = __webpack_require__("dxDv");

// CONCATENATED MODULE: ./src/components/Contacts/Contacts.tsx






const Contacts = ({
  email,
  phone
}) => {
  const {
    locale
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: languages["b" /* TRANSLATE */][locale].contacts
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `mailto:${email}`,
      children: email
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `tel:${phone}`,
      children: phone
    })]
  });
};

/* harmony default export */ var Contacts_Contacts = (Contacts);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./src/components/Contacts/SalesPlaces.tsx




const SalesPlaces = ({
  places
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: "sales-places-container",
  children: places.map(({
    address,
    city,
    email,
    picture,
    phone
  }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "sales-place",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "sales-place-image",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        layout: "fill",
        objectFit: "cover",
        alt: address,
        loading: "eager",
        src: "https://content.blind-blind.com/" + picture.path
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: city
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `mailto:${email}`,
      children: email
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `tel:${phone}`,
      children: phone
    })]
  }, address))
});

/* harmony default export */ var Contacts_SalesPlaces = (SalesPlaces);
// EXTERNAL MODULE: ./src/components/Seo/Seo.tsx
var Seo = __webpack_require__("S93I");

// EXTERNAL MODULE: ./src/utils/getCockpitData.ts
var getCockpitData = __webpack_require__("kEpX");

// EXTERNAL MODULE: ./src/constants/seoItems.ts
var seoItems = __webpack_require__("yPvB");

// CONCATENATED MODULE: ./pages/contacts.tsx








const ContactsPage = ({
  contacts,
  salesPlaces,
  locale
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "contacts-page-container",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Seo["a" /* default */], {
    title: seoItems["b" /* SEO_ITEMS */][locale].contactsPage.title,
    description: seoItems["b" /* SEO_ITEMS */][locale].contactsPage.title,
    breadcrumbs: [{
      title: seoItems["b" /* SEO_ITEMS */][locale].contactsPage.breadcrumbName,
      link: seoItems["b" /* SEO_ITEMS */][locale].contactsPage.link
    }],
    lang: locale,
    path: "https://blind-blind.com" + seoItems["b" /* SEO_ITEMS */][locale].contactsPage.link
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contacts_Contacts, {
    email: contacts.email,
    phone: contacts.phone
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contacts_SalesPlaces, {
    places: salesPlaces
  })]
});

/* harmony default export */ var pages_contacts = __webpack_exports__["default"] = (ContactsPage);
const getServerSideProps = async ({
  locale,
  defaultLocale
}) => {
  const cockpitDataContacts = await Object(getCockpitData["a" /* getCockpitCollection */])('Contacts');
  const cockpitDataSalesPlaces = await Object(getCockpitData["a" /* getCockpitCollection */])('salesPlaces');
  const contacts = {
    email: cockpitDataContacts.entries[0].email,
    phone: cockpitDataContacts.entries[0].phone
  };
  const salesPlaces = cockpitDataSalesPlaces.entries.map(el => ({
    email: el.email,
    city: locale === defaultLocale ? el.city : el.city_en,
    address: locale === defaultLocale ? el.address : el.address_en,
    picture: el.picture,
    phone: el.phone
  }));
  return {
    props: {
      contacts,
      salesPlaces,
      locale
    }
  };
};

/***/ }),

/***/ "S93I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



const facebookAnalyticsId = "1526060404237881";
const googleTagManagerId = "UA-56684939-1";

const Seo = ({
  breadcrumbs,
  description,
  path,
  title,
  product
}) => {
  const shemaContext = 'http://schema.org';
  const schemaOrgJSONLD = [{
    '@context': shemaContext,
    '@type': 'Organization',
    address: 'Харьков, ул.Мироносицкая 67',
    url: 'blind-blind.com',
    name: 'Blind-blind',
    sameAs: ['https://www.facebook.com/blindfashion', 'https://vimeo.com/blindfashion', 'https://www.pinterest.com/blindfashion/_created/', 'https://www.instagram.com/blind_officials/'],
    telephone: '+380660431338'
  }, {
    '@context': shemaContext,
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map(({
      title: name,
      link
    }, idx) => ({
      '@type': 'ListItem',
      position: idx,
      item: {
        '@id': link,
        url: link,
        image: '',
        name
      }
    }))
  }];

  if (product) {
    schemaOrgJSONLD.push({
      '@context': shemaContext,
      '@type': 'Product',
      productID: product.id,
      name: product.name,
      description: description,
      url: 'https://example.org/facebook',
      image: 'https://example.org/facebook.jpg',
      brand: 'Blind',
      offers: [{
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'UAH',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock'
      }],
      additionalProperty: [{
        '@type': 'PropertyValue',
        propertyID: product.collection,
        value: product.collection
      }]
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "og:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      property: "og:url",
      content: path
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "canonical",
      href: path
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "facebook-domain-verify",
      content: "1al6a9ctqd0sz2aejcj7bxfq42qst0"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "facebook-domain-verification",
      content: "1al6a9ctqd0sz2aejcj7bxfq42qst0"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      dangerouslySetInnerHTML: {
        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${facebookAnalyticsId}');
fbq('track', 'PageView');`
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      dangerouslySetInnerHTML: {
        __html: `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2408677,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      dangerouslySetInnerHTML: {
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5XP658M')
        `
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("noscript", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        alt: "pixel",
        height: "1",
        width: "1",
        style: {
          display: 'none'
        },
        src: `https://www.facebook.com/tr?id=${facebookAnalyticsId}&ev=PageView&noscript=1`
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      dangerouslySetInnerHTML: {
        __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleTagManagerId}');`
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
      type: "application/ld+json",
      children: JSON.stringify(schemaOrgJSONLD)
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Seo);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
  enableBlurryPlaceholder: configEnableBlurryPlaceholder
} = {"deviceSizes":[1800],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = () => {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  const MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  const tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  const shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dxDv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATE; });
const LANGUAGES = {
  ru: {
    name: 'рус',
    path: ''
  },
  en: {
    name: 'eng',
    path: '/en'
  }
};
const TRANSLATE = {
  ru: {
    discountCode: 'Промокод',
    underOrder: 'Информация об изготовлении изделия под заказ',
    sizeUnderOrder: '(под заказ)',
    store: 'Магазин',
    aboutUs: 'О нас',
    cart: 'Корзина',
    search: 'Поиск',
    successOrder: 'Спасибо за заказ',
    failedOrder: 'Упс, что-то пошло не так',
    tailoring: 'Индивидульный пошив',
    growth: 'Рост',
    bustVolume: 'Объем груди',
    waistVolume: 'Объем талии',
    hipsVolume: 'Объем бедер',
    addToCart: 'В корзину',
    backToCollection: 'Назад к коллекции',
    cm: 'см',
    cartTitle: 'Ваша корзина',
    emptyCartTitle: 'пока еще пустая.',
    continueBrowsing: ['Продолжите поиск', 'здесь'],
    price: 'Цена',
    total: 'В сумме',
    remove: 'Убрать',
    goodsCaterories: 'Категории товаров',
    outOfStock: 'Нет в наличии',
    subTotal: 'К оплате',
    agreement: 'Согласиться',
    checkOut: 'Заказать',
    checkOutAlert: 'Вы должны согласиться с условиями, чтобы оформить заказ.',
    shipping: 'Доставка',
    continue: 'Продолжить',
    saveInfo: 'Сохранить эту информацию',
    returnToCart: 'Вернуться к корзине',
    showOrderSummary: 'Показать детали заказа',
    hideOrderSummary: 'Скрыть детали заказа',
    sizeTable: 'Таблица размеров',
    deliveryInfo: 'Информация о доставке',
    returnAndExchange: 'Возврат и обмен',
    contacts: 'Контакты',
    giftCertificates: 'Подарочные сертификаты',
    giftCertificateTitle: 'Подарочный сертификат',
    giftCertificateDescription: 'Этот подарочный сертификат будет отправлен получателю по E-Mail после оплаты заказа.',
    giftCertificateCartAbout: 'Сертификат на имя ',
    pressInformationPage: 'Информационная страница для прессы',
    requestCallBackTitle: 'Оставьте заявку и менеджер свяжется с Вами в ближайшее время',
    requestCallBack: 'Оставить',
    copyright: 'Copyright © Blind-Blind 2021 Все права защищены',
    privacyPolicy: 'Политика конфиденциальности',
    publicContract: 'Публичный договор',
    celebrities: 'Сelebrities',
    notFoundTitle: '404 Страница не найдена',
    notFoundDescription: 'Запрошенная вами страница не существует.',
    continueShopping: ['Нажите', 'здесь', 'чтобы продолжить покупки.'],
    thanksForOrderTitle: 'Спасибо за ваш заказ',
    goodsNotFound: ['Ваш поиск', 'не дал никаких результатов.'],
    modalWindowStartText: 'Подписывайтесь и получайте уникальные предложения',
    subscribe: 'Подписаться'
  },
  en: {
    discountCode: 'Promocode',
    underOrder: 'Information on the manufacture of a product to order',
    sizeUnderOrder: '(under the order)',
    store: 'Store',
    aboutUs: 'About',
    cart: 'Cart',
    search: 'Search',
    successOrder: 'Thank you for your order',
    failedOrder: 'Oops, something went wrong',
    tailoring: 'Individual tailoring',
    growth: 'Growth',
    bustVolume: 'Bust',
    waistVolume: 'Waist',
    hipsVolume: 'Hips',
    addToCart: 'Add to cart',
    backToCollection: 'Back to collection',
    cm: 'cm',
    cartTitle: 'Your shopping cart',
    emptyCartTitle: 'is currently empty.',
    continueBrowsing: ['Continue browsing', 'here'],
    price: 'Price',
    total: 'Total',
    remove: 'Remove',
    goodsCaterories: "Good's categories",
    subTotal: 'Subtotal',
    agreement: 'Agree',
    checkOut: 'Check out',
    outOfStock: 'Out of stock',
    checkOutAlert: 'You must agree with the terms and conditions of sales to check out.',
    shipping: 'Shipping',
    continue: 'Continue',
    saveInfo: 'Save this information',
    returnToCart: 'Return to cart',
    showOrderSummary: 'Show order summary',
    hideOrderSummary: 'Hide order summary',
    sizeTable: 'Size table',
    deliveryInfo: 'Delivery information',
    returnAndExchange: 'Return and exchange',
    contacts: 'Сontacts',
    giftCertificates: 'Gift certificates',
    giftCertificateTitle: 'Gift certificate',
    giftCertificateDescription: 'This gift certificate will be sent to the recipient by E-Mail after the order has been paid.',
    giftCertificateCartAbout: 'Certificate for ',
    pressInformationPage: 'Press information page',
    requestCallBackTitle: 'Leave a request and the manager will contact you shortly',
    requestCallBack: 'Request',
    copyright: 'Copyright © Blind-Blind 2021 All rights reserved',
    privacyPolicy: 'Privacy policy',
    publicContract: 'Public contract',
    celebrities: 'Сelebrities',
    notFoundTitle: '404 Page not found',
    notFoundDescription: 'The page you requested does not exist.',
    continueShopping: ['Click', 'here', 'to continue shopping.'],
    thanksForOrderTitle: 'Thank you for your order.',
    goodsNotFound: ['Your search for', 'did not yield any results.'],
    modalWindowStartText: 'Subscribe and receive unique offers',
    subscribe: 'Subscribe'
  }
};

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

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yPvB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEO_ITEMS; });
const DEFAULT_DESCRIPTION = {
  ru: 'Роскошные женские платья, дизайнерские женские пиджаки, красивые блузы, стильные женские брюки. Вся одежда Blind высокого качества.',
  en: "Luxurious women's dresses, designer women's blazers, beautiful blouses, stylish women's pants. All Blind clothes are of high quality."
};
const SEO_ITEMS = {
  ru: {
    blindStylePage: {
      title: 'Blind Style',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Blind Style',
      link: '/blind-style'
    },
    cartPage: {
      title: 'Корзина',
      description: 'Корзина',
      breadcrumbName: 'Корзина',
      link: '/cart'
    },
    celebritiesPage: {
      title: 'Сelebrities',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Сelebrities',
      link: '/celebrities'
    },
    checkoutPage: {
      title: 'Оформление заказа',
      description: 'Оформление заказа',
      breadcrumbName: 'Оформление заказа',
      link: '/checkout'
    },
    contactsPage: {
      title: 'Контакты',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Контакты',
      link: '/contacts'
    },
    indexPage: {
      title: 'Женская одежда BLIND fashion atelier',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Главная',
      link: '/'
    },
    salesPage: {
      title: 'Скидки',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Скидки',
      link: '/sales'
    },
    sizeTablePage: {
      title: 'Таблица размеров',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Таблица размеров',
      link: '/sizes-table'
    },
    voucherPage: {
      title: 'Подарочный сертификат',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Подарочный сертификат',
      link: '/voucher'
    }
  },
  en: {
    blindStylePage: {
      title: 'Blind Style',
      description: DEFAULT_DESCRIPTION.en,
      breadcrumbName: 'Blind Style',
      link: '/en/blind-style'
    },
    cartPage: {
      title: 'Cart',
      description: 'Cart',
      breadcrumbName: 'Cart',
      link: '/en/cart'
    },
    celebritiesPage: {
      title: 'Celebrities',
      description: DEFAULT_DESCRIPTION.en,
      breadcrumbName: 'Celebrities',
      link: '/en/celebrities'
    },
    checkoutPage: {
      title: 'Checkout',
      description: 'Checkout',
      breadcrumbName: 'Checkout',
      link: '/en/checkout'
    },
    contactsPage: {
      title: 'Contacts',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Contacts',
      link: '/en/contacts'
    },
    indexPage: {
      title: "Women's clothing BLIND fashion atelier",
      description: DEFAULT_DESCRIPTION.en,
      breadcrumbName: 'Main Page',
      link: '/en'
    },
    salesPage: {
      title: 'Stocks',
      description: DEFAULT_DESCRIPTION.en,
      breadcrumbName: 'Stocks',
      link: '/en/sales'
    },
    sizeTablePage: {
      title: 'Size table',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Size table',
      link: '/en/sizes-table'
    },
    voucherPage: {
      title: 'Gift certificate',
      description: DEFAULT_DESCRIPTION.ru,
      breadcrumbName: 'Gift certificate',
      link: '/en/voucher'
    }
  }
};

/***/ })

/******/ });