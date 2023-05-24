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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+8zO":
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oMfh");


/***/ }),

/***/ "AIOg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_utils_getCockpitData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kEpX");


const getPromocode = async promocode => {
  const cockpitPromocodes = await Object(_src_utils_getCockpitData__WEBPACK_IMPORTED_MODULE_0__[/* getCockpitCollection */ "a"])('Promocodes', 'filter[code]=' + promocode);
  return cockpitPromocodes.entries.map(({
    code,
    discount,
    inPercent
  }) => {
    return {
      code,
      discount,
      inPercent
    };
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getPromocode);

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "G4ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FORMIK; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup_lib_Condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("S2Gm");
/* harmony import */ var yup_lib_Condition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup_lib_Condition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dxDv");



const FORM = {
  ru: {
    cm: 'см',
    tooSmall: 'cлишком малое значение',
    tooLarge: 'cлишком большое значение',
    required: 'обязательное поле',
    wrongInput: 'неверное значение',
    lettersRequired: 'некорректный ввод',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Электронная почта',
    phone: '000000000',
    country: 'Страна',
    city: 'Город',
    street: 'Улица',
    house: 'Дом',
    flat: 'Квартира',
    paymentMethod: 'Способ оплаты',
    paymentOnline: 'Оплата онлайн',
    paymentManager: 'Оплата через менеджера',
    novaPoshta: '"Нова Пошта"(по Украине)',
    ukrPoshta: '"Укр Пошта"(за границу)',
    courierNovaPoshta: 'Курьером "Нова Пошта"',
    delivery: 'Доставка',
    receiverName: 'Имя получателя',
    receiverEmail: 'Почта получателя',
    yourName: 'Ваше имя',
    yourEmail: 'Ваша почта',
    giftMessage: 'Сообщение (необязательно)',
    giftAmount: 'Введите любую сумму сертификата',
    warehouse: 'Отделение',
    dob: 'Дата рождения',
    russia: 'Извините, мы не доставляем наши товары в Россию'
  },
  en: {
    cm: 'cm',
    tooSmall: 'too small value',
    tooLarge: 'too large value',
    required: 'required',
    wrongInput: 'wrong input',
    lettersRequired: 'letters required',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: '000000000',
    country: 'Country',
    city: 'City',
    street: 'Street',
    house: 'House',
    flat: 'Flat',
    paymentMethod: 'Payment method',
    paymentOnline: 'Online payment',
    delivery: 'Delivery',
    paymentManager: 'Payment with manager',
    novaPoshta: '"Nova Poshta"(in Ukraine)',
    ukrPoshta: '"Urk Poshta"(abroad)',
    courierNovaPoshta: 'Courier "Nova Poshta"',
    receiverName: 'Receiver name',
    receiverEmail: 'Receiver email',
    yourName: 'Your name',
    yourEmail: 'Your email',
    giftMessage: 'Message (optional)',
    giftAmount: 'Enter any amount of the certificate',
    warehouse: 'Warehouse',
    dob: 'Date of birth',
    russia: "Sorry, we don't deliver our goods to Russia"
  }
};
const FORMIK = {
  shippingDiscount: {
    values: {
      code: ''
    }
  },
  shippingMain: {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      paymentMethod: '',
      deliveryMethod: '',
      warehouse: '',
      street: '',
      house: '',
      flat: '',
      checkbox: false
    },
    validationSchema: locale => yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
      firstName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[ a-zA-Zа-яА-Я]+$/, FORM[locale].lettersRequired).required(FORM[locale].required),
      lastName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[ a-zA-Zа-яА-Я]+$/, FORM[locale].lettersRequired).required(FORM[locale].required),
      email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email(FORM[locale].wrongInput).required(FORM[locale].required),
      phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required).min(11, FORM[locale].wrongInput).max(15, FORM[locale].wrongInput).typeError(FORM[locale].wrongInput),
      country: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^(?!russia|россия|рф|rf|российская\sфедерация).*$/giu, FORM[locale].russia).required(FORM[locale].required),
      city: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required),
      paymentMethod: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required),
      deliveryMethod: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required),
      warehouse: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('deliveryMethod', {
        is: FORM[locale].novaPoshta,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required)
      }),
      street: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('deliveryMethod', {
        is: FORM[locale].courierNovaPoshta,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required)
      }),
      house: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('deliveryMethod', {
        is: FORM[locale].courierNovaPoshta,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required)
      }),
      flat: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
    }),
    types: {
      firstName: 'text',
      lastName: 'text',
      email: 'text',
      phone: 'phone',
      country: 'text',
      city: 'text',
      paymentMethod: 'select',
      deliveryMethod: 'delivery',
      warehouse: 'warehouse',
      street: 'text',
      house: 'text',
      flat: 'text',
      checkbox: 'checkbox'
    },
    selectOptions: locale => ({
      paymentMethod: [FORM[locale].paymentOnline, FORM[locale].paymentManager]
    }),
    placeholders: locale => ({
      firstName: FORM[locale].firstName,
      lastName: FORM[locale].lastName,
      email: FORM[locale].email,
      phone: FORM[locale].phone,
      country: FORM[locale].country,
      city: FORM[locale].city,
      street: FORM[locale].street,
      house: FORM[locale].house,
      flat: FORM[locale].flat,
      paymentMethod: FORM[locale].paymentMethod,
      deliveryMethod: FORM[locale].delivery,
      warehouse: FORM[locale].warehouse
    })
  },
  goodsExclusive: {
    values: {
      growth: '',
      bust: '',
      waist: '',
      hips: ''
    },
    validationSchema: locale => yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
      growth: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(100, FORM[locale].tooSmall).max(300, FORM[locale].tooLarge).required(FORM[locale].required).typeError(FORM[locale].wrongInput),
      bust: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(20, FORM[locale].tooSmall).max(200, FORM[locale].tooLarge).required(FORM[locale].required).typeError(FORM[locale].wrongInput),
      waist: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(20, FORM[locale].tooSmall).max(200, FORM[locale].tooLarge).required(FORM[locale].required).typeError(FORM[locale].wrongInput),
      hips: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(20, FORM[locale].tooSmall).max(200, FORM[locale].tooLarge).required(FORM[locale].required).typeError(FORM[locale].wrongInput)
    }),
    types: {
      growth: 'text',
      bust: 'text',
      waist: 'text',
      hips: 'text'
    },
    suffixes: locale => ({
      growth: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].cm,
      bust: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].cm,
      waist: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].cm,
      hips: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].cm
    }),
    placeholders: locale => ({
      growth: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].growth,
      bust: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].bustVolume,
      waist: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].waistVolume,
      hips: _languages__WEBPACK_IMPORTED_MODULE_2__[/* TRANSLATE */ "b"][locale].hipsVolume
    })
  },
  footerForm: {
    values: {
      phone: ''
    },
    validationSchema: locale => yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
      phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(11, FORM[locale].wrongInput).max(15, FORM[locale].wrongInput).typeError(FORM[locale].wrongInput)
    }),
    types: {
      phone: 'phone'
    },
    placeholders: locale => ({
      phone: FORM[locale].phone
    })
  },
  modalStartForm: {
    values: {
      firstName: '',
      email: '',
      phone: '',
      dob: ''
    },
    validationSchema: locale => yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
      firstName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[ a-zA-Zа-яА-Я]+$/, FORM[locale].lettersRequired).typeError(FORM[locale].wrongInput).required(FORM[locale].required),
      email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required(FORM[locale].required),
      phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(FORM[locale].required).min(11, FORM[locale].wrongInput).max(15, FORM[locale].wrongInput).typeError(FORM[locale].wrongInput),
      dob: yup__WEBPACK_IMPORTED_MODULE_0__["date"]().required(FORM[locale].required).test('dob', FORM[locale].wrongInput, value => {
        return value ? new Date().getFullYear() - (value === null || value === void 0 ? void 0 : value.getFullYear()) >= 10 : false;
      })
    }),
    types: {
      firstName: 'text',
      email: 'text',
      phone: 'phone',
      dob: 'date'
    },
    placeholders: locale => ({
      firstName: FORM[locale].firstName,
      email: FORM[locale].email,
      phone: FORM[locale].phone,
      dob: FORM[locale].dob
    })
  },
  voucher: {
    values: {
      receiverName: '',
      receiverEmail: '',
      yourName: '',
      yourEmail: '',
      message: '',
      price: ''
    },
    validationSchema: locale => yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
      receiverName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[ a-zA-Zа-яА-Я]+$/, FORM[locale].lettersRequired).typeError(FORM[locale].wrongInput).required(FORM[locale].required),
      receiverEmail: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required(FORM[locale].required),
      yourName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[ a-zA-Zа-яА-Я]+$/, FORM[locale].lettersRequired).typeError(FORM[locale].wrongInput).required(FORM[locale].required),
      yourEmail: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email().required(FORM[locale].required),
      price: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().min(1, FORM[locale].tooSmall).required(FORM[locale].required).typeError(FORM[locale].wrongInput)
    }),
    types: {
      receiverName: 'text',
      receiverEmail: 'text',
      yourName: 'text',
      yourEmail: 'text',
      message: 'textArea',
      price: 'text'
    },
    suffixes: {
      price: 'UAH'
    },
    placeholders: locale => ({
      receiverName: FORM[locale].receiverName,
      receiverEmail: FORM[locale].receiverEmail,
      yourName: FORM[locale].yourName,
      yourEmail: FORM[locale].yourEmail,
      message: FORM[locale].giftMessage,
      price: FORM[locale].giftAmount
    })
  }
};

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "S2Gm":
/***/ (function(module, exports) {

module.exports = require("yup/lib/Condition");

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

/***/ "oMfh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PJMN");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var telegraf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wu+Y");
/* harmony import */ var telegraf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(telegraf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_constants_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("G4ea");
/* harmony import */ var _backendHelpers_sendGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("urNA");
/* harmony import */ var _backendHelpers_getPromocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AIOg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bot = new telegraf__WEBPACK_IMPORTED_MODULE_1__["Telegram"]("1770735409:AAGDi3HopBgYA8oX-kMy5tNDfXKf_7YAKeE");

const getGoodsMessage = ({
  goods
}) => goods.reduce((acc, {
  name,
  size
}) => acc + `Название: ${name}, Размер: ${size}; | `, '');

const sendEmail = async (name, surname, email, country, city, phone, paymentType, deliveryType, deliveryCost, warehouse, street, house, flat, cart, totalSum, promoCode, cookies, ip) => {
  const [promoCodeValues] = await Object(_backendHelpers_getPromocode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(promoCode);
  const emailBody = `
    Товары: ${getGoodsMessage(cart)} \n
    Сумма: ${totalSum} \n
    Промокод: ${promoCode || 'none'} \n
    Скидка: ${promoCodeValues !== null && promoCodeValues !== void 0 && promoCodeValues.discount ? (promoCodeValues === null || promoCodeValues === void 0 ? void 0 : promoCodeValues.discount) + '%' : 'none'} \n
    Тип оплаты: ${paymentType} \n
    Cтрана доставки: ${country} \n
    Город доставки: ${city} \n
    Тип доставки: ${deliveryType} \n
    Стоимость Доставки: ${deliveryCost} \n
    Отделение НП: ${warehouse || 'none'} \n
    Улица: ${street || 'none'} \n
    Дом: ${house || 'none'} \n
    Квартира: ${flat || 'none'} \n
    Имя: ${name} \n
    Фамилия: ${surname} \n
    Телефон: ${phone.replace('+', '')} \n
    Емеил: ${email} \n
    Utm_data: ${cookies.utm_data || 'none'} \n
    Utm_source: ${cookies.utm_source || 'none'} \n
    Utm_medium: ${cookies.utm_medium || 'none'} \n
    Utm_campaign: ${cookies.utm_campaign || 'none'} \n
    Utm_term: ${cookies.utm_term || 'none'} \n
    Utm_content: ${cookies.utm_content || 'none'} \n
    User_ip: ${ip || 'none'} \n
    Location: ${cookies.user_geo || 'none'} \n
    REF URL: ${cookies.ref_url || 'organic'} \n
    GA: ${cookies._ga || 'none'} \n
  `;
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: 'Заказ',
    text: emailBody
  };
  _backendHelpers_sendGrid__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].send(msg).then(console.log, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  });
};

