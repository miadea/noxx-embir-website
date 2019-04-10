webpackHotUpdate("static/development/pages/architecture.js",{

/***/ "./components/mobile/header.js":
/*!*************************************!*\
  !*** ./components/mobile/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileHeader; });
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/kestanous/dev/play/noxx-embir-website/components/mobile/header.js";



var MobileHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MobileHeader, _React$Component);

  function MobileHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MobileHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "styles", {
      logo: {
        margin: '0 auto'
      },
      linkStyle: {
        marginRight: 15
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MobileHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open,
          styles = this.styles;
      var menuItems = this.props.links.map(function (_ref, i) {
        var name = _ref.name,
            url = _ref.url;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuItem, {
          key: url,
          onClick: _this2.handleLinkClick,
          delay: "".concat(i * 0.1, "s"),
          url: url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, " ", name, " ");
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "header-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuButton, {
        open: open,
        onClick: function onClick() {
          return _this2.handleMenuClick();
        },
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Logo")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Menu, {
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, menuItems));
    }
  }, {
    key: "handleLinkClick",
    value: function handleLinkClick() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleMenuClick",
    value: function handleMenuClick() {
      this.setState({
        open: !this.state.open
      });
    }
  }]);

  return MobileHeader;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/* MenuItem.jsx*/




var MenuItem =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuItem, _React$Component2);

  function MenuItem(props) {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuItem);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuItem).call(this, props));
    _this3.state = {
      hover: false
    };
    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuItem, [{
    key: "handleHover",
    value: function handleHover() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var styles = {
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay: this.props.delay
        },
        menuItem: {
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover ? 'gray' : '#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay: this.props.delay
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay: this.props.delay
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.menuItem,
        onMouseEnter: function onMouseEnter() {
          _this4.handleHover();
        },
        onMouseLeave: function onMouseLeave() {
          _this4.handleHover();
        },
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.line,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }
  }]);

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Menu =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Menu, _React$Component3);

  function Menu(props) {
    var _this5;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Menu);

    _this5 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu).call(this, props));
    _this5.state = {
      open: _this5.props.open ? _this5.props.open : false
    };
    return _this5;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: this.state.open ? '100%' : 0,
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          opacity: 0.95,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2
        },
        menuList: {
          paddingTop: '3rem'
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, this.state.open ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.menuList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, this.props.children) : null);
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/* MenuButton.jsx */


var MenuButton =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MenuButton, _React$Component4);

  function MenuButton(props) {
    var _this6;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MenuButton);

    _this6 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuButton).call(this, props));
    _this6.state = {
      open: _this6.props.open ? _this6.props.open : false,
      color: _this6.props.color ? _this6.props.color : 'black'
    };
    return _this6;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var styles = {
        container: {
          height: '32px',
          width: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px'
        },
        line: {
          height: '2px',
          width: '20px',
          background: this.state.color,
          transition: 'all 0.2s ease'
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)' : 'none',
          transformOrigin: 'top left',
          marginBottom: '5px'
        },
        lineMiddle: {
          opacity: this.state.open ? 0 : 1,
          transform: this.state.open ? 'translateX(-16px)' : 'none'
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
          transformOrigin: 'top left',
          marginTop: '5px'
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: styles.container,
        onClick: this.props.onClick ? this.props.onClick : function () {
          _this7.handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineTop),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineMiddle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineBottom),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }));
    }
  }]);

  return MenuButton;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/***/ })

})
//# sourceMappingURL=architecture.js.a197f32fbdae6faa7b53.hot-update.js.map