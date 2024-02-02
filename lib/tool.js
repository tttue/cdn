(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.tool = factory())
}(this, (function () {
  'use strict'
  /**
   * Check string data is empty, None, undefined or not
   *
   * @param {String} data
   * @param {String} name
   */
  function checkStringNotBlank(data, name = "Param") {
    if (!data || /^\s+$/.test(data)) {
      return `${name} must be not blank`
    }
    return null
  }

  /**
   * Check string number is valid or not
   *
   * @param {String} data
   * @param {String} name
   * @param {boolean} isNotBlank
   */
  function checkNumber(data, name = "Param", isNotBlank = false) {
    if (isNotBlank) {
      const result = checkStringNotBlank(data, name)
      if (result) {
        return result
      }
    }
    const checkNumberS = /^[0-9]*$/

    if (!data) {
      return null
    } else if (!checkNumberS.test(data)) {
      return `${name}: wrong number format`
    }
    return null
  }

  /**
   * Check string date data is valid or not
   *
   * @param {String} data
   * @param {String} name
   * @param {boolean} isNotBlank
   */
  function checkDate(data, name = "Param", isNotBlank = false) {
    if (isNotBlank) {
      const result = checkStringNotBlank(data, name)
      if (result) {
        return result
      }
    }

    const checkDateS = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/

    if (!data) {
      return null
    } else if (!checkDateS.test(data)) {
      return `${name}: wrong date format`
    } else if (isNaN((new Date(data)).getTime())) {
      return `${name}: Invalid Date`
    }

    return null
  }

  function checkObjectNotBlank(obj, name = "Param") {
    if (!(obj)) {
      return `${name} must be not null or undefined`
    }
    if (isEmpty(obj)) {
      return `${name} must has at least 1 item`
    }
    return null
  }

  /**
   * Check obj has any key or not
   *
   * @param {Object} obj
   */
  function isEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key))
        return false
    }
    return true
  }


  /**
   * Check array of params is valid or not
   *
   * @param {Array} paramList
   * @param {*} done
   */
  const checkParams = (paramList, done) => {
    for (const elm of paramList) {
      const checkResult =
        Object.prototype.hasOwnProperty.call(elm, "isNotBlank") ?
          elm.checkFunc(elm.param, elm.paramName, elm.isNotBlank) :
          elm.checkFunc(elm.param, elm.paramName)
      if (checkResult) {
        done(null, { errorCode: -1, errorMsg: checkResult })
        return false
      }
    }
    return true
  }

  function sleep(time) {
    const d1 = new Date()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const d2 = new Date()
      if (d2 - d1 > time) {
        return
      }
    }
  }

  /**
   * Get random interger number from 0 to max, include max
   *
   * @param {int} max
   * @returns {int}
   */
  function getRandomInt(max) {
    const end = max + 1
    return Math.floor(Math.random() * Math.floor(end))
  }

  /**
   * Get random interger number in [begin..end], includes begin and end
   *
   * @param {int} begin
   * @param {int} end
   * @returns {int}
   */
  function getRandomIntInRange(begin, end) {
    let ret = getRandomInt(end - begin) + begin
    return ret
  }

  /**
   * Fill zero of number
   *
   * @param {int} num
   * @param {int} length
   * @returns {string}
   */
  function fillZeroForNumber(num, length) {
    var a = 10
    var i = 1
    var result = "" + num
    while (i < length) {
      if (num < a) {
        result = "0" + result
      }
      i++
      a *= 10
    }

    return result
  }

  /**
   * Create random string from [a..zA..Z0..9]
   *
   * @param {int} length
   * @returns {string}
   */
  function randomString(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  /**
   * Compare two arrays
   *
   * @param {array | string} a
   * @param {array | string} b
   * @returns
   */
  function compareArrays(a, b) {
    return a.length === b.length && Array.from(a).every((element, index) => element === b[index])
  }

  /**
   * Remove duplicate item in array
   * @param {array} a
   * @returns
   */
  function removeDuplicate(a) {
    // return [...new Set(a)]
    return Array.from(new Set(a.map(x => JSON.stringify(x)))).map(x => JSON.parse(x))
  }

  /**
   * Set cookie
   * @param {string} name
   * @param {*} value
   * @param {int} days
   */
  function setCookie(name, value, days) {
    var expires = ""
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
  }

  /**
   * Get cookie
   * @param {string} name
   * @returns
   */
  function getCookie(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  /**
   * Remove accents of vietnamese in string
   * @param {string} input
   * @returns
   */
  function remove_accents_vietnamese(input) {
    var str = input
    str = str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    str = str.replace(/đ/g, "d")
    // str = str.replace(/!|@|%|^|*|(|)|+|=|<|>|?|/ |,|.|:|;| '|"|&|#|[|]|~|$|_|`|-|{|}|||\/g," ");
    // str = str.replace(/ + /g, " ")
    str = str.trim()
    return str
  }

  var tool = {
    getRandomInt: getRandomInt,
    getRandomIntInRange: getRandomIntInRange,
    fillZeroForNumber: fillZeroForNumber,
    randomString: randomString,
    checkParams: checkParams,
    checkStringNotBlank: checkStringNotBlank,
    checkNumber: checkNumber,
    checkDate: checkDate,
    checkObjectNotBlank: checkObjectNotBlank,
    isEmpty: isEmpty,
    sleep: sleep,
    compareArrays: compareArrays,
    removeDuplicate: removeDuplicate,
    getCookie: getCookie,
    setCookie: setCookie,
    remove_accents_vietnamese: remove_accents_vietnamese,
  }

  return tool
})))
