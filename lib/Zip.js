/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var extract = require('./extract');

module.exports = Zip;

function Zip (zip) {
	this.zip = zip;
}

Zip.prototype.read = function (zip, path) {
	var node = extract(zip, path);
	if (typeof node !== 'string') {
		throw new Error (path + ' is a directory.');
	}
	return node;
};

Zip.prototype.exists = function (path) {
	try {
		return !!extract(this.zip, path);
	}
	catch (ex) {
		return false;
	}
};

Zip.prototype.dir = function (path) {
	var node = extract(this.zip, path), flist = [];
	if (typeof node !== 'object') {
		throw new Error (path + ' is a file.');
	}
	for (var key in node) flist.push(node[key]);
	return flist;
};