const sendToBot = async (users, name, surname, email, country, city, phone, paymentType, deliveryType, warehouse, street, house, flat, locale, currency, cart, totalSum, deliveryCost) => {
  try {
    const certeficatesMessage = cart.certeficatePrice.reduce((acc, price, index) => acc + `Цена: ${price}${currency}, Почта получателя: ${cart.receiverEmail[index]}, Имя получателя: ${cart.receiverName[index]}, Сообщение: ${cart.message[index]} | `, '');
    const goodsMessage = getGoodsMessage(cart);
    const message = `Имя: ${name}\n` + `Фамилия: ${surname}\n` + `Почта: ${email}\n` + `Cтрана: ${country}\n` + `Город: ${city}\n` + `Телефон: ${phone}\n` + `Тип оплаты: ${paymentType}\n` + `Тип Доставки: ${deliveryType}\n` + `Стоимость Доставки: ${deliveryCost}\n` + `Отделение НП: ${warehouse}\n` + `Улица: ${street}\n` + `Дом: ${house}\n` + `Квартира: ${flat}\n` + `Язык: ${locale}\n` + `Cумма: ${totalSum}${currency}\n` + `Сертификаты: ${cart.certeficatePrice.length ? certeficatesMessage : ''}\n` + `Товары: ${cart.goods.length ? goodsMessage : ''}\n`;
    const messages = users.map(({
      chatId
    }) => bot.sendMessage(+chatId, message));
    await Promise.allSettled(messages).catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

const checkout = async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    const {
      name,
      surname,
      email,
      country,
      city,
      phone,
      paymentType,
      deliveryMethod,
      locale,
      currency,
      items = [],
      totalSum,
      coupon,
      warehouse,
      street,
      house,
      flat,
      deliveryCost
    } = req.body;
    const check = locale && name && email && surname && country && city && phone && paymentType && deliveryMethod && items.length && currency && deliveryCost !== undefined && totalSum;
    if (!check) return res.status(400).send({
      message: 'Bad Request'
    });
    const url = `${"https://content.blind-blind.com/"}api/collections/save/checkouts`;
    const sendOrderUsersUrl = `${"https://content.blind-blind.com/"}api/collections/get/BotUsers`;
    const usersResponse = await fetch(sendOrderUsersUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"6b79107e7972a67976b08ef5c082c0"}`
      }
    });
    const {
      entries
    } = await usersResponse.json();
    const cart = items.reduce((acc, item) => {
      var _item$id;

      if ((_item$id = item.id) !== null && _item$id !== void 0 && _item$id.startsWith('voucher')) {
        return _objectSpread(_objectSpread({}, acc), {}, {
          certeficatePrice: [...acc.certeficatePrice, item.price],
          receiverEmail: [...acc.receiverEmail, item.receiverEmail],
          receiverName: [...acc.receiverName, item.receiverName],
          message: [...acc.message, item.message]
        });
      }

      return _objectSpread(_objectSpread({}, acc), {}, {
        items: [...acc.items, {
          _id: item.id,
          link: 'Goods'
        }],
        sizes: [...acc.sizes, item.details],
        goods: [...acc.goods, {
          name: item.title,
          size: item.details
        }]
      });
    }, {
      items: [],
      sizes: [],
      certeficatePrice: [],
      receiverEmail: [],
      receiverName: [],
      goods: [],
      message: []
    });
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"6b79107e7972a67976b08ef5c082c0"}`
      },
      body: JSON.stringify({
        data: _objectSpread(_objectSpread({}, req.body), {}, {
          items: cart.items,
          sizes: cart.sizes,
          certeficatePrice: cart.certeficatePrice,
          receiverEmail: cart.receiverEmail,
          receiverName: cart.receiverName,
          message: cart.message,
          isPaid: false
        })
      })
    });
    await sendToBot(entries, name, surname, email, country, city, phone, paymentType, deliveryMethod, warehouse, street, house, flat, locale, currency, cart, totalSum, deliveryCost);
    await sendEmail(name, surname, email, country, city, phone, paymentType, deliveryMethod, deliveryCost, warehouse, street, house, flat, cart, totalSum, coupon, req.cookies, ip);
    const {
      _id
    } = await response.json();

    if (paymentType === _src_constants_form__WEBPACK_IMPORTED_MODULE_2__[/* FORM */ "a"][locale].paymentOnline) {
      const data = {
        version: 3,
        public_key: "i68226638403",
        action: 'pay',
        amount: totalSum,
        currency: currency,
        order_id: _id,
        description: 'Покупка в магазине BLIND-BLIND',
        result_url: `${"https://blind-blind.com/"}thank-you`,
        server_url: `${"https://blind-blind.com/"}api/confirmPayment`
      };
      const encodedData = Buffer.from(JSON.stringify(data)).toString('base64');
      const signature = Object(crypto__WEBPACK_IMPORTED_MODULE_0__["createHash"])('sha1').update(`${process.env.LIQPAY_PRIVATE_KEY}${encodedData}${process.env.LIQPAY_PRIVATE_KEY}`).digest('base64');
      return res.status(200).send({
        data: encodedData,
        signature
      });
    }

    return res.status(200).send({
      message: 'ok'
    });
  } catch (error) {
    console.log(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (checkout);

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