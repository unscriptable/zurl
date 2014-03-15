/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var extract = require('./extract');

module.exports = Zip;

function Zip (files) {
	this.zip = files;
}

Zip.prototype.read = function (path) {
	var node = extract(this.files, path);
	if (typeof node !== 'string') {
		throw new Error (path + ' is a directory.');
	}
	return node;
};

Zip.prototype.exists = function (path) {
	try {
		return !!extract(this.files, path);
	}
	catch (ex) {
		return false;
	}
};

Zip.prototype.dir = function (path) {
	var node = extract(this.files, path), flist = [];
	if (typeof node !== 'object') {
		throw new Error (path + ' is a file.');
	}
	for (var key in node) flist.push(node[key]);
	return flist;
};

