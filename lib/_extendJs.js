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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = containsArray;
/**
 * @author monkeyWang
 * @param elem 需要判断的数组元素
 * @param array 数组
 * @param i 从第i个下标开始 默认为 0
 * @returns {*} 如果存在 返回数组下标 不存在则返回 -1
 * @example
 * 数组元素本身是个对象：
 * var a = [{q: 1}, {b: 2}]
 * a[100] = {s: 3}
 * var d = {s: 3}
 * a.contains(d) // => 100
 *
 * 数组元素为Number,String:
 * var a = [1, 2]
 * a[100] = 3
 * var d = 3
 * a.contains(d) // => 100
 */
function containsArray(elem, i) {
  let indexOf = Array.prototype.indexOf;
  /**
   * 如果有indexOf 方法则用改方法返回，核心为indexOf方法
   */
  if (indexOf && this.indexOf(elem) !== -1) {
    return this.indexOf(elem);
  } else {
    /**
     * 注意该条语句是给i赋值用的，猛的一看该语句可能产生混淆
     * 首先判断i的值，i ? （i < 0 ? Math.max( 0, len + i ) : i ）: 0 如果 i 未定义 或者i为0 则 把0赋值给i
     * 如果i 定义了并且不为0 执行 i < 0 ? Math.max( 0, len + i ) : i
     * 如果i 为负数，加上则为其加上数组长度，且其值不能小于0
     * @type {number}
     */
    i = i ? i < 0 ? Math.max(0, this.length + i) : i : 0;
    for (; i < this.length; i++) {
      /**
       * 这里 i in array 这么判断主要是考虑数组下标不连续的情况注意学习这种方式 比如稀疏数组
       * JSON.stringify() 为了适用对象数组 [{},{}]
       */
      if (i in this && JSON.stringify(this[i]) === JSON.stringify(elem)) {
        return i;
      }
    }
    return -1;
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_containsArray__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_uniqueArray__ = __webpack_require__(3);
/**
 * @author monkeywang
 * Date: 17/6/12
 */


let arrayExtend = {
  containsArray: __WEBPACK_IMPORTED_MODULE_0__functions_containsArray__["a" /* containsArray */],
  uniqueArray: __WEBPACK_IMPORTED_MODULE_1__functions_uniqueArray__["a" /* uniqueArray */]
};
/* harmony default export */ __webpack_exports__["a"] = (arrayExtend);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functions_throttle__ = __webpack_require__(4);
/**
 * @author monkeywang
 * Date: 17/6/25
 */


let fnExtend = {
  throttle: __WEBPACK_IMPORTED_MODULE_0__functions_throttle__["a" /* throttle */]
};
/* harmony default export */ __webpack_exports__["a"] = (fnExtend);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containsArray__ = __webpack_require__(0);
/**
 * @author monkeywang
 * @example
 * var a = [{q: 1}, {b: 2}, {q:1}, {c:3}]
 * var b = [1,2,2,3,4,5,5]
 * a[100] = {s: 3}
 * a.uniqueArray() // => [{q: 1}, {b: 2}]
 * b.uniqueArray() // => [1,2,3,4,5]
 */

function uniqueArray() {
  let newArray = [];
  this.forEach(function (item) {
    if (__WEBPACK_IMPORTED_MODULE_0__containsArray__["a" /* containsArray */].call(newArray, item) === -1) {
      newArray.push(item);
    }
  });
  return newArray;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/**
 * @author monkeywang
 * @param delay 延时的时间
 * @param atleast 最长等待时间执行
 * @example
 * var resize = function () {
 *   console.log('resize')
 * }
 *
 * window.onresize = resize.throttle(2000, 5000)
 */
function throttle(delay, atleast) {
  let timer = null;
  let previous = null;
  return () => {
    let now = +new Date();
    let args = arguments;
    previous = previous || now;
    if (atleast && now - previous > atleast) {
      this();
      previous = now;
      clearTimeout(timer);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.apply(this, args);
        previous = null;
      }, delay);
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayExtend_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functionExtend_index__ = __webpack_require__(2);
/**
 * @author monkeywang
 * Date: 17/6/11
 */


let extendJs = {
  ayExtend: __WEBPACK_IMPORTED_MODULE_0__arrayExtend_index__["a" /* default */],
  fnExtend: __WEBPACK_IMPORTED_MODULE_1__functionExtend_index__["a" /* default */]
};

window.extendJs = window._ = extendJs;

/* harmony default export */ __webpack_exports__["default"] = (extendJs);

/***/ })
/******/ ]);