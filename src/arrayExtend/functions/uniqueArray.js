/**
 * @author monkeywang
 * @example
 * var a = [{q: 1}, {b: 2}, {q:1}, {c:3}]
 * var b = [1,2,2,3,4,5,5]
 * a[100] = {s: 3}
 * a.uniqueArray() // => [{q: 1}, {b: 2}]
 * b.uniqueArray() // => [1,2,3,4,5]
 */
import {containsArray} from './containsArray'
export function uniqueArray () {
  let newArray = []
  this.forEach(function (item) {
    if (containsArray.call(newArray, item) === -1) {
      newArray.push(item)
    }
  })
  return newArray
}
