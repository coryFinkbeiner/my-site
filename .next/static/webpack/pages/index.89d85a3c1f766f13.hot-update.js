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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AboutMe */ \"./components/AboutMe.js\");\n/* harmony import */ var _components_Resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Resume */ \"./components/Resume.js\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.js\");\n/* harmony import */ var _components_ContactMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContactMe */ \"./components/ContactMe.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Create the context\nconst SelectedComponentContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction Home() {\n    _s();\n    // Initialize the state variable and the state updater function\n    const [selectedComponent, setSelectedComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"AboutMe\");\n    // Define the click handler\n    const handleItemClick = (componentName)=>{\n        setSelectedComponent(componentName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectedComponentContext.Provider, {\n        value: {\n            selectedComponent,\n            setSelectedComponent\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleItemClick(\"AboutMe\"),\n                                    children: \"About Me\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleItemClick(\"Resume\"),\n                                    children: \"Resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleItemClick(\"Projects\"),\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>handleItemClick(\"ContactMe\"),\n                                    children: \"Contact Me\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"center\",\n                        children: [\n                            selectedComponent === \"AboutMe\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 47\n                            }, this),\n                            selectedComponent === \"Resume\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Resume__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 46\n                            }, this),\n                            selectedComponent === \"Projects\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 48\n                            }, this),\n                            selectedComponent === \"ContactMe\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactMe__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 49\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coryfinkbeiner/keepers/my-site/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2KqNn/03emGGFL03q3CrvayAmuY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ0Y7QUFDSTtBQUNFO0FBRS9DLHFCQUFxQjtBQUNyQixNQUFNTSx5Q0FBMkJOLDBEQUFtQixDQUFDLElBQUk7QUFFekQsU0FBU1EsT0FBTzs7SUFDZCwrREFBK0Q7SUFDL0QsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzRCwyQkFBMkI7SUFDM0IsTUFBTVUsa0JBQWtCLENBQUNDLGdCQUFrQjtRQUN6Q0YscUJBQXFCRTtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDTix5QkFBeUJPLFFBQVE7UUFBQ0MsT0FBTztZQUFFTDtZQUFtQkM7UUFBcUI7a0JBQ2xGLDRFQUFDSztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs7OENBQ0MsOERBQUNDO29DQUFHQyxTQUFTLElBQU1SLGdCQUFnQjs4Q0FBWTs7Ozs7OzhDQUMvQyw4REFBQ087b0NBQUdDLFNBQVMsSUFBTVIsZ0JBQWdCOzhDQUFXOzs7Ozs7OENBQzlDLDhEQUFDTztvQ0FBR0MsU0FBUyxJQUFNUixnQkFBZ0I7OENBQWE7Ozs7Ozs4Q0FDaEQsOERBQUNPO29DQUFHQyxTQUFTLElBQU1SLGdCQUFnQjs4Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3JELDhEQUFDSTt3QkFBSUMsV0FBVTs7NEJBQ1pQLHNCQUFzQiwyQkFBYSw4REFBQ1AsMkRBQU9BOzs7Ozs0QkFDM0NPLHNCQUFzQiwwQkFBWSw4REFBQ04sMERBQU1BOzs7Ozs0QkFDekNNLHNCQUFzQiw0QkFBYyw4REFBQ0wsNERBQVFBOzs7Ozs0QkFDN0NLLHNCQUFzQiw2QkFBZSw4REFBQ0osNkRBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUQ7R0EvQlNHO0tBQUFBO0FBaUNULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dE1lJ1xuaW1wb3J0IFJlc3VtZSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VtZSdcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJ1xuaW1wb3J0IENvbnRhY3RNZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RNZSdcblxuLy8gQ3JlYXRlIHRoZSBjb250ZXh0XG5jb25zdCBTZWxlY3RlZENvbXBvbmVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAvLyBJbml0aWFsaXplIHRoZSBzdGF0ZSB2YXJpYWJsZSBhbmQgdGhlIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb25cbiAgY29uc3QgW3NlbGVjdGVkQ29tcG9uZW50LCBzZXRTZWxlY3RlZENvbXBvbmVudF0gPSB1c2VTdGF0ZSgnQWJvdXRNZScpO1xuXG4gIC8vIERlZmluZSB0aGUgY2xpY2sgaGFuZGxlclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdGVkQ29tcG9uZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZWxlY3RlZENvbXBvbmVudCwgc2V0U2VsZWN0ZWRDb21wb25lbnQgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKCdBYm91dE1lJyl9PkFib3V0IE1lPC9saT5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJ1Jlc3VtZScpfT5SZXN1bWU8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljaygnUHJvamVjdHMnKX0+UHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljaygnQ29udGFjdE1lJyl9PkNvbnRhY3QgTWU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cbiAgICAgICAgICB7c2VsZWN0ZWRDb21wb25lbnQgPT09ICdBYm91dE1lJyAmJiA8QWJvdXRNZSAvPn1cbiAgICAgICAgICB7c2VsZWN0ZWRDb21wb25lbnQgPT09ICdSZXN1bWUnICYmIDxSZXN1bWUgLz59XG4gICAgICAgICAge3NlbGVjdGVkQ29tcG9uZW50ID09PSAnUHJvamVjdHMnICYmIDxQcm9qZWN0cyAvPn1cbiAgICAgICAgICB7c2VsZWN0ZWRDb21wb25lbnQgPT09ICdDb250YWN0TWUnICYmIDxDb250YWN0TWUgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NlbGVjdGVkQ29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWJvdXRNZSIsIlJlc3VtZSIsIlByb2plY3RzIiwiQ29udGFjdE1lIiwiU2VsZWN0ZWRDb21wb25lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkhvbWUiLCJzZWxlY3RlZENvbXBvbmVudCIsInNldFNlbGVjdGVkQ29tcG9uZW50IiwiaGFuZGxlSXRlbUNsaWNrIiwiY29tcG9uZW50TmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});