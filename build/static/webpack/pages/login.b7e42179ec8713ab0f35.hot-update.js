"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var status;\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    defaultValues: {\n      email: \"\",\n      password: \"\"\n    }\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  console.log(watch(\"email\")); // you can watch individual input by pass the name of the input\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    email: \"\",\n    password: \"\"\n  }),\n      check = _useState[0],\n      setCheck = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-full h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"flex items-center justify-center pb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n            src: \"/images/sando-logo.png\",\n            alt: \"sando logo image\",\n            className: \"w-12 h-12\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: \"text-2xl ml-2 text-white font-extrabold\",\n            children: \"SANDO TOKEN\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          className: \"text-xl font-bold\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n          className: \"pt-3\",\n          onSubmit: handleSubmit(function (data) {\n            alert(JSON.stringify(data));\n          }),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Email address \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              ref: true\n            }, register(\"email\", {\n              required: true\n            })), {}, {\n              type: \"email\",\n              name: \"email\",\n              onChange: handleInputChange,\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 19\n              }, _this), \"This field is required\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Password \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 26\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              minLength: 8\n            }, register(\"password\", {\n              required: true,\n              minLength: 8\n            })), {}, {\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2\",\n              name: \"password\",\n              type: \"password\",\n              id: \"password\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, _this), \"This field is required.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center my-5 \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              className: \"text-[#65FFA3] underline   \",\n              children: \"Forget password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n              value: \"Login\",\n              disabled: status //onClick={onClickHandler}\n              ,\n              type: \"submit\",\n              className: \"cursor-pointer   items-end bg-[#FF0090] hover:bg-[#db037e] text-white text-sm font-bold py-2 px-10 rounded-3xl  \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"Don't have an account?\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/register\",\n              className: \"underline font-bold\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"w-full my-5 flex justify-center items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"mx-1\",\n              children: \"or Login with\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center space-x-7\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/google-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 160,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/facebook-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 163,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 162,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"Tt4zfxpqTdfslcKcl2kLn8zv1os=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = Login;\nLogin.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nfunction formValue(formValue, arg1) {\n  throw new Error(\"Function not implemented.\");\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFDLGlDQUFUO0FBQTJDLG1CQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEhELENBbktEOztHQUFNRDtVQWlCQUY7OztLQWpCQUU7QUFxS05BLEtBQUssQ0FBQzJCLFdBQU4sR0FBb0I7QUFDbEJDLEVBQUFBLE1BQU0sRUFBRTdCLDBEQUFVQTtBQURBLENBQXBCO0FBR0EsK0RBQWVDLEtBQWY7O0FBQ0ksU0FBUzZCLFNBQVQsQ0FBbUJBLFNBQW5CLEVBQW1DQyxJQUFuQyxFQUE0RTtBQUN4RSxRQUFNLElBQUlDLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwic3JjL2xheW91dC9NYWluTGF5b3V0XCI7XG5cblxuXG5cbmNvbnN0IExvZ2luID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblxuXG5cblxuXG5cblxuXG5cbiAgbGV0IHN0YXR1cztcblxuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cod2F0Y2goXCJlbWFpbFwiKSk7IC8vIHlvdSBjYW4gd2F0Y2ggaW5kaXZpZHVhbCBpbnB1dCBieSBwYXNzIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxuXG5cbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q2hlY2soe1xuICAgICAgLi4uY2hlY2ssXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgbXgtYXV0byBiZy1bIzE3MTcxN10gdy05NiBoLWZpdCByb3VuZGVkLTJ4bCBwLTUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcGItM1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NhbmRvLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwic2FuZG8gbG9nbyBpbWFnZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1sLTIgdGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZFwiPlxuICAgICAgICAgICAgICBTQU5ETyBUT0tFTlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTNcIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgcmVmXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICBQYXNzd29yZCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17OH1cbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDggfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHRleHQtYmxhY2sgdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC1yZWQtNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA4djRtMCA0aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG15LTUgXCI+XG4gICAgICAgICAgICAgIHsvKiBUT0RPIGFkZCBGb3JnZXQgcGFzc3dvcmQgZnVuY3Rpb24gKi99XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1bIzY1RkZBM10gdW5kZXJsaW5lICAgXCI+XG4gICAgICAgICAgICAgICAgRm9yZ2V0IHBhc3N3b3JkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0YXR1c31cbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICAgaXRlbXMtZW5kIGJnLVsjRkYwMDkwXSBob3ZlcjpiZy1bI2RiMDM3ZV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBweS0yIHB4LTEwIHJvdW5kZWQtM3hsICBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInVuZGVybGluZSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteS01IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctMS8zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIj5vciBMb2dpbiB3aXRoPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy0xLzNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtN1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy9nb29nbGUtaWNvbi5zdmdcIiBhbHQ9XCJnb29nbGUtaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvZmFjZWJvb2staWNvbi5zdmdcIiBhbHQ9XCJnb29nbGUtaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkxvZ2luLmxheW91dFByb3BzID0ge1xuICBMYXlvdXQ6IE1haW5MYXlvdXQsXG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4gICAgZnVuY3Rpb24gZm9ybVZhbHVlKGZvcm1WYWx1ZTogYW55LCBhcmcxOiB7IHVzZXJuYW1lOiBhbnk7IHBhc3N3b3JkOiBhbnk7IH0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJNYWluTGF5b3V0IiwiTG9naW4iLCJzdGF0dXMiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJzZXRDaGVjayIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJsYXlvdXRQcm9wcyIsIkxheW91dCIsImZvcm1WYWx1ZSIsImFyZzEiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ })

});