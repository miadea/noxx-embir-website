webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./components/Header.js");







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
      e.preventDefault();
      var hackerCount = _this.state.hackerCount;
      if (hackerCount) alert("Copyright \xA9 2019 Noxx Embir. You have done this ".concat(++hackerCount, " times. Your IP Address has been logged."));else alert("Copyright © 2019 Noxx Embir.");

      _this.setState({
        hackerCount: hackerCount
      });

      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "keypress", function (e) {
      var hackerCount = _this.state.hackerCount;
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "drag", function (e) {
      e.preventDefault();
      if (hackerCount++) alert("Copyright © 2019 Noxx Embir.");

      _this.setState({
        hackerCount: hackerCount
      });

      var hackerCount = _this.state.hackerCount;
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-712866214" + " " + 'layout',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "description",
        content: "Noxx Embir works with clients to provide high quality product photography and digital retouching. Contact Noxx to discuss any project ideas.",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "fsilsDoagPiiPSunzPwNGRuLcOQ_leWm6GhsJ1oCb9o",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.ico",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.title || "Noxx Embir")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-712866214" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "712866214",
        __self: this
      }, "body{background:black;color:white;margin:0px;padding:0px;font-family:'Lato',sans-serif;}.layout{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.main{-webkit-flex:1;-ms-flex:1;flex:1;display:block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;padding-top:52px;}@-webkit-keyframes appear{0%{opacity:0;}100%{opacity:1;}}@keyframes appear{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@-webkit-keyframes shrink{0%{width:95%;}100%{width:90%;}}@keyframes shrink{0%{width:95%;}100%{width:90%;}}.header-desktop{display:none;}.example-appear{opacity:0.01;}.example-appear.example-appear-active{opacity:1;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;-webkit-transition-delay:0.5s;transition-delay:0.5s;}.contact-container{background-color:#1a1a1a;min-height:calc(100vh - 52px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.contact-subcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}.contact{border-radius:5px;padding:10px;margin-right:20px;margin-left:20px;margin-bottom:30px;-webkit-flex:1;-ms-flex:1;flex:1;}.contact input[type=text],.contact input[type=email],.contact select,.contact textarea{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-top:6px;margin-bottom:16px;resize:vertical;font-size:1rem;}#message{height:100px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:100%;-webkit-appearance:none;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1rem;font-family:'Roboto Slab',serif;-webkit-flex:1;-ms-flex:1;flex:1;padding:20px;line-height:200%;text-align:center;}.contact-footer{background-color:black;padding:20px 0 20px 50px;color:gray;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media only screen and (max-width:701px){.contact-subcontainer{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (min-width:1101px){.ReactGridGallery_tile-viewport:hover{background:black;}.ReactGridGallery_tile-viewport:hover img{opacity:0.7;}.main{padding-top:0px;}.header-desktop{width:100vw;display:block;}.header-mobile{display:none !important;}.contact-container{min-height:calc(100vh - 100px);}.contact{padding:70px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:20%;min-width:100px;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1.3rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:200%;padding:70px;margin-right:60px;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hc3RvdW1lbi9kZXYvbm94eC1lbWJpci13ZWJzaXRlL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0QyQixBQUc4QixBQU9DLEFBU1gsQUFVSyxBQUdBLEFBS2dCLEFBR0YsQUFLZCxBQUdBLEFBS0MsQUFJQSxBQUlILEFBTWUsQUFPWixBQUtLLEFBU1AsQUFZRSxBQUlZLEFBYUEsQUFJVixBQVNRLEFBVVMsQUFNYixBQUdMLEFBTUksQUFJSixBQUlZLEFBSU8sQUFJbEIsQUFJWSxBQWFBLEFBSVIsVUFsS25CLEFBR0EsQUFhQSxBQUdBLEFBYTJCLENBMkJkLENBNkRiLEFBVWdCLENBMUdsQixBQUlBLEFBMkNBLEFBdUVFLEVBbERpQyxDQWtDakMsQ0F4SlksQUErSVosQUE4Q3FCLENBdExmLEFBcUVPLEtBbURZLENBdkhsQixBQThFZSxBQTBFdEIsQ0FoRzhCLEFBcUNsQixBQWFkLEFBMERnQixBQWFkLENBNUJBLEdBNUpXLEVBUUUsQUFvRUssQUF1RmxCLEVBcEpjLElBc0ZJLEFBdUVFLEdBM0tULE1BcUZPLENBdEVJLEFBc0dmLENBU0ksQ0FsRE0sR0EzRWMsR0E4RGxCLEFBc0NELEFBdUVFLElBN0NELEtBekNTLEVBVEgsQ0F5QkQsQUF1RUUsS0FwSEUsRUFZZixNQWlETSxFQXBIZixFQWlDRSxDQTJDTyxBQXlCUSxBQXVFRSxDQXZGRixJQXZEZixHQXVGaUIsT0FmRixBQXVFRSxDQXZGRSxDQStDbkIsR0EvSHNCLEVBOER4QixHQWtEb0IsQUFvRUMsS0FuRkksQUF1RUUsR0FqRzNCLEVBVWtCLElBL0JsQixDQTFDcUIsRUE2S0osQ0FwRWpCLENBekR3QixJQWdFSCxHQXRDSixJQW9HSyxXQW5HdEIsT0FvR29CLGdCQUNsQixTQXZMbUIsYUFpR1IsQUF1RUMsVUFDTSxDQWpIcEIsQUEwQzJCLFdBMUZiLElBa0taLElBbERGLElBL0dlLENBMEZmLFlBekZtQixpQkFDbkIsZ0JBVmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvZW1tYXN0b3VtZW4vZGV2L25veHgtZW1iaXItd2Vic2l0ZS9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7aGFja2VyQ291bnQ6IDB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmNvbnRleHRNZW51KTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZyk7XG4gIH1cbiAgY29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQge2hhY2tlckNvdW50fSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoaGFja2VyQ291bnQpIGFsZXJ0KGBDb3B5cmlnaHQgwqkgMjAxOSBOb3h4IEVtYmlyLiBZb3UgaGF2ZSBkb25lIHRoaXMgJHsrK2hhY2tlckNvdW50fSB0aW1lcy4gWW91ciBJUCBBZGRyZXNzIGhhcyBiZWVuIGxvZ2dlZC5gKTtcbiAgICBlbHNlIGFsZXJ0KFwiQ29weXJpZ2h0IMKpIDIwMTkgTm94eCBFbWJpci5cIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aGFja2VyQ291bnR9KVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBrZXlwcmVzcyA9IChlKSA9PiB7XG4gICAgbGV0IHtoYWNrZXJDb3VudH0gPSB0aGlzLnN0YXRlXG4gICAgaWYoZS5jdHJsS2V5ICYmIGUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09ICdJJy5jaGFyQ29kZUF0KDApKXJldHVybiBmYWxzZTtcbiAgICBpZihlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT0gJ0onLmNoYXJDb2RlQXQoMCkpIHJldHVybiBmYWxzZTtcbiAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09ICdVJy5jaGFyQ29kZUF0KDApKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZHJhZyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChoYWNrZXJDb3VudCsrKSBhbGVydChcIkNvcHlyaWdodCDCqSAyMDE5IE5veHggRW1iaXIuXCIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2hhY2tlckNvdW50fSlcbiAgICBsZXQge2hhY2tlckNvdW50fSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJOb3h4IEVtYmlyIHdvcmtzIHdpdGggY2xpZW50cyB0byBwcm92aWRlIGhpZ2ggcXVhbGl0eSBwcm9kdWN0IHBob3RvZ3JhcGh5IGFuZCBkaWdpdGFsIHJldG91Y2hpbmcuIENvbnRhY3QgTm94eCB0byBkaXNjdXNzIGFueSBwcm9qZWN0IGlkZWFzLlwiLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImZzaWxzRG9hZ1BpaVBTdW56UHdOR1J1TGNPUV9sZVdtNkdoc0oxb0NiOW9cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK1NsYWI6MzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8dGl0bGU+eyB0aGlzLnByb3BzLnRpdGxlIHx8IFwiTm94eCBFbWJpclwiIH08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmcgMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgYXBwZWFyIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc2hyaW5rIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItZGVza3RvcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5leGFtcGxlLWFwcGVhciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5leGFtcGxlLWFwcGVhci5leGFtcGxlLWFwcGVhci1hY3RpdmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTJweCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdC1zdWJjb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3QgaW5wdXRbdHlwZT10ZXh0XSwgLmNvbnRhY3QgaW5wdXRbdHlwZT1lbWFpbF0sIC5jb250YWN0IHNlbGVjdCwgLmNvbnRhY3QgdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7IC8qIFNvbWUgcGFkZGluZyAqL1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogR3JheSBib3JkZXIgKi9cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luICovXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXG4gICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOyAvKiBBbGxvdyB0aGUgdXNlciB0byB2ZXJ0aWNhbGx5IHJlc2l6ZSB0aGUgdGV4dGFyZWEgKG5vdCBob3Jpem9udGFsbHkpICovXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI21lc3NhZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwZDEyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0LWZvb3RlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDUwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDFweCkge1xuICAgICAgICAgICAgLmNvbnRhY3Qtc3ViY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMXB4KSB7XG4gICAgICAgICAgICAuUmVhY3RHcmlkR2FsbGVyeV90aWxlLXZpZXdwb3J0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuUmVhY3RHcmlkR2FsbGVyeV90aWxlLXZpZXdwb3J0OmhvdmVyIGltZyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYXlvdXQge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLWRlc2t0b3Age1xuXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLW1vYmlsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhY3QgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MGQxMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/emmastoumen/dev/noxx-embir-website/components/MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8453c0b96bc893e8a5f9.hot-update.js.map