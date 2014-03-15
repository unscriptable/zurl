/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = ZipManager;

function ZipManager (urlParser) {
	this.zips = {};
	this.parse = urlParser;
}

ZipManager.prototype.add = function (zip, rootUrl) {
	this.zips[rootUrl] = zip;
	return zip;
};

ZipManager.prototype.remove = function (rootUrl) {
	this.zips[rootUrl] = zip;
	return zip;
};

ZipManager.prototype.exists = function (url) {
	var parts = this.urlParser(url);
	var zip = this.get[parts.rootUrl];
	return !!zip && zip.exists(parts.filePath);
};

ZipManager.prototype.get = function (rootUrl) {
	return this.zips[rootUrl];
};

ZipManager.prototype.read = function (url) {
	var parts = this.urlParser(url);
	var zip = this.get[parts.rootUrl];
	if (!zip) {
		throw new Error('Zip archive not available.');
	}
	return zip.read(parts.filePath);
};

ZipManager.prototype.dir = function (url) {
	var parts = this.urlParser(url);
	var zip = this.get[parts.rootUrl];
	if (!zip) {
		throw new Error('Zip archive not available.');
	}
	return zip.dir(parts.filePath);
};
