/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 48:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(666);
// EXTERNAL MODULE: ./src/script/component/home-item.js
var home_item = __webpack_require__(372);
;// CONCATENATED MODULE: ./src/script/component/home-list.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* eslint-disable import/extensions */

var HomeList = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HomeList, _HTMLElement);
  function HomeList() {
    _classCallCheck(this, HomeList);
    return _callSuper(this, HomeList, arguments);
  }
  _createClass(HomeList, [{
    key: "home",
    set: function set(home) {
      this._home = home;
      this.render();
    }
  }, {
    key: "skeleton",
    value: function skeleton() {
      var _this$createElement = this.createElement(),
        wrapper = _this$createElement.wrapper;
      wrapper.innerHTML = "\n      <div class=\"slide\">\n        <div class=\"content\">\n          <div class=\"title\">\n            <div class=\"skeleton skeleton-text\"></div>\n            <div class=\"skeleton skeleton-text\"></div>\n          </div>\n          <div class=\"skeleton skeleton-text\"></div>\n          <div class=\"skeleton skeleton-text\"></div>\n          <div class=\"skeleton skeleton-text\"></div>\n        </div>\n        <div class=\"image\">\n          <div class=\"skeleton\"></div>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "createElement",
    value: function createElement() {
      this.setAttribute('id', 'home');
      this.classList.add('section');
      var homeSlider = document.createElement('div');
      homeSlider.classList.add('home-slider');
      var wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      this.appendChild(homeSlider);
      homeSlider.appendChild(wrapper);
      return {
        wrapper: wrapper,
        homeSlider: homeSlider
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = '';
      var _this$createElement2 = this.createElement(),
        wrapper = _this$createElement2.wrapper,
        homeSlider = _this$createElement2.homeSlider;
      var dots = document.createElement('div');
      dots.classList.add('dots');
      this._home.forEach(function (item) {
        var itemElement = document.createElement('home-item');
        itemElement.item = item;
        var dot = document.createElement('a');
        dot.setAttribute('href', "#".concat(item.id));
        dots.appendChild(dot);
        wrapper.appendChild(itemElement);
      });
      homeSlider.appendChild(dots);
    }
  }]);
  return HomeList;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('home-list', HomeList);
// EXTERNAL MODULE: ./src/script/component/drink-item.js
var drink_item = __webpack_require__(275);
;// CONCATENATED MODULE: ./src/script/component/drink-list.js
function drink_list_typeof(o) { "@babel/helpers - typeof"; return drink_list_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, drink_list_typeof(o); }
function drink_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function drink_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, drink_list_toPropertyKey(descriptor.key), descriptor); } }
function drink_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) drink_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) drink_list_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function drink_list_toPropertyKey(t) { var i = drink_list_toPrimitive(t, "string"); return "symbol" == drink_list_typeof(i) ? i : String(i); }
function drink_list_toPrimitive(t, r) { if ("object" != drink_list_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != drink_list_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function drink_list_callSuper(t, o, e) { return o = drink_list_getPrototypeOf(o), drink_list_possibleConstructorReturn(t, drink_list_isNativeReflectConstruct() ? Reflect.construct(o, e || [], drink_list_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function drink_list_possibleConstructorReturn(self, call) { if (call && (drink_list_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return drink_list_assertThisInitialized(self); }
function drink_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function drink_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) drink_list_setPrototypeOf(subClass, superClass); }
function drink_list_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; drink_list_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !drink_list_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return drink_list_construct(Class, arguments, drink_list_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return drink_list_setPrototypeOf(Wrapper, Class); }; return drink_list_wrapNativeSuper(Class); }
function drink_list_construct(t, e, r) { if (drink_list_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && drink_list_setPrototypeOf(p, r.prototype), p; }
function drink_list_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (drink_list_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function drink_list_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function drink_list_setPrototypeOf(o, p) { drink_list_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return drink_list_setPrototypeOf(o, p); }
function drink_list_getPrototypeOf(o) { drink_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return drink_list_getPrototypeOf(o); }
/* eslint-disable import/extensions */

var DrinkList = /*#__PURE__*/function (_HTMLElement) {
  drink_list_inherits(DrinkList, _HTMLElement);
  function DrinkList() {
    drink_list_classCallCheck(this, DrinkList);
    return drink_list_callSuper(this, DrinkList, arguments);
  }
  drink_list_createClass(DrinkList, [{
    key: "drink",
    set: function set(drink) {
      this._drink = drink;
      this.render();
    }
  }, {
    key: "skeleton",
    value: function skeleton() {
      var boxContainer = this.createElement();
      for (var i = 0; i < 6; i += 1) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = "\n        <div class=\"skeleton\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n      ";
        boxContainer.appendChild(box);
      }
    }
  }, {
    key: "createElement",
    value: function createElement() {
      this.setAttribute('id', 'drink');
      this.classList.add('section');
      var subHeading = document.createElement('h3');
      subHeading.classList.add('sub-heading');
      var heading = document.createElement('h1');
      heading.classList.add('heading');
      var boxContainer = document.createElement('div');
      boxContainer.classList.add('box-container');
      subHeading.innerText = ' minuman kami ';
      heading.innerText = ' minuman tersegar ';
      this.appendChild(subHeading);
      this.appendChild(heading);
      this.appendChild(boxContainer);
      return boxContainer;
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = '';
      var boxContainer = this.createElement();
      this._drink.forEach(function (item) {
        var itemElement = document.createElement('drink-item');
        itemElement.item = item;
        boxContainer.appendChild(itemElement);
      });
    }
  }]);
  return DrinkList;
}( /*#__PURE__*/drink_list_wrapNativeSuper(HTMLElement));
customElements.define('drink-list', DrinkList);
// EXTERNAL MODULE: ./src/script/component/about-section.js
var about_section = __webpack_require__(965);
// EXTERNAL MODULE: ./src/script/component/menu-item.js
var menu_item = __webpack_require__(869);
;// CONCATENATED MODULE: ./src/script/component/menu-list.js
function menu_list_typeof(o) { "@babel/helpers - typeof"; return menu_list_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, menu_list_typeof(o); }
function menu_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function menu_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, menu_list_toPropertyKey(descriptor.key), descriptor); } }
function menu_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_list_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function menu_list_toPropertyKey(t) { var i = menu_list_toPrimitive(t, "string"); return "symbol" == menu_list_typeof(i) ? i : String(i); }
function menu_list_toPrimitive(t, r) { if ("object" != menu_list_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != menu_list_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function menu_list_callSuper(t, o, e) { return o = menu_list_getPrototypeOf(o), menu_list_possibleConstructorReturn(t, menu_list_isNativeReflectConstruct() ? Reflect.construct(o, e || [], menu_list_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function menu_list_possibleConstructorReturn(self, call) { if (call && (menu_list_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return menu_list_assertThisInitialized(self); }
function menu_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function menu_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) menu_list_setPrototypeOf(subClass, superClass); }
function menu_list_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; menu_list_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !menu_list_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return menu_list_construct(Class, arguments, menu_list_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return menu_list_setPrototypeOf(Wrapper, Class); }; return menu_list_wrapNativeSuper(Class); }
function menu_list_construct(t, e, r) { if (menu_list_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && menu_list_setPrototypeOf(p, r.prototype), p; }
function menu_list_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (menu_list_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function menu_list_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function menu_list_setPrototypeOf(o, p) { menu_list_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return menu_list_setPrototypeOf(o, p); }
function menu_list_getPrototypeOf(o) { menu_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return menu_list_getPrototypeOf(o); }
/* eslint-disable import/extensions */

var MenuList = /*#__PURE__*/function (_HTMLElement) {
  menu_list_inherits(MenuList, _HTMLElement);
  function MenuList() {
    menu_list_classCallCheck(this, MenuList);
    return menu_list_callSuper(this, MenuList, arguments);
  }
  menu_list_createClass(MenuList, [{
    key: "menu",
    set: function set(menu) {
      this._menu = menu;
      this.render();
    }
  }, {
    key: "skeleton",
    value: function skeleton() {
      var boxContainer = this.createElement();
      for (var i = 0; i < 6; i += 1) {
        var box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = "\n        <div class=\"skeleton\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n        <div class=\"skeleton skeleton-text\"></div>\n      ";
        boxContainer.appendChild(box);
      }
    }
  }, {
    key: "createElement",
    value: function createElement() {
      this.setAttribute('id', 'menu');
      this.classList.add('section');
      var subHeading = document.createElement('h3');
      subHeading.classList.add('sub-heading');
      var heading = document.createElement('h1');
      heading.classList.add('heading');
      var boxContainer = document.createElement('div');
      boxContainer.classList.add('box-container');
      subHeading.innerText = ' menu ';
      heading.innerText = ' menu spesial ';
      this.appendChild(subHeading);
      this.appendChild(heading);
      this.appendChild(boxContainer);
      return boxContainer;
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = '';
      var boxContainer = this.createElement();
      this._menu.forEach(function (item) {
        var itemElement = document.createElement('menu-item');
        itemElement.item = item;
        boxContainer.appendChild(itemElement);
      });
    }
  }]);
  return MenuList;
}( /*#__PURE__*/menu_list_wrapNativeSuper(HTMLElement));
customElements.define('menu-list', MenuList);
// EXTERNAL MODULE: ./src/data-source.js
var data_source = __webpack_require__(645);
;// CONCATENATED MODULE: ./src/script/view/searchbar.js
var searchBar = function searchBar() {
  var menu = document.querySelector('#menu-bars');
  var navbar = document.querySelector('.navbar');
  var searchIcon = document.querySelector('#search-icon');
  var searchForm = document.querySelector('#search-form');
  var searchClose = document.querySelector('#close');
  var searchKeyword = document.querySelector('#search-form #search-keyword');
  var inputSearch = document.querySelector('#search-form input');
  menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
  searchIcon.addEventListener('click', function () {
    searchForm.classList.toggle('active');
    searchKeyword.classList.toggle('active');
    inputSearch.classList.toggle('active');
  });
  searchClose.addEventListener('click', function () {
    searchForm.classList.remove('active');
    searchKeyword.classList.remove('active');
    inputSearch.classList.remove('active');
  });
};
/* harmony default export */ const searchbar = (searchBar);
;// CONCATENATED MODULE: ./src/script/view/review.js
/* eslint-disable camelcase */

var reviewSkeleton = function reviewSkeleton() {
  var wrapper = document.querySelector('.review .wrapper');
  for (var i = 0; i < 4; i += 1) {
    var slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = "\n      <div class=\"user\">\n        <div class=\"skeleton\"></div>\n        <div class=\"user-info\">\n          <div class=\"skeleton skeleton-text\"></div>\n          <div class=\"skeleton skeleton-text\"></div>\n        </div>\n      </div>\n      <div class=\"skeleton skeleton-text\"></div> \n      <div class=\"skeleton skeleton-text\"></div> \n      <div class=\"skeleton skeleton-text\"></div> \n      <div class=\"skeleton skeleton-text\"></div> \n      <div class=\"skeleton skeleton-text\"></div> \n      <div class=\"skeleton skeleton-text\"></div> \n    ";
    wrapper.appendChild(slide);
  }
};
var renderReview = function renderReview(items) {
  var wrapper = document.querySelector('.review .wrapper');
  wrapper.innerHTML = '';
  items.forEach(function (item) {
    var slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = "\n      <div class=\"user\">\n        <img src=\"".concat(item.img_url, "\" alt=\"\" />\n        <div class=\"user-info\">\n          <h3>").concat(item.name, "</h3>\n          <div class=\"stars\">\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star-half-alt\"></i>\n          </div>\n        </div>\n      </div>\n      <p>").concat(item.review_text, "</p>\n    ");
    wrapper.appendChild(slide);
  });
};
var renderSendReview = function renderSendReview(name, review_text, imgUrl) {
  var wrapper = document.querySelector('.review .wrapper');
  var slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = "\n      <div class=\"user\">\n        <img src=\"".concat(imgUrl, "\" alt=\"\" />\n        <div class=\"user-info\">\n          <h3>").concat(name, "</h3>\n          <div class=\"stars\">\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star-half-alt\"></i>\n          </div>\n        </div>\n      </div>\n      <p>").concat(review_text, "</p>\n    ");
  wrapper.appendChild(slide);
};

;// CONCATENATED MODULE: ./src/script/view/reviewDialog.js
function reviewDialog_typeof(o) { "@babel/helpers - typeof"; return reviewDialog_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, reviewDialog_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == reviewDialog_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(reviewDialog_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var reviewDialog = function reviewDialog() {
  var openBtn = document.getElementById('open-review-dialog');
  var myDialog = document.querySelector('#review-dialog dialog');
  var closeButtons = document.querySelectorAll('.close-btn');
  var senButton = document.querySelector('#review-dialog .buttons .btn');
  var inputName = document.querySelector('#review-dialog .input input');
  var inputReview = document.querySelector('#review-dialog .input textarea');
  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    myDialog.showModal();
  });
  senButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var name, input, imageCode, imgUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          name = inputName.value;
          input = inputReview.value;
          imageCode = Math.floor(Math.random() * 7) + 1;
          imgUrl = "https://raw.githubusercontent.com/RyanBagusB/ryan-food-api/main/images/profile/".concat(imageCode, ".png");
          _context.prev = 4;
          _context.next = 7;
          return data_source/* default */.Z.postReview(name, input, imgUrl);
        case 7:
          renderSendReview(name, input, imgUrl);
          alert('Review telah terkirim');
          myDialog.close();
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          alert('Review gagal dikirim');
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 12]]);
  })));
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
      myDialog.close();
    });
  });
};
/* harmony default export */ const view_reviewDialog = (reviewDialog);
;// CONCATENATED MODULE: ./src/script/view/onScroll.js
var onScroll = function onScroll() {
  var menu = document.querySelector('#menu-bars');
  var navbar = document.querySelector('.navbar');
  var section = document.querySelectorAll('.section');
  var navLinks = document.querySelectorAll('header .navbar a');
  window.onscroll = function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(function (sec) {
      var top = window.scrollY;
      var height = sec.offsetHeight;
      var offset = sec.offsetTop - 150;
      var id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(function (links) {
          links.classList.remove('active');
          document.querySelector("header .navbar a[href*=".concat(id, "]")).classList.add('active');
        });
      }
    });
  };
};
/* harmony default export */ const view_onScroll = (onScroll);
;// CONCATENATED MODULE: ./src/script/view/reviewSlider.js
var reviewSlide = function reviewSlide() {
  var reviewSlider = document.querySelector('.review .review-slider .wrapper');
  var arrowIcons = document.querySelectorAll('.review .review-slider i.fa-solid');
  var isDragStart = false;
  var isDragging = false;
  var prevPageX;
  var prevScrollLeft;
  var positionDiff;
  var showHideIcons = function showHideIcons() {
    var scrollWidth = reviewSlider.scrollWidth - reviewSlider.clientWidth;
    arrowIcons[0].style.display = reviewSlider.scrollLeft === 0 ? 'none' : 'block';
    arrowIcons[1].style.display = reviewSlider.scrollLeft === scrollWidth ? 'none' : 'block';
  };
  arrowIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      var firstImgWidth = reviewSlider.querySelector('.review .slide').clientWidth + 16;
      reviewSlider.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth;
      setTimeout(showHideIcons, 60);
    });
  });
  var autoSlide = function autoSlide() {
    if (reviewSlider.scrollLeft - (reviewSlider.scrollWidth - reviewSlider.clientWidth) > -1 || reviewSlider.scrollLeft <= 0) {
      return;
    }
    positionDiff = Math.abs(positionDiff);
    var firstImgWidth = reviewSlider.querySelector('.review .slide').clientWidth + 16;
    var valDifference = firstImgWidth - positionDiff;
    if (reviewSlider.scrollLeft > prevScrollLeft) {
      reviewSlider.scrollLeft += positionDiff > firstImgWidth / 4 ? valDifference : -positionDiff;
    } else {
      reviewSlider.scrollLeft -= positionDiff > firstImgWidth / 4 ? valDifference : -positionDiff;
    }
  };
  var dragStart = function dragStart(e) {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = reviewSlider.scrollLeft;
  };
  var dragging = function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    reviewSlider.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    reviewSlider.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };
  var dragStop = function dragStop() {
    isDragStart = false;
    reviewSlider.classList.remove('dragging');
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };
  reviewSlider.addEventListener('mousedown', dragStart);
  reviewSlider.addEventListener('touchstart', dragStart);
  document.addEventListener('mousemove', dragging);
  reviewSlider.addEventListener('touchmove', dragging);
  document.addEventListener('mouseup', dragStop);
  reviewSlider.addEventListener('touchend', dragStop);
};
/* harmony default export */ const reviewSlider = (reviewSlide);
;// CONCATENATED MODULE: ./src/script/view/searchHandler.js
function searchHandler_typeof(o) { "@babel/helpers - typeof"; return searchHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, searchHandler_typeof(o); }
function searchHandler_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ searchHandler_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == searchHandler_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(searchHandler_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function searchHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function searchHandler_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { searchHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { searchHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* eslint-disable import/extensions */

var createResultElement = function createResultElement(searchResults) {
  var searchKeyword = document.querySelector('#search-form #search-keyword');
  var searchForm = document.querySelector('#search-form');
  var inputSearch = document.querySelector('#search-form input');
  searchKeyword.innerHTML = '';
  searchResults.forEach(function (searchResult) {
    var result = document.createElement('div');
    result.classList.add('search-result');
    result.innerText = searchResult.title;
    searchKeyword.appendChild(result);
    result.addEventListener('click', function () {
      setTimeout(function () {
        window.location.href = "#".concat(searchResult.id);
      }, 100);
      searchForm.classList.remove('active');
      searchKeyword.classList.remove('active');
      inputSearch.classList.remove('active');
      inputSearch.value = '';
      searchKeyword.innerHTML = '';
    });
  });
};
var searchHandler = /*#__PURE__*/function () {
  var _ref = searchHandler_asyncToGenerator( /*#__PURE__*/searchHandler_regeneratorRuntime().mark(function _callee2() {
    var inputSearch;
    return searchHandler_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          inputSearch = document.querySelector('#search-form input');
          inputSearch.addEventListener('input', /*#__PURE__*/function () {
            var _ref2 = searchHandler_asyncToGenerator( /*#__PURE__*/searchHandler_regeneratorRuntime().mark(function _callee(e) {
              var searchResults;
              return searchHandler_regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    _context.next = 3;
                    return data_source/* default */.Z.search(inputSearch.value);
                  case 3:
                    searchResults = _context.sent;
                    createResultElement(searchResults);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function searchHandler() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const view_searchHandler = (searchHandler);
;// CONCATENATED MODULE: ./src/script/view/cartbar.js
var cartBar = function cartBar() {
  var cartIcon = document.querySelector('#cart-icon');
  var cartForm = document.querySelector('#cart-form');
  var cartClose = document.querySelector('#cart-close');
  cartIcon.addEventListener('click', function () {
    cartForm.classList.toggle('active');
  });
  cartClose.addEventListener('click', function () {
    cartForm.classList.remove('active');
  });
};
/* harmony default export */ const cartbar = (cartBar);
;// CONCATENATED MODULE: ./src/script/view/main.js
function main_typeof(o) { "@babel/helpers - typeof"; return main_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, main_typeof(o); }
function main_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ main_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == main_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(main_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function main_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* eslint-disable import/extensions */








var main = /*#__PURE__*/function () {
  var _ref = main_asyncToGenerator( /*#__PURE__*/main_regeneratorRuntime().mark(function _callee() {
    var totalPrice, homeMenu, menuList, aboutSection, drinkList, totalPriceElement, updateTotalPrice, homeResult, menuResult, drinkResult, errorFetch, homes, menus, drinks, reviews, addToCartButtons, cart;
    return main_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          updateTotalPrice = function _updateTotalPrice() {
            totalPriceElement.textContent = totalPrice.toLocaleString();
          };
          totalPrice = 0;
          homeMenu = document.querySelector('home-list');
          menuList = document.querySelector('menu-list');
          aboutSection = document.querySelector('about-section');
          drinkList = document.querySelector('drink-list');
          totalPriceElement = document.getElementById('total-price');
          homeResult = function homeResult(results) {
            homeMenu.home = results;
          };
          menuResult = function menuResult(results) {
            menuList.menu = results;
          };
          drinkResult = function drinkResult(results) {
            drinkList.drink = results;
          };
          errorFetch = function errorFetch() {
            alert('Nampaknya terjadi error, silahkan refresh halaman');
          };
          drinkList.skeleton();
          homeMenu.skeleton();
          aboutSection.render();
          menuList.skeleton();
          reviewSkeleton();
          _context.prev = 16;
          _context.next = 19;
          return data_source/* default */.Z.homes();
        case 19:
          homes = _context.sent;
          _context.next = 22;
          return data_source/* default */.Z.menus();
        case 22:
          menus = _context.sent;
          _context.next = 25;
          return data_source/* default */.Z.drinks();
        case 25:
          drinks = _context.sent;
          _context.next = 28;
          return data_source/* default */.Z.reviews();
        case 28:
          reviews = _context.sent;
          homeResult(homes);
          menuResult(menus);
          drinkResult(drinks);
          renderReview(reviews);
          addToCartButtons = document.querySelectorAll('.add-to-cart');
          cart = document.querySelector('.item-container');
          addToCartButtons.forEach(function (button) {
            button.addEventListener('click', function (e) {
              e.preventDefault();
              var item = this.parentElement.parentElement;
              var itemName = item.querySelector('h3').textContent;
              var priceString = item.querySelector('.price').textContent;
              var priceNumber = parseInt(priceString.replace(/\D/g, ''));
              var imageSrc = item.querySelector('.menu_image').src;
              var existingItem = cart.querySelector("[data-name=\"".concat(itemName, "\"]"));
              var cartIcon = document.getElementById('cart-icon');
              cartIcon.classList.add('pulse');

              // Hapus kelas pulse setelah 1 detik untuk menghentikan efek berkedip
              setTimeout(function () {
                cartIcon.classList.remove('pulse');
              }, 1000);
              if (existingItem) {
                var quantity = existingItem.querySelector('.quantity p');
                var count = parseInt(quantity.textContent);
                quantity.textContent = count + 1;
                totalPrice += priceNumber;
                updateTotalPrice();
              } else {
                var newItem = document.createElement('div');
                newItem.setAttribute('data-name', itemName);
                newItem.classList.add('item');
                var _quantity = document.createElement('div');
                _quantity.classList.add('quantity');
                var increaseButton = document.createElement('button');
                increaseButton.type = 'button';
                increaseButton.classList.add('increase'); // Mengatur kelas menjadi 'increase'
                increaseButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
                increaseButton.addEventListener('click', function () {
                  var quantityElement = this.parentElement.querySelector('p'); // Menggunakan nextElementSibling untuk mengambil elemen kuantitas
                  var count = parseInt(quantityElement.textContent);
                  var itemPrice = this.closest('.item').querySelector('.details p').textContent;
                  var priceNumber = parseInt(itemPrice.replace(/\D/g, ''));
                  quantityElement.textContent = count + 1;
                  totalPrice += priceNumber;
                  updateTotalPrice();
                });
                var decreaseButton = document.createElement('button');
                decreaseButton.type = 'button';
                decreaseButton.classList.add('decrease');
                decreaseButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
                decreaseButton.addEventListener('click', function () {
                  var quantityElement = this.parentElement.querySelector('p');
                  var count = parseInt(quantityElement.textContent);
                  if (count > 0) {
                    var itemPrice = this.closest('.item').querySelector('.details p').textContent;
                    var _priceNumber = parseInt(itemPrice.replace(/\D/g, ''));
                    quantityElement.textContent = count - 1;
                    totalPrice -= _priceNumber;
                    updateTotalPrice();
                    if (count === 1) {
                      var _item = this.closest('.item');
                      _item.remove();
                    }
                  }
                });
                var number = document.createElement('p');
                number.innerHTML = '1';
                _quantity.appendChild(increaseButton);
                _quantity.appendChild(number);
                _quantity.appendChild(decreaseButton);
                var img = document.createElement('img');
                img.src = imageSrc;
                img.alt = 'Food 1';
                img.classList.add('menu_image');
                var details = document.createElement('div');
                details.classList.add('details');
                details.innerHTML = "\n            <h3>".concat(itemName, "</h3>\n            <p>Rp.").concat(priceNumber, "</p>\n          ");
                var removeButton = document.createElement('button');
                removeButton.type = 'button';
                removeButton.classList.add('remove');
                removeButton.innerHTML = '<i class="fas fa-trash"></i>';
                removeButton.addEventListener('click', function () {
                  var item = this.parentElement;
                  var quantityElement = item.querySelector('.quantity p');
                  var count = parseInt(quantityElement.textContent);
                  var itemPrice = item.querySelector('.details p').textContent;
                  var priceNumber = parseInt(itemPrice.replace(/\D/g, ''));
                  totalPrice -= priceNumber * count;
                  updateTotalPrice();
                  item.remove();
                });
                newItem.appendChild(_quantity);
                newItem.appendChild(img);
                newItem.appendChild(details);
                newItem.appendChild(removeButton);
                cart.appendChild(newItem);
                totalPrice += priceNumber;
                updateTotalPrice();
              }
            });
          });
          _context.next = 41;
          break;
        case 38:
          _context.prev = 38;
          _context.t0 = _context["catch"](16);
          errorFetch();
        case 41:
          searchbar();
          cartbar();
          view_searchHandler();
          view_reviewDialog();
          reviewSlider();
          view_onScroll();
        case 47:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[16, 38]]);
  }));
  return function main() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const view_main = (main);
;// CONCATENATED MODULE: ./src/app.js
/* eslint-disable import/extensions */








document.addEventListener('DOMContentLoaded', view_main);

/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DataSource = /*#__PURE__*/function () {
  function DataSource() {
    _classCallCheck(this, DataSource);
  }
  _createClass(DataSource, null, [{
    key: "homes",
    value: function () {
      var _homes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(DataSource.url, "/api/homes"));
            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.data.data || []);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw new Error("Error fetching homes: ".concat(_context.t0.message));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function homes() {
        return _homes.apply(this, arguments);
      }
      return homes;
    }()
  }, {
    key: "menus",
    value: function () {
      var _menus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(DataSource.url, "/api/menus"));
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.data.data || []);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw new Error("Error fetching menus: ".concat(_context2.t0.message));
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function menus() {
        return _menus.apply(this, arguments);
      }
      return menus;
    }()
  }, {
    key: "drinks",
    value: function () {
      var _drinks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(DataSource.url, "/api/drinks"));
            case 3:
              response = _context3.sent;
              return _context3.abrupt("return", response.data.data || []);
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              throw new Error("Error fetching drinks: ".concat(_context3.t0.message));
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function drinks() {
        return _drinks.apply(this, arguments);
      }
      return drinks;
    }()
  }, {
    key: "reviews",
    value: function () {
      var _reviews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(DataSource.url, "/api/reviews"));
            case 3:
              response = _context4.sent;
              return _context4.abrupt("return", response.data.data || []);
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              throw new Error("Error fetching reviews: ".concat(_context4.t0.message));
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function reviews() {
        return _reviews.apply(this, arguments);
      }
      return reviews;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(keyword) {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(DataSource.url, "/api/search?keyword=").concat(keyword));
            case 3:
              response = _context5.sent;
              return _context5.abrupt("return", response.data.data || []);
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              throw new Error("Error searching: ".concat(_context5.t0.message));
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function search(_x) {
        return _search.apply(this, arguments);
      }
      return search;
    }()
  }, {
    key: "postReview",
    value: function () {
      var _postReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(name, reviewText, imgUrl) {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(DataSource.url, "/api/reviews"), {
                name: name,
                review_text: reviewText,
                imgUrl: imgUrl
              });
            case 3:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              throw new Error("Error posting review: ".concat(_context6.t0.message));
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 7]]);
      }));
      function postReview(_x2, _x3, _x4) {
        return _postReview.apply(this, arguments);
      }
      return postReview;
    }()
  }]);
  return DataSource;
}();
_defineProperty(DataSource, "url", 'https://ryan-food-api.vercel.app');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSource);

