module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_layouts/default.js":
/*!*****************************!*\
  !*** ./_layouts/default.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/chinds/workspace/chrishinds.dev/_layouts/default.js\";\n // components\n\nconst DefaultLayout = ({\n  title,\n  description,\n  children\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fbGF5b3V0cy9kZWZhdWx0LmpzPzdlODMiXSwibmFtZXMiOlsiRGVmYXVsdExheW91dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLGFBQVQ7QUFBc0JDO0FBQXRCLENBQUQsa0JBQ3BCO0FBQUEsMEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUEsY0FBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQSxnQkFERjs7QUFVZUgsNEVBQWYiLCJmaWxlIjoiLi9fbGF5b3V0cy9kZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG4vLyBjb21wb25lbnRzXG5cbmNvbnN0IERlZmF1bHRMYXlvdXQgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuIH0pID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgIDwvSGVhZD5cbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_layouts/default.js\n");

/***/ }),

/***/ "./_posts lazy recursive ^\\.\\/.*$":
/*!***********************************************!*\
  !*** ./_posts lazy ^\.\/.*$ namespace object ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./welcome.md\": \"./_posts/welcome.md\"\n};\n\nfunction webpackAsyncContext(req) {\n\treturn Promise.resolve().then(function() {\n\t\tif(!__webpack_require__.o(map, req)) {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t}\n\n\t\tvar id = map[req];\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./_posts lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fcG9zdHMgbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3Q/NWRjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9fcG9zdHMgbGF6eSByZWN1cnNpdmUgXlxcLlxcLy4qJC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi93ZWxjb21lLm1kXCI6IFwiLi9fcG9zdHMvd2VsY29tZS5tZFwiXG59O1xuXG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cblx0XHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vX3Bvc3RzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_posts lazy recursive ^\\.\\/.*$\n");

/***/ }),

/***/ "./_posts lazy recursive ^\\.\\/.*\\.md$":
/*!***************************************************!*\
  !*** ./_posts lazy ^\.\/.*\.md$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./welcome.md\": \"./_posts/welcome.md\"\n};\n\nfunction webpackAsyncContext(req) {\n\treturn Promise.resolve().then(function() {\n\t\tif(!__webpack_require__.o(map, req)) {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t}\n\n\t\tvar id = map[req];\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./_posts lazy recursive ^\\\\.\\\\/.*\\\\.md$\";\nmodule.exports = webpackAsyncContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fcG9zdHMgbGF6eSBeXFwuXFwvLipcXC5tZCQgbmFtZXNwYWNlIG9iamVjdD9hZTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL19wb3N0cyBsYXp5IHJlY3Vyc2l2ZSBeXFwuXFwvLipcXC5tZCQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vd2VsY29tZS5tZFwiOiBcIi4vX3Bvc3RzL3dlbGNvbWUubWRcIlxufTtcblxuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXG5cdFx0dmFyIGlkID0gbWFwW3JlcV07XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL19wb3N0cyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tZCRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./_posts lazy recursive ^\\.\\/.*\\.md$\n");

/***/ }),

/***/ "./_posts sync \\.md$":
/*!****************************************!*\
  !*** ./_posts sync nonrecursive \.md$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./welcome.md\": \"./_posts/welcome.md\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./_posts sync \\\\.md$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fcG9zdHMgc3luYyBub25yZWN1cnNpdmUgXFwubWQkPzc3ODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9fcG9zdHMgc3luYyBcXC5tZCQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vd2VsY29tZS5tZFwiOiBcIi4vX3Bvc3RzL3dlbGNvbWUubWRcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9fcG9zdHMgc3luYyBcXFxcLm1kJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_posts sync \\.md$\n");

/***/ }),

