/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = extractHierarchical;

/**
 * Returns a value from a hierarchy of object literals by traversing the
 * object hierarchy.
 * @param {object} root - the root node of the object hierarchy
 * @param {string} path - the slash-separated traversal path
 * @returns {*} - typically, a string, but could be a node in the object
 * hierarchy (analogous to a file system directory).
 */
function extractHierarchical (root, path) {
	var keys, parent, node, key;

	// skip leading slash
	if (path.charAt(0) === '/') path = path.slice(1);

	// split on slash
	keys = path.split(/\//);

	// traverse
	parent = root;
	while (key = keys.shift()) {
		node = parent[key];
		if (!node) {
			throw new Error(path + ': no such file or directory');
		}
		parent = node;
	}

	return node;
}
