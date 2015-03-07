/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = stringEncode;

var map = { 34: '\\"', 13: '\\r', 12: '\\f', 10: '\\n', 9: '\\t', 8: '\\b' , 92: '\\\\'};
var encodeRx = /["\n\f\t\r\b\\]/g;

function stringEncode (text) {
	return text.replace(encodeRx, function (c) {
		return map[c.charCodeAt(0)];
	});
}
