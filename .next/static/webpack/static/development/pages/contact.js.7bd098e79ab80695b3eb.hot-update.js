webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header */ "./components/Header.js");







var _jsxFileName = "/Users/emmastoumen/dev/noxx-embir-website/components/MyLayout.js";






var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hackerCount: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "contextMenu", function (e) {
      if ('/contact' == _this.props.router.pathname) return true;
      e.preventDefault();
      var hackerCount = _this.state.hackerCount;
      hackerCount = ++hackerCount;
      if (hackerCount > 1) alert("Copyright \xA9 2019 Noxx Embir. You have done this ".concat(hackerCount, " times. Your IP Address may be logged."));else alert("Copyright © 2019 Noxx Embir.");

      _this.setState({
        hackerCount: hackerCount
      });

      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "keypress", function (e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "drag", function (e) {
      var hackerCount = _this.state.hackerCount;
      hackerCount = ++hackerCount;
      e.preventDefault();
      if (hackerCount > 1) alert("Copyright © 2019 Noxx Embir.");

      _this.setState({
        hackerCount: hackerCount
      });

      return false;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.addEventListener('contextmenu', this.contextMenu);
      document.body.addEventListener('keydown', this.keypress);
      document.body.addEventListener('dragstart', this.drag);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-712866214" + " " + 'layout',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "description",
        content: "Noxx Embir works with clients to provide high quality product photography and digital retouching. Contact Noxx to discuss any project ideas.",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "fsilsDoagPiiPSunzPwNGRuLcOQ_leWm6GhsJ1oCb9o",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.ico",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.title || "Noxx Embir")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-712866214" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "712866214",
        __self: this
      }, "body{background:black;color:white;margin:0px;padding:0px;font-family:'Lato',sans-serif;}.layout{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.main{-webkit-flex:1;-ms-flex:1;flex:1;display:block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;padding-top:52px;}@-webkit-keyframes appear{0%{opacity:0;}100%{opacity:1;}}@keyframes appear{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@-webkit-keyframes shrink{0%{width:95%;}100%{width:90%;}}@keyframes shrink{0%{width:95%;}100%{width:90%;}}.header-desktop{display:none;}.example-appear{opacity:0.01;}.example-appear.example-appear-active{opacity:1;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;-webkit-transition-delay:0.5s;transition-delay:0.5s;}.contact-container{background-color:#1a1a1a;min-height:calc(100vh - 52px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.contact-subcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}.contact{border-radius:5px;padding:10px;margin-right:20px;margin-left:20px;margin-bottom:30px;-webkit-flex:1;-ms-flex:1;flex:1;}.contact input[type=text],.contact input[type=email],.contact select,.contact textarea{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-top:6px;margin-bottom:16px;resize:vertical;font-size:1rem;}#message{height:100px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:100%;-webkit-appearance:none;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1rem;font-family:'Roboto Slab',serif;-webkit-flex:1;-ms-flex:1;flex:1;padding:20px;line-height:200%;text-align:center;}.contact-footer{background-color:black;padding:20px 0 20px 50px;color:gray;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media only screen and (max-width:701px){.contact-subcontainer{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (min-width:1101px){.ReactGridGallery_tile-viewport:hover{background:black;}.ReactGridGallery_tile-viewport:hover img{opacity:0.7;}.main{padding-top:0px;}.header-desktop{width:100vw;display:block;}.header-mobile{display:none !important;}.contact-container{min-height:calc(100vh - 100px);}.contact{padding:70px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:20%;min-width:100px;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1.3rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:200%;padding:70px;margin-right:60px;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hc3RvdW1lbi9kZXYvbm94eC1lbWJpci13ZWJzaXRlL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUc4QixBQU9DLEFBU1gsQUFVSyxBQUdBLEFBS2dCLEFBR0YsQUFLZCxBQUdBLEFBS0MsQUFJQSxBQUlILEFBTWUsQUFPWixBQUtLLEFBU1AsQUFZRSxBQUlZLEFBYUEsQUFJVixBQVNRLEFBVVMsQUFNYixBQUdMLEFBTUksQUFJSixBQUlZLEFBSU8sQUFJbEIsQUFJWSxBQWFBLEFBSVIsVUFsS25CLEFBR0EsQUFhQSxBQUdBLEFBYTJCLENBMkJkLENBNkRiLEFBVWdCLENBMUdsQixBQUlBLEFBMkNBLEFBdUVFLEVBbERpQyxDQWtDakMsQ0F4SlksQUErSVosQUE4Q3FCLENBdExmLEFBcUVPLEtBbURZLENBdkhsQixBQThFZSxBQTBFdEIsQ0FoRzhCLEFBcUNsQixBQWFkLEFBMERnQixBQWFkLENBNUJBLEdBNUpXLEVBUUUsQUFvRUssQUF1RmxCLEVBcEpjLElBc0ZJLEFBdUVFLEdBM0tULE1BcUZPLENBdEVJLEFBc0dmLENBU0ksQ0FsRE0sR0EzRWMsR0E4RGxCLEFBc0NELEFBdUVFLElBN0NELEtBekNTLEVBVEgsQ0F5QkQsQUF1RUUsS0FwSEUsRUFZZixNQWlETSxFQXBIZixFQWlDRSxDQTJDTyxBQXlCUSxBQXVFRSxDQXZGRixJQXZEZixHQXVGaUIsT0FmRixBQXVFRSxDQXZGRSxDQStDbkIsR0EvSHNCLEVBOER4QixHQWtEb0IsQUFvRUMsS0FuRkksQUF1RUUsR0FqRzNCLEVBVWtCLElBL0JsQixDQTFDcUIsRUE2S0osQ0FwRWpCLENBekR3QixJQWdFSCxHQXRDSixJQW9HSyxXQW5HdEIsT0FvR29CLGdCQUNsQixTQXZMbUIsYUFpR1IsQUF1RUMsVUFDTSxDQWpIcEIsQUEwQzJCLFdBMUZiLElBa0taLElBbERGLElBL0dlLENBMEZmLFlBekZtQixpQkFDbkIsZ0JBVmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvZW1tYXN0b3VtZW4vZGV2L25veHgtZW1iaXItd2Vic2l0ZS9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7aGFja2VyQ291bnQ6IDB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmNvbnRleHRNZW51KTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZyk7XG4gIH1cbiAgY29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGlmICgnL2NvbnRhY3QnID09IHRoaXMucHJvcHMucm91dGVyLnBhdGhuYW1lKSByZXR1cm4gdHJ1ZTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHtoYWNrZXJDb3VudH0gPSB0aGlzLnN0YXRlXG4gICAgaGFja2VyQ291bnQgPSArK2hhY2tlckNvdW50XG4gICAgaWYgKGhhY2tlckNvdW50ID4gMSkgYWxlcnQoYENvcHlyaWdodCDCqSAyMDE5IE5veHggRW1iaXIuIFlvdSBoYXZlIGRvbmUgdGhpcyAke2hhY2tlckNvdW50fSB0aW1lcy4gWW91ciBJUCBBZGRyZXNzIG1heSBiZSBsb2dnZWQuYCk7XG4gICAgZWxzZSBhbGVydChcIkNvcHlyaWdodCDCqSAyMDE5IE5veHggRW1iaXIuXCIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2hhY2tlckNvdW50fSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAga2V5cHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmKGUuY3RybEtleSAmJiBlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PSAnSScuY2hhckNvZGVBdCgwKSlyZXR1cm4gZmFsc2U7XG4gICAgaWYoZS5jdHJsS2V5ICYmIGUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09ICdKJy5jaGFyQ29kZUF0KDApKSByZXR1cm4gZmFsc2U7XG4gICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSAnVScuY2hhckNvZGVBdCgwKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGRyYWcgPSAoZSkgPT4ge1xuICAgIGxldCB7aGFja2VyQ291bnR9ID0gdGhpcy5zdGF0ZVxuICAgIGhhY2tlckNvdW50ID0gKytoYWNrZXJDb3VudFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaGFja2VyQ291bnQgPiAxKSBhbGVydChcIkNvcHlyaWdodCDCqSAyMDE5IE5veHggRW1iaXIuXCIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2hhY2tlckNvdW50fSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTm94eCBFbWJpciB3b3JrcyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBoaWdoIHF1YWxpdHkgcHJvZHVjdCBwaG90b2dyYXBoeSBhbmQgZGlnaXRhbCByZXRvdWNoaW5nLiBDb250YWN0IE5veHggdG8gZGlzY3VzcyBhbnkgcHJvamVjdCBpZGVhcy5cIi8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJmc2lsc0RvYWdQaWlQU3VuelB3TkdSdUxjT1FfbGVXbTZHaHNKMW9DYjlvXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytTbGFiOjMwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgPHRpdGxlPnsgdGhpcy5wcm9wcy50aXRsZSB8fCBcIk5veHggRW1iaXJcIiB9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nIDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNocmluayB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyLWRlc2t0b3Age1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXhhbXBsZS1hcHBlYXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4wMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXhhbXBsZS1hcHBlYXIuZXhhbXBsZS1hcHBlYXItYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUycHgpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3Qtc3ViY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0IGlucHV0W3R5cGU9dGV4dF0sIC5jb250YWN0IGlucHV0W3R5cGU9ZW1haWxdLCAuY29udGFjdCBzZWxlY3QsIC5jb250YWN0IHRleHRhcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEdyYXkgYm9yZGVyICovXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVycyAqL1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogTWFrZSBzdXJlIHRoYXQgcGFkZGluZyBhbmQgd2lkdGggc3RheXMgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDsgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgLyogQm90dG9tIG1hcmdpbiAqL1xuICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogQWxsb3cgdGhlIHVzZXIgdG8gdmVydGljYWxseSByZXNpemUgdGhlIHRleHRhcmVhIChub3QgaG9yaXpvbnRhbGx5KSAqL1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNtZXNzYWdlIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MGQxMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdC1mb290ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCA1MHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAxcHgpIHtcbiAgICAgICAgICAgIC5jb250YWN0LXN1YmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDFweCkge1xuICAgICAgICAgICAgLlJlYWN0R3JpZEdhbGxlcnlfdGlsZS12aWV3cG9ydDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlJlYWN0R3JpZEdhbGxlcnlfdGlsZS12aWV3cG9ydDpob3ZlciBpbWcge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGF5b3V0IHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1kZXNrdG9wIHtcblxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1tb2JpbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWN0IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTBkMTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExheW91dClcbiJdfQ== */\n/*@ sourceURL=/Users/emmastoumen/dev/noxx-embir-website/components/MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Layout));

/***/ })

})
//# sourceMappingURL=contact.js.7bd098e79ab80695b3eb.hot-update.js.map