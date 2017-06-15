/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_isInArray__ = __webpack_require__(2);
/**
 * @author monkeywang
 * Date: 17/6/12
 */

let arrayExtend = {
  isInArray: __WEBPACK_IMPORTED_MODULE_0__functions_isInArray__["a" /* isInArray */]
};
/* harmony default export */ __webpack_exports__["a"] = (arrayExtend);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayExtend_index__ = __webpack_require__(0);
/**
 * @author monkeywang
 * Date: 17/6/11
 */

let extendJs = {
  arrayExtend: __WEBPACK_IMPORTED_MODULE_0__arrayExtend_index__["a" /* default */]
};
window.x = window.extendJs = extendJs;

/* harmony default export */ __webpack_exports__["default"] = (extendJs);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInArray;
/**
 * @author monkeyWang
 * @param elem 需要判断的数组元素
 * @param array 数组
 * @param i 从第i个下标开始 默认为 0
 * @returns {*} 如果存在 返回数组下标 不存在则返回 -1
 */
function isInArray(elem, array, i) {
  let indexOf = Array.prototype.indexOf;
  /**
   * 如果有indexOf 方法则用改方法返回，核心为indexOf方法
   */
  if (indexOf && array.indexOf(elem) !== -1) {
    return array.indexOf(elem);
  } else {
    /**
     * 注意该条语句是给i赋值用的，猛的一看该语句可能产生混淆
     * 首先判断i的值，i ? （i < 0 ? Math.max( 0, len + i ) : i ）: 0 如果 i 未定义 或者i为0 则 把0赋值给i
     * 如果i 定义了并且不为0 执行 i < 0 ? Math.max( 0, len + i ) : i
     * 如果i 为负数，加上则为其加上数组长度，且其值不能小于0
     * @type {number}
     */
    i = i ? i < 0 ? Math.max(0, array.length + i) : i : 0;
    for (; i < array.length; i++) {
      /**
       * 这里 i in array 这么判断主要是考虑数组下标不连续的情况注意学习这种方式 比如稀疏数组
       * JSON.stringify() 为了适用对象数组 [{},{}]
       */
      if (i in array && JSON.stringify(array[i]) === JSON.stringify(elem)) {
        return i;
      }
    }
    return -1;
  }
}

/***/ })
/******/ ]);