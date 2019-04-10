webpackHotUpdate(1,{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/lib/Lightbox.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/emmastoumen/dev/noxx-embir-website/components/_gallery.js";






var GalleryPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GalleryPage, _React$Component);

  function GalleryPage() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GalleryPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(GalleryPage).call(this));

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

    _this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      width: window.innerWidth
    };
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
      var isMobile = this.state.width <= 500;

      if (isMobile) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, this.props.images.map(function (image, i) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            src: image.thumbnail.thumbnail,
            key: image.thumbnail.thumbnail,
            style: {
              width: "100%",
              border: 0,
              verticalAlign: "middle",
              marginBottom: 5
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          });
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-532496462",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "block",
          minHeight: 1,
          width: "100%",
          overflow: "auto"
        },
        className: "jsx-532496462",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_12___default.a, {
        images: this.props.images.map(function (_ref2) {
          var lightbox = _ref2.lightbox;
          return lightbox;
        }),
        backdropClosesModal: true // preventScroll={false}
        ,
        onClose: this.closeLightbox,
        onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "532496462",
        __self: this
      }, "img.jsx-532496462{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hc3RvdW1lbi9kZXYvbm94eC1lbWJpci13ZWJzaXRlL2NvbXBvbmVudHMvX2dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQixBQUVxQywyRUFBQyIsImZpbGUiOiIvVXNlcnMvZW1tYXN0b3VtZW4vZGV2L25veHgtZW1iaXItd2Vic2l0ZS9jb21wb25lbnRzL19nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IEdhbGxlcnkgZnJvbSBcInJlYWN0LWdyaWQtZ2FsbGVyeVwiO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnlQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50SW1hZ2U6IDAsXG4gICAgICBsaWdodGJveElzT3BlbjogZmFsc2UsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc01vYmlsZSA9IHRoaXMuc3RhdGUud2lkdGggPD0gNTAwO1xuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pbWFnZXMubWFwKChpbWFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtpbWFnZS50aHVtYm5haWwudGh1bWJuYWlsfSBrZXk9e2ltYWdlLnRodW1ibmFpbC50aHVtYm5haWx9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA1XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgIG1pbkhlaWdodDogMSxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiXG4gICAgICAgIH19PlxuICAgICAgICAgIDxHYWxsZXJ5IG9uQ2xpY2s9e3RoaXMub3BlbkxpZ2h0Ym94fVxuICAgICAgICAgICAgZW5hYmxlSW1hZ2VTZWxlY3Rpb249e2ZhbHNlfVxuICAgICAgICAgICAgZW5hYmxlTGlnaHRib3g9e2ZhbHNlfVxuICAgICAgICAgICAgcm93SGVpZ2h0PXs0NTB9XG4gICAgICAgICAgICBvbkNsaWNrVGh1bWJuYWlsPXt0aGlzLm9wZW5MaWdodGJveH1cbiAgICAgICAgICAgIGltYWdlcz17dGhpcy5wcm9wcy5pbWFnZXMubWFwKCh7dGh1bWJuYWlsfSkgPT4gKHsuLi50aHVtYm5haWwsIHNyYzogJyd9KSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGlnaHRib3ggaW1hZ2VzPXt0aGlzLnByb3BzLmltYWdlcy5tYXAoKHtsaWdodGJveH0pID0+IGxpZ2h0Ym94ICl9XG4gICAgICAgICAgYmFja2Ryb3BDbG9zZXNNb2RhbFxuICAgICAgICAgIC8vIHByZXZlbnRTY3JvbGw9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VMaWdodGJveH1cbiAgICAgICAgICBvbkNsaWNrUHJldj17dGhpcy5nb3RvUHJldmlvdXN9XG4gICAgICAgICAgb25DbGlja05leHQ9e3RoaXMuZ290b05leHR9XG4gICAgICAgICAgY3VycmVudEltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZX1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubGlnaHRib3hJc09wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgfVxuICBvcGVuTGlnaHRib3ggPSAoY3VycmVudEltYWdlLCBldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50SW1hZ2UsIGxpZ2h0Ym94SXNPcGVuOiB0cnVlIH0pO1xuICB9XG4gIGNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50SW1hZ2U6IDAsXG4gICAgICBsaWdodGJveElzT3BlbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cbiAgZ290b1ByZXZpb3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEltYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZSAtIDEsXG4gICAgfSk7XG4gIH1cbiAgZ290b05leHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlICsgMSxcbiAgICB9KTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/emmastoumen/dev/noxx-embir-website/components/_gallery.js */"));
    }
  }]);

  return GalleryPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=1.df815dce97d42e63475c.hot-update.js.map