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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./components/Header.js");





var _jsxFileName = "/Users/emmastoumen/dev/noxx-embir-website/components/MyLayout.js";





var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.addEventListener('contextmenu', this.contextMenu);
      document.body.addEventListener('keydown', this.keypress);
      document.body.addEventListener('dragstart', this.drag);
    }
  }, {
    key: "contextMenu",
    value: function contextMenu(e) {
      e.preventDefault();
      alert("Copyright © 2019 Noxx Embir. Your IP Address has been logged.");
      return false;
    }
  }, {
    key: "keypress",
    value: function keypress(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    }
  }, {
    key: "drag",
    value: function drag(e) {
      e.preventDefault();
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-712866214" + " " + 'layout',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "description",
        content: "Noxx Embir works with clients to provide high quality product photography and digital retouching. Contact Noxx to discuss any project ideas.",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "fsilsDoagPiiPSunzPwNGRuLcOQ_leWm6GhsJ1oCb9o",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.ico",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab:300",
        rel: "stylesheet",
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.title || "Noxx Embir")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "jsx-712866214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-712866214" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "712866214",
        __self: this
      }, "body{background:black;color:white;margin:0px;padding:0px;font-family:'Lato',sans-serif;}.layout{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.main{-webkit-flex:1;-ms-flex:1;flex:1;display:block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;padding-top:52px;}@-webkit-keyframes appear{0%{opacity:0;}100%{opacity:1;}}@keyframes appear{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideIn{0%{-webkit-transform:translateX(-2%);-ms-transform:translateX(-2%);transform:translateX(-2%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@-webkit-keyframes shrink{0%{width:95%;}100%{width:90%;}}@keyframes shrink{0%{width:95%;}100%{width:90%;}}.header-desktop{display:none;}.example-appear{opacity:0.01;}.example-appear.example-appear-active{opacity:1;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;-webkit-transition-delay:0.5s;transition-delay:0.5s;}.contact-container{background-color:#1a1a1a;min-height:calc(100vh - 52px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.contact-subcontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}.contact{border-radius:5px;padding:10px;margin-right:20px;margin-left:20px;margin-bottom:30px;-webkit-flex:1;-ms-flex:1;flex:1;}.contact input[type=text],.contact input[type=email],.contact select,.contact textarea{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-top:6px;margin-bottom:16px;resize:vertical;font-size:1rem;}#message{height:100px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:100%;-webkit-appearance:none;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1rem;font-family:'Roboto Slab',serif;-webkit-flex:1;-ms-flex:1;flex:1;padding:20px;line-height:200%;text-align:center;}.contact-footer{background-color:black;padding:20px 0 20px 50px;color:gray;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media only screen and (max-width:701px){.contact-subcontainer{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (min-width:1101px){.ReactGridGallery_tile-viewport:hover{background:black;}.ReactGridGallery_tile-viewport:hover img{opacity:0.7;}.main{padding-top:0px;}.header-desktop{width:100vw;display:block;}.header-mobile{display:none !important;}.contact-container{min-height:calc(100vh - 100px);}.contact{padding:70px;}.contact input[type=submit]{background-color:#ed1c24;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;font-size:1rem;-webkit-align-self:flex-center;-ms-flex-item-align:center;align-self:flex-center;width:20%;min-width:100px;}.contact input[type=submit]:hover{background-color:#a50d12;}.about{font-size:1.3rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:200%;padding:70px;margin-right:60px;text-align:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hc3RvdW1lbi9kZXYvbm94eC1lbWJpci13ZWJzaXRlL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUMyQixBQUc4QixBQU9DLEFBU1gsQUFVSyxBQUdBLEFBS2dCLEFBR0YsQUFLZCxBQUdBLEFBS0MsQUFJQSxBQUlILEFBTWUsQUFPWixBQUtLLEFBU1AsQUFZRSxBQUlZLEFBYUEsQUFJVixBQVNRLEFBVVMsQUFNYixBQUdMLEFBTUksQUFJSixBQUlZLEFBSU8sQUFJbEIsQUFJWSxBQWFBLEFBSVIsVUFsS25CLEFBR0EsQUFhQSxBQUdBLEFBYTJCLENBMkJkLENBNkRiLEFBVWdCLENBMUdsQixBQUlBLEFBMkNBLEFBdUVFLEVBbERpQyxDQWtDakMsQ0F4SlksQUErSVosQUE4Q3FCLENBdExmLEFBcUVPLEtBbURZLENBdkhsQixBQThFZSxBQTBFdEIsQ0FoRzhCLEFBcUNsQixBQWFkLEFBMERnQixBQWFkLENBNUJBLEdBNUpXLEVBUUUsQUFvRUssQUF1RmxCLEVBcEpjLElBc0ZJLEFBdUVFLEdBM0tULE1BcUZPLENBdEVJLEFBc0dmLENBU0ksQ0FsRE0sR0EzRWMsR0E4RGxCLEFBc0NELEFBdUVFLElBN0NELEtBekNTLEVBVEgsQ0F5QkQsQUF1RUUsS0FwSEUsRUFZZixNQWlETSxFQXBIZixFQWlDRSxDQTJDTyxBQXlCUSxBQXVFRSxDQXZGRixJQXZEZixHQXVGaUIsT0FmRixBQXVFRSxDQXZGRSxDQStDbkIsR0EvSHNCLEVBOER4QixHQWtEb0IsQUFvRUMsS0FuRkksQUF1RUUsR0FqRzNCLEVBVWtCLElBL0JsQixDQTFDcUIsRUE2S0osQ0FwRWpCLENBekR3QixJQWdFSCxHQXRDSixJQW9HSyxXQW5HdEIsT0FvR29CLGdCQUNsQixTQXZMbUIsYUFpR1IsQUF1RUMsVUFDTSxDQWpIcEIsQUEwQzJCLFdBMUZiLElBa0taLElBbERGLElBL0dlLENBMEZmLFlBekZtQixpQkFDbkIsZ0JBVmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvZW1tYXN0b3VtZW4vZGV2L25veHgtZW1iaXItd2Vic2l0ZS9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMuY29udGV4dE1lbnUpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnKTtcbiAgfVxuICBjb250ZXh0TWVudShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KFwiQ29weXJpZ2h0IMKpIDIwMTkgTm94eCBFbWJpci4gWW91ciBJUCBBZGRyZXNzIGhhcyBiZWVuIGxvZ2dlZC5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGtleXByZXNzKGUpIHtcbiAgICBpZihlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT0gJ0knLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGZhbHNlO1xuICAgIGlmKGUuY3RybEtleSAmJiBlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PSAnSicuY2hhckNvZGVBdCgwKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gJ1UnLmNoYXJDb2RlQXQoMCkpIHJldHVybiBmYWxzZTtcbiAgfVxuICBkcmFnKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5veHggRW1iaXIgd29ya3Mgd2l0aCBjbGllbnRzIHRvIHByb3ZpZGUgaGlnaCBxdWFsaXR5IHByb2R1Y3QgcGhvdG9ncmFwaHkgYW5kIGRpZ2l0YWwgcmV0b3VjaGluZy4gQ29udGFjdCBOb3h4IHRvIGRpc2N1c3MgYW55IHByb2plY3QgaWRlYXMuXCIvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZnNpbHNEb2FnUGlpUFN1bnpQd05HUnVMY09RX2xlV202R2hzSjFvQ2I5b1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rU2xhYjozMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIDx0aXRsZT57IHRoaXMucHJvcHMudGl0bGUgfHwgXCJOb3h4IEVtYmlyXCIgfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZyAwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBhcHBlYXIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMiUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBzaHJpbmsge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1kZXNrdG9wIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmV4YW1wbGUtYXBwZWFyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmV4YW1wbGUtYXBwZWFyLmV4YW1wbGUtYXBwZWFyLWFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MnB4KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0LXN1YmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdCBpbnB1dFt0eXBlPXRleHRdLCAuY29udGFjdCBpbnB1dFt0eXBlPWVtYWlsXSwgLmNvbnRhY3Qgc2VsZWN0LCAuY29udGFjdCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDsgLyogU29tZSBwYWRkaW5nICovXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBHcmF5IGJvcmRlciAqL1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE1ha2Ugc3VyZSB0aGF0IHBhZGRpbmcgYW5kIHdpZHRoIHN0YXlzIGluIHBsYWNlICovXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gKi9cbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIEJvdHRvbSBtYXJnaW4gKi9cbiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7IC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbWVzc2FnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3QgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTBkMTI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhY3QtZm9vdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMXB4KSB7XG4gICAgICAgICAgICAuY29udGFjdC1zdWJjb250YWluZXIge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAxcHgpIHtcbiAgICAgICAgICAgIC5SZWFjdEdyaWRHYWxsZXJ5X3RpbGUtdmlld3BvcnQ6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5SZWFjdEdyaWRHYWxsZXJ5X3RpbGUtdmlld3BvcnQ6aG92ZXIgaW1nIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxheW91dCB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItZGVza3RvcCB7XG5cbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDcwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwZDEyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDcwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/emmastoumen/dev/noxx-embir-website/components/MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.cfe4ad95a53d445ca2a8.hot-update.js.map