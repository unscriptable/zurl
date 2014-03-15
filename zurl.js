/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultParser = require('./lib/zipUrl').parse;
var defaultCache = require('./lib/memoryCache').get;
var defaultFinder = require('./lib/xhrFinder');
var Zip = require('./lib/Zip');

module.exports = fetchFile;

/**
 * Creates a function that will find the zip file for a zipUrl.  Since the
 * Zip Archive standard (and related specs for Zip Urls) are not finalized,
 * the url parsing function can be injected.  A default parser is provided.
 * @param {function(zipUrl:string):string|Promise} findZip - a function
 * that can find a zip file by a zip url.
 * @param {function(url:string):object} parseUrl - a function that will
 * dissect a zip url into parts and returns an object with the important
 * parts: the rootUrl of the zip and the filePath within the zip.
 * @returns {function(zipUrl:string):Promise}
 */
function fetchFile (findZip, parseUrl) {

	if (!parseUrl) parseUrl = defaultParser;
	if (!findZip) findZip = defaultCache(defaultFinder);

	return function (zipUrl) {
		var parts = parseUrl(zipUrl);
		return findZip(parts.rootUrl).then(function (zipfile) {
			return new Zip(zipfile).read(parts.filePath);
		});
	};
}
