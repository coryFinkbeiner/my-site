"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps , document  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(\"pp\", document);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ1M7QUFDRTtBQUkxQyxTQUFTRyxNQUFNLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRSxHQUFsQzs7SUFDYixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEJPLFFBQVFDLEdBQUcsQ0FBQyxNQUFNSDtJQUVsQixxQkFDRSw4REFBQ0osMERBQU1BO2tCQUNMLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0dBVFNGOztRQUNRRixrREFBU0E7OztLQURqQkU7O0FBNENULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCBkYiBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGRvY3VtZW50IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKCdwcCcsIGRvY3VtZW50KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICB0cnkge1xuICAgIC8vIEZldGNoIHRoZSBkb2N1bWVudCBmcm9tIEZpcmVzdG9yZVxuICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCAncG9ydGZvbGlvJyk7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvblJlZik7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGRvY3VtZW50c1xuICAgIGlmIChxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRvY3VtZW50cyBmb3VuZCBpbiB0aGUgXCJwb3J0Zm9saW9cIiBjb2xsZWN0aW9uLicpO1xuICAgIH1cblxuICAgIC8vIEV4dHJhY3QgdGhlIGZpcnN0IGRvY3VtZW50IGZyb20gdGhlIHF1ZXJ5IHJlc3VsdFxuICAgIGNvbnN0IFtmaXJzdERvY3VtZW50XSA9IHF1ZXJ5U25hcHNob3QuZG9jcztcbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSBmaXJzdERvY3VtZW50LmRhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKCdpbicsIGRvY3VtZW50RGF0YSlcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkb2N1bWVudDogZG9jdW1lbnREYXRhLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkb2N1bWVudDogbnVsbCwgLy8gU2V0IGEgZGVmYXVsdCB2YWx1ZSBvciBoYW5kbGUgdGhlIGVycm9yIGNhc2UgYXMgbmVlZGVkXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkb2N1bWVudCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});