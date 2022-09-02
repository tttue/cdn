(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.tool = factory());
}(this, (function () {
	'use strict';

  /**
   * Get random interger number from 0 to max, include max
   *
   * @param {int} max
   * @returns {int}
   */
	function getRandomInt(max) {
    const end = max + 1
    return Math.floor(Math.random() * Math.floor(end));
	}

  /**
   * Get random interger number in [begin..end], includes begin and end
   * @param {int} begin
   * @param {int} end
   * @returns {int}
   */
  function getRandomIntInRange(begin, end) {
    let ret = getRandomInt(end-begin) + begin
    return ret
  }

  function fillZeroForNumber(num, length) {
		var a = 10;
		var i = 1;
		var result = "" + num;
		while (i < length) {
			if (num < a) {
				result = "0" + result;
			}
			i++;
			a *= 10;
		}

		return result;
	}

  function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
  }

	var tool = {
		getRandomInt: getRandomInt,
    getRandomIntInRange: getRandomIntInRange,
		fillZeroForNumber: fillZeroForNumber,
    randomString: randomString
	}

	return tool;
})))
