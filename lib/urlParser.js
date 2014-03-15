/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = function (url) {
	var parts = url.split(/\$sub=/);
	if (parts.length < 2) {
		throw new Error('Malformed zip archive url: ' + url);
	}
	var rootUrl = parts.shift();
	var filePath = parts.pop();
	return {
		rootUrl: rootUrl,
		filePath: filePath
	}
};
