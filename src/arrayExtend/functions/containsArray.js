/**
 * @author monkeyWang
 * @param elem 需要判断的数组元素
 * @param array 数组
 * @param i 从第i个下标开始 默认为 0
 * @returns {*} 如果存在 返回数组下标 不存在则返回 -1
 */
export function containsArray (elem, i) {
  let indexOf = Array.prototype.indexOf
  /**
   * 如果有indexOf 方法则用改方法返回，核心为indexOf方法
   */
  if (indexOf && this.indexOf(elem) !== -1) {
    return this.indexOf(elem)
  } else {
    /**
     * 注意该条语句是给i赋值用的，猛的一看该语句可能产生混淆
     * 首先判断i的值，i ? （i < 0 ? Math.max( 0, len + i ) : i ）: 0 如果 i 未定义 或者i为0 则 把0赋值给i
     * 如果i 定义了并且不为0 执行 i < 0 ? Math.max( 0, len + i ) : i
     * 如果i 为负数，加上则为其加上数组长度，且其值不能小于0
     * @type {number}
     */
    i = i ? i < 0 ? Math.max(0, this.length + i) : i : 0
    for (; i < this.length; i++) {
      /**
       * 这里 i in array 这么判断主要是考虑数组下标不连续的情况注意学习这种方式 比如稀疏数组
       * JSON.stringify() 为了适用对象数组 [{},{}]
       */
      if (i in this && JSON.stringify(this[i]) === JSON.stringify(elem)) {
        return i
      }
    }
    return -1
  }
}
