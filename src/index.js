/**
 * @author monkeywang
 * Date: 17/6/11
 */
import {chunk} from './arrayExtend/chunk'
import {contains} from './arrayExtend/contains'
import {unique} from './arrayExtend/unique'
import {throttle} from './functionExtend/throttle'

let extendJs = {
  chunk,
  contains,
  unique,
  throttle
}

window.extendJs = window._ = extendJs

export default extendJs
