/**
 * @author monkeywang
 * Date: 17/6/11
 */
import ayExtend from './arrayExtend/index'
import fnExtend from './functionExtend/index'
let extendJs = Object.assign({}, ayExtend, fnExtend)

window.extendJs = window._ = extendJs

export default extendJs
