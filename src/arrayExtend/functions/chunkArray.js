/**
 * @author monkeywang
 * @param size 切割数组的长度
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 *
 */
export function chunkArray (size) {
  size = Math.max(size, 0)
  const length = this === null ? 0 : this.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = this.slice(index, (index += size))
  }
  return result
}