/**
 * @author monkeywang
 * @params array 需要去重的数组
 * @example
 * var a = [{q: 1}, {b: 2}, {q:1}, {c:3}]
 * var b = [1,2,2,3,4,5,5]
 * a[100] = {s: 3}
 * uniqueArray(a) // => [{q: 1}, {b: 2}]
 * uniqueArray(b) // => [1,2,3,4,5]
 */
import {contains} from './contains'
export function unique (array) {
  let newArray = []
  array.forEach(function (item) {
    if (contains(newArray, item) === -1) {
      newArray.push(item)
    }
  })
  return newArray
}
