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
export function throttle (delay, atleast) {
  let timer = null
  let previous = null
  return () => {
    let now = +new Date()
    let args = arguments
    previous = previous || now
    if (atleast && now - previous > atleast) {
      this()
      previous = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.apply(this, args)
        previous = null
      }, delay)
    }
  }
}
