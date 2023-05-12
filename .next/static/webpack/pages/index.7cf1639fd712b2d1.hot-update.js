"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./contexts/nav-context.js":
/*!*********************************!*\
  !*** ./contexts/nav-context.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavProvider\": function() { return /* binding */ NavProvider; },\n/* harmony export */   \"useNav\": function() { return /* binding */ useNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ \"./components/About.js\");\n/* harmony import */ var _components_Resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Resume */ \"./components/Resume.js\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction useNav() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavContext);\n}\n_s(useNav, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction NavProvider(param) {\n    let { children  } = param;\n    _s1();\n    const [navOption, setNavOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"About\");\n    const componentMap = {\n        About: _components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        Resume: _components_Resume__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        Projects: _components_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Contact: _components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    };\n    const navChoice = componentMap[selectedComponent];\n    const handleItemClick = (component)=>{\n        setNavOption(component);\n    };\n    const value = {\n        navOption,\n        handleItemClick\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/coryfinkbeiner/keepers/my-site/contexts/nav-context.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n}\n_s1(NavProvider, \"CyVRJJa+kOTe3r/I2gtIxO/1YlM=\");\n_c = NavProvider;\nvar _c;\n$RefreshReg$(_c, \"NavProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9uYXYtY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDM0I7QUFDRTtBQUNJO0FBQ0Y7QUFFNUMsTUFBTVEsMkJBQWFQLG9EQUFhQSxDQUFDLElBQUk7QUFFOUIsU0FBU1EsU0FBUzs7SUFDdkIsT0FBT1AsaURBQVVBLENBQUNNO0FBQ3BCLENBQUM7R0FGZUM7QUFJVCxTQUFTQyxZQUFZLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUMxQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVcsZUFBZTtRQUNuQlYsS0FBS0EsMkRBQUFBO1FBQ0xDLE1BQU1BLDREQUFBQTtRQUNOQyxRQUFRQSw4REFBQUE7UUFDUkMsT0FBT0EsNkRBQUFBO0lBQ1Q7SUFFQSxNQUFNUSxZQUFZRCxZQUFZLENBQUNFLGtCQUFrQjtJQUVqRCxNQUFNQyxrQkFBa0IsQ0FBQ0MsWUFBYztRQUNyQ0wsYUFBYUs7SUFDZjtJQUVBLE1BQU1DLFFBQVE7UUFDWlA7UUFDQUs7SUFDRjtJQUVBLHFCQUFPLDhEQUFDVCxXQUFXWSxRQUFRO1FBQUNELE9BQU9BO2tCQUFRUjs7Ozs7O0FBQzdDLENBQUM7SUF0QmVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL25hdi1jb250ZXh0LmpzP2U4MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IFJlc3VtZSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VtZSc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuXG5jb25zdCBOYXZDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdigpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW25hdk9wdGlvbiwgc2V0TmF2T3B0aW9uXSA9IHVzZVN0YXRlKCdBYm91dCcpO1xuXG4gIGNvbnN0IGNvbXBvbmVudE1hcCA9IHtcbiAgICBBYm91dCxcbiAgICBSZXN1bWUsXG4gICAgUHJvamVjdHMsXG4gICAgQ29udGFjdFxuICB9O1xuXG4gIGNvbnN0IG5hdkNob2ljZSA9IGNvbXBvbmVudE1hcFtzZWxlY3RlZENvbXBvbmVudF07XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIHNldE5hdk9wdGlvbihjb21wb25lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIG5hdk9wdGlvbixcbiAgICBoYW5kbGVJdGVtQ2xpY2ssXG4gIH07XG5cbiAgcmV0dXJuIDxOYXZDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvTmF2Q29udGV4dC5Qcm92aWRlcj47XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBYm91dCIsIlJlc3VtZSIsIlByb2plY3RzIiwiQ29udGFjdCIsIk5hdkNvbnRleHQiLCJ1c2VOYXYiLCJOYXZQcm92aWRlciIsImNoaWxkcmVuIiwibmF2T3B0aW9uIiwic2V0TmF2T3B0aW9uIiwiY29tcG9uZW50TWFwIiwibmF2Q2hvaWNlIiwic2VsZWN0ZWRDb21wb25lbnQiLCJoYW5kbGVJdGVtQ2xpY2siLCJjb21wb25lbnQiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/nav-context.js\n"));

/***/ })

});