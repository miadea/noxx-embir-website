(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/_gallery.js":
/*!********************************!*\
  !*** ./components/_gallery.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pure_loaders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pure-loaders */ "./node_modules/react-pure-loaders/lib/index.js");
/* harmony import */ var react_pure_loaders__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pure_loaders__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/kestanous/dev/play/noxx-embir-website/components/_gallery.js";







var GalleryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GalleryPage, _React$Component);

  function GalleryPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleryPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(GalleryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      currentImage: 0,
      lightboxIsOpen: false,
      width: window.innerWidth
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "openLightbox", function (currentImage, event) {
      _this.setState({
        currentImage: currentImage,
        lightboxIsOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeLightbox", function () {
      _this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "gotoPrevious", function () {
      _this.setState({
        currentImage: _this.state.currentImage - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "gotoNext", function () {
      _this.setState({
        currentImage: _this.state.currentImage + 1
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleryPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isMobile = this.state.width <= 500;
      if (isMobile) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.images.map(function (image, i) {
        var _image$thumbnail = image.thumbnail,
            thumbnailHeight = _image$thumbnail.thumbnailHeight,
            thumbnailWidth = _image$thumbnail.thumbnailWidth,
            aspect = thumbnailWidth / thumbnailHeight,
            height = _this2.state.width / aspect;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
          src: image.thumbnail.thumbnail,
          key: image.thumbnail.thumbnail,
          style: {
            width: "100%",
            height: height,
            marginBottom: 5
          },
          loader: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            style: {
              background: 'gray',
              width: "100%",
              height: height,
              marginBottom: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_pure_loaders__WEBPACK_IMPORTED_MODULE_11__["BallBeat"], {
            loading: true,
            color: "#FFFFFF",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          })),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
      }));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "block",
          minHeight: 1,
          width: "100%",
          overflow: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_12___default.a, {
        onClick: this.openLightbox,
        enableImageSelection: false,
        enableLightbox: false,
        rowHeight: 450,
        onClickThumbnail: this.openLightbox,
        images: this.props.images.map(function (_ref) {
          var thumbnail = _ref.thumbnail;
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, thumbnail, {
            src: ''
          });
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_13___default.a, {
        images: this.props.images.map(function (_ref2) {
          var lightbox = _ref2.lightbox;
          return lightbox;
        }),
        backdropClosesModal: true,
        onClose: this.closeLightbox,
        onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return GalleryPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/aphrodite/lib/generate.js":
/*!************************************************!*\
  !*** ./node_modules/aphrodite/lib/generate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _inlineStylePrefixerStatic = __webpack_require__(/*! inline-style-prefixer/static */ "./node_modules/inline-style-prefixer/static.js");

var _inlineStylePrefixerStatic2 = _interopRequireDefault(_inlineStylePrefixerStatic);

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries, pseudo selectors, and descendant
 * styles that can be used in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSSInner(".foo", {
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold",
 *         ">>bar": {
 *           _names: { "foo_bar": true },
 *           height: 10,
 *         }
 *       }
 *     });
 *
 * will make 5 calls to `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     generateCSSRuleset(".foo:active .foo_bar", { height: 10 }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */
var generateCSS = function generateCSS(selector, styleTypes, stringHandlers, useImportant) {
    var merged = styleTypes.reduce(_util.recursiveMerge);

    var declarations = {};
    var mediaQueries = {};
    var pseudoStyles = {};

    Object.keys(merged).forEach(function (key) {
        if (key[0] === ':') {
            pseudoStyles[key] = merged[key];
        } else if (key[0] === '@') {
            mediaQueries[key] = merged[key];
        } else {
            declarations[key] = merged[key];
        }
    });

    return generateCSSRuleset(selector, declarations, stringHandlers, useImportant) + Object.keys(pseudoStyles).map(function (pseudoSelector) {
        return generateCSSRuleset(selector + pseudoSelector, pseudoStyles[pseudoSelector], stringHandlers, useImportant);
    }).join("") + Object.keys(mediaQueries).map(function (mediaQuery) {
        var ruleset = generateCSS(selector, [mediaQueries[mediaQuery]], stringHandlers, useImportant);
        return mediaQuery + '{' + ruleset + '}';
    }).join("");
};

exports.generateCSS = generateCSS;
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */
var runStringHandlers = function runStringHandlers(declarations, stringHandlers) {
    var result = {};

    Object.keys(declarations).forEach(function (key) {
        // If a handler exists for this particular key, let it interpret
        // that value first before continuing
        if (stringHandlers && stringHandlers.hasOwnProperty(key)) {
            result[key] = stringHandlers[key](declarations[key]);
        } else {
            result[key] = declarations[key];
        }
    });

    return result;
};

/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */
var generateCSSRuleset = function generateCSSRuleset(selector, declarations, stringHandlers, useImportant) {
    var handledDeclarations = runStringHandlers(declarations, stringHandlers);

    var prefixedDeclarations = (0, _inlineStylePrefixerStatic2['default'])(handledDeclarations);

    var prefixedRules = (0, _util.flatten)((0, _util.objectToPairs)(prefixedDeclarations).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        if (Array.isArray(value)) {
            var _ret = (function () {
                // inline-style-prefix-all returns an array when there should be
                // multiple rules, we will flatten to single rules

                var prefixedValues = [];
                var unprefixedValues = [];

                value.forEach(function (v) {
                    if (v.indexOf('-') === 0) {
                        prefixedValues.push(v);
                    } else {
                        unprefixedValues.push(v);
                    }
                });

                prefixedValues.sort();
                unprefixedValues.sort();

                return {
                    v: prefixedValues.concat(unprefixedValues).map(function (v) {
                        return [key, v];
                    })
                };
            })();

            if (typeof _ret === 'object') return _ret.v;
        }
        return [[key, value]];
    }));

    var rules = prefixedRules.map(function (_ref3) {
        var _ref32 = _slicedToArray(_ref3, 2);

        var key = _ref32[0];
        var value = _ref32[1];

        var stringValue = (0, _util.stringifyValue)(key, value);
        var ret = (0, _util.kebabifyStyleName)(key) + ':' + stringValue + ';';
        return useImportant === false ? ret : (0, _util.importantify)(ret);
    }).join("");

    if (rules) {
        return selector + '{' + rules + '}';
    } else {
        return "";
    }
};
exports.generateCSSRuleset = generateCSSRuleset;

/***/ }),

/***/ "./node_modules/aphrodite/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/aphrodite/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

var _inject = __webpack_require__(/*! ./inject */ "./node_modules/aphrodite/lib/inject.js");

var StyleSheet = {
    create: function create(sheetDefinition) {
        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var val = _ref2[1];

            return [key, {
                // TODO(emily): Make a 'production' mode which doesn't prepend
                // the class name here, to make the generated CSS smaller.
                _name: key + '_' + (0, _util.hashObject)(val),
                _definition: val
            }];
        });
    },

    rehydrate: function rehydrate() {
        var renderedClassNames = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        (0, _inject.addRenderedClassNames)(renderedClassNames);
    }
};

/**
 * Utilities for using Aphrodite server-side.
 */
var StyleSheetServer = {
    renderStatic: function renderStatic(renderFunc) {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
        var html = renderFunc();
        var cssContent = (0, _inject.flushToString)();

        return {
            html: html,
            css: {
                content: cssContent,
                renderedClassNames: (0, _inject.getRenderedClassNames)()
            }
        };
    }
};

/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */
var StyleSheetTestUtils = {
    /**
     * Prevent styles from being injected into the DOM.
     *
     * This is useful in situations where you'd like to test rendering UI
     * components which use Aphrodite without any of the side-effects of
     * Aphrodite happening. Particularly useful for testing the output of
     * components when you have no DOM, e.g. testing in Node without a fake DOM.
     *
     * Should be paired with a subsequent call to
     * clearBufferAndResumeStyleInjection.
     */
    suppressStyleInjection: function suppressStyleInjection() {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
    },

    /**
     * Opposite method of preventStyleInject.
     */
    clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
        (0, _inject.reset)();
    }
};

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = true; // Append !important to all style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports['default'] = {
    StyleSheet: StyleSheet,
    StyleSheetServer: StyleSheetServer,
    StyleSheetTestUtils: StyleSheetTestUtils,
    css: css
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/aphrodite/lib/inject.js":
/*!**********************************************!*\
  !*** ./node_modules/aphrodite/lib/inject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _asap = __webpack_require__(/*! asap */ "./node_modules/asap/browser-asap.js");

var _asap2 = _interopRequireDefault(_asap);

var _generate = __webpack_require__(/*! ./generate */ "./node_modules/aphrodite/lib/generate.js");

var _util = __webpack_require__(/*! ./util */ "./node_modules/aphrodite/lib/util.js");

// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.
var styleTag = null;

// Inject a string of styles into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.
var injectStyleTag = function injectStyleTag(cssContents) {
    if (styleTag == null) {
        // Try to find a style tag with the `data-aphrodite` attribute first.
        styleTag = document.querySelector("style[data-aphrodite]");

        // If that doesn't work, generate a new style tag.
        if (styleTag == null) {
            // Taken from
            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
            var head = document.head || document.getElementsByTagName('head')[0];
            styleTag = document.createElement('style');

            styleTag.type = 'text/css';
            styleTag.setAttribute("data-aphrodite", "");
            head.appendChild(styleTag);
        }
    }

    if (styleTag.styleSheet) {
        styleTag.styleSheet.cssText += cssContents;
    } else {
        styleTag.appendChild(document.createTextNode(cssContents));
    }
};

// Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)
var stringHandlers = {
    // With fontFamily we look for objects that are passed in and interpret
    // them as @font-face rules that we need to inject. The value of fontFamily
    // can either be a string (as normal), an object (a single font face), or
    // an array of objects and strings.
    fontFamily: function fontFamily(val) {
        if (Array.isArray(val)) {
            return val.map(fontFamily).join(",");
        } else if (typeof val === "object") {
            injectStyleOnce(val.fontFamily, "@font-face", [val], false);
            return '"' + val.fontFamily + '"';
        } else {
            return val;
        }
    },

    // With animationName we look for an object that contains keyframes and
    // inject them as an `@keyframes` block, returning a uniquely generated
    // name. The keyframes object should look like
    //  animationName: {
    //    from: {
    //      left: 0,
    //      top: 0,
    //    },
    //    '50%': {
    //      left: 15,
    //      top: 5,
    //    },
    //    to: {
    //      left: 20,
    //      top: 20,
    //    }
    //  }
    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
    // to use `animationName` here. Improve that so we can call this
    // `animation` instead of `animationName`.
    animationName: function animationName(val) {
        if (typeof val !== "object") {
            return val;
        }

        // Generate a unique name based on the hash of the object. We can't
        // just use the hash because the name can't start with a number.
        // TODO(emily): this probably makes debugging hard, allow a custom
        // name?
        var name = 'keyframe_' + (0, _util.hashObject)(val);

        // Since keyframes need 3 layers of nesting, we use `generateCSS` to
        // build the inner layers and wrap it in `@keyframes` ourselves.
        var finalVal = '@keyframes ' + name + '{';
        Object.keys(val).forEach(function (key) {
            finalVal += (0, _generate.generateCSS)(key, [val[key]], stringHandlers, false);
        });
        finalVal += '}';

        injectGeneratedCSSOnce(name, finalVal);

        return name;
    }
};

// This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)
var alreadyInjected = {};

// This is the buffer of styles which have not yet been flushed.
var injectionBuffer = "";

// A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.
var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
    if (!alreadyInjected[key]) {
        if (!isBuffering) {
            // We should never be automatically buffering on the server (or any
            // place without a document), so guard against that.
            if (typeof document === "undefined") {
                throw new Error("Cannot automatically buffer without a document");
            }

            // If we're not already buffering, schedule a call to flush the
            // current styles.
            isBuffering = true;
            (0, _asap2['default'])(flushToStyleTag);
        }

        injectionBuffer += generatedCSS;
        alreadyInjected[key] = true;
    }
};

var injectStyleOnce = function injectStyleOnce(key, selector, definitions, useImportant) {
    if (!alreadyInjected[key]) {
        var generated = (0, _generate.generateCSS)(selector, definitions, stringHandlers, useImportant);

        injectGeneratedCSSOnce(key, generated);
    }
};

exports.injectStyleOnce = injectStyleOnce;
var reset = function reset() {
    injectionBuffer = "";
    alreadyInjected = {};
    isBuffering = false;
    styleTag = null;
};

exports.reset = reset;
var startBuffering = function startBuffering() {
    if (isBuffering) {
        throw new Error("Cannot buffer while already buffering");
    }
    isBuffering = true;
};

exports.startBuffering = startBuffering;
var flushToString = function flushToString() {
    isBuffering = false;
    var ret = injectionBuffer;
    injectionBuffer = "";
    return ret;
};

exports.flushToString = flushToString;
var flushToStyleTag = function flushToStyleTag() {
    var cssContent = flushToString();
    if (cssContent.length > 0) {
        injectStyleTag(cssContent);
    }
};

exports.flushToStyleTag = flushToStyleTag;
var getRenderedClassNames = function getRenderedClassNames() {
    return Object.keys(alreadyInjected);
};

exports.getRenderedClassNames = getRenderedClassNames;
var addRenderedClassNames = function addRenderedClassNames(classNames) {
    classNames.forEach(function (className) {
        alreadyInjected[className] = true;
    });
};

exports.addRenderedClassNames = addRenderedClassNames;
/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {Object[]} styleDefinitions style definition objects as returned as
 *     properties of the return value of StyleSheet.create().
 */
var injectAndGetClassName = function injectAndGetClassName(useImportant, styleDefinitions) {
    // Filter out falsy values from the input, to allow for
    // `css(a, test && c)`
    var validDefinitions = styleDefinitions.filter(function (def) {
        return def;
    });

    // Break if there aren't any valid styles.
    if (validDefinitions.length === 0) {
        return "";
    }

    var className = validDefinitions.map(function (s) {
        return s._name;
    }).join("-o_O-");
    injectStyleOnce(className, '.' + className, validDefinitions.map(function (d) {
        return d._definition;
    }), useImportant);

    return className;
};
exports.injectAndGetClassName = injectAndGetClassName;

/***/ }),

/***/ "./node_modules/aphrodite/lib/no-important.js":
/*!****************************************************!*\
  !*** ./node_modules/aphrodite/lib/no-important.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Module with the same interface as the core aphrodite module,
// except that styles injected do not automatically have !important
// appended to them.
//


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _inject = __webpack_require__(/*! ./inject */ "./node_modules/aphrodite/lib/inject.js");

var _indexJs = __webpack_require__(/*! ./index.js */ "./node_modules/aphrodite/lib/index.js");

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = false; // Don't append !important to style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports.StyleSheet = _indexJs.StyleSheet;
exports.StyleSheetServer = _indexJs.StyleSheetServer;
exports.StyleSheetTestUtils = _indexJs.StyleSheetTestUtils;
exports.css = css;

/***/ }),

/***/ "./node_modules/aphrodite/lib/util.js":
/*!********************************************!*\
  !*** ./node_modules/aphrodite/lib/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// {K1: V1, K2: V2, ...} -> [[K1, V1], [K2, V2]]


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var objectToPairs = function objectToPairs(obj) {
    return Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
};

exports.objectToPairs = objectToPairs;
// [[K1, V1], [K2, V2]] -> {K1: V1, K2: V2, ...}
var pairsToObject = function pairsToObject(pairs) {
    var result = {};
    pairs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var val = _ref2[1];

        result[key] = val;
    });
    return result;
};

var mapObj = function mapObj(obj, fn) {
    return pairsToObject(objectToPairs(obj).map(fn));
};

exports.mapObj = mapObj;
// Flattens an array one level
// [[A], [B, C, [D]]] -> [A, B, C, [D]]
var flatten = function flatten(list) {
    return list.reduce(function (memo, x) {
        return memo.concat(x);
    }, []);
};

exports.flatten = flatten;
var UPPERCASE_RE = /([A-Z])/g;
var MS_RE = /^ms-/;

var kebabify = function kebabify(string) {
    return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
};
var kebabifyStyleName = function kebabifyStyleName(string) {
    return kebabify(string).replace(MS_RE, '-ms-');
};

exports.kebabifyStyleName = kebabifyStyleName;
var recursiveMerge = function recursiveMerge(a, b) {
    // TODO(jlfwong): Handle malformed input where a and b are not the same
    // type.

    if (typeof a !== 'object') {
        return b;
    }

    var ret = _extends({}, a);

    Object.keys(b).forEach(function (key) {
        if (ret.hasOwnProperty(key)) {
            ret[key] = recursiveMerge(a[key], b[key]);
        } else {
            ret[key] = b[key];
        }
    });

    return ret;
};

exports.recursiveMerge = recursiveMerge;
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */
var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};

/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js
Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
});

var stringifyValue = function stringifyValue(key, prop) {
    if (typeof prop === "number") {
        if (isUnitlessNumber[key]) {
            return "" + prop;
        } else {
            return prop + "px";
        }
    } else {
        return prop;
    }
};

exports.stringifyValue = stringifyValue;
/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {string} Base 36 encoded hash result
 */
function murmurhash2_32_gc(str) {
    var l = str.length;
    var h = l;
    var i = 0;
    var k = undefined;

    while (l >= 4) {
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
        k ^= k >>> 24;
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

        l -= 4;
        ++i;
    }

    switch (l) {
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;

    return (h >>> 0).toString(36);
}

// Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.
var hashObject = function hashObject(object) {
    return murmurhash2_32_gc(JSON.stringify(object));
};

exports.hashObject = hashObject;
var IMPORTANT_RE = /^([^:]+:.*?)( !important)?;$/;

// Given a single style rule string like "a: b;", adds !important to generate
// "a: b !important;".
var importantify = function importantify(string) {
    return string.replace(IMPORTANT_RE, function (_, base, important) {
        return base + " !important;";
    });
};
exports.importantify = importantify;

/***/ }),

/***/ "./node_modules/aphrodite/no-important.js":
/*!************************************************!*\
  !*** ./node_modules/aphrodite/no-important.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/no-important.js */ "./node_modules/aphrodite/lib/no-important.js");


/***/ }),

/***/ "./node_modules/asap/browser-asap.js":
/*!*******************************************!*\
  !*** ./node_modules/asap/browser-asap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(/*! ./raw */ "./node_modules/asap/browser-raw.js");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/*!******************************************!*\
  !*** ./node_modules/asap/browser-raw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelize.js":
/*!*******************************************!*\
  !*** ./node_modules/fbjs/lib/camelize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(/*! ./camelize */ "./node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenate.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
/*!*****************************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(/*! ./hyphenate */ "./node_modules/fbjs/lib/hyphenate.js");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/memoizeStringOnly.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/memoizeStringOnly.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js":
/*!**********************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
};function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js":
/*!******************************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(/*! ./CSSProperty */ "./node_modules/glamor/lib/CSSPropertyOperations/CSSProperty.js");

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (true) {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
           true ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : undefined;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;

/***/ }),

/***/ "./node_modules/glamor/lib/CSSPropertyOperations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/glamor/lib/CSSPropertyOperations/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "./node_modules/fbjs/lib/camelizeStyleName.js");

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(/*! ./dangerousStyleValue */ "./node_modules/glamor/lib/CSSPropertyOperations/dangerousStyleValue.js");

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(/*! fbjs/lib/hyphenateStyleName */ "./node_modules/fbjs/lib/hyphenateStyleName.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(/*! fbjs/lib/memoizeStringOnly */ "./node_modules/fbjs/lib/memoizeStringOnly.js");

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (true) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : undefined;
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : undefined;
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
     true ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
     true ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : undefined;
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function warnValidStyle(name, value, component) {
    //eslint-disable-line no-var
    var owner = void 0;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === 'label') {
      continue;
    }
    var styleValue = styles[styleName];
    if ( true && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}

/***/ }),

/***/ "./node_modules/glamor/lib/clean.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/clean.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),

/***/ "./node_modules/glamor/lib/hash.js":
/*!*****************************************!*\
  !*** ./node_modules/glamor/lib/hash.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),

/***/ "./node_modules/glamor/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__(/*! ./sheet.js */ "./node_modules/glamor/lib/sheet.js");

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _clean = __webpack_require__(/*! ./clean.js */ "./node_modules/glamor/lib/clean.js");

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__(/*! ./plugins */ "./node_modules/glamor/lib/plugins.js");

var _hash = __webpack_require__(/*! ./hash */ "./node_modules/glamor/lib/hash.js");

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.contentWrap, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);

// define some constants

var isDev =  true || false;
var isTest = "development" === 'test';
var isBrowser = typeof window !== 'undefined';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify(obj) {
  var str = JSON.stringify(obj);
  var toRet = (0, _hash2.default)(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join('.'), '-') + '-' + toRet;
  }
  return toRet;
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

// from https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector];
  }

  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;break;
      case ')':
        inParen--;break;
      case ',':
        if (inParen) break;indices.push(o.index);
    }
  }
  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res;
}

function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = splitSelector(path).map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

// end https://github.com/j2css/j2c/blob/5d381c2d721d04b54fabe6a165d587247c3087cb/src/helpers.js#L28-L61


function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    var rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = splitSelector(a).map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = splitSelector(b).map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

var prefixedPseudoSelectors = {
  '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', '::-ms-input-placeholder'],
  ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']

  // mutable! modifies dest.
};function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(function (p) {
            return build(dest, { selector: joinSelectors(selector, p), mq: mq, supp: supp, src: _src[key] });
          });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it.

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len2 = arguments.length, rules = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rules[_key2] = arguments[_key2];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  style = (0, _clean2.default)(style);
  if (style) {
    return css.insert(toCSS({ selector: selector, style: style }));
  }
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    var inner = Object.keys(spec.keyframes).map(function (kf) {
      var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
      return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
    }).join('');

    var rules = ['-webkit-', '-moz-', '-o-', ''].map(function (prefix) {
      return '@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}';
    });
    rules.forEach(function (rule) {
      return styleSheet.insert(rule);
    });

    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify({ name: name, kfs: kfs }),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    var rule = '@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}';
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

var presets = exports.presets = {
  mobile: '(min-width: 400px)',
  Mobile: '@media (min-width: 400px)',
  phablet: '(min-width: 550px)',
  Phablet: '@media (min-width: 550px)',
  tablet: '(min-width: 750px)',
  Tablet: '@media (min-width: 750px)',
  desktop: '(min-width: 1000px)',
  Desktop: '@media (min-width: 1000px)',
  hd: '(min-width: 1200px)',
  Hd: '@media (min-width: 1200px)'
};

var style = exports.style = css;

function select(selector) {
  for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    styles[_key3 - 1] = arguments[_key3];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    rules[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len6 = arguments.length, styles = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    styles[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    rules[_key7] = arguments[_key7];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}

/***/ }),

/***/ "./node_modules/glamor/lib/plugins.js":
/*!********************************************!*\
  !*** ./node_modules/glamor/lib/plugins.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.contentWrap = contentWrap;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ "./node_modules/glamor/lib/CSSPropertyOperations/index.js");

var _prefixer = __webpack_require__(/*! ./prefixer */ "./node_modules/glamor/lib/prefixer.js");

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}("development");

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var style = node.style;

    var flattened = Object.keys(style).reduce(function (o, key) {
      o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
      return o;
    }, {});
    // todo - 
    // flatten arrays which haven't been flattened yet 
    return (0, _objectAssign2.default)({}, node, { style: flattened });
  }
  return node;
}

var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit'];

function contentWrap(node) {
  if (node.style.content) {
    var cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return _extends({}, node, { style: _extends({}, node.style, { content: '"' + cont + '"' }) });
  }
  return node;
}

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: (0, _prefixer2.default)(_extends({}, node.style)) });
}

/***/ }),

/***/ "./node_modules/glamor/lib/prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/glamor/lib/prefixer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _staticData = __webpack_require__(/*! inline-style-prefixer/static/staticData */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/staticData.js");

var _staticData2 = _interopRequireDefault(_staticData);

var _prefixProperty = __webpack_require__(/*! inline-style-prefixer/utils/prefixProperty */ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! inline-style-prefixer/utils/prefixValue */ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _cursor = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/crossFade.js");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/imageSet.js");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default]; // custom facade for inline-style-prefixer

var prefixMap = _staticData2.default.prefixMap;

function prefixer(style) {
  for (var property in style) {
    var value = style[property];

    var processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

    // only modify the value if it was touched
    // by any plugin to prevent unnecessary mutations
    if (processedValue) {
      style[property] = processedValue;
    }

    (0, _prefixProperty2.default)(prefixMap, property, style);
  }
  return style;
}

/***/ }),

/***/ "./node_modules/glamor/lib/sheet.js":
/*!******************************************!*\
  !*** ./node_modules/glamor/lib/sheet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev =  true || false; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = "development" === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/position.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/static/staticData.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/static/staticData.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

exports.default = {
  plugins: [],
  prefixMap: { "appearance": wm, "userSelect": wmms, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "clipPath": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "filter": w, "fontFeatureSettings": w, "breakAfter": wmms, "breakBefore": wmms, "breakInside": wmms, "columnCount": wm, "columnFill": wm, "columnGap": wm, "columnRule": wm, "columnRuleColor": wm, "columnRuleStyle": wm, "columnRuleWidth": wm, "columns": wm, "columnSpan": wm, "columnWidth": wm, "writingMode": wms, "flex": w, "flexBasis": w, "flexDirection": w, "flexGrow": w, "flexFlow": w, "flexShrink": w, "flexWrap": w, "alignContent": w, "alignItems": w, "alignSelf": w, "justifyContent": w, "order": w, "transform": w, "transformOrigin": w, "transformOriginX": w, "transformOriginY": w, "backfaceVisibility": w, "perspective": w, "perspectiveOrigin": w, "transformStyle": w, "transformOriginZ": w, "animation": w, "animationDelay": w, "animationDirection": w, "animationFillMode": w, "animationDuration": w, "animationIterationCount": w, "animationName": w, "animationPlayState": w, "animationTimingFunction": w, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "hyphens": wmms, "flowInto": wms, "flowFrom": wms, "regionFragment": wms, "textAlignLast": m, "tabSize": m, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "gridTemplateColumns": ms, "gridTemplateRows": ms, "gridTemplateAreas": ms, "gridTemplate": ms, "gridAutoColumns": ms, "gridAutoRows": ms, "gridAutoFlow": ms, "grid": ms, "gridRowStart": ms, "gridColumnStart": ms, "gridRowEnd": ms, "gridRow": ms, "gridColumn": ms, "gridColumnEnd": ms, "gridColumnGap": ms, "gridRowGap": ms, "gridArea": ms, "gridGap": ms, "textSizeAdjust": wms, "borderImage": w, "borderImageOutset": w, "borderImageRepeat": w, "borderImageSlice": w, "borderImageSource": w, "borderImageWidth": w, "transitionDelay": w, "transitionDuration": w, "transitionProperty": w, "transitionTimingFunction": w }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/glamor/node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/calc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/calc.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flex.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flex.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js":
/*!****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/position.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/position.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = __webpack_require__(/*! ../../utils/joinPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js");

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/transition.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/plugins/transition.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = __webpack_require__(/*! ../../utils/isPrefixedValue */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = __webpack_require__(/*! ../prefixProps */ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js");

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/prefixAll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = __webpack_require__(/*! ./prefixProps */ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js");

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = __webpack_require__(/*! ../utils/sortPrefixedStyle */ "./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js");

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = __webpack_require__(/*! ./plugins/position */ "./node_modules/inline-style-prefixer/lib/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _calc = __webpack_require__(/*! ./plugins/calc */ "./node_modules/inline-style-prefixer/lib/static/plugins/calc.js");

var _calc2 = _interopRequireDefault(_calc);

var _cursor = __webpack_require__(/*! ./plugins/cursor */ "./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = __webpack_require__(/*! ./plugins/flex */ "./node_modules/inline-style-prefixer/lib/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _sizing = __webpack_require__(/*! ./plugins/sizing */ "./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = __webpack_require__(/*! ./plugins/gradient */ "./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = __webpack_require__(/*! ./plugins/transition */ "./node_modules/inline-style-prefixer/lib/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = __webpack_require__(/*! ./plugins/flexboxIE */ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js");

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = __webpack_require__(/*! ./plugins/flexboxOld */ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/static/prefixProps.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js":
/*!****************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = __webpack_require__(/*! ./isPrefixedProperty */ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js");

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static.js":
/*!******************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/static/prefixAll */ "./node_modules/inline-style-prefixer/lib/static/prefixAll.js")


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_7aff549c98b978433226 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7aff549c98b978433226 */ "dll-reference dll_7aff549c98b978433226"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_7aff549c98b978433226 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7aff549c98b978433226 */ "dll-reference dll_7aff549c98b978433226"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/CheckButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/CheckButton.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckButton = function (_Component) {
    _inherits(CheckButton, _Component);

    function CheckButton(props) {
        _classCallCheck(this, CheckButton);

        var _this = _possibleConstructorReturn(this, (CheckButton.__proto__ || Object.getPrototypeOf(CheckButton)).call(this, props));

        _this.state = {
            hover: _this.props.hover
        };

        _this.fill = _this.fill.bind(_this);
        _this.visibility = _this.visibility.bind(_this);
        return _this;
    }

    _createClass(CheckButton, [{
        key: 'fill',
        value: function fill() {
            if (this.props.isSelected) return this.props.selectedColor;else if (this.state.hover) return this.props.hoverColor;
            return this.props.color;
        }
    }, {
        key: 'visibility',
        value: function visibility() {
            if (this.props.isSelected || this.props.isSelectable && this.props.parentHover) return 'visible';
            return 'hidden';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var circleStyle = {
                display: this.props.isSelected ? "block" : "none"
            };

            return _react2.default.createElement(
                'div',
                {
                    title: 'Select',
                    style: {
                        visibility: this.visibility(),
                        background: 'none',
                        float: 'left',
                        width: '36px',
                        height: '36px',
                        border: 'none',
                        padding: '6px',
                        cursor: 'pointer',
                        pointerEvents: 'visible'
                    },
                    onClick: this.props.onClick ? function (e) {
                        return _this2.props.onClick(_this2.props.index, e);
                    } : null,
                    onMouseOver: function onMouseOver(e) {
                        return _this2.setState({ hover: true });
                    },
                    onMouseOut: function onMouseOut(e) {
                        return _this2.setState({ hover: false });
                    } },
                _react2.default.createElement(
                    'svg',
                    {
                        fill: this.fill(),
                        height: '24', viewBox: '0 0 24 24',
                        width: '24',
                        xmlns: 'http://www.w3.org/2000/svg' },
                    _react2.default.createElement(
                        'radialGradient',
                        {
                            id: 'shadow',
                            cx: '38',
                            cy: '95.488',
                            r: '10.488',
                            gradientTransform: 'matrix(1 0 0 -1 -26 109)',
                            gradientUnits: 'userSpaceOnUse' },
                        _react2.default.createElement('stop', {
                            offset: '.832',
                            stopColor: '#010101' }),
                        _react2.default.createElement('stop', {
                            offset: '1',
                            stopColor: '#010101',
                            stopOpacity: '0' })
                    ),
                    _react2.default.createElement('circle', {
                        style: circleStyle,
                        opacity: '.26',
                        fill: 'url(#shadow)',
                        cx: '12', cy: '13.512',
                        r: '10.488' }),
                    _react2.default.createElement('circle', {
                        style: circleStyle,
                        fill: '#FFF',
                        cx: '12',
                        cy: '12.2',
                        r: '8.292' }),
                    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
                )
            );
        }
    }]);

    return CheckButton;
}(_react.Component);

CheckButton.propTypes = { index: _propTypes2.default.number,
    color: _propTypes2.default.string,
    isSelectable: _propTypes2.default.bool,
    isSelected: _propTypes2.default.bool,
    selectedColor: _propTypes2.default.string,
    parentHover: _propTypes2.default.bool,
    hover: _propTypes2.default.bool,
    hoverColor: _propTypes2.default.string,
    onClick: _propTypes2.default.func };

CheckButton.defaultProps = { isSelectable: true,
    isSelected: false,
    parentHover: false,
    hover: false };

module.exports = CheckButton;

/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/Gallery.js":
/*!********************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/Gallery.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactImages = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");

var _reactImages2 = _interopRequireDefault(_reactImages);

var _Image = __webpack_require__(/*! ./Image.js */ "./node_modules/react-grid-gallery/lib/Image.js");

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
    _inherits(Gallery, _Component);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.state = {
            images: _this.props.images,
            thumbnails: [],
            lightboxIsOpen: _this.props.isOpen,
            currentImage: _this.props.currentImage,
            containerWidth: 0
        };

        _this.onResize = _this.onResize.bind(_this);
        _this.closeLightbox = _this.closeLightbox.bind(_this);
        _this.gotoImage = _this.gotoImage.bind(_this);
        _this.gotoNext = _this.gotoNext.bind(_this);
        _this.gotoPrevious = _this.gotoPrevious.bind(_this);
        _this.onClickImage = _this.onClickImage.bind(_this);
        _this.openLightbox = _this.openLightbox.bind(_this);
        _this.onSelectImage = _this.onSelectImage.bind(_this);
        return _this;
    }

    _createClass(Gallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.onResize();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(np) {
            if (this.state.currentImage > np.images.length - 1) {
                this.setState({ currentImage: np.images.length - 1 });
            }
            if (this.state.images != np.images || this.props.maxRows != np.maxRows) {
                this.setState({
                    images: np.images,
                    thumbnails: this.renderThumbs(this._gallery.clientWidth, np.images)
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this._gallery) return;
            if (this._gallery.clientWidth !== this.state.containerWidth) {
                this.onResize();
            }
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            if (!this._gallery) return;
            this.setState({
                containerWidth: Math.floor(this._gallery.clientWidth),
                thumbnails: this.renderThumbs(this._gallery.clientWidth)
            });
        }
    }, {
        key: 'openLightbox',
        value: function openLightbox(index, event) {
            if (event) {
                event.preventDefault();
            }
            if (this.props.lightboxWillOpen) {
                this.props.lightboxWillOpen.call(this, index);
            }
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, index);
            }

            this.setState({
                currentImage: index,
                lightboxIsOpen: true
            });
        }
    }, {
        key: 'closeLightbox',
        value: function closeLightbox() {
            if (this.props.lightboxWillClose) {
                this.props.lightboxWillClose.call(this);
            }
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, 0);
            }

            this.setState({
                currentImage: 0,
                lightboxIsOpen: false
            });
        }
    }, {
        key: 'gotoPrevious',
        value: function gotoPrevious() {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, this.state.currentImage - 1);
            }
            this.setState({
                currentImage: this.state.currentImage - 1
            });
        }
    }, {
        key: 'gotoNext',
        value: function gotoNext() {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, this.state.currentImage + 1);
            }
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        }
    }, {
        key: 'onClickImage',
        value: function onClickImage() {
            if (this.state.currentImage === this.props.images.length - 1) return;
            this.gotoNext();
        }
    }, {
        key: 'onSelectImage',
        value: function onSelectImage(index, event) {
            event.preventDefault();
            if (this.props.onSelectImage) this.props.onSelectImage.call(this, index, this.state.images[index]);
        }
    }, {
        key: 'gotoImage',
        value: function gotoImage(index) {
            if (this.props.currentImageWillChange) {
                this.props.currentImageWillChange.call(this, index);
            }
            this.setState({
                currentImage: index
            });
        }
    }, {
        key: 'getOnClickThumbnailFn',
        value: function getOnClickThumbnailFn() {
            if (!this.props.onClickThumbnail && this.props.enableLightbox) return this.openLightbox;
            if (this.props.onClickThumbnail) return this.props.onClickThumbnail;
            return null;
        }
    }, {
        key: 'getOnClickLightboxThumbnailFn',
        value: function getOnClickLightboxThumbnailFn() {
            if (!this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.gotoImage;
            if (this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.props.onClickLightboxThumbnail;
            return null;
        }
    }, {
        key: 'getOnClickImageFn',
        value: function getOnClickImageFn() {
            if (this.props.onClickImage) return this.props.onClickImage;
            return this.onClickImage;
        }
    }, {
        key: 'getOnClickPrevFn',
        value: function getOnClickPrevFn() {
            if (this.props.onClickPrev) return this.props.onClickPrev;
            return this.gotoPrevious;
        }
    }, {
        key: 'getOnClickNextFn',
        value: function getOnClickNextFn() {
            if (this.props.onClickNext) return this.props.onClickNext;
            return this.gotoNext;
        }
    }, {
        key: 'calculateCutOff',
        value: function calculateCutOff(len, delta, items) {
            var cutoff = [];
            var cutsum = 0;
            for (var i in items) {
                var item = items[i];
                var fractOfLen = item.scaletwidth / len;
                cutoff[i] = Math.floor(fractOfLen * delta);
                cutsum += cutoff[i];
            }

            var stillToCutOff = delta - cutsum;
            while (stillToCutOff > 0) {
                for (i in cutoff) {
                    cutoff[i]++;
                    stillToCutOff--;
                    if (stillToCutOff < 0) break;
                }
            }
            return cutoff;
        }
    }, {
        key: 'buildImageRow',
        value: function buildImageRow(items, containerWidth) {
            var row = [];
            var len = 0;
            var imgMargin = 2 * this.props.margin;
            while (items.length > 0 && len < containerWidth) {
                var item = items.shift();
                row.push(item);
                len += item.scaletwidth + imgMargin;
            }

            var delta = len - containerWidth;
            if (row.length > 0 && delta > 0) {
                var cutoff = this.calculateCutOff(len, delta, row);
                for (var i in row) {
                    var pixelsToRemove = cutoff[i];
                    item = row[i];
                    item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                    item.vwidth = item.scaletwidth - pixelsToRemove;
                }
            } else {
                for (var j in row) {
                    item = row[j];
                    item.marginLeft = 0;
                    item.vwidth = item.scaletwidth;
                }
            }
            return row;
        }
    }, {
        key: 'setThumbScale',
        value: function setThumbScale(item) {
            item.scaletwidth = Math.floor(this.props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight));
        }
    }, {
        key: 'renderThumbs',
        value: function renderThumbs(containerWidth) {
            var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.images;

            if (!images) return [];
            if (containerWidth == 0) return [];

            var items = images.slice();
            for (var t in items) {
                this.setThumbScale(items[t]);
            }

            var thumbs = [];
            var rows = [];
            while (items.length > 0) {
                rows.push(this.buildImageRow(items, containerWidth));
            }

            for (var r in rows) {
                for (var i in rows[r]) {
                    var item = rows[r][i];
                    if (this.props.maxRows) {
                        if (r < this.props.maxRows) {
                            thumbs.push(item);
                        }
                    } else {
                        thumbs.push(item);
                    }
                }
            }
            return thumbs;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var images = this.state.thumbnails.map(function (item, idx) {
                return _react2.default.createElement(_Image2.default, {
                    key: "Image-" + idx + "-" + item.src,
                    item: item,
                    index: idx,
                    margin: _this2.props.margin,
                    height: _this2.props.rowHeight,
                    isSelectable: _this2.props.enableImageSelection,
                    onClick: _this2.getOnClickThumbnailFn(),
                    onSelectImage: _this2.onSelectImage,
                    tagStyle: _this2.props.tagStyle,
                    tileViewportStyle: _this2.props.tileViewportStyle,
                    thumbnailStyle: _this2.props.thumbnailStyle,
                    thumbnailImageComponent: _this2.props.thumbnailImageComponent
                });
            });
            var resizeIframeStyles = {
                height: 0,
                margin: 0,
                padding: 0,
                overflow: "hidden",
                borderWidth: 0,
                position: "fixed",
                backgroundColor: "transparent",
                width: "100%"
            };
            return _react2.default.createElement(
                'div',
                { id: this.props.id,
                    className: 'ReactGridGallery',
                    ref: function ref(c) {
                        return _this2._gallery = c;
                    } },
                _react2.default.createElement('iframe', { style: resizeIframeStyles,
                    ref: function ref(c) {
                        return c && c.contentWindow && c.contentWindow.addEventListener('resize', _this2.onResize);
                    } }),
                images,
                _react2.default.createElement(_reactImages2.default, {
                    images: this.props.images,
                    backdropClosesModal: this.props.backdropClosesModal,
                    currentImage: this.state.currentImage,
                    preloadNextImage: this.props.preloadNextImage,
                    customControls: this.props.customControls,
                    enableKeyboardInput: this.props.enableKeyboardInput,
                    imageCountSeparator: this.props.imageCountSeparator,
                    isOpen: this.state.lightboxIsOpen,
                    onClickImage: this.getOnClickImageFn(),
                    onClickNext: this.getOnClickNextFn(),
                    onClickPrev: this.getOnClickPrevFn(),
                    showCloseButton: this.props.showCloseButton,
                    showImageCount: this.props.showImageCount,
                    onClose: this.closeLightbox,
                    width: this.props.lightboxWidth,
                    theme: this.props.theme,
                    onClickThumbnail: this.getOnClickLightboxThumbnailFn(),
                    showThumbnails: this.props.showLightboxThumbnails
                })
            );
        }
    }]);

    return Gallery;
}(_react.Component);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
    images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        src: _propTypes2.default.string.isRequired,
        nano: _propTypes2.default.string,
        alt: _propTypes2.default.string,
        thumbnail: _propTypes2.default.string.isRequired,
        srcset: _propTypes2.default.array,
        caption: _propTypes2.default.string,
        tags: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            value: _propTypes2.default.string.isRequired,
            title: _propTypes2.default.string.isRequired
        })),
        thumbnailWidth: _propTypes2.default.number.isRequired,
        thumbnailHeight: _propTypes2.default.number.isRequired,
        isSelected: _propTypes2.default.bool,
        thumbnailCaption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
    })).isRequired,
    id: _propTypes2.default.string,
    enableImageSelection: _propTypes2.default.bool,
    onSelectImage: _propTypes2.default.func,
    rowHeight: _propTypes2.default.number,
    maxRows: _propTypes2.default.number,
    margin: _propTypes2.default.number,
    onClickThumbnail: _propTypes2.default.func,
    lightboxWillOpen: _propTypes2.default.func,
    lightboxWillClose: _propTypes2.default.func,
    enableLightbox: _propTypes2.default.bool,
    backdropClosesModal: _propTypes2.default.bool,
    currentImage: _propTypes2.default.number,
    preloadNextImage: _propTypes2.default.bool,
    customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
    currentImageWillChange: _propTypes2.default.func,
    enableKeyboardInput: _propTypes2.default.bool,
    imageCountSeparator: _propTypes2.default.string,
    isOpen: _propTypes2.default.bool,
    onClickImage: _propTypes2.default.func,
    onClickNext: _propTypes2.default.func,
    onClickPrev: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    showCloseButton: _propTypes2.default.bool,
    showImageCount: _propTypes2.default.bool,
    lightboxWidth: _propTypes2.default.number,
    tileViewportStyle: _propTypes2.default.func,
    thumbnailStyle: _propTypes2.default.func,
    showLightboxThumbnails: _propTypes2.default.bool,
    onClickLightboxThumbnail: _propTypes2.default.func,
    tagStyle: _propTypes2.default.object,
    thumbnailImageComponent: _propTypes2.default.func
};

Gallery.defaultProps = {
    id: "ReactGridGallery",
    enableImageSelection: true,
    rowHeight: 180,
    margin: 2,
    enableLightbox: true,
    backdropClosesModal: false,
    currentImage: 0,
    preloadNextImage: true,
    enableKeyboardInput: true,
    imageCountSeparator: ' of ',
    isOpen: false,
    showCloseButton: true,
    showImageCount: true,
    lightboxWidth: 1024,
    showLightboxThumbnails: false
};

module.exports = Gallery;

/***/ }),

/***/ "./node_modules/react-grid-gallery/lib/Image.js":
/*!******************************************************!*\
  !*** ./node_modules/react-grid-gallery/lib/Image.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _CheckButton = __webpack_require__(/*! ./CheckButton.js */ "./node_modules/react-grid-gallery/lib/CheckButton.js");

var _CheckButton2 = _interopRequireDefault(_CheckButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
    _inherits(Image, _Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.state = {
            hover: false
        };
        return _this;
    }

    _createClass(Image, [{
        key: 'tagStyle',
        value: function tagStyle() {
            if (this.props.tagStyle) return this.props.tagStyle;
            return {
                display: "inline",
                padding: ".2em .6em .3em",
                fontSize: "75%",
                fontWeight: "600",
                lineHeight: "1",
                color: "yellow",
                background: "rgba(0,0,0,0.65)",
                textAlign: "center",
                whiteSpace: "nowrap",
                verticalAlign: "baseline",
                borderRadius: ".25em"
            };
        }
    }, {
        key: 'tileViewportStyle',
        value: function tileViewportStyle() {
            if (this.props.tileViewportStyle) return this.props.tileViewportStyle.call(this);
            var nanoBase64Backgorund = {};
            if (this.props.item.nano) {
                nanoBase64Backgorund = {
                    background: 'url(' + this.props.item.nano + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                };
            }
            if (this.props.item.isSelected) return Object.assign({
                width: this.props.item.vwidth - 32,
                height: this.props.height - 32,
                margin: 16,
                overflow: "hidden"
            }, nanoBase64Backgorund);
            return Object.assign({
                width: this.props.item.vwidth,
                height: this.props.height,
                overflow: "hidden"
            }, nanoBase64Backgorund);
        }
    }, {
        key: 'thumbnailStyle',
        value: function thumbnailStyle() {
            if (this.props.thumbnailStyle) return this.props.thumbnailStyle.call(this);

            var rotationTransformValue = undefined;
            switch (this.props.item.orientation) {
                case 3:
                    rotationTransformValue = "rotate(180deg)";
                    break;
                case 6:
                    rotationTransformValue = "rotate(90deg)";
                    break;
                case 8:
                    rotationTransformValue = "rotate(270deg)";
                    break;
                case 2:
                    rotationTransformValue = "rotateY(180deg)";
                    break;
                case 4:
                    rotationTransformValue = "rotate(180deg) rotateY(180deg)";
                    break;
                case 5:
                    rotationTransformValue = "rotate(270deg) rotateY(180deg)";
                    break;
                case 7:
                    rotationTransformValue = "rotate(90deg) rotateY(180deg)";
                    break;
            }
            if (this.props.item.isSelected) {
                var ratio = this.props.item.scaletwidth / this.props.height;
                var height = 0;
                var width = 0;
                var viewportHeight = this.props.height - 32;
                var viewportWidth = this.props.item.vwidth - 32;

                if (this.props.item.scaletwidth > this.props.height) {
                    width = this.props.item.scaletwidth - 32;
                    height = Math.floor(width / ratio);
                } else {
                    height = this.props.height - 32;
                    width = Math.floor(height * ratio);
                }

                var marginTop = -Math.abs(Math.floor((viewportHeight - height) / 2));
                var marginLeft = -Math.abs(Math.floor((viewportWidth - width) / 2));
                return {
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    transform: rotationTransformValue
                };
            }
            return {
                cursor: 'pointer',
                width: this.props.item.scaletwidth,
                height: this.props.height,
                marginLeft: this.props.item.marginLeft,
                marginTop: 0,
                transform: rotationTransformValue
            };
        }
    }, {
        key: 'renderCheckButton',
        value: function renderCheckButton() {
            return _react2.default.createElement(_CheckButton2.default, { key: 'Select',
                index: this.props.index,
                color: "rgba(255, 255, 255, 0.7)",
                selectedColor: "#4285f4",
                hoverColor: "rgba(255, 255, 255, 1)",
                isSelected: this.props.item.isSelected,
                isSelectable: this.props.isSelectable,
                onClick: this.props.isSelectable ? this.props.onSelectImage : null,
                parentHover: this.state.hover });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var alt = this.props.item.alt ? this.props.item.alt : "";
            var tags = typeof this.props.item.tags === 'undefined' ? _react2.default.createElement('noscript', null) : this.props.item.tags.map(function (tag) {
                return _react2.default.createElement(
                    'div',
                    { title: tag.title,
                        key: "tag-" + tag.value,
                        style: { display: "inline-block",
                            cursor: 'pointer',
                            pointerEvents: 'visible',
                            margin: "2px" } },
                    _react2.default.createElement(
                        'span',
                        { style: _this2.tagStyle() },
                        tag.value
                    )
                );
            });

            var customOverlay = typeof this.props.item.customOverlay === 'undefined' ? _react2.default.createElement('noscript', null) : _react2.default.createElement(
                'div',
                { className: 'ReactGridGallery_custom-overlay',
                    key: "custom-overlay-" + this.props.index,
                    style: {
                        pointerEvents: "none",
                        opacity: this.state.hover ? 1 : 0,
                        position: "absolute",
                        height: "100%",
                        width: "100%" } },
                this.props.item.customOverlay
            );

            var thumbnailProps = {
                key: "img-" + this.props.index,
                src: this.props.item.thumbnail,
                alt: alt,
                title: this.props.item.caption,
                style: this.thumbnailStyle()
            };

            var ThumbnailImageComponent = this.props.thumbnailImageComponent;

            return _react2.default.createElement(
                'div',
                { className: 'ReactGridGallery_tile',
                    key: "tile-" + this.props.index,
                    onMouseEnter: function onMouseEnter(e) {
                        return _this2.setState({ hover: true });
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return _this2.setState({ hover: false });
                    },
                    style: {
                        margin: this.props.margin,
                        WebkitUserSelect: "none",
                        position: "relative",
                        float: "left",
                        background: "#eee",
                        padding: "0px" } },
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-icon-bar',
                        key: "tile-icon-bar-" + this.props.index,
                        style: {
                            pointerEvents: "none",
                            opacity: 1,
                            position: "absolute",
                            height: "36px",
                            width: "100%" } },
                    this.renderCheckButton()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-bottom-bar',
                        key: "tile-bottom-bar-" + this.props.index,
                        style: {
                            padding: "2px",
                            pointerEvents: "none",
                            position: "absolute",
                            minHeight: "0px",
                            maxHeight: "160px",
                            width: "100%",
                            bottom: "0px",
                            overflow: "hidden"
                        } },
                    tags
                ),
                customOverlay,
                _react2.default.createElement('div', { className: 'ReactGridGallery_tile-overlay',
                    key: "tile-overlay-" + this.props.index,
                    style: {
                        pointerEvents: "none",
                        opacity: 1,
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        background: this.state.hover && !this.props.item.isSelected && this.props.isSelectable ? 'linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)' : 'none' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-viewport',
                        style: this.tileViewportStyle(),
                        key: "tile-viewport-" + this.props.index,
                        onClick: this.props.onClick ? function (e) {
                            return _this2.props.onClick.call(_this2, _this2.props.index, e);
                        } : null },
                    ThumbnailImageComponent ? _react2.default.createElement(ThumbnailImageComponent, _extends({}, this.props, { imageProps: thumbnailProps })) : _react2.default.createElement('img', thumbnailProps)
                ),
                this.props.item.thumbnailCaption && _react2.default.createElement(
                    'div',
                    { className: 'ReactGridGallery_tile-description',
                        style: {
                            background: "white",
                            height: "100%",
                            width: "100%",
                            margin: 0,
                            userSelect: "text",
                            WebkitUserSelect: "text",
                            MozUserSelect: "text",
                            overflow: "hidden"
                        } },
                    this.props.item.thumbnailCaption
                )
            );
        }
    }]);

    return Image;
}(_react.Component);

Image.propTypes = {
    item: _propTypes2.default.object,
    index: _propTypes2.default.number,
    margin: _propTypes2.default.number,
    height: _propTypes2.default.number,
    isSelectable: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    onSelectImage: _propTypes2.default.func,
    tileViewportStyle: _propTypes2.default.func,
    thumbnailStyle: _propTypes2.default.func,
    tagStyle: _propTypes2.default.object,
    customOverlay: _propTypes2.default.element,
    thumbnailImageComponent: _propTypes2.default.func
};

Image.defaultProps = {
    isSelectable: true,
    hover: false
};

exports.default = Image;

/***/ }),

/***/ "./node_modules/react-image/umd/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-image/umd/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(a,b){ true?module.exports=b(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"),__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"),__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"),__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"),__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")):undefined})(this,function(a,b,c,d,e,f,g,h,j,k,l){'use strict';a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c=c&&c.hasOwnProperty("default")?c["default"]:c,d=d&&d.hasOwnProperty("default")?d["default"]:d,e=e&&e.hasOwnProperty("default")?e["default"]:e,f=f&&f.hasOwnProperty("default")?f["default"]:f,g=g&&g.hasOwnProperty("default")?g["default"]:g,h=h&&h.hasOwnProperty("default")?h["default"]:h,j=j&&j.hasOwnProperty("default")?j["default"]:j;var m="default"in k?k["default"]:k,n={},o={loader:l.node,unloader:l.node,decode:l.bool,src:l.oneOfType([l.string,l.array]),container:l.func,loaderContainer:l.func,unloaderContainer:l.func},p=function(i){function k(a){var b;c(this,k),b=e(this,f(k).call(this,a)),j(g(b),"srcToArray",function(a){return(Array.isArray(a)?a:[a]).filter(function(a){return a})}),j(g(b),"onLoad",function(){n[b.sourceList[b.state.currentIndex]]=!0,b.i&&b.setState({isLoaded:!0})}),j(g(b),"onError",function(){if(n[b.sourceList[b.state.currentIndex]]=!1,!b.i)return!1;for(var a,c=b.state.currentIndex+1;c<b.sourceList.length;c++){if(a=b.sourceList[c],!(a in n)){b.setState({currentIndex:c});break}if(!0===n[a])return b.setState({currentIndex:c,isLoading:!1,isLoaded:!0}),!0;!1===n[a]}return c===b.sourceList.length?b.setState({isLoading:!1}):void b.loadImg()}),j(g(b),"loadImg",function(){b.i=new Image,b.i.src=b.sourceList[b.state.currentIndex],b.props.decode&&b.i.decode?b.i.decode().then(b.onLoad).catch(b.onError):b.i.onload=b.onLoad,b.i.onerror=b.onError}),j(g(b),"unloadImg",function(){delete b.i.onerror,delete b.i.onload,b.i.src="";try{delete b.i.src}catch(a){}delete b.i}),b.loaderContainer=a.loaderContainer||a.container,b.unloaderContainer=a.unloaderContainer||a.container,b.sourceList=b.srcToArray(b.props.src);for(var d=0;d<b.sourceList.length&&!!(b.sourceList[d]in n);d++)if(!0===n[b.sourceList[d]])return b.state={currentIndex:d,isLoading:!1,isLoaded:!0},e(b);return b.state=b.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},b}return h(k,i),d(k,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"componentWillReceiveProps",value:function(a){var b=this;this.loaderContainer=a.loaderContainer||a.container,this.unloaderContainer=a.unloaderContainer||a.container;var c=this.srcToArray(a.src),d=c.filter(function(a){return-1===b.sourceList.indexOf(a)}),e=this.sourceList.filter(function(a){return-1===c.indexOf(a)});if(d.length||e.length){if(this.sourceList=c,!c.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var c=this.props,d=c.container,e=c.loader,f=c.unloader,g=c.src,h=c.decode,i=c.loaderContainer,j=c.unloaderContainer,k=c.mockImage,l=b(c,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]);if(this.state.isLoaded){var n=a({},{src:this.sourceList[this.state.currentIndex]},l);return d(m.createElement("img",n))}return!this.state.isLoaded&&this.state.isLoading?e?this.loaderContainer(e):null:this.state.isLoaded||this.state.isLoading?void 0:f?this.unloaderContainer(f):null}}]),k}(k.Component);return j(p,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(a){return a}}),p.propTypes={},p});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-images/lib/Lightbox.js":
/*!***************************************************!*\
  !*** ./node_modules/react-images/lib/Lightbox.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/lib/index.js");

var _reactScrolllock = __webpack_require__(/*! react-scrolllock */ "./node_modules/react-images/node_modules/react-scrolllock/dist/index.js");

var _reactScrolllock2 = _interopRequireDefault(_reactScrolllock);

var _theme = __webpack_require__(/*! ./theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _Arrow = __webpack_require__(/*! ./components/Arrow */ "./node_modules/react-images/lib/components/Arrow.js");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Container = __webpack_require__(/*! ./components/Container */ "./node_modules/react-images/lib/components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Footer = __webpack_require__(/*! ./components/Footer */ "./node_modules/react-images/lib/components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(/*! ./components/Header */ "./node_modules/react-images/lib/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _PaginatedThumbnails = __webpack_require__(/*! ./components/PaginatedThumbnails */ "./node_modules/react-images/lib/components/PaginatedThumbnails.js");

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _Portal = __webpack_require__(/*! ./components/Portal */ "./node_modules/react-images/lib/components/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _Spinner = __webpack_require__(/*! ./components/Spinner */ "./node_modules/react-images/lib/components/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _bindFunctions = __webpack_require__(/*! ./utils/bindFunctions */ "./node_modules/react-images/lib/utils/bindFunctions.js");

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

var _canUseDom = __webpack_require__(/*! ./utils/canUseDom */ "./node_modules/react-images/lib/utils/canUseDom.js");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _deepMerge = __webpack_require__(/*! ./utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// consumers sometimes provide incorrect type or casing
function normalizeSourceSet(data) {
	var sourceSet = data.srcSet || data.srcset;

	if (Array.isArray(sourceSet)) {
		return sourceSet.join();
	}

	return sourceSet;
}

var Lightbox = function (_Component) {
	_inherits(Lightbox, _Component);

	function Lightbox(props) {
		_classCallCheck(this, Lightbox);

		var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = (0, _deepMerge2.default)(_theme2.default, props.theme);
		_this.classes = _aphrodite.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, _this.theme));
		_this.state = { imageLoaded: false };

		_bindFunctions2.default.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImageLoaded']);
		return _this;
	}

	_createClass(Lightbox, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				theme: this.theme
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.isOpen) {
				if (this.props.enableKeyboardInput) {
					window.addEventListener('keydown', this.handleKeyboardInput);
				}
				if (typeof this.props.currentImage === 'number') {
					this.preloadImage(this.props.currentImage, this.handleImageLoaded);
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!_canUseDom2.default) return;

			// preload images
			if (nextProps.preloadNextImage) {
				var currentIndex = this.props.currentImage;
				var nextIndex = nextProps.currentImage + 1;
				var prevIndex = nextProps.currentImage - 1;
				var preloadIndex = void 0;

				if (currentIndex && nextProps.currentImage > currentIndex) {
					preloadIndex = nextIndex;
				} else if (currentIndex && nextProps.currentImage < currentIndex) {
					preloadIndex = prevIndex;
				}

				// if we know the user's direction just get one image
				// otherwise, to be safe, we need to grab one in each direction
				if (preloadIndex) {
					this.preloadImage(preloadIndex);
				} else {
					this.preloadImage(prevIndex);
					this.preloadImage(nextIndex);
				}
			}

			// preload current image
			if (this.props.currentImage !== nextProps.currentImage || !this.props.isOpen && nextProps.isOpen) {
				var img = this.preloadImageData(nextProps.images[nextProps.currentImage], this.handleImageLoaded);
				if (img) this.setState({ imageLoaded: img.complete });
			}

			// add/remove event listeners
			if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'preloadImage',
		value: function preloadImage(idx, onload) {
			return this.preloadImageData(this.props.images[idx], onload);
		}
	}, {
		key: 'preloadImageData',
		value: function preloadImageData(data, onload) {
			if (!data) return;
			var img = new Image();
			var sourceSet = normalizeSourceSet(data);

			// TODO: add error handling for missing images
			img.onerror = onload;
			img.onload = onload;
			img.src = data.src;

			if (sourceSet) img.srcset = sourceSet;

			return img;
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    images = _props.images;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === images.length - 1) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			var currentImage = this.props.currentImage;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === 0) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickPrev();
		}
	}, {
		key: 'closeBackdrop',
		value: function closeBackdrop(event) {
			// make sure event only happens if they click the backdrop
			// and if the caption is widening the figure element let that respond too
			if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
				this.props.onClose();
			}
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				// left
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				// right
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				// esc
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded() {
			this.setState({ imageLoaded: true });
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'left',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				title: this.props.leftArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'right',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				title: this.props.rightArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props2 = this.props,
			    backdropClosesModal = _props2.backdropClosesModal,
			    isOpen = _props2.isOpen,
			    showThumbnails = _props2.showThumbnails,
			    width = _props2.width;
			var imageLoaded = this.state.imageLoaded;


			if (!isOpen) return _react2.default.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return _react2.default.createElement(
				_Container2.default,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: (0, _aphrodite.css)(this.classes.content), style: { marginBottom: offsetThumbnails, maxWidth: width } },
						imageLoaded && this.renderHeader(),
						this.renderImages(),
						this.renderSpinner(),
						imageLoaded && this.renderFooter()
					),
					imageLoaded && this.renderThumbnails(),
					imageLoaded && this.renderArrowPrev(),
					imageLoaded && this.renderArrowNext(),
					this.props.preventScroll && _react2.default.createElement(_reactScrolllock2.default, null)
				)
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props3 = this.props,
			    currentImage = _props3.currentImage,
			    images = _props3.images,
			    onClickImage = _props3.onClickImage,
			    showThumbnails = _props3.showThumbnails;
			var imageLoaded = this.state.imageLoaded;


			if (!images || !images.length) return null;

			var image = images[currentImage];
			var sourceSet = normalizeSourceSet(image);
			var sizes = sourceSet ? '100vw' : null;

			var thumbnailsSize = showThumbnails ? this.theme.thumbnail.size : 0;
			var heightOffset = this.theme.header.height + this.theme.footer.height + thumbnailsSize + this.theme.container.gutter.vertical + 'px';

			return _react2.default.createElement(
				'figure',
				{ className: (0, _aphrodite.css)(this.classes.figure) },
				_react2.default.createElement('img', {
					className: (0, _aphrodite.css)(this.classes.image, imageLoaded && this.classes.imageLoaded),
					onClick: onClickImage,
					sizes: sizes,
					alt: image.alt,
					src: image.src,
					srcSet: sourceSet,
					style: {
						cursor: onClickImage ? 'pointer' : 'auto',
						maxHeight: 'calc(100vh - ' + heightOffset + ')'
					}
				})
			);
		}
	}, {
		key: 'renderThumbnails',
		value: function renderThumbnails() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    showThumbnails = _props4.showThumbnails,
			    thumbnailOffset = _props4.thumbnailOffset;


			if (!showThumbnails) return;

			return _react2.default.createElement(_PaginatedThumbnails2.default, {
				currentImage: currentImage,
				images: images,
				offset: thumbnailOffset,
				onClickThumbnail: onClickThumbnail
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var _props5 = this.props,
			    closeButtonTitle = _props5.closeButtonTitle,
			    customControls = _props5.customControls,
			    onClose = _props5.onClose,
			    showCloseButton = _props5.showCloseButton;


			return _react2.default.createElement(_Header2.default, {
				customControls: customControls,
				onClose: onClose,
				showCloseButton: showCloseButton,
				closeButtonTitle: closeButtonTitle
			});
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter() {
			var _props6 = this.props,
			    currentImage = _props6.currentImage,
			    images = _props6.images,
			    imageCountSeparator = _props6.imageCountSeparator,
			    showImageCount = _props6.showImageCount;


			if (!images || !images.length) return null;

			return _react2.default.createElement(_Footer2.default, {
				caption: images[currentImage].caption,
				countCurrent: currentImage + 1,
				countSeparator: imageCountSeparator,
				countTotal: images.length,
				showCount: showImageCount
			});
		}
	}, {
		key: 'renderSpinner',
		value: function renderSpinner() {
			var _props7 = this.props,
			    spinner = _props7.spinner,
			    spinnerColor = _props7.spinnerColor,
			    spinnerSize = _props7.spinnerSize;
			var imageLoaded = this.state.imageLoaded;

			var Spinner = spinner;

			return _react2.default.createElement(
				'div',
				{ className: (0, _aphrodite.css)(this.classes.spinner, !imageLoaded && this.classes.spinnerActive) },
				_react2.default.createElement(Spinner, {
					color: spinnerColor,
					size: spinnerSize
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Portal2.default,
				null,
				this.renderDialog()
			);
		}
	}]);

	return Lightbox;
}(_react.Component);

Lightbox.propTypes = {
	backdropClosesModal: _propTypes2.default.bool,
	closeButtonTitle: _propTypes2.default.string,
	currentImage: _propTypes2.default.number,
	customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
	enableKeyboardInput: _propTypes2.default.bool,
	imageCountSeparator: _propTypes2.default.string,
	images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		src: _propTypes2.default.string.isRequired,
		srcSet: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
		caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
		thumbnail: _propTypes2.default.string
	})).isRequired,
	isOpen: _propTypes2.default.bool,
	leftArrowTitle: _propTypes2.default.string,
	onClickImage: _propTypes2.default.func,
	onClickNext: _propTypes2.default.func,
	onClickPrev: _propTypes2.default.func,
	onClose: _propTypes2.default.func.isRequired,
	preloadNextImage: _propTypes2.default.bool,
	preventScroll: _propTypes2.default.bool,
	rightArrowTitle: _propTypes2.default.string,
	showCloseButton: _propTypes2.default.bool,
	showImageCount: _propTypes2.default.bool,
	showThumbnails: _propTypes2.default.bool,
	spinner: _propTypes2.default.func,
	spinnerColor: _propTypes2.default.string,
	spinnerSize: _propTypes2.default.number,
	theme: _propTypes2.default.object,
	thumbnailOffset: _propTypes2.default.number,
	width: _propTypes2.default.number
};
Lightbox.defaultProps = {
	closeButtonTitle: 'Close (Esc)',
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	leftArrowTitle: 'Previous (Left arrow key)',
	onClickShowNextImage: true,
	preloadNextImage: true,
	preventScroll: true,
	rightArrowTitle: 'Next (Right arrow key)',
	showCloseButton: true,
	showImageCount: true,
	spinner: _Spinner2.default,
	spinnerColor: 'white',
	spinnerSize: 100,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};
Lightbox.childContextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	content: {
		position: 'relative'
	},
	figure: {
		margin: 0 // remove browser default
	},
	image: {
		display: 'block', // removes browser default gutter
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',

		// opacity animation on image load
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	imageLoaded: {
		opacity: 1
	},
	spinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		// opacity animation to make spinner appear with delay
		opacity: 0,
		transition: 'opacity 0.3s',
		pointerEvents: 'none'
	},
	spinnerActive: {
		opacity: 1
	}
};

exports.default = Lightbox;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Arrow.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-images/lib/components/Arrow.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = __webpack_require__(/*! ./Icon */ "./node_modules/react-images/lib/components/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arrow(_ref, _ref2) {
	var theme = _ref2.theme;

	var direction = _ref.direction,
	    icon = _ref.icon,
	    onClick = _ref.onClick,
	    size = _ref.size,
	    props = _objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'button',
		_extends({
			type: 'button',
			className: (0, _noImportant.css)(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		_react2.default.createElement(_Icon2.default, { fill: !!theme.arrow && theme.arrow.fill || _theme2.default.arrow.fill, type: icon })
	);
}

Arrow.propTypes = {
	direction: _propTypes2.default.oneOf(['left', 'right']),
	icon: _propTypes2.default.string,
	onClick: _propTypes2.default.func.isRequired,
	size: _propTypes2.default.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
	size: 'medium'
};
Arrow.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	arrow: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area
		position: 'absolute',
		top: '50%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	},

	// sizes
	arrow__size__medium: {
		height: _theme2.default.arrow.height,
		marginTop: _theme2.default.arrow.height / -2,
		width: 40,

		'@media (min-width: 768px)': {
			width: 70
		}
	},
	arrow__size__small: {
		height: _theme2.default.thumbnail.size,
		marginTop: _theme2.default.thumbnail.size / -2,
		width: 30,

		'@media (min-width: 500px)': {
			width: 40
		}
	},

	// direction
	arrow__direction__right: {
		right: _theme2.default.container.gutter.horizontal
	},
	arrow__direction__left: {
		left: _theme2.default.container.gutter.horizontal
	}
};

exports.default = Arrow;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Container.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Container.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref, _ref2) {
	var theme = _ref2.theme;

	var props = _objectWithoutProperties(_ref, []);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement('div', _extends({ id: 'lightboxBackdrop',
		className: (0, _noImportant.css)(classes.container)
	}, props));
}

Container.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	container: {
		alignItems: 'center',
		backgroundColor: _theme2.default.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: _theme2.default.container.gutter.vertical,
		paddingLeft: _theme2.default.container.gutter.horizontal,
		paddingRight: _theme2.default.container.gutter.horizontal,
		paddingTop: _theme2.default.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: _theme2.default.container.zIndex
	}
};

exports.default = Container;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Footer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Footer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Footer(_ref, _ref2) {
	var theme = _ref2.theme;

	var caption = _ref.caption,
	    countCurrent = _ref.countCurrent,
	    countSeparator = _ref.countSeparator,
	    countTotal = _ref.countTotal,
	    showCount = _ref.showCount,
	    props = _objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

	if (!caption && !showCount) return null;

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	var imageCount = showCount ? _react2.default.createElement(
		'div',
		{ className: (0, _noImportant.css)(classes.footerCount) },
		countCurrent,
		countSeparator,
		countTotal
	) : _react2.default.createElement('span', null);

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(classes.footer) }, props),
		caption ? _react2.default.createElement(
			'figcaption',
			{ className: (0, _noImportant.css)(classes.footerCaption) },
			caption
		) : _react2.default.createElement('span', null),
		imageCount
	);
}

Footer.propTypes = {
	caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	countCurrent: _propTypes2.default.number,
	countSeparator: _propTypes2.default.string,
	countTotal: _propTypes2.default.number,
	showCount: _propTypes2.default.bool
};
Footer.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	footer: {
		boxSizing: 'border-box',
		color: _theme2.default.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: _theme2.default.footer.gutter.vertical,
		paddingLeft: _theme2.default.footer.gutter.horizontal,
		paddingRight: _theme2.default.footer.gutter.horizontal,
		paddingTop: _theme2.default.footer.gutter.vertical
	},
	footerCount: {
		color: _theme2.default.footer.count.color,
		fontSize: _theme2.default.footer.count.fontSize,
		paddingLeft: '1em' // add a small gutter for the caption
	},
	footerCaption: {
		flex: '1 1 0'
	}
};

exports.default = Footer;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Header.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Header.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = __webpack_require__(/*! ./Icon */ "./node_modules/react-images/lib/components/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Header(_ref, _ref2) {
	var theme = _ref2.theme;

	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    props = _objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(classes.header) }, props),
		customControls ? customControls : _react2.default.createElement('span', null),
		!!showCloseButton && _react2.default.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: (0, _noImportant.css)(classes.close),
				onClick: onClose
			},
			_react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
		)
	);
}

Header.propTypes = {
	customControls: _propTypes2.default.array,
	onClose: _propTypes2.default.func.isRequired,
	showCloseButton: _propTypes2.default.bool
};
Header.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: _theme2.default.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40
	}
};

exports.default = Header;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/components/Icon.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _arrowLeft = __webpack_require__(/*! ../icons/arrowLeft */ "./node_modules/react-images/lib/icons/arrowLeft.js");

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _arrowRight = __webpack_require__(/*! ../icons/arrowRight */ "./node_modules/react-images/lib/icons/arrowRight.js");

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _close = __webpack_require__(/*! ../icons/close */ "./node_modules/react-images/lib/icons/close.js");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var icons = { arrowLeft: _arrowLeft2.default, arrowRight: _arrowRight2.default, close: _close2.default };

var Icon = function Icon(_ref) {
	var fill = _ref.fill,
	    type = _ref.type,
	    props = _objectWithoutProperties(_ref, ['fill', 'type']);

	var icon = icons[type];

	return _react2.default.createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: icon(fill) }
	}, props));
};

Icon.propTypes = {
	fill: _propTypes2.default.string,
	type: _propTypes2.default.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
	fill: 'white'
};

exports.default = Icon;

/***/ }),

/***/ "./node_modules/react-images/lib/components/PaginatedThumbnails.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-images/lib/components/PaginatedThumbnails.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _Thumbnail = __webpack_require__(/*! ./Thumbnail */ "./node_modules/react-images/lib/components/Thumbnail.js");

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Arrow = __webpack_require__(/*! ./Arrow */ "./node_modules/react-images/lib/components/Arrow.js");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create({
	paginatedThumbnails: {
		bottom: _theme2.default.container.gutter.vertical,
		height: _theme2.default.thumbnail.size,
		padding: '0 50px',
		position: 'absolute',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		left: '50%',
		transform: 'translateX(-50%)'
	}
});

var arrowStyles = {
	height: _theme2.default.thumbnail.size + _theme2.default.thumbnail.gutter * 2,
	width: 40
};

var PaginatedThumbnails = function (_Component) {
	_inherits(PaginatedThumbnails, _Component);

	function PaginatedThumbnails(props) {
		_classCallCheck(this, PaginatedThumbnails);

		var _this = _possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

		_this.state = {
			hasCustomPage: false
		};

		_this.gotoPrev = _this.gotoPrev.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		return _this;
	}

	_createClass(PaginatedThumbnails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Component should be controlled, flush state when currentImage changes
			if (nextProps.currentImage !== this.props.currentImage) {
				this.setState({
					hasCustomPage: false
				});
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'getFirst',
		value: function getFirst() {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    offset = _props.offset;

			if (this.state.hasCustomPage) {
				return this.clampFirst(this.state.first);
			}
			return this.clampFirst(currentImage - offset);
		}
	}, {
		key: 'setFirst',
		value: function setFirst(event, newFirst) {
			var first = this.state.first;


			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (first === newFirst) return;

			this.setState({
				hasCustomPage: true,
				first: newFirst
			});
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			this.setFirst(event, this.getFirst() - this.props.offset);
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			this.setFirst(event, this.getFirst() + this.props.offset);
		}
	}, {
		key: 'clampFirst',
		value: function clampFirst(value) {
			var _props2 = this.props,
			    images = _props2.images,
			    offset = _props2.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

			if (value < 0) {
				return 0;
			} else if (value + totalCount > images.length) {
				// Too far
				return images.length - totalCount;
			} else {
				return value;
			}
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.getFirst() <= 0) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'left',
				size: 'small',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				style: arrowStyles,
				title: 'Previous (Left arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			var _props3 = this.props,
			    offset = _props3.offset,
			    images = _props3.images;

			var totalCount = 2 * offset + 1;
			if (this.getFirst() + totalCount >= images.length) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'right',
				size: 'small',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				style: arrowStyles,
				title: 'Next (Right arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    offset = _props4.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
			var thumbnails = [];
			var baseOffset = 0;
			if (images.length <= totalCount) {
				thumbnails = images;
			} else {
				// Try to center current image in list
				baseOffset = this.getFirst();
				thumbnails = images.slice(baseOffset, baseOffset + totalCount);
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.paginatedThumbnails) },
				this.renderArrowPrev(),
				thumbnails.map(function (img, idx) {
					return _react2.default.createElement(_Thumbnail2.default, _extends({ key: baseOffset + idx
					}, img, {
						index: baseOffset + idx,
						onClick: onClickThumbnail,
						active: baseOffset + idx === currentImage }));
				}),
				this.renderArrowNext()
			);
		}
	}]);

	return PaginatedThumbnails;
}(_react.Component);

exports.default = PaginatedThumbnails;


PaginatedThumbnails.propTypes = {
	currentImage: _propTypes2.default.number,
	images: _propTypes2.default.array,
	offset: _propTypes2.default.number,
	onClickThumbnail: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./node_modules/react-images/lib/components/PassContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-images/lib/components/PassContext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	_inherits(PassContext, _Component);

	function PassContext() {
		_classCallCheck(this, PassContext);

		return _possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	_createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react.Children.only(this.props.children);
		}
	}]);

	return PassContext;
}(_react.Component);

PassContext.propTypes = {
	context: _propTypes2.default.object.isRequired
};
PassContext.childContextTypes = {
	theme: _propTypes2.default.object
};

exports.default = PassContext;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Portal.js":
/*!************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Portal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _PassContext = __webpack_require__(/*! ./PassContext */ "./node_modules/react-images/lib/components/PassContext.js");

var _PassContext2 = _interopRequireDefault(_PassContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';

			(0, _reactDom.render)(_react2.default.createElement(
				_PassContext2.default,
				{ context: this.context },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'style',
						null,
						styles
					),
					_react2.default.createElement(
						_reactTransitionGroup.TransitionGroup,
						this.props,
						_react2.default.createElement(
							_reactTransitionGroup.CSSTransition,
							{ timeout: { enter: duration, exit: duration }, classNames: 'fade' },
							this.props.children
						)
					)
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			(0, _reactDom.unmountComponentAtNode)(this.portalElement);
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
}(_react.Component);

exports.default = Portal;


Portal.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/react-images/lib/components/Spinner.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Spinner.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
	var classes = _noImportant.StyleSheet.create(styles(props));

	return _react2.default.createElement(
		'div',
		{ className: (0, _noImportant.css)(classes.spinner) },
		_react2.default.createElement('div', { className: (0, _noImportant.css)(classes.ripple) })
	);
};

Spinner.propTypes = {
	color: _propTypes2.default.string,
	size: _propTypes2.default.number
};

var rippleKeyframes = {
	'0%': {
		top: '50%',
		left: '50%',
		width: 0,
		height: 0,
		opacity: 1
	},
	'100%': {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0
	}
};

var styles = function styles(_ref) {
	var color = _ref.color,
	    size = _ref.size;
	return {
		spinner: {
			display: 'inline-block',
			position: 'relative',
			width: size,
			height: size
		},
		ripple: {
			position: 'absolute',
			border: '4px solid ' + color,
			opacity: 1,
			borderRadius: '50%',
			animationName: rippleKeyframes,
			animationDuration: '1s',
			animationTimingFunction: 'cubic-bezier(0, 0.2, 0.8, 1)',
			animationIterationCount: 'infinite'
		}
	};
};

exports.default = Spinner;

/***/ }),

/***/ "./node_modules/react-images/lib/components/Thumbnail.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-images/lib/components/Thumbnail.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _noImportant = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");

var _theme = __webpack_require__(/*! ../theme */ "./node_modules/react-images/lib/theme.js");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = __webpack_require__(/*! ../utils/deepMerge */ "./node_modules/react-images/lib/utils/deepMerge.js");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick;
	var theme = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement('div', {
		className: (0, _noImportant.css)(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: _propTypes2.default.bool,
	index: _propTypes2.default.number,
	onClick: _propTypes2.default.func.isRequired,
	src: _propTypes2.default.string,
	thumbnail: _propTypes2.default.string
};

Thumbnail.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: _theme2.default.thumbnail.size,
		margin: _theme2.default.thumbnail.gutter,
		overflow: 'hidden',
		width: _theme2.default.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + _theme2.default.thumbnail.activeBorderColor
	}
};

exports.default = Thumbnail;

/***/ }),

/***/ "./node_modules/react-images/lib/icons/arrowLeft.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/icons/arrowLeft.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/icons/arrowRight.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-images/lib/icons/arrowRight.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/icons/close.js":
/*!******************************************************!*\
  !*** ./node_modules/react-images/lib/icons/close.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\t\t<path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/>\n\t</svg>";
};

/***/ }),

/***/ "./node_modules/react-images/lib/theme.js":
/*!************************************************!*\
  !*** ./node_modules/react-images/lib/theme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em'
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120
};

exports.default = theme;

/***/ }),

/***/ "./node_modules/react-images/lib/utils/bindFunctions.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-images/lib/utils/bindFunctions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bindFunctions;
/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
};

/***/ }),

/***/ "./node_modules/react-images/lib/utils/canUseDom.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/utils/canUseDom.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Return true if window + document

exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ "./node_modules/react-images/lib/utils/deepMerge.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-images/lib/utils/deepMerge.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function deepMerge(target) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var extended = _extends({}, target);

	Object.keys(source).forEach(function (key) {
		if (_typeof(source[key]) !== 'object' || !source[key]) {
			extended[key] = source[key];
		} else {
			if (!target[key]) {
				extended[key] = source[key];
			} else {
				extended[key] = deepMerge(target[key], source[key]);
			}
		}
	});

	return extended;
}

exports.default = deepMerge;

/***/ }),

/***/ "./node_modules/react-images/node_modules/react-scrolllock/dist/ScrollLock.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-images/node_modules/react-scrolllock/dist/ScrollLock.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _reactPropToggle = __webpack_require__(/*! react-prop-toggle */ "./node_modules/react-prop-toggle/dist/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-images/node_modules/react-scrolllock/dist/utils.js");

var _withTouchListeners = __webpack_require__(/*! ./withTouchListeners */ "./node_modules/react-images/node_modules/react-scrolllock/dist/withTouchListeners.js");

var _withTouchListeners2 = _interopRequireDefault(_withTouchListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOCK_COUNT = 0;

var ScrollLock = function (_PureComponent) {
  _inherits(ScrollLock, _PureComponent);

  function ScrollLock() {
    _classCallCheck(this, ScrollLock);

    return _possibleConstructorReturn(this, (ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).apply(this, arguments));
  }

  _createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      LOCK_COUNT++;
      if (_exenv.canUseDOM) {
        this.initialHeight = window.innerHeight;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      LOCK_COUNT = Math.max(LOCK_COUNT - 1, 0);

      if (_exenv.canUseDOM) {
        var offset = window.innerHeight - this.initialHeight;

        // adjust scroll if the window has been resized since the lock was engaged
        if (offset) {
          window.scrollTo(0, window.pageYOffset + offset);
        }
      }

      // reset the initial height in case this scroll lock is used again
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var accountForScrollbars = this.props.accountForScrollbars;

      // avoid overly incrementing padding

      var scrollbarSpacer = accountForScrollbars && LOCK_COUNT < 1 ? { 'padding-right': (0, _utils.getPadding)() + 'px' } : {};

      var height = (0, _utils.getDocumentHeight)() + 'px';

      return _react2.default.createElement(_reactPropToggle.SimpleToggle, {
        styles: _extends({
          'box-sizing': 'border-box', // account for possible declaration `width: 100%;` on body
          overflow: 'hidden',
          position: 'relative',
          height: height
        }, scrollbarSpacer)
      });
    }
  }]);

  return ScrollLock;
}(_react.PureComponent);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};
exports.default = (0, _withTouchListeners2.default)(ScrollLock);

/***/ }),

/***/ "./node_modules/react-images/node_modules/react-scrolllock/dist/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-images/node_modules/react-scrolllock/dist/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollLock = __webpack_require__(/*! ./ScrollLock */ "./node_modules/react-images/node_modules/react-scrolllock/dist/ScrollLock.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollLock).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-images/node_modules/react-scrolllock/dist/utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-images/node_modules/react-scrolllock/dist/utils.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
exports.getPadding = getPadding;
exports.camelToKebab = camelToKebab;
exports.getWindowHeight = getWindowHeight;
exports.getDocumentHeight = getDocumentHeight;
exports.parse = parse;
function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  if (!window) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function getPadding() {
  if (!document || !window) return 0;

  var currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  var clientWidth = document.body ? document.body.clientWidth : 0;
  var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getWindowHeight() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (window && window.innerHeight) {
    return window.innerHeight * multiplier;
  }
}

function getDocumentHeight() {
  if (document && document.body) {
    return document.body.clientHeight;
  }
}

function parse(val) {
  return isNaN(val) ? val : val + 'px';
}

/***/ }),

/***/ "./node_modules/react-images/node_modules/react-scrolllock/dist/withTouchListeners.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-images/node_modules/react-scrolllock/dist/withTouchListeners.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTouchListeners;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-images/node_modules/react-scrolllock/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withTouchListeners(WrappedComponent) {
  return function (_PureComponent) {
    _inherits(TouchProvider, _PureComponent);

    function TouchProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TouchProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchProvider.__proto__ || Object.getPrototypeOf(TouchProvider)).call.apply(_ref, [this].concat(args))), _this), _this.listenerOptions = {
        capture: false,
        passive: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TouchProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!_exenv.canUseDOM) return;

        var touchScrollTarget = this.props.touchScrollTarget;

        var target = document.body;

        // account for touch devices
        if (target && (0, _utils.isTouchDevice)()) {
          // Mobile Safari ignores { overflow: hidden } declaration on the body.
          target.addEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

          // Allow scroll on provided target
          if (touchScrollTarget) {
            touchScrollTarget.addEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.addEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!_exenv.canUseDOM) return;

        var touchScrollTarget = this.props.touchScrollTarget;

        var target = document.body;

        // remove touch listeners
        if (target && (0, _utils.isTouchDevice)()) {
          target.removeEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

          if (touchScrollTarget) {
            touchScrollTarget.removeEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.removeEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return TouchProvider;
  }(_react.PureComponent);
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/LifeCycleProvider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/LifeCycleProvider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PropToggle = __webpack_require__(/*! ./PropToggle */ "./node_modules/react-prop-toggle/dist/PropToggle.js");

var _PropToggle2 = _interopRequireDefault(_PropToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LifeCycleProvider = function LifeCycleProvider(_ref) {
  var isActive = _ref.isActive,
      props = _objectWithoutProperties(_ref, ['isActive']);

  return isActive ? _react2.default.createElement(_PropToggle2.default, props) : null;
};

LifeCycleProvider.defaultProps = _PropToggle.defaultProps;

exports.default = LifeCycleProvider;

/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/PropToggle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/PropToggle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// create defaults
var defaultProps = exports.defaultProps = {
  attributes: {},
  styles: {}
};

var PropToggle = function (_PureComponent) {
  _inherits(PropToggle, _PureComponent);

  function PropToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropToggle.__proto__ || Object.getPrototypeOf(PropToggle)).call.apply(_ref, [this].concat(args))), _this), _this.originalAttributes = {}, _this.originalStyles = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          attributes = _props.attributes,
          styles = _props.styles,
          _props$target = _props.target,
          target = _props$target === undefined ? document.body : _props$target;

      if (!target) return;

      this.attributeKeys = Object.keys(attributes);
      this.styleKeys = Object.keys(styles);

      // styles
      if (this.styleKeys.length) {
        this.styleKeys.forEach(function (k) {
          _this2.originalStyles[k] = target.style.getPropertyValue(k);
          target.style.setProperty(k, styles[k]);
        });
      }

      // attributes
      if (this.attributeKeys.length) {
        this.attributeKeys.forEach(function (k) {
          _this2.originalAttributes[k] = target.getAttribute(k) || '';
          target.setAttribute(k, attributes[k]);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var _props$target2 = this.props.target,
          target = _props$target2 === undefined ? document.body : _props$target2;

      if (!target) return;

      // styles
      if (this.styleKeys.length) {
        this.styleKeys.forEach(function (k) {
          target.style.setProperty(k, _this3.originalStyles[k]);
        });
      }

      // attributes
      if (this.attributeKeys.length) {
        this.attributeKeys.forEach(function (k) {
          if (_this3.originalAttributes[k]) {
            target.setAttribute(k, _this3.originalAttributes[k]);
          } else {
            target.removeAttribute(k);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return PropToggle;
}(_react.PureComponent);

PropToggle.defaultProps = defaultProps;
exports.default = PropToggle;

/***/ }),

/***/ "./node_modules/react-prop-toggle/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-prop-toggle/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LifeCycleProvider = __webpack_require__(/*! ./LifeCycleProvider */ "./node_modules/react-prop-toggle/dist/LifeCycleProvider.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LifeCycleProvider).default;
  }
});

var _PropToggle = __webpack_require__(/*! ./PropToggle */ "./node_modules/react-prop-toggle/dist/PropToggle.js");

Object.defineProperty(exports, 'SimpleToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PropToggle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallBeat/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallBeat/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallBeat/style.js");
class BallBeat extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallBeat = BallBeat;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallBeat/style.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallBeat/style.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const ballBeat = glamor_1.keyframes({
    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '50%': {
        opacity: 0.2,
        transform: 'scale(0.75)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        '&:nth-child(2n-1)': {
            animationDelay: '-0.35s !important',
        },
        animation: `${ballBeat} 0.7s 0s infinite linear`,
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotate/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotate/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallClipRotate/style.js");
class BallClipRotate extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallClipRotate = BallClipRotate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotate/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotate/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const rotate = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(0deg)',
    },
    '100%': {
        transform: 'rotate(360deg)',
    },
    '50%': {
        transform: 'rotate(180deg)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${rotate} 0.75s 0s linear infinite`,
        background: 'transparent !important',
        border: `2px solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderBottomColor: 'transparent',
        display: 'inline-block',
        height: '26px',
        width: '26px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/style.js");
class BallClipRotateMultiple extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallClipRotateMultiple = BallClipRotateMultiple;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/style.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/style.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const rotate = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(0deg) scale(1)',
    },
    '100%': {
        transform: 'rotate(360deg) scale(1)',
    },
    '50%': {
        transform: 'rotate(180deg) scale(0.6)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    ' > div': {
        animation: `${rotate} 1s 0s ease-in-out infinite`,
        border: `2px solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderBottomColor: 'transparent',
        borderRadius: '100%',
        borderTopColor: 'transparent',
        height: '35px',
        left: '-20px',
        position: 'absolute',
        top: '-20px',
        width: '35px',
        '&:last-child': {
            animationDirection: 'reverse',
            animationDuration: '0.5s',
            // tslint:disable-next-line: max-line-length
            borderColor: `${color ? color : variables_1.PRIMARY_COLOR} transparent ${color ? color : variables_1.PRIMARY_COLOR} transparent`,
            display: 'inline-block',
            height: '15px',
            left: '-10px',
            top: '-10px',
            width: '15px',
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotatePulse/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotatePulse/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallClipRotatePulse/style.js");
class BallClipRotatePulse extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallClipRotatePulse = BallClipRotatePulse;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallClipRotatePulse/style.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallClipRotatePulse/style.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const rotate = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(0deg) scale(1)',
    },
    '100%': {
        transform: 'rotate(360deg) scale(1)',
    },
    '50%': {
        transform: 'rotate(180deg) scale(0.6)',
    },
});
const scale = glamor_1.keyframes({
    '100%': {
        transform: 'scale(1)',
    },
    '30%': {
        transform: 'scale(0.3)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: 'translateY(-15px)',
    ' > div': {
        borderRadius: '100%',
        left: '0px',
        position: 'absolute',
        top: '0px',
        '&:first-child': {
            animation: `${scale} 1s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
            background: color ? color : variables_1.PRIMARY_COLOR,
            height: '16px',
            left: '-7px',
            top: '7px',
            width: '16px',
        },
        '&:last-child': {
            animation: `${rotate} 1s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
            animationDuration: '1s',
            background: 'transparent',
            border: '2px solid',
            // tslint:disable-next-line: max-line-length
            borderColor: `${color ? color : variables_1.PRIMARY_COLOR} transparent ${color ? color : variables_1.PRIMARY_COLOR} transparent`,
            height: '30px',
            left: '-16px',
            position: 'absolute',
            top: '-2px',
            width: '30px',
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallGridBeat/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallGridBeat/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallGridBeat/style.js");
class BallGridBeat extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallGridBeat = BallGridBeat;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallGridBeat/style.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallGridBeat/style.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const ballGridBeat = glamor_1.keyframes({
    '100%': {
        opacity: 1,
    },
    '50%': {
        opacity: 0.7,
    },
});
exports.default = (color) => glamor_1.css(mixins_1.ballGrid(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    width: (parseInt(variables_1.BALL_SIZE, 10) * 3) + parseInt(variables_1.MARGIN, 10) * 6,
    ' > div': {
        animationDelay: 0,
        animationIterationCount: 'infinite',
        animationName: ballGridBeat,
        display: 'inline-block',
        float: 'left',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallGridPulse/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallGridPulse/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallGridPulse/style.js");
class BallGridPulse extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallGridPulse = BallGridPulse;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallGridPulse/style.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallGridPulse/style.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const ballGridPulse = glamor_1.keyframes({
    '0%': {
        transform: 'scale(1)',
    },
    '100%': {
        opacity: '1',
        transform: 'scale(1)',
    },
    '50%': {
        opacity: '0.7',
        transform: 'scale(0.5)',
    },
});
exports.default = (color) => glamor_1.css(mixins_1.ballGrid(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    width: (parseInt(variables_1.BALL_SIZE, 10) * 3) + parseInt(variables_1.MARGIN, 10) * 6,
    ' > div': {
        animationDelay: 0,
        animationIterationCount: 'infinite',
        animationName: ballGridPulse,
        display: 'inline-block',
        float: 'left',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulse/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulse/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallPulse/style.js");
class BallPulse extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallPulse = BallPulse;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulse/style.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulse/style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const scale = glamor_1.keyframes({
    '0%': {
        opacity: '1',
        transform: 'scale(1)',
    },
    '45%': {
        opacity: '0.7',
        transform: 'scale(0.1)',
    },
    '80%': {
        opacity: '1',
        transform: 'scale(1)',
    },
});
function ballPulse() {
    const n = 3;
    let i = 1;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animation: `${scale} 0.75s ${utilities_1.delay('0.12s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
        };
    }
    return grid;
}
exports.ballPulse = ballPulse;
exports.default = (color) => glamor_1.css(ballPulse(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseRise/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseRise/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallPulseRise/style.js");
class BallPulseRise extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallPulseRise = BallPulseRise;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseRise/style.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseRise/style.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const riseAmount = '30px';
const ballPulseRiseEven = glamor_1.keyframes({
    '0%': {
        transform: 'scale(1.1)',
    },
    '100%': {
        transform: 'scale(1.0)',
    },
    '25%': {
        transform: `translateY(-${riseAmount})`,
    },
    '50%': {
        transform: 'scale(0.4)',
    },
    '75%': {
        transform: `translateY(${riseAmount})`,
    },
    '99%': {
        transform: 'translateY(0)',
    },
});
const ballPulseRiseOdd = glamor_1.keyframes({
    '0%': {
        transform: 'scale(0.4)',
    },
    '100%': {
        transform: 'scale(0.75)',
    },
    '25%': {
        transform: `translateY(${riseAmount})`,
    },
    '50%': {
        transform: 'scale(1.1)',
    },
    '75%': {
        transform: `translateY(-${riseAmount})`,
    },
    '99%': {
        transform: 'translateY(0)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animationDelay: 0,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.15,.46,.9,.6)',
        display: 'inline-block',
        '&:nth-child(2n)': {
            animationName: ballPulseRiseEven,
        },
        '&:nth-child(2n-1)': {
            animationName: ballPulseRiseOdd,
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseRound/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseRound/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallPulseRound/style.js");
class BallPulseRound extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallPulseRound = BallPulseRound;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseRound/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseRound/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const ballPulseRound = glamor_1.keyframes({
    '0%': {
        transform: 'scale(0.0)',
    },
    '100%': {
        transform: 'scale(0.0)',
    },
    '40%': {
        transform: 'scale(1.0)',
    },
    '80%': {
        transform: 'scale(0.0)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${ballPulseRound} 1.2s infinite ease-in-out`,
        height: '10px',
        width: '10px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseSync/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseSync/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallPulseSync/style.js");
class BallPulseSync extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallPulseSync = BallPulseSync;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallPulseSync/style.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallPulseSync/style.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const amount = '10px';
const ballPulseSync = glamor_1.keyframes({
    '100%': {
        transform: 'translateY(0)',
    },
    '33%': {
        transform: `translateY(${amount})`,
    },
    '66%': {
        transform: `translateY(-${amount})`,
    },
});
function ballPulse() {
    const n = 3;
    let i = 1;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animation: `${ballPulseSync} 0.6s ${utilities_1.delay('0.07s', n, i)} infinite ease-in-out`,
        };
    }
    return grid;
}
exports.ballPulse = ballPulse;
exports.default = (color) => glamor_1.css(ballPulse(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallRotate/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallRotate/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallRotate/style.js");
class BallRotate extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallRotate = BallRotate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallRotate/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallRotate/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const rotate = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(0deg) scale(1)',
    },
    '100%': {
        transform: 'rotate(360deg) scale(1)',
    },
    '50%': {
        transform: 'rotate(180deg) scale(.6)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': {
        '&:before, &:after': mixins_1.balls(color),
    },
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    ' > div': {
        position: 'relative',
        '&:first-child': {
            animation: `${rotate} 1s 0s cubic-bezier(.7,-.13,.22,.86) infinite`,
        },
        '&:before, &:after': {
            content: '\'\'',
            opacity: '0.8',
            position: 'absolute',
        },
        '&:before': {
            left: '-28px',
            top: '0px',
        },
        '&:after': {
            left: '25px',
            top: '0px',
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScale/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScale/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallScale/style.js");
class BallScale extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallScale = BallScale;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScale/style.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScale/style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const ballScale = glamor_1.keyframes({
    '0%': {
        transform: 'scale(0.0)',
    },
    '100%': {
        opacity: 0,
        transform: 'scale(1.0)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${ballScale} 1s 0s ease-in-out infinite`,
        display: 'inline-block',
        height: '60px',
        width: '60px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleMultiple/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleMultiple/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallScaleMultiple/style.js");
class BallScaleMultiple extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallScaleMultiple = BallScaleMultiple;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleMultiple/style.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleMultiple/style.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const size = '60px';
const ballScaleMultiple = glamor_1.keyframes({
    '0%': {
        opacity: '0',
        transform: 'scale(0.0)',
    },
    '100%': {
        opacity: '0',
        transform: 'scale(1.0)',
    },
    '5%': {
        opacity: '1',
    },
});
function ballScale() {
    const n = 3;
    let i = 2;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animationDelay: utilities_1.delay('0.2s', n, i),
        };
    }
    return grid;
}
exports.ballScale = ballScale;
exports.default = (color) => glamor_1.css(ballScale(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translateY(-${size} / 2)`,
    ' > div': {
        animation: `${ballScaleMultiple} 1s 0s linear infinite`,
        height: size,
        left: '-30px',
        margin: '0',
        opacity: '0',
        position: 'absolute',
        top: '0px',
        width: size,
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRandom/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRandom/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallScaleRandom/style.js");
class BallScaleRandom extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallScaleRandom = BallScaleRandom;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRandom/style.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRandom/style.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const ballBeat = glamor_1.keyframes({
    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '50%': {
        opacity: 0.2,
        transform: 'scale(0.75)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        '&:nth-child(2n-1)': {
            animationDelay: '-0.35s',
        },
        animation: `${ballBeat} 0.7s 0s infinite linear`,
        backgroundColor: color ? color : variables_1.PRIMARY_COLOR,
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRipple/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRipple/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallScaleRipple/style.js");
class BallScaleRipple extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallScaleRipple = BallScaleRipple;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRipple/style.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRipple/style.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const ballScaleRipple = glamor_1.keyframes({
    '0%': {
        opacity: 1,
        transform: 'scale(0.1)',
    },
    '100%': {
        opacity: 0.0,
    },
    '70%': {
        opacity: 0.7,
        transform: 'scale(1)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${ballScaleRipple} 1s 0s infinite cubic-bezier(.21,.53,.56,.8)`,
        border: `2px solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderRadius: '100%',
        height: '50px',
        width: '50px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/style.js");
class BallScaleRippleMultiple extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallScaleRippleMultiple = BallScaleRippleMultiple;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/style.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/style.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const size = '50px';
const ballScaleRippleMultiple = glamor_1.keyframes({
    '0%': {
        opacity: 1,
        transform: 'scale(0.1)',
    },
    '100%': {
        opacity: 0.0,
    },
    '70%': {
        opacity: 0.7,
        transform: 'scale(1)',
    },
});
function ballScaleRipple() {
    const n = 3;
    let i = 0;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animationDelay: utilities_1.delay('0.2s', n, i - 1),
        };
    }
    return grid;
}
exports.default = (color) => glamor_1.css(ballScaleRipple(), {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translateY(-${parseInt(size, 10) / 2})`,
    ' > div': {
        animation: `${ballScaleRippleMultiple} 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8)`,
        border: `2px solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderRadius: '100%',
        height: size,
        left: '-26px',
        position: 'absolute',
        top: '-2px',
        width: size,
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/style.js");
class BallSpinFadeLoader extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallSpinFadeLoader = BallSpinFadeLoader;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/style.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/style.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const radius = '25px';
const ballSpinFade = glamor_1.keyframes({
    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '50%': {
        opacity: 0.3,
        transform: 'scale(0.4)',
    },
});
function ballSpinFadeLoader() {
    const n = 8;
    let i = 1;
    const grid = {};
    for (; i < 9; i += 1) {
        const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);
        if (i === 1) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: 0,
                top: radius,
            };
        }
        else if (i === 2) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: quarter,
                top: quarter,
            };
        }
        else if (i === 3) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: radius,
                top: 0,
            };
        }
        else if (i === 4) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: quarter,
                top: `-${quarter}px`,
            };
        }
        else if (i === 5) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: 0,
                top: `-${radius}`,
            };
        }
        else if (i === 6) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: `-${quarter}px`,
                top: `-${quarter}px`,
            };
        }
        else if (i === 7) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: `-${radius}`,
                top: 0,
            };
        }
        else if (i === 8) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpinFade} 1s ${utilities_1.delay('0.12s', n, i - 1)} infinite linear`,
                left: `-${quarter}px`,
                top: quarter,
            };
        }
    }
    return grid;
}
exports.default = (color) => glamor_1.css(ballSpinFadeLoader(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    left: '-10px',
    position: 'relative',
    top: '-10px',
    ' > div': {
        position: 'absolute',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallSpinLoader/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallSpinLoader/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallSpinLoader/style.js");
class BallSpinLoader extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallSpinLoader = BallSpinLoader;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallSpinLoader/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallSpinLoader/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const radius = '45px';
const ballSpin = glamor_1.keyframes({
    '100%': {
        opacity: 1,
    },
    '75%': {
        opacity: 0.2,
    },
});
function ballSpinLoader() {
    let i = 1;
    const grid = {};
    for (; i < 9; i += 1) {
        const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);
        if (i === 1) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)} infinite linear`,
                left: 0,
                top: radius,
            };
        }
        else if (i === 2) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: quarter,
                top: quarter,
            };
        }
        else if (i === 3) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: radius,
                top: 0,
            };
        }
        else if (i === 4) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: quarter,
                top: `-${quarter}px`,
            };
        }
        else if (i === 5) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: 0,
                top: `-${radius}`,
            };
        }
        else if (i === 6) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: `-${quarter}px`,
                top: `-${quarter}px`,
            };
        }
        else if (i === 7) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: `-${radius}`,
                top: 0,
            };
        }
        else if (i === 8) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${ballSpin} 2s ${(i * 0.9)}s infinite linear`,
                left: `-${quarter}px`,
                top: quarter,
            };
        }
    }
    return grid;
}
exports.default = (color) => glamor_1.css(ballSpinLoader(), {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    ' > div': {
        background: color ? color : variables_1.PRIMARY_COLOR,
        borderRadius: '100%',
        height: '15px',
        position: 'absolute',
        width: '15px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallTrianglePath/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallTrianglePath/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallTrianglePath/style.js");
class BallTrianglePath extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallTrianglePath = BallTrianglePath;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallTrianglePath/style.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallTrianglePath/style.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const amount = '50px';
const ballTrianglePath1 = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0px, 0px)',
    },
    '33%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '66%': {
        transform: `translate(${amount}, 0px)`,
    },
});
const ballTrianglePath2 = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0px, 0px)',
    },
    '33%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '66%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
});
const ballTrianglePath3 = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0px, 0px)',
    },
    '33%': {
        transform: `translate(-${amount}, 0px)`,
    },
    '66%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
});
function ballTrianglePath() {
    const animations = [ballTrianglePath1, ballTrianglePath2, ballTrianglePath3];
    let i = 1;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animationDelay: 0,
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationName: animations[i - 1],
            animationTimingFunction: 'ease-in-out',
        };
    }
    return grid;
}
exports.default = (color) => glamor_1.css(ballTrianglePath(), {
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translate(-${parseInt(amount, 10) / 1.667}px, -${parseInt(amount, 10) / 1.333}px)`,
    ' > div': {
        border: `1px solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderRadius: '100%',
        height: '10px',
        position: 'absolute',
        width: '10px',
        '&:nth-of-type(1)': {
            top: amount,
        },
        '&:nth-of-type(2)': {
            left: `${parseInt(amount, 10) / 2}px`,
        },
        '&:nth-of-type(3)': {
            left: amount,
            top: amount,
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallZigZag/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallZigZag/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallZigZag/style.js");
class BallZigZag extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallZigZag = BallZigZag;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallZigZag/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallZigZag/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const amount = '30px';
const ballZig = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '33%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '66%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
});
const ballZag = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '33%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '66%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${parseInt(amount, 10) / 2}px)`,
    ' > div': {
        left: '-7px',
        marginLeft: (parseInt(amount, 10) / 2),
        position: 'absolute',
        top: '4px',
        '&:first-child': {
            animation: `${ballZig} 0.7s 0s infinite linear`,
        },
        '&:last-child': {
            animation: `${ballZag} 0.7s 0s infinite linear`,
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallZigZagDeflect/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallZigZagDeflect/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/BallZigZagDeflect/style.js");
class BallZigZagDeflect extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.BallZigZagDeflect = BallZigZagDeflect;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/BallZigZagDeflect/style.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/BallZigZagDeflect/style.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const amount = '30px';
const ballZigDeflect = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '17%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '34%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '50%': {
        transform: 'translate(0, 0)',
    },
    '67%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, -${amount})`,
    },
    '84%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, -${amount})`,
    },
});
const ballZagDeflect = glamor_1.keyframes({
    '100%': {
        transform: 'translate(0, 0)',
    },
    '17%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '34%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '50%': {
        transform: 'translate(0, 0)',
    },
    '67%': {
        transform: `translate(-${parseInt(amount, 10) / 2}px, ${amount})`,
    },
    '84%': {
        transform: `translate(${parseInt(amount, 10) / 2}px, ${amount})`,
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}px, -${parseInt(amount, 10) / 2}px)`,
    ' > div': {
        left: '-7px',
        marginLeft: (parseInt(amount, 10) / 2),
        position: 'absolute',
        top: '4px',
        '&:first-child': {
            animation: `${ballZigDeflect} 1.5s 0s infinite linear`,
        },
        '&:last-child': {
            animation: `${ballZagDeflect} 1.5s 0s infinite linear`,
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/CubeTransition/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/CubeTransition/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/CubeTransition/style.js");
class CubeTransition extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.CubeTransition = CubeTransition;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/CubeTransition/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/CubeTransition/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const amount = '50px';
const size = '10px';
const ballBeat = glamor_1.keyframes({
    '100%': {
        transform: 'rotate(-360deg)',
    },
    '25%': {
        transform: `translateX(${amount}) scale(0.5) rotate(-90deg)`,
    },
    '50%': {
        transform: `translate(${amount}, ${amount}) rotate(-180deg)`,
    },
    '75%': {
        transform: `translateY(${amount}) scale(0.5) rotate(-270deg)`,
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    position: 'relative',
    transform: `translate(-${parseInt(amount, 10) / 2}, -${parseInt(amount, 10) / 2})`,
    ' > div': {
        animation: `${ballBeat} 1.6s 0s infinite ease-in-out`,
        backgroundColor: color ? color : variables_1.PRIMARY_COLOR,
        height: size,
        left: '-5px',
        position: 'absolute',
        top: '-5px',
        width: size,
        '&:last-child': {
            animationDelay: '-0.8s',
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScale/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScale/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineScale/style.js");
class LineScale extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineScale = LineScale;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScale/style.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScale/style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const ballBeat = glamor_1.keyframes({
    '0%': {
        transform: 'scaley(1.0)',
    },
    '100%': {
        transform: 'scaley(1.0)',
    },
    '50%': {
        transform: 'scaley(0.4)',
    },
});
function lineScale() {
    const n = 5;
    let i = 1;
    const grid = {};
    for (; i < 10; i += 1) {
        grid[`> div:nth-child(${i})`] = {
            animation: `${ballBeat} 1s ${utilities_1.delay('0.1s', n, i)} infinite cubic-bezier(.2,.68,.18,1.08)`,
        };
    }
    return grid;
}
exports.default = (color) => glamor_1.css(lineScale(), {
    ' > div': mixins_1.lines(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScaleParty/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScaleParty/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineScaleParty/style.js");
class LineScaleParty extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineScaleParty = LineScaleParty;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScaleParty/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScaleParty/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const ballBeat = glamor_1.keyframes({
    '100%': {
        opacity: 1,
        transform: 'scale(1)',
    },
    '50%': {
        opacity: 0.2,
        transform: 'scale(0.75)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.balls(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        '&:nth-child(2n-1)': {
            animationDelay: '-0.35s',
        },
        animation: `${ballBeat} 0.7s 0s infinite linear`,
        backgroundColor: color ? color : variables_1.PRIMARY_COLOR,
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScalePulseOut/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScalePulseOut/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineScalePulseOut/style.js");
class LineScalePulseOut extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineScalePulseOut = LineScalePulseOut;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScalePulseOut/style.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScalePulseOut/style.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const lineScalePulseOut = glamor_1.keyframes({
    '0%': {
        transform: 'scaley(1.0)',
    },
    '100%': {
        transform: 'scaley(1.0)',
    },
    '50%': {
        transform: 'scaley(0.4)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.lines(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        // tslint:disable-next-line: max-line-length
        animation: `${lineScalePulseOut} 0.9s ${utilities_1.delay('0.2s', 3, 0)} infinite cubic-bezier(.85,.25,.37,.85)`,
        display: 'inline-block',
        '&:nth-child(2), &:nth-child(4)': {
            animationDelay: `${utilities_1.delay('0.2s', 3, 1)} !important`,
        },
        '&:nth-child(1), &:nth-child(5)': {
            animationDelay: `${utilities_1.delay('0.2s', 3, 2)} !important`,
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/style.js");
class LineScalePulseOutRapid extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineScalePulseOutRapid = LineScalePulseOutRapid;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/style.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/style.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const lineScalePulseOutRapid = glamor_1.keyframes({
    '0%': {
        transform: 'scaley(1.0)',
    },
    '80%': {
        transform: 'scaley(0.3)',
    },
    '90%': {
        transform: 'scaley(1.0)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.lines(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${lineScalePulseOutRapid} 0.9s -0.5s infinite cubic-bezier(.11,.49,.38,.78)`,
        display: 'inline-block',
        verticalAlign: 'middle',
        '&:nth-child(2), &:nth-child(4)': {
            animationDelay: '-0.25s !important',
        },
        '&:nth-child(1), &:nth-child(5)': {
            animationDelay: '0s !important',
        },
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScaleRandom/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScaleRandom/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineScaleRandom/style.js");
class LineScaleRandom extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineScaleRandom = LineScaleRandom;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineScaleRandom/style.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineScaleRandom/style.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const random = 0.5;
const ballBeat = glamor_1.keyframes({
    '0%': {
        transform: 'scale(1.0)',
    },
    '100%': {
        transform: 'scale(1.0)',
    },
    '50%': {
        transform: `scale(${random})`,
    },
});
function lineScale() {
    let i = 1;
    const grid = {};
    for (; i < 5; i += 1) {
        const delay = ((parseInt((Math.random() * 100).toString(), 10) / 100) - 0.2);
        const duration = ((parseInt((Math.random() * 100).toString(), 10) / 100) + 0.3);
        grid[` > div:nth-child(${i})`] = {
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        };
    }
    return grid;
}
exports.default = (color) => glamor_1.css(lineScale(), {
    ' > div': mixins_1.lines(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animationDelay: '0',
        animationIterationCount: 'infinite',
        animationName: ballBeat,
        display: 'inline-block',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/style.js");
class LineSpinFadeLoader extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.LineSpinFadeLoader = LineSpinFadeLoader;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/style.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/style.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const radius = '20px';
const lineSpinFade = glamor_1.keyframes({
    '100%': {
        opacity: 1,
    },
    '50%': {
        opacity: 0.3,
    },
});
function lineSpinFadeLoader() {
    const n = 8;
    let i = 1;
    const grid = {};
    for (; i < 9; i += 1) {
        const quarter = (parseInt(radius, 10) / 2) + (parseInt(radius, 10) / 5.5);
        if (i === 1) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: 0,
                top: radius,
            };
        }
        else if (i === 2) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: quarter,
                top: quarter,
                transform: 'rotate(-45deg)',
            };
        }
        else if (i === 3) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: radius,
                top: 0,
                transform: 'rotate(90deg)',
            };
        }
        else if (i === 4) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: quarter,
                top: `-${quarter}`,
                transform: 'rotate(45deg)',
            };
        }
        else if (i === 5) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: '0',
                top: `-${radius}`,
            };
        }
        else if (i === 6) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: `-${quarter}`,
                top: `-${quarter}`,
                transform: 'rotate(-45deg)',
            };
        }
        else if (i === 7) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: `-${radius}`,
                top: '0',
                transform: 'rotate(90deg)',
            };
        }
        else if (i === 8) {
            grid[`> div:nth-child(${i})`] = {
                animation: `${lineSpinFade} 1.2s ${utilities_1.delay('0.12s', n, i)} infinite ease-in-out`,
                left: `-${quarter}`,
                top: quarter,
                transform: 'rotate(45deg)',
            };
        }
    }
    return grid;
}
exports.default = (color) => glamor_1.css(lineSpinFadeLoader(), {
    ' > div': mixins_1.lines(color),
}, {
    ' > div': mixins_1.globalAnimation(),
}, {
    left: '-4px',
    position: 'relative',
    top: '-10px',
    ' > div': {
        height: '15px',
        position: 'absolute',
        width: '5px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/Pacman/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/Pacman/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/Pacman/style.js");
class Pacman extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.Pacman = Pacman;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/Pacman/style.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/Pacman/style.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const utilities_1 = __webpack_require__(/*! ../utilities */ "./node_modules/react-pure-loaders/lib/utilities/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const size = '25px';
const rotatePacmanHalfUp = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(270deg)',
    },
    '100%': {
        transform: 'rotate(270deg)',
    },
    '50%': {
        transform: 'rotate(360deg)',
    },
});
const rotatePacmanHalfDown = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(90deg)',
    },
    '100%': {
        transform: 'rotate(90deg)',
    },
    '50%': {
        transform: 'rotate(0deg)',
    },
});
const pacmanBalls = glamor_1.keyframes({
    '100%': {
        transform: `translate(-${4 * parseInt(size, 10)}px, -${parseInt(size, 10) / 4}px)`,
    },
    '75%': {
        opacity: 0.7,
    },
});
function pacmanDesign(color) {
    return {
        borderBottom: `${size} solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderLeft: `${size} solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderRadius: size,
        borderRight: `${size} solid transparent`,
        borderTop: `${size} solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        height: '0px',
        width: '0px',
    };
}
function ballPlacement() {
    const n = 3;
    let i = 0;
    const grid = {};
    for (; i < 4; i += 1) {
        grid[`> div:nth-child(${i + 2})`] = {
            animation: `${pacmanBalls} 1s ${utilities_1.delay('.33s', n, i)} infinite linear`,
        };
    }
    return grid;
}
exports.default = (color) => glamor_1.css(ballPlacement(), {
    position: 'relative',
    ' > div:first-of-type': glamor_1.css(pacmanDesign(color), {
        animation: `${rotatePacmanHalfUp} 0.5s 0s infinite`,
        left: '-30px',
        position: 'relative',
    }),
    ' > div:nth-child(2)': glamor_1.css(pacmanDesign(color), {
        animation: `${rotatePacmanHalfDown} 0.5s 0s infinite`,
        left: '-30px',
        marginTop: (-2 * parseInt(size, 10)),
        position: 'relative',
    }),
    ' > div:nth-child(3), > div:nth-child(4), > div:nth-child(5), > div:nth-child(6)': glamor_1.css(mixins_1.balls(color), {
        height: '10px',
        left: '70px',
        position: 'absolute',
        top: '25px',
        transform: `translate(0,-${parseInt(size, 10) / 4}px)`,
        width: '10px',
    }),
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/SemiCircleSpin/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/SemiCircleSpin/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/SemiCircleSpin/style.js");
class SemiCircleSpin extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.SemiCircleSpin = SemiCircleSpin;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/SemiCircleSpin/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/SemiCircleSpin/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const size = '35px';
const pos = 30;
const spinRotate = glamor_1.keyframes({
    '0%': {
        transform: 'rotate(0deg)',
    },
    '100%': {
        transform: 'rotate(360deg)',
    },
    '50%': {
        transform: 'rotate(180deg)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    height: size,
    overflow: 'hidden',
    position: 'relative',
    width: size,
    ' > div': {
        animation: `${spinRotate} 0.6s 0s infinite linear`,
        // tslint:disable-next-line: max-line-length
        backgroundImage: `linear-gradient(transparent 0%, transparent ${(100 - pos)}%, ${color ? color : variables_1.PRIMARY_COLOR} ${pos}%, ${color ? color : variables_1.PRIMARY_COLOR} 100%)`,
        borderRadius: '100%',
        borderWidth: '0px',
        height: '100%',
        position: 'absolute',
        width: '100%',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/SquareSpin/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/SquareSpin/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/SquareSpin/style.js");
class SquareSpin extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.SquareSpin = SquareSpin;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/SquareSpin/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/SquareSpin/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const squareSpin = glamor_1.keyframes({
    '100%': {
        transform: 'perspective(100px) rotateX(0) rotateY(0)',
    },
    '25%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(0)',
    },
    '50%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)',
    },
    '75%': {
        transform: 'perspective(100px) rotateX(0) rotateY(180deg)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${squareSpin} 3s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
        background: color ? color : variables_1.PRIMARY_COLOR,
        height: '50px',
        width: '50px',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/TriangleSkewSpin/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/TriangleSkewSpin/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const style_1 = __webpack_require__(/*! ./style */ "./node_modules/react-pure-loaders/lib/TriangleSkewSpin/style.js");
class TriangleSkewSpin extends React.PureComponent {
    render() {
        const { color, loading } = this.props;
        if (loading) {
            return (React.createElement("div", Object.assign({}, glamor_1.css(style_1.default(color))),
                React.createElement("div", null)));
        }
        return null;
    }
}
exports.TriangleSkewSpin = TriangleSkewSpin;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/TriangleSkewSpin/style.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/TriangleSkewSpin/style.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const mixins_1 = __webpack_require__(/*! ../mixins */ "./node_modules/react-pure-loaders/lib/mixins/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
const size = '20px';
const triangleSkewSpin = glamor_1.keyframes({
    '100%': {
        transform: 'perspective(100px) rotateX(0) rotateY(0)',
    },
    '25%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(0)',
    },
    '50%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)',
    },
    '75%': {
        transform: 'perspective(100px) rotateX(0) rotateY(180deg)',
    },
});
exports.default = (color) => glamor_1.css({
    ' > div': mixins_1.globalAnimation(),
}, {
    ' > div': {
        animation: `${triangleSkewSpin} 3s 0s cubic-bezier(.09,.57,.49,.9) infinite`,
        borderBottom: `${size} solid ${color ? color : variables_1.PRIMARY_COLOR}`,
        borderLeft: `${size} solid transparent`,
        borderRight: `${size} solid transparent`,
        height: '0',
        width: '0',
    },
});
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dots
 */
var BallBeat_1 = __webpack_require__(/*! ./BallBeat */ "./node_modules/react-pure-loaders/lib/BallBeat/index.js");
exports.BallBeat = BallBeat_1.BallBeat;
var BallClipRotate_1 = __webpack_require__(/*! ./BallClipRotate */ "./node_modules/react-pure-loaders/lib/BallClipRotate/index.js");
exports.BallClipRotate = BallClipRotate_1.BallClipRotate;
var BallClipRotateMultiple_1 = __webpack_require__(/*! ./BallClipRotateMultiple */ "./node_modules/react-pure-loaders/lib/BallClipRotateMultiple/index.js");
exports.BallClipRotateMultiple = BallClipRotateMultiple_1.BallClipRotateMultiple;
var BallClipRotatePulse_1 = __webpack_require__(/*! ./BallClipRotatePulse */ "./node_modules/react-pure-loaders/lib/BallClipRotatePulse/index.js");
exports.BallClipRotatePulse = BallClipRotatePulse_1.BallClipRotatePulse;
var BallGridBeat_1 = __webpack_require__(/*! ./BallGridBeat */ "./node_modules/react-pure-loaders/lib/BallGridBeat/index.js");
exports.BallGridBeat = BallGridBeat_1.BallGridBeat;
var BallGridPulse_1 = __webpack_require__(/*! ./BallGridPulse */ "./node_modules/react-pure-loaders/lib/BallGridPulse/index.js");
exports.BallGridPulse = BallGridPulse_1.BallGridPulse;
var BallPulse_1 = __webpack_require__(/*! ./BallPulse */ "./node_modules/react-pure-loaders/lib/BallPulse/index.js");
exports.BallPulse = BallPulse_1.BallPulse;
var BallPulseRise_1 = __webpack_require__(/*! ./BallPulseRise */ "./node_modules/react-pure-loaders/lib/BallPulseRise/index.js");
exports.BallPulseRise = BallPulseRise_1.BallPulseRise;
var BallPulseRound_1 = __webpack_require__(/*! ./BallPulseRound */ "./node_modules/react-pure-loaders/lib/BallPulseRound/index.js");
exports.BallPulseRound = BallPulseRound_1.BallPulseRound;
var BallPulseSync_1 = __webpack_require__(/*! ./BallPulseSync */ "./node_modules/react-pure-loaders/lib/BallPulseSync/index.js");
exports.BallPulseSync = BallPulseSync_1.BallPulseSync;
var BallRotate_1 = __webpack_require__(/*! ./BallRotate */ "./node_modules/react-pure-loaders/lib/BallRotate/index.js");
exports.BallRotate = BallRotate_1.BallRotate;
var BallScale_1 = __webpack_require__(/*! ./BallScale */ "./node_modules/react-pure-loaders/lib/BallScale/index.js");
exports.BallScale = BallScale_1.BallScale;
var BallScaleMultiple_1 = __webpack_require__(/*! ./BallScaleMultiple */ "./node_modules/react-pure-loaders/lib/BallScaleMultiple/index.js");
exports.BallScaleMultiple = BallScaleMultiple_1.BallScaleMultiple;
var BallScaleRandom_1 = __webpack_require__(/*! ./BallScaleRandom */ "./node_modules/react-pure-loaders/lib/BallScaleRandom/index.js");
exports.BallScaleRandom = BallScaleRandom_1.BallScaleRandom;
var BallScaleRipple_1 = __webpack_require__(/*! ./BallScaleRipple */ "./node_modules/react-pure-loaders/lib/BallScaleRipple/index.js");
exports.BallScaleRipple = BallScaleRipple_1.BallScaleRipple;
var BallScaleRippleMultiple_1 = __webpack_require__(/*! ./BallScaleRippleMultiple */ "./node_modules/react-pure-loaders/lib/BallScaleRippleMultiple/index.js");
exports.BallScaleRippleMultiple = BallScaleRippleMultiple_1.BallScaleRippleMultiple;
var BallSpinFadeLoader_1 = __webpack_require__(/*! ./BallSpinFadeLoader */ "./node_modules/react-pure-loaders/lib/BallSpinFadeLoader/index.js");
exports.BallSpinFadeLoader = BallSpinFadeLoader_1.BallSpinFadeLoader;
var BallSpinLoader_1 = __webpack_require__(/*! ./BallSpinLoader */ "./node_modules/react-pure-loaders/lib/BallSpinLoader/index.js");
exports.BallSpinLoader = BallSpinLoader_1.BallSpinLoader;
var BallTrianglePath_1 = __webpack_require__(/*! ./BallTrianglePath */ "./node_modules/react-pure-loaders/lib/BallTrianglePath/index.js");
exports.BallTrianglePath = BallTrianglePath_1.BallTrianglePath;
var BallZigZag_1 = __webpack_require__(/*! ./BallZigZag */ "./node_modules/react-pure-loaders/lib/BallZigZag/index.js");
exports.BallZigZag = BallZigZag_1.BallZigZag;
var BallZigZagDeflect_1 = __webpack_require__(/*! ./BallZigZagDeflect */ "./node_modules/react-pure-loaders/lib/BallZigZagDeflect/index.js");
exports.BallZigZagDeflect = BallZigZagDeflect_1.BallZigZagDeflect;
/**
 * Lines
 */
var LineScale_1 = __webpack_require__(/*! ./LineScale */ "./node_modules/react-pure-loaders/lib/LineScale/index.js");
exports.LineScale = LineScale_1.LineScale;
var LineScaleParty_1 = __webpack_require__(/*! ./LineScaleParty */ "./node_modules/react-pure-loaders/lib/LineScaleParty/index.js");
exports.LineScaleParty = LineScaleParty_1.LineScaleParty;
var LineScalePulseOut_1 = __webpack_require__(/*! ./LineScalePulseOut */ "./node_modules/react-pure-loaders/lib/LineScalePulseOut/index.js");
exports.LineScalePulseOut = LineScalePulseOut_1.LineScalePulseOut;
var LineScalePulseOutRapid_1 = __webpack_require__(/*! ./LineScalePulseOutRapid */ "./node_modules/react-pure-loaders/lib/LineScalePulseOutRapid/index.js");
exports.LineScalePulseOutRapid = LineScalePulseOutRapid_1.LineScalePulseOutRapid;
var LineScaleRandom_1 = __webpack_require__(/*! ./LineScaleRandom */ "./node_modules/react-pure-loaders/lib/LineScaleRandom/index.js");
exports.LineScaleRandom = LineScaleRandom_1.LineScaleRandom;
var LineSpinFadeLoader_1 = __webpack_require__(/*! ./LineSpinFadeLoader */ "./node_modules/react-pure-loaders/lib/LineSpinFadeLoader/index.js");
exports.LineSpinFadeLoader = LineSpinFadeLoader_1.LineSpinFadeLoader;
/**
 * Misc
 */
var CubeTransition_1 = __webpack_require__(/*! ./CubeTransition */ "./node_modules/react-pure-loaders/lib/CubeTransition/index.js");
exports.CubeTransition = CubeTransition_1.CubeTransition;
var Pacman_1 = __webpack_require__(/*! ./Pacman */ "./node_modules/react-pure-loaders/lib/Pacman/index.js");
exports.Pacman = Pacman_1.Pacman;
var SemiCircleSpin_1 = __webpack_require__(/*! ./SemiCircleSpin */ "./node_modules/react-pure-loaders/lib/SemiCircleSpin/index.js");
exports.SemiCircleSpin = SemiCircleSpin_1.SemiCircleSpin;
var SquareSpin_1 = __webpack_require__(/*! ./SquareSpin */ "./node_modules/react-pure-loaders/lib/SquareSpin/index.js");
exports.SquareSpin = SquareSpin_1.SquareSpin;
var TriangleSkewSpin_1 = __webpack_require__(/*! ./TriangleSkewSpin */ "./node_modules/react-pure-loaders/lib/TriangleSkewSpin/index.js");
exports.TriangleSkewSpin = TriangleSkewSpin_1.TriangleSkewSpin;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/mixins/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/mixins/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
const variables_1 = __webpack_require__(/*! ../variables */ "./node_modules/react-pure-loaders/lib/variables/index.js");
function globalBg(color) {
    return {
        backgroundColor: color ? color : variables_1.PRIMARY_COLOR,
    };
}
exports.globalBg = globalBg;
function globalAnimation() {
    return {
        animationFillMode: 'both',
    };
}
exports.globalAnimation = globalAnimation;
function balls(color) {
    return glamor_1.css({
        borderRadius: '100%',
        height: variables_1.BALL_SIZE,
        margin: variables_1.MARGIN,
        width: variables_1.BALL_SIZE,
    }, globalBg(color));
}
exports.balls = balls;
function ballGrid() {
    let i = 1;
    const grid = {};
    for (; i < 10; i += 1) {
        const delay = ((parseInt((Math.random() * 100).toString(), 10) / 100) - 0.2);
        const duration = ((parseInt((Math.random() * 100).toString(), 10) / 100) + 0.6);
        grid[` > div:nth-child(${i})`] = {
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        };
    }
    return grid;
}
exports.ballGrid = ballGrid;
function lines(color) {
    return glamor_1.css({
        borderRadius: '2px',
        height: variables_1.LINE_HEIGHT,
        margin: variables_1.MARGIN,
        width: variables_1.LINE_WIDTH,
    }, globalBg(color));
}
exports.lines = lines;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/utilities/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/utilities/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(interval, count, index) {
    return `${((index * parseFloat(interval)) - (parseFloat(interval) * count)).toFixed(2)}s`;
}
exports.delay = delay;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-pure-loaders/lib/variables/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-pure-loaders/lib/variables/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PRIMARY_COLOR = '#ffffff';
exports.BALL_SIZE = '15px';
exports.MARGIN = '2px';
exports.LINE_HEIGHT = '35px';
exports.LINE_WIDTH = '4px';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ })

}]);
//# sourceMappingURL=1.js.map