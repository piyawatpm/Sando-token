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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var status;\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    mode: \"onChange\",\n    defaultValues: {\n      email: \"\",\n      password: \"\"\n    }\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors,\n      isLoading = _useForm.isLoading;\n\n  var onSubmit = handleSubmit(function (email, password) {\n    if (email !== \"aa@gmail.com\" && password !== \"aaaaaaaaa\") {\n      alert(JSON.stringify(\"incorrect\"));\n    } else alert(JSON.stringify(email, password));\n\n    console.log(email, password);\n  });\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }, _this);\n  }\n\n  console.log(watch(\"email\")); // you can watch individual input by pass the name of the input\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    email: \"\",\n    password: \"\"\n  }),\n      check = _useState[0],\n      setCheck = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-full h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"flex items-center justify-center pb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n            src: \"/images/sando-logo.png\",\n            alt: \"sando logo image\",\n            className: \"w-12 h-12\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: \"text-2xl ml-2 text-white font-extrabold\",\n            children: \"SANDO TOKEN\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          className: \"text-xl font-bold\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n          className: \"pt-3\",\n          onSubmit: onSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Email address \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"email\", {\n              required: true\n            })), {}, {\n              type: \"email\",\n              name: \"email\",\n              onChange: handleInputChange,\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 19\n              }, _this), \"This field is required\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Password \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 26\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              minLength: 8\n            }, register(\"password\", {\n              required: true,\n              minLength: 8\n            })), {}, {\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2\",\n              name: \"password\",\n              type: \"password\",\n              id: \"password\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, _this), \"This field is required.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center my-5 \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              className: \"text-[#65FFA3] underline   \",\n              children: \"Forget password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n              value: \"Login\",\n              disabled: status //onClick={onClickHandler}\n              ,\n              type: \"submit\",\n              className: \"cursor-pointer   items-end bg-[#FF0090] hover:bg-[#db037e] text-white text-sm font-bold py-2 px-10 rounded-3xl  \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"Don't have an account?\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/register\",\n              className: \"underline font-bold\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 149,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"w-full my-5 flex justify-center items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"mx-1\",\n              children: \"or Login with\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center space-x-7\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/google-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 160,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/facebook-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 163,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 162,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"mwsSEcXf++Nst/YrP7Lj49yDlP8=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = Login;\nLogin.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ0U7QUFBSSx1QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUNzQyxHQUR0QyxlQUVFO0FBQU0sdUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUU4QyxHQUY5QyxlQUdFO0FBQUksdUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJGRixlQTBGRTtBQUFLLHFCQUFTLEVBQUMsNENBQWY7QUFBQSxvQ0FDRTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFBLHFDQUNFO0FBQUssbUJBQUcsRUFBQywrQkFBVDtBQUF5QyxtQkFBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsaUNBQVQ7QUFBMkMsbUJBQUcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzSEQsQ0FqS0Q7O0dBQU1EO1VBU0FGOzs7S0FUQUU7QUFtS05BLEtBQUssQ0FBQzZCLFdBQU4sR0FBb0I7QUFDbEJDLEVBQUFBLE1BQU0sRUFBRS9CLDBEQUFVQTtBQURBLENBQXBCO0FBSUEsK0RBQWVDLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwic3JjL2xheW91dC9NYWluTGF5b3V0XCI7XG5cbmludGVyZmFjZSBGb3JtRGF0YSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmNvbnN0IExvZ2luID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgbGV0IHN0YXR1cztcblxuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICBpc0xvYWRpbmcsXG4gIH0gPSB1c2VGb3JtPEZvcm1EYXRhPih7XG4gICAgbW9kZTogXCJvbkNoYW5nZVwiLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBoYW5kbGVTdWJtaXQoKGVtYWlsOiBhbnksIHBhc3N3b3JkOiBhbnkpID0+IHtcbiAgICBpZiAoZW1haWwgIT09IFwiYWFAZ21haWwuY29tXCIgJiYgcGFzc3dvcmQgIT09IFwiYWFhYWFhYWFhXCIpIHtcbiAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KFwiaW5jb3JyZWN0XCIpKTtcbiAgICB9IGVsc2UgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZW1haWwsIHBhc3N3b3JkKSk7XG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgfSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG5cbiAgY29uc29sZS5sb2cod2F0Y2goXCJlbWFpbFwiKSk7IC8vIHlvdSBjYW4gd2F0Y2ggaW5kaXZpZHVhbCBpbnB1dCBieSBwYXNzIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxuXG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldENoZWNrKHtcbiAgICAgIC4uLmNoZWNrLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIG14LWF1dG8gYmctWyMxNzE3MTddIHctOTYgaC1maXQgcm91bmRlZC0yeGwgcC01IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTNcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zYW5kby1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInNhbmRvIGxvZ28gaW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtbC0yIHRleHQtd2hpdGUgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICAgICAgU0FORE8gVE9LRU5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+TG9naW48L2gxPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB0LTNcIiBvblN1Ym1pdD17b25TdWJtaXR9ID5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB0ZXh0LWJsYWNrIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC1yZWQtNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA4djRtMCA0aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoPXs4fVxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogOCB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtM3hsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdGV4dC1ibGFjayB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDh2NG0wIDRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXktNSBcIj5cbiAgICAgICAgICAgICAgey8qIFRPRE8gYWRkIEZvcmdldCBwYXNzd29yZCBmdW5jdGlvbiAqL31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LVsjNjVGRkEzXSB1bmRlcmxpbmUgICBcIj5cbiAgICAgICAgICAgICAgICBGb3JnZXQgcGFzc3dvcmRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3RhdHVzfVxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgICBpdGVtcy1lbmQgYmctWyNGRjAwOTBdIGhvdmVyOmJnLVsjZGIwMzdlXSB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtMTAgcm91bmRlZC0zeGwgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG15LTUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy0xLzNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMVwiPm9yIExvZ2luIHdpdGg8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LTEvM1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC03XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2dvb2dsZS1pY29uLnN2Z1wiIGFsdD1cImdvb2dsZS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy9mYWNlYm9vay1pY29uLnN2Z1wiIGFsdD1cImdvb2dsZS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuTG9naW4ubGF5b3V0UHJvcHMgPSB7XG4gIExheW91dDogTWFpbkxheW91dCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRm9ybSIsIk1haW5MYXlvdXQiLCJMb2dpbiIsInN0YXR1cyIsIm1vZGUiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJpc0xvYWRpbmciLCJvblN1Ym1pdCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJjaGVjayIsInNldENoZWNrIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibGF5b3V0UHJvcHMiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ })

});