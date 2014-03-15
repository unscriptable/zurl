/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

// TODO : we need a way to expire or remove urls

module.exports = function (finder, lsKeyGen) {
	var keyGen = lsKeyGen || defaultGen;
	return function (url) {
		var key = keyGen(url);
		var source = localStorage.getItem(key);
		if (source !== null) {
			return Promise.resolve(source);
		}
		else {
			return finder(url).then(function (source) {
				localStorage.setItem(key, source);
				return source;
			});
		}
	};
};

function defaultGen (url) {
	return 'zurl-' + url;
}