/***/ "./_posts/welcome.md":
/*!***************************!*\
  !*** ./_posts/welcome.md ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"Welcome to Chris's blog!\\\"\\n---\\n\\n**Hello world**, this is my first Next.js blog post and it is written in Markdown.\\nI hope you like it!\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fcG9zdHMvd2VsY29tZS5tZD80OGRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsMk5BQTRKIiwiZmlsZSI6Ii4vX3Bvc3RzL3dlbGNvbWUubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwiV2VsY29tZSB0byBDaHJpcydzIGJsb2chXFxcIlxcbi0tLVxcblxcbioqSGVsbG8gd29ybGQqKiwgdGhpcyBpcyBteSBmaXJzdCBOZXh0LmpzIGJsb2cgcG9zdCBhbmQgaXQgaXMgd3JpdHRlbiBpbiBNYXJrZG93bi5cXG5JIGhvcGUgeW91IGxpa2UgaXQhXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_posts/welcome.md\n");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getAllPosts, getPostBySlug, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostBySlug\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConfig\", function() { return getConfig; });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ \"js-yaml\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getAllPosts = async () => {\n  const context = __webpack_require__(\"./_posts sync \\\\.md$\");\n\n  const posts = [];\n\n  for (const key of context.keys()) {\n    const post = key.slice(2);\n    const content = await __webpack_require__(\"./_posts lazy recursive ^\\\\.\\\\/.*$\")(`./${post}`);\n    const meta = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content.default);\n    posts.push({\n      slug: post.replace(\".md\", \"\"),\n      title: meta.data.title\n    });\n  }\n\n  return posts;\n};\n\nconst getPostBySlug = async slug => {\n  const fileContent = await __webpack_require__(\"./_posts lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(`./${slug}.md`);\n  const meta = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(fileContent.default);\n  const content = marked__WEBPACK_IMPORTED_MODULE_1___default()(meta.content);\n  return {\n    title: meta.data.title,\n    content: content\n  };\n};\n\nconst getConfig = async () => {\n  const config = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../config.yml */ \"./config.yml\"));\n  return js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(config.default);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanM/NmNjYyJdLCJuYW1lcyI6WyJnZXRBbGxQb3N0cyIsImNvbnRleHQiLCJyZXF1aXJlIiwicG9zdHMiLCJrZXkiLCJrZXlzIiwicG9zdCIsInNsaWNlIiwiY29udGVudCIsIm1ldGEiLCJtYXR0ZXIiLCJkZWZhdWx0IiwicHVzaCIsInNsdWciLCJyZXBsYWNlIiwidGl0bGUiLCJkYXRhIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpbGVDb250ZW50IiwibWFya2VkIiwiZ2V0Q29uZmlnIiwiY29uZmlnIiwieWFtbCIsInNhZmVMb2FkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsWUFBWTtBQUM5QixRQUFNQyxPQUFPLEdBQUdDLDJDQUFoQjs7QUFDQSxRQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFFQSxPQUFLLE1BQU1DLEdBQVgsSUFBa0JILE9BQU8sQ0FBQ0ksSUFBUixFQUFsQixFQUFrQztBQUNoQyxVQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsQ0FBYjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxNQUFNLDBEQUFRLEtBQVlGLElBQUssRUFBekIsQ0FBdEI7QUFDQSxVQUFNRyxJQUFJLEdBQUdDLGtEQUFNLENBQUNGLE9BQU8sQ0FBQ0csT0FBVCxDQUFuQjtBQUVBUixTQUFLLENBQUNTLElBQU4sQ0FBVztBQUNUQyxVQUFJLEVBQUVQLElBQUksQ0FBQ1EsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FERztBQUVUQyxXQUFLLEVBQUVOLElBQUksQ0FBQ08sSUFBTCxDQUFVRDtBQUZSLEtBQVg7QUFJRDs7QUFFRCxTQUFPWixLQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBLE1BQU1jLGFBQWEsR0FBRyxNQUFPSixJQUFQLElBQWdCO0FBQ3BDLFFBQU1LLFdBQVcsR0FBRyxNQUFNLCtEQUFRLEtBQVlMLElBQUssS0FBekIsQ0FBMUI7QUFDQSxRQUFNSixJQUFJLEdBQUdDLGtEQUFNLENBQUNRLFdBQVcsQ0FBQ1AsT0FBYixDQUFuQjtBQUNBLFFBQU1ILE9BQU8sR0FBR1csNkNBQU0sQ0FBQ1YsSUFBSSxDQUFDRCxPQUFOLENBQXRCO0FBRUEsU0FBTztBQUNMTyxTQUFLLEVBQUVOLElBQUksQ0FBQ08sSUFBTCxDQUFVRCxLQURaO0FBRUxQLFdBQU8sRUFBRUE7QUFGSixHQUFQO0FBSUQsQ0FURDs7QUFXQSxNQUFNWSxTQUFTLEdBQUcsWUFBWTtBQUM1QixRQUFNQyxNQUFNLEdBQUcsTUFBTSxrSEFBckI7QUFFQSxTQUFPQyw4Q0FBSSxDQUFDQyxRQUFMLENBQWNGLE1BQU0sQ0FBQ1YsT0FBckIsQ0FBUDtBQUNELENBSkQiLCJmaWxlIjoiLi9hcGkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgeWFtbCBmcm9tIFwianMteWFtbFwiO1xuXG5jb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4uL19wb3N0c1wiLCBmYWxzZSwgL1xcLm1kJC8pO1xuICBjb25zdCBwb3N0cyA9IFtdO1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIGNvbnRleHQua2V5cygpKSB7XG4gICAgY29uc3QgcG9zdCA9IGtleS5zbGljZSgyKTtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi9fcG9zdHMvJHtwb3N0fWApO1xuICAgIGNvbnN0IG1ldGEgPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcblxuICAgIHBvc3RzLnB1c2goe1xuICAgICAgc2x1ZzogcG9zdC5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxuICAgICAgdGl0bGU6IG1ldGEuZGF0YS50aXRsZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwb3N0cztcbn07XG5cbmNvbnN0IGdldFBvc3RCeVNsdWcgPSBhc3luYyAoc2x1ZykgPT4ge1xuICBjb25zdCBmaWxlQ29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vX3Bvc3RzLyR7c2x1Z30ubWRgKTtcbiAgY29uc3QgbWV0YSA9IG1hdHRlcihmaWxlQ29udGVudC5kZWZhdWx0KTtcbiAgY29uc3QgY29udGVudCA9IG1hcmtlZChtZXRhLmNvbnRlbnQpO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IG1ldGEuZGF0YS50aXRsZSxcbiAgICBjb250ZW50OiBjb250ZW50LFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q29uZmlnID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBpbXBvcnQoXCIuLi9jb25maWcueW1sXCIpO1xuXG4gIHJldHVybiB5YW1sLnNhZmVMb2FkKGNvbmZpZy5kZWZhdWx0KTtcbn07XG5cbmV4cG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0QnlTbHVnLCBnZXRDb25maWcgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/default */ \"./_layouts/default.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api */ \"./api/index.js\");\n\nvar _jsxFileName = \"/Users/chinds/workspace/chrishinds.dev/pages/index.js\";\n // api\n\n\n\nconst Home = ({\n  title,\n  description\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  title: title,\n  description: description,\n  children: \"Welcome to my site!\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 7,\n  columnNumber: 3\n}, undefined);\n\nasync function getStaticProps() {\n  const config = await Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"getConfig\"])(); //   const allPosts = await getAllPosts();\n\n  return {\n    props: {\n      title: config.title,\n      description: config.description\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25maWciLCJnZXRDb25maWciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxrQkFDWCxxRUFBQyx3REFBRDtBQUFlLE9BQUssRUFBRUQsS0FBdEI7QUFBNkIsYUFBVyxFQUFFQyxXQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQU1PLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLHNEQUFTLEVBQTlCLENBRHFDLENBRXJDOztBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xMLFdBQUssRUFBRUcsTUFBTSxDQUFDSCxLQURUO0FBRUxDLGlCQUFXLEVBQUVFLE1BQU0sQ0FBQ0Y7QUFGZjtBQURGLEdBQVA7QUFNRDtBQUVjRixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcIkBsYXlvdXRzL2RlZmF1bHRcIjtcblxuLy8gYXBpXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0Q29uZmlnIH0gZnJvbSBcIkBhcGlcIjtcblxuY29uc3QgSG9tZSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gIDxEZWZhdWx0TGF5b3V0IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufT5cbiAgICBXZWxjb21lIHRvIG15IHNpdGUhXG4gIDwvRGVmYXVsdExheW91dD5cbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgZ2V0Q29uZmlnKCk7XG4gIC8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiBjb25maWcudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "js-yaml":
/*!**************************!*\
  !*** external "js-yaml" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-yaml\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy15YW1sXCI/ZTNhMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqcy15YW1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMteWFtbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-yaml\n");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIj8yNWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcmtlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///marked\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });