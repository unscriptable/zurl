/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = extractFlat;

/**
 * Returns a value from a flat set of keys on an object literal.
 * @param {object} root - the object literal
 * @param {string} path - the key on the object literal
 * @returns {string}
 */
function extractFlat (root, path) {

	// skip leading slash
	if (path.charAt(0) === '/') path = path.slice(1);

	if (!(path in root)) {
		throw new Error(path + ': no such file or directory');
	}

	return root[path];
}
