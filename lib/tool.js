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

  function openLink(link, bNewWindow = false, bAddVersion = true, bLoading = true) {
    let bFoundVersion = (link.indexOf('?v=') != -1 || link.indexOf('&v=') != -1)
    if (bAddVersion && !bFoundVersion) {
      let ver = randomString(10)
      if (link.indexOf("?") == -1) {
        link = `${link}?v=${ver}`
      } else {
        link = `${link}&v=${ver}`
      }
    }
    if (bLoading) {
      showLoading()
    }
    if (bNewWindow) {
      let win = window.open(link)
      win.focus()
      hideLoading()
    } else {
      window.location.href = link
    }
  }

  function showLoading() {
    if (document.body == null) {
      return
    }

    if (document.getElementById('local_loading') == null) {
      var elem = document.createElement('div')
      elem.id = 'local_loading'
      elem.style.cssText = "display: none"
      elem.innerHTML = '<div  id="box-loading"><div class="lds-box-inside"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class="loading-text text-center">Loading...</div></div></div>'
      document.body.appendChild(elem)
      // $("body").append('<div id="local_loading" style="display: none"><div  id="box-loading"><div class="lds-box-inside"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class="loading-text text-center">Loading...</div></div></div></div>')
    }



    if (document.getElementById('local_loading') != null) {
      document.getElementById('local_loading').style.display = "block"
    }
    // $("div#local_loading").show()
  }

  function hideLoading() {
    if (document.getElementById('local_loading') != null) {
      document.getElementById('local_loading').style.display = "none"
    }
    // $("div#local_loading").hide()
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
    openLink: openLink,
    showLoading: showLoading,
    hideLoading: hideLoading,
  }

  return tool
})))
document.addEventListener("DOMContentLoaded", () => {
  var cssId = 'local_loading_css'  // you could encode the css path itself to generate id..
    if (document.getElementById(cssId) == null) {
      var head = document.getElementsByTagName('head')[0]
      var link = document.createElement('link')
      link.id = cssId
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = `https://tttue.github.io/cdn/lib/css/loading.css?v=123`
      link.media = 'all'
      head.appendChild(link)
    }
});
