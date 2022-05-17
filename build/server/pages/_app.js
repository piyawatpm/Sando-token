(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants/seo-constants.ts":
/*!****************************************!*\
  !*** ./src/constants/seo-constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getURL": () => (/* binding */ getURL),
/* harmony export */   "SEO": () => (/* binding */ SEO)
/* harmony export */ });
const getURL = () => {
  var _process, _process$env, _process2, _process2$env;

  const url = (_process = process) !== null && _process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env.URL && process.env.URL !== '' ? process.env.URL : (_process2 = process) !== null && _process2 !== void 0 && (_process2$env = _process2.env) !== null && _process2$env !== void 0 && _process2$env.VERCEL_URL && process.env.VERCEL_URL !== '' ? process.env.VERCEL_URL : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};
const DEFAULT_TITLE = '';
const DEFAULT_TITLE_TEMPLATE = 'Sando | %s';
const DEFAULT_DESCRIPTION = 'Token';
const DEFAULT_CANONICAL = getURL();
const SITE_NAME = 'Sando';
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/preview.png`;
const FAVICON_LINK = '/favicon.ico';
const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK
};

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @badrap/bar-of-progress */ "@badrap/bar-of-progress");
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_seo_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/seo-constants */ "./src/constants/seo-constants.ts");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\sando\\tt\\Sando-token\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_0___default())({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100
});
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', progress.start);
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => {
  progress.finish();
  window.scrollTo(0, 0);
});
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', progress.finish);
const {
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK
} = _constants_seo_constants__WEBPACK_IMPORTED_MODULE_6__.SEO;
const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();

function MyApp({
  Component,
  pageProps,
  router
}) {
  var _layoutProps;

  const canonicalPath = router.pathname === '/' ? '' : router.pathname;
  const url = `${DEFAULT_CANONICAL}${canonicalPath}`;
  const Layout = ((_layoutProps = Component.layoutProps) === null || _layoutProps === void 0 ? void 0 : _layoutProps.Layout) || react__WEBPACK_IMPORTED_MODULE_3__.Fragment;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, {
      title: DEFAULT_TITLE,
      titleTemplate: DEFAULT_TITLE_TEMPLATE,
      description: DEFAULT_DESCRIPTION,
      canonical: url,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url,
        site_name: SITE_NAME,
        title: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        images: [{
          url: DEFAULT_OG_IMAGE,
          alt: SITE_NAME
        }]
      },
      additionalLinkTags: [{
        rel: 'shortcut icon',
        href: FAVICON_LINK
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: queryClient,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Layout, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__.ReactQueryDevtools, {
        initialIsOpen: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@badrap/bar-of-progress":
/*!******************************************!*\
  !*** external "@badrap/bar-of-progress" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NhbmRvLVRva2VuLy4vc3JjL2NvbnN0YW50cy9zZW8tY29uc3RhbnRzLnRzIiwid2VicGFjazovL1NhbmRvLVRva2VuLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL1NhbmRvLVRva2VuLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9TYW5kby1Ub2tlbi9leHRlcm5hbCBcIkBiYWRyYXAvYmFyLW9mLXByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vU2FuZG8tVG9rZW4vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL1NhbmRvLVRva2VuL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9TYW5kby1Ub2tlbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vU2FuZG8tVG9rZW4vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovL1NhbmRvLVRva2VuL2V4dGVybmFsIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIiIsIndlYnBhY2s6Ly9TYW5kby1Ub2tlbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRVUkwgPSAoKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB1cmwgPVxyXG4gICAgcHJvY2Vzcz8uZW52Py5VUkwgJiYgcHJvY2Vzcy5lbnYuVVJMICE9PSAnJ1xyXG4gICAgICA/IHByb2Nlc3MuZW52LlVSTFxyXG4gICAgICA6IHByb2Nlc3M/LmVudj8uVkVSQ0VMX1VSTCAmJiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMICE9PSAnJ1xyXG4gICAgICA/IHByb2Nlc3MuZW52LlZFUkNFTF9VUkxcclxuICAgICAgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG4gIHJldHVybiB1cmwuaW5jbHVkZXMoJ2h0dHAnKSA/IHVybCA6IGBodHRwczovLyR7dXJsfWBcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9USVRMRSA9ICcnXHJcbmNvbnN0IERFRkFVTFRfVElUTEVfVEVNUExBVEUgPSAnU2FuZG8gfCAlcydcclxuY29uc3QgREVGQVVMVF9ERVNDUklQVElPTiA9ICdUb2tlbidcclxuY29uc3QgREVGQVVMVF9DQU5PTklDQUwgPSBnZXRVUkwoKVxyXG5jb25zdCBTSVRFX05BTUUgPSAnU2FuZG8nXHJcbmNvbnN0IERFRkFVTFRfT0dfSU1BR0UgPSBgJHtERUZBVUxUX0NBTk9OSUNBTH0vcHJldmlldy5wbmdgXHJcbmNvbnN0IEZBVklDT05fTElOSyA9ICcvZmF2aWNvbi5pY28nXHJcblxyXG5leHBvcnQgY29uc3QgU0VPID0ge1xyXG4gIERFRkFVTFRfVElUTEUsXHJcbiAgREVGQVVMVF9USVRMRV9URU1QTEFURSxcclxuICBERUZBVUxUX0RFU0NSSVBUSU9OLFxyXG4gIERFRkFVTFRfQ0FOT05JQ0FMLFxyXG4gIFNJVEVfTkFNRSxcclxuICBERUZBVUxUX09HX0lNQUdFLFxyXG4gIEZBVklDT05fTElOSyxcclxufVxyXG4iLCJpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3MnXHJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcclxuXHJcbmltcG9ydCB7IFNFTyB9IGZyb20gJ0AvY29uc3RhbnRzL3Nlby1jb25zdGFudHMnXHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5jb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0Jhcih7XHJcbiAgc2l6ZTogMixcclxuICBjb2xvcjogJyMyMkQzRUUnLFxyXG4gIGNsYXNzTmFtZTogJ2Jhci1vZi1wcm9ncmVzcycsXHJcbiAgZGVsYXk6IDEwMCxcclxufSlcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBwcm9ncmVzcy5zdGFydClcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICBwcm9ncmVzcy5maW5pc2goKVxyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG59KVxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgcHJvZ3Jlc3MuZmluaXNoKVxyXG5cclxuY29uc3Qge1xyXG4gIERFRkFVTFRfVElUTEVfVEVNUExBVEUsXHJcbiAgREVGQVVMVF9ERVNDUklQVElPTixcclxuICBERUZBVUxUX0NBTk9OSUNBTCxcclxuICBTSVRFX05BTUUsXHJcbiAgREVGQVVMVF9USVRMRSxcclxuICBERUZBVUxUX09HX0lNQUdFLFxyXG4gIEZBVklDT05fTElOSyxcclxufSA9IFNFT1xyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGNhbm9uaWNhbFBhdGggPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICcnIDogcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3QgdXJsID0gYCR7REVGQVVMVF9DQU5PTklDQUx9JHtjYW5vbmljYWxQYXRofWBcclxuICBjb25zdCBMYXlvdXQgPVxyXG4gICAgKFxyXG4gICAgICBDb21wb25lbnQgYXMgdHlwZW9mIENvbXBvbmVudCAmIHtcclxuICAgICAgICBsYXlvdXRQcm9wczoge1xyXG4gICAgICAgICAgTGF5b3V0OiAocHJvcHM6IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9ICYgdW5rbm93bikgPT4gSlNYLkVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICkubGF5b3V0UHJvcHM/LkxheW91dCB8fCBGcmFnbWVudFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGVmYXVsdFNlb1xyXG4gICAgICAgIHRpdGxlPXtERUZBVUxUX1RJVExFfVxyXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9e0RFRkFVTFRfVElUTEVfVEVNUExBVEV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e0RFRkFVTFRfREVTQ1JJUFRJT059XHJcbiAgICAgICAgY2Fub25pY2FsPXt1cmx9XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAgICAgICBsb2NhbGU6ICdlbl9VUycsXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBzaXRlX25hbWU6IFNJVEVfTkFNRSxcclxuICAgICAgICAgIHRpdGxlOiBTSVRFX05BTUUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogREVGQVVMVF9ERVNDUklQVElPTixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBERUZBVUxUX09HX0lNQUdFLFxyXG4gICAgICAgICAgICAgIGFsdDogU0lURV9OQU1FLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFkZGl0aW9uYWxMaW5rVGFncz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZWw6ICdzaG9ydGN1dCBpY29uJyxcclxuICAgICAgICAgICAgaHJlZjogRkFWSUNPTl9MSU5LLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJnZXRVUkwiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwiVkVSQ0VMX1VSTCIsImluY2x1ZGVzIiwiREVGQVVMVF9USVRMRSIsIkRFRkFVTFRfVElUTEVfVEVNUExBVEUiLCJERUZBVUxUX0RFU0NSSVBUSU9OIiwiREVGQVVMVF9DQU5PTklDQUwiLCJTSVRFX05BTUUiLCJERUZBVUxUX09HX0lNQUdFIiwiRkFWSUNPTl9MSU5LIiwiU0VPIiwiUHJvZ3Jlc3NCYXIiLCJEZWZhdWx0U2VvIiwiUm91dGVyIiwiRnJhZ21lbnQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJwcm9ncmVzcyIsInNpemUiLCJjb2xvciIsImNsYXNzTmFtZSIsImRlbGF5IiwiZXZlbnRzIiwib24iLCJzdGFydCIsImZpbmlzaCIsIndpbmRvdyIsInNjcm9sbFRvIiwicXVlcnlDbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImNhbm9uaWNhbFBhdGgiLCJwYXRobmFtZSIsIkxheW91dCIsImxheW91dFByb3BzIiwidHlwZSIsImxvY2FsZSIsInNpdGVfbmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJhbHQiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==