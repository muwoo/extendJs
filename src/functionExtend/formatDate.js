/**
 * @author monkeywang
 * @param date 日期
 * @param format 需要格式的形式：yyyy/mm/dd hh:mm:ss 或 yyyy-mm-dd hh:mm:ss
 * @example
 * _.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss') // => 2017-7-21 19:28:30
 * _.formatDate(new Date(), 'yyyy/MM/dd') // => 2017/7/21
 */
export function formatDate (date, format) {
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1)
        ? (o[k])
        : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
