/**
 * @author monkeywang
 * Date: 17/6/11
 */
import {chunk} from './arrayExtend/chunk'
import {contains} from './arrayExtend/contains'
import {unique} from './arrayExtend/unique'
import {throttle} from './functionExtend/throttle'
import {formatDate} from './functionExtend/formatDate'

let extendJs = {
  chunk,
  contains,
  unique,
  throttle,
  formatDate
}

window.extendJs = window._ = extendJs

export default extendJs
