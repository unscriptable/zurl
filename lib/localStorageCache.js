/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.get = get;
exports.clear = clear;
exports.defaultGen = defaultGen;

/**
 * Creates a function that retrieves a file from a finder function
 * unless the file exists in localStorage.  It caches the file in
 * localStorage when retrieved from the finder function.
 * @param {function(url:string):Promise} finder - a function that
 * fetches a zip file via url.
 * @param {function(url:string):string} [lsKeyGen] - a function that
 * generates a unique localStorage key for a url.  By default, the generated
 * key is the concatenation of "zurl-" and the url. (@see defaultGen)
 * @returns {function(url:string):string|Promise}
 */
function get (finder, lsKeyGen) {
	var keyGen = lsKeyGen || defaultGen;
	return function (url) {
		var key = keyGen(url);
		if (key in localStorage) {
			return Promise.resolve(localStorage.getItem(key));
		}
		else {
			return finder(url).then(function (file) {
				localStorage.setItem(key, file);
				return file;
			});
		}
	};
}

/**
 * Clears any zip files that are cached in localStorage by get().
 */
function clear () {
	var i = localStorage.length, key;
	while (--i >= 0) {
		key = localStorage.key(i);
		if (/^zurl-/.test(key)) {
			localStorage.removeItem(key);
		}
	}
}

/**
 * Generates a unique key for a zip file placed in localStorage.  This key
 * should not conflict with other librries since it is prefixed with "zurl-".
 * @param {string} url
 * @returns {string}
 */
function defaultGen (url) {
	return 'zurl-' + url;
}
