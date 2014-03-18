/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = hydrateFromText;

var hydrate = new Function('zurl', 'return "(" + arguments[1] + ")";');

/**
 * Hydrates a text zurlFile into a value (typically, an object).
 * A `zurl()` function is injected into the scope when hydrating.  If this
 * function is called, the first parameter is used as the hydrated value.
 * The source is wrapped in parentheses, allowing the zurlFile to be JSON
 * or an object literal.
 * @param {string} source
 * @returns {*}
 *
 * @example Hydrate using zurl() function
 *     zurl({
 *         "foo/bar": "exports.bar = 42;",
 *         "foo/baz": "exports.baz = function () {};"
 *     });
 *
 * @example Hydrate as an object literal or JSON
 *     {
 *         "foo/bar": "exports.bar = 42;",
 *         "foo/baz": "exports.baz = function () {};"
 *     };
 *
 * @example Hydrate using zurl() function with custom hydrator
 *     (function (hydrate) {
 *         zurl(hydrate{
 *             "bar": "exports.bar = 42;",
 *             "baz": "exports.baz = function () {};"
 *         });
 *     }(function (data) {
 *         var z = {};
 *         for (var key in data) z['foo/' + key] = data[key];
 *         return z;
 *     }));
 */
function hydrateFromText (source) {
	return hydrate(callback, source);
}

function callback (data) {
	return data;
}
