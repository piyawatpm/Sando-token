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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layout/MainLayout */ \"./src/layout/MainLayout.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ibamhrk/Documents/GitHub/Sando-token/src/pages/login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var status;\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    defaultValues: {\n      email: \"\",\n      username: \"\",\n      password: \"\",\n      confirmedPassword: \"\"\n    }\n  }),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  console.log(watch(\"email\")); // you can watch individual input by pass the name of the input\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    password: \"\",\n    confirmedPassword: \"\"\n  }),\n      check = _useState[0],\n      setCheck = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setCheck(_objectSpread(_objectSpread({}, check), {}, (0,_Users_ibamhrk_Documents_GitHub_Sando_token_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setError(check.password !== check.confirmedPassword);\n  }, [check.use, check.confirmedPassword]);\n  console.log(check);\n\n  if (check.password === check.confirmedPassword) {\n    status = false;\n  } else {\n    status = true;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"w-full h-screen\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-white\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"flex items-center justify-center pb-3\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n            src: \"/images/sando-logo.png\",\n            alt: \"sando logo image\",\n            className: \"w-12 h-12\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: \"text-2xl ml-2 text-white font-extrabold\",\n            children: \"SANDO TOKEN\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          className: \"text-xl font-bold\",\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n          className: \"pt-3\",\n          onSubmit: handleSubmit(function (data) {\n            alert(JSON.stringify(data));\n          }),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Email address \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({}, register(\"email\", {\n              required: true\n            })), {}, {\n              type: \"email\",\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2\"\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 19\n              }, _this), \"This field is required\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n              className: \"font-normal\",\n              children: [\"Password \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n                className: \"text-red-600\",\n                children: \"*\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 26\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n              minLength: 8\n            }, register(\"password\", {\n              required: true,\n              minLength: 8\n            })), {}, {\n              className: \"mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2\",\n              name: \"password\",\n              value: check.password,\n              type: \"password\",\n              id: \"password\",\n              onChange: handleInputChange\n            }), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 15\n            }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n              className: \"flex text-red-600\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \" h-6 w-6\",\n                fill: \"none\",\n                viewBox: \"0 0 24 24\",\n                stroke: \"currentColor\",\n                strokeWidth: 2,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                  strokeLinecap: \"round\",\n                  strokeLinejoin: \"round\",\n                  d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, _this), \"This field is required.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"flex text-red-500\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", {\n              xmlns: \"http://www.w3.org/2000/svg\",\n              className: \" h-6 w-6\",\n              fill: \"none\",\n              viewBox: \"0 0 24 24\",\n              stroke: \"currentColor\",\n              strokeWidth: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n                strokeLinecap: \"round\",\n                strokeLinejoin: \"round\",\n                d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 144,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 17\n            }, _this), \"Invalid username or password\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center my-5 \",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/\",\n              className: \"text-[#65FFA3] underline   \",\n              children: \"Forget password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n              value: \"Login\",\n              disabled: status //onClick={onClickHandler}\n              ,\n              type: \"submit\",\n              className: \"cursor-pointer   items-end bg-[#FF0090] hover:bg-[#db037e] text-white text-sm font-bold py-2 px-10 rounded-3xl  \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"Don\\u2019t have an account? \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n              href: \"/register\",\n              className: \"underline font-bold\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 170,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"zwZmfQF3TevsQTcyUxDJMGOIXl4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = Login;\nLogin.layoutProps = {\n  Layout: src_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__.default\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UjtBQUNFLHVCQUFTLEVBQUMsNkJBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFRRTtBQUNFLG1CQUFLLEVBQUMsT0FEUjtBQUVFLHNCQUFRLEVBQUVmLE1BRlosQ0FHRTtBQUhGO0FBSUUsa0JBQUksRUFBQyxRQUpQO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFGRixlQTBHRTtBQUFBLG9FQUN1QjtBQUFHLGtCQUFJLEVBQUMsV0FBUjtBQUFvQix1QkFBUyxFQUFDLHFCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUlELENBNUtEOztHQUFNRDtVQVFBRjs7O0tBUkFFO0FBOEtOQSxLQUFLLENBQUM4QixXQUFOLEdBQW9CO0FBQ2xCQyxFQUFBQSxNQUFNLEVBQUVoQywwREFBVUE7QUFEQSxDQUFwQjtBQUdBLCtEQUFlQyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi50c3g/OGQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcInNyYy9sYXlvdXQvTWFpbkxheW91dFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGxldCBzdGF0dXM7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBjb25maXJtZWRQYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh3YXRjaChcImVtYWlsXCIpKTsgLy8geW91IGNhbiB3YXRjaCBpbmRpdmlkdWFsIGlucHV0IGJ5IHBhc3MgdGhlIG5hbWUgb2YgdGhlIGlucHV0XG5cbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybWVkUGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q2hlY2soe1xuICAgICAgLi4uY2hlY2ssXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyb3IoY2hlY2sucGFzc3dvcmQgIT09IGNoZWNrLmNvbmZpcm1lZFBhc3N3b3JkKTtcbiAgfSwgW2NoZWNrLnVzZSwgY2hlY2suY29uZmlybWVkUGFzc3dvcmRdKTtcbiAgY29uc29sZS5sb2coY2hlY2spO1xuXG4gIGlmIChjaGVjay5wYXNzd29yZCA9PT0gY2hlY2suY29uZmlybWVkUGFzc3dvcmQpIHtcbiAgICBzdGF0dXMgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0dXMgPSB0cnVlO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIG14LWF1dG8gYmctWyMxNzE3MTddIHctOTYgaC1maXQgcm91bmRlZC0yeGwgcC01IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTNcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zYW5kby1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInNhbmRvIGxvZ28gaW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtbC0yIHRleHQtd2hpdGUgZm9udC1leHRyYWJvbGRcIj5cbiAgICAgICAgICAgICAgU0FORE8gVE9LRU5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+TG9naW48L2gxPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0zXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyByb3VuZGVkLTN4bCBiZy1bI0VCRUJFQl0gZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItWyNDNEM0QzRdIHctZnVsbCBweS0yIHB4LTUgbXQtMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC1yZWQtNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiA4djRtMCA0aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoPXs4fVxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogOCB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIHJvdW5kZWQtM3hsIGJnLVsjRUJFQkVCXSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1bI0M0QzRDNF0gdGV4dC1ibGFjayB3LWZ1bGwgcHktMiBweC01IG10LTJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXktNSBcIj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBUT0RPIGFkZCBGb3JnZXQgcGFzc3dvcmQgZnVuY3Rpb24gKi99XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjNjVGRkEzXSB1bmRlcmxpbmUgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRm9yZ2V0IHBhc3N3b3JkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0YXR1c31cbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICAgaXRlbXMtZW5kIGJnLVsjRkYwMDkwXSBob3ZlcjpiZy1bI2RiMDM3ZV0gdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBweS0yIHB4LTEwIHJvdW5kZWQtM3hsICBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGZvbnQtYm9sZFwiPlJlZ2lzdGVyPC9hPiBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Mb2dpbi5sYXlvdXRQcm9wcyA9IHtcbiAgTGF5b3V0OiBNYWluTGF5b3V0LFxufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRm9ybSIsIk1haW5MYXlvdXQiLCJMb2dpbiIsInN0YXR1cyIsImRlZmF1bHRWYWx1ZXMiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtZWRQYXNzd29yZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJzZXRDaGVjayIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2UiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJsYXlvdXRQcm9wcyIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ })

});