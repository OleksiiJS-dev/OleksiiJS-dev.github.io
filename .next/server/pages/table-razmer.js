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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hb9E");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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

/***/ "hb9E":
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

// CONCATENATED MODULE: ./src/constants/sizesTable.ts
const SIZES_TABLE = {
  title: {
    ru: 'Таблица размеров',
    en: 'Sizes table'
  },
  head: {
    ru: ['Размер', 'Объем груди', 'Объем талии', 'Объем бедер'],
    en: ['Size', 'Breast volume', 'Waist', 'Thighs']
  },
  rows: [['XXS', '82-86', '56-60', '82-86'], ['XS', '86-89', '60-66', '86-92'], ['S', '89-92', '68-72', '92-96'], ['M', '92-96', '72-76', '96-99'], ['L', '96-102', '77-82', '99-106'], ['XL', '102-106', '82-86', '106-109']],
  additional: {
    ru: '*В размерах XL и выше + 50% к стоимости',
    en: '*In sizes XL and above + 50% to the cost'
  }
};
// CONCATENATED MODULE: ./src/components/SizesTable/SizesTable.tsx





const SizesTable = () => {
  const {
    locale
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "sizes-table narrow-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "sizes-table__title",
      children: SIZES_TABLE.title[locale]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
      className: "sizes-table__table",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
          children: SIZES_TABLE.head[locale].map(el => /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: el
          }, el))
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
        children: SIZES_TABLE.rows.map(row => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
          children: row.map((el, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: el
          }, idx))
        }, row[0]))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "sizes-table__additional-info",
      children: SIZES_TABLE.additional[locale]
    })]
  });
};

/* harmony default export */ var SizesTable_SizesTable = (SizesTable);
// EXTERNAL MODULE: ./src/components/Seo/Seo.tsx
var Seo = __webpack_require__("S93I");

// EXTERNAL MODULE: ./src/constants/seoItems.ts
var seoItems = __webpack_require__("yPvB");

// CONCATENATED MODULE: ./pages/table-razmer.tsx






const SizesTablePage = ({
  locale
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "voucher-page",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Seo["a" /* default */], {
      title: seoItems["b" /* SEO_ITEMS */][locale].sizeTablePage.title,
      description: seoItems["b" /* SEO_ITEMS */][locale].sizeTablePage.description,
      breadcrumbs: [{
        title: seoItems["b" /* SEO_ITEMS */][locale].sizeTablePage.breadcrumbName,
        link: seoItems["b" /* SEO_ITEMS */][locale].sizeTablePage.link
      }],
      lang: locale,
      path: "https://blind-blind.com" + seoItems["b" /* SEO_ITEMS */][locale].sizeTablePage.link
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SizesTable_SizesTable, {})]
  });
};

const getServerSideProps = async ({
  locale
}) => ({
  props: {
    locale
  }
});
/* harmony default export */ var table_razmer = __webpack_exports__["default"] = (SizesTablePage);

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