(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.tool = factory());
}(this, (function () {
	'use strict';

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
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
		fillZeroForNumber: fillZeroForNumber,
    randomString, randomString
	}

	return tool;
})))
