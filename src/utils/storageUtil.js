let storageUtil = {
  set: function (key, value, expiredM) {
    /**
     * set 带过期时间的存储方法
     * @ param {String}     key 键
     * @ param {String}     value 值，
     * @ param {String}     expired 过期时间，以分钟为单位
     */
    let expiredTime = Date.now() + expiredM * 60000
    let item = {
      value: value,
      expired: expiredTime
    }
    let itemStr = JSON.stringify(item)
    localStorage.setItem(key, itemStr)
  },

  get: function (key) {
    /**
     * get 获取方法,须与set配套使用
     * @ param {String}     key 键
     */
    let valueStr = localStorage.getItem(key)
    if (valueStr != null) {
      let item = JSON.parse(valueStr)
      if (Date.now() >= item.expired) {
        localStorage.removeItem(key)
        return null
      } else {
        return item.value
      }
    } else {
      return null
    }
  }
};
export default storageUtil;
