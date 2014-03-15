/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.parse = parse;
exports.create = create;
exports.detect = detect;

var zipUrlDelim = '$sub=';
var zipUrlRx = new RegExp(zipUrlDelim, 'g');

/**
 * Parses the important bits out of a zip url.  At the moment, the important
 * bits are the root zip file and the file path within the zip file.  In the
 * proposed spec, there can be zip files within zip files.  For now, we're
 * ignoring those bits. :)
 * @param {string} zipUrl - the zipUrl to parse
 * @returns {{rootUrl:string, filePath:string}}
 */
function parse (zipUrl) {
	var parts = zipUrl.split(zipUrlRx);
	if (parts.length < 2) {
		throw new Error('Malformed zip archive url: ' + zipUrl);
	}
	var rootUrl = parts.shift();
	var filePath = parts.pop();
	return {
		rootUrl: rootUrl,
		filePath: filePath
	}
}

/**
 * Constructs a zip url from a rootUrl of a zip file and a filePath within
 * the zip.
 * @param {string} rootUrl - the url of the root zip file.
 * @param {string} filePath - the path of the file within the zip file.
 * @returns {string}
 */
function create (rootUrl, filePath) {
	return rootUrl + zipUrlDelim + filePath;
}

/**
 * Returns true if the url is recognized as a zip url.
 * @param {string} url
 * @returns {boolean}
 */
function detect (url) {
	return zipUrlRx.test(url);
}
