/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var stringEncode = require('./lib/stringEncode');

module.exports = writer;

function writer () {
	var isFirst = true;
	return {
		start: function () {
			isFirst = true;
			return 'zurl(';
		},
		each: function (module) {
			var maybeComma = isFirst ? '' : ',';
			isFirst = false;
			return '\n' + maybeComma
				+ '\t"' + module.name + '": "'
				+ stringEncode(module.contents) + '"';
		},
		end: function () {
			isFirst = true;
			return '\n});'
		}
	}
}
