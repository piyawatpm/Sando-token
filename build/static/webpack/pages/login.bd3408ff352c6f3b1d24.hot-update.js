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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var status;\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    defaultValues: {\n      email: \"\",\n      password: \"\"\n    }\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  console.log(watch(\"email\")); // you can watch individual input by pass the name of the input\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    email: \"\",\n    password: \"\"\n  }),\n      check = _useState[0],\n      setCheck = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-full h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"flex items-center justify-center pb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n            src: \"/images/sando-logo.png\",\n            alt: \"sando logo image\",\n            className: \"w-12 h-12\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: \"text-2xl ml-2 text-white font-extrabold\",\n            children: \"SANDO TOKEN\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          className: \"text-xl font-bold\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n          className: \"pt-3\",\n          onSubmit: handleSubmit(function (data) {\n            alert(JSON.stringify(data));\n          }),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Email address \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              ref: register()\n            }, register(\"email\", {\n              required: true\n            })), {}, {\n              type: \"email\",\n              name: \"email\",\n              onChange: handleInputChange,\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 19\n              }, _this), \"This field is required\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Password \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 26\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              minLength: 8\n            }, register(\"password\", {\n              required: true,\n              minLength: 8\n            })), {}, {\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2\",\n              name: \"password\",\n              type: \"password\",\n              id: \"password\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 19\n              }, _this), \"This field is required.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center my-5 \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              className: \"text-[#65FFA3] underline   \",\n              children: \"Forget password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n              value: \"Login\",\n              disabled: status //onClick={onClickHandler}\n              ,\n              type: \"submit\",\n              className: \"cursor-pointer   items-end bg-[#FF0090] hover:bg-[#db037e] text-white text-sm font-bold py-2 px-10 rounded-3xl  \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"Don't have an account?\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/register\",\n              className: \"underline font-bold\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"w-full my-5 flex justify-center items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"mx-1\",\n              children: \"or Login with\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 15\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"hr\", {\n              className: \"text-white w-1/3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 158,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center space-x-7\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/google-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 162,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"/images/icons/facebook-icon.svg\",\n                alt: \"google-icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 165,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 164,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 160,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"Tt4zfxpqTdfslcKcl2kLn8zv1os=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = Login;\nLogin.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nfunction formValue(formValue, arg1) {\n  throw new Error(\"Function not implemented.\");\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUMsaUNBQVQ7QUFBMkMsbUJBQUcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE4SEQsQ0FyS0Q7O0dBQU1EO1VBaUJBRjs7O0tBakJBRTtBQXVLTkEsS0FBSyxDQUFDMkIsV0FBTixHQUFvQjtBQUNsQkMsRUFBQUEsTUFBTSxFQUFFN0IsMERBQVVBO0FBREEsQ0FBcEI7QUFHQSwrREFBZUMsS0FBZjs7QUFDSSxTQUFTNkIsU0FBVCxDQUFtQkEsU0FBbkIsRUFBbUNDLElBQW5DLEVBQTRFO0FBQ3hFLFFBQU0sSUFBSUMsS0FBSixDQUFVLDJCQUFWLENBQU47QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4udHN4PzhkMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJzcmMvbGF5b3V0L01haW5MYXlvdXRcIjtcblxuXG5cblxuY29uc3QgTG9naW4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXG5cblxuXG5cblxuXG5cblxuICBsZXQgc3RhdHVzO1xuXG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSh7XG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh3YXRjaChcImVtYWlsXCIpKTsgLy8geW91IGNhbiB3YXRjaCBpbmRpdmlkdWFsIGlucHV0IGJ5IHBhc3MgdGhlIG5hbWUgb2YgdGhlIGlucHV0XG5cblxuICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRDaGVjayh7XG4gICAgICAuLi5jaGVjayxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBteC1hdXRvIGJnLVsjMTcxNzE3XSB3LTk2IGgtZml0IHJvdW5kZWQtMnhsIHAtNSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwYi0zXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2FuZG8tbG9nby5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJzYW5kbyBsb2dvIGltYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWwtMiB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkXCI+XG4gICAgICAgICAgICAgIFNBTkRPIFRPS0VOXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkxvZ2luPC9oMT5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtM1wiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcm91bmRlZC0zeGwgYmctWyNFQkVCRUJdIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLVsjQzRDNEM0XSB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICBQYXNzd29yZCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17OH1cbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDggfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHRleHQtYmxhY2sgdy1mdWxsIHB5LTIgcHgtNSBtdC0yXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC1yZWQtNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA4djRtMCA0aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG15LTUgXCI+XG4gICAgICAgICAgICAgIHsvKiBUT0RPIGFkZCBGb3JnZXQgcGFzc3dvcmQgZnVuY3Rpb24gKi99XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1bIzY1RkZBM10gdW5kZXJsaW5lICAgXCI+XG4gICAgICAgICAgICAgICAgRm9yZ2V0IHBhc3N3b3JkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0YXR1c31cbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICAgaXRlbXMtZW5kIGJnLVsjRkYwMDkwXSBob3ZlcjpiZy1bI2RiMDM3ZV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBweS0yIHB4LTEwIHJvdW5kZWQtM3hsICBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInVuZGVybGluZSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteS01IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctMS8zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTFcIj5vciBMb2dpbiB3aXRoPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy0xLzNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtN1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy9nb29nbGUtaWNvbi5zdmdcIiBhbHQ9XCJnb29nbGUtaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMvZmFjZWJvb2staWNvbi5zdmdcIiBhbHQ9XCJnb29nbGUtaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkxvZ2luLmxheW91dFByb3BzID0ge1xuICBMYXlvdXQ6IE1haW5MYXlvdXQsXG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4gICAgZnVuY3Rpb24gZm9ybVZhbHVlKGZvcm1WYWx1ZTogYW55LCBhcmcxOiB7IHVzZXJuYW1lOiBhbnk7IHBhc3N3b3JkOiBhbnk7IH0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJNYWluTGF5b3V0IiwiTG9naW4iLCJzdGF0dXMiLCJkZWZhdWx0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJzZXRDaGVjayIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJsYXlvdXRQcm9wcyIsIkxheW91dCIsImZvcm1WYWx1ZSIsImFyZzEiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ })

});