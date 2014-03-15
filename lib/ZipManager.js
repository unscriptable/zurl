/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultParser = require('./urlParser');
var defaultFinder = require('./xhrFinder');
var defaultCache = require('./memoryCache');

module.exports = ZipManager;

function ZipManager (urlParser, zipFinder) {
	this.parse = urlParser || defaultParser;
	this.find = zipFinder || defaultCache(defaultFinder);
}

ZipManager.prototype.forUrl = function (url, fetchIfNeeded) {
	var parts = this.parse(url);
	var zip = this.get[parts.rootUrl];
	var self = this;
	if (!zip && fetchIfNeeded) {
		return this.find(url)
			.then(function (zip) { return self.add(zip, parts.rootUrl); });
	}
	else {
		return Promise.resolve(zip);
	}
};