/***/ }),

/***/ 965:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AboutSection = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AboutSection, _HTMLElement);
  function AboutSection() {
    _classCallCheck(this, AboutSection);
    return _callSuper(this, AboutSection, arguments);
  }
  _createClass(AboutSection, [{
    key: "createElement",
    value: function createElement() {
      this.innerHTML = '';
      this.setAttribute('id', 'about');
      this.classList.add('section');
      var subHeading = document.createElement('h3');
      subHeading.classList.add('sub-heading');
      var heading = document.createElement('h1');
      heading.classList.add('heading');
      var row = document.createElement('div');
      row.classList.add('row');
      subHeading.innerText = ' hidangan kami ';
      heading.innerText = ' hidangan populer ';
      this.appendChild(subHeading);
      this.appendChild(heading);
      this.appendChild(row);
      return row;
    }
  }, {
    key: "render",
    value: function render() {
      var row = this.createElement();
      row.innerHTML = "\n      <div class=\"image\">\n        <img src=\"https://raw.githubusercontent.com/RyanBagusB/ryan-food-api/main/images/about.png\" alt=\"\">\n      </div>\n\n      <div class=\"content\">\n        <h3>restoran terbaik negeri ini</h3>\n        <p>\n          Nikmati hidangan berkualitas tinggi dari penjuru negeri dengan pengiriman gratis. Pesan sekarang untuk pengalaman kuliner tak terlupakan dan kemudahan pembayaran. Tim kami siap memberikan layanan pelanggan terbaik setiap hari.</p>\n        <p>Hubungi kami untuk informasi lebih lanjut dan rasakan kelezatan kuliner yang memuaskan.</p>\n        <div class=\"icons-container\">\n          <div class=\"icons\">\n            <i class=\"fas fa-shipping-fast\"></i>\n            <span>Pengiriman Gratis</span>\n          </div>\n\n          <div class=\"icons\">\n            <i class=\"fas fa-dollar-sign\"></i>\n            <span>Pembayaran Mudah</span>\n          </div>\n\n          <div class=\"icons\">\n            <i class=\"fas fa-headset\"></i>\n            <span>Layanan 24/7</span>\n          </div>\n        </div>\n        <a href=\"#\" class=\"btn\">lebih lanjut</a>\n      </div>\n    ";
    }
  }]);
  return AboutSection;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('about-section', AboutSection);

