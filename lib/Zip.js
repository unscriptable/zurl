/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var extract = require('./extractFlat');

module.exports = Zip;

/**
 * Creates an object with methods for reading files out of a zip file.
 * @param {*} zip - an abstract zip fie structure. By default, this is
 * an object whose keys are file paths and whose values are text strings.
 * @param {function(zip,path:string):string} extractor - extracts a file from
 * a zip file, given a path.
 * @constructor
 */
function Zip (zip, extractor) {
	this.zip = zip;
}

/**
 * Reads the text file at a given path in the zip file.
 * @param {string} path
 * @returns {string}
 */
Zip.prototype.read = function (path) {
	var node = extract(this.zip, path);
	if (typeof node !== 'string') {
		throw new Error (path + ' is a directory.');
	}
	return node;
};

/**
 * Returns true if the given path exists in the zip file.
 * @param {string} path
 * @returns {boolean}
 */
Zip.prototype.exists = function (path) {
	try {
		return !!extract(this.zip, path);
	}
	catch (ex) {
		return false;
	}
};

///**
// * Returns the directory at the given path in the zip file as an array
// * of file names.
// * @param path
// * @returns {Array}
// */
//Zip.prototype.dir = function (path) {
//	var node = extract(this.zip, path), flist = [];
//	if (typeof node !== 'object') {
//		throw new Error (path + ' is a file.');
//	}
//	for (var key in node) flist.push(node[key]);
//	return flist;
//};

