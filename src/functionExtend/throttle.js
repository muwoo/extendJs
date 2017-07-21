/**
 * @author monkeywang
 * @param delay 延时的时间
 * @param atleast 最长等待时间执行
 * @example
 * var resize = function () {
 *   console.log('resize')
 * }
 *
 * window.onresize = throttle(resize, 2000, 5000)
 */
export function throttle (fn, delay, atleast) {
  let timer = null
  let previous = null
  return () => {
    let now = +new Date()
    let args = arguments
    previous = previous || now
    if (atleast && now - previous > atleast) {
      fn()
      previous = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(fn, args)
        previous = null
      }, delay)
    }
  }
}
