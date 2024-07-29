/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ui/Navbar/Navbar.module.scss":
/*!*************************************************!*\
  !*** ./components/ui/Navbar/Navbar.module.scss ***!
  \*************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headers\": \"Navbar_headers__uWzXL\",\n\t\"glitch\": \"Navbar_glitch__yhHFU\",\n\t\"glitchTop\": \"Navbar_glitchTop__hQA4q\",\n\t\"glitchBottom\": \"Navbar_glitchBottom__e_neE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL05hdmJhci9OYXZiYXIubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXRyLmlvLy4vY29tcG9uZW50cy91aS9OYXZiYXIvTmF2YmFyLm1vZHVsZS5zY3NzP2IwNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyc1wiOiBcIk5hdmJhcl9oZWFkZXJzX191V3pYTFwiLFxuXHRcImdsaXRjaFwiOiBcIk5hdmJhcl9nbGl0Y2hfX3loSEZVXCIsXG5cdFwiZ2xpdGNoVG9wXCI6IFwiTmF2YmFyX2dsaXRjaFRvcF9faFFBNHFcIixcblx0XCJnbGl0Y2hCb3R0b21cIjogXCJOYXZiYXJfZ2xpdGNoQm90dG9tX19lX25lRVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Navbar/Navbar.module.scss\n");

/***/ }),

/***/ "./components/ui/Navbar/index.tsx":
/*!****************************************!*\
  !*** ./components/ui/Navbar/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/links */ \"./lib/links.tsx\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.scss */ \"./components/ui/Navbar/Navbar.module.scss\");\n/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Navbar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.asPath.includes(\"#\")) {\n            const anchor = router.asPath.substring(router.asPath.indexOf(\"#\") + 1);\n            const element = document.getElementById(anchor);\n            if (element) {\n                element.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    }, [\n        router.asPath\n    ]);\n    const handleCloseMenu = ()=>setShowMenu(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar flex items-centerabsolute w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container absolute right-5 pt-5 flex items-center justify-end gap-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex justify-end mr-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex space-x-7 text-base list-none\",\n                        children: _lib_links__WEBPACK_IMPORTED_MODULE_4__.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headers),\n                                \"data-text\": link.text,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: link.url,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: link.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${showMenu ? \"flex\" : \"hidden\"} lg:!hidden items-center justify-center flex-col gap-4 fixed w-full h-full top-0 left-0 bg-[rgb(11,46,60)] z-[2000]`,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col items-center gap-6 text-base list-none\",\n                    children: _lib_links__WEBPACK_IMPORTED_MODULE_4__.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headers),\n                            \"data-text\": link.text,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: link.url,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                onClick: handleCloseMenu,\n                                children: link.text\n                            }, void 0, false, {\n                                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Navbar/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL05hdmJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBQ0o7QUFDSjtBQUNNO0FBRTFDLE1BQU1NLFNBQVM7SUFDYixNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLE9BQU9HLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLE1BQU07WUFDL0IsTUFBTUMsU0FBU0wsT0FBT0csTUFBTSxDQUFDRyxTQUFTLENBQUNOLE9BQU9HLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLE9BQU87WUFDcEUsTUFBTUMsVUFBVUMsU0FBU0MsY0FBYyxDQUFDTDtZQUN4QyxJQUFJRyxTQUFTO2dCQUNYQSxRQUFRRyxjQUFjLENBQUM7b0JBQUVDLFVBQVU7Z0JBQVM7WUFDOUM7UUFDRjtJQUNGLEdBQUc7UUFBQ1osT0FBT0csTUFBTTtLQUFDO0lBRWxCLE1BQU1VLGtCQUFrQixJQUFNWCxZQUFZO0lBRTFDLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBR0YsV0FBVTtrQ0FDWGxCLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7Z0NBQWVOLFdBQVdqQixvRUFBYztnQ0FBRXlCLGFBQVdKLEtBQUtLLElBQUk7MENBQzNELDRFQUFDL0Isa0RBQUlBO29DQUNIZ0MsTUFBTU4sS0FBS08sR0FBRztvQ0FDZEMsUUFBTztvQ0FDUEMsS0FBSTs4Q0FFSFQsS0FBS0ssSUFBSTs7Ozs7OytCQU5QSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBY2pCLDhEQUFDSjtnQkFDQ0QsV0FBVyxDQUFDLEVBQUVkLFdBQVcsU0FBUyxTQUFTLG1IQUFtSCxDQUFDOzBCQUUvSiw0RUFBQ2dCO29CQUFHRixXQUFVOzhCQUNYbEIsNkNBQUtBLENBQUNxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDQzs0QkFBZU4sV0FBV2pCLG9FQUFjOzRCQUFFeUIsYUFBV0osS0FBS0ssSUFBSTtzQ0FDM0QsNEVBQUMvQixrREFBSUE7Z0NBQ0hnQyxNQUFNTixLQUFLTyxHQUFHO2dDQUNkQyxRQUFPO2dDQUNQQyxLQUFJO2dDQUNKQyxTQUFTaEI7MENBRVJNLEtBQUtLLElBQUk7Ozs7OzsyQkFQUEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVyQjtBQUVBLGlFQUFlckIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JldHIuaW8vLi9jb21wb25lbnRzL3VpL05hdmJhci9pbmRleC50c3g/ZTQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGxpbmtzIH0gZnJvbSBcIkAvbGliL2xpbmtzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIjXCIpKSB7XG4gICAgICBjb25zdCBhbmNob3IgPSByb3V0ZXIuYXNQYXRoLnN1YnN0cmluZyhyb3V0ZXIuYXNQYXRoLmluZGV4T2YoXCIjXCIpICsgMSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYW5jaG9yKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4gc2V0U2hvd01lbnUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgZmxleCBpdGVtcy1jZW50ZXJhYnNvbHV0ZSB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFic29sdXRlIHJpZ2h0LTUgcHQtNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGp1c3RpZnktZW5kIG1yLTEwXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC03IHRleHQtYmFzZSBsaXN0LW5vbmVcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJzfSBkYXRhLXRleHQ9e2xpbmsudGV4dH0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnVybH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c2hvd01lbnUgPyBcImZsZXhcIiA6IFwiaGlkZGVuXCJ9IGxnOiFoaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGdhcC00IGZpeGVkIHctZnVsbCBoLWZ1bGwgdG9wLTAgbGVmdC0wIGJnLVtyZ2IoMTEsNDYsNjApXSB6LVsyMDAwXWB9XG4gICAgICA+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNiB0ZXh0LWJhc2UgbGlzdC1ub25lXCI+XG4gICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJzfSBkYXRhLXRleHQ9e2xpbmsudGV4dH0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImxpbmtzIiwic3R5bGVzIiwiTmF2YmFyIiwicm91dGVyIiwic2hvd01lbnUiLCJzZXRTaG93TWVudSIsImFzUGF0aCIsImluY2x1ZGVzIiwiYW5jaG9yIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZUNsb3NlTWVudSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibWFwIiwibGluayIsImluZGV4IiwibGkiLCJoZWFkZXJzIiwiZGF0YS10ZXh0IiwidGV4dCIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Navbar/index.tsx\n");

