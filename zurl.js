/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultParser = require('./lib/zipUrl').parse;
var defaultCache = require('./lib/memoryCache').get;
var defaultFinder = require('./lib/xhrFinder');
var ZurlFile = require('./lib/ZurlFile');

module.exports = fetchFile;

/**
 * Creates a function that will find the zurl file for a zipUrl.  Since the
 * Zip Archive standard (and related specs for Zip Urls) are not finalized,
 * the url parsing function can be injected.  A default parser that complies
 * with the one of the alternatives in the current spec is provided.
 * @param {function(zipUrl:string):string|Promise} findZurl - a function
 * that can find a zurl file by a zip url.
 * @param {function(url:string):object} parseUrl - a function that will
 * dissect a zip url into parts and returns an object with the important
 * parts: the rootUrl of the zip and the filePath within the zip.
 * @returns {function(zipUrl:string):Promise}
 */
function fetchFile (findZurl, parseUrl) {

	if (!parseUrl) parseUrl = defaultParser;
	if (!findZurl) findZurl = defaultCache(defaultFinder);

	return function (zipUrl) {
		var parts = parseUrl(zipUrl);
		return findZurl(parts.rootUrl).then(function (zurlFile) {
			return new ZurlFile(zurlFile).read(parts.filePath);
		});
	};
}
