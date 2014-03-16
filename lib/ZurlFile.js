/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = ZurlFile;

/**
 * Creates an object with methods for reading files out of a zurl file.
 * @param {*} zurlFile - an abstract zip fie structure. By default, this is
 * an object whose keys are file paths and whose values are text strings.
 * a zurl file, given a path.
 * @param extract
 * @constructor
 */
function ZurlFile (zurlFile, extract) {
	this.extract = extract;
	this.zurl = zurlFile;
}

ZurlFile.prototype = {

	/**
	 * Reads the text file at a given path in the zurl file.
	 * @param {string} path
	 * @returns {string}
	 */
	read: function (path) {
		var node = this.extract(this.zurl, path);
		if (typeof node !== 'string') {
			throw new Error (path + ' is a directory.');
		}
		return node;
	},

	/**
	 * Returns true if the given path exists in the zurl file.
	 * @param {string} path
	 * @returns {boolean}
	 */
	exists: function (path) {
		try {
			return !!this.extract(this.zurl, path);
		}
		catch (ex) {
			return false;
		}
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

