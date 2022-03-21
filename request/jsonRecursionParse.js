/**
 * 递归解析json字符串
 * @param {string|Object} jsonStr 数据源
 * @returns {any}
 */
function jsonRecursionParse(jsonStr) {
  function recursion(res) {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        const value = res[key]
        if (
          typeof value === 'string' &&
          value.trim() !== '' &&
          (value.startsWith('[') || value.startsWith('{'))
        ) {
          try {
            res[key] = JSON.parse(value)
          } catch (error) {
            res[key] = value
          }
        }
        if (Array.isArray(res[key]) || typeof res[key] === 'object') {
          recursion(res[key])
        }
      }
    }
    return res
  }

  try {
    if (typeof jsonStr === 'string') {
      const res = JSON.parse(jsonStr)
      return recursion(res)
    } else {
      const res = JSON.parse(JSON.stringify(jsonStr))
      return recursion(res)
    }
  } catch (error) {
    return eval(`(${jsonStr})`)
  }
}

export default jsonRecursionParse
