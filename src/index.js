/**
 * @author monkeywang
 * Date: 17/6/11
 */
import arrayExtend from './arrayExtend/index'
let extendJs = {
  arrayExtend
}
/**
 * 数组属性扩展
 * @param funcs
 */
let extendArray = function (funcs) {
  for (let func in funcs) {
    if (funcs.hasOwnProperty(func)) {
      console.log(func)
      Array.prototype[func] = funcs[func]
    }
  }
}
/**
 * 遍历 extendJs 写入相应扩展
 */
for (let ObjExtend in extendJs) {
  if (extendJs.hasOwnProperty(ObjExtend)) {
    switch (ObjExtend) {
      case 'arrayExtend':
        extendArray(arrayExtend)
        break
    }
  }
}

export default extendJs