/***/ }),

/***/ 275:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DishesItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DishesItem, _HTMLElement);
  function DishesItem() {
    _classCallCheck(this, DishesItem);
    return _callSuper(this, DishesItem, arguments);
  }
  _createClass(DishesItem, [{
    key: "item",
    set: function set(item) {
      this._item = item;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.classList.add('box');
      this.setAttribute('id', this._item.id);
      this.innerHTML = "\n      <div class=\"image\">\n        <img class=\"menu_image\" src=\"".concat(this._item.img_url, "\" alt=\"\" />\n      </div>\n      <h3>").concat(this._item.title, "</h3>\n      <div class=\"stars\">\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-star-half-alt\"></i>\n      </div>\n      <p>").concat(this._item.description, "</p>\n      <span class=\"price\">Rp.").concat(this._item.price, "</span>\n      <div>\n        <a href=\"#\" class=\"add-to-cart btn\">Masukkan Keranjang</a>\n      </div>\n    ");
    }
  }]);
  return DishesItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('drink-item', DishesItem);

/***/ }),

/***/ 372:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HomeItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HomeItem, _HTMLElement);
  function HomeItem() {
    _classCallCheck(this, HomeItem);
    return _callSuper(this, HomeItem, arguments);
  }
  _createClass(HomeItem, [{
    key: "item",
    set: function set(item) {
      this._item = item;
      this.render();
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(price) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(price);
    }
  }, {
    key: "render",
    value: function render() {
      this.classList.add('slide');
      this.setAttribute('id', this._item.id);
      this.innerHTML = "\n      <div class=\"content\">\n        <span>our special dish</span>\n        <h3>".concat(this._item.title, "</h3>\n        <p>").concat(this._item.description, "</p>\n        <p class=\"price\">").concat(this.formatPrice(this._item.price), "</p>\n        <a href=\"#\" class=\"add-to-cart btn\">Masukkan Keranjang</a>\n      </div>\n      <div class=\"image\">\n        <img class=\"menu_image\" src=\"").concat(this._item.img_url, "\" alt=\"\" />\n      </div>\n    ");
    }
  }]);
  return HomeItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('home-item', HomeItem);

/***/ }),

/***/ 869:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MenuItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MenuItem, _HTMLElement);
  function MenuItem() {
    _classCallCheck(this, MenuItem);
    return _callSuper(this, MenuItem, arguments);
  }
  _createClass(MenuItem, [{
    key: "item",
    set: function set(item) {
      this._item = item;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.classList.add('box');
      this.setAttribute('id', this._item.id);
      this.innerHTML = "\n      <div class=\"image\">\n        <img class=\"menu_image\" src=\"".concat(this._item.img_url, "\" alt=\"\" />\n      </div>\n      <div class=\"content\">\n        <div class=\"stars\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star-half-alt\"></i>\n        </div>\n        <h3>").concat(this._item.title, "</h3>\n        <p>").concat(this._item.description, "</p>\n        <span class=\"price\">Rp.").concat(this._item.price, "</span>\n        <a href=\"#\" class=\"add-to-cart btn\">Masukkan Keranjang</a>\n      </div>\n    ");
    }
  }]);
  return MenuItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('menu-item', MenuItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0,
/******/ 			126: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkryan_resto"] = self["webpackChunkryan_resto"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [257,149], () => (__webpack_require__(48)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;