/***/ }),

/***/ "./components/ui/Wrapper/index.tsx":
/*!*****************************************!*\
  !*** ./components/ui/Wrapper/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ \"./components/ui/Navbar/index.tsx\");\n\n\nconst Wrapper = ({ children })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Wrapper/index.tsx\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Wrapper/index.tsx\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/components/ui/Wrapper/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1dyYXBwZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFVBQVUsQ0FBQyxFQUFFQyxRQUFRLEVBQUUsaUJBQzNCLDhEQUFDQzs7MEJBQ0MsOERBQUNILCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNJOzBCQUFNRjs7Ozs7Ozs7Ozs7O0FBSVgsaUVBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXRyLmlvLy4vY29tcG9uZW50cy91aS9XcmFwcGVyL2luZGV4LnRzeD9jMWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL05hdmJhclwiO1xuXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZiYXIgLz5cbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7Il0sIm5hbWVzIjpbIk5hdmJhciIsIldyYXBwZXIiLCJjaGlsZHJlbiIsImRpdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Wrapper/index.tsx\n");

/***/ }),

/***/ "./lib/links.tsx":
/*!***********************!*\
  !*** ./lib/links.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nconst links = [\n    {\n        url: \"/\",\n        text: \"HOME\"\n    },\n    {\n        url: \"/Explore\",\n        text: \"Explore\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRO0lBQ2pCO1FBQUVDLEtBQUs7UUFBS0MsTUFBTTtJQUFPO0lBQ3pCO1FBQUVELEtBQUs7UUFBWUMsTUFBTTtJQUFTO0NBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXRyLmlvLy4vbGliL2xpbmtzLnRzeD81Y2E1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAgICB7IHVybDogXCIvXCIsIHRleHQ6IFwiSE9NRVwiIH0sXG4gICAgeyB1cmw6IFwiL0V4cGxvcmVcIiwgdGV4dDogXCJFeHBsb3JlXCJ9XG4gIF07Il0sIm5hbWVzIjpbImxpbmtzIiwidXJsIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/links.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/Wrapper */ \"./components/ui/Wrapper/index.tsx\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ({ Component, pageProps })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hudsondungey/Desktop/Hivefy-Client/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ2pCO0FBRTdCLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxpQkFDakMsOERBQUNILDhEQUFPQTtrQkFDUiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUk1QixpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JldHIuaW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcmFwcGVyIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvV3JhcHBlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiOyBcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gKFxuICAgIDxXcmFwcGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiV3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();