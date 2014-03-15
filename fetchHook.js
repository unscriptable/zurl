/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultFetch = require('./zurl');

module.exports = createFetchHook;

/**
 * Creates an ES6 Loader fetch hook for zurl.  Provide your own fetch function
 * if you would like to customize the functionality of zurl.
 * @param {function(url:string):string} [fetch]
 * @returns {function}
 */
function createFetchHook (fetch) {

	if (!fetch) fetch = defaultFetch;

	// create an ES6 Loader fetch hook
	return function (load) {
		// find the zip archive and fetch it if it's not local
		return fetch(load.address);
	};
}
