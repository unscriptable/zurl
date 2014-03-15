/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var extract = require('./extractFlat');

module.exports = ZurlFile;

/**
 * Creates an object with methods for reading files out of a zurl file.
 * @param {*} zurl - an abstract zip fie structure. By default, this is
 * an object whose keys are file paths and whose values are text strings.
 * @param {function(zurl,path:string):string} extractor - extracts a file from
 * a zurl file, given a path.
 * @constructor
 */
function ZurlFile (zurl, extractor) {
	this.zurl = zurl;
}

/**
 * Reads the text file at a given path in the zurl file.
 * @param {string} path
 * @returns {string}
 */
ZurlFile.prototype.read = function (path) {
	var node = extract(this.zurl, path);
	if (typeof node !== 'string') {
		throw new Error (path + ' is a directory.');
	}
	return node;
};

/**
 * Returns true if the given path exists in the zurl file.
 * @param {string} path
 * @returns {boolean}
 */
ZurlFile.prototype.exists = function (path) {
	try {
		return !!extract(this.zurl, path);
	}
	catch (ex) {
		return false;
	}
};

///**
// * Returns the directory at the given path in the zurl file as an array
// * of file names.
// * @param path
// * @returns {Array}
// */
//ZurlFile.prototype.dir = function (path) {
//	var node = extract(this.zurl, path), flist = [];
//	if (typeof node !== 'object') {
//		throw new Error (path + ' is a file.');
//	}
//	for (var key in node) flist.push(node[key]);
//	return flist;
//};

