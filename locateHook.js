/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultCreate = require('./lib/zipUrl').create;

module.exports = createLocateHook;

/**
 * Creates an ES6 Loader locate hook for zurl.  Provide your own nameToUrl
 * function if you would like to customize the functionality of zurl.
 * @param {function(name:string):string} nameToUrl
 * @returns {function}
 */
function createLocateHook (nameToUrl) {

	if (!nameToUrl) nameToUrl = defaultCreate;

	return function (load) {
		return nameToUrl(load.name);
	};
}
