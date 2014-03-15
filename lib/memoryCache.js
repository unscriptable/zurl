/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var cache = {};

exports.get = get;
exports.clear = clear;

/**
 * Creates a function that retrieves a file from a finder function
 * unless the file has been cached in memory.  It caches the file in
 * memory (an object literal) when retrieved from the finder function.
 * @param {function(url:string):Promise} finder - a function that
 * fetches a zurl file via url.
 * @returns {function(url:string):string|Promise}
 */
function get (finder) {
	return function (url) {
		if (url in cache) {
			return Promise.resolve(cache[url]);
		}
		else {
			return finder(url).then(function (file) {
				return cache[url] = file;
			});
		}
	};
}

/**
 * Clears any zip files that are cached in memory by get().
 */
function clear () {
	cache = {};
}
