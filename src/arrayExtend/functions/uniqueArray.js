/**
 * @author monkeywang
 * Date: 17/6/21
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
